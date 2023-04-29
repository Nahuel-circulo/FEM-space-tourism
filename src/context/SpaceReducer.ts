import { IState } from "./SpaceProvider";



type SpaceAction =
    | { type: 'setActiveSection', payload: string }



export const spaceReducer = (state: IState, action: SpaceAction) => {
    switch (action.type) {

        case action.type:
            return {
                ...state,
                activeSection: action.payload
            }
        default:
            return state;
    }
}
