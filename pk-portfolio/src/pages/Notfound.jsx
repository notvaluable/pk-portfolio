import { Link } from "react-router-dom";

const NotFound = () => {
    return (
      <>
       <div className="flex flex-col justify-center items-center h-screen">
          <div className="flex justify-center items-center">
            <p className="rotate-45 font-bold text-9xl text-white">&#60;</p>
            <p className="rotate-20 origin-[-250%_-10%] font-bold text-8xl text-white">/</p>
            <p className="font-bold rotate-15 origin-[0%_20%] text-9xl text-white">&#62;</p>
          </div>
          <div className="mt-10">
            <p className="font-bold lg:text-[200px] text-center text-9xl text-white">404</p>
            <p className="font-bold text-4xl text-center text-white">PAGE NOT FOUND</p>
          </div>
          <div className="mt-20">
            <Link to={"/"}><button className="bg-amber-400 px-8 py-4 rounded-full text-xl font-bold text-center active:scale-95">Back to Home</button></Link>
          </div>
       </div>
      </>
    )
};

export default NotFound;
