'use client'
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Input } from "@nextui-org/react";
import { CiSearch } from "react-icons/ci";
import { MainAuth } from "./authComponents";

export default function App() {
    return (
        <Navbar shouldHideOnScroll>
            <NavbarBrand>
                <Link href="#" className="font-bold text-inherit">
                    MYTHIC INK
                </Link>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4 flex justify-normal">
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Catalogue
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="#" color="foreground" aria-current="page">
                        Community
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <div className=" hidden justify-center text-white lg:flex w-[340px] h-[240px] px-2 rounded-xl flex items-center">
                        <Input
                            isClearable
                            radius="lg"
                            classNames={{
                                label: "text-black/50 dark:text-white/90",
                                input: [
                                    "bg-transparent"
                                ],
                                innerWrapper: "bg-transparent"

                            }}
                            placeholder="Search"
                            startContent={
                                <CiSearch className="hidden flex-shrink-0 text-black/50 dark:text-white/90 text-slate-400 pointer-events-none" />
                            }
                        />
                    </div>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent >
                <NavbarItem >
                    <MainAuth login={true} />
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} className="hidden lg:flex text-white" href="#" variant="flat">
                        <MainAuth login={false} />
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
