import { useEffect, useReducer } from "react";
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


export interface DataJSON {
    destinations: IDestination[];
    crew: ICrew[];
    technology: ITechnology[];
}

export interface ICrew {
    name: string;
    images: CrewImages;
    role: string;
    bio: string;
}

export interface CrewImages {
    png: string;
    webp: string;
}

export interface IDestination {
    name: string;
    images: CrewImages;
    description: string;
    distance: string;
    travel: string;
}

export interface ITechnology {
    name: string;
    images: TechnologyImages;
    description: string;
}

export interface TechnologyImages {
    portrait: string;
    landscape: string;
}

export interface IState {
    activeSection: string
    sections: typeof sections
    dataJson: DataJSON,
    dataLoaded: boolean
}





const INITIAL_STATE: IState = {
    activeSection: 'home',
    sections,
    dataJson: {
        destinations: [],
        crew: [],
        technology: []
    },
    dataLoaded: false
}



interface Props {
    children: JSX.Element | JSX.Element[];
}
export const SpaceProvider = ({ children }: Props) => {

    const [spaceState, dispatch] = useReducer(spaceReducer, INITIAL_STATE);


    const route = "/data/data.json"
    const getData = () => {
        fetch(route, {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                dispatch({ type: 'setData', payload: myJson })
            });
    };

    useEffect(() => {
        getData();
    }, [route]);

    const setActiveSection = (section: string) => {
        dispatch({ type: 'setActiveSection', payload: section });
    }

    return (
        <SpaceContext.Provider value={{ spaceState, setActiveSection }}>
            {children}
        </SpaceContext.Provider>
    );
}