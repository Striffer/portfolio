import React from "react"
import { Cursor, Typewriter } from "react-simple-typewriter"
import style from "./style.module.css"

export default function Home() {
    return (
        <div className={style.home}>
            <div className={style.text}>
                <h3>Oi, eu sou o Pedro</h3>
                <h2>
                    Desenvolvedor<br/>
                    <Typewriter 
                        words={[`Front-end.`]}
                        loop={Infinity}
                        typeSpeed={200}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                    <Cursor cursorColor="#4EE1A0"/>
                </h2>
            </div>
        </div>
    )
}