import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import data from "../../data.json";
import styles from "../../styles/Destination.module.scss";

type Destination = {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  description: string;
  distance: string;
  travel: string;
};

type DestinationProps = {
  destination: Destination | undefined;
  destinations: Destination[];
};

export default function Destination(props: DestinationProps) {
  const { destination, destinations } = props;

  const router = useRouter();

  if (!destination) {
    return router.push("/destination");
  }

  console.log(router.asPath);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <header className={styles.header}>
          <p className={styles.pick}>
            <span className={styles.number}>01</span>Pick your destination
          </p>
          <div className={styles.imgContainer}>
            <Image
              src={destination.images.webp}
              alt="destination picture"
              layout="fill"
            />
          </div>
        </header>
        <section className={styles.content}>
          <ul className={styles.items}>
            {destinations.map(({ name }) => {
              return (
                <li
                  key={name}
                  className={`${styles.item} ${
                    router.asPath === "/destination/" + name.toLowerCase() &&
                    styles.active
                  }`}
                >
                  <Link href={`/destination/${name.toLowerCase()}`}>
                    <a>{name}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
          <h1 className={styles.title}>{destination.name}</h1>
          <p className={styles.text}>{destination.description}</p>
          <div className={styles.divider}></div>
          <footer className={styles.details}>
            <div className={styles.distance}>
              <p className={styles.description}>avg. distance</p>
              <h2 className={styles.value}>{destination.distance}</h2>
            </div>
            <div className={styles.travel}>
              <p className={styles.description}>est. travel time</p>
              <h2 className={styles.value}>{destination.travel}</h2>
            </div>
          </footer>
        </section>
      </div>
    </main>
  );
}

export async function getStaticProps(context: {
  params: { destination: string };
}) {
  const destination = data.destinations.find(
    (destination) =>
      destination.name.toLowerCase() === context.params.destination
  );

  return {
    props: { destination, destinations: data.destinations },
  };
}

export async function getStaticPaths() {
  const paths = data.destinations.map(({ name }) => {
    return { params: { destination: name.toLowerCase() } };
  });

  return {
    paths,
    fallback: false,
  };
}
