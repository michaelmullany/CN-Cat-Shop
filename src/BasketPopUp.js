const BasketPopUp = (props) => {
    return (
        <div className="modalPopUp">
            <div id="closeButton">
                <button onClick={props.close} id="xBtn">X</button>
            </div>
            <div id="basketContents">
              <h2>Basket</h2>
              {props.basketItems.map(x => {
                  return (
              <div>
              <img src={x.image} />
              <h2>Name: {x.name}</h2>
              <p>Price: {x.price}</p>
              <button>remove</button>
            </div>
            )             
            })}
            </div>
            <div className="checkoutOptions">
                <button>Checkout</button>
                <button>Keep looking</button>
            </div>
        </div>
    )
}

export default BasketPopUp