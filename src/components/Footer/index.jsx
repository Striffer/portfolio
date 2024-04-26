import style from "./style.module.css"
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <>
            <footer className={style.footer}>
                <p>Copyright &copy; 2024 <span>Pedro</span></p>

                <div className={style.media}>
                    <div className={style.mediaContainer}>
                        <a 
                            href="mailto:striffer.pedro@gmail.com"
                            target="_blank"
                        >
                            <MdOutlineEmail />                        
                        </a>
                    </div>

                    <div className={style.mediaContainer}>
                        <a 
                            href="https://github.com/Striffer"
                            target="_blank"
                        >
                            <FaGithub />
                        </a>                       
                    </div>

                    <div className={style.mediaContainer}>
                        <a 
                            href="https://www.linkedin.com/in/pedro-lima-4b6454247/"
                            target="_blank"    
                        >
                            <FaLinkedin />
                        </a> 
                    </div>                    
                </div>
            </footer> 
        </>
    )
}