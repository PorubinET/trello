import { CONSTANTS } from "../types/types"

let _id = 1;

const initialState = [
    {
        title: "IN PROGRESS",
        id: 0,
        cards: [
            {
                id: 0,
                text: "created static 1"
            },
            {
                id: 1,
                text: "created static 2"
            },
            {
                id: 2,
                text: "created static 3"
            },
        ]
    },
    {
        title: "TO DO",
        id: 1,
        cards: [
            {
                id: 0,
                text: "created static 1"
            },
            {
                id: 1,
                text: "created static 2"
            },
            {
                id: 2,
                text: "created static 3"
            },
            {
                id: 3,
                text: "created static 4"
            },
            {
                id: 4,
                text: "created static 5"
            }
        ]
    },    
]

const listsReducer = (state = initialState, action) => {

    switch (action.type){
        case CONSTANTS.ADD_LIST:
            const newList = {
                title: action.payload,
                cards: [],
                id: _id
            }
             _id += 1;
            return [...state, newList]
        default:
            return state;
    }
}

export default listsReducer;