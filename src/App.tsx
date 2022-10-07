import { useGetProducts } from './lib/api-hooks';
import { FetchState } from './types';
import './App.css';

function App() {
  const [products, attributes, fetchState, getProducts] = useGetProducts(window.location.pathname);
  const btnOnClick = () => getProducts();

  //componen
  return (
    <div className="container">
      <h1>React TypeScript API hooks</h1>
      {fetchState === FetchState.DEFAULT && (
        <>
          <p>
            Olá, click no botão abaixo para retornar os dados da API.
          </p>
          <button onClick={btnOnClick}>Get Product By URL</button>
        </>
      )}
      {fetchState === FetchState.LOADING && <p>Fetching products...</p>}
      {fetchState === FetchState.ERROR && (
        <>
          <p>Oops! Something went wrong. Please try again.</p>
          <button onClick={btnOnClick}>Get Products</button>
        </>
      )}
      {fetchState === FetchState.SUCCESS && (
        <>
          <p>Aqui está os detalhes do produto:</p>
          <ul className="posts-list">
            {(Object as any).values(attributes)}
          </ul>
        </>
      )}
    </div>
  );
}

export default App;