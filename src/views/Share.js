import React, { useEffect, useState } from "react";
import { Diploma } from "../diploma/Diploma";
import { Notify, Notifier } from "bc-react-notifier";
import Button from "../components/Button";
import Icon from "../components/Icon";
import Link from "../components/Link"

const Share = ({ match }) => {
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
        if (token) {
            fetch(`${HOST}/${token}/`)
                .then(response => response.json())
                .then(data => {
                    if (data.status_code) {
                        Notify.error(data.detail || "There was a problem");
                    } else {
                        console.log(data);
                        setData(data);
                    }
                })
                .catch(error => Notify.error(error.message || "There was a problem"));
        } else Notify.error("Specify a token");
    }, [])
    return (
        <div className="container-fluid share">
            <div className="row">
                <div className="col-12">
                    {data !== null ? <Diploma
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
                        size={{ height: "500px", width: "100%" }}
                    /> : <Notifier />
                    }
                </div>
            </div>
            <div className="row pt-4 pb-4 text-left">
                <div className="col-md-4 col-12">
                    <div className="row pb-2">
                        <div className="col-12">
                            <Button className="w-100" icon="arrow" variant="primary">
                                <img src="https://www.flaticon.es/svg/static/icons/svg/174/174857.svg" />
                                <Button.Label>Share on LinkedIn</Button.Label>
                            </Button>
                        </div>
                    </div>
                    <div className="row pb-2">
                        <div className="col-12">
                            <Button className="w-100" icon="arrow-down" variant="primary">
                                <img src="https://www.flaticon.es/svg/static/icons/svg/617/617526.svg" />
                                <Button.Label >Download PDF</Button.Label>
                            </Button>
                        </div>
                    </div>
                    <div className="row pb-2">
                        <div className="col-12">
                            <Button className="w-100">
                                <img src="https://www.flaticon.es/svg/static/icons/svg/74/74472.svg" />
                                <Button.Section >
                                    <Button.Label variant="badge badge-pill">Flor Rodriguez</Button.Label>
                                    <Link href="/#" >view all certificates</Link>
                                </Button.Section>
                            </Button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div class="card shadow-one mb-3" >
                                <div class="card-body">
                                    <h5 class="card-title">Issuer</h5>
                                    <p>4Geeks Academy Madrid</p>
                                    <Link href="https://www.4geeksacademy.co/">website</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-8 col-12">
                    <div className="row pb-4">
                        <div className="col-md-12 col-12">
                            <div class="card shadow-one mb-3 d-flex bg-success" >
                                <Icon name="check-mark" size="lg" />
                                <div>
                                    <p className="font-weight-bold">This certificate is valid.</p>
                                    <p>and it does not expires</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row pb-4">
                        <div className="col-sm-12 col-12 ">
                            <h1>Full Stack Web Development</h1>
                            <p>This document certifies that the student is a Full stack web developer,
                            with proficient knowlege to help in the creation of web applications using HTML/CSS,
                                Javascript, React and REST API using SQL, Python and the Flask Framework</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 col-4 ">
                            <h4>Total Hours</h4>
                            <p>340hrs</p>
                        </div>
                        <div className="col-md-4-12 col-4 ">
                            <h4>Issued On</h4>
                            <p>16th January 2020</p>
                        </div>
                        <div className="col-sm-4d col-4 ">
                            <h4>Expired On</h4>
                            <p>Does not expire</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Share;