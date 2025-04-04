export default {
  buildPayload: async () => {
    const foodIntake = {};
    const exerciseData = {};

    const foodList = appsmith.store.foodInputList || [1];
    const exerciseList = appsmith.store.exerciseInputList || [1];

    for (const id of foodList) {
      const foodObj = appsmith.store[`selectedFood${id}`]; // { label, value }
      const weightStr = appsmith.store[`selectedWeight${id}`];

      const name = foodObj?.value;
      const weight = Number(weightStr);

      if (name && !isNaN(weight) && weight > 0) {
        foodIntake[name] = weight;
      }
    }

    for (const id of exerciseList) {
      const exerciseObj = appsmith.store[`selectedExercise${id}`]; // { label, value }
      const durationStr = appsmith.store[`selectedDuration${id}`];

      const name = exerciseObj?.value;
      const duration = Number(durationStr);

      if (name && !isNaN(duration) && duration > 0) {
        exerciseData[name] = duration;
      }
    }

    return {
      date: new Date().toISOString(),
      foodIntake,
      exerciseData,
    };
  }
}
