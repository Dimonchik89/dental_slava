
const PriceBlockItem = ({priceItem}) => {

    return (
        <>
            <div className="bg-gray-light p-1 text-base md:text-xl capitalize">
                {priceItem.name}
            </div>
            <div className="bg-gray-light p-1 text-base md:text-xl">
                {priceItem.cost}
            </div>
        </>
    )
}
export default PriceBlockItem;