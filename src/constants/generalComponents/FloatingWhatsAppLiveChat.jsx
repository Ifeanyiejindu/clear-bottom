import React, { useState } from "react";
import { logo } from "../../assets/images";
import { AiOutlineWhatsApp } from "react-icons/ai";

const FloatingWhatsAppLiveChat = () => {
  const [message, setMessage] = useState("");
  const URL = "https://wa.me";
  const number = "+16492469334".replace(/[^\w\s]/gi, "").replace(/ /g, "");
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  let url = `${URL}/${number}`;
  return (
    <div
      className={`flex flex-col items-end fixed bottom-10 right-5 z-90 ${
        show ? "md:hover:animate-none " : "md:hover:animate-bounce "
      } duration-300`}
    >
      {/* appearing and disappearing input field */}
      {show && (
        <div className="relative bg-transparent w-[250px] rounded h-[230px] duration-500  transition-all">
          <div className="w-full flex justify-end">
            <img src={logo} alt="logo" className="h-10 w-10 object-contain" />
          </div>

          <textarea
            class="w-full rounded border-gray-700 text-white bg-highlightGreen p-3 text-sm"
            placeholder="Message"
            rows="4"
            id="message"
            name="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          ></textarea>

          <button
            onClick={(event) => {
              event.preventDefault();
              setLoading(true);
              if (message) {
                url += `?text=${encodeURI(message)}`;
                window.open(url);
              }
              setTimeout(() => {
                setMessage("");
                setLoading(false);
              }, 4000);
            }}
            disabled={loading}
            class="inline-block w-full rounded bg-gradient-to-b from-mustard to-brightMustard px-5 py-3 font-medium text-black sm:w-auto"
          >
            {loading ? "Loading..." : "Chat"}
          </button>
        </div>
      )}
      {/* button for opening and closing input field */}
      <div className="relative">
        <div className="w-full flex items-center space-x-3">
          <AiOutlineWhatsApp size={35} color="#25D366" />

          <button
            onClick={() => {
              setShow(!show);
            }}
            class={`inline-block ${
              show ? "w-[176px]" : "w-full"
            } rounded bg-gradient-to-b from-mustard  to-brightMustard px-5 py-3 font-medium text-black`}
          >
            {show ? "Close" : "How can I help"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FloatingWhatsAppLiveChat;
