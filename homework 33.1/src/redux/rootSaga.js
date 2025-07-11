import { all } from "redux-saga/effects";
import todoSaga from "./todo/todoSaga";
import swapiSaga from "./swapi/swapiSaga";

export default function* rootSaga() {
	yield all([todoSaga(), swapiSaga()]);
}
