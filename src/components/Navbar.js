import React, {useState} from 'react'
import chatgptLogo from '../assets/chatgpt.svg'
import { Sling as Hamburger } from 'hamburger-react'
import { Modal } from './Chat'
const Navbar = ({ isModalOpen,setIsModalOpen  }) => {
    
    
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
        
      };
    
    
    return (
        <div className='header flex items-center h-[50px] justify-between px-4 border-b border-gray-400'>
            <label htmlFor="" className='flex items-center justify-center gap-1'><img htmlFor="" src={chatgptLogo} className='h-[35px]'/> <span>ChatGPT 2.0</span></label>

            <ul className="flex flex-wrap text-sm font-100 text-center text-gray-300 ">
                <li className="mr-2 social">
                    <a href="https://shailesh-attri.github.io/" className="inline-block p-4 hover:text-gray-600 hover:bg-gray-200 transition-all rounded-t-lg ">
                    <i className="fa-solid fa-globe mr-1"></i><span className='social'>Website</span>
                    </a>
                </li>
                <li className="mr-2 social">
                    <a href="https://www.linkedin.com/in/shailesh-attri-web/" className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-200 transition-all">
                    <i className="fa-brands fa-linkedin mr-1"></i><span className='social'>LinkedIn</span>
                    </a>
                </li>
                <li className="mr-2 social">
                    <a href="https://github.com/shailesh-attri" className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-200 transition-all">
                    <i className="fa-brands fa-github mr-1"></i><span className='social'>Github</span>
                    </a>
                </li>
                <li className="mr-2 social">
                    <button href="mailto:shaileshattri83@gmail.com" className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-200 transition-all">
                    <i className="fa-solid fa-envelope"></i> <span className='social'>Email</span>
                    </button>
                </li>
                <li className="mr-2 hamburger" onClick={toggleModal}>
                <Hamburger size={20} duration={0.5} />
                   
                </li>
            </ul>

       
        </div>
    )
}

export default Navbar
