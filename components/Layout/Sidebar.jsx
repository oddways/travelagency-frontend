"use client"
import { useContext } from "react"
import GlobalContext from "@/context/GlobalContext"
import { AiFillCloseCircle } from "react-icons/ai"
import Image from "next/image"
import { sideNavLinks } from "@/data/Data"
import Link from "next/link"

const Sidebar = () => {
  const { toggle, handleToggle } = useContext(GlobalContext)

  return (
    <>
      <div
        className={`${
          toggle
            ? "w-[70%] md:w-[20%] flex fixed md:relative "
            : "w-[20%] relative md:w-[35%] lg:w-[10%] "
        }   md:flex flex-col z-10 min-h-screen bg-white shadow-sm shadow-black duration-500 ease-in-out`}
      >
        {/* Close nav button */}
        {toggle && (
          <AiFillCloseCircle
            className="md:hidden absolute top-3 right-3 cursor-pointer"
            color="black"
            size={25}
            onClick={handleToggle}
          />
        )}

        <section className="mt-3 w-full min-h-full  flex-col px-3">
          <Link
            href={"/"}
            className={`${
              toggle
                ? "w-[100px]  h-[100px] "
                : "w-[50px] md:w-[100px] md:h-[100px] h-[50px]"
            } duration-500 ease-in-out  flex items-center justify-center relative`}
          >
            {/* sidebar logo */}
            <Image
              src={"/images/logo.jpg"}
              alt="logo"
              fill={true}
              className="object-contain rounded-full hover:saturate-150 cursor-pointer animate-pulse hover:animate-none"
            />
          </Link>

          {/* Links */}
          <div className=" mt-[50px] flex flex-col items-center">
            {sideNavLinks?.map((nav, i) => (
              <Link
                href={nav.route}
                className="w-full  h-[50px] flex items-center justify-center px-2 gap-2 mt-4 duration-500 ease-in-out rounded-xl group hover:bg-gray-400 "
                key={i}
              >
                {/* Logo */}
                {nav.logo}
                {/* Title */}
                {toggle && (
                  <p className="whitespace-nowrap text-xs w-[50px] duration-500 ease-in-out group-hover:text-white">
                    {nav.text}
                  </p>
                )}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}

export default Sidebar
