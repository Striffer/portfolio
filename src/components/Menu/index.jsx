import style from "./style.module.css"
import { Link } from 'react-router-dom'
import { MdClose } from "react-icons/md";

export default function Menu({ right, onMenuToggle }) {
    return (
        <>
            <ul 
                className={style.menu}
                style={{right: right}}
            >
                <MdClose onClick={onMenuToggle}/>

                <div className={style.menuContainer}>
                    <Link to={"/portifolio"}><li>Home</li></Link>
                    <Link to={"/portifolio/about"}><li>Sobre</li></Link>
                    <Link to={"/portifolio/skills"}><li>Habilidades</li></Link>
                    <Link to={"/portifolio/projects"}><li>Projetos</li></Link>
                </div>
            </ul> 
        </>
    )
}