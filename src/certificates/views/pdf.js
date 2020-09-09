import React, { useEffect, useState } from "react";
import {Diploma} from "../diploma/Diploma";
import {  Notify, Notifier } from "bc-react-notifier";

const Certificate = ({match}) => {
    function getUrlParameter(name) {
        var params = new URLSearchParams(window.location.search);
        return params.has(name) ? params.get(name) : null;
    }
    const [token] = useState(match.params.token);
    const [lang] = useState(getUrlParameter("lang"));
    const [certificateStyle] = useState(getUrlParameter("style"))
    const [data, setData] = useState(null);
    const HOST = "https://breathecode.herokuapp.com/v1/certificate/token";

    useEffect(() => {
        if( token ){
           fetch(`${HOST}/${token}/`)
        .then(response => response.json())
        .then(data => {
            if(data.status_code){
                Notify.error(data.detail || "There was a problem");
            } else {
                console.log(data);
                setData(data);
            }
        })
        .catch(error => Notify.error(error.message || "There was a problem")); 
        } else Notify.error("Specify a token");
    },[])

    return <>
        { data !== null ? <Diploma 
                 student={data.user}
                 specialty={data.specialty}
                 academy={data.academy}
                 cohort={data.cohort}
                 signed_by={data.signed_by}
                 signed_by_role={data.signed_by_role}
                 lang={lang}
                 token={token}
                 certificateStyle={certificateStyle}
                 created_at={data.created_at}
                 /> : <Notifier />
        }
        
    </>
}

export default Certificate;