import axios from "axios";


import { LOADING_PET, PUSH_PET, SET_ALL_PETS } from "./types";

//get all pets by status

export const getAllPets = (status) => (dispatch) => {
    dispatch({ type: LOADING_PET });
    axios
        .get(`http://petstore.swagger.io/v2/pet/findByStatus?status=${status}`)
        .then((res) => {
            console.log(res.data)
            dispatch(setAllPets(res.data))

        })
        .catch((error) => {
            alert(JSON.stringify(error.message))
        });
};

export const addPet = (data) => (dispatch) => {
    dispatch({ type: LOADING_PET });

    axios
        .post('https://petstore.swagger.io/v2/pet', data, {
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json'

            },
        })
        .then((res) => {

            dispatch(setPet(res.data))

        })
        .catch((error) => {
            console.log(error)
            alert(JSON.stringify(error.message))
        });
};

export const deletePet = (id) => (dispatch) => {
    dispatch({ type: LOADING_PET });
    axios
        .delete('https://petstore.swagger.io/v2/pet/' + id,
    )
        .then((res) => {


            console.log(res.data)
        })
        .catch((error) => {

            alert(JSON.stringify(error.message))
        });
};

export const updatePet = (data) => (dispatch) => {
    dispatch({ type: LOADING_PET });
    axios
        .post('https://petstore.swagger.io/v2/pet/' + data.id, new URLSearchParams({ name: data.name }),
            {
                headers: {
                    accept: 'application/json',
                    "Content-Type": "application/x-www-form-urlencoded"

                },
            })
        .then((res) => {

            console.log(res)

        })
        .catch((error) => {

            alert(JSON.stringify(error.message))
        });
};




// Set logged in user
export const setAllPets = (decoded) => {
    return {
        type: SET_ALL_PETS,
        payload: decoded,
    };
};

export const setPet = (decoded) => {
    return {
        type: PUSH_PET,
        payload: decoded,
    };
};
