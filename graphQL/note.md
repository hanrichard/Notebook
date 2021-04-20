### Good practice

- data from api -> appollo
- local state -> useState/useReducer
- shared/global state -> redux/useContext


### examples
- https://www.robinwieruch.de/react-infinite-scroll

### libs
```
import { persistCache } from 'apollo-cache-persist'
```


```  
const { error, loading, data } = useQuery(LOAD_USERS);
 const addUser = () => {
    createUser({
      variables: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      },
    });

    if (error) {
      console.log(error);
    }
  };
  ```
  ```

const [createUser, { error }] = useMutation(CREATE_USER_MUTATION);
const [users, setUsers] = useState([]);
  useEffect(() => {
    if (data) {
      setUsers(data.getAllUsers);
    }
  }, [data]);
```
