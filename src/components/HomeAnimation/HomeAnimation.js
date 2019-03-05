import React, {Component} from 'react'
import './HomeAnimation.scss'
import DayCycle from './DayCycle/DayCycle'
import tiger from '../../images/animation/bike/tiger.svg'
import fork from '../../images/animation/bike/fork.svg'
import swingarm from '../../images/animation/bike/swingarm.svg'
import fWheel from '../../images/animation/bike/front-wheel.svg'
import rWheel from '../../images/animation/bike/rear-wheel.svg'
import rider from '../../images/animation/bike/rider.svg'
import riderHead from '../../images/animation/bike/head.svg'
import bb1 from '../../images/animation/billboards/bb1.svg'
import bb2 from '../../images/animation/billboards/bb2.svg'
import bb3 from '../../images/animation/billboards/bb3.svg'
import bb4 from '../../images/animation/billboards/bb4.svg'
import bgLandscape from '../../images/animation/landscape/bglandscape.svg'

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

    componentDidMount() {
        this.dayCycleHandler();
    } 

    dayCycleHandler = () => {
        let dArray = [...this.state.dayArray];
        let dayArrayLength = dArray.length;
        let i = 0;
        let e = dayArrayLength - 1;
        this.toggleActiveDayTime((dayArrayLength - 1), (dayArrayLength - 2), dArray, dayArrayLength);

        setInterval(() => {
            this.toggleActiveDayTime(i, e, dArray, dayArrayLength);
            i++
            if (i === dayArrayLength) {
                i = 0;
            }
            e = (i === 0 ) ? (dayArrayLength - 1) : (i - 1) ;
        }, 20000)
    }

    toggleActiveDayTime(i, e, dArray, dayArrayLength) {
        let dActive = {...dArray[i]};
        let dPrevActive = {...dArray[e]};
        console.log('Prev active time was ' + dPrevActive.time);
        console.log('Current active time is ' + dActive.time);
        dPrevActive.active = false;
        dActive.active = true;
        dArray[e] = dPrevActive;
        dArray[i] = dActive;
        this.setState({dayArray: dArray}, () => {
            //do something
        }); 
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
                <div className="bgLandscape"></div>
                
                <div className="cityScape">
                    <div className="cityDay"></div>
                    <div className="cityNight"></div>
                </div>
                <div className="buildings2"></div>
                <div className="trees2"></div>
                <div className="buildings"></div>
                <div className="trees1"></div>
                <div className="sidewalk">
                    <img src={bb1} alt="" className="bb1"/>
                    <img src={bb2} alt="" className="bb2"/>
                    <img src={bb3} alt="" className="bb3"/>
                    <img src={bb4} alt="" className="bb4"/>
                </div>
                <div className="road"></div>
                <div className="bike">
                <div className="bikeFront">
                    <img src={fWheel} alt="" className="fWheel"/>
                        <img src={fork} alt="" className="fork"/>
                    </div>
                    <div className="bikeRear">
                        <img src={rWheel} alt="" className="rWheel"/>
                        <img src={swingarm} alt="" className="swingarm"/>
                    </div>
                    <img src={tiger} alt="" className="tiger"/>
                    <div className="rider">
                        <img src={rider} alt="" className="riderBody"/>
                        <img src={riderHead} alt="" className="riderHead"/>
                    </div>
                </div>
                <div className="cars"></div>
            </div>
        );
    }
}

export default HomeAnimation