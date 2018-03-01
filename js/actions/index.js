import * as ActionConstants from "../constants/ActionConstants";
import {ACTION_FLAG} from "../constants/DefaultConstants";
import axios from 'axios';
import * as Routing from "../utils/Routing";
import * as Routes from "../utils/Routes";
import * as Logger from "../utils/Logger";

export function login(username, password, errorCallback) {
    /* TODO delete errorCallback */
    return function (dispatch) {
        axios.post('j_spring_security_check', `username=${username}&password=${password}`,
            {headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then((response) => {
            const data = response.data;
            if (!data.success || !data.loggedIn) {
                /*TODO maybe action*/
                errorCallback();
                return;
            }
            dispatch(userAuthSuccess());
            dispatch(loadUserProfile());
            //Logger.log('User successfully authenticated.');
            Routing.transitionToOriginalTarget();
        }).catch((error) => {
            dispatch(userAuthError(error.response.data));
            errorCallback();
        });
    }
}

export function userAuthSuccess() {
    return {
        type: ActionConstants.AUTH_USER
    }
}

export function userAuthError(error) {
    return {
        type: ActionConstants.AUTH_USER_ERROR,
        error
    }
}

export function logout() {
    //console.log("Logouting user");
    return function (dispatch) {
        axios.post('j_spring_security_logout').then(() => {
            dispatch(unauthUser());
            //Logger.log('User successfully logged out.');
            Routing.transitionTo(Routes.login);
            window.location.reload();
        }).catch((error) => {
            /* TODO maybe action error */
            //Logger.error('Logout failed. Status: ' + error.status);
        });
    }
}

export function unauthUser() {
    return {
        type: ActionConstants.UNAUTH_USER
    }
}

export function loadUserProfile() {
    //console.log("Loading user profile");
    return function (dispatch) {
        dispatch(loadUserProfilePending());
        axios.get('rest/users/current').then((response) => {
            dispatch(loadUserProfileSuccess(response.data));
        }).catch ((error) => {
            dispatch(loadUserProfileError(error.response.data));
        });
    }
}

export function loadUserProfilePending() {
    return {
        type: ActionConstants.LOAD_USER_PROFILE_PENDING
    }
}

export function loadUserProfileSuccess(user) {
    return {
        type: ActionConstants.LOAD_USER_PROFILE_SUCCESS,
        user
    }
}

export function loadUserProfileError(error) {
    return {
        type: ActionConstants.LOAD_USER_PROFILE_ERROR,
        error
    }
}

export function createUser(user) {
    //console.log("Creating user: ", user);
    return function (dispatch) {
        dispatch(saveUserPending(ACTION_FLAG.CREATE_USER));
        axios.post('rest/users', {
            ...user
        }).then(() => {
            dispatch(saveUserSuccess(user, ACTION_FLAG.CREATE_USER));
            dispatch(loadUsers());
        }).catch ((error) => {
            dispatch(saveUserError(error.response.data, user, ACTION_FLAG.CREATE_USER));
        });
    }
}

export function updateUser(user) {
    //console.log("Updating user: ", user);
    return function (dispatch) {
        dispatch(saveUserPending(ACTION_FLAG.UPDATE_USER));
        axios.put(`rest/users/${user.username}`, {
            ...user
        }).then(() => {
            dispatch(saveUserSuccess(user, ACTION_FLAG.UPDATE_USER));
            dispatch(loadUsers());
        }).catch ((error) => {
            dispatch(saveUserError(error.response.data, user, ACTION_FLAG.UPDATE_USER));
        });
    }
}

export function saveUserPending(actionFlag) {
    return {
        type: ActionConstants.SAVE_USER_PENDING,
        actionFlag
    }
}

export function saveUserSuccess(user, actionFlag) {
    return {
        type: ActionConstants.SAVE_USER_SUCCESS,
        user,
        actionFlag
    }
}

export function saveUserError(error, user, actionFlag) {
    return {
        type: ActionConstants.SAVE_USER_ERROR,
        error,
        user,
        actionFlag
    }
}

export function deleteUser(user) {
    //console.log("Deleting user: ", user);
    return function (dispatch) {
        dispatch(deleteUserPending(user.username));
        axios.delete(`rest/users/${user.username}`, {
            ...user
        }).then(() => {
            dispatch(loadUsers());
            dispatch(deleteUserSuccess(user));
        }).catch ((error) => {
            dispatch(deleteUserError(error.response.data, user));
        });
    }
}

export function deleteUserPending(username) {
    return {
        type: ActionConstants.DELETE_USER_PENDING,
        username
    }
}

export function deleteUserSuccess(user) {
    return {
        type: ActionConstants.DELETE_USER_SUCCESS,
        user
    }
}

export function deleteUserError(error, user) {
    return {
        type: ActionConstants.DELETE_USER_ERROR,
        error,
        user,
    }
}

export function loadUser(username) {
    //console.log("Loading user with username: ", username);
    return function (dispatch) {
        dispatch(loadUserPending());
        axios.get(`rest/users/${username}`).then((response) => {
            dispatch(loadUserSuccess(response.data));
        }).catch ((error) => {
            dispatch(loadUserError(error.response.data));
        });
    }
}

export function loadUserPending() {
    return {
        type: ActionConstants.LOAD_USER_PENDING
    }
}

export function loadUserSuccess(user) {
    return {
        type: ActionConstants.LOAD_USER_SUCCESS,
        user
    }
}

export function loadUserError(error) {
    return {
        type: ActionConstants.LOAD_USER_ERROR,
        error
    }
}

export function unloadUser() {
    return {
        type: ActionConstants.UNLOAD_USER
    }
}

export function loadUsers() {
    //console.log("Loading all users");
    return function (dispatch) {
        dispatch(loadUsersPending());
        axios.get('rest/users').then((response) => {
            dispatch(loadUsersSuccess(response.data));
        }).catch ((error) => {
            dispatch(loadUsersError(error.response.data));
        });
    }
}

export function loadUsersPending() {
    return {
        type: ActionConstants.LOAD_USERS_PENDING
    }
}

export function loadUsersSuccess(users) {
    return {
        type: ActionConstants.LOAD_USERS_SUCCESS,
        users
    }
}

export function loadUsersError(error) {
    return {
        type: ActionConstants.LOAD_USERS_ERROR,
        error
    }
}

export function loadInstitutions() {
    //console.log("Loading all institutions");
    return function (dispatch) {
        dispatch(loadInstitutionsPending());
        axios.get('rest/institutions').then((response) => {
            dispatch(loadInstitutionsSuccess(response.data));
        }).catch ((error) => {
            dispatch(loadInstitutionsError(error.response.data));
        });
    }
}

export function loadInstitutionsPending() {
    return {
        type: ActionConstants.LOAD_INSTITUTIONS_PENDING
    }
}

export function loadInstitutionsSuccess(institutions) {
    return {
        type: ActionConstants.LOAD_INSTITUTIONS_SUCCESS,
        institutions
    }
}

export function loadInstitutionsError(error) {
    return {
        type: ActionConstants.LOAD_INSTITUTIONS_ERROR,
        error
    }
}

export function deleteInstitution(institution) {
    //console.log("Deleting institution: ", institution);
    return function (dispatch) {
        dispatch(deleteInstitutionPending(institution.key));
        axios.delete(`rest/institutions/${institution.key}`, {
            ...institution
        }).then(() => {
            dispatch(loadInstitutions());
            dispatch(deleteInstitutionSuccess(institution));
        }).catch ((error) => {
            dispatch(deleteInstitutionError(error.response.data, institution));
        });
    }
}

export function deleteInstitutionPending(key) {
    return {
        type: ActionConstants.DELETE_INSTITUTION_PENDING,
        key
    }
}

export function deleteInstitutionSuccess(institution) {
    return {
        type: ActionConstants.DELETE_INSTITUTION_SUCCESS,
        institution
    }
}

export function deleteInstitutionError(error, institution) {
    return {
        type: ActionConstants.DELETE_INSTITUTION_ERROR,
        error,
        institution,
    }
}