import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Crew.module.scss";
import { useRouter } from "next/router";
import data from "../../data.json";

type Crew = {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  role: string;
  bio: string;
};

type CrewProps = {
  crewMember: Crew | undefined;
  crew: Crew[];
};

export default function Crew(props: CrewProps) {
  const { crewMember, crew } = props;

  const router = useRouter();

  if (!crewMember) {
    return router.push("/crew");
  }

  return (
    <main className={styles.main}>
      <p className={styles.pick}>
        <span className={styles.number}>02</span>Meet your crew
      </p>
      <section className={styles.container}>
        <div className={styles.imgContainer}>
          <img src={crewMember.images.webp} alt="crewmember" />
        </div>
        <div className={styles.content}>
          <ul className={styles.items}>
            {crew.map(({ role }) => {
              return (
                <li
                  className={`${styles.item} ${
                    router.asPath ===
                      "/crew/" + role.split(" ").join("-").toLowerCase() &&
                    styles.active
                  }`}
                  key={role}
                >
                  <Link
                    href={`/crew/${role.split(" ").join("-").toLowerCase()}`}
                  >
                    <a></a>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className={styles.details}>
            <div className={styles.role}>{crewMember.role}</div>
            <h1 className={styles.name}>{crewMember.name}</h1>
            <p className={styles.bio}>{crewMember.bio}</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export async function getStaticProps(context: { params: { crew: string } }) {
  const crewMember = data.crew.find(
    (crew) =>
      crew.role.split(" ").join("-").toLowerCase() === context.params.crew
  );

  return {
    props: { crewMember, crew: data.crew },
  };
}

export async function getStaticPaths() {
  const paths = data.crew.map(({ role }) => {
    return { params: { crew: role.split(" ").join("-").toLowerCase() } };
  });

  return {
    paths,
    fallback: false,
  };
}
