import React, { Children } from "react";
import Head from "next/head";
import Link from 'next/link'




export default function Layout({ children }) {
    return (
        <>
         <Head>
                <title>Amazon </title>
                <meta name="description" content="Ecommerce Website" />
                <a  rel="icon" href="/favicon.ico"  />
            </Head>


            <div className="flex min-h-screen flex-col justify-between">
                <header>
                  <nav className="flex h-12 items-center px-4 justify-between  shadow-md">
                    {/* //Link to replace the a tag */}
                    <a  href="/" >
                        <a className="text-lg font-bold">amazon</a>
                    </a>
                    <div>
                    <a  href="/cart" >
                                <a className="p-2">Cart</a>
                            </a>
                            <a  href="/login" >
                                <a className="p-2">Login</a>
                            </a>
                    </div>
                 </nav>
                </header>
                <main className="container m-auto mt-4 px-4">{children}</main> 
                <footer className="flex h-10 justify-center items-center shadow-inner ">
                    <p> Copyright @2022 Amazona</p>
                </footer>
            </div>
        </>
    )
}
