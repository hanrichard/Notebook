```
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setInput({
    ...input,
    [e.target.name]: e.target.value
  })
```
