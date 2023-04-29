import { useReducer } from "react";
import { SpaceContext } from "./SpaceContext";
import { spaceReducer } from "./SpaceReducer";


export interface IState {
    activeSection: string
}
const INITIAL_STATE: IState = {
    activeSection: 'home'
}

interface Props {
    children: JSX.Element | JSX.Element[];
}


export const SpaceProvider = ({ children }: Props) => {


    const [spaceState, dispatch] = useReducer(spaceReducer, INITIAL_STATE);

    const setActiveSection = (section: string) => {

        dispatch({ type: 'setActiveSection', payload: section });
    }

    return (
        <SpaceContext.Provider value={{spaceState, setActiveSection}}>
            {children}
        </SpaceContext.Provider>
    );
}