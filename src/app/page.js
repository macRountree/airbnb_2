import { destinos } from '../data/dest';
import Banner from '@/components/Banner';
import Header from '@/components/Header';
import SmallCard from '@/components/SmallCard';
export default function Home() {
  return (
    <div className="">
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <h2>
            {destinos.map(({ id, imagen, distancia, localidad }) => (
              <SmallCard
                key={id}
                img={imagen}
                distance={distancia}
                location={localidad}
              />
            ))}
          </h2>
        </section>
      </main>
    </div>
  );
}
