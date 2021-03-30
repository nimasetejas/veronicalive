import React, {FunctionComponent} from "react";
import {observer} from "mobx-react-lite";
import Modal from "react-bootstrap/Modal";
import Colors from "../style/colors";
import {faUserCog} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface IProfileProps {
    showModal?: boolean;
    onLogout?: Function;
    onClose?: Function;
}

const Profile: FunctionComponent<IProfileProps> = observer((props: any) => {
    const handleClose = () => {
        props.onClose && props.onClose();
    }
    return (
        <Modal show={props.showModal} onHide={handleClose} className={'text-right'}>
            <Modal.Header closeButton> <span>Profile <FontAwesomeIcon icon={faUserCog}/></span></Modal.Header>
            <Modal.Body>
                <div className={'text-center'}>
                <button className={'border border-secondary rounded py-2 px-4 align-self-baseline'} type={"submit"} onClick={props.onLogout}>Logout</button>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button className={'border border-secondary rounded py-1 px-3'} onClick={handleClose}>
                    Close
                </button>
                <button className={'border border-success rounded bg-success py-1 px-3'} style={{color:Colors.white}} onClick={handleClose}>
                    Save
                </button>
            </Modal.Footer>
        </Modal>)
})

export default Profile;
