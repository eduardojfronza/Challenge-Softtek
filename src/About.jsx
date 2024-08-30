import "./css/About.css"

import Header from "./components/Header"
import SecondTitle from "./components/Text/SecondTitle"
import Footer from "./components/Footer";


function About() {
    const Technologies = [
        { title: "HTML", description: "A linguagem de marcação padrão usada para criar a estrutura das páginas web." },
        { title: "CSS", description: "Uma linguagem de folhas de estilo usada para controlar a aparência e o layout das páginas web." },
        { title: "Javascript", description: "Uma linguagem de programação versátil que permite criar conteúdo dinâmico e interativo em websites." },
        { title: "Github", description: "Uma plataforma para controle de versão e codificação colaborativa, utilizando o Git como tecnologia central." },
        { title: "Node.js", description: "Um ambiente de execução JavaScript que permite executar código JavaScript no lado do servidor, possibilitando o desenvolvimento full-stack." },
        { title: "React", description: "Uma biblioteca JavaScript para construir interfaces de usuário, especialmente aplicações de página única com uma arquitetura baseada em componentes." },
        { title: "Vite", description: "Uma ferramenta de build e servidor de desenvolvimento rápido para projetos web modernos, oferecendo inicialização rápida e builds otimizados." },
    ];


    return (
        <>
            <Header />

            <main>
                <section>
                    <SecondTitle text={"Conheça sobre os desenvolvedores"} />

                    <div className="container-developer">
                        <img src="https://avatars.githubusercontent.com/u/84184154?v=4" />

                        <div>
                            <span>@rm556068</span>
                            <h3>Eduardo Fronza</h3>
                            <p>Eduardo foi responsável pela construção do estilo e da construção do código do projeto.</p>
                        </div>
                    </div>

                    <div className="container-developer">
                        <img src="https://avatars.githubusercontent.com/u/84185442?v=4" />

                        <div>
                            <span>@rm556808</span>
                            <h3>João Trein</h3>
                            <p>João foi responsável pela construção dos roteiros, edição dos videos pitchs e na construção do código.</p>
                        </div>
                    </div>
                </section>

                <section>
                    <SecondTitle text={"Quais tecnologias foram usadas"} />

                    <div className="container-tech">
                        {Technologies.map((tech, index) => {
                            return (
                                <article className="card-tech" key={index}>
                                    <h4>{tech.title}</h4>
                                    <p>{tech.description}</p>
                                </article>
                            )
                        })}
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}

export default About