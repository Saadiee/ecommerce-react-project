import React, {useContext, useEffect} from "react";
import {ShopContext} from "../context/ShopContext.jsx";
import Title from "./Title.jsx";
import ProductItem from "./ProductItem.jsx";

function RelatedProducts({category, subCategory}) {

    const {products} = useContext(ShopContext);
    const [related, setRelated] = React.useState([]);

    useEffect(() => {
        if (products.length > 0) {
            let productsCopy = products.slice();
            productsCopy = productsCopy.filter((item) => category === item.category);
            productsCopy = productsCopy.filter((item) => subCategory === item.subCategory);
            setRelated(productsCopy); // Update the related state with the filtered products
        }
    }, [products, category, subCategory]); // Add dependencies for re-computation


    return (
        <div className='my-24'>
            <div className="text-center text-3xl py-2">
                <Title text1={`Related`} text2={"Products"}/>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                    {related.map((item, index) => (
                    <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
                ))}
            </div>
        </div>
    );
}

export default RelatedProducts;