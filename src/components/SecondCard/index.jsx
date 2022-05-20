import './index.css'

export default ({ news }) => {
    return (
        <>
            <div className="second_card">
                <img src={news.image} alt="" />
            </div>
        </>
    )
}