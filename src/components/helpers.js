export function createTodoItem(label) {
  return {
    label,
    done: false,
    id: Math.random(),
    isEditing: false,
    createTime: new Date(),
    newName: '',
    diffInMinutes: 0,
  };
}

export function calculateDiffInMinutes(createTime) {
  const currentTime = new Date();
  const diffInMilliseconds = currentTime - createTime;
  const diffInMinutes = Math.floor(diffInMilliseconds / (1000 * 60));
  return diffInMinutes;
}

export function getMinutesText(minutes) {
  const lastDigit = minutes % 10;
  const lastTwoDigits = minutes % 100;

  if (lastDigit === 1 && lastTwoDigits !== 11) {
    return 'минуту';
  } else if ([2, 3, 4].includes(lastDigit) && ![12, 13, 14].includes(lastTwoDigits)) {
    return 'минуты';
  } else {
    return 'минут';
  }
}
