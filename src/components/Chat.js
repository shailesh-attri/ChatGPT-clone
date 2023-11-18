import React, { useState, useEffect, useRef } from "react";
import { UilCommentAltMessage, UilUser } from "@iconscout/react-unicons";
import { UilMessage } from "@iconscout/react-unicons";
import Homeicon from "../assets/home.svg";
import Savedicon from "../assets/bookmark.svg";
import Rocketicon from "../assets/rocket.svg";
import chatgptLogo from "../assets/chatgpt.svg";
import TypingAnimation from "./TypingAnimation";
import { sendMsgToAi } from "../API_KEY/openai";
import { SiOpenai } from "react-icons/si";
import localforage from "localforage";
import { Tooltip } from "@material-tailwind/react";
import { FaArrowDown } from "react-icons/fa6";
import Navbar from "./Navbar";

const Chat = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [gptHistory, setGptHistory] = useState([]);
  const lastMessageRef = useRef(null);
  const [isGetting, setIsGetting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  

  

  const NewChat = () => {
    setMessages([]);
    setIsLoading(true);
  };

  const handleSend = async () => {
    setIsLoading(false);
    setMessages([...messages, { text: input, isUser: true }]);
    setInput("");
    try {
      const res = await sendMsgToAi(input);
      setMessages([
        ...messages,
        { text: input, isUser: true },
        { text: <TypingAnimation textToType={res} />, isUser: false },
      ]);

      // Add the GPT response to the history
      setGptHistory((prevHistory) => [
        ...prevHistory,
        { text: input, isUser: true },
      ]);

      // Save gptHistory to localforage
      localforage.setItem("gptHistory", gptHistory);

      // Simulate delay before displaying the complete response
      setTimeout(() => {
        setMessages((prevMessages) =>
          prevMessages.map((message, index) =>
            index === prevMessages.length - 1
              ? { ...message, isTyping: false }
              : message
          )
        );
      }, res.split(" ").length * 200); // Adjust the delay based on the number of words in the response

      setResult(res);
      console.log("Your Final Response is: ", res);
    } catch (error) {
      console.error("Error sending message to OpenAI:", error);
      // Handle error as needed
    }
  };

  // Regenerate response from history
  const regenerateResponse = async (index) => {
    // Get the original user input from history
    const userInput = gptHistory[index].text;
    console.log("User input", userInput);
    // Regenerate the response
    setIsLoading(false);
    setMessages([...messages, { text: input, isUser: true }]);
    try {
      const res = await sendMsgToAi(userInput);

      // Update the gptHistory with the new response
      setGptHistory((prevHistory) =>
        prevHistory.map((entry, i) =>
          i === index ? { text: entry.text, isUser: entry.isUser } : entry
        )
      );

      // Save the updated gptHistory to localforage
      localforage.setItem("gptHistory", gptHistory);

      // Display the typing animation and update the response
      setMessages([
        ...messages,
        { text: userInput, isUser: true },
        { text: <TypingAnimation textToType={res} />, isUser: false },
      ]);

      setTimeout(() => {
        setMessages((prevMessages) =>
          prevMessages.map((message, i) =>
            i === prevMessages.length - 1
              ? { ...message, isTyping: false }
              : message
          )
        );
      }, res.split(" ").length * 200);

      setResult(res);
      console.log("Your Regenerated Response is: ", res);
      setInput("");
    } catch (error) {
      console.error("Error regenerating response:", error);
      // Handle error as needed
    }
  };

  useEffect(() => {
    // Load gptHistory from localforage on component mount
    localforage.getItem("gptHistory").then((savedHistory) => {
      if (savedHistory) {
        setGptHistory(savedHistory);
      }
    });
  }, []);

  useEffect(() => {
    // Scroll to the last message when messages change
    if (lastMessageRef.current) {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  function truncateText(text, numWords) {
    if (typeof text !== "string" || text.trim() === "") {
      return "";
    }
    const words = text.split(" ");

    if (words.length <= numWords) {
      return text;
    }

    const truncatedText = words.slice(0, numWords).join(" ") + " " + "...";
    return truncatedText;
  }

  return (
    <>

      <Navbar isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}></Navbar>
    <div className="flex ">
      <div className="Sidebar w-[20%] x840:w-[25%]  h-[80%]  bg-[#0c0c15] border-r border-gray-400 p-2 ">
      <Tooltip
              content="Create a new Chat"
              placement="right-end"
            >
        <div className="">
          <button
            onClick={NewChat}
            className="w-full h-[50px] text-white border bg-slate-600 rounded flex items-center justify-center gap-2"
          >
          
             <span className="text-2xl">+</span>
            
             New Chat
          </button>
        </div>
        </Tooltip>
        <div className="chat-history mt-4 h-[60%] overflow-y-scroll shadow-lg hide-scroll-bar ">
          {gptHistory.map((entry, index) => (
            <div
              key={index}
              className=" history text-center rounded mt-4 py-2  flex items-center justify-start  px-4  cursor-pointer transition ease-out delay-100"
              onClick={() => regenerateResponse(index)}
            >
              {/* {truncateText(entry.text, 4)} */}
              <UilCommentAltMessage className="" />{" "}
              <span className="ml-2 py-2 flex items-center justify-start truncate">
                {entry.text}{" "}
              </span>
            </div>
          ))}
        </div>

        <div className="pro-version h-[30%] border-t border-slate-500 p-8 flex flex-col items-start justify-center gap-10 x1260:gap-12 x1260:py-12">
          <div
            className="Home-btn flex items-center justify-center gap-4"
            href="#"
          >
            <img src={Homeicon} className="" />
            <a href="#Main-chat" className="">
              Home
            </a>
          </div>
          <a
            className="Home-btn flex items-center justify-center gap-4"
            href="#"
          >
            <img src={Savedicon} className="cursor-pointer" />
            <Tooltip
              content="Not available"
              placement="right-end"
            >
              <span className="">Saved</span>
            </Tooltip>
          </a>
          <a
            className="Home-btn flex items-center justify-center gap-4"
            href="#"
          >
            <img src={Rocketicon} className="cursor-pointer" />
            <Tooltip
              content="Please Contact to the developer "
              placement="right-end"
            >
              <span className="">Upgrade to Pro</span>
            </Tooltip>
          </a>
        </div>
      </div>

      <div
        className="Main-chat w-[80%] border-gray-400 bg-[#343541]  "
        id="Main-chat"
      >
        {isLoading ? (
          <div className=" ChatBox overflow-scroll  hide-scroll-bar h-[100vh]    w-full flex flex-col items-center justify-center">
            <img
              src={chatgptLogo}
              className="mr-4 bg-green-500 rounded p-1"
              alt="ChatGPT Logo"
            />
            <h1 className="text-[30px] mt-[10px]">How can i help you today?</h1>
            <div className="examples grid grid-cols-2 items-center gap-6 justify-center my-10">
              <div className="flex flex-col items-start justify-center border-[0.01px] border-gray-500 px-6 py-2 rounded-lg ">
                <p className="">Recommend a disk</p>
                <p className="text-gray-500">to bring to a potluck</p>
              </div>
              <div className="flex flex-col items-start justify-center border-[0.01px] border-gray-500 px-6 py-2 rounded-lg">
                <p>Design a database</p>
                <p className="text-gray-500">for an online merch store</p>
              </div>
              <div className="flex flex-col items-start justify-center border-[0.01px] border-gray-500 px-6 py-2 rounded-lg">
                <p>Write a letter</p>
                <p className="text-gray-500">to the boss</p>
              </div>
              <div className="flex flex-col items-start justify-center border-[0.01px] border-gray-500 px-6 py-2 rounded-lg">
                <p>write an email</p>
                <p className="text-gray-500">requesting a deadline</p>
              </div>
            </div>
          </div>
        ) : (
          <div
            className="ChatBox overflow-scroll h-[100vh] hide-scroll-bar  px-[15rem] py-[2rem] x1080:px-[10rem] x840:px-[9rem] rounded   w-full
        "
          >
            {!isGetting ? (
              <>
                <div className="flex flex-col items-start    rounded  ">
                  {messages.map((message, i) => (
                    <div
                      className={`gpt-response flex items-start justify-center mb-[1rem]  ${
                        message.isUser ? "" : ""
                      } px-4 py-4 rounded `}
                      key={i}
                    >
                      {/*  "bg-gray-800" : "bg-gray-600" */}
                      {message.isUser ? (
                        <i className="fa-solid fa-user text-[1rem] mr-4 bg-gray-500 rounded  p-2"></i>
                      ) : (
                        <SiOpenai
                          className="mr-4 bg-green-500 text-[2rem] rounded p-1 "
                          alt="ChatGPT Logo"
                        />
                      )}

                      {message.isTyping ? (
                        <TypingAnimation textToType={message.text} />
                      ) : (
                        <pre className=" text-start whitespace-pre-wrap w-full font-poppins">
                          {message.text}
                        </pre>
                      )}
                    </div>
                  ))}
                </div>
              </>
            ) : (
              "Please wait ... "
            )}
            <div ref={lastMessageRef}></div>
          </div>
        )}

        <div className="Input-box  flex flex-col items-center justify-center ">
          <div className="input flex items-center justify-center border-gray-500  rounded bg-[#40414F]">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Send message to ChatGPT"
              className="input-field w-[900px] x1080:w-[600px] x840:w-[500px]"
              onKeyPress={handleKeyPress}
            />
            <div className="icon-container">
              <UilMessage
                className="message-icon w-[50px]"
                onClick={handleSend}
              ></UilMessage>
            </div>
          </div>

          <p className="text-center text-gray-500 text-[10px] pt-2 x1260:pt-4 x1080:pt-4 x840:pt-4 x840:text-[8px] x1536:pt-4">
            ChatGPT can make mistakes. Consider checking important information.
          </p>
        </div>
      </div>
      {isModalOpen  && (
        <Modal
          NewChat={NewChat}
          gptHistory={gptHistory}
          regenerateResponse={regenerateResponse}

         
        />
      )}
    </div>
    </>
  );
};

export default Chat;

export const Modal = ({ NewChat, gptHistory, regenerateResponse }) => {
  return (
   
    <div className="right-sidebar fixed top-[4rem] right-2 flex  bg-[#0c0c15]" >
      <div className=" ModalSidebar  border-[0.01px] border-gray-400 p-2 h-[90vh]">
        <div className="">
          <button
            onClick={NewChat}
            className="w-full h-[50px] text-white border bg-slate-600 rounded flex items-center justify-center gap-2"
          >
            <span className="text-2xl">+</span> New Chat
          </button>
        </div>
        <div className="chat-history mt-4 h-[60%] overflow-y-scroll shadow-lg hide-scroll-bar ">
          {gptHistory.map((entry, index) => (
            <div
              key={index}
              className="  text-center rounded mt-4 py-1  flex items-center justify-start  px-4 hover:bg-slate-500 cursor-pointer transition ease-out delay-100"
              onClick={() => regenerateResponse(index)}
            >
              {/* {truncateText(entry.text, 4)} */}
              <UilCommentAltMessage className="" />{" "}
              <span className="ml-2 py-2 flex items-center justify-start truncate">
                {entry.text}{" "}
              </span>
            </div>
          ))}
        </div>

        <div className=" border-t border-slate-500 p-8 flex  items-start justify-center gap-10 x1260:gap-12 x1260:py-12">
        <div className="flex flex-col items-start justify-center gap-10">

          <div
            className="Home-btn flex items-center justify-center gap-4"
            href="#"
          >
            <img src={Homeicon} className="" />
            <a href="#Main-chat" className="">
              Home
            </a>
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
            <Tooltip
              content="Please Contact to the developer "
              placement="right-end"
            >
              <span className="">Upgrade to Pro</span>
            </Tooltip>
          </div>
        </div>
        <ul className="flex  flex-col gap-3 justify-start items-center text-sm font-100 text-center text-gray-300 ">
        <li className="mr-2 ">
          <a
            href="https://shailesh-attri.github.io/"
            className="inline-block pb-4 hover:text-gray-600 hover:bg-gray-200 transition-all rounded-t-lg "
          >
            <i className="fa-solid fa-globe mr-1"></i>
            <span className="social">Website</span>
          </a>
        </li>
        <li className="mr-2 ">
          <a
            href="https://www.linkedin.com/in/shailesh-attri-web/"
            className="inline-block pb-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-200 transition-all"
          >
            <i className="fa-brands fa-linkedin mr-1"></i>
            <span className="social">LinkedIn</span>
          </a>
        </li>
        <li className="mr-2 ">
          <a
            href="https://github.com/shailesh-attri"
            className="inline-block pb-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-200 transition-all"
          >
            <i className="fa-brands fa-github mr-1"></i>
            <span className="social">Github</span>
          </a>
        </li>
        <li className="mr-2 ">
          <button
            href="mailto:shaileshattri83@gmail.com"
            className="inline-block pb-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-200 transition-all"
          >
            <i className="fa-solid fa-envelope"></i>{" "}
            <span className="social">Email</span>
          </button>
        </li>
      </ul>
        </div>
      </div>
      
    </div>
  );
};
