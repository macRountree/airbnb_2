import Image from 'next/image';

const InforCard = ({
  id,
  image,
  title,
  location,
  distancia,
  star,
  price,
  total,
  long,
  lat,
}) => {
  return (
    <div className="flex">
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image
          src={`/img/${image}.jpg`}
          fill
          alt="London_img"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col flex-grow pl-5 ">
        <div className="flex justify-between">
          <p>{location}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-7 cursor-pointer "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default InforCard;
