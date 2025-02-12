import axios from "axios";
import { action, flow, makeObservable, observable } from "mobx"
import React from "react";

class UserStore {
     user: any = null
     constructor() {
        makeObservable(this, {
            user: observable,
            setUser: action.bound,
            // getUser: flow.bound
        })
     }
     setUser(user: any) {
        this.user = user;
     }
    //  async *getUser() {
    //     const res = await axios.get("https://google.com");
    //     console.log(res.data)
    //     this.user = res.data
    //  }

}

export const userStore = new UserStore();

export const UserStoreContext = React.createContext(userStore)
export const useUserStore = () => React.useContext(UserStoreContext);
