import { CALENDAR_WIDTH, CALENDAR_HEIGHT } from '../constants';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

const Callendar = () => {
  const HOUR_IN_SECONDS = 600;

  setTimeout(() => {
    window.location.reload();
  }, HOUR_IN_SECONDS * 100);

  return (
    <div>
      <iframe
        src='https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Europe%2FWarsaw&title=AIH&showTz=0&showCalendars=0&showTabs=1&showPrint=0&showDate=0&showNav=0&showTitle=0&mode=WEEK&src=NTFmNmZxOTdyaHFvMDRpY3Azb292dmY2bmtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23B39DDB" style="border:solid 1px #777'
        width={CALENDAR_WIDTH}
        height={CALENDAR_HEIGHT}
      ></iframe>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Callendar />} />
      </Routes>
    </Router>
  );
}
