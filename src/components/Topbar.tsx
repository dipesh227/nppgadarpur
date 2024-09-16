"use client"
import * as React from "react"
import Link from "next/link"
import {
    NavigationMenu,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { FaFacebook, FaInstagramSquare, FaYoutube, FaSearch } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Topbar() {
    return (
        <NavigationMenu className="bg-[#e5e2db] min-w-full justify-between content-center px-10 py-1 font-bold">
            <NavigationMenuList className="text-xl" >
                <Link href="https://www.facebook.com/profile.php?id=100063146342943" legacyBehavior passHref >
                    <NavigationMenuLink className="bg-[#e5e2db] text-[#2b6cb0] px-1">
                        <FaFacebook />
                    </NavigationMenuLink>
                </Link>
                <Link href="https://twitter.com/NPP_Gadarpur" legacyBehavior passHref >
                    <NavigationMenuLink className="bg-[#e5e2db] text-[#2b6cb0] px-1">
                        <FaSquareXTwitter />
                    </NavigationMenuLink>
                </Link>
                <Link href="https://www.instagram.com/npp_gadarpur/" legacyBehavior passHref >
                    <NavigationMenuLink className="bg-[#e5e2db] text-[#2b6cb0] px-1">
                        <FaInstagramSquare />
                    </NavigationMenuLink>
                </Link>
                <Link href="https://www.youtube.com/@nppgadarpur714" legacyBehavior passHref >
                    <NavigationMenuLink className="bg-[#e5e2db] text-[#2b6cb0] px-1">
                        <FaYoutube />
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuList>
            <NavigationMenuList className="justify-between text-sm">
                <Link href="https://www.facebook.com/profile.php?id=100063146342943" legacyBehavior passHref className="border-l-8" >
                    <NavigationMenuLink className="bg-[#e5e2db] text-[#000000] px-1 hover:underline border-r">
                        Opening Hours : Monday to Saturday – 10am to 5pm
                    </NavigationMenuLink >
                </Link>

                <Link href="https://twitter.com/NPP_Gadarpur" legacyBehavior passHref >
                    <NavigationMenuLink className="bg-[#e5e2db] text-[#000000] px-1 hover:underline border-r">
                        Email : nppgdr@gmail.com
                    </NavigationMenuLink>
                </Link>
                <Link href="https://www.instagram.com/npp_gadarpur/" legacyBehavior passHref className="hover:bg-gray-300" >
                    <NavigationMenuLink className="bg-[#e5e2db] text-[#000000] hover:underline px-1 border-r">
                        Door To Door Toll Free : 1800-203-1243
                    </NavigationMenuLink>
                </Link>
                <Link href="https://www.youtube.com/@nppgadarpur714" legacyBehavior passHref >
                    <NavigationMenuLink className="bg-[#e5e2db] text-[#000000] px-1 hover:underline">
                        Safai Toll Free : 1800-203-8385
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuList>
            <NavigationMenuList className="text-justify text-sm">
                <Link href="https://www.facebook.com/profile.php?id=100063146342943" legacyBehavior passHref >
                    <NavigationMenuLink className="bg-[#e5e2db] text-[#000000] hover:text-red-500 px-1">
                        <FaSearch />
                    </NavigationMenuLink>
                </Link>

            </NavigationMenuList>
        </NavigationMenu>
    )
}
