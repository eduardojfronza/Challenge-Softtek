import "./css/Preview.css"

import { useState } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"

function Preview() {
    const [problem, setProblem] = useState("")
    const data = [
        {
            descricao: "Sistema lento",
            solucao: <p>Com base nos chamdaos anteriores a principal solução é reinciado sistema operacional local se for somente na maquina do usuário. Se for no departamento todo a solução aplicada é reiniciar serviço database</p>
        },
        {
            descricao: "Criar Perfil SAP",
            solucao: <p>É necessario que o usuário forneca os dados para a criação do Perfil.</p>
        },
        {
            descricao: "Sistema não abre",
            solucao: <p>Se for somente na maquina do cliente basta reiniciar sistema operacional local. Caso seja no departamento todo, não possuou informações o suficinete para lhe dar uma solução.</p>
        },
        {
            descricao: "Impressora Não Imprime",
            solucao: <>
                <p>Com base nos chamados anteriores a solução podem ser:</p>
                <ul>
                    <li>Impressora desligada - ligar a impressora</li>
                    <li>Impressora não imprimir, estão sem luz - Realizado acionamento time de facilites local.</li>
                    <li>Impressora não imprimir, mas está ligada e somente em uma maquina nao imprimi - Realizar instalção do driver na impressora.</li>
                </ul>
            </>,
        },
    ]

    return (
        <>
            <Header />

            <main>
                <section>
                    <select onChange={(e) => setProblem(e.target.value)} className="select">
                        <option value="" disabled>Selecione um problema</option>
                        {data.map((item) => (
                            <option key={item.descricao} value={item.descricao}>{item.descricao}</option>
                        ))}
                    </select>

                    <div className="solutions">
                        {data.map((item) => item.descricao === problem ? item.solucao : null)}
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}

export default Preview
