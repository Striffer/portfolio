import useSkill from "../../hooks/useSkill"
import style from "./style.module.css"

export default function SkillsLi({ src, name }) {
    const {skillName, showSkillName, hideSkillName} = useSkill()

    return (

        <div className={style.skillsLi}>
            <img 
                src={src} 
                alt=""
                onMouseEnter={() => showSkillName(name)}
                onMouseLeave={hideSkillName} 
            />
            {skillName === name
            ?
            <p>{name}</p>
            :
            null
            }                
        </div>

    )
}