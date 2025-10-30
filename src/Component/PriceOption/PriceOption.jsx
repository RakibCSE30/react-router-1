import Features from "../Features/Features"


export default function PriceOption({ option }) {
    const { name, features, price } = option
    return (
        <div className="gap-10 text-center flex flex-col p-10 bg-blue-600 rounded-3xl">
            <h3>
                <span className="text-7xl">{price}</span>
                <span className="text-2xl">/mon</span>
            </h3>
            <h3 className="text-3xl flex-grow">{name}</h3>
             {
                features.map((feature ,idx)=> <Features key={idx} feature={feature}></Features>)
             }

             <button className="bg-green-400 text-white hover:bg-amber-200 w-full p-6 rounded-2xl">Buy Now</button>
        </div>
    )
}
