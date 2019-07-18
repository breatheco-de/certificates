import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFViewer, Image } from '@react-pdf/renderer';
import moment from "moment";
import styled from "@react-pdf/styled-components";
import Spinner from 'react-spinner-material';

let studentNameMarginLeft = "250px";
let studentNamePaddingTop = "0px";
export const Diploma = (props) => {
    const first = props.student.first_name;
    const last = props.student.last_name;
    const student = props.student;
    return((!props.cohort || !props.student) ?
    <div className="loading">
        <Spinner size={120} spinnerColor={"#44B2E4"} spinnerWidth={2} visible={true} />
    </div>
    :
    <PDFViewer height="1000px" width="1620px">
        <Document>
            <Page {...props} size="A4" orientation="landscape" style={styles.pageSet}>

                {/*Here is the first white row */}

                <View style={styles.printTopRow}>
                    <View style={styles.printTopRowColumnLeft}>
                        <FourCornersTopLeft>
                            <Text></Text>
                        </FourCornersTopLeft>
                    </View>
                    <View style={styles.printTopRowColumnCenter}></View>
                    <View style={styles.printTopRowColumnRight}>
                        <FourCornersTopRight>
                            <Text></Text>
                        </FourCornersTopRight>
                    </View>
                </View>

                {/*Here is the first black row */}

                <View style={styles.firstRow}>
                    <View style={styles.printTopRowColumnLeft}></View>
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
                    <View style={styles.thirdColumn}>
                        <View style={styles.textLeft}>
                            <FullStack>
                                <Text>FULL STACK</Text>
                            </FullStack>
                            <Development>
                                <Text style={styles.development} >DEVELOPMENT</Text>
                            </Development>
                        </View>
                    </View>
                    <View style={styles.printTopRowColumnRight}></View>
                </View>

                {/* Here starts the middle of the certificate */}

                <View style={styles.secondRow}>
                    <View style={styles.printTopRowColumnLeft}></View>
                    <View style={styles.printSecondRowColumnCenter}>
                        <RecognizesThat>
                            <Text style={styles.recognizes} >
                                RECOGNIZES THAT
                            </Text>
                        </RecognizesThat>
                        {
                        (student
                            ?   (first && last
                                ?   (first.length < 6 && last.length < 6
                                    ?   (<View><FirstNameShortVersion>
                                            <Text style={styles.first_name}>&lt;/{first}</Text>
                                        </FirstNameShortVersion>
                                        <LastNameShortVersion >
                                            <Text style={styles.last_name}>{last}&gt;</Text>
                                        </LastNameShortVersion>
                                        </View>)
                                    : ((<View><FirstName>
                                            <Text style={styles.first_name}>&lt;/{first}</Text>
                                        </FirstName>
                                        <LastName>
                                            <Text style={styles.last_name}>{last}&gt;</Text>
                                        </LastName>
                                        </View>)
                                        ))
                                :   (first

                                    ?   (<SingleNameVersion>
                                            <Text style={styles.first_name}>&lt;/{first}&gt;</Text>
                                        </SingleNameVersion>)

                                    :   (<SingleNameVersion>
                                            <Text style={styles.last_name}>&lt;/{last}&gt;</Text>
                                        </SingleNameVersion>)

                                    )
                                )
                            : "Loading"
                        )}

                        <Text style={styles.colorDash}>
                            _________________________________
                        </Text>
                        <SuccesComplete>
                            <Text>
                                HAS SUCCESSFULLY COMPLETED
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
                    <View style={styles.printTopRowColumnRight}></View>
                </View>

                {/*this is the last row of the certificate*/}

                <View style={styles.thirdRow}>
                    <View style={styles.printTopRowColumnLeft}></View>
                        <View style={styles.firstColumn}>
                            <View style={styles.textCenter}>
                                <SignatureDash>
                                    <Text>___________________</Text>
                                </SignatureDash>
                                <InstructorName>
                                    <Text style={styles.bold} >{props.cohort ? props.cohort.full_teachers[0].full_name : 'Loading...'}</Text>
                                </InstructorName>
                                <LeadInstructor>
                                    <Text style={styles.development} >Lead Instructor</Text>
                                </LeadInstructor>
                            </View>
                        </View>
                        <View style={styles.secondColumn}>
                            <Image
                                style={styles.image}
                                src="https://ucarecdn.com/761d2f6c-366a-4df7-a2b9-e60d6f31e8f6/-/resize/700x/"
                            />
                        </View>
                        <View style={styles.thirdColumn}>
                            <View style={styles.textLeft}>
                                <SignatureDash>
                                    <Text>___________________</Text>
                                </SignatureDash>
                                <InstructorName>
                                    <Text style={styles.bold} >ALEJANDRO SANCHEZ</Text>
                                </InstructorName>
                                <LeadInstructor>
                                    <Text>Co-founder and</Text>
                                </LeadInstructor>
                                <LeadInstructor>
                                    <Text>Lead Instructor</Text>
                                </LeadInstructor>
                            </View>
                        </View>
                    <View style={styles.printTopRowColumnRight}></View>
              </View>
              <View style={styles.printBottomRow}>
                    <View style={styles.printTopRowColumnLeft}>
                        <FourCornersBottomLeft>
                            <Text></Text>
                        </FourCornersBottomLeft>
                    </View>
                    <View style={styles.printTopRowColumnCenter}></View>
                    <View style={styles.printTopRowColumnRight}>
                        <FourCornersBottomRight>
                            <Text></Text>
                        </FourCornersBottomRight>
                    </View>
                </View>
            </Page>
        </Document>
    </PDFViewer>)};

  const styles = StyleSheet.create({
first_name:{
    fontFamily:"Helvetica",
    fontWeight:"100",
},

last_name:{
    fontFamily:"Helvetica-Bold",
    fontWeight:"heavy"

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
    marginTop:"50px",
    marginLeft:"35px"
},
textLeft:{
    textAlign:"right",
    marginTop: "50px",
    marginRight:"20px"
},
firstRow:{
    display:"flex",
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "black",
    height:"150px",
    width: "100%"
},
secondRow:{
    // padding: "5px",
    display:"flex",
    flexDirection: "row",
    height:"290px"
},
firstColumn:{
    width:"31%",
    display:"flex",
    flexDirection: "column"

},
secondColumn:{
    width:"34%"
},
thirdColumn:{
    width:"31%"
},
image:{
    textaAlign:"center",
    margin:"auto",
    padding:"30px"
},
thirdRow:{
    display:"flex",
    flexDirection: "row",
    height:"125px"
},
printTopRow:
{
    display:"flex",
    flexDirection: "row",
    height:"15px",
    backgroundColor:"white"
},
printTopRowColumnLeft:
{
    width: "2%",
    backgroundColor:"white"

},
printSecondRowColumnCenter:
{
    width:"96%",
    backgroundColor:"white",
    display:"flex",
    flexDirection: "column"
},
printTopRowColumnCenter:
{
    width: "96%",
    backgroundColor:"white",
    height: "15px"
},
printTopRowColumnRight:
{
    width: "2%",
    backgroundColor:"white"
},
printBottomRow:
{
    display:"flex",
    flexDirection: "row",
    height:"15px",
    backgroundColor:"white"
}
});

