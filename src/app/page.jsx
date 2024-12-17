// Components Pages
import HeroCloud from "@/components/homepages/hero-cloud";

// Components
import { Button } from "@/components/shadcn/ui/button";

export default function Page() {
    return (
        <>
            <section className="w-full ">
                <HeroCloud>
                    <div className="w-full h-full bg-gray-400">asd</div>
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
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book.
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
