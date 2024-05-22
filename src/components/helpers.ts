export function createTodoItem(label: string) {
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

export function calculateDiffInMinutes(createTime: Date) {
  const currentTime: number = new Date().getTime();
  const diffInMilliseconds: number = currentTime - createTime.getTime();
  const diffInMinutes: number = Math.floor(diffInMilliseconds / (1000 * 60));
  return diffInMinutes;
}

export function getMinutesText(minutes: number) {
  const lastDigit: number = minutes % 10;
  const lastTwoDigits: number = minutes % 100;

  if (lastDigit === 1 && lastTwoDigits !== 11) {
    return 'минуту';
  } else if ([2, 3, 4].includes(lastDigit) && ![12, 13, 14].includes(lastTwoDigits)) {
    return 'минуты';
  } else {
    return 'минут';
  }
}
