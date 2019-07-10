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
			student: null
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
      <div>
        <Notifier />
        {!this.state.student ? null :
            this.state.student.status === "studies_finished" ?
                <Diploma student={this.state.student} cohort={this.state.cohort} />
                :
                <ul className="bcnotifier">
                    <li>404 student has not graduated</li>
                </ul>

        }
      </div>
    )
  }
}

export default Certificate ;
