"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { FaFacebook, FaInstagramSquare, FaYoutube, FaSearch } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";



const components: { title: string; href: string; description: string }[] = [
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "Progress",
        href: "/docs/primitives/progress",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "Scroll-area",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Tabs",
        href: "/docs/primitives/tabs",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "Tooltip",
        href: "/docs/primitives/tooltip",
        description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
]

export default function Topbar() {
    return (
        <NavigationMenu className="bg-[#e5e2db] min-w-full justify-between content-center px-10 py-2 font-bold">
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
                <Link href="https://www.facebook.com/profile.php?id=100063146342943" legacyBehavior passHref >
                    <NavigationMenuLink className="bg-[#e5e2db] text-[#000000] px-1 hover:underline">
                        Opening Hours : Monday to Saturday – 10am to 5pm

                    </NavigationMenuLink>
                </Link>
                <Link href="https://twitter.com/NPP_Gadarpur" legacyBehavior passHref >
                    <NavigationMenuLink className="bg-[#e5e2db] text-[#000000] px-1 hover:underline">
                        Email : nppgdr@gmail.com

                    </NavigationMenuLink>
                </Link>
                <Link href="https://www.instagram.com/npp_gadarpur/" legacyBehavior passHref className="hover:bg-gray-300" >
                    <NavigationMenuLink className="bg-[#e5e2db] text-[#000000] hover:underline px-1">
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
                    <NavigationMenuLink className="bg-[#e5e2db] text-[#000000] px-1">
                        <FaSearch />

                    </NavigationMenuLink>
                </Link>

            </NavigationMenuList>
        </NavigationMenu>
    )
}
