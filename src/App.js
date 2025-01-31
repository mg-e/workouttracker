import React, { useState, useEffect } from "react";
import WorkoutForm from "./components/WorkoutForm";
import WorkoutList from "./components/WorkoutList";
import WorkoutSession from "./components/WorkoutSession";
import WeightChart from "./components/WeightChart";
import "./styles.css";

function App() {
  const [workouts, setWorkouts] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);

  // Load workouts from localStorage on initial render
  useEffect(() => {
    const savedWorkouts = JSON.parse(localStorage.getItem("workouts")) || [];
    setWorkouts(savedWorkouts);
  }, []);

  // Save workouts to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("workouts", JSON.stringify(workouts));
  }, [workouts]);

  const addWorkout = (exercise, sets) => {
    const newWorkout = {
      id: Date.now(),
      date: selectedDate,
      exercise,
      sets,
    };
    setWorkouts([...workouts, newWorkout]);
  };

  const deleteWorkout = (id) => {
    setWorkouts(workouts.filter((workout) => workout.id !== id));
  };

  const filteredWorkouts = workouts.filter(
    (workout) => workout.date === selectedDate
  );

  return (
    <div className="app">
      <h1>Workout Tracker</h1>
      <WorkoutSession selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <WorkoutForm addWorkout={addWorkout} />
      <WorkoutList workouts={filteredWorkouts} deleteWorkout={deleteWorkout} />
      <WeightChart workouts={workouts} />
    </div>
  );
}

export default App;