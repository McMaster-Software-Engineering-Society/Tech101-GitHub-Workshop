import { useState } from "react";
import "./App.css";
import attendees from "./attendees.json";

const filters = [
  // Fetch all unique programs (no case sensitivity)
  ...new Set(attendees.map((attendee) => attendee.program.toLowerCase())),
];

const toTitleCase = (str: string) => {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
};

function App() {
  const [selectedFilterIndex, setSelectedFilterIndex] = useState(-1);

  return (
    <>
      <div
        id="header"
        className="bg-[#fecfd6] px-8 py-10 rounded-2xl text-white flex flex-col items-start shadow-lg"
      >
        <h2 className="font-bold tracking-wide text-lg">Filters</h2>
        <div
          id="filter-list"
          className="flex flex-row gap-x-4 mt-4 overflow-x-scroll max-w-screen-lg flex-wrap gap-y-4 select-none"
        >
          {selectedFilterIndex === -1 ? (
            <div className="bg-[#7588f1] transition-all rounded-xl flex flex-row items-center gap-x-3 px-7">
              <div className="flex flex-col items-start leading-tight">
                <p className="font-sm font-bold text-start text-nowrap">All</p>
              </div>
            </div>
          ) : (
            <div
              className="bg-[#ff8ea1] hover:opacity-75 transition-all rounded-xl flex flex-row items-center gap-x-3 px-7 hover:cursor-pointer"
              onClick={() => setSelectedFilterIndex(-1)}
            >
              <div className="flex flex-col items-start leading-tight">
                <p className="font-sm font-bold text-start text-nowrap">All</p>
              </div>
            </div>
          )}

          {filters.map((filter, index) => {
            return selectedFilterIndex !== index ? (
              <div
                key={index}
                className="bg-[#ff8ea1] hover:opacity-75 transition-all p-5 rounded-xl flex flex-row items-center gap-x-3 hover:cursor-pointer"
                onClick={() => setSelectedFilterIndex(index)}
              >
                <div className="aspect-square bg-[#ff9fae] transition-all w-10 flex flex-row items-center justify-center rounded-md shadow-sm font-bold">
                  {index + 1}
                </div>
                <div className="flex flex-col items-start leading-tight">
                  <p className="font-sm font-bold text-start text-nowrap">
                    {toTitleCase(filter)}
                  </p>
                  <p className="text-zinc-200 text-xs">program</p>
                </div>
              </div>
            ) : (
              <div
                key={index}
                className="bg-[#6077ef]  transition-all p-5 rounded-xl flex flex-row items-center gap-x-3"
              >
                <div className="aspect-square bg-[#7588f1] transition-all w-10 flex flex-row items-center justify-center rounded-md shadow-sm font-bold">
                  {index + 1}
                </div>
                <div className="flex flex-col items-start leading-tight">
                  <p className="font-sm font-bold text-start text-nowrap">
                    {toTitleCase(filter)}
                  </p>
                  <p className="text-zinc-200 text-xs">program</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full text-start mt-12">
        <span className="w-screen text-xl font-extrabold">Attendees</span>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-6">
        {attendees
          .filter(
            (attendee) =>
              selectedFilterIndex === -1 ||
              attendee.program.toLowerCase() ===
                filters[selectedFilterIndex].toLowerCase()
          )
          .map((attendee, index) => {
            return (
              <div
                key={index}
                className="attendee p-4 bg-white shadow-sm rounded-2xl flex flex-col items-start text-start"
              >
                <div className="flex flex-row gap-x-2 w-full justify-between">
                  <h2 className="text-lg font-bold">{attendee.name}</h2>
                  <a
                    href={`https://www.github.com/${attendee.githubUsername}`}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:opacity-80 transition-all"
                  >
                    <img
                      width="30"
                      height="30"
                      src="https://img.icons8.com/ios-glyphs/30/github.png"
                      alt="github"
                    />
                  </a>
                </div>
                <p>
                  <span className="font-semibold">Program</span>:{" "}
                  {attendee.program}
                </p>
                <p>
                  <span className="font-semibold">Level</span>: {attendee.level}
                </p>
                <div className="mt-2">
                  <span className="font-semibold">Fun Fact</span>
                  <p className="leading-tight">{attendee.funFact}</p>
                </div>
                {/* <p>
                <strong>Level:</strong> {attendee.level}
              </p>
              <p>
                <strong>GitHub:</strong>{" "}
                <a
                  href={attendee.githubUsername}
                  target="_blank"
                  rel="noreferrer"
                >
                  {attendee.githubUsername}
                </a>
              </p>
              */}
              </div>
            );
          })}
      </div>
    </>
  );
}

export default App;
