import React, { Component } from 'react';
import HomeAnimation from './components/HomeAnimation/HomeAnimation';
import OverlayContainer from './components/OverlayContainer/OverlayContainer';
import OverlayMenu from './components/OverlayMenu/OverlayMenu';
import Header from './components/Header/Header';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInfoCircle, faTimesCircle, faUser, faBriefcase, faEnvelope } from '@fortawesome/pro-solid-svg-icons';
import './App.scss';

library.add(faUser, faBriefcase, faEnvelope)

var isIE = !!navigator.userAgent.match(/Trident/g) || !!navigator.userAgent.match(/MSIE/g);

if(isIE){
 	alert("Please don't use Internet explorer, it breaks so much of the Internet. Download Chrome here: https://www.google.com/chrome/"); 
}

class App extends Component {

	state = {
		overlayActive: false,
		overlayMenu: [
            {item: 'me', icon: 'user', key: 'mi1', active: true},
            {item: 'work', icon: 'briefcase', key: 'mi3', active: false},
            {item: 'contact', icon: 'envelope', key: 'mi4', active: false}
        ]
	};

	overlayClickHandler = (event) => {
		this.state.overlayActive === false ? this.setState({overlayActive: true}) : this.setState({overlayActive: false})
	}

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
						active={this.state.overlayActive}
						overlayMenu={this.state.overlayMenu}
						menuHandler = {this.overlayMenuHandler}
					/>
					<div 
						className={"overlayToggle" + (this.state.overlayActive ? ' active' : '')} 
						onClick={this.overlayClickHandler}>
						<FontAwesomeIcon 
							id="infoOpen" 
							className={"icon" + (this.state.overlayActive ? '' : ' active')} 
							icon={faInfoCircle} />
						<FontAwesomeIcon 
							id="infoClose" 
							className={"icon" + (this.state.overlayActive ? ' active' : '')} 
							icon={faTimesCircle} />
					</div>
				</div>
				<OverlayContainer active={this.state.overlayActive} />
			</div>
		);
  	}
}

export default App;
