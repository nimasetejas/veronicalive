import {makeAutoObservable} from "mobx";
import history from "../utils/history";

export default class DashboardStore {
    public name: string = '';
    public rollNo: number = 0;
    public editProfile: boolean = false;

    constructor() {
        console.log('DashboardStore created')
        makeAutoObservable(this)
    }

    onChangeName = (text: string) => {
        this.name = text
        console.log(this.name)
    }

    onChangeRollNo = (value: any) => {
        this.rollNo = value;
    }

    onLogout = () => {
        this.editProfile = false
        history.push('/login');
    }

    closeModal = () => {
        this.editProfile = false;
    }
}
