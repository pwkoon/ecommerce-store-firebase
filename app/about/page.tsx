import React from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import ScrollToTop from "@/components/ScrollToTop";

function About() {
  return (
    <>
      <ScrollToTop />
      <div className="h-auto p-10 bg-grey font-inria">
        {/* container */}
        <div className="max-w-[1000px] mx-auto">
          {/* founder's intro */}
          <div className="flex justify-around gap-10 items-center">
            <div>
              <h1 className="font-bold text-xl">(1961)</h1>
              <h2>
                Life is like a wheel, sometimes up and sometimes down;
                <br /> sometimes fast and sometimes slow
              </h2>
            </div>
            <Link href="/" className="border border-4 p-2 font-bold">
              <h1>GUAVA</h1>
              <h1>FARM.</h1>
            </Link>
          </div>
          <div className="grid grid-cols-4 p-10">
            <div className="col-span-3 mx-auto">
              <Image
                src={"/images/gallery.avif"}
                width={500}
                height={400}
                alt="farmer pic"
                className="max-h-[710px]"
              />
            </div>
            <div className="w-max pt-[35rem]">
              <p className="-rotate-90 ">
                From soil to sweetness <br />
                Rooted in care, grown with passion.
              </p>
            </div>
          </div>
          {/* From Foundations to Fields */}
          <div className="bg-lightWhite py-28 px-10 h-[500px]">
            <h1 className="text-6xl font-bold text-end leading-loose">
              From Foundations to Fields
            </h1>
            <hr className="border-t-8 border-black pb-5" />
            <div className="max-w-[400px] text-end flex-inline float-right">
              <p>
                Once a skilled construction worker, he left the world of bricks
                to embrace farming, starting with lime and corn. Through
                patience and care, he learned the rhythms of agriculture.
              </p>
              <br />
              <p>
                His dedication turned a small farm into a thriving guava
                orchard. The same hands that built homes now nurtured trees,
                showcasing the power of reinvention and the rewards of following
                his passion.
              </p>
            </div>
          </div>
          {/* Paddy field no paddy but fruits */}
          <div className="flex">
            <Image
              src={"/images/construction.avif"}
              width={500}
              height={400}
              alt="construction"
              className="max-h-[710px] z-50 bg-cover bg-fixed"
            />
            <Image
              src={"/images/farmer.avif"}
              width={500}
              height={400}
              alt="farmer"
              className="max-h-[710px] z-50"
            />
          </div>
          {/* transition */}
          <div className="max-w-[600px] mx-auto p-10">
            <p className="text-center text-2xl leading-9 pt-20">
              <span className="border-l-8 text-6xl font-bold bg-lightWhite pt-36">
                <span className="text-7xl">The</span> transition{" "}
              </span>
              from paddy to lime, corn, and finally guava represents an evolving
              agricultural journey, reflecting shifts in farming practices, crop
              selection, and economic considerations.
            </p>
            <div className="w-80 mx-auto text-xl text-center">
              <div
                className="w-60 h-60 mx-auto p-5 bg-fill bg-fixed"
                style={{ backgroundImage: "url('/images/paddy1.avif')" }}
              ></div>
              <p className="p-5">
                Beginning with rice cultivation, which demands water-intensive
                management...
              </p>
              <div
                className="w-60 h-60 mx-auto p-5 bg-fit bg-center bg-fixed"
                style={{ backgroundImage: "url('/images/lime5.avif')" }}
              ></div>
              <p className="p-5">
                The shift to lime introduces fruit farming that requires
                well-drained soil and careful maintenance...
              </p>
              <div
                className="w-60 h-60 mx-auto p-5 bg-cover bg-fixed"
                style={{ backgroundImage: "url('/images/corn1.avif')" }}
              ></div>
              <p className="p-5">
                Corn follows as a versatile staple crop known for its
                adaptability and high yield.
              </p>
            </div>
          </div>
          {/* guava farm story */}
          <div className="flex items-center">
            <Image
              src={"/images/guavas.avif"}
              width={500}
              height={400}
              alt="guavas"
              className="w-80 h-[400px] opacity-50 object-cover"
            />{" "}
            <Image
              src={"/images/guava-solo.avif"}
              width={500}
              height={400}
              alt="guava-solo"
              className="w-[380px] opacity-70 h-[500px] object-cover"
            />
            <Image
              src={"/images/guavas.avif"}
              width={500}
              height={400}
              alt="guavas"
              className="w-80 h-[400px] opacity-50 object-cover"
            />
          </div>
        </div>
        {/* guava's story */}
        <div className="max-w-[800px] flex items-center mx-auto p-10 gap-10">
          <h1 className="text-8xl font-bold">BEGIN... </h1>
          <p className="">
            Nestled in nature&apos;s embrace, our guava farm began with a
            passion for cultivating the finest, sun-kissed guavas. Rooted in
            sustainable practices, we nurture every tree with care, ensuring
            each fruit bursts with natural sweetness. From our farm to your
            table, we bring you the freshest, most flavorful guavas—grown with
            love, harvested at peak perfection.
          </p>
        </div>
        {/* from seed to fruits */}
        <div className="max-w-[800px] grid grid-cols-3 p-10 gap-5 mx-auto">
          <div
            className="p-20 bg-green rounded-full mx-auto text-xl text-center text-lightWhite cursor-pointer 
                transition-transform duration-[2000ms] ease-out bg-center bg-cover bg-green 
                hover:bg-[url(/images/guavas.avif)] hover:bg-no-repeat hover:brightness-110"
          >
            Month 1/2
          </div>
          <div className="p-20 bg-green rounded-full mx-auto text-xl text-center text-lightWhite cursor-pointer">
            Month 3/4
          </div>
          <div className="p-20 bg-green rounded-full mx-auto text-xl text-center text-lightWhite cursor-pointer">
            Month 5/6
          </div>
          <div className="p-20 bg-green rounded-full mx-auto text-xl text-center text-lightWhite cursor-pointer">
            Month 7/8
          </div>
          <div className="p-20 bg-green rounded-full mx-auto text-xl text-center text-lightWhite cursor-pointer">
            Month 9/10
          </div>
          <div className="p-20 bg-green rounded-full mx-auto text-xl text-center text-lightWhite cursor-pointer">
            Month 11/12
          </div>
        </div>
        {/* gif / video */}
        <div className="flex relative">
          <Image
            src={"/images/field.avif"}
            width={600}
            height={500}
            alt="field"
            className="mx-auto"
          />
          <div className="border-4 border-lightWhite px-36 py-44 absolute top-60 left-[28rem]"></div>
        </div>
        <div className="mx-auto max-w-[600px] p-20">
          <FaQuoteLeft className="text-6xl" />
          <p className="text-xl font-bold text-center">
            The days are long, and the work is hard, but there is no greater
            reward than seeing the fruits of my labor take shape. From the first
            sprout to the last harvest, I am reminded that growth is never
            quick, but always worth the effort.
          </p>
          <FaQuoteRight className="text-6xl float-right" />
        </div>
        {/* last part intro by farmer */}
        <div className="flex mx-auto max-w-[600px] gap-5">
          <Image
            src={"/images/guavas.avif"}
            width={500}
            height={400}
            alt="guavas"
            className="w-60 h-[400px] object-cover"
          />
          <div className="h-100 border-l-2 border-gray-500"></div>
          <div className="w-60 text-lg pt-36">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className="flex mx-auto max-w-[600px] gap-5">
          <div className="w-60 text-lg pt-52">
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
          <div className="h-100 border-l-2 border-gray-500"></div>
          <Image
            src={"/images/guavas.avif"}
            width={500}
            height={400}
            alt="guavas"
            className="w-60 h-[500px] object-cover pt-36"
          />
        </div>
        {/* never end */}
        <div className="p-20 mx-auto text-center max-w-[900px] leading-loose">
          <h1 className="text-8xl font-bold">NEVER END</h1>
          <hr />
          <p className="italic">
            Nurturing nature, harvesting longevity — our guava farm grows with
            care to last for generations.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
