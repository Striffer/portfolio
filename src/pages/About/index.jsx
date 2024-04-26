import style from "./style.module.css"
import photo from "../../assets/foto.png"

export default function About() {
    return (
        <div className={style.about}>
            <div className={style.imgContainer}>
                <img src={photo} alt="" />
            </div>

            <div className={style.textContainer}>
                <div className={style.text}>
                    <h2>Olá,</h2><br/>
                    <p>sou Pedro Lima, desenvolvedor Front-end e entusiasta no Back-end. Atualmente trabalho na Universidade Estadual de Minas Gerais (UEMG) como Secretário Acadêmico do curso de Administração.</p><br/>
                    <p>Meu entusiasmo na área da programação veio quando tive contato com a linguagem Pascal na disciplina Linguagens Técnicas de Programação do curso de Engenharia Mecânica da UniRedentor. Desde então a programação virou um objetivo em minha vida. Em virtude disso, comecei a usar programação para automatizar rotinas de trabalho, criar aplicações web e solucionar problemas. Durante minha jornada na UEMG, tive a oportunidade de desenvolver de uma aplicação com Visual Basic Application (VBA) que simplificou os processos administrativos em minha universidade, resultando em uma redução significativa no tempo de execução e no aumento da eficiência. Além disso, fui responsável por automatizar rotinas de trabalho, otimizando a produtividade e trazendo soluções inovadoras para desafios repetitivos.</p>
                </div>

                <div className={style.text}>
                    <h2>Diferenciais</h2><br/>

                            <h3>Clean Code</h3>
                            <p>Priorizo as boas práticas na hora de realizar todos os códigos. Procuro sempre desenvolver da forma mais organizada e limpa possível.</p><br />

                            <h3>Rapidez de Aprendizado</h3>
                            <p>Tenho facilidade em aprender programação por se tratar de um assunto que não me esgota.</p><br />

                            <h3>Interfaces de Alta Fidelidade</h3>
                            <p>Prezo muito a perfeição na entrega dos projetos, entregando-os de forma fiel as interfaces solicitadas.</p>
                </div>

                <div className={style.text}>
                    <h2>O que procuro</h2><br/>
                    <p>Estou atrás de transformar um hobby em um estilo de vida, trabalhar com programação. Ser desafiado e vencer cada obstáculo com soluções lógicas, simples e criativas. Meu objetivo é continuar a crescer como desenvolvedor e contribuir para projetos desafiadores que tragam impacto positivo para a comunidade. Estou comprometido em expandir meu conhecimento e habilidades, buscando constantemente novas formas de inovar e melhorar a experiência dos usuários por meio da tecnologia.</p><br/>
                    <h4><span>" </span>Medir o progresso da programação por linhas de código é como medir o progresso da construção de aeronaves em termos de peso.<span> "</span><br/>-Bill Gates</h4>
                </div>
            </div>

        </div>
    )
}