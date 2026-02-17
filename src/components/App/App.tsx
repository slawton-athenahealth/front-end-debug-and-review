import { getLocalTimeZone, parseDate } from "@internationalized/date";
import { Calendar } from "../Calendar/Calendar";
import { useEffect, useState } from "react";
import { Provider, defaultTheme } from "@adobe/react-spectrum";
import AppointmentCard, {
  type AppointmentType,
} from "../AppointmentCard/AppointmentCard";

import "./App.css";

function App() {
  const [date, setDate] = useState(parseDate("2026-01-01"));
  const [appointments, setAppointments] = useState<AppointmentType[]>([]);
  const [todayAppointments, setTodayAppointments] = useState<AppointmentType[]>(
    [],
  );

  useEffect(() => {
    async function getAppointments() {
      setAppointments([]);
      const response = await fetch(`./data/appointments.json`);
      const data = await response.json();
      if (!ignore) {
        setAppointments(data.appointments);
        setTodayAppointments(
          data.appointments.filter(
            (appointment: AppointmentType) =>
              appointment.date === date.toString(),
          ),
        );
      }
    }

    let ignore = false;
    getAppointments();

    return () => {
      ignore = true;
    };
  }, [date]);

  const thisMonthAppointments = {};
  for (const appointment of appointments) {
    if (thisMonthAppointments[appointment.date]) {
      thisMonthAppointments[appointment.date]++;
    } else {
      thisMonthAppointments[appointment.date] = 1;
    }
  }

  return (
    <Provider theme={defaultTheme}>
      <header>
        <h1>Dr. Smith's Dental Office</h1>
      </header>
      <aside>
        <Calendar
          aria-label={`Appointments on ${date}`}
          value={date}
          onChange={setDate}
        />
        <section>
          <h2>Appointments this Month</h2>
          <ul>
            {Object.entries(thisMonthAppointments).map(([date, count]) => (
              <li key={date}>
                {parseDate(date)
                  .toDate(getLocalTimeZone())
                  .toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                  })}{" "}
                — {count}
              </li>
            ))}
          </ul>
        </section>
      </aside>
      <main className="appointment-list">
        <h1>Appointment List</h1>
        {todayAppointments.length === 0 && <p>No appointments found</p>}
        {todayAppointments.length > 0 &&
          todayAppointments.map((appointment: AppointmentType) => (
            <AppointmentCard key={appointment.id} {...appointment} />
          ))}
      </main>
      <footer className="page-footer">
        <p>Dr. Smith's Dental Office</p>
        <p>123 Main St</p>
        <p>Anytown, USA 12345</p>
        <p>Phone: (555) 123-4567</p>
        <p>Email: info@smithsoffice.com</p>
      </footer>
    </Provider>
  );
}

export default App;
