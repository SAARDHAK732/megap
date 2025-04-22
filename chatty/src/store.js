// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './redux-tool-kit/reducers/user/user.reducer';  // Update path to your user reducer

const store = configureStore({
  reducer: {
    user: userReducer,  // Add more reducers if needed
  },
});

export default store;  // This is what you'll import in index.js
