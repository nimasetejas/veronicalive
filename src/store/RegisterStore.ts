import {IUser} from "../utils/resources";

export default class RegisterStore {
    user: IUser = {} as IUser;

    constructor() {
    }

    setValue = (key: string, value: any) => {
        this.user[key] = value;
    }

    registerUser = () => {
        const keys = Object.keys(this.user);
        keys.forEach((key) => {
            if (!!this.user[key] || this.user[key].trim() === '') {

                //handle errors
            }

        }

        )
    }

}
