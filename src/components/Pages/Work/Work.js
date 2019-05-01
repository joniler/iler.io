import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import OverlayModal from '../../../hoc/OverlayModal/OverlayModal';
import './Work.scss';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

const Work = (props) => {
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
                    <div className="workItem">
                        <div className="workHeader">
                            <div>
                                <h2>Bolden</h2>
                                <h3>Web Design</h3> 
                            </div>
                            <div className="wiNav">
                                <a target="_blank" rel="noopener noreferrer" href="https://boldenmovie.com/">
                                    <FontAwesomeIcon className="wiNavBtn visit" icon='link'/>
                                </a>
                                <FontAwesomeIcon  className="wiNavBtn more" icon='plus'/>
                            </div>
                        </div>
                        <div className="workContent">
                            <p>The website for the feature film Bolden highlights a flipbook style reminiscent of a bygone era. The type and layouts help to invoke thoughts of the early 1900s, the era where jazz began and subsequently changed the world.</p>
                        </div>
                    </div>
                    <div className="workItem">
                        <div className="workHeader">
                            <div>
                                <h2>Derrick Carter</h2>
                                <h3>Web Design</h3> 
                            </div>
                            <div className="wiNav">
                                <a target="_blank" rel="noopener noreferrer" href="https://derrickcarter.com/">
                                    <FontAwesomeIcon className="wiNavBtn visit" icon='link'/>
                                </a>
                                <FontAwesomeIcon  className="wiNavBtn more" icon='plus'/>
                            </div>
                        </div>
                        <div className="workContent">
                            <p>A site developed for the internationally famous Chicago House music DJ, Derrick Carter. Derrick's general style of clothing is very black and blue oriented, and he made it clear he wanted that reflected on his site. I created a palette of smooth, dark blues and deep grays; never going straight to black. The site is a single page design with a beautiful hero to draw you in. Derrick felt the style of the site matched exactly the aesthetic he was going for.</p>
                        </div>
                    </div>
                    <div className="workItem">
                        <div className="workHeader">
                            <div>
                                <h2>Aim & Arrow</h2>
                                <h3>Web Design</h3>
                            </div>
                            <div className="wiNav">
                                <a target="_blank" rel="noopener noreferrer" href="https://aimandarrowgroup.com/">
                                    <FontAwesomeIcon className="wiNavBtn visit" icon='link'/>
                                </a>
                                <FontAwesomeIcon  className="wiNavBtn more" icon='plus'/>
                            </div>
                        </div>
                        <div className="workContent">
                            <p>Aim & Arrow wanted a modern layout using soft colors on a white background. I used the geometric nature of their branding to fill the negative space around content with elements in line with their brand. Shapes, ink splatters, layers using the palette behind primary content, and subtle scroll triggered animations make the site a pleasure for the user to navigate.</p>
                        </div>
                    </div>
                    <div className="workItem">
                        <div className="workHeader">
                            <div>
                                <h2>Latinos Progresando</h2>
                                <h3>Web Design</h3>
                            </div>
                            <div className="wiNav">
                                <a target="_blank" rel="noopener noreferrer" href="https://latinospro.org/">
                                    <FontAwesomeIcon className="wiNavBtn visit" icon='link'/>
                                </a>
                                <FontAwesomeIcon  className="wiNavBtn more" icon='plus'/>
                            </div>
                        </div>
                        <div className="workContent">
                            <p>Latinos Progresando initially contacted us to help with some website content updates yet we knew they were going to need a complete overhaul — their site was not responsive and using an outdated theme. We started with creating a new palette that expressed movement, diversity and culture along with typefaces that better captured the organization's tone. Then, the content was completely reimagined to emphasize their three key focus areas: Immigration Services, Culture, and Community. With this refocus in place, we could showcase these areas distinctly yet cohesively with our new branding.</p>
                        </div>
                    </div>
                    <div className="workItem">
                        <div className="workHeader">
                            <div>
                                <h2>Rovely</h2>
                                <h3>Web Design</h3>
                            </div>
                            <div className="wiNav">
                                <a target="_blank" rel="noopener noreferrer" href="https://rovely.com/">
                                    <FontAwesomeIcon className="wiNavBtn visit" icon='link'/>
                                </a>
                                <FontAwesomeIcon  className="wiNavBtn more" icon='plus'/>
                            </div>
                        </div>
                        <div className="workContent">
                            <p>For Rovely's branding, we spent a lot of time going over shades of green and blue to develop the color palette. We wanted it to be just off of familiar but still inviting. We chose the Panton typeface and then added the small triangle on the 'R' and customized a few of the letterforms to round out the main logo. For the website, we wanted to keep it clean and crisp with bold splashes of color. Custom icons and horizontal content bands break up the information into easy sections.</p>
                        </div>
                    </div>
                    <div className="workItem">
                        <div className="workHeader">
                            <div>
                                <h2>Chicago Commons</h2>
                                <h3>Web Design</h3>
                            </div>
                            <div className="wiNav">
                                <a target="_blank" rel="noopener noreferrer" href="https://chicagocommons.org/">
                                    <FontAwesomeIcon className="wiNavBtn visit" icon='link'/>
                                </a>
                                <FontAwesomeIcon  className="wiNavBtn more" icon='plus'/>
                            </div>
                        </div>
                        <div className="workContent">
                            <p>Chicago Commons needed us to give their site a complete overhaul to not only apply their new branding but make the site more engaging for their users and easier to use for the staff. A priority was placed on the results of their highly successful programs so we tried to make what could be boring data on a spreadsheet jump off the page with color and typographic elements.</p>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel className="tab interactive">
                    <div className="workItem">
                        <div className="workHeader">
                            <div>
                                <h2>MirrorShow Management</h2>
                                <h3>interactive design</h3>
                            </div>
                            <div className="wiNav">
                                <FontAwesomeIcon className="wiNavBtn visit" icon='video'/>
                                <FontAwesomeIcon  className="wiNavBtn more" icon='plus'/>
                            </div> 
                        </div>
                        <div className="workContent">
                            {/* <iframe title="Mirrorshow Int" src="https://player.vimeo.com/video/211480656" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> */}
                            <p>We created an interactive game that booth visitors could use to detrmine their "persona". We built a booth that used an array of 4k displays and custom made LED button hardware used as contorllers. I fabricated and programmed the interactive hardware using Arduino and Touch Designer. </p>
                        </div>
                    </div>
                    <div className="workItem">
                        <div className="workHeader">
                            <div>
                                <h2>Adobe</h2>
                                <h3>UI Design</h3>
                            </div>
                            <div className="wiNav">
                                <FontAwesomeIcon className="wiNavBtn visit" icon='video'/>
                                <FontAwesomeIcon  className="wiNavBtn more" icon='plus'/>
                            </div>
                        </div>
                        <div className="workContent">
                            {/* <iframe title="TEC ProjMapping" src="https://player.vimeo.com/video/252907361" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> */}
                            <p>The team created an interactive booth that projection mapped a wide array of animated designs onto visitors faces and allowed them to share their video footage via social media. I designed and developed the UI for the web app and mobile sharing experience. </p>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel className="tab audio">
                    <div className="workItem">
                        <div className="workHeader">
                            <div>
                                <h2>MirrorShow Management</h2>
                                <h3>Sound Design</h3> 
                            </div>
                            <div className="wiNav">
                                <FontAwesomeIcon className="wiNavBtn visit" icon='headphones'/>
                                <FontAwesomeIcon  className="wiNavBtn more" icon='plus'/>
                            </div>
                        </div>
                        <div className="workContent">
                            <p>Mirrorshow needed custom music tailored to their interactive experience. I wrote 10 tracks of downtempo instrumental tracks that fit into the flow of our application, and also designed all the sound effects.</p>
                        </div>
                    </div>
                    <div className="workItem">
                        <div className="workHeader">
                            <div>
                                <h2>Highs & Lows in the Windy City</h2>
                                <h3>Full Length Album</h3> 
                            </div>
                            <div className="wiNav">
                                <FontAwesomeIcon className="wiNavBtn visit" icon='headphones'/>
                                <FontAwesomeIcon  className="wiNavBtn more" icon='plus'/>
                            </div>
                        </div>
                        <div className="workContent">
                            <p>Highs & Lows in the Windy City is made up entirely of unreleased music produced by Jon Iler and his friends over the span of several years in Chicago. In good times and bad times; the moods can clearly be felt track to track, and the album perfectly sums up Jon's years contributing to the house music community with beautiful people that he is proud to call his friends.</p>
                        </div>
                    </div>
                    <div className="workItem">
                        <div className="workHeader">
                            <div>
                                <h2>Concise Music</h2>
                                <h3>Label Owner</h3> 
                            </div>
                            <div className="wiNav">
                                <FontAwesomeIcon className="wiNavBtn visit" icon='headphones'/>
                                <FontAwesomeIcon  className="wiNavBtn more" icon='plus'/>
                            </div>
                        </div>
                        <div className="workContent">
                            <p>Concise Music is a small, boutique label that I started about 4 yers ago while living in Chicago. We brought smaller artists together from all over the world and released their music worldwide. The label is currently on a hiatus, but we expect to be cranking more new releases out in 2020.</p>
                        </div>
                    </div>
                </TabPanel>
            </div>
        </Tabs>
    )
}

export default OverlayModal(Work);