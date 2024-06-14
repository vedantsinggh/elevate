export const getNextTasks = (subjects, chapterCompletion) => {
  const tasks = [];

  subjects.forEach(subject => {
    subject.units.forEach(unit => {
      unit.chapters.forEach(chapter => {
        const chapterTasks = chapterCompletion[subject.name]?.[unit.name]?.[chapter];
        if (chapterTasks) {
          if (!chapterTasks.lecture) {
            tasks.push({ subject: subject.name, unit: unit.name, chapter, task: 'Lecture' });
          } else if (!chapterTasks.practice) {
            tasks.push({ subject: subject.name, unit: unit.name, chapter, task: 'Practice' });
          } else if (!chapterTasks.pyqs) {
            tasks.push({ subject: subject.name, unit: unit.name, chapter, task: 'PYQs' });
          } else if (!chapterTasks.test) {
            tasks.push({ subject: subject.name, unit: unit.name, chapter, task: 'Test' });
          }
        }
      });
    });
  });

  return tasks.sort((a, b) => {
    const priority = { 'Lecture': 1, 'Practice': 2, 'PYQs': 3, 'Test': 4 };
    return priority[a.task] - priority[b.task];
  }).slice(0, 5);
};
