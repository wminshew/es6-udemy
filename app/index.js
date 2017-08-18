import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const api_key = '3599e079031ff46a0b16572353eec43e';
const curr_weather_api = 'https://api.openweathermap.org/data/2.5/weather?';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			city: 'Chicago',
			description: ''
		};
	}

	getWeather(city) {
		fetch(`${curr_weather_api}q=${city}&APPID=${api_key}`)
			.then(response => response.json())
			.then(json => {
				this.setState({description: json.weather[0].description});
			});
	}

	componentDidMount() {
		this.getWeather(this.state.city);
	}

	render() {
		return (
				<div>
					<h1>Welcome to the weather app!</h1>
					<h3>Currently searching for the weather in {this.state.city}:</h3>
					<p>{this.state.description}</p>
				</div>
		       )
	}
}

ReactDOM.render(<App />, document.getElementById("root"));
