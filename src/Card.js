import './Card.css';

const Card = ({ cat }) => {
    return (
        <div>
            <h1>{cat.name + " " + cat.price}</h1>
            <img src={cat.image} alt="cat" /><br />
            <button className="add-to-basket">ADD TO BASKET</button>
        </div>
    )
}

export default Card;