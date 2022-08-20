import {catsApi} from "../api/api";

const SET_CATS = 'SET_CATS';

let initialState = {
    cats: [
    ]

}

const catsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_CATS:
            return {
                ...state,
                cats: action.cats
            }
        default:
            return state;
    }
}

export const setCats = (cats) => ({type: SET_CATS, cats});


export const getCats = () => (dispatch) => {

    catsApi.getCats()
        .then(response => {
              dispatch(setCats(response[0]))
            console.log(response)
        })

}

   /* then(response => {
        let a = response.length;
        for (let i = 0; i < a; i++){
            console.log(response[i])
        }

    }*/

export default catsReducer;

