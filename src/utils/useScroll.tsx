import { useContext, useEffect, RefObject } from "react";
import { SpaceContext } from "../context/SpaceContext";


interface Props {
    elementRef: RefObject<HTMLElement>;
    destination: string
}

export const useScroll = ({ elementRef, destination }: Props) => {

    const { setActiveSection } = useContext(SpaceContext);

    const handleScroll = () => {
        if (elementRef.current && elementRef.current?.getBoundingClientRect().top < 100 && elementRef.current?.getBoundingClientRect().top > -100) {
            setActiveSection(destination);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

}

