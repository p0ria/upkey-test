import { Params } from "@angular/router";
import { getSelectors, RouterReducerState } from "@ngrx/router-store";
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const selectRouter = createFeatureSelector<RouterReducerState>('router')

export const {
    selectCurrentRoute,
    selectFragment,
    selectQueryParam,
    selectQueryParams,
    selectRouteParam,
    selectRouteParams,
    selectRouteData,
    selectUrl
} = getSelectors(selectRouter)

export const selectNestedRouteParams = createSelector(
    selectRouter,
    router => {
        let currentRoute = router?.state?.root
        let params: Params = {}
        while (currentRoute?.firstChild) {
            currentRoute = currentRoute.firstChild
            params = {
                ...params,
                ...currentRoute.params
            }
        }
        return params
    }
)

export const selectNestedRouterParam = (param: string) =>
    createSelector(selectNestedRouteParams, params => params && params[param])