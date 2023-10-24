import React from 'react'
import chatgptLogo from '../assets/chatgpt.svg'
const Navbar = () => {
    return (
        <div className='header flex items-center justify-between px-4 border-b border-gray-400'>
            <label htmlFor="" className='flex items-center justify-center gap-1'><img htmlFor="" src={chatgptLogo} className='h-[35px]'/> <span>ChatGPT 2.0</span></label>

            <ul className="flex flex-wrap text-sm font-100 text-center text-gray-300 ">
                <li className="mr-2">
                    <a href="https://shailesh-attri.github.io/" className="inline-block p-4 hover:text-gray-600 hover:bg-gray-200 transition-all rounded-t-lg ">
                    <i class="fa-solid fa-globe mr-1"></i><span className='social'>Website</span>
                    </a>
                </li>
                <li className="mr-2">
                    <a href="https://www.linkedin.com/in/shailesh-attri-web/" className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-200 transition-all">
                    <i class="fa-brands fa-linkedin mr-1"></i><span className='social'>LinkedIn</span>
                    </a>
                </li>
                <li className="mr-2">
                    <a href="https://github.com/shailesh-attri" className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-200 transition-all">
                    <i className="fa-brands fa-github mr-1"></i><span className='social'>Github</span>
                    </a>
                </li>
                <li className="mr-2">
                    <button href="mailto:shaileshattri83@gmail.com" className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-200 transition-all">
                    <i class="fa-solid fa-envelope"></i> <span className='social'>Email</span>
                    </button>
                </li>
            </ul>


        </div>
    )
}

export default Navbar
