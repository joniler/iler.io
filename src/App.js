import React, { Component } from 'react';
import HomeAnimation from './components/HomeAnimation/HomeAnimation';
import InteractiveContainer from './components/InteractiveContainer/InteractiveContainer';
import Header from './components/Header/Header';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faInfoCircle, faTimesCircle } from '@fortawesome/pro-solid-svg-icons';
import './App.scss';

var isIE = !!navigator.userAgent.match(/Trident/g) || !!navigator.userAgent.match(/MSIE/g);

if(isIE){
 	alert("Please don't use Internet explorer, it breaks so much of the Internet. Download Chrome here: https://www.google.com/chrome/"); 
}

class App extends Component {

	state = {overlayActive: false};

	overlayClickHandler = (event) => {
		this.state.overlayActive === false ? this.setState({overlayActive: true}) : this.setState({overlayActive: false})
		console.log(this.state.overlayActive);
	}

  	render() {
		return (
			<div className="App">
				<Header/>
				<HomeAnimation/>
				<div 
					className={"interactiveOpen " + (this.state.overlayActive ? 'active' : '')} 
					onClick={this.overlayClickHandler}>
					<FontAwesomeIcon 
						id="infoOpen" 
						className={"icon " + (this.state.overlayActive ? '' : 'active')} 
						icon={faInfoCircle} />
					<FontAwesomeIcon 
						id="infoClose" 
						className={"icon " + (this.state.overlayActive ? 'active' : '')} 
						icon={faTimesCircle} />
				</div>
				<InteractiveContainer active={this.state.overlayActive} />
			</div>
		);
  	}
}

export default App;
