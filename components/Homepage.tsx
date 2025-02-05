function Homepage() {
  return (
    <div className="bg-bgDark h-auto w-full">
      <div className="bg-banner h-auto min-h-[800px] bg-cover bg- bg-center flex justify-center items-center">
        <div>
          <h1 className="font-inria text-7xl">LOCALLY</h1>
          <h1 className="font-inria text-9xl mt-[80%]">SOURCED</h1>
        </div>
      </div>
      <div className="flex justify-around">
        <button className="bg-navbarYellow p-5 text-black font-inria font-bold text-xl opacity-50 hover:opacity-100 transition-opacity duration-300">
          HOME
        </button>
        <button className="bg-navbarYellow p-5 text-black font-inria font-bold text-xl opacity-50 hover:opacity-100 transition-opacity duration-300">
          ABOUT
        </button>
        <button className="bg-navbarYellow p-5 text-black font-inria font-bold text-xl opacity-50 hover:opacity-100 transition-opacity duration-300">
          REVIEW
        </button>
      </div>

      <div className="p-5">
        {/* About  */}
        <div className="grid grid-cols-3 items-center min-h-[500px] justify-around gap-2">
          <div className="bg-gray-800 h-full rounded-xl">FARMER&apos;S PIC</div>
          <div className="col-span-2 bg-cardLightYellow w-full h-full rounded-xl">
            FARMER&apos;S TALE
          </div>
        </div>
        {/* Some words */}
        <div className="grid grid-cols-6 p-20">
          <div className="text-8xl col-span-2">
            <h1>NATURE</h1>
            <h1>
              LO<span className="text-9xl">V</span>ER
            </h1>
          </div>
          <div className="col-span-2"></div>
          <p className="text-2xl tracking-wider">
            The joy of nurturing these hardy trees and harvesting their juicy,
            vitamin-rich fruits is a fulfilling experience for any nature lover.
          </p>
        </div>
        {/* Gallery */}
        <div className="grid grid-cols-5 grid-rows-3 gap-4 min-h-[800px]">
          <div className="row-span-3 col-span-3 bg-cardLightYellow rounded-xl">
            01
          </div>
          <div className="col-span-2 bg-cardGreen">02</div>
          <div className="col-span-2 bg-cardBrown">03</div>
          <div className="col-span-2 bg-cardGreen">04</div>
        </div>
        {/* Another words */}
        <div className="m-20">
          <h1 className="text-9xl font-inria">Guava Haven</h1>
          <p>
            The joy of nurturing these hardy trees Guava farming is a journey of
            patience and passion, where tiny saplings grow into lush,
            fruit-bearing trees. With sunlight, water, and care, they bloom,
            attracting bees and birds while yielding sweet, nutrient-rich
            guavas.
          </p>
          <p>
            Harvesting each ripe fruit is a moment of joy, a reward for
            nurturing nature&apos;s bounty. More than farming, it&apos;s a way
            to connect with the earth and share its gifts with the world. is a
            fulfilling experience for any nature lover.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
