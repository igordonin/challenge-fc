export const shuffle = <T>(collection: T[]) => {
  let currentIndex = collection.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [collection[currentIndex], collection[randomIndex]] = [
      collection[randomIndex],
      collection[currentIndex],
    ];
  }

  return collection;
};
