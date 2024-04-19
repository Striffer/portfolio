import { useState } from "react"

export default function useSkill() {
    const [skillName, setSkillName] = useState("")

    const showSkillName = (name) => {
        setSkillName(name)
    }

    const hideSkillName = () => {
        setSkillName("")
    }

    return {skillName, showSkillName, hideSkillName}
}