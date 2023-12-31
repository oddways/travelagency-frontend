import { LuLayoutDashboard } from "react-icons/lu"
import { HiUserGroup } from "react-icons/hi"
import { MdPayments } from "react-icons/md"
import { AiOutlineSchedule } from "react-icons/ai"
import { BiSolidReport } from "react-icons/bi"
import { BsChatDots } from "react-icons/bs"

export const UserInfo = [
  {
    id: 1,
    fullname: "Odusote Mayokun",
    middlename: "Doe",
    placeofbirth: "Nigeria",
    maritalstatus: "married",
    dateofbirth: "04/11/2012",
    currentoccupation: "Engineer",
    address: "No 2, Oloro Street Bank Olodo, Ibadan, Oyo State, Nigeria",
    countryofinterest: "Iceland",
    email: "adegoke@gmail.com",
    gender: "Female",
    countryofcitizenship: "Nigeria, Uganda",
    Education: "Bachelor's Degree",
    phonenumber: "+234(0)8160730668",
    mailingaddress: "No 2, Oloro Street Bank Olodo, Ibadan, Oyo State, Nigeria",
    purposeoftravelling: "Trading",
    age: 54,
    nationality: "Nigerian",
  },
  {
    id: 2,
    fullname: "Emmanuel Olaniyi",
    middlename: "Doe",
    placeofbirth: "Nigeria",
    maritalstatus: "single",
    dateofbirth: "10/12/2000",
    currentoccupation: "Medical Doctor",
    address: "No 5, Thompson Street, Ikeja, Lagos State, Nigeria",
    countryofinterest: "Germany",
    email: "emmanuel2@gmail.com",
    gender: "Male",
    countryofcitizenship: "Nigeria",
    Education: "Bachelor's Degree",
    phonenumber: "+234(0)8130830192",
    mailingaddress: "No 5, Thompson Street, Ikeja, Lagos State, Nigeria",
    purposeoftravelling: "Vacation",
    age: 23,
    nationality: "Nigerian",
  },
  {
    id: 3,
    fullname: "Segun Akande",
    middlename: "Doe",
    placeofbirth: "Nigeria",
    maritalstatus: "married",
    dateofbirth: "10/12/1990",
    currentoccupation: "Musician",
    address: "No 19, Alade Street, Lekki, Lagos State, Nigeria",
    countryofinterest: "Brazil",
    email: "segunakande1@gmail.com",
    gender: "Male",
    countryofcitizenship: "Nigeria",
    Education: "Masters Degree",
    phonenumber: "+234(0)8134835322",
    mailingaddress: "No 19, Alade Street, Lekki, Lagos State, Nigeria",
    purposeoftravelling: "Business",
    age: 40,
    nationality: "Nigerian",
  },
  {
    id: 4,
    fullname: "Titilayo Ojo",
    middlename: "Doe",
    placeofbirth: "Nigeria",
    maritalstatus: "single",
    dateofbirth: "10/12/2004",
    currentoccupation: "Influencer",
    address: "No 1b, Johnson Street, ajah, Lagos State, Nigeria",
    countryofinterest: "United Kingdom",
    email: "titilayoojo91@gmail.com",
    gender: "Female",
    countryofcitizenship: "Nigeria",
    Education: "HND",
    phonenumber: "+234(0)8137320491",
    mailingaddress: "No 1b, Johnson Street, ajah, Lagos State, Nigeria",
    purposeoftravelling: "Medical Checkup",
    age: 32,
    nationality: "Nigerian",
  },
  {
    id: 5,
    fullname: "Lateef Bello",
    middlename: "Doe",
    placeofbirth: "Nigeria",
    maritalstatus: "married",
    dateofbirth: "29/03/1994",
    currentoccupation: "Architect",
    address: "No 7, Ajayi Street, Ifako, Lagos State, Nigeria",
    countryofinterest: "France",
    email: "lateefbello@gmail.com",
    gender: "Male",
    countryofcitizenship: "Nigeria",
    Education: "Bachelor's Degree",
    phonenumber: "+234(0)8130668221",
    mailingaddress: "No 7, Ajayi Street, Ifako, Lagos State, Nigeria",
    purposeoftravelling: "Conference",
    age: 43,
    nationality: "Nigerian",
  },

  {
    id: 6,
    fullname: "Jude Deku",
    middlename: "Doe",
    placeofbirth: "Nigeria",
    maritalstatus: "single",
    dateofbirth: "13/08/1992",
    currentoccupation: "Software Developer",
    address: "No 6, April Street, Apapa, Lagos State, Nigeria",
    countryofinterest: "China",
    email: "lateefbello@gmail.com",
    gender: "Male",
    countryofcitizenship: "Nigeria",
    Education: "Bachelor's Degree",
    phonenumber: "+234(0)8130563701",
    mailingaddress: "No 6, April Street, Apapa, Lagos State, Nigeria",
    purposeoftravelling: "Vacation",
    age: 38,
    nationality: "Nigerian",
  },
]

export const sideNavLinks = [
  {
    logo: <LuLayoutDashboard size={30} color="#3a453d" />,
    route: "/",
    text: "workspace",
  },
  {
    logo: <HiUserGroup size={30} color="#3a453d" />,
    route: "/clients",
    text: "clients",
  },
  {
    logo: <AiOutlineSchedule size={30} color="#3a453d" />,
    route: "/",
    text: "Appointment",
  },
  {
    logo: <MdPayments size={30} color="#3a453d" />,
    route: "/",
    text: "payment",
  },
  {
    logo: <BsChatDots size={30} color="#3a453d" />,
    route: "/",
    text: "Message",
  },
  {
    logo: <BiSolidReport size={30} color="#3a453d" />,
    route: "/",
    text: "Reports",
  },
]
