import React, { useEffect, useState } from "react";
import {Diploma} from "../diploma/Diploma";
import Spinner from 'react-spinner-material';

const HOST = "https://breathecode.herokuapp.com/v1/certificate/token";
const View = ({ match }) => {
    const token = match.params.token;
    const [params, setParams] = useState({});
    const [data, setData] = useState(null);
    
    useEffect(() => {
        setParams(new URLSearchParams(window.location.search));
        if( token ){
           fetch(`${HOST}/${token}/`)
                .then(response => response.json())
                .then(data => {
                    if(data.status_code){
                        alert(data.detail || "There was a problem");
                    } else {
                        console.log(data);
                        setData(data);
                    }
                })
                .catch(error => alert(error.message || "There was a problem")); 
        } else alert("Specify a token");
    },[])

    if(!data) return <Spinner size={120} spinnerColor={"#44B2E4"} spinnerWidth={2} visible={true} />;
    return <Diploma 
        type="html"
        student={data.user}
        specialty={data.specialty}
        academy={data.academy}
        cohort={data.cohort}
        signed_by={data.signed_by}
        signed_by_role={data.signed_by_role}
        lang={params.get('lang') || null}
        token={token}
        certificateStyle={params.get('style') || null}
        created_at={data.created_at}
    /> 
}

export default View;