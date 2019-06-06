import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFViewer, Image } from '@react-pdf/renderer';
import styled from "@react-pdf/styled-components";







const Certificate = props =>(
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
                      &lt;/NAILA
                      </Text>
                    </FirstName>
                    <LastName>
                      <Text>
                        KALIYEVA/&gt;
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
                    NAME OF COHORT 
                    </Text>
                    </NameOfCohort>
                    <GraduationDate>
                      <Text>
                      GRADUATION DATE 
                      </Text>
                    </GraduationDate>
                  </View>
                
                {/*this is the last row of the certificate*/}
                <View style={styles.thirdRow}>
                  <View style={styles.firstColumn}>
                  <View style={styles.textCenter}>
                          <SignatureDash>
                            <Text>____________</Text>
                          </SignatureDash>
                          <InstructorName>
                            <Text style={styles.development} >ALEJANDRO SANCHEZ</Text>
                          </InstructorName>
                          <LeadInstructor><Text style={styles.development} >Lead Instructor</Text></LeadInstructor>
                      </View>
                  </View>
                  <View style={styles.secondColumn}>
                  <Image
                      style={styles.image}
                      src="https://ucarecdn.com/761d2f6c-366a-4df7-a2b9-e60d6f31e8f6/-/resize/400x/"
                    />
                  </View>
                  <View style={styles.secondColumn}>
                      <View style={styles.textCenter}>
                          <SignatureDash>
                            <Text>____________</Text>
                          </SignatureDash>
                          <InstructorName><Text style={styles.development} >ALEJANDRO SANCHEZ</Text></InstructorName>
                          <LeadInstructor> <Text>Co-founder and</Text></LeadInstructor>
                         <LeadInstructor><Text>Lead Instructor</Text></LeadInstructor>
                      </View>
                  </View>
                </View>
            </Page>
          </Document>
    </PDFViewer>
);

const styles = StyleSheet.create({
  colorDash:{
    color:"#44B2E4",
    textAlign:"center",
    
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
  font-size:10px;
  font-weight: bold;
  text-align:center;
  color:black;
`;
const SignatureDash = styled.Text`
  font-size:19.5px;
  font-weight: bold;
  text-align:center;
  color:black;
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
`;
const LastName = styled.Text`
  font-size:50px;
  color:black;
  margin-left:336px;
`;
const FullStackDevProgram = styled.Text`
  text-align:center;
`;
const SuccesComplete = styled.Text`
  text-align:center;
`;
const Hours = styled.Text`
  text-align:center;
`;
const NameOfCohort = styled.Text`
  text-align:center;
`;
const GraduationDate = styled.Text`
  text-align:center;
`;




export default Certificate ;
