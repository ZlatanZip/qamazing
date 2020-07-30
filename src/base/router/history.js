import {createBrowserHistory} from "history";
const myHistory = createBrowserHistory();
export default myHistory;

/* import createBrowserHistory from "history/createBrowserHistory";
import {store} from "../../../base/store";
import {syncHistoryWithStore} from "react-router-redux";
const history = syncHistoryWithStore(createBrowserHistory(), store);
export default history; */
