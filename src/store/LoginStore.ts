import {makeAutoObservable, toJS} from "mobx";
import history from "../utils/history";

export default class LoginStore {
    public username: string = '';
    public password: string = '';
    public isInvalid: boolean = false;
    public user:any;
    public newTestObject:any;

    constructor() {
        console.log('LoginStore created')
        makeAutoObservable(this);
    }

    setUserName = (value: string) => {
        this.username = value;
    }

    setPassword = (value: string) => {
        this.password = value;
    }

    login = () => {
         this.user = {
            'user_name': this.username,
            'password': this.password
        }
        this.newTestObject=Object.assign(this.user);
        console.log('login---->',toJS(this.user))
        console.log('newTestObject---->',toJS(this.newTestObject))

        if (this.username.trim() !== '' && this.password.trim() !== '') {
            console.log('Success')//call api
            this.isInvalid = false
            history.push('/');
        } else {
            this.isInvalid = true;//todo improve error handling
            console.log('Failure')//show error msg
        }
        console.log(this.username, this.password)
    }

}
