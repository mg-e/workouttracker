import React, { useState } from "react";

function WorkoutForm({ addWorkout }) {
  const [exercise, setExercise] = useState("");
  const [sets, setSets] = useState([{ reps: "", weight: "" }]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!exercise || sets.some((set) => !set.reps || !set.weight)) {
      alert("Please fill in all fields.");
      return;
    }
    addWorkout(exercise, sets);
    setExercise("");
    setSets([{ reps: "", weight: "" }]);
  };

  const handleSetChange = (index, field, value) => {
    const updatedSets = [...sets];
    updatedSets[index][field] = value;
    setSets(updatedSets);
  };

  const addSet = () => {
    setSets([...sets, { reps: "", weight: "" }]);
  };

  const removeSet = (index) => {
    const updatedSets = sets.filter((_, i) => i !== index);
    setSets(updatedSets);
  };

  return (
    <form onSubmit={handleSubmit} className="workout-form">
      <input
        type="text"
        placeholder="Exercise"
        value={exercise}
        onChange={(e) => setExercise(e.target.value)}
        required
      />
      {sets.map((set, index) => (
        <div key={index} className="set-inputs">
          <div className="set-row">
            <input
              type="number"
              placeholder="Reps"
              value={set.reps}
              onChange={(e) => handleSetChange(index, "reps", e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Weight (kg)"
              value={set.weight}
              onChange={(e) => handleSetChange(index, "weight", e.target.value)}
              required
            />
            {sets.length > 1 && (
              <button type="button" onClick={() => removeSet(index)}>
                Remove
              </button>
            )}
          </div>
        </div>
      ))}
      <button type="button" onClick={addSet}>
        Add Set
      </button>
      <button type="submit">Log Workout</button>
    </form>
  );
}

export default WorkoutForm;