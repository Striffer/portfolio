import style from "./style.module.css"
import Project from "../../components/Project"
import portfolio from "./assets/portfolio.gif"
import lawyer from "./assets/lawyer.gif"
import hogwarts from "./assets/hogwarts.gif"
import hash from "./assets/hash.gif"
import bleach from "./assets/bleach.gif"


export default function Projects() {
    
    return (
        <div className={style.projects}>
            <h2>Últimos Projetos</h2>
            
            <div className={style.projectsContainer}>
                <ul>
                    <Project
                        src={portfolio}
                        title={"Portfolio"}
                        comment={"Portfolio desenvolvido com React usando Single Page Application (SPA) para dar ao usuário uma experiência de estar usando um aplicativo. Isto proporciona uma navegação mais fluida pois não necessita carregar paginas uma vez que estão sendo usadas rotas em seu lugar."}
                        tecnologies={"REACT - REACT ROUTER"}
                        repository={"https://github.com/Striffer/portifolio"}
                        url={"https://striffer.github.io/portifolio/"}
                    />

                    <Project
                        src={lawyer}
                        title={"Assessoria Jurídica - Landing Page"}
                        comment={"Landing Page desenvolvida para divulgar uma empresa de assessoria jurídica (Projeto criado para estudos). Desenvolvida com Single Page Application (SPA), o que proporciona uma navegação mais fluida."}
                        tecnologies={"REACT - REACT ROUTER"}
                        repository={"https://github.com/Striffer/lawyerLp"}
                        url={"https://striffer.github.io/lawyerLp/"}
                    />

                    <Project 
                        src={hogwarts}
                        title={"Hogwarts - Landing Page"}
                        comment={"Landing Page desenvolvida para divulgar o Parque temático de Hogwarts (Projeto criado para estudos)."}
                        tecnologies={"HTML - CSS - JAVASCRIPT - BOOTSTRAP - AOS LIBRARY"}
                        repository={"https://github.com/Striffer/landing-hp"}
                        url={"https://striffer.github.io/landing-hp/"}
                    />

                    <Project 
                        src={hash}
                        title={"Jogo da Velha"}
                        comment={"Jogo da Velha desenvolvido para alternar os turnos de cada jogador. Quando um jogador realiza uma jogada que termina o jogo, o sistema entende e marca a jogada vencedora e nome do jogador vencedor é mostrado então."}
                        tecnologies={"HTML - CSS - JAVASCRIPT"}
                        repository={"https://github.com/Striffer/jogo_da_velha"}
                        url={"https://striffer.github.io/jogo_da_velha/"}
                    />

                    <Project 
                        src={bleach}
                        title={"Bleach - Landing Page"}
                        comment={"Landing Page desenvolvida para divulgar a nova temporada do anime Bleach (Projeto criado para estudos)."}
                        tecnologies={"HTML - CSS - JAVASCRIPT"}
                        repository={"https://github.com/Striffer/bleach_landing_page"}
                        url={"https://striffer.github.io/bleach_landing_page/"}
                    />
                </ul>
            </div>            
        </div>
    )
}