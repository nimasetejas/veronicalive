import React, {FunctionComponent, ReactElement} from "react";
import {useLocation} from 'react-router-dom'
import {parse} from "querystring";
import VeronicaTextInput from "../../component/VeronicaTextInput";
import LoginStore from "../../store/LoginStore";
import Colors from "../../style/colors";
import '../../style/commonStyle.css'
import {observer} from "mobx-react-lite";

const store: LoginStore = new LoginStore();
const Login: FunctionComponent = observer((props): ReactElement => {

    let location = useLocation();
    const params = parse(location.search);

    return (
        <div className={'container'}>
            <div className="col-md-12 d-md-flex vh-100 flex-md-column  mb-5">
                <h3
                    className={'justify-content-center mx-auto flex-md-column pt-5 pb-2'}
                    style={{'color': Colors.veronica}}>Veronica
                </h3>
                <div
                    className="mx-auto border border-secondary rounded p-3 pr-3"
                    style={{'borderColor': Colors.lightVeronica}}>
                    {store.isInvalid && <div className={'text-danger text-right'}>Invalid Data</div>}
                    <VeronicaTextInput onChange={store.setUserName} label={'Username'}/>
                    <br/>
                    <VeronicaTextInput onChange={store.setPassword} label={'Password'}/>
                    <br/>
                    <div className={'text-right'}>
                        <button type={'submit'} className={'mr-4 px-3 border rounded'}
                                onClick={()=>store.login()}
                                style={{'backgroundColor': Colors.lightVeronica}}>
                            <span style={{'color': Colors.white}}>Login</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
})
export default Login;
