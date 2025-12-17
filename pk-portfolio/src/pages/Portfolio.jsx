import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar"

const Portfolio = () => {
  return (
    <>  
        <div className="flex flex-wrap bg-gray-300">
            <Sidebar />
            <div className="md:pl-86 pl-5 sm:pr-10 pr-5 md:pt-10 pt-25 py-10 md:w-2/2">
              <Outlet />
            </div>
        </div>
    </>
  )
}

export default Portfolio