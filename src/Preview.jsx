import { useState, useEffect } from "react";
import "./css/Preview.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";

const SPREADSHEET_ID = "10WhZMxclOz0veVEn5gEcJIMmCFaVKzU1gL4f6ApFtkM";
const API_KEY = "AIzaSyDULzjj8brOxZlhrZaRwmnHhzMekGogn1w";

async function fetchColumnData() {
  const urlK = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/Página1!K2:K?key=${API_KEY}`;
  const urlQ = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/Página1!Q2:Q?key=${API_KEY}`;
  const urlAA = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/Página1!AA2:AA?key=${API_KEY}`;

  try {
    const [responseK, responseQ, responseAA] = await Promise.all([
      fetch(urlK).then((res) => res.json()),
      fetch(urlQ).then((res) => res.json()),
      fetch(urlAA).then((res) => res.json()),
    ]);

    const categories = responseK.values;
    const descriptions = responseQ.values;
    const solutions = responseAA.values;

    return { categories, descriptions, solutions };
  } catch (error) {
    console.error("Erro ao acessar a planilha:", error.message);
    return { categories: [], descriptions: [], solutions: [] };
  }
}

function Preview() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setError(null);

      try {
        const { categories, descriptions, solutions } = await fetchColumnData();

        if (categories.length > 0) {
          const uniqueCategories = new Set();
          const formattedData = [];

          categories.forEach((category, index) => {
            const descricao = descriptions[index]
              ? descriptions[index][0]
              : "Descrição não disponível";
            const categoria = category[0]
              ? category[0]
              : `Categoria ${index + 1}`;
            const solucao = solutions[index]
              ? solutions[index][0]
              : "Solução não disponível";

            uniqueCategories.add(categoria);

            formattedData.push({ categoria, descricao, solucao });
          });

          setCategories([...uniqueCategories]);
          setAllData(formattedData);
        } else {
          setError("Nenhum dado encontrado.");
        }
      } catch (error) {
        setError("Erro ao carregar dados.");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const handleCategoryChange = (selected) => {
    setSelectedCategory(selected);

    const filtered = allData.filter((item) => item.categoria === selected);
    const uniqueData = Array.from(
      new Set(filtered.map((item) => `${item.descricao}-${item.solucao}`))
    ).map((item) => {
      const [descricao, solucao] = item.split("-");
      return { descricao, solucao };
    });

    setFilteredData(uniqueData);
  };

  return (
    <>
      <Header />
      <main>
        <section>
          <select
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="select"
            value={selectedCategory}
          >
            <option value="" disabled>
              Selecione uma categoria
            </option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>

          <div className="solutions">
            {filteredData.map((item, index) => (
              <div key={index}>
                <ul>
                  <p>
                    <strong>Descrição:</strong> {item.descricao}
                  </p>
                  <p>
                    <strong>Solução:</strong> {item.solucao}
                  </p>
                </ul>
              </div>
            ))}
          </div>
          <Link to="/AddNewProblem">
            <button className="btn">
              Clique aqui para criar sua requisição
            </button>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Preview;
