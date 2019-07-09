import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFViewer, Image, Font } from '@react-pdf/renderer';
import moment from "moment";
import styled from "@react-pdf/styled-components";

export const Diploma = (props) =>
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
                    <Text style={styles.recognizes} >
                      RECOGNIZES THAT
                    </Text>
                  </RecognizesThat>
                  <FirstName>
                    <Text style={styles.first_name}>
                    &lt;/{props.student
                  ? props.student.first_name
                  : "loading"}
                    </Text>
                  </FirstName>
                  <LastName>
                    <Text style={styles.last_name}>
                    { props.student
                  ? props.student.last_name
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
                  {props.cohort.name}
                  </Text>
                  </NameOfCohort>
                  <GraduationDate>
                    <Text>
                    {moment(props.cohort.ending_date).format(
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
                          <Text style={styles.bold} >{props.cohort ? props.cohort.full_teachers[0].full_name : 'Loading...'}</Text>
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
  </PDFViewer>;

  const styles = StyleSheet.create({
  first_name:{
    fontFamily:"Helvetica",
    fontWeight:"100",
  },
  last_name:{
    fontFamily:"Helvetica-Bold",
    fontWeight:"heavy",

  },
  recognizes:{
    fontFamily:"Helvetica-Bold",
    fontWeight:"500"

  },
  bold:{
    fontFamily:"Helvetica-Bold",

  },
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
  font-weight:100
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
font-family:Helvetica-Bold
font-size:10px;
text-align:center;
margin:2px 0px;
`;
const SuccesComplete = styled.Text`
font-family:Helvetica-Bold
  font-size:10px;
  text-align:center;
  margin:2px 0px;
`;
const Hours = styled.Text`

  font-family:Helvetica-Bold
  font-size:20px;
  margin:3px 0px;
  text-align:center;
`;
const NameOfCohort = styled.Text`
font-family:Helvetica-Bold
  font-size:10px;
  text-align:center;
`;
const GraduationDate = styled.Text`
  font-family:Helvetica-Bold
  text-align:center;
  margin:3px 0px;
  font-size:10px
`;