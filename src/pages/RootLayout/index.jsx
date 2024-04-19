import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import style from "./style.module.css"
import Menu from "../../components/Menu";
import useMenu from "../../hooks/useMenu";

export default function RootLayout () {
    const {menuPosition, menuMarginRight, handleMenuToggle} = useMenu()

    return (
        <>
            <div id={style.fullRoute}>
                <Header 
                    onMenuToggle={handleMenuToggle}
                    marginRight={menuMarginRight}
                />

                <main>
                    <Outlet />
                </main>

                <Footer />       
                <Menu 
                    right={menuPosition}
                    onMenuToggle={handleMenuToggle}
                />     
            </div>
        </>
    )
}