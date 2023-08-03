import PriceBlockItem from "./PriceBlockItem";

const PriceBlock = ({priceCostBlock}) => {

    const content = priceCostBlock.items?.map((item, i) => (
        <PriceBlockItem key={item.name} priceItem={item}/>
    ))

    return (
        <div>
            <h4 className="text-xl md:text-2xl text-yellow font-semibold text-center">{priceCostBlock.title}</h4>
            <div className="grid grid-cols-[5fr_1fr] gap-1 mb-2">
                {content}
            </div>
        </div>
    )
}
export default PriceBlock;