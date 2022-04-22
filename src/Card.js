import './Card.css';

const Card = ({ cat, addToCheckout, index }) => {
    
    
    
    return (
        <div>
            <h1>{cat.name}</h1>
            <h2>{cat.price}</h2>
            <img src={cat.image} alt="cat" /><br/>
            <button className="add-to-basket" onClick={()=> addToCheckout(
                {
                    name: cat.name,
                    price: cat.price,
                    image: cat.image,
                    key: index

                }
            )}>Add to Basket</button>
        </div>
    )
}

export default Card;