import { useState, useEffect } from 'react';
import './css/Preview.css';
import Header from './components/Header';
import Footer from './components/Footer';

const SPREADSHEET_ID = '10WhZMxclOz0veVEn5gEcJIMmCFaVKzU1gL4f6ApFtkM'; 
const API_KEY = 'AIzaSyDULzjj8brOxZlhrZaRwmnHhzMekGogn1w'; 

async function fetchColumnData() {
  const urlK = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/Página1!K2:K?key=${API_KEY}`;
  const urlAA = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/Página1!AA2:AA?key=${API_KEY}`;
  
  try {
    const [responseK, responseAA] = await Promise.all([
      fetch(urlK).then(res => res.json()),
      fetch(urlAA).then(res => res.json())
    ]);
    
    const categories = responseK.values || [];
    const solutions = responseAA.values || [];

    return { categories, solutions };
  } catch (error) {
    console.error('Erro ao acessar a planilha:', error.message);
    return { categories: [], solutions: [] };
  }
}

function Preview() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setError(null);

      try {
        const { categories, solutions } = await fetchColumnData();

        if (categories.length > 0) {
          const formattedData = categories
            .map((category, index) => ({
              descricao: category[0] || `Categoria ${index + 1}`,
              solucao: solutions[index] ? <p>Solução para {category[0]}: {solutions[index][0] || ''}</p> : <p>Solução não disponível</p>
            }))
            .filter((item, index, self) =>
              index === self.findIndex((t) => t.descricao === item.descricao)
            ); 
          
          setData(formattedData);
        } else {
          setError('Nenhum dado encontrado.');
        }
      } catch (error) {
        setError('Erro ao carregar dados.');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <>
      <Header />
      <main>
        <section>
          {loading && <div>Loading...</div>}
          {error && <div>Error: {error}</div>}

          <select onChange={(e) => setSelectedCategory(e.target.value)} className="select">
            <option value="" disabled>Selecione um problema</option>
            {data.map((item, index) => (
              <option key={index} value={item.descricao}>{item.descricao}</option>
            ))}
          </select>

          <div className="solutions">
            {data.find((item) => item.descricao === selectedCategory)?.solucao || <p>Selecione uma categoria para ver a solução.</p>}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Preview;
