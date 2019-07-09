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
			cohort: getUrlParameter("cohort"),
			token: getUrlParameter("access_token"),
			student: getUrlParameter("student"),
			isLoaded: false,
			selectedCohort: null,
			selectedStudent: null,
			graduationDate: null,
			nameOfCohort: null,
			teachers: [],
			studentFirstName: null,
			studentStatus: null,
			studentLastName: null
		};
	}

	componentDidMount() {
		if (this.state.cohort && this.state.student && this.state.token){
			fetch(`${HOST}/cohort/${this.state.cohort}?access_token=${this.state.token}`)
				.then(res => res.json())
				.then(json => {
					this.setState({
						isLoaded: true,
						selectedCohort: json,
						nameOfCohort: json.data.name,
						graduationDate: json.data["ending_date"],
						teachers: json.data["full_teachers"].map(t => t.full_name)
					});
				})
				.catch(err =>
					Notify.error(err.message || "there was a problem")
				);
			fetch(`${HOST}/student/${this.state.student}?access_token=${this.state.token}`)
				.then(res => res.json())
				.then(json => {
					this.setState({
						isLoaded: true,
						selectedStudent: json,
						studentFirstName: json.data["first_name"],
						studentLastName: json.data["last_name"],
						studentStatus: json.data["status"]
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
      	{this.state.studentStatus == "studies_finished" ?
            <Diploma />
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
