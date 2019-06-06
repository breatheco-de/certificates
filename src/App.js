import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFViewer, Image, Font } from '@react-pdf/renderer';
import styled from "@react-pdf/styled-components";
import {  Notify } from "bc-react-notifier";
import moment from "moment";

Font.register({ family: 'Bold', src: "https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap", fontStyle: 'normal', fontWeight: 'heavy'});

function getUrlParameter(name) {
	var params = new URLSearchParams(window.location.search);
	return params.has(name) ? params.get(name) : null;
}

const HOST = "https://talenttree-alesanchezr.c9users.io";

class Certificate extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			cohort: getUrlParameter("cohort"),
			token: getUrlParameter("access_token"),
			student: getUrlParameter("student"),
			isLoaded: false,
			selectedCohort: null,
			selectedStudent: null,
			graduationDate: null,
			nameOfCohort: null,
			teachers: [],
			studentFirstName: null,
			studentStatus: null,
			studentLastName: null
		};
	}

	componentDidMount() {
		console.log("v1.0");
		if (this.state.cohort)
			fetch(
				HOST +
					"/cohort/" +
					this.state.cohort +
					"?access_token=" +
					this.state.token,
				{ method: "GET" }
			)
				.then(res => res.json())
				.then(json => {
          let aux = json.data["full_teachers"].map(t => t.full_name);
					this.setState({
						isLoaded: true,
						selectedCohort: json,
						nameOfCohort: json.data.name,
						graduationDate: json.data["ending_date"],
						teachers: aux
					});
				})
				.catch(err =>
					Notify.error(err.message || "there was a problem")
				);
		if (this.state.student)
			fetch(
				HOST +
					/student/ +
					this.state.student +
					"?access_token=" +
					this.state.token
			)
				.then(res => res.json())
				.then(json => {
					this.setState({
						isLoaded: true,
						selectedStudent: json,
						studentFirstName: json.data["first_name"],
						studentLastName: json.data["last_name"],
						studentStatus: json.data["status"]
					});
				})
				.catch(err =>
					Notify.error(err.message || "there was a problem")
				);
	}


  render(props) {
    let diploma=(
      <PDFViewer height="1000px" width="1600px">
      <Document>
          <Page {...props} size="A4" orientation="landscape" > 
          {/*Here is the first black row */}
              <View style={styles.firstRow}>
                <View style={styles.firstColumn}>
                    <View style={styles.textCenter}>
                        <FourGeeks>
                          <Text>4GEEKS ACADEMY</Text>
                        </FourGeeks>
                        <CodingSchool>
                          <Text style={styles.codingSchool} >CODING SCHOOL</Text>
                        </CodingSchool>
                    </View>
                </View>
                <View style={styles.secondColumn}>
                <Image
                    style={styles.image}
                    src="https://ucarecdn.com/f422469c-4d65-4daa-979f-e2ce93df68a6/-/resize/150x/"
                  />
                </View>
                <View style={styles.secondColumn}>
                    <View style={styles.textCenter}>
                        <FullStack>
                          <Text>FULL STACK</Text>
                        </FullStack>
                        <Development><Text style={styles.development} >DEVELOPMENT</Text></Development>
                    </View>
                </View>
              </View>
            {/* Here starts the middle of the certificate */}
              
                <View style={styles.secondRow}>
                  <RecognizesThat>
                    <Text >
                      RECOGNIZES THAT
                    </Text>
                  </RecognizesThat>
                  <FirstName>
                    <Text>
                    &lt;/{this.state.studentFirstName
                  ? this.state.studentFirstName
                  : "loading"}
                    </Text>
                  </FirstName>
                  <LastName>
                    <Text>
                    {this.state.studentLastName
                  ? this.state.studentLastName
                  : "loading"}&gt;
                    </Text>
                  </LastName>
                  <Text style={styles.colorDash}>
                    _________________________________
                  </Text>
                  <SuccesComplete>
                    <Text>
                      HAS SUCCESFULLY COMPLETED  
                    </Text>
                  </SuccesComplete>
                  <FullStackDevProgram>
                    <Text>
                    THE FULL STACK DEVELOPMENT PROGRAM
                    </Text>
                  </FullStackDevProgram>
                  <Hours>
                    <Text>
                    320+HOURS
                    </Text>
                  </Hours>
                  <NameOfCohort>
                  <Text>
                  {this.state.nameOfCohort}
                  </Text>
                  </NameOfCohort>
                  <GraduationDate>
                    <Text>
                    {moment(this.state.graduationDate).format(
                      "MMMM Do YYYY"
                  )} 
                    </Text>
                  </GraduationDate>
                </View>
              
              {/*this is the last row of the certificate*/}
              <View style={styles.thirdRow}>
                <View style={styles.firstColumn}>
                <View style={styles.textCenter}>
                        <SignatureDash>
                          <Text>___________________</Text>
                        </SignatureDash>
                        <InstructorName>
                          <Text style={styles.development} >{this.state.teachers[1]}</Text>
                        </InstructorName>
                        <LeadInstructor><Text style={styles.development} >Lead Instructor</Text></LeadInstructor>
                    </View>
                </View>
                <View style={styles.secondColumn}>
                <Image
                    style={styles.image}
                    src="https://ucarecdn.com/761d2f6c-366a-4df7-a2b9-e60d6f31e8f6/-/resize/700x/"
                  />
                </View>
                <View style={styles.secondColumn}>
                    <View style={styles.textCenter}>
                        <SignatureDash>
                          <Text>___________________</Text>
                        </SignatureDash>
                        <InstructorName><Text style={styles.bold} >ALEJANDRO SANCHEZ</Text></InstructorName>
                        <LeadInstructor> <Text>Co-founder and</Text></LeadInstructor>
                       <LeadInstructor><Text>Lead Instructor</Text></LeadInstructor>
                    </View>
                </View>
              </View>
          </Page>
        </Document>
  </PDFViewer>
    );
    let error = (
			<div className="display-1 text-center">
				<span className="text-danger">404</span> student has not
				graduated
			</div>);
    return (
      <div>
      {diploma}
      	{/*this.state.studentStatus == "studies_finished"
					? diploma
					: error*/}
      </div>
    )
  }
}






