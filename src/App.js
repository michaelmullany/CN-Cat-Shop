import './App.css';
import { faker } from '@faker-js/faker';
import { useState, useEffect } from 'react'

/* PARAMETERS */
const numCats = 5;
const minPrice = 100;
const maxPrice = 500;

function App() {

  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchCats = numCats => {
      try {
        const newCats = [];
        for (let i = 0; i < numCats; i++)
        {
          const catName = faker.name.firstName();
          const catPrice = faker.commerce.price(minPrice, maxPrice, 0, "£");
          const newCat = {name: catName, price: catPrice};
          newCats.push(newCat);
        }
        setCats(newCats);
      } catch (err) {
      }
    }
    fetchCats(numCats)
  }, []);

  return (
    <div className="App">

      {cats.map((cat, index) => (
        <div key={index}>
          <h1>{cat.name + ", " + cat.price}</h1>
        </div>
      ))}

    </div>
  );
}

export default App;