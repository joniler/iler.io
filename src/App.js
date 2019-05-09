import React, { Component } from 'react';
import HomeAnimation from './components/HomeAnimation/HomeAnimation';
import OverlayContainer from './components/OverlayContainer/OverlayContainer';
import OverlayMenu from './components/OverlayMenu/OverlayMenu';
import Header from './components/Header/Header';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInfoCircle, faTimesCircle, faUser, faBriefcase, faEnvelope, faLink, faPlus, faMinus, faVideo, faHeadphones, faPaperPlane, faCheck } from '@fortawesome/pro-solid-svg-icons';
import './App.scss';
import workData from './data/Work.json';

library.add(faUser, faBriefcase, faEnvelope, faLink, faPlus, faMinus, faVideo, faHeadphones, faPaperPlane, faCheck);

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
	// We execute the same script as before
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
});

const isIE = !!navigator.userAgent.match(/Trident/g) || !!navigator.userAgent.match(/MSIE/g);

if(isIE){
 	alert("Please don't use Internet explorer, it breaks so much of the Internet. Download Chrome here: https://www.google.com/chrome/"); 
}

class App extends Component {

	state = {
		overlayActive: false,
		overlayMenu: [
            {item: 'me', icon: 'user', key: 'mi1', active: false},
            {item: 'work', icon: 'briefcase', key: 'mi3', active: false},
            {item: 'contact', icon: 'envelope', key: 'mi4', active: false}
		],
		work: workData
	};

	// Toggles the menu overlay when you click the button ;P
	overlayClickHandler = () => {
		this.state.overlayActive === false ? this.setState({overlayActive: true}) : this.setState({overlayActive: false})
		console.log('done');
	}

	// Toggles active states of our menu object when menu items are clicked
	overlayMenuHandler = (i) => {
		let menuTemp = this.state.overlayMenu;
		let currentlyClicked = menuTemp[i];
		if (currentlyClicked.active !== true) {
			menuTemp.map((i) => {
				i.active = false;
				return i;
			})
			currentlyClicked.active = !currentlyClicked.active
			menuTemp[i] = currentlyClicked;
			this.setState({
				overlayMenu: menuTemp
			})
		}
	}

  	render() {
		return (
			<div className="App">
				<Header/>
				<HomeAnimation/>
				<div className="overlayMenuContainer">
					<OverlayMenu 
						overlayClickHandler={this.overlayClickHandler}
						active={this.state.overlayActive}
						overlayMenu={this.state.overlayMenu}
						menuHandler = {this.overlayMenuHandler}
					/>
				</div>
				<OverlayContainer active={this.state.overlayActive} menu={this.state.overlayMenu} />
			</div>
		);
  	}
}

export default App;
