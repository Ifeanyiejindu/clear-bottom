import React from "react";

const FAQSection = () => {
  return (
    <section>
      <div class="items-center w-full px-5 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
        <div>
          <div class="max-w-2xl">
            <p class="text-4xl text-white">Frequent questions and answers</p>
            <p class="max-w-2xl mt-4 text-lg tracking-tight text-mustard">
              Everything You Need to Know.
            </p>
          </div>
        </div>
        <div class="w-full mx-auto mt-12 text-left">
          <div class="relative items-center gap-12 m-auto lg:inline-flex md:order-first">
            <div class="p-4 mx-auto lg:max-w-7xl lg:p-0">
              <ul class="grid grid-cols-1 gap-4 list-none lg:grid-cols-3 lg:gap-12">
                <li>
                  <div>
                    <p class="mt-5 text-lg font-medium leading-6 text-goldenBrown">
                      How long is the duration of your tours?
                    </p>
                  </div>
                  <div class="mt-2 text-base text-white">
                    The duration of our tours varies depending on the specific
                    package. Generally, our tours range from 2 to 3 hours of
                    adventure and exploration.
                  </div>
                </li>
                <li>
                  <div>
                    <p class="mt-5 text-lg font-medium leading-6 text-goldenBrown">
                      Are the tours suitable for beginners?
                    </p>
                  </div>
                  <div class="mt-2 text-base text-gray-50">
                    Absolutely! Our tours cater to all experience levels,
                    including beginners. Our friendly and knowledgeable guides
                    will provide a quick overview of basic techniques and ensure
                    a safe and enjoyable experience for everyone.
                  </div>
                </li>
                <li>
                  <div>
                    <p class="mt-5 text-lg font-medium leading-6 text-goldenBrown">
                      What should I bring for the tours?
                    </p>
                  </div>
                  <div class="mt-2 text-base text-gray-50">
                    We recommend bringing sunscreen, a hat, sunglasses, a towel,
                    and a change of clothes. We'll provide the necessary
                    equipment such as kayaks, paddle boards, and life jackets.
                  </div>
                </li>
                <li>
                  <div>
                    <p class="mt-5 text-lg font-medium leading-6 text-goldenBrown">
                      Is there an age limit for the tours?
                    </p>
                  </div>
                  <div class="mt-2 text-base text-gray-50">
                    Our tours are suitable for individuals of all ages. We offer
                    life jackets for both kids and adults, ensuring the safety
                    and enjoyment of everyone on the tour.
                  </div>
                </li>
                <li>
                  <div>
                    <p class="mt-5 text-lg font-medium leading-6 text-goldenBrown">
                      Can I bring my own camera or do you provide photography
                      services?
                    </p>
                  </div>
                  <div class="mt-2 text-base text-gray-50">
                    You are welcome to bring your own camera or smartphone to
                    capture your adventure. Additionally, we offer professional
                    aerial photography services to elevate your experience and
                    provide stunning aerial shots of your activities.
                  </div>
                </li>
                <li>
                  <div>
                    <p class="mt-5 text-lg font-medium leading-6 text-goldenBrown">
                      Is transportation provided to the tour locations?
                    </p>
                  </div>
                  <div class="mt-2 text-base text-gray-50">
                    Transportation to the tour locations is not included.
                    However, we can provide recommendations for reliable
                    transportation services in the area to ensure convenient and
                    hassle-free travel.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
