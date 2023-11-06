import Image from 'next/image';

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] ">
      <Image
        src="/Banner.avif"
        fill
        className="object-cover object-fill"
        alt="banner"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg bg-transparent text-white font-bold">
          Not sure where to go? Perfect
        </p>
        <button className="text-purple-500 bg-white px-10 py-4 shadow-md hover:shadow-2xl  rounded-full font-bold my-3 active:scale-90 transition duration-150">
          {' '}
          I&apos;m Flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
