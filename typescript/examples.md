```
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setInput({
    ...input,
    [e.target.name]: e.target.value
  })
```


```
action: ReactNode
```


```
interface ClientSearch {
setResult: () => void
}

const clientContext = React.createContext<ClientSearch>({
  setResult: () => void {}
})

const { setResult } = useContext(clientContext)

```

```
enum type = {book, person}

interface Resouce {
  name: type
}

const res: Rescouce = {
  name: type.book
}
```
