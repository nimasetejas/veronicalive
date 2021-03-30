import {FunctionComponent} from "react";

interface NumberInputProps {
    value?: number;
    onChange?: Function;
}

const VeronicaNumberInput: FunctionComponent<NumberInputProps> = (props) => {
    return <input type={'number'} onChange={(e) => props.onChange && props.onChange(e.target.value)}></input>
}
export default VeronicaNumberInput;
