"use client"

import Navbar from "@/components/navbar"

export default function HomepagesLayout({ children }) {
    return(
        <>
            <section className="w-full">
                <Navbar />
                <section className="">
                    {children}
                </section>
            </section>
        </>
    )
}