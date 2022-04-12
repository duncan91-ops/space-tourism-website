import { useRouter } from "next/router";
import data from "../../data.json";

type CrewProps = {
  crew:
    | {
        name: string;
        images: {
          png: string;
          webp: string;
        };
        role: string;
        bio: string;
      }
    | undefined;
};

export default function Crew(props: CrewProps) {
  const { crew } = props;

  const router = useRouter();

  if (!crew) {
    return router.push("/");
  }

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}

export async function getStaticProps(context: { params: { crew: string } }) {
  const crew = data.crew.find(
    (crew) => crew.name.split(" ")[0].toLowerCase() === context.params.crew
  );

  return {
    props: { crew },
  };
}

export async function getStaticPaths() {
  const paths = data.crew.map(({ name }) => {
    return { params: { crew: name.split(" ")[0].toLowerCase() } };
  });

  return {
    paths,
    fallback: false,
  };
}
