import React from "react"

const ProfileInfo = ({ myInfo }) => {
  return (
    <section className="w-full mt-4 h-full grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-3">
      {/* Left side */}
      <div className="w-full h-full p-4   flex flex-col items-start gap-3">
        {/* Full name */}
        <section className="flex flex-col items-start gap-2 text-xs">
          <p>Full Name</p>
          <p className="font-bold">{myInfo.fullname}</p>
        </section>

        {/* Applicant's Full name */}
        <section className="flex flex-col items-start gap-2 text-xs">
          <p>
            Applicant&apos;s Full name{" "}
            <span className="text-red-600">(as shown on the passport)</span>
          </p>
          <p className="font-bold">
            {myInfo.fullname} {myInfo.middlename}
          </p>
        </section>

        {/* Place of Birth and  Date of Birth*/}
        <div className="w-full flex items-center justify-between">
          <section className="flex flex-col items-start gap-2 text-xs">
            <p>Place of birth</p>
            <p className="font-bold">{myInfo.placeofbirth}</p>
          </section>

          <section className="flex flex-col items-start gap-2 text-xs">
            <p>Date of birth</p>
            <p className="font-bold">{myInfo.dateofbirth}</p>
          </section>
        </div>

        {/* Marital status */}
        <section className="flex flex-col items-start gap-2 text-xs">
          <p>Marital status</p>
          <p className="font-bold">{myInfo.maritalstatus}</p>
        </section>

        {/* Occupation */}
        <section className="flex flex-col items-start gap-2 text-xs">
          <p>Current Occupation</p>
          <p className="font-bold">{myInfo.currentoccupation}</p>
        </section>

        {/* Residential Address */}
        <section className="flex flex-col items-start gap-2 text-xs">
          <p>Residential Address</p>
          <p className="font-bold">{myInfo.address}</p>
        </section>

        {/* Country of interest */}
        <section className="flex flex-col items-start gap-2 text-xs">
          <p>Country of interest</p>
          <p className="font-bold">{myInfo.countryofinterest}</p>
        </section>
      </div>

      {/* Right side */}
      <div className="w-full h-full  flex flex-col items-start gap-3 p-4">
        {/* Email */}
        <section className="flex flex-col items-start gap-2 text-xs">
          <p>Email</p>
          <p className="font-bold">{myInfo.email}</p>
        </section>

        {/* Gender */}
        <section className="flex flex-col items-start gap-2 text-xs">
          <p>Gender</p>
          <p className="font-bold">{myInfo.gender}</p>
        </section>

        {/* Country of Citizenship */}
        <section className="flex flex-col items-start gap-2 text-xs">
          <p>Country of Citizenship</p>
          <p className="font-bold">{myInfo.countryofcitizenship}</p>
        </section>

        {/* Education */}
        <section className="flex flex-col items-start gap-2 text-xs">
          <p>
            Education{" "}
            <span className="text-red-600">
              (Clien&apos;s highest level of education)
            </span>{" "}
          </p>
          <p className="font-bold">{myInfo.Education}</p>
        </section>

        {/* Phone number */}
        <section className="flex flex-col items-start gap-2 text-xs">
          <p>Phone number</p>
          <p className="font-bold">{myInfo.phonenumber}</p>
        </section>

        {/* Mailing Address */}
        <section className="flex flex-col items-start gap-2 text-xs">
          <p>Mailing Address</p>
          <p className="font-bold">{myInfo.mailingaddress}</p>
        </section>

        {/* Purpose of Travelling */}
        <section className="flex flex-col items-start gap-2 text-xs">
          <p>Purpose of Travelling</p>
          <p className="font-bold">{myInfo.purposeoftravelling}</p>
        </section>
      </div>
    </section>
  )
}

export default ProfileInfo
