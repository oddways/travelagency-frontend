"use client"

import { UserInfo } from "@/data/Data"
import { useRouter } from "next/navigation"
import { HiSearch } from "react-icons/hi"

const ClientComponent = () => {
  const router = useRouter()

  //   Handle client links
  const handleLinks = (id) => {
    router.push(`/clients/${id}`)
  }
  return (
    <div className="w-full h-full flex flex-col gap-2 items-start px-2 py-3 md:px-8 md:py-6 bg-gray-100">
      <p className="font-bold text-lg">Clients</p>
      <p className="">Here&apos;s the clients list</p>

      {/* Section */}
      <section className="w-full rounded-md px-2 py-3 md:px-10 md:py-4 flex flex-col gap-3 bg-white h-[70vh] overflow-y-scroll">
        {/* Search Section */}
        <div className="w-full flex gap-2 md:gap-6">
          <section className="w-full px-2 py-3 flex items-center gap-2  border border-gray-700 rounded-md">
            <HiSearch size={25} color="gray" />
            <input
              type="text"
              placeholder="search by name, email..."
              className="focus:outline-none focus:border-none placeholder:text-xs px-2 py-1 text-xs w-full h-full"
            />
          </section>
          {/* Search Button */}
          <button className="px-4 md:px-6 py-2 text-white text-sm rounded-lg bg-yellow-600 hover:saturate-150 duration-200 ease-in-out">
            Search
          </button>
        </div>

        {/* Table Section */}
        <table className="w-full overflow-scroll mt-2 divide-y divide-gray-700 bg-white ">
          <thead className="bg-yellow-100 h-14 border-b-2 border-yellow-600">
            <tr className="">
              <th className="text-left text-xs md:text-sm px-2">Name</th>
              <th className="text-left text-xs md:text-sm px-2">Email</th>
              <th className="text-left text-xs md:text-sm px-2">
                Phone Number
              </th>
              <th className="text-left text-xs md:text-sm px-2">Address</th>
            </tr>
          </thead>
          <tbody>
            {UserInfo?.map((user) => (
              <tr
                key={user.id}
                className="h-14 hover:bg-yellow-200 text-xs border-l-2 border-transparent hover:border-yellow-600 hover:text-gray-950 cursor-pointer "
                onClick={() => handleLinks(user.id)}
              >
                <td className=" ">{user.fullname}</td>
                <td className="px-3 ">{user.email}</td>
                <td className="">{user.phonenumber}</td>
                <td className="px-3 whitespace-nowrap">{user.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  )
}

export default ClientComponent
