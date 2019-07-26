import React from 'react';
import { Diploma } from  "./Diploma.js"
import {  Notify, Notifier } from "bc-react-notifier";

function getUrlParameter(name) {
	var params = new URLSearchParams(window.location.search);
	return params.has(name) ? params.get(name) : null;
}

const HOST = "https://api.breatheco.de";

class Certificate extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			cohort_id: getUrlParameter("cohort"),
			token: getUrlParameter("access_token"),
			student_id: getUrlParameter("student"),
			cohort: null,
			student: null,
      certStyle: ""
		};
	}

	componentDidMount() {
		if (this.state.cohort_id && this.state.student_id && this.state.token){
			fetch(`${HOST}/cohort/${this.state.cohort_id}?access_token=${this.state.token}`)
				.then(res => res.json())
				.then(cohort => {
					return new Promise((resolve, reject) =>
                        fetch(`${HOST}/profile/${cohort.data.profile_slug}?access_token=${this.state.token}`)
                            .then(res => res.json())
                            .then(profile => {
                                console.log(profile);
                                cohort.data.profile = profile.data;
                                resolve(cohort.data)
                            })
                            .catch(err => reject(err))
                    );
				})
                .then(cohort => this.setState({ cohort }))
				.catch(err =>
					Notify.error(err.message || "there was a problem")
				);
			fetch(`${HOST}/student/${this.state.student_id}?access_token=${this.state.token}`)
				.then(res => res.json())
				.then(json => {
					this.setState({
						student: json.data
					});
				})
				.catch(err =>
					Notify.error(err.message || "there was a problem")
				);
        } else Notify.error("Specify a cohort, student and access_token")
	}


  render(props) {
    return (
      <React.Fragment>
        <div>
          <Notifier />


          {!this.state.student ? null :
              this.state.student.status === "studies_finished"
                  ?   ( !this.state.certStyle
                      ? (<div className="container">
                          <div className="row text-center">
                            <div className="col">
                              <h2>Select a certificate style</h2>
                            </div>
                          </div>
                          <div className="row justify-content-center">
                            <div className="col text-right">
                            <button className="btn btn-danger" onClick={() => this.setState({ certStyle: "default" })}>Default</button>
                            </div>
                            <div className="col folat-left">
                            <button className="btn btn-info" onClick={() => this.setState({ certStyle: "new" })}>Modern</button>
                            </div>
                          </div>
                        </div>)
                      : (<Diploma student={this.state.student} cohort={this.state.cohort} certStyle={this.state.certStyle} />)
                      )



                  :
                  <ul className="bcnotifier">
                      <li>404 student has not graduated</li>
                  </ul>

          }
        </div>

      </React.Fragment>
    )
  }
}

export default Certificate ;


// <Diploma student={this.state.student} cohort={this.state.cohort} certStyle={this.state.certStyle} />