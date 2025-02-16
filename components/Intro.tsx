type IntroProps = {
  path: string;
};

function Intro({ path }: IntroProps) {
  return (
    <>
      <div className="bg-bgIntro h-screen flex justify-center items-center">
        <a className="bg-gray-800 p-5 text-white font-inria" href={path}>
          Start
        </a>
      </div>
    </>
  );
}

export default Intro;
