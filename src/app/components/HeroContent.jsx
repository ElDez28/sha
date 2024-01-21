import Header from "./Header";

const HeroContent = ({ title, subtitle }) => {
  return (
    <div className="mx-auto  flex h-screen max-w-[96rem] flex-col items-center justify-center px-4 py-64 md:h-auto lg:px-8">
      <Header black={false} title={title}></Header>
      <p className="mx-auto max-w-4xl text-center font-semibold text-gray-200 ">
        {subtitle}
      </p>
    </div>
  );
};

export default HeroContent;
