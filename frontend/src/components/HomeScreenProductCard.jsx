import React from "react";
import {useGetAllProductsQuery} from "../features/slices/productApiSlice";
import CustomLoader from "./CustomLoader";

// import {assets} from "../assets/assets";

export default function HomeScreenProductCard() {

    // const mockProduct = [
    //     {
    //         id: 1,
    //         name: 'Leather Long Wallet',
    //         color: 'Natural',
    //         price: '$75',
    //         href: '#',
    //         imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-04-trending-product-02.jpg',
    //         imageAlt: 'Hand stitched, orange leather long wallet.',
    //     },
    //     {
    //         id: 2,
    //         name: 'Wooden cabinet',
    //         color: 'Natural',
    //         price: '$205',
    //         href: '#',
    //         imageSrc: assets.cabinet1,
    //         imageAlt: 'Custom made cabinet',
    //     },
    //     {
    //         id: 3,
    //         name: 'Chair',
    //         color: 'Natural',
    //         price: '$185',
    //         href: '#',
    //         imageSrc: assets.chair1,
    //         imageAlt: 'Hermon Miller Chair',
    //     },
    //     {
    //         id: 4,
    //         name: 'Grey leather armchair',
    //         color: 'Natural',
    //         price: '$385',
    //         href: '#',
    //         imageSrc: assets.grey_comportable_armchair,
    //         imageAlt: 'Grey leather armchair',
    //     },
    // ]
    const {data: products, isLoading, isError } = useGetAllProductsQuery();

    return (
        <>
            {isLoading ? (
                <CustomLoader />
            ) : isError ? (
                <div>{isError?.data?.message || isError.error}</div>
            ) : (
                <>
                    <div
                        className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8"
                    key={products._id}>
                        {products?.map((product) => (
                            <div key={product._id}
                                 className="group relative cursor-pointer my-2 hover:translate-y-[-10px] transition-all duration-500">
                                <div
                                    className="h-56 w-full overflow-hidden rounded-md cursor-pointer bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80"
                                    key={product.id}>
                                    <img alt={product.name} src={product.image}
                                         key={product._id}
                                         className="size-full object-cover"/>
                                </div>
                                <h3 className="mt-4 text-sm text-gray-700">
                                    <a href={"/products"}>
                                        <span className="absolute inset-0" key={product._id}/>
                                        {product.name}
                                    </a>
                                </h3>
                                <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                <p className="mt-1 text-sm font-medium text-gray-900">${product.price}</p>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </>
    )
}