# useDebounce - кастомный хук для React

Присваивает значение переменной через заданный промежуток времени. По умолчанию задержка составляет **300мс**.

## Как использовать

- Скопировать файл useDebounce.ts к себе в проект
- Импортировать хук
- Передать в хук стейт, который нужно дебаунсить

```javascript
const [searchValue, setSearchValue] = useState('');
const debouncedSearchValue = useDebounce(searchValue, 500);
  useEffect(() => {
    getDataFromServer(debouncedSearchValue);
  }, [debouncedSearchValue]);
```
