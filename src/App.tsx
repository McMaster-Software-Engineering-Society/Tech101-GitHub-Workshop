import "./App.css";
import attendees from "./attendees.json";

function App() {
  return (
    <>
      {/* Attendees has name, program, level, github, and funFact */}
      {attendees.map((attendee, index) => {
        return (
          <div key={index} className="attendee">
            <h2>{attendee.name}</h2>
            <p>
              <strong>Program:</strong> {attendee.program}
            </p>
            <p>
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
            <p>
              <strong>Fun Fact:</strong> {attendee.funFact}
            </p>
          </div>
        );
      })}
    </>
  );
}

export default App;
