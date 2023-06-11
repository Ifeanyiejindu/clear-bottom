export default function AboutHero() {
  return (
    // <div className="lg:pt-20">
    //   <div class="container px-5 pt-32 mx-auto lg:px-4 lg:py-4">
    //     <div class="flex flex-col w-full mb-2 text-left md:text-center ">
    //       <h1 class="mb-2 text-4xl font-bold tracking-tighter text-black lg:text-6xl md:text-5xl">
    //         <span>Discover Who</span>
    //         <br class="hidden lg:block"></br>
    //         We are
    //       </h1>
    //       <br></br>
    //       <p class="mx-auto  text-xl font-normal leading-relaxed text-gray-900 dark:text-gray-900 lg:w-2/3">
    //         At Clear Bottom Adventures, we believe in unlocking the hidden
    //         treasures that lie beneath the crystal-clear waters of the Turks and
    //         Caicos Islands. Immerse yourself in a world of wonder as you embark
    //         on extraordinary aquatic explorations like never before.
    //       </p>
    //     </div>
    //   </div>
    //   <div class="container flex flex-col items-center justify-center py-8 mx-auto rounded-lg md:p-1 p-3">
    //     <img
    //       class="object-cover object-center w-full mb-10 border-gray-200 dark:border-gray-900 g327 border rounded-lg shadow-md"
    //       alt="hero"
    //       src="https://images.unsplash.com/photo-1654157925394-4b7809721149?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80"
    //     ></img>
    //   </div>
    // </div>

    <header class=" mt-32 ">
      <div class="mx-auto grid max-w-6xl grid-cols-1  grid-rows-[auto_1fr] gap-y-16 py-16 md:py-20 lg:grid-cols-12 lg:gap-y-20 lg:px-3 lg:pb-36 lg:py-20 xl:py-32 items-start">
        <div class="relative flex items-end lg:col-span-5 lg:row-span-2">
          <div class="relative z-10 flex w-64 mx-auto overflow-hidden md:w-80 lg:w-auto">
            <img
              alt=""
              src="https://ik.imagekit.io/gondolatravel/uploads/IMG_3507_1_scaled_e8972b7dcc.jpg?tr=w-766,h-600,c-maintain_ratio,f-auto"
              decoding="async"
              data-nimg="future"
              class="object-cover w-full h-[430px] md:h-[600px] lg:h-[750px]"
            />
          </div>
        </div>
        <div class="relative order-first px-4 sm:px-6 lg:col-span-7 lg:pl-0 lg:pb-14 lg:pr-16 xl:pr-20">
          <div class="hidden lg:absolute lg:bottom-0 lg:-top-32 lg:left-[-100vw] lg:right-[-42.5vw] lg:block bg-highlightGreen"></div>
          <figure class="relative max-w-md mx-auto text-center lg:mx-0 lg:text-left">
            <div class="flex justify-center text-mustard lg:justify-start">
              <div class="flex gap-1">
                <ion-icon
                  class="w-5 h-5 fill-current md hydrated"
                  name="star"
                  role="img"
                  aria-label="star"
                ></ion-icon>
                <ion-icon
                  class="w-5 h-5 fill-current md hydrated"
                  name="star"
                  role="img"
                  aria-label="star"
                ></ion-icon>
                <ion-icon
                  class="w-5 h-5 fill-current md hydrated"
                  name="star"
                  role="img"
                  aria-label="star"
                ></ion-icon>
                <ion-icon
                  class="w-5 h-5 fill-current md hydrated"
                  name="star"
                  role="img"
                  aria-label="star"
                ></ion-icon>
                <ion-icon
                  class="w-5 h-5 fill-current md hydrated"
                  name="star"
                  role="img"
                  aria-label="star"
                ></ion-icon>
              </div>
            </div>
            <blockquote class="mt-2">
              <p class="text-xl font-medium text-white">
                “Here you can write a nice testimonial for your product!”
              </p>
            </blockquote>
            <figcaption class="mt-2 text-sm text-white">
              <strong class="font-semibold text-goldenBrown before:content-['—_']">
                Michael Andreuzza
              </strong>
              , Batman
            </figcaption>
          </figure>
        </div>
        <div class="pt-16 lg:col-span-7 lg:bg-transparent lg:pt-0 lg:pr-16 xl:pr-20">
          <div class="px-4 mx-auto sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
            <div class="max-w-xl text-center lg:text-left">
              <div>
                <p class="text-2xl font-medium tracking-tight text-goldenBrown sm:text-4xl">
                  Discover Us
                </p>
                <p class="max-w-xl mt-4 text-base tracking-tight text-white">
                  At Clear Bottom Adventures, we believe in unlocking the hidden
                  treasures that lie beneath the crystal-clear waters of the
                  Turks and Caicos Islands. Immerse yourself in a world of
                  wonder as you embark on extraordinary aquatic explorations
                  like never before.
                </p>
              </div>
              <div class="flex flex-col items-center justify-center gap-8 mt-10 lg:flex-row lg:justify-start">
                <a
                  href="/"
                  class="items-center justify-center w-full text-black px-6 py-2.5 text-center duration-200 bg-gradient-to-b from-brightMustard to-mustard border-highlightGreen hover:text-gray-600 nline-flex hover:bg-transparent hover:border-black  focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black"
                >
                  Book A Tour
                </a>
                <a
                  href="/"
                  class="inline-flex items-center justify-center text-sm font-semibold text-white duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600"
                >
                  Talk To Us
                  <span
                    className="ml-1 hover:ml-3
                  "
                    aria-hidden="true"
                  >
                    {" "}
                    →{" "}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
