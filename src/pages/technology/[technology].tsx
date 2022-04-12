import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import data from "../../data.json";
import styles from "../../styles/Technology.module.scss";

type Technology = {
  name: string;
  images: {
    portrait: string;
    landscape: string;
  };
  description: string;
};

type TechnologyProps = {
  technology: Technology | undefined;
  technologyList: Technology[];
};

export default function Technology({
  technology,
  technologyList,
}: TechnologyProps) {
  const router = useRouter();

  if (!technology) {
    return router.push("/technology");
  }

  return (
    <main className={styles.main}>
      <p className={styles.pick}>
        <span className={styles.number}>03</span>Space launch 101
      </p>
      <section className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src={technology.images.landscape}
            alt="crewmember"
            layout="fill"
          />
        </div>
        <div className={styles.container}>
          <ul className={styles.items}>
            {technologyList.map(({ name }, index) => {
              return (
                <li
                  className={`${styles.item} ${
                    router.asPath ===
                      "/technology/" +
                        name.split(" ").join("-").toLowerCase() && styles.active
                  }`}
                  key={name}
                >
                  <Link
                    href={`/technology/${name
                      .split(" ")
                      .join("-")
                      .toLowerCase()}`}
                  >
                    <a>{index + 1}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className={styles.details}>
            <div className={styles.title}>the terminology ...</div>
            <h1 className={styles.name}>{technology.name}</h1>
            <p className={styles.description}>{technology.description}</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export async function getStaticProps(context: {
  params: { technology: string };
}) {
  const technology = data.technology.find(
    (tech) =>
      tech.name.split(" ").join("-").toLowerCase() === context.params.technology
  );

  return {
    props: { technology, technologyList: data.technology },
  };
}

export async function getStaticPaths() {
  const paths = data.technology.map(({ name }) => {
    return { params: { technology: name.split(" ").join("-").toLowerCase() } };
  });

  return {
    paths,
    fallback: false,
  };
}
