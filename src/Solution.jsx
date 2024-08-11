import "./css/Solution.css"
import entradaDoChamado from "./img/entrada-do-chamado.png"
import verificaAsSolucoes from "./img/verficaAsSolucoes.png"
import seNaoExistir from "./img/se-nao-existir.png"
import serviceDeskResolveu from "./img/servicedesk-resolveu.png"
import serviceDeskNaoResolveu from "./img/service-desk-nao-resolveu.png"

import Header from "./components/Header"
import SecondParagraph from "./components/Text/SecondParagraph"
import SecondTitle from "./components/Text/SecondTitle"
import SecondaryButton from "./components/Button/SecondaryButton"

function Solution() {
    return (
        <>
            <Header />

            <main>
                <section className="card-container">
                    <article className="card">
                        <SecondTitle text={"Como vamos solucionar ?"} />
                        <SecondParagraph text={"A nossa solução é simples, mas pode ajudar a diminuir o tempo de resposta para cada chamado que é aberto pelo usuário. Basicamente, o usuário continuará abrindo o chamado normalmente, mas ao invés de ir direto para o Service Desk ele será direcionado para um 'check-point'."} />

                        <SecondParagraph text={"Nesse 'check-point', uma inteligência artificial analisará o novo chamado aberto, verificará se existe um chamado parecido e conferirá se há uma solução para o problema. Se existir, a IA enviará o chamado para o Service Desk com uma possível solução junto com o chamado. Se não existir, a IA adicionará o novo problema ao banco de dados e enviará para o Service Desk."} />

                        <SecondParagraph text={"Se o AMS-1 resolver, o problema será atualizado com a solução encontrada pelo responsável. Caso não seja resolvido, o chamado será encaminhado para o AMS-2, e o processo do Service Desk será repetido. Confira com imagens:"} />
                    </article>

                    <article className="card">
                        <img src={entradaDoChamado} />
                        <SecondTitle text={"Entrada do chamado"} />
                        <SecondParagraph text={"O usuário criará o seu chamado normalmente. Quando criado, antes de ser enviado para o Service Desk, o chamado passará por uma inteligência artificial, que verificará se existe algum chamado parecido com o que o usuário acabou de criar."} />
                    </article>

                    <article className="card">
                        <img src={verificaAsSolucoes} />
                        <SecondTitle text={"Existem chamados semelhantes"} />
                        <SecondParagraph text={"Se a IA encontrar qualquer chamado parecido, ela buscará a solução mais próxima ao que foi descrito no chamado. Ao selecionar a possível solução, seguirá o fluxo de envio do chamado para o Service Desk, onde já haverá uma possível solução para o problema."} />
                    </article>

                    <article className="card">
                        <img src={seNaoExistir} />
                        <SecondTitle text={"E se não existir chamados semelhantes?"} />
                        <SecondParagraph text={"Se não for encontrado nada semelhante, o problema será adicionado no banco e enviado para o Service Desk. Que pode ser resolvido nele mesmo ou ter que ser resolvido pelo AMS-2. Vamos conferir os dois casos."} />
                    </article>


                    <article className="card">
                        <img src={serviceDeskResolveu} />
                        <SecondTitle text={"Service Desk resolveu, e agora?"} />
                        <SecondParagraph text={"Nesse caso é bem simples, o problema do banco é atualizado com a solução e o chamado é finalizado."} />
                    </article>

                    <article className="card">
                        <img src={serviceDeskNaoResolveu} />
                        <SecondTitle text={"Service Desk não consegiu, estamos lascados?"} />
                        <SecondParagraph text={"Nesse caso, o Service Desk (AMS-1) enviará o chamado para o AMS-2, que receberá as informações já levantadas pelo Service Desk e pela IA, poupando tempo de ambos. Após isso, o fluxo seguirá como está. Essa solução adiciona apenas uma camada a mais ao processo, o que pode acelerar o tempo de resposta dos chamados e melhorar a satisfação dos usuários em relação ao tempo de resposta."} />
                    </article>

                    <div>
                        <SecondaryButton text={"Preview"} link={"/preview"} />
                    </div>
                </section>
            </main>
        </>
    )
}

export default Solution