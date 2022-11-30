import { useState } from "react"

export default function useActionMenu(){

    const [dropdown, setDropdown] = useState(false);


    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(true);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };

    return{
        onMouseEnter,
        onMouseLeave,
        dropdown
    }
}