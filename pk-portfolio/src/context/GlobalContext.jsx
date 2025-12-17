import { createContext } from "react"
import { useState } from "react";

export const HamburgerMenuContext = createContext();

const GlobalContext = (props) => {

    const [IsHamburgerActive, setIsHamburgerActive] = useState(false)

    return (
        <div>
            <HamburgerMenuContext.Provider value={[IsHamburgerActive, setIsHamburgerActive]}>
                {props.children}
            </HamburgerMenuContext.Provider>
        </div>
    )
}

export default GlobalContext