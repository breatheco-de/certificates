import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFViewer, Image } from '@react-pdf/renderer';




const styles = StyleSheet.create({
  firstRow:{
    display:"flex",
    flexDirection: "row",
    backgroundColor: "black",
    height:"150px",
    
    
  },
  firstColumn:{
    flex:"1"
  },
  secondColumn:{
    
    flex:"1"
  },
  thirdColumn:{
   
   flex:'1'
  },
  codingSchool:{
    margin:"1px 50px 0px",
    color:"white"
  },
  development:{
    margin:"1px 50px 0px",
    color:"white"
  },
  image:{
    margin:"auto",
    height:"100%",
    padding:"30px"
  },
  fourGeeks:{
    color:"white",
    margin:"45px 50px 0px",
    positon:"absolute"
  }

  
 
});





const Certificate = props =>(
  <PDFViewer height="1000px" width="1600px">
        <Document>
            <Page {...props} size="A4" orientation="landscape" > 
                <View style={styles.firstRow}>
                  <View style={styles.firstColumn}>
                    <Text style={styles.fourGeeks}>4GEEKS ACADEMY</Text>
                    <Text style={styles.codingSchool} >CODING SCHOOL</Text>
                  </View>
                  <View style={styles.secondColumn}>
                  <Image
                      style={styles.image}
                      src="https://ucarecdn.com/f422469c-4d65-4daa-979f-e2ce93df68a6/-/resize/150x/"
                    />
                  </View>
                  <View style={styles.secondColumn}>
                      <Text style={styles.codingSchool} >DEVELOPMENT</Text>
                  </View>
                </View>
            </Page>
          </Document>
    </PDFViewer>
);


export default Certificate  ;
