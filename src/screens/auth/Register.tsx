import {FunctionComponent, ReactElement} from "react";
import {parse} from "query-string";

interface IRegisterProps {
    name: string
}

const Register: FunctionComponent<IRegisterProps> = (props): ReactElement => {
    return <h1>Register Works...{props.name}</h1>;
}

export default Register;
