import style from "./style.module.css"
import htmlImg from "./assets/html.png"
import cssImg from "./assets/css.png"
import javascriptImg from "./assets/javascript.png"
import sassImg from "./assets/sass.png"
import reactImg from "./assets/react.png"
import pythonImg from "./assets/python.png"
import SkillsLi from "../../components/SkillsLi"

export default function Skills() {
    

    return (
        <div className={style.skills}>
            <div className={style.knowedSkills}>
                <h2>Habilidades que tenho:</h2>

                <ul>
                    <SkillsLi 
                        src={htmlImg}
                        name={"H T M L"}
                    />

                    <SkillsLi 
                        src={cssImg}
                        name={"C S S"}
                    />

                    <SkillsLi 
                        src={javascriptImg}
                        name={"J A V A S C R I P T"}
                    />

                    <SkillsLi 
                        src={sassImg}
                        name={"S A S S"}
                    />

                    <SkillsLi 
                        src={reactImg}
                        name={"R E A C T"}
                    />
                </ul>
            </div>
            <hr />

            <div className={style.unknowedSkills}>
                <h2>Habilidades que estou desenvolvendo:</h2>

                <ul>
                    <SkillsLi 
                        src={pythonImg}
                        name="P Y T H O N"
                    />
                </ul>
            </div>
        </div>
    )
}