'use client';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import InforCard from '@/components/InforCard';
import MapBox from '@/components/MapBox';
import { london } from '@/data/london';
const Search = () => {
  return (
    <div>
      <Header />
      <main className="flex">
        <section className="flex-grow pt-14 px-6 ">
          <p className="text-xs mt-4">300 + Stays for 5 number of quest</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6"> Stays in London</h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancelation Flexibility</p>
            <p className="button">Type of place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>
          <div className="flex flex-col">
            {london.map(
              ({
                id,
                image,
                title,
                location,
                distancia,
                description,
                star,
                price,
                total,
                long,
                lat,
              }) => (
                <InforCard
                  key={id}
                  image={image}
                  distancia={distancia}
                  description={description}
                  location={location}
                  title={title}
                  star={star}
                  price={price}
                  total={total}
                  long={long}
                  lat={lat}
                />
              )
            )}
          </div>
        </section>
        <section className="min-w-[600px]  ">
          <MapBox />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Search;
