import style from "./style.module.css"
import { TbWorldWww } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";

export default function Project({ src, title, comment, tecnologies, repository, url }) {
    return (
        <li className={style.projectsLi} datatype=" Detalhes">
            <img src={src} alt="" />

            <div className={style.projectInfo}>
                <h2><u>{title}</u></h2>

                <p>{comment}</p>

                <h3><u>Tecnologias:</u></h3>

                <p>{tecnologies}</p>


                <div className={style.pages}>
                    <a href={url} target="_blank"><TbWorldWww /></a>

                    <a href={repository} target="_blank"><FaGithub /></a>
                </div>
            </div>
        </li>
    )
}