import { useState } from "react";

export default function useMenu() {
    const [menuPosition, setMenuPosition] = useState("-50%")
    const [menuMarginRight, setMenuMarginRight] = useState("0")

    const handleMenuToggle = () => {
        setMenuPosition(menuPosition === "-50%" ? "0" : "-50%")
        setMenuMarginRight(menuMarginRight === "0" ? "-20%" : "0")
    }

    return {menuPosition, menuMarginRight, handleMenuToggle}
}