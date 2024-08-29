import { useState, useEffect } from "react";
import "./css/Problem.css";
import Header from "./components/Header";
import { gapi } from "gapi-script"; // Importação da biblioteca gapi-script

const SPREADSHEET_ID = "10WhZMxclOz0veVEn5gEcJIMmCFaVKzU1gL4f6ApFtkM";
const SHEET_NAME = "Página1";
const CLIENT_ID = "762511291551-vn97c1cgpej8n7o09bimq12b1edifv32.apps.googleusercontent.com.apps.googleusercontent.com";
const API_KEY = "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"; 
const SCOPE = "https://www.googleapis.com/auth/spreadsheets";

function Problem() {
  const [formData, setFormData] = useState({
    categoria: "",
    prioridade: "",
    descricao: ""
  });

  // Inicializa o cliente gapi
  useEffect(() => {
    const initClient = () => {
      gapi.client
        .init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          scope: SCOPE,
          discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
        })
        .then(() => {
          console.log("GAPI client initialized.");
        })
        .catch((error) => {
          console.error("Erro ao inicializar o cliente GAPI", error);
        });
    };

    // Carrega a biblioteca gapi e inicializa o cliente
    gapi.load("client:auth2", initClient);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { categoria, prioridade, descricao } = formData;
    const values = [[categoria, prioridade, descricao]]; 

    try {
      // Confirma se o cliente gapi está pronto
      if (!gapi.client || !gapi.client.sheets) {
        console.error("GAPI client is not ready.");
        alert("Cliente GAPI não está pronto. Tente novamente.");
        return;
      }

      await gapi.client.sheets.spreadsheets.values.append({
        spreadsheetId: SPREADSHEET_ID,
        range: `${SHEET_NAME}!K:M`,
        valueInputOption: "USER_ENTERED",
        resource: {
          values: values,
        },
      });

      alert("Dados enviados com sucesso!");
      setFormData({
        categoria: "",
        prioridade: "",
        descricao: ""
      });
    } catch (error) {
      console.error("Erro ao enviar os dados:", error.message);
      alert("Erro ao enviar os dados: " + error.message);
    }
  };

  const handleAuthClick = () => {
    gapi.auth2.getAuthInstance().signIn();
  };

  const handleSignoutClick = () => {
    gapi.auth2.getAuthInstance().signOut();
  };

  return (
    <>
      <Header />
      <main>
        <div className="forms-area">
          <button onClick={handleAuthClick}>Login com Google</button>
          <button onClick={handleSignoutClick}>Logout</button>
          <form onSubmit={handleSubmit}>
            <label htmlFor="categoria">Categoria do Problema:</label>
            <select
              id="categoria"
              name="categoria"
              className="form-select"
              value={formData.categoria}
              onChange={handleInputChange}
            >
              <option value="">Selecione uma categoria</option>
              <option value="AMS-Não SAP">AMS-Não SAP</option>
              <option value="Service Desk">Service Desk</option>
              <option value="Acesso">Acesso</option>
              <option value="Field Service">Field Service</option>
              <option value="Ativos">Ativos</option>
            </select>

            <label htmlFor="prioridade">Prioridade:</label>
            <select
              id="prioridade"
              name="prioridade"
              className="form-select"
              value={formData.prioridade}
              onChange={handleInputChange}
            >
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
              value={formData.descricao}
              onChange={handleInputChange}
            ></textarea>

            <button type="submit" className="form-button">Enviar</button>
          </form>
        </div>
      </main>
    </>
  );
}

export default Problem;