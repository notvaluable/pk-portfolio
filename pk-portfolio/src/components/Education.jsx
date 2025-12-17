import { GamepadDirectional, Award, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Education = () => {
  return (
    <div className="flex flex-col" id="education">
        <div className="flex items-start">
          <div className="md:flex hidden items-center lg:pt-7 pt-4">
              <span className="dark:bg-gray-800 bg-gray-500 h-0.5 md:w-12 w-6"></span>
              <span className="dark:bg-gray-800 bg-gray-500 h-2 w-2 rounded-full"></span>
          </div>
          <h1 className="lg:text-6xl text-4xl nova-square-bold md:pl-2 text-gray-800 tracking-wider">EDUCATION</h1>
        </div>
        <div className='md:pl-17 max-w-[991px]'>
          <div className='mt-8'>
              <div className="font-medium text-xl">
                2019 <span className='text-gray-500'>- Graduation</span>
              </div>
              <div className="font-medium text-xl">
                BSc-Information Technology
              </div>
              <div className="flex items-center font-medium text-md my-2">
                <Award size={16} className='mr-2' />&nbsp;<Link className='underline cursor-pointer' target='_blank'>Certificate</Link>&nbsp;<Link to={"/"} target='_blank'><ExternalLink size={15} className='ml-1' /></Link>
              </div>

              <div className='flex justify-between'>
                <div>
                  <div className="flex items-center">
                  <GamepadDirectional size={15} /> 
                  <div className="ml-4 font-light text-lg">
                    SHREE RAM COLLEGE OF COMMERCE AND SCIENCE
                  </div>
                  </div>
                  <div className="flex items-center ml-8">
                    <div className="font-light text-md">
                        I have completed graduation in Bachelor of Science in Information Technology <span className='whitespace-nowrap'>(BSc-IT)</span> from the University of Mumbai.
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div className='mt-8'>
              <div className="font-medium text-xl">
                2016 <span className='text-gray-500'>- HSC</span>
              </div>
              <div className="font-medium text-xl">
                Science from Maharashtra State Board
              </div>
              <div className="flex items-center font-medium text-md my-2">
                <Award size={16} className='mr-2' />&nbsp;<Link className='underline cursor-pointer' target='_blank'>Certificate</Link>&nbsp;<Link to={"/"} target='_blank'><ExternalLink size={15} className='ml-1' /></Link>
              </div>

              <div className='flex justify-between'>
                <div>
                  <div className="flex items-center">
                  <GamepadDirectional size={15} /> 
                  <div className="ml-4 font-light text-lg">
                    VIDYA PRASARAK MANDAL JUNIOR COLLEGE
                  </div>
                  </div>
                  <div className="flex items-center ml-8">
                    <div className="font-light text-md">
                        I have completed Higher Secondary Certificate (HSC) from the Vidya Prasarak Mandal Junior College, Mulund East.
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div className='mt-8'>
              <div className="font-medium text-xl">
                2014 <span className='text-gray-500'>- SSC</span>
              </div>
              <div className="font-medium text-xl">
                SSC from Maharashtra State Board
              </div>
              <div className="flex items-center font-medium text-md my-2">
                <Award size={16} className='mr-2' />&nbsp;<Link className='underline cursor-pointer' target='_blank'>Certificate</Link>&nbsp;<Link to={"/"} target='_blank'><ExternalLink size={15} className='ml-1' /></Link>
              </div>

              <div className='flex justify-between'>
                <div>
                  <div className="flex items-center">
                  <GamepadDirectional size={15} /> 
                  <div className="ml-4 font-light text-lg">
                    GOSHALA ENGLISH SECONDARY SCHOOL
                  </div>
                  </div>
                  <div className="flex items-center ml-8">
                    <div className="font-light text-md">
                        I have completed Secondary School Certificate (SSC) from the Goshala English Secondary School, Mulund West.
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Education