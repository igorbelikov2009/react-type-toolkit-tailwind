import { useEffect, useState } from "react";

export function useDebounce(value: string, delay = 300): string {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debounced;
}
// Без этого хука, ввод каждого символа в инпуте на HomePage будет делать запрос.
// Сервер посчитает, что это спам и забанит нас.
