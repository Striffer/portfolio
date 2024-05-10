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
                    <Link to={"/portfolio"} onClick={onMenuToggle}><li>Home</li></Link>
                    <Link to={"/portfolio/about"} onClick={onMenuToggle}><li>Sobre</li></Link>
                    <Link to={"/portfolio/skills"} onClick={onMenuToggle}><li>Habilidades</li></Link>
                    <Link to={"/portfolio/projects"} onClick={onMenuToggle}><li>Projetos</li></Link>
                </div>
            </ul> 
        </>
    )
}