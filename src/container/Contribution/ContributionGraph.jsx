
import GitHubCalendar from "react-github-calendar";
import { github } from "./data"
import { useState, useEffect } from "react";
import EmptyState from "./EmptyState";
import YearButton from "./YearButton";
import { getGitHubYears } from "./calculate-years";
import { useTheme } from "../../constants/theme";

export default function ContributionGraph() {
  const [calendarYear, setCalendarYear] = useState(
    undefined
  );
  const { isTheme, toggleTheme } = useTheme();
  const [serverTheme, setServerTheme] = useState(
    undefined
  );
  const scheme =
  isTheme === "light" ? "light" : isTheme === "dark" ? "dark" : "light";

  // Set theme only after rendering to avoid mismatch between client and server
  // https://github.com/vercel/next.js/issues/10608#issuecomment-589073831
  useEffect(() => {
    setServerTheme(scheme);
  }, [scheme]);

  const today = new Date().getFullYear();
  const username = "asmraihan"
  const joinYear = Number(2022);
  const years = getGitHubYears(joinYear);

  if (!username || !joinYear)
    return (
      <EmptyState
        title="Unable to load Contribution Graph"
        message="We could not find any GitHub credentials added to the .env file. To display the graph, provide your username and the year you joined GitHub"
      />
    );

  return (
    <div className="flex xl:flex-row flex-col gap-4">
      <div className="dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 p-8 rounded-lg max-w-fit max-h-fit">
        <GitHubCalendar
          username={username}
          theme={github}
          colorScheme={serverTheme}
          blockSize={13}
          year={calendarYear}
        />
      </div>
      <div className="flex justify-start xl:flex-col flex-row flex-wrap gap-2">
        {/* Display only the last five years */}
        {years.slice(0, 5).map((year) => (
          <YearButton
            key={year}
            year={year}
            currentYear={calendarYear ?? today}
            onClick={() =>
              setCalendarYear(year === calendarYear ? undefined : year)
            }
          />
        ))}
      </div>
    </div>
  );
}