// src/helpers/NextTaskHelper.js

export const getNextTasks = (subjects, chapterCompletion) => {
  const tasks = [];

  subjects.forEach(subject => {
    subject.units.forEach(unit => {
      unit.chapters.forEach(chapter => {
        const chapterTasks = chapterCompletion[subject.name]?.[unit.name]?.[chapter];
        if (chapterTasks && Object.values(chapterTasks).some(task => task)) {
          Object.keys(chapterTasks).forEach(task => {
            if (!chapterTasks[task]) {
              tasks.push({
                subject: subject.name,
                unit: unit.name,
                chapter,
                task,
              });
            }
          });
        }
      });
    });
  });

  return tasks.slice(0, 5); // Return top 5 tasks
};
