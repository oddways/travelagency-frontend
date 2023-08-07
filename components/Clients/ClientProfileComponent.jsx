"use client"

import { useParams } from "next/navigation"
import { UserInfo } from "@/data/Data"
import ProfileInfo from "./ProfileInfo"
import Link from "next/link"

const ClientProfileComponent = () => {
  const { id } = useParams()
  const myInfo = UserInfo[id - 1]

  return (
    <div className="w-full h-full flex flex-col gap-2 items-start px-2 py-3 md:px-8 md:py-6 bg-gray-100 text-gray-800">
      <p className="font-bold text-lg">Clients</p>
      <p className="">View Client profile here</p>

      {/* Section */}
      <section className="w-full rounded-md px-2 py-3 md:px-10 md:py-4 flex flex-col gap-3 bg-white min-h-screen overflow-y-scroll">
        {/* Profile Overview */}
        <div className="mt-3 w-full rounded-lg bg-gray-200 h-[170px] px-2 py-3 md:p-3 flex flex-col items-start gap-2">
          <p>Client&apos;s Picture</p>

          <div className="flex items-center gap-3 px-2">
            {/* Image */}
            <section className="w-[100px] h-[100px] rounded-full ring-2 bg-blue-400 outline-amber-600"></section>

            {/* Basic info */}
            <section className="flex flex-col gap-3">
              <p className="font-bold text-sm">{myInfo.fullname}</p>
              <p className="font-semibold text-xs ">{myInfo.email}</p>
              <div className="flex gap-4 text-xs font-semibold">
                <p>{myInfo.gender}</p>
                <p>{myInfo.age} years old</p>
                <p>{myInfo.nationality}</p>
              </div>
            </section>
          </div>
        </div>

        {/* Complete information */}
        <>
          <ProfileInfo myInfo={myInfo} />
        </>

        {/* Back Button */}
        <div className="w-full flex items- justify-end">
          <Link
            href={"/clients"}
            className="px-8 py-2 text-white bg-yellow-600 rounded-lg cursor-pointer duration-300 ease-in-out hover:contrast-150"
          >
            Back
          </Link>
        </div>
      </section>
    </div>
  )
}

export default ClientProfileComponent
