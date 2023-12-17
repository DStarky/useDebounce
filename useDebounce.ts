import { useEffect, useState } from 'react';

export const useDebounce = <T>(value: T, delay: number = 300) => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value); // иницируем начальное значение и используем его тип

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay); // через delay миллисекунд меняем значение

    return () => clearTimeout(timeout); // но если value за это время изменилось, то мы очищаем задержку и создаем timeout заново
  }, [delay, value]);

  return debouncedValue; // в конце возвращаем значение
};
