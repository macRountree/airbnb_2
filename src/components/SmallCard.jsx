import Image from 'next/image';

const SmallCard = ({ imagen, distancia, localidad }) => {
  console.log(imagen);
  return (
    <div
      className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer
     hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out"
    >
      {/* left */}
      <div className="relative h-16 w-16 ">
        <Image
          src={`/img/${imagen}.png`}
          fill
          alt="icono_img"
          className="rounded-lg"
        />
      </div>
      {/* right */}
      <div className="">
        <h2>{localidad} </h2>
        <p className="text-gray-400">{distancia} </p>
      </div>
    </div>
  );
};

export default SmallCard;
