import React, { Component } from 'react';
import HomeAnimation from './components/HomeAnimation/HomeAnimation';
import OverlayContainer from './components/OverlayContainer/OverlayContainer';
import OverlayMenu from './components/OverlayMenu/OverlayMenu';
import Header from './components/Header/Header';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimesCircle, faUser, faBriefcase, faEnvelope, faLink, faPlus, faMinus, faVideo, faHeadphones, faPaperPlane, faCheck } from '@fortawesome/pro-solid-svg-icons';
import './App.scss';
import workData from './data/Work.json';

library.add(faUser, faBriefcase, faEnvelope, faLink, faPlus, faMinus, faVideo, faHeadphones, faPaperPlane, faCheck, faTimesCircle);

// // iOS vh fix
// window.onresize = function() {
//     document.body.height = window.innerHeight;
// }

// window.onresize();
// // end iOS vh fix

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
	overlayClose = () => {
		this.setState({
			overlayActive: false,
			overlayMenu: [
				{item: 'me', icon: 'user', key: 'mi1', active: false},
				{item: 'work', icon: 'briefcase', key: 'mi3', active: false},
				{item: 'contact', icon: 'envelope', key: 'mi4', active: false}
			]
		});
		console.log('done');
	}

	// Toggles active states of our menu object when menu items are clicked
	overlayMenuHandler = (i) => {
		// let overlayActive = this.state.overlayActive;
		let menuTemp = this.state.overlayMenu;
		let currentlyClicked = menuTemp[i];
		this.setState({overlayActive: true});
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
				<OverlayContainer overlayClose={this.overlayClose} active={this.state.overlayActive} menu={this.state.overlayMenu} />
			</div>
		);
  	}
}

export default App;
