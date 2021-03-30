import React, {FunctionComponent} from "react";
import {observer} from "mobx-react-lite";
import {Link} from 'react-router-dom'

const Splash: FunctionComponent = observer((props:any) => {
    return (
        <div className={'p-4'}>
            <Link to={{
                pathname: "/login",
                search: "?id=1234",
            }}>
                <button type={"submit"} className={'border border-secondary rounded p-2'}>This is splash screen Click
                    me..
                </button>
            </Link>
        </div>
    )
})
export default Splash;
