const BasketPopUp = (props) => {
    return (
        <div className="modalPopUp">
            <div id="closeButton">
                <button onClick={props.close} id="xBtn">X</button>
            </div>
            <div id="basketContents">
              <h2>Basket</h2>
              <h3>Total: £{props.total}</h3>
              {props.basketItems.map((x, index) => {
                return (
                <div key={index}>
                    <img src={x.image} />
                    <h2>Name: {x.name}</h2>
                    <p>Price: {x.price}</p>
                    <button onClick={() => props.remove(index)}>Remove</button>
                </div>
                )             
            })}
            </div>
            <div className="checkoutOptions">
                <button>Checkout</button>
                <button onClick={props.close}>Keep looking</button>
            </div>
        </div>
    )
}

export default BasketPopUp