import './App.css';
import Header from'./componentes/Header/Header'
import NavBar from'./componentes/NavBar/Nav'


function App() {
  let tittle = "Menu E-commerce";
  return (
    <div className="App">
      <Header/>
        <NavBar/>
    </div>
  );
}

export default App;
