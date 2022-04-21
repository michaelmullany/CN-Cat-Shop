const BasketPopUp = (props) => {
    return (
        <div className="modalPopUp">
            <div id="closeButton">
                <button onClick={props.close} id="xBtn">X</button>
            </div>
            <div id="basketContents">
                <h2>Basket</h2>
                <p>Total:</p>
            </div>
            <div classNames="checkoutOptions">
                <button>Checkout</button>
                <button>Keep looking</button>
            </div>
        </div>
    )
}

export default BasketPopUp