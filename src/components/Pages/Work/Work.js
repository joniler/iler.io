import React from 'react';
import OverlayModal from '../../../hoc/OverlayModal/OverlayModal';
import './Work.scss';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

const Work = (props) => {
    return(
        <Tabs className="pageWork">
            <div className="workHeader">
                <h1>Work</h1>
                <TabList className="nav">
                    <Tab>Web</Tab>
                    <Tab>Interactive</Tab>
                    <Tab>Audio</Tab>
                </TabList>
            </div>
            <div className="tabContainer">
                <TabPanel className="tab web">

                </TabPanel>
                <TabPanel className="tab interactive">
                    <div className="workItem">
                        <div className="workHeader">
                            <h2>MirrorShow Management</h2>
                            <h3>Interactive Design</h3> 
                        </div>
                        <div className="workContent">
                            <div className="video embed-container">
                                <iframe title="Mirrorshow Int" src="https://player.vimeo.com/video/211480656" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                            </div>
                            <p>For MirrorShow, we had to create an interactive game that booth visitors could use to detrmine their "persona". We built a booth that used an array of 4k displays and custom made LED button hardware used as contorllers. I fabricated and programmed the interactive hardware using Arduino and Touch Designer. </p>
                        </div>
                    </div>
                    <div className="workItem">
                        <div className="workHeader">
                            <h2>Adobe</h2>
                            <h3>UI Design</h3>
                        </div>
                        <div className="workContent">
                            <div className="video embed-container">
                                <iframe title="TEC ProjMapping" src="https://player.vimeo.com/video/252907361" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                            </div>
                            <p>The team created an interactive booth that projection mapped a wide array of animated designs onto visitors faces and allowed them to share their video footage via social media. I designed and developed the UI for the web app and mobile sharing experience. </p>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel className="tab audio">
                    <div className="workItem">
                        <div className="workHeader">
                            <h2>MirrorShow Management</h2>
                            <h3>Sound Design</h3> 
                        </div>
                        <div className="workContent">
                            <p>For MirrorShow, we had to create an interactive game that booth visitors could use to detrmine their "persona". We built a booth that used an array of 4k displays and custom made LED button hardware used as contorllers. I was responsile for fabricating and programming the interactive hardware using Arduino and Touch Designer. </p>
                        </div>
                    </div>
                    <div className="workItem">
                        <div className="workHeader">
                            <h2>Highs & Lows in the Windy City</h2>
                            <h3>Full Length Album</h3> 
                        </div>
                        <div className="workContent">
                            <p>For MirrorShow, we had to create an interactive game that booth visitors could use to detrmine their "persona". We built a booth that used an array of 4k displays and custom made LED button hardware used as contorllers. I was responsile for fabricating and programming the interactive hardware using Arduino and Touch Designer. </p>
                        </div>
                    </div>
                    <div className="workItem">
                        <div className="workHeader">
                            <h2>Concise Music</h2>
                            <h3>Label Owner</h3> 
                        </div>
                        <div className="workContent">
                            <p>For MirrorShow, we had to create an interactive game that booth visitors could use to detrmine their "persona". We built a booth that used an array of 4k displays and custom made LED button hardware used as contorllers. I was responsile for fabricating and programming the interactive hardware using Arduino and Touch Designer. </p>
                        </div>
                    </div>
                </TabPanel>
            </div>
        </Tabs>
    )
}

export default OverlayModal(Work);