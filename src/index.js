import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
//store redux saga
import { HelmetProvider } from "react-helmet-async";
import store from "./redux-saga/stores";

// const browserHistory = createBrowserHistory();
// browserHistory.listen((location) => {
//     // Use setTimeout to make sure this runs after React Router's own listener
//     setTimeout(() => {
//         // Keep default behavior of restoring scroll position when user:
//         // - clicked back button
//         // - clicked on a link that programmatically calls `history.goBack()`
//         // - manually changed the URL in the address bar (here we might want
//         // to scroll to top, but we can't differentiate it from the others)
//         if (location.action === "POP") {
//             return;
//         }
//         // In all other cases, scroll to top
//         window.scrollTo(0, 0);
//     });
// });

ReactDOM.render(
    <Provider store={store}>
        <HelmetProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </HelmetProvider>
    </Provider>,
    document.getElementById("root")
);
