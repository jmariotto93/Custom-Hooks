import React from 'react'
import useLocalStorage from './useLocalStorage';
import useFetch from './useFetch';

function App() {
  const[produto, setProduto] = useLocalStorage('produto', '');
  const {request, data, loading, error} = useFetch();
  
  function handleClick({target}) {
    setProduto(target.innerText);
  }

  React.useEffect(() => {
    async function fetchData() {
      const {response, json} = await request('https://ranekapi.origamid.dev/json/api/produto/');
    
      console.log(response, json)
    }
    fetchData();
  }, [request]);
   
  if (error) return error;
  if (loading) return <p>Carregando...</p>
  if (data)
    return (
      <div>
        <p>Produto preferido: {produto}</p>
        <button onClick={handleClick}>notebook</button>
        <button onClick={handleClick}>smartphone</button>

        {data.map((produto) => ( 
        <div key={produto.id}>
          <h1>{produto.nome}</h1>
        </div>
        ))}
      </div>
  );
  else return null;
}

export default App;
