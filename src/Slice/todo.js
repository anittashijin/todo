import { configureStore } from '@reduxjs/toolkit';
import todosSlice from '../Slice/slice';

 const store = configureStore({
  reducer: {
    todos: todosSlice
  },
});
export default store