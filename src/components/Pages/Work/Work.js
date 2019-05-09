import React from 'react';
import OverlayModal from '../../../hoc/OverlayModal/OverlayModal';
import WorkItem from './WorkItem/WorkItem';
import './Work.scss';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import workData from '../../../data/Work.json';



const Work = (props) => {

    const work = workData;

    const webWork = work[0].map((wi, i) => {
        return(
            <WorkItem
                key={wi.key}
                title={wi.title}
                type={wi.type}
                link={wi.link}
                copy={wi.copy}
            />
        )
    });

    const interactiveWork = work[1].map((wi, i) => {
        return(
            <WorkItem
                key={wi.key}
                title={wi.title}
                type={wi.type}
                link={wi.link}
                copy={wi.copy}
            />
        )
    });

    const audioWork = work[2].map((wi, i) => {
        return(
            <WorkItem
                key={wi.key}
                title={wi.title}
                type={wi.type}
                link={wi.link}
                copy={wi.copy}
            />
        )
    });

    return(
        <Tabs className="pageWork">
            <div className="workHeader">
                <h1>THINGS I'VE DONE</h1>
                <TabList className="nav">
                    <Tab>Web</Tab>
                    <Tab>Interactive</Tab>
                    <Tab>Audio</Tab>
                </TabList>
            </div>
            <div className="tabContainer">
                <TabPanel className="tab web">
                    {webWork}
                </TabPanel>
                <TabPanel className="tab interactive">
                    {interactiveWork}
                </TabPanel>
                <TabPanel className="tab audio">
                    {audioWork}
                </TabPanel>
            </div>
        </Tabs>
    )
}

export default OverlayModal(Work);