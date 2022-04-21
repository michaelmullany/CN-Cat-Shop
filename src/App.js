import './App.css';
import { faker } from '@faker-js/faker';
import { useState, useEffect } from 'react'
import { CatContainer } from './App.styled.js'

/* PARAMETERS */
const numCats = 6;
const minPrice = 100;
const maxPrice = 500;

function App() {

  const [cats, setCats] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCats = async (numCats) => {
      try {
        const newCats = [];
        const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=' + numCats);
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const catImages = await response.json();
        console.log(catImages);

        for (let i = 0; i < numCats; i++)
        {
          const catName = faker.name.firstName();
          const catPrice = faker.commerce.price(minPrice, maxPrice, 0, "£");
          const catImage = catImages[i].url;
          const newCat = {name: catName, price: catPrice, image: catImage};
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
      <CatContainer>
        {cats.map((cat, index) => (
          <div key={index}>
            <h1>{cat.name + ", " + cat.price}</h1>
            <img src={cat.image} alt="cat" />
          </div>
        ))}
      </CatContainer>

    </div>
  );
}

export default App;