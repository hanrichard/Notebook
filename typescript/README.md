### Interfaces vs type aliases 
Interfaces create types like type aliases do, but interfaces seem more powerful. If this is the case, should we always use interfaces and forget about type aliases?

Historically, the capabilities of type aliases and interfaces were different, but now they are very similar. For example, type aliases can have optional and read-only properties, just like an interface. You can extend type aliases by using intersection, which we’ll learn about later in this category of lessons.

So, it is generally personal preference as to which approach to use when creating types. Just be consistent with which method you use so that the code isn’t confusing.

```
interface Name {
    firstName: string;
    lastName: string;
}

type PhoneNumber = {
    landline: string;
    mobile: string;
}
```

```

const func = (a:number, b:number):number => a + b

npm i styled-component @types/styled-component

npx creat-react-app name --typescript

import Dispatch from 'redux';

async (dispatch: Dispatch) => {}

const todo: Todo[] = []

fn: (bod: string) => void | string


try catch
```

```
axios.get('foo.com')
  .then(response: AxiosResponse => {
    // Handle response
  })
  .catch((reason: AxiosError) => {
    if (reason.response!.status === 400) {
      // Handle 400
    } else {
      // Handle else
    }
    console.log(reason.message)
  })
```

```
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
  setCriteria(e.currentTarget.value);
```


```
type Props = {
  onSearch?: (criteria: string) => void;
};
const Searchbox = ({ onSearch }: Props) => {
  const [criteria, setCriteria] = React.useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCriteria(e.currentTarget.value);
    if (onSearch) {
      onSearch(e.currentTarget.value);
    }
  };

  return <input type="text" value={criteria} onChange={handleChange} />;
};
```

```
interface GloabalState {
  readonly filter: []
}
```

```
export interface AppConfig {
  apiUrl: string;
  apiVersion: string;
  linkUrl: string;
  version: string;
}

interface AppState {
  readonly default: any;
  readonly loading: boolean;
  readonly initialized: boolean;
  readonly config: AppConfig;
}
```

### react saga
```
const stateSelector = createStructuredSelector({
  loaded: makeSelectLoaded(),
  data: makeSelectBrowseData(),
  activeFilters: makeSelectActiveFilters(),
  join: makeSelectJoin(),
  orders: makeSelectOrders(),
  filters: makeSelectCollectionsFilter(),
});

interface MatchParams {
  contractId: string;
}

interface BrowsePagePropTypes extends RouteComponentProps<MatchParams> {}

function BrowsePage({ match }: BrowsePagePropTypes) {

  useInjectReducer({ key: 'browsePage', reducer: reducer });
  useInjectSaga({
    key: 'browsePage',
    saga: saga,
    mode: SagaInjectionModes.RESTART_ON_REMOUNT,
  });
  const { contractId } = match.params;
  const dispatch = useDispatch();
  const { data, loaded, orders, filters } = useSelector(stateSelector);
  
```

```
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  useInjectReducer,
  useInjectSaga,
  SagaInjectionModes,
} from 'redux-injectors';
```

```
const numbers: Array<any> = [];
```

```
interface ButtonProps {
  text: string;
  onClick: () => void;
}
```

```
function getAge(id: number): any {
  return 42;
}

function calcDiscount(age: number) {
  return age / 100;
}

const discount3 = calcDiscount(getAge(1) as number);
```

```
const numbers: Array<number> = [];
(string | number)[]
const benScores: [string, ...number[]] = ["Ben", 50, 75, 85]

```

```
const component1: MyComponent<Props1> = {
```
```
let usingArraySyntax: Array<number> = [1, 2, 3];
let usingArraySyntax: number[] = [1, 2, 3]
```
```
// Is the same as:
let myArray2: Array<number> = [];
printArray(myArray2);

// Is the same as:
let myArray3: number[] = [];
printArray(myArray3);
```
