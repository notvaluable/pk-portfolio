import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="flex md:h-screen bg-white justify-between items-center md:overflow-hidden">

        <div className="bg-amber-400 h-[60%] w-15 xl:w-20 hidden md:block"></div>

        <div className="flex lg:flex-row px-5 lg:px-20 py-10 flex-col-reverse justify-around items-center gap-10 lg:gap-0">
            <div className="w-full lg:w-[60%] lg:pr-15">
                <div className="flex flex-col">
                    <h1 className="text-2xl lg:text-4xl font-bold text-amber-400">HI THERE!</h1>
                    <span className="bg-amber-400 h-1.5 w-28 mt-2 lg:ml-[-35px]"></span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold mt-6 md:mb-3 mb-2 tourney">
                    I'M&nbsp;<span className="text-amber-400">PRANAY</span>
                </h1>

                <div className="my-3">
                    <span className="bg-amber-400 px-2 py-0.5 tracking-wider md:whitespace-nowrap text-xs lg:text-[16px] font-medium">
                        SOFTWARE ENGINEER / DIGITAL&nbsp;MARKETING
                    </span>
                </div>

                <div className="mt-4">
                    <span className="text-gray-500 tracking-wider text-xs lg:text-[16px] font-medium">
                        Software Engineer @WebMD | SFMC | Klaviyo | Mailchimp - Email Developer | Web Developer
                    </span>
                </div>

                <p className="mt-10 font-medium">
                    I’m an Email and Web developer in love with programming languages such as HTML, CSS, JavaScript, PHP, Angular, React.JS and more to create responsive website and Email Template for all email clients.
                </p>

                <p className="mt-5 font-medium">
                    I have completed <strong>Klaviyo</strong> and <strong>Mailchimp</strong> course on Udemy, a powerful marketing automation platform. However, after spending time researching and understanding the platform, I am beginning to understand how powerful it can be. Interest to learn new technology and skills.
                </p>

                <Link to="/portfolio/about"><button className="dark:bg-black bg-gray-500 text-white rounded-full px-5 py-2 mt-7 font-medium tracking-widest cursor-pointer active:scale-95">MORE ABOUT ME</button></Link>
            </div>

            <img src="./images/DSC_0175.JPG" alt="Pranay-Kadam" className="rounded-full w-60 md:w-80 lg:w-100 xl:w-150 border-amber-400 border-8"/>
        </div>
        
        <div className="bg-amber-400 h-[60%] w-15 xl:w-20 hidden md:block"></div>
    </div>
  )
}

export default Home