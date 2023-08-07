"use client"
import { GiHamburgerMenu } from "react-icons/gi"
import { useContext } from "react"
import GlobalContext from "@/context/GlobalContext"
import { BsFillBellFill } from "react-icons/bs"
import Image from "next/image"

const Navbar = () => {
  const { handleToggle } = useContext(GlobalContext)

  return (
    <div className="w-full h-[70px] border-b border-black bg-white shadow-sm shadow-black flex items-center justify-between py-2 px-4">
      {/* Menubar */}
      <GiHamburgerMenu
        size={20}
        className="cursor-pointer"
        onClick={handleToggle}
        color="black"
      />

      {/* Left section */}
      <section className="flex items-center gap-2">
        <BsFillBellFill size="20" />
        <p className="text-xs">Kelvin</p>
        <span className="relative w-[50px] h-[50px] rounded-full">
          <Image
            src={"/images/usericon.jpg"}
            alt=""
            fill={true}
            className="rounded-full object-cover"
          />
        </span>
      </section>
    </div>
  )
}

export default Navbar
