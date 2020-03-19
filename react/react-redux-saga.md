https://redux-saga.js.org/docs/introduction/BeginnerTutorial.html

### simiple template

put:  dispatch

```
export function* createLession(action) {
  try {
    const response = yield call(axios.get,  "link")
    yield put({"CREATE_SUCCESS", repsonse: response}) //dispatch sucessful
  }
  catch(e) {
    yield put({"CREATE_unSUCCESS", resposne: e}) //dispatch sucessful
  }
}

export function* watch(){
  yield takeEvery("lunch/create", createLession)
}

export default function* saga(){
  yield[ watch() ]
}

```
