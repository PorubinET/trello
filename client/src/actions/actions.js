import { CONSTANTS } from "../types/types";

export function addList(){
    return distpath => {
        try {
            distpath({
                type: CONSTANTS.ADD_LIST,
            });
        } catch (error) {
            console.log(error)
        }
    }  
}

export function addCard() {
    return distpath => {
        try{
            distpath({
                type: CONSTANTS.ADD_CARD
            });
        }  catch (error) {
            console.log(error)
        }
    }
}