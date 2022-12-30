import React, { Children } from "react";
import Head from "next/head";
import Link from "next/head"

export default function Layout({ children }) {
    return (
        <>
         <Head>
                <title>Amazon </title>
                <meta name="description" content="Ecommerce Website" />
                <Link legacyBehavior rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex min-h-screen flex-col justify-between">
                <header>
                    header
                </header>
                <main>
                    {children}
                </main>
                <footer>
                    footer
                </footer>
            </div>
        </>
    )
}
