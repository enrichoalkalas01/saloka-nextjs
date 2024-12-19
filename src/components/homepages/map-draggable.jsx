"use client";

// Library
import { useState, useEffect, useRef } from "react";
import Draggable, { DraggableCore } from "react-draggable";

export default function MapDraggable() {
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
            <div
                className="w-full h-[100%] overflow-hidden bg-gray-400"
                ref={parentRef}
            >
                <Draggable bounds={bounds}>
                    <div
                        ref={draggableRef}
                        className="w-[1280px] h-[720px] md:w-[1440px] md:h-[1080px] lg:w-[2000px] lg:h-[1700px] bg-slate-400"
                    >
                        <div
                            className="w-full h-full"
                            style={{
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
                    </div>
                </Draggable>
            </div>
        </>
    );
}
