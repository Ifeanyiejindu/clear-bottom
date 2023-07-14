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
    <div>
      {/* appearing and disappearing input field */}
      {show && (
        <div className="relative bg-cardBackground w-[300px] rounded h-[200px]">
          <div className="w-full flex justify-start">
            <img src={logo} alt="logo" className="object-contain" />
          </div>
          <div>
            <label class="sr-only w-full relative" for="message">
              Message
            </label>

            <textarea
              class="w-full rounded border-gray-700 text-white bg-highlightGreen p-3 text-sm"
              placeholder="Message"
              rows="3"
              id="message"
              name="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            ></textarea>
          </div>
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
            type="submit"
            class="inline-block w-full rounded bg-gradient-to-b from-mustard to-brightMustard px-5 py-3 font-medium text-black sm:w-auto"
          >
            {loading ? "Loading..." : "Send Enquiry on WhatsApp"}
          </button>
        </div>
      )}
      {/* button for opening and closing input field */}
      <div className="w-full flex ">
        <AiOutlineWhatsApp />
        <div class="mt-4">
          <button
            onClick={() => {
              setShow(!show);
            }}
            disabled={loading}
            class="inline-block w-full rounded bg-gradient-to-b from-mustard to-brightMustard px-5 py-3 font-medium text-black sm:w-auto"
          >
            {loading ? "Loading..." : "Hi, How can I help"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FloatingWhatsAppLiveChat;
