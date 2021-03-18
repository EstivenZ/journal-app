import { types } from "../types/types";
import {firebase, googleAuthprovider} from '../firebase/firebaseConfig';
import { finishLoading, startLoading } from "./ui";
import Swal from "sweetalert2";

export const startLoginEmailPassword= (email, password) => {
    return (dispatch) => {
        dispatch(startLoading());
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({user}) => {
                dispatch(login(user.uid, user.displayName));
                dispatch(finishLoading());
            })
            .catch(e => {
                console.log(e);
                dispatch(finishLoading());
                Swal.fire('Error', e.message, 'error');
            })
    }
}

export const startGoogleLogin= () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthprovider)
            .then(({user}) => {
                dispatch(
                    login(user.uid, user.displayName)
                )
            });
    }
}

export const startRegisterWithEmailPasswordName= (email, password, name) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async({user}) => {
                await user.updateProfile({displayName: name});
                dispatch(
                    login(user.uid, user.displayName)
                )
            })
            .catch(e => {
                console.log(e);
                Swal.fire('Error', e.message, 'error');
            })
    }
}

export const login= (uid, displayName) => {
    return{
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
}

export const startLogout= () => {
    return async(dispatch) => {
        await firebase.auth().signOut();
        dispatch(logout());
    }
}

export const logout= () => ({
    type: types.logout
})