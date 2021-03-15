const func = (a:number, b:number):number => a + b

npm i styled-component @types/styled-component

npx creat-react-app name --typescript

import Dispatch from 'redux';

async (dispatch: Dispatch) => {}

const todo: Todo[] = []

fn: (bod: string) => void | string


try catch

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
