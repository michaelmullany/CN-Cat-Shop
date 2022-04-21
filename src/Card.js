const Card = ({ cat, addToCheckout }) => {
    return (
        <div>
            <h1>{cat.name + " " + cat.price}</h1>
            <img src={cat.image} alt="cat" /><br/>
            <button className="add-to-basket" onClick={()=> addToCheckout(
                {
                    name: cat.name,
                    price: cat.price,
                    image: cat.image,                    
                }
            )}>Add to Basket</button>
        </div>
    )
}

export default Card;