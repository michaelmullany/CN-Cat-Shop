const Card = ({ cat }) => {
    return (
        <div>
            <h1>{cat.name + " " + cat.price}</h1>
            <img src={cat.image} alt="cat" />
            <button className="add-to-basket"></button>
        </div>
    )
}

export default Card;