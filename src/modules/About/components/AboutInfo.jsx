import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const AboutInfo = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-10 mx-auto">
          <div class="flex flex-wrap -m-4 text-center">
            <div class="p-4 sm:w-1/3 w-1/2">
              <h2 class="title-font font-medium sm:text-5xl text-3xl text-black">
                <CountUp end={800} suffix="+" redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </h2>
              <p class="leading-relaxed">Visitors</p>
            </div>
            <div class="p-4 sm:w-1/3 w-1/2">
              <h2 class="title-font font-medium sm:text-5xl text-3xl text-black">
                <CountUp end={3} redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </h2>
              <p class="leading-relaxed">Superb Locations</p>
            </div>
            <div class="p-4 sm:w-1/3 w-1/2">
              <h2 class="title-font font-medium sm:text-4xl text-3xl text-black">
                <CountUp end={100} suffix="%" redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </h2>
              <p class="leading-relaxed">Awesome Experience</p>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full  bg-amber-50">
        <div className="relative mx-auto max-w-7xl py-16 px-6 mt-7 lg:px-8">
          <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-1 lg:gap-6">
            <h2 className="text-lg font-semibold text-darkbrown text-center">
              About Us
            </h2>
            <h3 className="mt-2 text-[40px] font-bold leading-8 md:leading-[60px] tracking-tight text-gray-900 sm:text-[50px] w-[95%] md:w-[600px] mx-auto  text-center">
              Embark on Unforgettable Aquatic Explorations
            </h3>
          </div>
          <div className="flex flex-col md:flex-row mt-8 lg:grid lg:grid-cols-2 lg:gap-8 text-gray-600 font-light">
            <div className="mx-auto max-w-prose text-base lg:max-w-none">
              <p className="text-lg mb-[30px]">
                With our state-of-the-art clear bottom kayaks and paddleboards,
                you'll have a unique perspective of the vibrant marine life,
                untouched beaches, and breathtaking scenery that our islands
                have to offer. Whether you're a first-time adventurer or an
                experienced kayaker, our friendly and knowledgeable guides will
                ensure you have a memorable and safe experience. Dive into the
                beauty of our pristine mangrove tunnels, where you can spot
                fascinating wildlife such as juvenile lemon sharks, baby
                turtles, queen conch, and stingrays.
              </p>
            </div>
            <div className="mx-auto max-w-prose text-base lg:max-w-none">
              <p className="text-lg mb-[30px]">
                Feel the thrill of paddling through these natural wonders while
                our guides share their expertise on the local ecosystem. Clear
                Bottom Adventures is dedicated to providing exceptional service
                and unforgettable experiences. Join us on a journey to another
                world beneath the surface, and create lasting memories that will
                stay with you long after your adventure ends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
