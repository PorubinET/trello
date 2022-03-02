import { CONSTANTS } from "../types/types";

let _id = 2;

const initialState = {
    lists: [
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
}

export const listsReducer = (state = initialState, action) => {

    // const { payload } = action;
    const { lists } = state;

    switch (action.type) {
        case CONSTANTS.ADD_LIST:
            const newList = {
                title: "NEW_LIST",
                id: _id,
                cards: [{
                    id: 0,
                    text: "created static 1"
                }]
            }
            _id += 1
            return { ...state, lists: [...state.lists, newList] }

        case CONSTANTS.ADD_CARD:
            console.log('ok')
            
            const newCard = {
                id: 3,
                text: "created static 4",
            }
            // console.log(state.lists[0])
            console.log(...state, state.lists[0] = state.lists[0], newList)
            // return {...state, lists: [...state.lists[0], newCard]}
            // console.log(...state.lists[0].cards, newCard)

            // return [...state.lists[0].cards, newCard]

        default:
            return state;
    }
}

