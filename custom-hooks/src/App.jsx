import React from 'react'
import useLocalStorage from './useLocalStorage';
import useFetch from './useFetch';

function App() {
  const[produto, setProduto] = useLocalStorage('produto', '');
  const {request, data} = useFetch();
  
  function handleClick({target}) {
    setProduto(target.innerText);
  }
  return (
    <div>
      <p>Produto preferido: {produto}</p>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
    </div>
  );
}

export default App;
