https://redux-saga.js.org/docs/introduction/BeginnerTutorial.html

### simiple template
```
export function* createLession(action) {
  try {
    const response = yield call(axios.get,  "link")
  }
  catch(e) {
  
  }
}

export function* watch(){
  yield takeEvery("lunch/create", createLession)
}

export default function* saga(){
  yield[ watch() ]
}

```
