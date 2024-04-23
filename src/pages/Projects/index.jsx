import style from "./style.module.css"
import bleach from "./assets/bleach.gif"

export default function Projects() {
    return (
        <div className={style.projects}>
            <h2>Últimos Projetos</h2>

            <div>
                <ul>
                    <li>
                    <img src={bleach} alt="" />
                    <div className={style.projectInfo}>
                        <h2>Bleach - Landing Page</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam voluptatum minus natus ullam ducimus itaque harum ea, sed dolores placeat?</p>
                        <h4>Tecnologias Usadas:</h4>
                        <p>HTML - CSS - JAVASCRIPT</p>
                    </div>
                    </li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    )
}