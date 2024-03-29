### simple template

put:  dispatch

```
export function* createLession(action) {
  try {
    const response = yield call(axios.get,  "link")
    yield put({"CREATE_SUCCESS", repsonse: response.data}) //dispatch sucessful
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

```
/**
 *  content request/response handler
 */
export function* getPromoCodeData(action) {
  const endpoint = yield select(getEndpoints);
  const requestURL = `${endpoint.mulesoft}/campaigns/${action.value.promodeCode}`;
  const options = {
    method: "GET",
    headers: getMuleSoftHeader()
  };

  try {
    // Call our request helper (see 'utils/request')
    if (action.value.promodeCode === mockResponse.campaignCode) {
      // const promoCodeResponse = yield call(request, requestURL, options);
      const promoCodeResponse = mockResponse;
      // const status = ErrorConstants(address, 200);
      yield put(codeLoaded(promoCodeResponse));
    }
  } catch (err) {
    const errorStatus = ErrorConstants([], err.code, err.errorMsg);
  }
}
```

```
  const quoteDateQuery = action.value.quoteDate === undefined ? "" : `&?quoteDate=${action.value.quoteDate}`
  const quoteTypeQuery = action.value.quoteType === undefined ? "" : `&?coverageType=${action.value.quoteType}`
  const quoteStateQuery = action.value.quoteState === undefined ? "" : `&?state=${action.value.quoteState}`

  const requestURL = `${endpoint.mulesoft}/campaigns/${action.value.promodeCode}${quoteDateQuery}&productCode=QBEMotorVehicle${quoteTypeQuery}&channelType=online&producerCode=QBEDirect${quoteStateQuery}`;

```

```
//actions
export const getCampaignCode = value => ({ type: LOAD_CAMPAIGNCODE, value });

//reduxstore
import { LOAD_CAMPAIGNCODE,
} from './modules/app/actions';

takeLatest(LOAD_CAMPAIGNCODE, getCampaignCodeData),

//customSaga
export function* getCampaignCodeData(action) {}

//file.js
const mapDispatchToProps = dispatch => ({
  getCampaignCodeData: value => dispatch(getCampaignCode(value))
});
```


### connect mulit 
```
export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(CampaignBanner);

connect(mapStateToProps, mapDispatchToProps)
)(CampaignBanner);

```
```
export const isRequestInProgress = (state) => {
  const inProgressCount = get(state, 'apiProgress.counter.count', null);
  const allValues = Object.values(get(state, 'status.loading', {}));
  const isLoading = Array.isArray(allValues) && allValues.some(e => e === true);
  return isLoading || (inProgressCount && inProgressCount > 0);
};
```
