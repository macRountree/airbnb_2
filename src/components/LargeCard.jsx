import Image from 'next/image';

const LargeCard = ({ img, title, description, buttonText }) => {
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          fill
          className="object-fill object-cover rounded-2xl"
          alt="greatest"
        />
      </div>
      <div className="absolute top-32 left-12 ">
        <h3 className="text-4xl mb-3  w-64 text-gray-300">{title}</h3>
        <p className="text-gray-300">{description} </p>
        <button className="text-sm text-purple-500 font-bold bg-white px-4 py-2 rounded-lg mt-5">
          {' '}
          {buttonText}{' '}
        </button>
      </div>
    </section>
  );
};

export default LargeCard;