const FullStack = styled.Text`
  font-size:25px;
  font-weight: bold;
  text-align:center;
  color:white;
`;
const FourCornersTopLeft = styled.Text`
  border-bottom: 0.5px solid grey;
  border-bottom-width: 0.5px;
  border-bottom-style: solid;
  border-bottom-color: grey;
  height: 100%;
  border-right-width: 0.5px;
  border-right-style: solid;
  border-right-color: grey;
`;
const FourCornersTopRight = styled.Text`
  border-bottom-width: 0.5px;
  border-bottom-style: solid;
  border-bottom-color: grey;
  height: 100%;
  border-left-width: 0.5px;
  border-left-style: solid;
  border-left-color: grey;
`;
const FourCornersBottomLeft = styled.Text`
  border-top-width: 0.5px;
  border-top-style: solid;
  border-top-color: grey;
  height: 100%;
  border-right-width: 0.5px;
  border-right-style: solid;
  border-right-color: grey;
`;
const FourCornersBottomRight = styled.Text`
  border-top-width: 0.5px;
  border-top-style: solid;
  border-top-color: grey;
  height: 100%;
  border-left-width: 0.5px;
  border-left-style: solid;
  border-left-color: grey;
`;
const CodingSchool = styled.Text`
  text-align:left;
  font-size:18px
  padding:1px;
  font-weight: bold;
  color:white;
  background-color:#44B2E4;
  margin: 0 auto;




`;
const FourGeeks = styled.Text`
  text-align:center;
  font-size: 17px;
  color:white;
`;
const Development = styled.Text`
    text-align:left;
    font-weight:bold;
    padding:1px;
    font-size:19px
    color:white;
    background-color:#F6B03F;
    margin: 0 auto;



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
  margin-left:${studentNameMarginLeft};
  paddingTop:${studentNamePaddingTop};
  margin-bottom:0px;
  padding-bottom:0px;
`;
const SingleNameVersion = styled.Text`
  font-weight:100
  font-size:50px;
  color:black;
  text-align:center;
  padding:20px 0px;
`;

const LastName = styled.Text`
  font-size:50px;
  color:black;
  margin-left:416px;
  font-weight:900;
  margin-bottom:0px;
  padding-bottom:0px;
`;
const FirstNameShortVersion = styled.Text`
  font-weight:100
  font-size:50px;
  color:black;
  margin-left:300px;
  paddingTop:${studentNamePaddingTop};
  margin-bottom:0px;
  padding-bottom:0px;
`;
const LastNameShortVersion = styled.Text`
  font-size:50px;
  color:black;
  margin-left:380px;
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
  margin:5px 0px;
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