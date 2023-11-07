import Image from 'next/image';

const SmallCard = ({ imagen, distancia, location }) => {
  return (
    <div>
      {/* left */}
      <div className="relative h-16 w-16">
        <Image src={`/${imagen}.png`} fill alt="icono_img" />
      </div>
      {/* right */}
    </div>
  );
};

export default SmallCard;
