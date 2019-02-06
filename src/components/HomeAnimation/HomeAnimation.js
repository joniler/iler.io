import React, {Component} from 'react'
import './HomeAnimation.scss'
import DayCycle from './DayCycle/DayCycle'
import '../../images/animation/bike/tiger.svg'
import '../../images/animation/bike/fork.svg'
import '../../images/animation/bike/swingarm.svg'
import '../../images/animation/bike/front-wheel.svg'
import '../../images/animation/bike/rear-wheel.svg'
import '../../images/animation/bike/rider.svg'
import '../../images/animation/bike/head.svg'

class HomeAnimation extends Component {
    state = {
        dayArray: [
            {time: 'sunrise', active: true, key: 'dO1'},
            {time: 'day', active: false, key: 'dO2'},
            {time: 'sunset', active: false, key: 'dO3'},
            {time: 'dusk', active: false, key: 'dO4'},
            {time: 'night', active: false, key: 'dO5'}
        ],
        cityArray: [
            {cityState: 'day', active: true, key: 'cS1'},
            {cityState: 'night', active: false, key: 'cS2'}
        ],
        astralArray: [
            {astralObject: 'sun', active: true, key: 'aO1'},
            {astralObject: 'moon', active: false, key: 'aO2'},
            {astralObject: 'stars', active: false, key: 'aO3'}
        ],
        carArray: [
            {carType: 'sport1', active: false, key: 'cT1'},
            {carType: 'sport2', active: false, key: 'cT2'},
            {carType: 'truck', active: false, key: 'cT3'},
            {carType: 'suv', active: false, key: 'cT4'}
        ]
    }

    // toggleActive(i) {
    //     active: !this.state.dayArray[i].active;
    // }

    componentDidMount() {
        window.addEventListener('load', this.dayCycleHandler);
    }

    dayCycleHandler = () => {
        // let da = this.state.dayArray;
        // let dayArrayLength = da.length;
        // let i = 0
        // setInterval(() => {

        //     if (i === dayArrayLength){
        //         i = 0;
        //         this.setState(this.state.dayArray[i].active = true);
        //     } 
            
        //     else {
        //         i++
        //         this.setState(this.state.dayArray[i].active = true);
        //     }

        // }, 2000)
    }

    render() {
        return(
            <div className="animationContainer">
                <DayCycle
                    dayArray={this.state.dayArray}
                />
                <div className="astralBodies">
                    <img src="" alt="" className="stars"/>
                    <img src="" alt="" className="moon"/>
                    <img src="" alt="" className="sun"/>
                </div>
                <div className="cityScape">
                    <div className="cityDay"></div>
                    <div className="cityNight"></div>
                </div>
                <div className="sidewalk"></div>
                <div className="road"></div>
                <div className="bike">
                    <div className="rider">
                        <img src="" alt="" className="riderHead"/>
                        <img src="" alt="" className="riderBody"/>
                    </div>
                    <img src="" alt="" className="tiger"/>
                    <div className="bikeFront">
                        <img src="" alt="" className="fork"/>
                        <img src="" alt="" className="fWheel"/>
                    </div>
                    <div className="bikeRear">
                        <img src="" alt="" className="swingarm"/>
                        <img src="" alt="" className="rWheel"/>
                    </div>
                </div>
                <div className="cars"></div>
            </div>
        );
    }
}

export default HomeAnimation