import './index.css'

export default ({ product }) => {
    return (
        <>
            <div className="offer_card">
                <img src={product.image} alt="" />
            </div>
        </>
    )
}