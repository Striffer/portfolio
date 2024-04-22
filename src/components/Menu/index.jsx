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
                    <Link to={"/portifolio"} onClick={onMenuToggle}><li>Home</li></Link>
                    <Link to={"/portifolio/about"} onClick={onMenuToggle}><li>Sobre</li></Link>
                    <Link to={"/portifolio/skills"} onClick={onMenuToggle}><li>Habilidades</li></Link>
                    <Link to={"/portifolio/projects"} onClick={onMenuToggle}><li>Projetos</li></Link>
                </div>
            </ul> 
        </>
    )
}