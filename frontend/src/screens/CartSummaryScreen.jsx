

import { ChevronDownIcon, } from '@heroicons/react/16/solid'
import { CheckIcon, ClockIcon, QuestionMarkCircleIcon} from '@heroicons/react/20/solid'
import React from "react";
import  { useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addToCart, removeFromCart} from "../features/slices/cartSlice";
import {FaTrash} from "react-icons/fa";
import {toast} from "react-toastify";
import Meta from "../components/Meta";

// import {assets} from "../assets/assets";

// const mockShopping = [
//     {
//         _id: '1',
//         name: 'Wooden Designer Chair',
//         image: assets.chair1,
//         description:
//             'Contemporary wooden chair. Designed in Japan',
//         brand: 'DWR',
//         category: 'Furniture',
//         price: 489.99,
//         countInStock: 12,
//         rating: 4.5,
//         numReviews: 38,
//     },
//     {
//         _id: '2',
//         name: 'Grey Comfortable Arm Chair',
//         image: assets.grey_comportable_armchair,
//         description:
//             'The Emmy speaks to multiple generations,” says Beamer. “Youthful yet mature, it resonates with a sense of modernism' +
//             ' and tradition. It’s a place to feel at home.” Made in U.S.A.',
//         brand: 'Emma Chair',
//         category: 'Furniture',
//         price: 599.99,
//         countInStock: 7,
//         rating: 4.0,
//         numReviews: 40,
//     },
//     {
//         _id: '3',
//         name: 'Grey Lounge Sofa',
//         image: assets.grey_sofa_isolated,
//         description:
//             'Charles and Ray Eames had ideas about making a better world, one in which things were designed to ' +
//             'fulfill the practical needs of ordinary people and bring greater pleasure to our lives. Their Soft Pad ' +
//             'Collection (1969) of luxuriously padded chairs evolved from their Aluminum Group Collection. With the addition ' +
//             'of plush 2” thick cushions, the Soft Pad Collection retains the style of the earlier one but adds ' +
//             'significant comfort. Backed by a 12-year manufacturer’s warranty.',
//         brand: 'Emma Chair',
//         category: 'Furniture',
//         price: 3299.99,
//         countInStock: 3,
//         rating: 2.0,
//         numReviews: 50,
//     },
//     {
//         _id: '4',
//         name: 'Modern Bedrooms',
//         image: assets.modern_bedroom,
//         description:
//             'Modern bedroom developed for creature comfort. Designed in Japan',
//         brand: 'Herman Miller',
//         category: 'Furniture',
//         price: 1299.99,
//         countInStock:22,
//         rating: 4.0,
//         numReviews: 10,
//     },
// ]

