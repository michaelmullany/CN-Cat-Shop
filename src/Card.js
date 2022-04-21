const Card = ({ cat, index }) => {
    <div key={index}>
        <h1>{cat.name + " " + cat.price}</h1>
        <img src={cat.image} alt="cat" />
        <button class="add-to-basket"></button>
    </div>
}

export default Card;