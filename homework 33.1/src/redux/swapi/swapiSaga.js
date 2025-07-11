import { takeLatest, call, put } from "redux-saga/effects";
import {
	fetchInfoData,
	fetchInfoDataSuccess,
	fetchInfoDataFailure,
} from "./infoSlice";

function* handleFetchInfo(action) {
	try {
		const res = yield call(
			fetch,
			`https://www.swapi.tech/api/${action.payload}`
		);
		if (!res.ok) throw new Error("Invalid SWAPI endpoint");
		const data = yield res.json();
		yield put(fetchInfoDataSuccess(data.result.properties));
	} catch (error) {
		yield put(fetchInfoDataFailure(error.message));
	}
}

export default function* swapiSaga() {
	yield takeLatest(fetchInfoData.type, handleFetchInfo);
}
