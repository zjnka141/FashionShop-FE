import { fork } from 'redux-saga/effects';
import {authWatcher, crudWatcher} from './watchers';

export default function* start() {
  yield fork(authWatcher);
  yield fork(crudWatcher);
}