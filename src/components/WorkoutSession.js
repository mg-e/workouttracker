import React from "react";

function WorkoutSession({ selectedDate, setSelectedDate }) {
  return (
    <div className="session-selector">
      <label htmlFor="date">Select Date: </label>
      <input
        type="date"
        id="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />
    </div>
  );
}

export default WorkoutSession;