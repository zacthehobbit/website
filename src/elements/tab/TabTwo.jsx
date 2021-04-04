import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

class TabsTwo extends Component {
  render() {
    let tab1 = "Main skills";
    // tab2 = "Awards",
    // tab3 = "Experience",
    // tab4 = "Education & Certification";
    const { tabStyle } = this.props;
    return (
      <div>
        {/* Start Tabs Area */}
        <div className="tabs-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Tabs>
                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a href="/service">
                            University of Bristol <span> - Law</span>
                          </a>
                          Did some law stuff.
                        </li>
                        <li>
                          <a href="/service">
                            University of Toronto<span> - PoliSci</span>
                          </a>
                          Wasted some year
                        </li>
                        <li>
                          <a href="/service">
                            International Baccalaureate{" "}
                            <span> - English HL</span>
                          </a>
                          Pretended to care
                        </li>
                      </ul>
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
        {/* End Tabs Area */}
      </div>
    );
  }
}

export default TabsTwo;
