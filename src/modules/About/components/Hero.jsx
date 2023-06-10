export default function AboutHero() {
  return (
    <div className="lg:pt-20">
      <div class="container px-5 pt-32 mx-auto lg:px-4 lg:py-4">
        <div class="flex flex-col w-full mb-2 text-left md:text-center ">
          <h1 class="mb-2 text-6xl font-bold tracking-tighter text-black lg:text-8xl md:text-7xl">
            <span>Discover Who</span>
            <br class="hidden lg:block"></br>
            We are
          </h1>
          <br></br>
          <p class="mx-auto  text-xl font-normal leading-relaxed text-gray-900 dark:text-gray-900 lg:w-2/3">
            At Clear Bottom Adventures, we believe in unlocking the hidden
            treasures that lie beneath the crystal-clear waters of the Turks and
            Caicos Islands. Immerse yourself in a world of wonder as you embark
            on extraordinary aquatic explorations like never before.
          </p>
        </div>
      </div>
      <div class="container flex flex-col items-center justify-center py-8 mx-auto rounded-lg md:p-1 p-3">
        <img
          class="object-cover object-center w-full mb-10 border-gray-200 dark:border-gray-900 g327 border rounded-lg shadow-md"
          alt="hero"
          src="https://images.unsplash.com/photo-1654157925394-4b7809721149?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80"
        ></img>
      </div>
    </div>
  );
}
