import { GamepadDirectional, Diamond, Award, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Skills = () => {
  return (
    <div className="flex flex-col" id="skills">
      <div className="flex items-start">
          <div className="md:flex hidden items-center md:pt-7 pt-4">
              <span className="dark:bg-gray-800 bg-gray-500 h-0.5 md:w-12 w-6"></span>
              <span className="dark:bg-gray-800 bg-gray-500 h-2 w-2 rounded-full"></span>
          </div>
          <h1 className="lg:text-6xl text-3xl nova-square-bold md:pl-2 text-gray-800 tracking-wider">SKILLS AND CERTIFICATIONS</h1>
      </div>

      <div className="md:pl-17 mt-8 max-w-[991px]">
        <div className="flex flex-col">
          <div className="font-bold lg:text-2xl text-xl">
            CODING LANGUAGES:
          </div>
          <div className="mt-3">
            <div className='flex flex-wrap'>
              <div className='border-1 border-gray-400 px-5 py-1 lg:w-50 w-[33.33%]'>
                HTML
              </div>
              <div className='border-1 border-gray-400 px-5 py-1 lg:w-50 w-[33.33%]'>
                CSS
              </div>
              <div className='border-1 border-gray-400 px-5 py-1 lg:w-50 w-[33.33%]'>
                Javascript
              </div>
              <div className='border-1 border-gray-400 px-5 py-1 lg:w-50 w-[33.33%]'>
                Ajax
              </div>
              <div className='border-1 border-gray-400 px-5 py-1 lg:w-50 w-[33.33%]'>
                PHP
              </div>
              <div className='border-1 border-gray-400 px-5 py-1 lg:w-50 w-[33.33%]'>
                Tailwind
              </div>
              <div className='border-1 border-gray-400 px-5 py-1 lg:w-50 w-[33.33%]'>
                SQL
              </div>
              <div className='border-1 border-gray-400 px-5 py-1 lg:w-50 w-[33.33%]'>
                Angular
              </div>
              <div className='border-1 border-gray-400 px-5 py-1 lg:w-50 w-[33.33%]'>
                React.js
              </div>
            </div>
          </div>
          <div className="font-bold lg:text-2xl text-xl mt-8">
            TOOLS:
          </div>
          <div className="mt-3">
            <div className='flex flex-wrap'>
              <div className='border-1 border-gray-400 px-5 py-1 lg:w-50 w-[50%]'>
                SFMC
              </div>
              <div className='border-1 border-gray-400 px-5 py-1 lg:w-50 w-[50%]'>
                Klaviyo
              </div>
              <div className='border-1 border-gray-400 px-5 py-1 lg:w-50 w-[50%]'>
                Mailchimp
              </div>
              <div className='border-1 border-gray-400 px-5 py-1 lg:w-50 w-[50%]'>
                Figma
              </div>
              <div className='border-1 border-gray-400 px-5 py-1 lg:w-50 w-[50%]'>
                Photoshop
              </div>
              <div className='border-1 border-gray-400 px-5 py-1 lg:w-50 w-[50%]'>
                Email on Acid / Litmus
              </div>
              <div className='border-1 border-gray-400 px-5 py-1 lg:w-50 w-[50%]'>
                Basecamp
              </div>
              <div className='border-1 border-gray-400 px-5 py-1 lg:w-50 w-[50%]'>
                WorkFront
              </div>
              <div className='border-1 border-gray-400 px-5 py-1 lg:w-50 w-[50%]'>
                Sentric
              </div>
              <div className='border-1 border-gray-400 px-5 py-1 lg:w-50 w-[50%]'>
                Monday.com 
              </div>
              <div className='border-1 border-gray-400 px-5 py-1 lg:w-50 w-[50%]'>
                Canva
              </div>
              <div className='border-1 border-gray-400 px-5 py-1 lg:w-50 w-[50%]'>
                Postman
              </div>
              <div className='border-1 border-gray-400 px-5 py-1 lg:w-50 w-[50%]'>
                WordPress / Wix
              </div>
              <div className='border-1 border-gray-400 px-5 py-1 lg:w-50 w-[50%]'>
                MS Office
              </div>
              <div className='border-1 border-gray-400 px-5 py-1 lg:w-50 w-[50%]'>
                XAMPP Server
              </div>
              <div className='border-1 border-gray-400 px-5 py-1 lg:w-50 w-[50%]'>
                VS Code
              </div>
              <div className='border-1 border-gray-400 px-5 py-1 lg:w-50 w-[50%]'>
                Facebook Ads
              </div>
              <div className='border-1 border-gray-400 px-5 py-1 lg:w-50 w-[50%]'>
                Google Ads
              </div>
            </div>
          </div>

          <div className="font-bold lg:text-2xl text-xl mt-8">
            COURSES:
          </div>

          <div className='mt-2'>
            <div className="font-medium text-xl">
              2024
            </div>
            <div className="font-medium text-xl">
              Digital Marketing
            </div>
            <div className="flex items-center font-medium text-md my-2">
              <Award size={16} className='mr-2' />&nbsp;<Link className='underline cursor-pointer' to={"/"} target='_blank'>Certificate</Link>&nbsp;<Link to={"/"} target='_blank'><ExternalLink size={15} className='ml-1' /></Link>
            </div>
            <div className='flex justify-between'>
              <div>
                <div className="flex items-center">
                <GamepadDirectional size={15} /> 
                <div className="ml-4 font-light text-lg">
                  LIGHTHOUSE COMMUNITIES FOUNDATION
                </div>
                </div>
                <div className="flex items-center ml-8">
                  <Diamond size={10} /> 
                  <div className="ml-4 font-light text-md">
                      Content, Email, Affiliate, Social Media Marketing.
                  </div>
                </div>
                <div className="flex items-center ml-8">
                  <Diamond size={10} /> 
                  <div className="ml-4 font-light text-md">
                      Facebook, Instagram, LinkedIn, Google Ads.
                  </div>
                </div>
                <div className="flex items-center ml-8">
                  <Diamond size={10} /> 
                  <div className="ml-4 font-light text-md">
                      Lead Generation, Logo/Banner/Pamplet Designing.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='mt-5'>
            <div className="font-medium text-xl">
              2023
            </div>
            <div className="font-medium text-xl">
              Full Stack Web Development
            </div>
            <div className="flex items-center font-medium text-md my-2">
              <Award size={16} className='mr-2' />&nbsp;<Link className='underline cursor-pointer' target='_blank'>Certificate</Link>&nbsp;<Link to={"/"} target='_blank'><ExternalLink size={15} className='ml-1' /></Link>
            </div>

            <div className='flex justify-between'>
              <div>
                <div className="flex items-center">
                <GamepadDirectional size={15} /> 
                <div className="ml-4 font-light text-lg">
                  QUICK XPERT INFOTECH
                </div>
                </div>
                <div className="flex items-center ml-8">
                  <div className="font-light text-md">
                      Completed full stack web development through QuickXpert Infotech! Here's some technology about my web development journey:
                  </div>
                </div>
                <div className="flex items-center ml-8">
                  <div className="font-light text-md">
                      <em>HTML, CSS, JS, jQuery, Bootstrap, AJAX, PHP, MySQL, React.js, WordPress</em>.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills