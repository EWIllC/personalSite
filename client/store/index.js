import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";



// const reducer = combineReducers({

// });

// const middleWare = composeWithDevTools(
//     applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
// );

// const store = createStore(reducer, middleWare);

// export default store;
