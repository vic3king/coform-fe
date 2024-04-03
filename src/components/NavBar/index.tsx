import Image from "next/image"
import Logo from "../../../public/images/logo.jpeg"
import { FaRegFileAlt } from "react-icons/fa"


const NavBar = () => {
  return (
    <div className="px-6 py-4 flex justify-between items-center border-b">
      <div className="flex gap-2 items-center">
        <div>
          <Image
            src={Logo}
            height={40}
            width={40}
            alt="Company Logo"
          />
        </div>
        <p className="text-base text-gray-900">Dashboard</p>
      </div>
      <div>
        <div className="h-12 w-12 rounded-full bg-purple-100 border border-purple-300 flex justify-center items-center text-purple-700 text-lg">
          N
        </div>
      </div>
    </div>
  )
}

export default NavBar