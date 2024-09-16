"use client"
import * as React from "react"
import Link from "next/link"
import Image from 'next/image'
import Logopic from "../asset/img/nagar-palika-logo.png"
import Ukpic from "../asset/img/Seal_of_Uttarakhand.svg_-150x150.png"
import { FaWhatsapp } from "react-icons/fa";
import {
    NavigationMenu,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"


export default function Midbar() {
    return (
        <NavigationMenu className="bg-[#ecf3f8] bg-[url('https://nppgadarpur.in/wp-content/uploads/2023/05/beth.png')] min-w-full justify-between content-center px-10 py-2 font-bold flex flex-row ">
            <NavigationMenuList className="text-xl basis-1/2" >
                <Link href="/" legacyBehavior passHref >
                    <NavigationMenuLink className="bg-[#e5e2db00] text-[#2b6cb0]  px-1 flex flex-row">
                        <Image
                            src={Logopic}
                            width={150}
                            height={150}
                            alt="Picture of the author"
                        />
                        <span className="flex flex-col justify-center mx-5">
                            <span className="text-4xl text-[#1c53b9]">नगर पालिका परिषद्‚ गदरपुर</span>
                            <span className="text-3xl text-[#b33232]">उत्तराखण्ड‚ शासन</span>
                        </span>
                    </NavigationMenuLink>
                </Link>
            </ NavigationMenuList>
            <NavigationMenuList className="text-xl flex flex-row justify-center basis-1/4 mx-2 " >
                <Link href="https://udd.uk.gov.in/" legacyBehavior passHref >
                    <NavigationMenuLink className="bg-[#e5e2db00] px-5">
                        <Image
                            src={Ukpic}
                            width={100}
                            height={100}
                            alt="Picture of the author"
                        />
                    </NavigationMenuLink>
                </Link>
                <Link href="https://api.whatsapp.com/send/?phone=8006831126&tex=hy%I%need%your%helpt&type=phone_number&app_absent=0" legacyBehavior passHref >
                    <NavigationMenuLink className="bg-[#fefefe00] hover:text-red-600 px-1 ">
                        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 px-2">
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#7aca9a] px-3 py-1 text-sm font-medium text-black backdrop-blur-3xl">
                                <FaWhatsapp className="mx-2" />  May I Help You?
                            </span>
                        </button>
                    </NavigationMenuLink>
                </Link>
            </ NavigationMenuList>
        </NavigationMenu >
    )
}