export default function CartSummaryScreen() {
    const cart = useSelector((state) => state.cartSlice)
    const user = useSelector((state) => state.auth);
    const {cartItems} = cart;

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const addToCartHandler = async (product, qty) => {
        dispatch(addToCart({...product, qty}));
    }
    const removeToCartHandler = async (id) => {
        dispatch(removeFromCart(id));
    }
    const checkoutHandler = () => {
        if (cartItems && cartItems.length === 0) {
            toast.error("Cart is empty");
        }
        if (user && cartItems.length > 0) {
            navigate("/checkout");
        } else {
            navigate("/login");
        }
    }

    return (
        <>
            <Meta title={"Cart Page"} />
            {/* Shopping Cart Summary  */}
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Shopping Cart</h1>

                    <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
                        <section aria-labelledby="cart-heading" className="lg:col-span-7">
                            <h2 id="cart-heading" className="sr-only">
                                Items in your shopping cart
                            </h2>

                            <ul key={"cartId"} className="divide-y divide-gray-200 border-b border-t border-gray-200">
                                {cartItems.map((product, productIdx) => (
                                    <li key={`${product}- ${productIdx}`} className="flex py-6 sm:py-10">
                                        <div className="shrink-0">
                                            <img
                                                alt={product.name}
                                                src={product.image}
                                                className="size-24 rounded-md object-cover sm:size-48"
                                            />
                                        </div>

                                        <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                                            <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                                                <div>
                                                    <div className="flex justify-between">
                                                        <h3 className="text-sm">
                                                            <a href={product.href}
                                                               className="font-medium text-gray-700 hover:text-gray-800">
                                                                {product.name}
                                                            </a>
                                                        </h3>
                                                    </div>
                                                    <p className="mt-1 text-sm font-medium text-gray-900">${product.price}</p>
                                                </div>

                                                <div className="mt-4 sm:mt-0 sm:pr-9">
                                                    <div className="grid w-full max-w-16 grid-cols-1">
                                                        <select value={product.qty}
                                                                name={`quantity-${productIdx}`}
                                                                aria-label={`Quantity, ${product.name}`}
                                                                onChange={(e) => addToCartHandler(product, Number(e.target.value))}
                                                                className="col-start-1 row-start-1 appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                        >
                                                            {[...Array(product.countInStock).keys()].map((x) => (
                                                                <option key={x + 1} value={x + 1}> {x+ 1}</option>
                                                            ))}

                                                        </select>
                                                        {/*<select*/}
                                                        {/*    name={`quantity-${productIdx}`}*/}
                                                        {/*    aria-label={`Quantity, ${product.name}`}*/}
                                                        {/*    className="col-start-1 row-start-1 appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"*/}
                                                        {/*>*/}
                                                        {/*    <option value={1}>1</option>*/}
                                                        {/*    <option value={2}>2</option>*/}
                                                        {/*    <option value={3}>3</option>*/}
                                                        {/*    <option value={4}>4</option>*/}
                                                        {/*    <option value={5}>5</option>*/}
                                                        {/*    <option value={6}>6</option>*/}
                                                        {/*    <option value={7}>7</option>*/}
                                                        {/*    <option value={8}>8</option>*/}
                                                        {/*</select>*/}
                                                        <ChevronDownIcon
                                                            aria-hidden="true"
                                                            className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                                        />
                                                    </div>

                                                    <div className="absolute right-0 top-0">
                                                        <button type="button"
                                                                onClick={() => removeToCartHandler(product._id)}
                                                                className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500">
                                                            <span className="sr-only">Remove</span>
                                                            <FaTrash aria-hidden="true" className="size-5"/>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            <p className="mt-4 flex space-x-2 text-sm text-gray-700">
                                                {product.countInStock ? (
                                                    <CheckIcon aria-hidden="true"
                                                               className="size-5 shrink-0 text-green-500"/>
                                                ) : (
                                                    <ClockIcon aria-hidden="true"
                                                               className="size-5 shrink-0 text-gray-300"/>
                                                )}

                                                <span>{product.countInStock ? 'In stock' : `Ships in ${product.leadTime}`}</span>
                                            </p>
                                            <p className={"text-blue-800 font-medium items-center"}>
                                                Price:
                                                ${(product.qty * (product.price * 100)) / 100}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Order summary */}
                        <section
                            aria-labelledby="summary-heading"
                            className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
                        >
                            <h2 id="summary-heading" className="text-lg font-semibold text-gray-900">
                                Order summary ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                            </h2>

                            <dl className="mt-6 space-y-4">
                                <div className="flex items-center justify-between">
                                    <dt className="text-sm text-gray-600">Subtotal</dt>

                                    <dd className={"text-sm font-medium text-gray-800"}>
                                        ${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}
                                    </dd>
                                </div>
                                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                                    <dt className="flex items-center text-sm text-gray-600">
                                        <span>Shipping estimate</span>
                                        <div  className="ml-2 shrink-0 text-gray-400 hover:text-gray-500">
                                            <span className="sr-only">Learn more about how shipping is calculated</span>
                                            <QuestionMarkCircleIcon aria-hidden="true" className="size-5"/>
                                        </div>
                                    </dt>
                                    <dd className="text-sm font-medium text-gray-900">
                                      ${cart.shippingPrice}
                                    </dd>
                                </div>
                                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                                    <dt className="flex text-sm text-gray-600">
                                        <span>Tax estimate</span>
                                        <div className="ml-2 shrink-0 text-gray-400 hover:text-gray-500">
                                            <span className="sr-only">Learn more about how tax is calculated</span>
                                            <QuestionMarkCircleIcon aria-hidden="true" className="size-5"/>
                                        </div>
                                    </dt>
                                    <dd className="text-sm font-medium text-gray-900">
                                        ${cart.taxPrice}
                                    </dd>
                                </div>
                                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                                    <dt className="text-base font-medium text-gray-900">Order total</dt>
                                    <dd className="text-base font-medium text-gray-900">
                                        ${cart.totalPrice}</dd>
                                </div>
                            </dl>

                            <div className="mt-6">

                                <button
                                    onClick={() => checkoutHandler()}
                                    type="submit"
                                    className="w-full rounded-lg border border-transparent bg-blue-500 opacity-80 px-4 py-3
                                    text-base font-medium text-white shadow-sm hover:bg-blue-900 focus:outline-none focus:ring-2
                                    focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-50 "
                                >
                                    Checkout
                                </button>

                            </div>
                        </section>
                    </form>
                </div>
            </div>
        </>
    )
}

