import { ChevronsLeftRightEllipsis, LayoutTemplate, ChartNetwork } from 'lucide-react';

const About = () => {
    return (
        <div className="flex flex-col" id="about">
            <div className="flex items-start">
                <div className="md:flex hidden items-center lg:pt-7 pt-4">
                    <span className="dark:bg-gray-800 bg-gray-500 h-0.5 md:w-12 w-6"></span>
                    <span className="dark:bg-gray-800 bg-gray-500 h-2 w-2 rounded-full"></span>
                </div>
                <h1 className="lg:text-6xl text-4xl nova-square-bold md:pl-2 text-gray-800 tracking-wider">ABOUT ME</h1>
            </div>
            <div className='md:pl-17'>
                <h2 className="pt-8 text-2xl text-gray-800 max-w-4xl">
                    I'm a <strong className="text-amber-400">Pranay Kadam,</strong> <span className='text-lg'>Software Engineer / Digital Marketing</span>
                </h2>

                <div className="mt-8">
                    <div className="max-w-[991px]">
                        <span className="bg-amber-400 rounded-full px-5 py-1 font-bold text-xl text-black">General Info</span>
                        <p className="pt-4 pb-2 pl-5 text-gray-800 text-lg font-medium">
                            Gender : Male
                        </p>
                        <p className="pb-2 pl-5 text-gray-800 text-lg font-medium">
                            Nationality : Indian
                        </p>
                        <p className="pb-2 pl-5 text-gray-800 text-lg font-medium">
                            Marital Status : Single
                        </p>
                        <p className="pb-2 pl-5 text-gray-800 text-lg font-medium">
                            Religion : Hindu
                        </p>
                        <p className="pb-2 pl-5 text-gray-800 text-lg font-medium">
                            Father Name : Pravin Kadam
                        </p>
                        <p className="pb-2 pl-5 text-gray-800 text-lg font-medium">
                            Mother Name : Pallavi Kadam
                        </p>
                        <p className="pb-2 pl-5 text-gray-800 text-lg font-medium">
                            Languages : English, Marathi and Hindi
                        </p>
                        <p className="pb-2 pl-5 text-gray-800 text-lg font-medium">
                            Hobby : Cricket and Chess
                        </p>
                    </div>
                </div>

                <div className="mt-8">
                    <div className="max-w-[991px]">
                        <span className="bg-amber-400 rounded-full px-5 py-1 font-bold text-xl text-black">What I Do?</span>

                        <div className="flex flex-row items-center mt-5">
                            <div className="bg-amber-400 rounded-full p-3 flex items-center justify-center">
                                <LayoutTemplate size={50} />
                            </div>
                            <div className="text-black pl-5">
                                <div className='font-bold text-black text-2xl'>
                                    WEB DEVELOPMENT
                                </div>
                            </div>
                        </div>
                        <div className='pb-4'>
                            <p className="pt-3 text-gray-800 font-medium">
                                Web development is my passion, and I have experience in building responsive and user-friendly websites using HTML, CSS, JavaScript, and various frameworks such as React and Angular. I am proficient in front-end development, and I enjoy creating seamless user experiences that are both visually appealing and functional. I am also familiar with database like MySQL.
                            </p>
                        </div>

                        <div className="flex flex-row items-center mt-5">
                            <div className="bg-amber-400 rounded-full p-3 flex items-center justify-center">
                                <ChevronsLeftRightEllipsis size={50} />
                            </div>
                            <div className="text-black pl-5">
                                <div className='font-bold text-black text-2xl'>
                                    EMAIL DEVELOPMENT
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="pt-3 text-gray-800 font-medium">
                                I have experience with HTML and CSS to create email templates (including promotional emails, newsletters, and transactional emails) that are optimized for various email clients. I have also worked on A/B testing, segmentation and personalization of emails based on user behavior, as well as developing automated email journeys. I am familiar with email marketing platforms such as Mailchimp, Klaviyo, and SFMC.
                            </p>
                        </div>

                        <div className="flex flex-row items-center mt-5">
                            <div className="bg-amber-400 rounded-full p-3 flex items-center justify-center">
                                <ChartNetwork size={50} />
                            </div>
                            <div className="text-black pl-5">
                                <div className='font-bold text-black text-2xl'>
                                    DIGITAL MARKETING
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="pt-3 text-gray-800 font-medium">
                                I have a fundamental knowledge of digital marketing, including SEO and social media campaigns, as well as analytics to optimize campaigns, improve user experience, and support business growth.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About