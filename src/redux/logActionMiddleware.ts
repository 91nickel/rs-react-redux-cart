import { Middleware } from "redux";
import { logAction } from "../metrics/logAction";
import { ProjectActions } from "./actions";
import { RootState } from "./store";

export const logActionMiddleware: Middleware<{}, RootState> = (storeAPI) => {
    return function wrapDispatch(next) {
        return function handleAction(action: ProjectActions) {
            logAction(action);
            next(action);
        }
    }
}
