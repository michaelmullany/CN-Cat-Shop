import './App.css';
import { faker } from '@faker-js/faker';
import { useState, useEffect } from 'react'
import Card from './Card';
import { CatContainer } from './App.styled.js'
import BasketPopUp from './BasketPopUp';
import Modal from 'react-modal';
import Header from './Header'

/* PARAMETERS */
const numCats = 6;
const minPrice = 100;
const maxPrice = 500;

function App() {

  const [cats, setCats] = useState([]);
  const [error, setError] = useState(null);

  // For Modal //
  const [popUpIsOpen, setPopUpIsOpen] = useState(false);
  const popUpAction = () => setPopUpIsOpen(!popUpIsOpen);
  // For Modal //

  // For checkout items //
  const [checkoutItems, setCheckoutItems] = useState([])
  const addToCheckout = (event) => {
    let tempArray = [...checkoutItems];
    tempArray.push(event)
    setCheckoutItems(tempArray)
  }
  const removeFromCheckout = (event) => {
    let tempArray = [...checkoutItems]
    tempArray.push(event)
    setCheckoutItems(tempArray)
  }
  // For checkout items //

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

        for (let i = 0; i < numCats; i++) {
          const catName = faker.name.firstName();
          const catPrice = faker.commerce.price(minPrice, maxPrice, 0, "£");
          const catImage = catImages[i].url;
          const newCat = { name: catName, price: catPrice, image: catImage };
          newCats.push(newCat);
        }
        setCats(newCats);
      } catch (err) {
      }
    }
    fetchCats(numCats)
  }, []);

  return (
    <div className='App'>
      <Header />
      <button className='cart' onClick={popUpAction}>CART</button>
      <Modal
        isOpen={popUpIsOpen}
        onRequestClose={popUpAction}
        overlayClassName='customOverlay'
        className='customClass'>
        <BasketPopUp close={popUpAction} />
      </Modal>
      {/* For Modal */}

      {cats.map((cat, index) => {
        return <Card key={index} cat={cat} addToCheckout={addToCheckout}></Card>
      })}
    </div>
  );
}

export default App;