const styles = StyleSheet.create({
  colorDash:{
    color:"#44B2E4",
    textAlign:"center",
    marginTop:"0px",
    paddingTop:"0px"
  
    
  },
  textCenter:{
    textaAlign:"center",
    marginTop:"50px"
  },
  firstRow:{
    display:"flex",
    flexDirection: "row",
    backgroundColor: "black",
    height:"150px",
  },
  secondRow:{
    
    padding: "5px",
    height:"320px"
    
  },
  firstColumn:{
    width:"33.3%"
  },
  secondColumn:{
    width:"33.3%"
  },
  thirdColumn:{
   
    width:"33.3%"
  },
  image:{
    textaAlign:"center",
    margin:"auto",
    padding:"30px"
  },
  thirdRow:{
    
    display:"flex",
    flexDirection: "row",
    height:"125px",
   
    
  } 
});

const FullStack = styled.Text`
  font-size:25px;
  font-weight: bold;
  text-align:center;
  color:white;
`;
const CodingSchool = styled.Text`
  text-align:center;
  font-size:18px
  padding:1px;
  font-weight: bold;
  color:white;
  background-color:#44B2E4;
  margin: 0px 62px;
 
 
`;
const FourGeeks = styled.Text`
  text-align:center;
  font-size: 17px;
  color:white;
`;
const Development = styled.Text`
    text-align:center;  
    font-weight:bold;
    padding:1px;
    font-size:19px
    color:white;
    background-color:#F6B03F;
    margin: 0px 66px;
    
`;
const InstructorName = styled.Text`
  font-size:13px;
  font-weight: bold;
  text-align:center;
  color:black;
`;
const SignatureDash = styled.Text`
  font-size:19.5px;
  font-weight: bold;
  text-align:center;
  color:black;
  margin-bottom:4px;
`;
const LeadInstructor = styled.Text`
  font-size:10px;
  font-weight: bold;
  text-align:center;
  color:black;
`;
const RecognizesThat = styled.Text`
  margin-top:50px;
  margin-left:270px;
  font-size:12px;
  font-weight: bold;
  
  color:#44B2E4;
`;
const FirstName = styled.Text`
  font-size:50px;
  color:black;
  margin-left:230px;
  margin-bottom:0px;
  padding-bottom:0px;
`;
const LastName = styled.Text`
  font-size:50px;
  color:black;
  margin-left:336px;
  font-weight:900;
  margin-bottom:0px;
  padding-bottom:0px;
`;
const FullStackDevProgram = styled.Text`
font-size:10px;
text-align:center;
margin:2px 0px; 
`;
const SuccesComplete = styled.Text`
  font-size:10px;
  text-align:center;
  margin:2px 0px; 
`;
const Hours = styled.Text`
  font-size:20px;
  margin:3px 0px;
  text-align:center;
`;
const NameOfCohort = styled.Text`
  font-size:10px;
  text-align:center;
`;
const GraduationDate = styled.Text`
  text-align:center;
  margin:3px 0px;
  font-size:10px
`;




export default Certificate ;
