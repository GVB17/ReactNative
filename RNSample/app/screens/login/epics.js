import {catchError, filter, map, mapTo, switchMap, tap} from "rxjs/operators";
import {fromPromise} from "rxjs/observable/fromPromise";
import {of} from "rxjs/observable/of";
import {ofType} from "redux-observable";

import { CLEAR_DATA, USER_LOGIN} from "./actionTypes";
import {userLoginSuccess, userLoginFailure,} from "./actions";
import {handleResponse} from "../../common/utils";
import {userLogin$$} from "./api";

export const userLogin$ = action$ => {
    return action$.pipe(
        ofType(USER_LOGIN),
        switchMap(({payload}) => {
            return fromPromise(userLogin$$(payload)).pipe(
                tap(console.log),
                map(response =>
                    handleResponse(response, userLoginSuccess, userLoginFailure)
                ),
                catchError(err => of(userLoginFailure(err)))
            );
        })
    );
};