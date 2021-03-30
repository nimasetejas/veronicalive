import {FunctionComponent} from "react";
import {observer} from "mobx-react-lite";
import {Tab, Tabs, TabList, TabPanel} from 'react-web-tabs';
import '../../style/tabsStyle.css'

const Products: FunctionComponent = observer(() => {
    function callback(e) {
        console.log(e);
    }

    return (
        <div>
            <Tabs defaultTab="vertical-tab-one" vertical>
                <TabList>
                    <Tab tabFor="vertical-tab-one">Tab 1</Tab>
                    <Tab tabFor="vertical-tab-two">Tab 2</Tab>
                    <Tab tabFor="vertical-tab-three">Tab 3</Tab>
                </TabList>

                <TabPanel tabId="vertical-tab-one">
                    <p>Tab 1 content</p>
                </TabPanel>

                <TabPanel tabId="vertical-tab-two">
                    <p>Tab content</p>
                </TabPanel>

                <TabPanel tabId="vertical-tab-three">
                    <p>Tab 3 content</p>
                </TabPanel>
            </Tabs>
        </div>
    )
})

export default Products;
