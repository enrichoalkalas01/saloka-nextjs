export default function HeroCloud({ children }) {
    return (
        <>
            <section id="hero-carouesl" className="w-full h-auto">
                <div className="w-full h-[85vh] relative">
                    <div className="w-full h-full relative z-0 bg-gray-200">
                        {children}
                    </div>
                    <div
                        className="w-full h-[200px] absolute bottom-0 left-0 z-5 bg-no-repeat bg-[length:125%_100%] bg-[position:bottom_-40px_center]"
                        style={{
                            backgroundImage:
                                "url('/assets/images/icon/Group 148.svg')",
                        }}
                    >
                        <div className="w-full h-[50px] bg-white absolute bottom-0 left-0"></div>
                    </div>
                </div>
            </section>
        </>
    );
}
