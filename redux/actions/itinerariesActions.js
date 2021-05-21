import axios from 'axios';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
toast.configure()

const itinerariesActions = {

    getCityItineraries: (cityId) => {
        return(dispatch, getState) => {
            axios.get(`https://webapp-mytinerary.herokuapp.com/api/itineraries/${cityId}`)
            .then(resp => dispatch({
                type: 'GET_CITY_ITINERARIES',
                payload: resp.data.response
            }))
            .catch((err) => ({
                success: false,
                err
            }))
        }
    },

    removeItineraries: () => {
        return(dispatch, getState) => {
            dispatch({
                type: 'REMOVE_ITINERARIES'
            })
        }
    },

    handleComments: (comment) => {
        // console.log(comment)
        return async (dispatch, getState) => {
            try {
                const response = await axios.post(`https://webapp-mytinerary.herokuapp.com/api/enterComment/${comment.itinerary_id}`, {comment: comment.message}, {
                    headers: {
                        'Authorization': 'Bearer '+ comment.token
                    }
                })
                return response
            } catch {
                toast.error("Internal database error, try in a moment", {position: toast.POSITION.TOP_RIGHT})
            }
        }
    },

    removeComment: (_id, token) => {
        return async (dispatch, getState) => {
            try {
                const response = await axios.delete(`https://webapp-mytinerary.herokuapp.com/api/removeComment/${_id}`, {
                    headers: {
                        'Authorization': 'Bearer '+ token
                    }
                })
                return response
            } catch {
                toast.error("Internal database error, try in a moment", {position: toast.POSITION.TOP_RIGHT})
            }
        }
    },

    updateComment: (_id, token, message) => {
        return async (dispatch, getState) => {
            try {
                const response = await axios.put(`https://webapp-mytinerary.herokuapp.com/api/updateComment/${_id}`, {message}, {
                    headers: {
                        'Authorization': 'Bearer '+ token
                    }
                })
                return response
            } catch {
                toast.error("Internal database error, try in a moment", {position: toast.POSITION.TOP_RIGHT})
            }
        }
    },

    updateLikes: (_id, token) => {
        return async (dispatch, getState) => { 
            try {
                const response = await axios.get(`https://webapp-mytinerary.herokuapp.com/api/updateLikes/${_id}`, {
                    headers: {
                        'Authorization': 'Bearer '+ token
                    }
                })
                return response
            } catch {
                toast.error("Internal database error, try in a moment", {position: toast.POSITION.TOP_RIGHT})
            }
        }
    },

    getUserLikesComments: (_id, token) => {
        return async (dispatch, getState) => {
            try {
                const response = await axios.get(`https://webapp-mytinerary.herokuapp.com/api/getUserLikesComments/${_id}`, {
                    headers: {
                        'Authorization': 'Bearer '+ token
                    }
                })
                return response
            } catch {
                toast.error("Internal database error, try in a moment", {position: toast.POSITION.TOP_RIGHT})
            }
        }
    }
    
}

export default itinerariesActions;