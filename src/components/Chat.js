import React, { useState } from "react";
import { UilCommentAltMessage, UilUser } from "@iconscout/react-unicons";
import { UilMessage } from "@iconscout/react-unicons";
import Homeicon from "../assets/home.svg";
import Savedicon from "../assets/bookmark.svg";
import Rocketicon from "../assets/rocket.svg";
import chatgptLogo from "../assets/chatgpt.svg";
// import { Configuration, OpenAIApi } from 'openai';
// import {main} from '../API_KEY/openai.js'
const Chat = () => {
  let history = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  return (
    <div className="flex ">
      <div className="Sidebar w-[20%] h-screen bg-[#0c0c15] border-r border-gray-400 p-2 ">
        <div className="">
          <button className="w-full h-[50px] text-white border bg-slate-600 rounded flex items-center justify-center gap-2">
            <span className="text-2xl">+</span> New Chat
          </button>
        </div>
        <div className="chat-history mt-4 h-[60%] overflow-y-scroll shadow-lg hide-scroll-bar">
          {history.map((list, index) => (
            <div
              key={index}
              className="history-btn text-center rounded mt-4 py-1  flex items-center justify-center px-4 hover:bg-slate-500 cursor-pointer transition ease-out delay-100"
            >
              <UilCommentAltMessage />{" "}
              <span className="ml-2">MyChatHistory</span>
            </div>
          ))}
        </div>

        <div className="pro-version  border-t border-slate-500 p-8 flex flex-col items-start justify-center gap-7">
          <div
            className="Home-btn flex items-center justify-center gap-4"
            href="#"
          >
            <img src={Homeicon} className="" />
            <span className="">Home</span>
          </div>
          <div
            className="Home-btn flex items-center justify-center gap-4"
            href="#"
          >
            <img src={Savedicon} className="" />
            <span className="">Saved</span>
          </div>
          <div
            className="Home-btn flex items-center justify-center gap-4"
            href="#"
          >
            <img src={Rocketicon} className="" />
            <span className="">Upgrade to Pro</span>
          </div>
        </div>
      </div>
      <div className="Main-chat w-[80%] border-gray-400 h-screen">
        <div className="ChatBox overflow-scroll h-[75%] hide-scroll-bar   p-6 my-6 rounded  ">
          {history.map((chat, index) => (
            <div className="flex flex-col items-start    rounded p-2 px-[12rem] API-chat">
              <div className="user-msg flex items-start justify-center bg-gray-800  px-4 py-4 rounded shadow-2xl">
                <i className="fa-solid fa-user text-[3.1rem]  mr-4"></i>
                <p className="text-start">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  numquam delectus alias laboriosam hic dolore culpa vel, fuga
                  dolores. Lorem ipsum dolor sit amet consectetur{" "}
                </p>
              </div>

              <div className="gpt-response flex items-start justify-center mt-8 bg-gray-600  px-4 py-4 rounded shadow-xl">
                <img
                  src={chatgptLogo}
                  className=" mr-4 bg-green-500 rounded p-1"
                />
                <p className="text-start">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  numquam delectus alias laboriosam hic dolore culpa vel, fuga
                  dolores. Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Corporis tempore iure voluptates ipsum, unde sed officia
                  ipsam animi, adipisci Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Quam rerum repudiandae sapiente repellendus
                  praesentium provident officiis, velit quibusdam aliquam sequi
                  ducimus reiciendis assumenda quae, ad fugiat libero in sint
                  sit hic possimus perspiciatis! Id quas sunt quod vero aperiam
                  nisi voluptate repellendus neque, autem voluptatum recusandae
                  iure molestias magni aliquid quisquam! Voluptatem est nam sint
                  eaque. Reiciendis obcaecati possimus et dolor velit dolores
                  ratione aliquam id non, ab consequatur libero vitae repellat
                  quibusdam fugiat? Sapiente similique, velit dolore quam{" "}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="Input-box  flex items-center justify-center p-2">
          <div className="input flex items-center justify-center border-gray-500  rounded shadow-lg bg-[#40414F]">
            <input
              type="text"
              placeholder="Send a message"
              className="input-field "
            />
            <div className="icon-container">
              <UilMessage className="message-icon" />
            </div>
          </div>
        </div>
        <p className="text-center text-gray-500 text-[10px] msg">
          Free Research Preview. ChatGPT may produce inaccurate information
          about people, places, or facts. ChatGPT September 25 Version
        </p>
      </div>
    </div>
  );
};

export default Chat;
