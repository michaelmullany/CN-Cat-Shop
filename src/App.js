import './App.css';
import { faker } from '@faker-js/faker';
import { useState, useEffect } from 'react'
import Card from './Card';
import BasketPopUp from './BasketPopUp';
import Modal from 'react-modal';
import Header from './Header'

/* PARAMETERS */
const numCats = 12;
const minPrice = 100;
const maxPrice = 500;

function App() {

  const [cats, setCats] = useState([]);
  const [error, setError] = useState(null);

  // For Modal //
  const [popUpIsOpen, setPopUpIsOpen] = useState(false);
  const popUpAction = () => {    
    
    setPopUpIsOpen(!popUpIsOpen)   
  };
  // For Modal //

  // For checkout items //
  const [checkoutItems, setCheckoutItems] = useState([])
  const [total, setTotal] = useState(0)
  
  const addToCheckout = (obj) => {
    let tempArray = [...checkoutItems];
    console.log(tempArray);
    tempArray.push(obj);
    setCheckoutItems(tempArray);

    let newTotal = 0;
    tempArray.forEach(cat => {
      newTotal += (1 * cat.price.slice(1));
    });

    setTotal(newTotal);
    popUpAction();
    
  }
  const removeFromCheckout = (index) => {
    let tempArray = [...checkoutItems];
    tempArray.splice(index, 1);   
    setCheckoutItems(tempArray);

    let newTotal = 0;
    tempArray.forEach(cat => {
      newTotal += (1 * cat.price.slice(1));
    });

    setTotal(newTotal);
  }

  useEffect(() => {
    const fetchCats = async (numCats) => {
      try {
        const newCats = [];
        const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=' + numCats);
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const catImages = await response.json();

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
        className='customClass'
        >
        <BasketPopUp close={popUpAction} add={addToCheckout} remove={removeFromCheckout} basketItems={checkoutItems} total={total}/>
      </Modal>
      {/* For Modal */}

      <div id="catContainer">
        {cats.map((cat, index) => {
          return <Card key={index} index={index} cat={cat} addToCheckout={addToCheckout} ></Card>
        })}
      </div>
    </div>
  );
}

export default App;