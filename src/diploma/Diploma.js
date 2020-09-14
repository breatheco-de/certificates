import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFViewer, Image, Canvas, Font } from '@react-pdf/renderer';
import styled from "@react-pdf/styled-components";
import Spinner from 'react-spinner-material';
import { Notifier } from "bc-react-notifier";
import LanguageSwitcher from "../components/LanguageSwitcher/language-switcher";
import * as dayjs from 'dayjs';
import 'dayjs/locale/es';
import en from "./en";
import es from "./es";


let studentNameMarginLeft = "220px";
let studentNamePaddingTop = "0px";
export const Diploma = (props) => {
    const { signed_by, signed_by_role, student, cohort, academy, specialty, lang, token, certificateStyle, created_at, size } = props;
    const certSt = certificateStyle || "default";
    const date = dayjs(created_at).locale(lang || "en").format("DD MMMM YYYY");
    let translation = en;
    if (lang === "es") {
        translation = es;
    }
    return ((!student) ?
        <div className="loading">
            <Spinner size={120} spinnerColor={"#44B2E4"} spinnerWidth={2} visible={true} />
        </div>
        : (certSt === "default"
            ? (<div><PDFViewer height={size ? size.height : "1000px"} width={size ? size.width : "1620px"}>
                <Document>
                    <Page {...props}  size="A4" orientation="landscape" style={styles.pageSet} >

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

                        <View style={[styles.firstRow, { backgroundColor: "black" }]}>
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
                                        <Text>{lang === "es" ? translation["Development"].toLocaleUpperCase() : translation["Full Stack"].toLocaleUpperCase()}</Text>
                                    </FullStack>
                                    <Development>
                                        <Text style={styles.development} >{lang === "es" ? translation["Full Stack"].toLocaleUpperCase() : translation["Development"].toLocaleUpperCase()}</Text>
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
                                        {translation["Recognizes that"].toLocaleUpperCase()}
                                    </Text>
                                </RecognizesThat>
                                {
                                    (student
                                        ? (student.first_name && student.last_name
                                            ? (student.first_name.length < 6 && student.last_name.length < 6
                                                ? (<View><FirstNameShortVersion>
                                                    <Text style={styles.first_name}>&lt;/{student.first_name}</Text>
                                                </FirstNameShortVersion>
                                                    <LastNameShortVersion >
                                                        <Text style={styles.last_name}>{student.last_name}&gt;</Text>
                                                    </LastNameShortVersion>
                                                </View>)
                                                : ((<View><FirstName>
                                                    <Text style={styles.first_name}>&lt;/{student.first_name}</Text>
                                                </FirstName>
                                                    <LastName>
                                                        <Text style={styles.last_name}>{student.last_name}&gt;</Text>
                                                    </LastName>
                                                </View>)
                                                ))
                                            : (student.first_name

                                                ? (<SingleNameVersion>
                                                    <Text style={styles.first_name}>&lt;/{student.first_name}&gt;</Text>
                                                </SingleNameVersion>)

                                                : (<SingleNameVersion>
                                                    <Text style={styles.last_name}>&lt;/{student.last_name}&gt;</Text>
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
                                        {translation["Has Successfully Completed"].toLocaleUpperCase()}
                                    </Text>
                                </SuccesComplete>
                                <FullStackDevProgram>
                                    <Text>
                                        {translation["The Full Stack Development Program"].toLocaleUpperCase()}
                                    </Text>
                                </FullStackDevProgram>
                                <Hours>
                                    <Text>
                                        {specialty.duration_in_hours} {translation["Hours"].toLocaleUpperCase()}
                                    </Text>
                                </Hours>
                                <NameOfCohort>
                                    <Text>
                                        {"4Geeks Academy Madrid"}
                                    </Text>
                                </NameOfCohort>
                                <GraduationDate>
                                    <Text>{date}</Text>
                                </GraduationDate>
                            </View>
                            <View style={styles.printTopRowColumnRight}></View>
                        </View>

                        {/*this is the last row of the certificate*/}

                        <View style={styles.thirdRow}>
                            <View style={styles.printTopRowColumnLeft}></View>
                            <View style={styles.firstColumn}>
                                <Image
                                    style={styles.image}
                                    src="https://ucarecdn.com/761d2f6c-366a-4df7-a2b9-e60d6f31e8f6/-/resize/700x/"
                                />
                            </View> 
                            <View style={styles.secondColumn}>
                            </View>
                            <View style={styles.thirdColumn}>
                                <View style={styles.textLeft}>
                                    <Signature>
                                       <Text style={styles.signature}>{signed_by}</Text>  
                                    </Signature>
                                    <SignatureDash>
                                        <Text> ___________________ </Text>
                                    </SignatureDash>
                                    <InstructorName>
                                        <Text style={styles.bold} >{signed_by.toUpperCase()}</Text>
                                    </InstructorName>
                                    <LeadInstructor>
                                        <Text>{signed_by_role}</Text>
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
                            <View style={styles.printTopRowColumnCenter}>
                                <Text>{"Verify this certificate at https://certificate.breatheco.de/" + token}</Text>
                            </View>
                            <View style={styles.printTopRowColumnRight}>
                                <FourCornersBottomRight>
                                    <Text></Text>
                                </FourCornersBottomRight>
                            </View>
                        </View>
                    </Page>
                </Document>
            </PDFViewer>
                <LanguageSwitcher translations={["es", "en"]} current={lang} onClick={(lang) => { window.location.href = `/pdf/${token}?lang=${lang}` }} /></div>)
            : (certSt === "modern"
                ? (
                    <div>
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
                                                    <Text>{lang === "es" ? translation["Development"].toLocaleUpperCase() : translation["Full Stack"].toLocaleUpperCase()}</Text>
                                                </FullStack>
                                                <Development>
                                                    <Text style={styles.development} >{lang === "es" ? translation["Full Stack"].toLocaleUpperCase() : translation["Development"].toLocaleUpperCase()}</Text>
                                                </Development>
                                            </View>
                                        </View>
                                        <View style={styles.printTopRowColumnRight}></View>

                                    </View>

                                    <View style={styles.roundedRowModern}>
                                        <View style={styles.printTopRowColumnLeft}></View>
                                        <View style={styles.printTopRowColumnCenter}>
                                            <Canvas style={styles.square} paint={
                                                (j) => { j.path('M 0 0 C 200 100 550 100 810 0 Z').fill("black").stroke('black') }}>
                                            </Canvas>
                                        </View>
                                        <View style={styles.printTopRowColumnRight}></View>
                                    </View>



                                    {/* Here starts the middle of the certificate */}

                                    <View style={styles.secondRowModern}>
                                        <View style={styles.printTopRowColumnLeft}></View>
                                        <View style={styles.printSecondRowColumnCenter}>
                                            <RecognizesThat>
                                                <Text style={styles.recognizes} >
                                                    {translation["Recognizes that"].toUpperCase()}
                                                </Text>
                                            </RecognizesThat>
                                            {
                                                (student
                                                    ? (student.first_name && student.last_name
                                                        ? (student.first_name.length < 6 && student.last_name.length < 6
                                                            ? (<View><FirstNameShortVersion>
                                                                <Text style={styles.first_name}>&lt;/{student.first_name}</Text>
                                                            </FirstNameShortVersion>
                                                                <LastNameShortVersion >
                                                                    <Text style={styles.last_name}>{student.last_name}&gt;</Text>
                                                                </LastNameShortVersion>
                                                            </View>)
                                                            : ((<View><FirstName>
                                                                <Text style={styles.first_name}>&lt;/{student.first_name}</Text>
                                                            </FirstName>
                                                                <LastName>
                                                                    <Text style={styles.last_name}>{student.last_name}&gt;</Text>
                                                                </LastName>
                                                            </View>)
                                                            ))
                                                        : (student.first_name

                                                            ? (<SingleNameVersion>
                                                                <Text style={styles.first_name}>&lt;/{student.first_name}&gt;</Text>
                                                            </SingleNameVersion>)

                                                            : (<SingleNameVersion>
                                                                <Text style={styles.last_name}>&lt;/{student.last_name}&gt;</Text>
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
                                                    {translation["Has Successfully Completed"].toUpperCase()}
                                                </Text>
                                            </SuccesComplete>
                                            <FullStackDevProgram>
                                                <Text>
                                                    {translation["The Full Stack Development Program"].toUpperCase()}
                                                </Text>
                                            </FullStackDevProgram>
                                            <Hours>
                                                <Text>
                                                    {specialty.duration_in_hours} {translation["Hours"].toUpperCase()}
                                                </Text>
                                            </Hours>
                                            <NameOfCohort>
                                                <Text>
                                                    {cohort.name}
                                                </Text>
                                            </NameOfCohort>
                                            <GraduationDate>
                                                <Text>{date}</Text>
                                            </GraduationDate>
                                        </View>
                                        <View style={styles.printTopRowColumnRight}></View>
                                    </View>

                                    {/*this is the last row of the certificate*/}

                                    <View style={styles.thirdRowModern}>
                                        <View style={styles.printTopRowColumnLeft}></View>
                                        <View style={styles.thirdRowFirstColumnModern}>
                                            <Image
                                                style={styles.image}
                                                src="https://ucarecdn.com/761d2f6c-366a-4df7-a2b9-e60d6f31e8f6/-/resize/700x/"
                                            />
                                        </View>
                                        <View style={styles.thirdRowSecondColumnModern}>

                                        </View>
                                        <View style={styles.thirdRowThirdColumnModern}>
                                            <View style={styles.textLeft}>
                                                <SignatureDash>
                                                    <Text >{signed_by}</Text>
                                                    <Text> ___________________ </Text>
                                                </SignatureDash>
                                                <InstructorName>
                                                    <Text style={styles.bold} >{signed_by}</Text>
                                                </InstructorName>
                                                <LeadInstructor>
                                                    <Text>{signed_by_role}</Text>
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
                        </PDFViewer>
                        <LanguageSwitcher translations={["es", "en"]} current={lang} onClick={(lang) => { window.location.href = `/pdf/${token}?lang=${lang}` }} /></div>
                ) : (<div className="container">
                    <Notifier />
                    <ul className="bcnotifier">
                        <li>The style has to be either <b>default</b> or <b>modern</b></li>
                    </ul>
                </div>))
                
        )
    )
}

Font.register({ 
    family: 'Great Vibes', 
    src: "https://4geeks-academy-main.s3-us-west-2.amazonaws.com/fonts/GreatVibes-Regular.ttf", 
});


const styles = StyleSheet.create({
    first_name: {
        fontFamily: "Helvetica",
        fontWeight: "100",
    },
    square: {
        height: '100px',
        width: '100%'

    },
    signature:{
      fontFamily:"Great Vibes",
      fontSize:30,
      letterSpacing:3,
    },
    last_name: {
        fontFamily: "Helvetica-Bold",
        fontWeight: "heavy"
    },
    recognizes: {
        fontFamily: "Helvetica-Bold",
        fontWeight: "500"

    },
    bold: {
        fontFamily: "Helvetica-Bold",
    },
    colorDash: {
        color: "#44B2E4",
        textAlign: "center",
        marginTop: "0px",
        paddingTop: "0px"


    },
    textCenter: {
        textaAlign: "center",
        marginTop: "50px",
        marginLeft: "35px"
    },
    textLeft: {
        textAlign: "right",
        marginTop: "50px",
        marginRight: "20px"
    },
    firstRow: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "black",
        height: "150px",
        width: "100%"
    },
    roundedRowModern: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        height: "75px",
        width: "100%"
    },
    secondRowModern: {
        // padding: "5px",
        display: "flex",
        flexDirection: "row",
        height: "225px"
    },
    secondRow: {
        // padding: "5px",
        display: "flex",
        flexDirection: "row",
        height: "280px",
        width: "100%"
    },
    thirdRowFirstColumnModern: {
        width: "31%",
        display: "flex",
        flexDirection: "column"
    },
    thirdRowSecondColumnModern: {
        width: "34%"
    },
    thirdRowThirdColumnModern: {
        width: "31%"
    },

    firstColumn: {
        width: "31%",
        display: "flex",
        flexDirection: "column"

    },
    secondColumn: {
        width: "34%"
    },
    thirdColumn: {
        width: "31%",
    },
    image: {
        textaAlign: "center",
        margin: "auto",
        padding: "10px",
        paddingTop:"60px"
    },
    thirdRow: {
        display: "flex",
        flexDirection: "row",
        height: "135px"
    },
    thirdRowModern: {
        display: "flex",
        flexDirection: "row",
        height: "115px"
    },
    printTopRow:
    {
        display: "flex",
        flexDirection: "row",
        height: "15px",
        backgroundColor: "white"
    },
    printTopRowColumnLeft:
    {
        width: "2%",
        backgroundColor: "white"

    },
    printSecondRowColumnCenter:
    {
        width: "96%",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column"
    },
    printTopRowColumnCenter:
    {
        width: "96%",
        backgroundColor: "white",
        height: "30px",
        textaAlign:"center",
        paddingLeft: 200,
        fontSize: 9
    },
    printTopRowColumnRight:
    {
        width: "2%",
        backgroundColor: "white",
    },
    printBottomRow:
    {
        display: "flex",
        flexDirection: "row",
        height: "15px",
        backgroundColor: "white"
    }
});

const FullStack = styled.Text`
  font-size:25px;
  font-weight: bold;
  text-align:center;
  color:white;
`;
const FourCornersTopLeft = styled.Text`

  border-bottom-width: 0.5px;
  border-bottom-style: solid;
  border-bottom-color: red;
  height: 100%;
  border-right-width: 0.5px;
  border-right-style: solid;
  border-right-color: red;
`;
const FourCornersTopRight = styled.Text`
  border-bottom-width: 0.5px;
  border-bottom-style: solid;
  border-bottom-color: red;
  height: 100%;
  border-left-width: 0.5px;
  border-left-style: solid;
  border-left-color: red;
`;
const FourCornersBottomLeft = styled.Text`
  border-top-width: 0.5px;
  border-top-style: solid;
  border-top-color: red;
  height: 100%;
  border-right-width: 0.5px;
  border-right-style: solid;
  border-right-color: red;
`;
const FourCornersBottomRight = styled.Text`
  border-top-width: 0.5px;
  border-top-style: solid;
  border-top-color: red;
  height: 100%;
  border-left-width: 0.5px;
  border-left-style: solid;
  border-left-color: red;
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
  margin-left:360px;
  font-weight:900;
  margin-bottom:0px;
  padding-bottom:0px;
`;
const FirstNameShortVersion = styled.Text`
  font-weight:100
  font-size:50px;
  color:black;
  margin-left:220px;
  paddingTop:${studentNamePaddingTop};
  margin-bottom:0px;
  padding-bottom:0px;
`;
const LastNameShortVersion = styled.Text`
  font-size:50px;
  color:black;
  margin-left:300px;
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

const Signature = styled.Text`
  position: absolute;
  bottom:20
  left:30
  right:30
`
