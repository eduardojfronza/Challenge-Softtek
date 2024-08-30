import "./css/Problem.css";
import Header from "./components/Header";

function Problem() {
  return (
    <>
      <Header />
      <main>
        <div className="forms-area">
          <form>
            <label htmlFor="categoria">Categoria do Problema:</label>
            <select id="categoria" name="categoria" className="form-select">
              <option value="">Selecione uma categoria</option>
              <option value="AMS-Não SAP">AMS-Não SAP</option>
              <option value="Service Desk">Service Desk</option>
              <option value="Acesso">Acesso</option>
              <option value="Field Service">Field Service</option>
              <option value="Ativos">Ativos</option>
            </select>

            <label htmlFor="prioridade">Prioridade:</label>
            <select id="prioridade" name="prioridade" className="form-select">
              <option value="">Selecione a prioridade</option>
              <option value="3">Baixo (3)</option>
              <option value="2">Médio (2)</option>
              <option value="1">Alta (1)</option>
              <option value="4">Planejamento (4)</option>
            </select>

            <label htmlFor="descricao">Descrição:</label>
            <textarea
              id="descricao"
              name="descricao"
              className="form-textarea"
              rows="4"
              placeholder="Descreva o problema aqui..."
            ></textarea>

            <button className="form-button">Enviar</button>
          </form>
        </div>
      </main>
    </>
  );
}

export default Problem;
