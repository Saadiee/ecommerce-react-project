import {useContext, useEffect, useState} from "react";
import {ShopContext} from "../context/ShopContext.jsx";
import {assets} from "../assets/assets.js";
import Title from "../components/Title.jsx";
import ProductItem from "../components/ProductItem.jsx";


function Collection() {

    const {products, search, showSearch} = useContext(ShopContext);
    const [showFilter, setShowFilter] = useState(false);
    const [filterProducts, setFilterProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);
    const [sortType, setSortType] = useState('relevant');

    const toggleCategory = (e) => {
        if (category.includes(e.target.value)) {
            setCategory(prev => prev.filter(item => item !== e.target.value));
        } else {
            setCategory(prev => [...prev, e.target.value]);
        }
    }

    const toggleSubCategory = (e) => {
        if (subCategory.includes(e.target.value)) {
            setSubCategory(prev => prev.filter(item => item !== e.target.value));
        } else {
            setSubCategory(prev => [...prev, e.target.value]);
        }
    }

    const applyFilter = () => {
        let productCopy = products.slice();
        if (showSearch && search) {
            productCopy = productCopy.filter(item =>
                item.name.toLowerCase().includes(search.toLowerCase())
            );
        }
        if (category.length > 0) {
            productCopy = productCopy.filter(item => category.includes(item.category));
        }
        if (subCategory.length > 0) {
            productCopy = productCopy.filter(item => subCategory.includes(item.subCategory));
        }
        setFilterProducts(productCopy);
    }

    const sortProducts = () => {
        let fpCopy = filterProducts.slice();
        switch (sortType) {
            case 'low-high':
                setFilterProducts(fpCopy.sort((a, b) => (a.price - b.price)));
                break;
            case 'high-low':
                setFilterProducts(fpCopy.sort((a, b) => (b.price - a.price)));
                break;
            default:
                applyFilter();
                break;
        }
    }

    useEffect(() => {
        applyFilter();
    }, [category, subCategory, search, showSearch]);

    useEffect(() => {
        sortProducts();
    }, [sortType])

    return (
        <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

            {/* Filter Options */}
            <div className='min-w-60'>
                <p onClick={() => setShowFilter(!showFilter)}
                   className='my-2 text-xl flex items-center cursor-pointer gap-2 uppercase'>Filters
                    <img className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`} src={assets.dropdown_icon}
                         alt=""/></p>
                {/* Category Filter */}
                <div className={`border border-gray-300 py-3 pl-5 mt-6 sm:block ${showFilter ? "" : "hidden"}`}>
                    <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
                    <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                        <p className="flex gap-2">
                            <input className='w-3' type="checkbox" value={"Men"} onChange={toggleCategory}/> Men
                        </p>
                        <p className="flex gap-2">
                            <input className='w-3' type="checkbox" value={"Women"} onChange={toggleCategory}/> Women
                        </p>
                        <p className="flex gap-2">
                            <input className='w-3' type="checkbox" value={"Kids"} onChange={toggleCategory}/> Kids
                        </p>
                    </div>
                </div>

                {/* Sub-Category Filter */}
                <div className={`border border-gray-300 py-3 pl-5 my-5 sm:block ${showFilter ? "" : "hidden"}`}>
                    <p className='mb-3 text-sm font-medium'>TYPE</p>
                    <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                        <p className="flex gap-2">
                            <input className='w-3' type="checkbox" value={"Topwear"} onChange={toggleSubCategory}/> Top
                            Wear
                        </p>
                        <p className="flex gap-2">
                            <input className='w-3' type="checkbox" value={"Bottomwear"}
                                   onChange={toggleSubCategory}/> Bottom Wear
                        </p>
                        <p className="flex gap-2">
                            <input className='w-3' type="checkbox" value={"Winterwear"}
                                   onChange={toggleSubCategory}/> Winter Wear
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Side */}
            <div className="flex-1">

                <div className="flex justify-between text-base mb-4 sm:text-2xl">
                    <Title text1={'ALL'} text2={"COLLECTIONS"}/>
                    {/*Product Sort*/}
                    <select onChange={(e) => setSortType(e.target.value)}
                            className='text-sm px-2 bg-transparent border-2 border-black'>
                        <option value="relevent">Sort by: Relevant</option>
                        <option value="low-high">Sort by: Low to High</option>
                        <option value="high-low">Sort by: High to Low</option>
                    </select>
                </div>

                {/* Map Products */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
                    {
                        filterProducts.map((item, index) => (
                            <ProductItem key={index} name={item.name} id={item.id} price={item.price}
                                         image={item.image}/>
                        ))
                    }
                </div>

            </div>

        </div>
    );
}

export default Collection;