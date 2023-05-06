import { DataJSON, IState } from "./SpaceProvider";



type SpaceAction =
    | { type: 'setActiveSection', payload: string }
    | { type: 'setData', payload: DataJSON }



export const spaceReducer = (state: IState, action: SpaceAction) => {

    switch (action.type) {

        case 'setActiveSection':
            return {
                ...state,
                activeSection: action.payload
            }
        case 'setData':
            return {
                ...state,
                dataJson: action.payload,
                dataLoaded: true
            }

        default:
            return state;
    }
}
