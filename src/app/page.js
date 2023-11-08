import { destinos } from '../data/dest';
import { vive } from '../data/vive';
import Banner from '@/components/Banner';
import Header from '@/components/Header';
import LargeCard from '@/components/LargeCard';
import MediumCard from '@/components/MediumCard';
import SmallCard from '@/components/SmallCard';
export default function Home() {
  return (
    <div className="">
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
            {destinos.map(({ id, imagen, distancia, localidad }) => (
              <SmallCard
                key={id}
                imagen={imagen}
                distancia={distancia}
                localidad={localidad}
              />
            ))}
          </div>
        </section>
        <section className="pt-6">
          <h2 className="text-4xl font-semibold py-5">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide  p-3 -ml-3">
            {vive.map(({ id, title, img }) => (
              <MediumCard key={id} title={title} img={img} />
            ))}
          </div>
        </section>
        <LargeCard
          img="/greatest.jpg"
          title="The Greatest Outdoors"
          description="Wishlists curated by Mibnb"
          buttonText="Get Inspired"
        />
      </main>
    </div>
  );
}
