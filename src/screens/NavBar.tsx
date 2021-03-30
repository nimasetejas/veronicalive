import React, {FunctionComponent, ReactElement, useState} from "react";
import {observer} from "mobx-react-lite";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Profile from "./Profile";
import {useLocation} from 'react-router-dom'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Colors from "../style/colors";
import {faUserCog} from "@fortawesome/free-solid-svg-icons";
import {NavItem} from "react-bootstrap";
import history from "../utils/history";
import {faStore} from "@fortawesome/free-solid-svg-icons/faStore";
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons/faInfoCircle";
import '../style/commonStyle.css'
import {faCartPlus} from "@fortawesome/free-solid-svg-icons/faCartPlus";


const NavBar: FunctionComponent = observer((props): ReactElement => {
    const [showModal, setShowModal] = useState(false);
    let location = useLocation() || null;

    function handleModal() {
        setShowModal(!showModal)
    }

    function onLogout() {
        history.push('/login');
    }

    return (
        <>
            <Navbar expand="lg" sticky="top" bg="light" variant="light">
                <Navbar.Brand href="/"><h3
                    style={{'color': Colors.veronica}}>Veronica
                </h3></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className={'container-fluid'} activeKey={location?.pathname}>
                        <Nav.Link href="/products" className={'py-2'}>
                            <FontAwesomeIcon
                                className={'mr-2'}
                                icon={faStore} size={'2x'}
                            />Store
                        </Nav.Link>
                        <Nav.Link href="/cart">
                            <FontAwesomeIcon
                                className={'mr-2'}
                                icon={faCartPlus} size={'2x'}
                            />Cart
                        </Nav.Link>
                        <Nav.Link href="/about">
                            <FontAwesomeIcon
                                className={'mr-2'}
                                icon={faInfoCircle} size={'2x'}
                            />About
                        </Nav.Link>
                        {/*                        <NavDropdown title="Other" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>*/}
                        <NavItem onClick={() => handleModal()} className={'ml-auto'}>
                            <div className={'pb-2'}>
                                <FontAwesomeIcon
                                    size={'2x'} className={'cursor-pointer'}
                                    color={showModal ? Colors.veronica : Colors.gray}
                                    icon={faUserCog}
                                />
                            </div>
                        </NavItem>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
            <Profile showModal={showModal} onLogout={onLogout} onClose={handleModal}></Profile>
        </>
    )
})


export default NavBar;
