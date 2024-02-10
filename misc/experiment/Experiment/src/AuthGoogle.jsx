import React, {useEffect} from "react";
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
import firebase from 'firebase/compat/app'
const AuthGoogle = (props) => {
    useEffect(() => {
        const ui = 
            firebaseui.auth.authUI.getInstance() ||
            new firebaseui.auth.AuthUT(props.auth);
        ui.start(".firebase-auth-container", {
            signInOptions: [
                {
                    provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
                    requireDisplayName: false
                }
            ]
            signInSucessUrl: '/authenticated'
            privactPolicyURL: 'y'
        });
    })
        
    return (
        <>  
            <div>AuthGoogle</div>
            <div className={"firebase-auth-container"}></div>
        </>
    )
}

export default AuthGoogle