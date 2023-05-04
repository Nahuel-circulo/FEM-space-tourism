import { useReducer } from "react";
import { SpaceContext } from "./SpaceContext";
import { spaceReducer } from "./SpaceReducer";


const sections = {
    home: {
        title: 'home',
        index: '00'
    },
    destination: {
        title: 'destination',
        index: '01'
    },
    crew: {
        titile: 'crew',
        index: '02'
    },
    technology: {
        title: 'technology',
        index: '03'
    }
}
export interface IState {
    activeSection: string
    sections: typeof sections
}



const INITIAL_STATE: IState = {
    activeSection: 'home',
    sections

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
        <SpaceContext.Provider value={{ spaceState, setActiveSection }}>
            {children}
        </SpaceContext.Provider>
    );
}