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
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect</p>
      </div>
    </div>
  );
};

export default Banner;
