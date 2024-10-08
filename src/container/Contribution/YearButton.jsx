
export default function YearButton({
  year,
  currentYear,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg text-center px-4 py-2 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 duration-100 text-sm font-medium ${
        year === currentYear
          ? "dark:bg-secondary-color bg-[#40C463] dark:hover:border-transparent dark:text-zinc-800 text-white hover:border-transparent"
          : "dark:bg-zinc-900 bg-zinc-50 dark:text-white text-zinc-800"
      }`}
      title={`View Graph for the year ${year}`}
    >
      {year}
    </button>
  );
}