import React from "react";

function WorkoutList({ workouts, deleteWorkout }) {
  return (
    <div className="workout-list">
      {workouts.length === 0 ? (
        <p>No workouts logged for this date.</p>
      ) : (
        workouts.map((workout) => (
          <div key={workout.id} className="workout-item">
            <p>
              <strong>{workout.exercise}</strong>
            </p>
            {workout.sets.map((set, index) => (
              <p key={index}>
                Set {index + 1}: {set.reps} reps, {set.weight} kg
              </p>
            ))}
            <button onClick={() => deleteWorkout(workout.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
}

export default WorkoutList;