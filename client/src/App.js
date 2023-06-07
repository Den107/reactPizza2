import './scss/app.scss'
import Header from "./components/header";
import Categories from "./components/categories";
import Sort from "./components/sort";
import PizzaBlock from "./components/pizzaBlock";
import pizzas from './assets/pizzas.json'

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header/>
        <div className="content">
          <div className="container">
            <div className="content__top">
             <Categories/>
              <Sort/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    pizzas.map(value=><PizzaBlock key={value.id} {...value}/>)
                }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
