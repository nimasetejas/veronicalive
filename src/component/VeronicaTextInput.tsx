import React, {FunctionComponent, ReactElement} from "react";

interface ITextInputProps {
    value?: string;
    label?: string;
    onChange?: Function;
}

const VeronicaTextInput: FunctionComponent<ITextInputProps> = (props): ReactElement => {
    return (
        <div className={'py-1 my-1'}>
            <table>
                <tr>
                    <td style={{minWidth: 90,textAlign: "right"}}><span>{props.label || ''}</span></td>
                    <td style={{minWidth:90,textAlign: "right"}}>
                        <input type={'text'}
                               className={'ml-2 px-1'}
                               onChange={(e) => props.onChange && props.onChange(e.target.value)}/>
                    </td>
                </tr>
            </table>
        </div>
    )
}
export default VeronicaTextInput;
