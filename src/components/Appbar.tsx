import React from 'react';
import '../app.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseApp } from "../firebaseConfig";

const firebaseAppAuth = firebaseApp.auth();
const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
};


const Appbar = (props:any) => {

    const {
        user,
        signOut,
        signInWithGoogle,
    } = props;


    console.log(user);


    return <div className="ninjaheader">
    
    <div className="row m-0">
        <div style={{paddingTop:"17px", paddingLeft:"10px"}}>
            <img src="./images/logo_blue.png" width="150px" />
        </div>
            <div className="ml-auto mr-1 row">
                <div className="d-flex flex-column justify-content-around">
                {
                   
                user
                    ? <p className="p-0 m-2">{user.displayName}</p>
                        : <p></p>
                        
                    }
                </div>
                <div className="d-flex  flex-column justify-content-around">
                {
                
                user
                    ? <button className="btn btn-outline-primary" onClick={signOut}>Sign Out?</button>
                        : <button className="btn btn-primary" onClick={signInWithGoogle}>Sign in with Google</button>  
                       
                    }
                </div>

        </div>
    </div>
    </div>

}

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(Appbar);