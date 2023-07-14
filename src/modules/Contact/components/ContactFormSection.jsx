import { useState } from "react";

export default function ContactFormSection() {
  const URL = "https://wa.me";
  const number = "+16492469334".replace(/[^\w\s]/gi, "").replace(/ /g, "");

  let url = `${URL}/${number}`;
  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    enquiryType: "",
    message: "",
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    enquiryType: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleInputChange = (event) => {
    const { name, value, type } = event.target;

    if (type === "radio") {
      setFormData((prevData) => ({
        ...prevData,
        enquiryType: value,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const completeMessage = `Hello, Name: ${formData.name}, Email: ${formData.email}, Phone: ${formData.phone}. I want to make ${formData.enquiryType}: ${formData.message}.`;
    if (completeMessage) {
      url += `?text=${encodeURI(completeMessage)}`;
      window.open(url);
    }
    // Use the completeMessage as needed, such as sending it to a backend server or displaying it in the console
    console.log(completeMessage);
    setTimeout(() => {
      setFormData(initialFormData);
      setLoading(false);
    }, 4000);
  };

  return (
    <section class="">
      <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-1">
          {/* <div class="lg:col-span-2 lg:py-12">
            <p class="max-w-xl text-lg text-white">
              At the same time, the fact that we are wholly owned and totally
              independent from manufacturer and other group control gives you
              confidence that we will only recommend what is right for you.
            </p>

            <div class="mt-8">
              <a
                href="tel:(786) 329-3138"
                class="text-2xl font-bold text-goldenBrown"
              >
                (786) 329-3138
              </a>

              <address class="mt-2 not-italic text-white">
                282 Kevin Brook, Imogeneborough, CA 58517
              </address>
            </div>
          </div> */}

          <div class="rounded  lg:w-[60%] lg:mx-auto bg-cardBackground border border-gray-700 p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form action="" class="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label class="sr-only" for="name">
                  Name
                </label>
                <input
                  class="w-full text-white bg-highlightGreen rounded border-gray-700 p-3 text-sm"
                  placeholder="Name"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>

              <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label class="sr-only" for="email">
                    Email
                  </label>
                  <input
                    class="w-full rounded bg-highlightGreen border border-gray-700 text-white p-3 text-sm"
                    placeholder="Email address"
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label class="sr-only" for="phone">
                    Phone
                  </label>
                  <input
                    class="w-full rounded bg-highlightGreen border border-gray-700 text-white p-3 text-sm"
                    placeholder="Phone Number"
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                <div>
                  <input
                    class="peer sr-only"
                    id="option1"
                    type="radio"
                    tabindex="-1"
                    name="option"
                    value="General Enquiry"
                    checked={formData.enquiryType === "General Enquiry"}
                    onChange={handleInputChange}
                  />

                  <label
                    for="option1"
                    class="block w-full rounded bg-highlightGreen border border-gray-700 p-3 hover:border-black peer-checked:border-black peer-checked:bg-mustard text-goldenBrown  peer-checked:text-black"
                    tabindex="0"
                  >
                    <span class="text-sm font-medium"> General Enquiry </span>
                  </label>
                </div>

                <div>
                  <input
                    class="peer sr-only"
                    id="option2"
                    type="radio"
                    tabindex="-1"
                    name="option"
                    value="Tour Enquiry"
                    checked={formData.enquiryType === "Tour Enquiry"}
                    onChange={handleInputChange}
                  />

                  <label
                    for="option2"
                    class="block w-full rounded bg-highlightGreen border border-gray-700 p-3 hover:border-black peer-checked:border-black peer-checked:bg-mustard text-goldenBrown peer-checked:text-black"
                    tabindex="0"
                  >
                    <span class="text-sm font-medium"> Tour Enquiry </span>
                  </label>
                </div>

                <div>
                  <input
                    class="peer sr-only"
                    id="option3"
                    type="radio"
                    tabindex="-1"
                    name="option"
                    value="Photography Enquiry"
                    checked={formData.enquiryType === "Photography Enquiry"}
                    onChange={handleInputChange}
                  />

                  <label
                    for="option3"
                    class="block w-full rounded bg-highlightGreen border border-gray-700 p-3 hover:border-gray-700 peer-checked:border-black text-goldenBrown peer-checked:bg-mustard peer-checked:text-black"
                    tabindex="0"
                  >
                    <span class="text-sm font-medium">
                      {" "}
                      Photography Enquiry{" "}
                    </span>
                  </label>
                </div>
              </div>

              <div>
                <label class="sr-only" for="message">
                  Message
                </label>

                <textarea
                  class="w-full rounded border-gray-700 text-white bg-highlightGreen p-3 text-sm"
                  placeholder="Message"
                  rows="8"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>

              <div class="mt-4">
                <button
                  disabled={loading}
                  type="submit"
                  class="inline-block w-full rounded bg-gradient-to-b from-mustard to-brightMustard px-5 py-3 font-medium text-black sm:w-auto"
                >
                  {loading ? "Loading..." : "Send Enquiry on WhatsApp"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
