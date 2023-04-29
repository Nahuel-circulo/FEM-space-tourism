import { createContext} from 'react';
import { IState } from './SpaceProvider';


export type SpaceContextProps = {
    spaceState: IState;
    setActiveSection: ( id: string ) => void;
} 

export const SpaceContext = createContext<SpaceContextProps>({} as SpaceContextProps)






