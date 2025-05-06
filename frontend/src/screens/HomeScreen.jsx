import React from 'react';
import HeroHeader from "../components/HeroHeader";
import Meta from "../components/Meta";

export default function HomeScreen() {
    return (
        <>
            <main className={"relative"} >
                <section className={"xl:p-1"}>
                    <HeroHeader />
                    <Meta title={"Welcome to eCommerce shop"} />

                </section>

            </main>

        </>
    )
}