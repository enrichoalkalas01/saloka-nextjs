"use client";

// Library
import React from "react";
import {
    Drawer,
    Button,
    Typography,
    IconButton,
    Collapse,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";

// Icons
import { BsCart4 } from "react-icons/bs";
import { FaCircleUser } from "react-icons/fa6";
import {
    FaChevronDown,
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { HiChevronRight } from "react-icons/hi";

export default function Navbar() {
    const [OpenMenu, setOpenMenu] = React.useState(false);
    const [ZonaMenu, setZonaMenu] = React.useState(false);
    const [AboutMenu, setAboutMenu] = React.useState(false);

    return (
        <>
            <section className="w-full bg-[#363636] text-white flex justify-center">
                {/* Left Menu & Bar */}
                <div className="left-menu w-full mx-2 pr-4 pl-4 hidden lg:flex relative">
                    <div className="w-auto menus-burger relative flex">
                        <div className="h-full flex justify-center items-center mx-4">
                            <BsCart4
                                size={25}
                                className="text-[#6fb75a] cursor-pointer"
                            />
                            <span className="pl-2 text-sm">0</span>
                        </div>
                        <div className="h-full flex justify-center items-center mx-4 w-[100px]">
                            <FaCircleUser
                                size={25}
                                className="text-[#fff] cursor-pointer"
                            />
                            <div className="pl-2 text-sm w-full">Sign In</div>
                        </div>
                    </div>
                    <div className="w-full menus">
                        <ul className="h-full flex items-center justify-end">
                            <li className="mx-4">
                                <Menu className="bg-hidden">
                                    <MenuHandler>
                                        <Typography className="cursor-pointer flex items-center">
                                            <span>Zona</span>
                                            <FaChevronDown className="ml-2" />
                                        </Typography>
                                    </MenuHandler>
                                    <MenuList className="bg-[#363636] text-white border-none">
                                        <MenuItem className="hover:bg-[#585858] hover:text-white">
                                            Ararya
                                        </MenuItem>
                                        <MenuItem className="hover:bg-[#585858] hover:text-white">
                                            Balalantara
                                        </MenuItem>
                                        <MenuItem className="hover:bg-[#585858] hover:text-white">
                                            Kamayayi
                                        </MenuItem>
                                        <MenuItem className="hover:bg-[#585858] hover:text-white">
                                            Pesisir
                                        </MenuItem>
                                        <MenuItem className="hover:bg-[#585858] hover:text-white">
                                            Sagara Prada
                                        </MenuItem>
                                    </MenuList>
                                </Menu>
                            </li>
                            <li className="mx-4">
                                <a href="/">Tiket</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Middle Bar */}
                <div className="middle-menu w-auto hidden lg:flex">
                    <div className="w-[200px] flex justify-center relative">
                        <div className="w-[200px] h-[100px] bg-white absolute shadow border rounded-br-full rounded-bl-full text-[#000] flex justify-center">
                            <div className="w-full h-[75%] flex justify-center pt-2">
                                <img
                                    src="/assets/images/logo/logo.png"
                                    className="w-auto h-[75%]"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Menu & Bar */}
                <div className="right-menu w-full mx-2 pl-4 flex relative">
                    <div className="w-full menus hidden lg:flex">
                        <ul className="h-full flex items-center">
                            <li className="mx-4 py-4">
                                <a href="/">Kuliner</a>
                            </li>
                            <li className="mx-4 py-4">
                                <a href="/">Tiket</a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full lg:w-auto menus-burger relative flex h-20px lg:h-auto">
                        <div className="w-full lg:hidden py-2 flex items-center h-auto py-4">
                            <a href="/">
                                <img
                                    src="/assets/images/logo/logo.png"
                                    className="w-auto h-[35px]"
                                />
                            </a>
                        </div>
                        <div
                            className="w-full h-full lg:w-[175px] lg:h-[100%] flex cursor-pointer bg-[right_bottom_0.5rem] bg-[right_0]"
                            style={{
                                background: `url('/assets/images/component/menu-bar.svg')`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "100% 100%",
                                // backgroundPosition: 'top -1.5px right 0'
                            }}
                            onClick={() => setOpenMenu(true)}
                        ></div>
                    </div>
                </div>
            </section>

            {/* <section className="overlay-menu w-full h-[100vh] absolute top-0 left-0 bg-[rgba(0,0,0,0.75)] flex justify-end transition ease-in delay-150"> */}
            {/* <div
                    className="w-[100%] h-full flex justify-end flex-row"
                    style={{
                        backgroundImage: `url('/assets/images/main/menu-popup-bg-2.svg')`,
                        backgroundSize: `cover`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: `top 0 right 0`
                    }}
                >
                    <div className="w-[40%] h-full px-4 py-4">
                        <div className="w-full h-auto flex justify-end">
                            <CgClose
                                size={40}
                                className="text-white cursor-pointer"
                            />
                        </div>
                        <div className="w-full h-[80%] overflow-hidden flex justify-end py-4 px-2 text-white uppercase">
                            <div className="w-full h-full overflow-y-auto overflow-x-hidden">
                                <ul>
                                    <li className="w-full" onClick={() => setZonaMenu(!ZonaMenu)}>
                                        <div className="w-full flex justify-end cursor-pointer text-right font-bold mb-3">
                                            <span className="text-xl mr-[1.5px]">ZONA</span>
                                            <HiChevronRight
                                                size={30}
                                                className={`ease-in duration-100 ${ ZonaMenu ? 'rotate-90' : '' }`}
                                            />
                                        </div>
                                        <div className="w-full text-right">
                                            <Collapse open={ZonaMenu}>
                                                <div className="w-full pr-8">
                                                    <div className="mb-2 font-normal underline"><a href="/">Ararya</a></div>
                                                    <div className="mb-2 font-normal underline"><a href="/">Balalantara</a></div>
                                                    <div className="mb-2 font-normal underline"><a href="/">Kamayayi</a></div>
                                                    <div className="mb-2 font-normal underline"><a href="/">Pesisir</a></div>
                                                    <div className="mb-2 font-normal underline"><a href="/">Sagara Prada</a></div>
                                                </div>
                                            </Collapse>
                                        </div>
                                    </li>

                                    <li className="w-full">
                                        <div className="w-full flex justify-end cursor-pointer text-right font-bold mb-4 pr-8 text-xl">
                                            <a href="/">Hiburan</a>
                                        </div>
                                    </li>

                                    <li className="w-full">
                                        <div className="w-full flex justify-end cursor-pointer text-right font-bold mb-4 pr-8 text-xl">
                                            <a href="/">Kuliner</a>
                                        </div>
                                    </li>

                                    <li className="w-full">
                                        <div className="w-full flex justify-end cursor-pointer text-right font-bold mb-4 pr-8 text-xl">
                                            <a href="/">Tiket</a>
                                        </div>
                                    </li>

                                    <li className="w-full">
                                        <div className="w-full flex justify-end cursor-pointer text-right font-bold mb-4 pr-8 text-xl">
                                            <a href="/">Event</a>
                                        </div>
                                    </li>

                                    <li className="w-full" onClick={() => setAboutMenu(!AboutMenu)}>
                                        <div className="w-full flex justify-end cursor-pointer text-right font-bold mb-3">
                                            <span className="text-xl mr-[1.5px]">Tentang Saloka</span>
                                            <HiChevronRight
                                                size={30}
                                                className={`ease-in duration-100 ${ AboutMenu ? 'rotate-90' : '' }`}
                                            />
                                        </div>
                                        <div className="w-full text-right">
                                            <Collapse open={AboutMenu}>
                                                <div className="w-full pr-8">
                                                    <div className="mb-2 font-normal underline"><a href="/">Sejarah</a></div>
                                                    <div className="mb-2 font-normal underline"><a href="/">Area Sekitar</a></div>
                                                    <div className="mb-2 font-normal underline"><a href="/">Hubungi Kami</a></div>
                                                </div>
                                            </Collapse>
                                        </div>
                                    </li>

                                    <li className="w-full">
                                        <div className="w-full flex justify-end cursor-pointer text-right font-bold mb-4 pr-8 text-xl">
                                            <a href="/">Merchandise</a>
                                        </div>
                                    </li>

                                    <li className="w-full">
                                        <div className="w-full flex justify-end cursor-pointer text-right font-bold mb-4 pr-8 text-xl">
                                            <a href="/">Galeri</a>
                                        </div>
                                    </li>

                                    <li className="w-full">
                                        <div className="w-full flex justify-end cursor-pointer text-right font-bold mb-4 pr-8 text-xl">
                                            <a href="/">Karir</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full flex justify-end text-white">
                            <div className="flex">
                                <span>Social Media : </span>
                                <a href="/" className="mx-2"><FaInstagram size={25} /></a>
                                <a href="/" className="mx-2"><FaFacebookF size={25} /></a>
                                <a href="/" className="mx-2"><FaTwitter size={25} /></a>
                                <a href="/" className="mx-2"><FaYoutube size={25} /></a>
                            </div>
                        </div>
                    </div>
                </div> */}
            {/* </section> */}
        </>
    );
}
