import {FunctionComponent} from "react";
import React from 'react'
import {observer} from "mobx-react-lite";
import DashboardStore from "../store/DashboardStore";
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Home from "./tabs/Home";
import Products from "./tabs/Products";
import Cart from "./tabs/Cart";
import About from "./tabs/About";
import Colors from "../style/colors";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUserCog, faHome, faShoppingCart, faStore, faInfoCircle} from '@fortawesome/free-solid-svg-icons'
import Profile from "./Profile";
import '../style/commonStyle.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'


const store: DashboardStore = new DashboardStore();
const Dashboard: FunctionComponent = observer((props: any) => {
    return (<>
            <div className={'px-3 py-3'}>
                <h3
                    className={'justify-content-center mx-auto flex-md-column'}
                    style={{'color': Colors.veronica}}>Veronica
                </h3>
                <div className={'text-right px-2 -mouse-pointer cursor-pointer'}
                     onClick={() => store.editProfile = !store.editProfile}>
                    <FontAwesomeIcon color={Colors.veronica} size={'lg'} icon={faUserCog}/></div>
            </div>
{/*            <Navbar bg="light" expand="lg" sticky="top">
                <Navbar.Brand href="/home">Veronica</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/products">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>*/}
           {/* <nav className="navbar navbar-inverse">
                <div className={'text-right px-2 -mouse-pointer cursor-pointer'}
                     onClick={() => store.editProfile = !store.editProfile}>
                    <FontAwesomeIcon color={Colors.veronica} size={'lg'} icon={faUserCog}/></div>
                <div className={'text-right px-2 -mouse-pointer cursor-pointer'}
                     onClick={() => store.editProfile = !store.editProfile}>
                    <FontAwesomeIcon color={Colors.veronica} size={'lg'} icon={faUserCog}/></div>
                <div className={'text-right px-2 -mouse-pointer cursor-pointer'}
                     onClick={() => store.editProfile = !store.editProfile}>
                    <FontAwesomeIcon color={Colors.veronica} size={'lg'} icon={faUserCog}/></div></nav>*/}
{/*            <Tabs name="tabs1"
                  defaultFocus={true}
            >
                <TabList>
                    <Tab>
                        <div className={'px-3'}>
                            <FontAwesomeIcon className={'mr-2'} color={Colors.veronica}
                                             icon={faHome} size={'2x'}/>
                            Home
                        </div>
                    </Tab>
                    <Tab>
                        <div className={'px-3'}>
                            <FontAwesomeIcon className={'mr-2'} color={Colors.veronica}
                                             icon={faStore} size={'2x'}/>
                            Store
                        </div>
                    </Tab>
                    <Tab>
                        <div className={'px-3'}>
                            <FontAwesomeIcon className={'mr-2'} color={Colors.veronica}
                                             icon={faShoppingCart} size={'2x'}/>
                            Cart
                        </div>
                    </Tab>
                    <Tab>
                        <div className={'px-3'}>
                            <FontAwesomeIcon className={'mr-2'} color={Colors.veronica}
                                             icon={faInfoCircle} size={'2x'}/>
                            About
                        </div>
                    </Tab>
                </TabList>
                <TabPanel><Home/></TabPanel>
                <TabPanel><Products/></TabPanel>
                <TabPanel><Cart/></TabPanel>
                <TabPanel><About/></TabPanel>
            </Tabs>*/}
            <Profile showModal={store.editProfile} onLogout={store.onLogout} onClose={store.closeModal}></Profile>
            {/*            <Modal show={store.editProfile}>
                <Modal.Header>Profile info</Modal.Header>
                <Modal.Body>
                    <button type={"submit"} onClick={store.onLogout}>Logout</button>
                </Modal.Body>
                <Modal.Footer>This is the footer</Modal.Footer>
            </Modal>*/}
        </>
    )
})

export default Dashboard;
