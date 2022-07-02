import './App.css';
import { getAllProducts } from './actions/productActions'

function App() {

  async function getProducts() {
    const data = await getAllProducts()
    console.log(data)
  }

  getProducts()

  return (
    <div className='main-container'>
      <p>Intial Testing</p>

    </div>
  );
}

export default App;
