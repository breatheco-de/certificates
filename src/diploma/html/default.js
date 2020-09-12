import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFViewer, Image, Canvas, Font } from '@react-pdf/renderer';
import styled from "@react-pdf/styled-components";
import * as dayjs from 'dayjs';
import 'dayjs/locale/es';

let studentNameMarginLeft = "220px";
let studentNamePaddingTop = "0px";

const Diploma = (props) => {
    const { signed_by, signed_by_role, student, academy, specialty, strings, lang, token, certificateStyle, created_at } = props;
    return <div>
        <h1>Test diploma for {student.first_name} {student.last_name}</h1>
    </div>


}
export default Diploma;

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