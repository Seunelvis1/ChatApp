import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { unstable_HistoryRouter } from "react-router-dom";
import { auth } from "../firebase";
import { AuthContext } from "./AuthContext";

export const ChatContext = createContext();

export const AuthContextProvider = ({children}) =>{
    const {currentUser} = useContext(AuthContext)
    const INITIAL_STATE = {
        chatId: 'null',
        user: {},
    };

    const chatReducer = (state, action) =>{
        switch (action.payload) {
            case "CHANGE_USER":
                return {
                    user:action.paylaod,
                    chatId: currentUser.uidaction.payload.uid
                    ? currentUser.uiaction.payload.user.uid
                    : action.payload.uid + currentUser.uid,
                }
                default: return state

            }
    }
  
return (
<ChatContext.Provider value={{currentUser}}>
    {children}
</ChatContext.Provider>
)
}

