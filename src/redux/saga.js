import {call, takeEvery, put} from 'redux-saga/effects';
import Axios from 'axios';
import {setMessage} from './reducer';
import {sagaActions} from './sagaActions';

// function uses axios to fetch data from our api
let callAPI = async ({url, method, data}) => {
  return await Axios({
    url,
    method,
    data,
  });
};

export function* fetchWordSaga() {
  try {
    let result = yield call(() =>
      callAPI({
        url: 'https://api.api-ninjas.com/v1/randomword',
      }),
    );
    console.log(result.data.word);
    yield put(setMessage(result.data.word));
  } catch (e) {
    yield put({type: 'WORD_SAGA_FAILED'});
  }
}
export default function* rootSaga() {
  yield takeEvery(sagaActions.FETCH_WORD_SAGA, fetchWordSaga);
}
