"use client";

// Library
import { useState, useEffect, useRef } from "react";
import Draggable, { DraggableCore } from "react-draggable";

// Components Pages
import HeroCloud from "@/components/homepages/hero-cloud";

// Components
import { Button } from "@/components/shadcn/ui/button";

export default function Page() {
    const parentRef = useRef(null);
    const draggableRef = useRef(null);
    const [bounds, setBounds] = useState({
        left: -150,
        top: -150,
        right: -150,
        bottom: -150,
    });

    useEffect(() => {
        if (parentRef.current && draggableRef.current) {
            const parent = parentRef.current.getBoundingClientRect();
            const child = draggableRef.current.getBoundingClientRect();

            // Hitung batas pergerakan
            setBounds({
                left: -(child.width - parent.width), // Batas kiri
                top: -(child.height - parent.height), // Batas atas
                right: 0, // Batas kanan
                bottom: 0, // Batas bawah
            });
        }
    }, []);

    return (
        <>
            <section className="w-full ">
                <HeroCloud>
                    <div
                        className="w-full h-[100%] overflow-hidden bg-gray-400"
                        ref={parentRef}
                    >
                        <Draggable bounds={bounds}>
                            <div
                                ref={draggableRef}
                                style={{
                                    width: "150%", // Menggunakan 100% dari parent
                                    height: "125%", // Menggunakan 100% dari parent
                                    background: "#4caf50",
                                    color: "white",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: "8px",
                                    cursor: "move",
                                    boxSizing: "border-box",
                                    position: "relative",
                                    backgroundImage:
                                        "url('/assets/images/main/maps.png')",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "100% 100%",
                                }}
                            ></div>
                        </Draggable>
                    </div>
                </HeroCloud>

                <section className="w-full relative">
                    {/* Fly Object */}
                    <div className="w-full h-[150px] mb-4 flex justify-end pr-[50px]">
                        <img
                            className="w-auto h-full"
                            src="/assets/images/icon/ticket-icon.png"
                        />
                    </div>

                    {/* Content Object */}
                    <div className="w-full h-auto flex gap-4 z-5 pb-12 px-8">
                        <div className="w-full h-auto flex justify-end items-center pr-4 pl-8">
                            <img
                                className="w-full h-auto"
                                src="/assets/images/image-1.png"
                            />
                        </div>
                        <div className="w-full py-[50px] px-4">
                            <div className="w-full">
                                <h2 className="text-[32px] mb-4 text-orange-800">
                                    Anda Bisa Dapatkan Tiket Secara On The Spot
                                    Ataupun Melalu Online!
                                </h2>
                                <p className="mb-4">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry&apos;s standard
                                    dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and
                                    scrambled it to make a type specimen book.
                                </p>
                                <Button
                                    className="rounded-xl px-4 py-4"
                                    variant="secondary"
                                >
                                    Beli Tiket
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Fly Object Orange Left Top */}
                    <div
                        className="w-[400px] h-[100%] rounded-md bg-contain bg-no-repeat absolute -z-10 left-0 top-0"
                        style={{
                            backgroundImage:
                                "url('/assets/images/main/background-ticket-left.svg')",
                        }}
                    ></div>

                    {/* Fly Object Separator Background Green */}
                    <div
                        className="w-full h-[250px] bg-no-repeat bg-[length:100%] bg-[position:center_bottom_0px] absolute relative -bottom-2 left-0"
                        style={{
                            backgroundImage:
                                "url('/assets/images/main/background-ticket-right-2.svg')",
                        }}
                    >
                        {/* Fly Object Dino */}
                        <img
                            src="/assets/images/main/mascot-1.svg"
                            className="absolute bottom-2 right-16 -z-10"
                        />
                    </div>
                </section>

                <div
                    className="
                        w-full
                        h-auto
                        h-[1000px]
                        relative
                        text-white
                        mt-[-150px]
                        pb-[200px]
                        bg-no-repeat
                        bg-[url('/assets/images/main/background-merchandise.svg'),linear-gradient(#56bb51,#299225)]
                        bg-[position:bottom_left,top_150px_left]
                        bg-[length:100%]
                    "
                >
                    {/* Konten Anda di sini */}
                    asd asdk as;dkas d;aks d;aksd ;askd as;kd
                </div>
            </section>
        </>
    );
}
