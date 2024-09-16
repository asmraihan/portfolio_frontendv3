import { Slide } from "../../components/shared/Slide";
import ContributionGraph from "./ContributionGraph";


export default function GithubCalendarComponent() {
  return (
    <section className="w-5/6 mx-auto relative mt-8 flex flex-col justify-center items-center ">
      <Slide delay={0.16} className="mb-8">
        <h2 className="font-incognito text-4xl font-bold tracking-tight">
          Contrbution Graph
        </h2>
      </Slide>

      <Slide delay={0.18}>
        <ContributionGraph />
      </Slide>
    </section>
  );
}