import { configureStore } from "@reduxjs/toolkit";
import { editExpenseModalSliceReducer } from "./slices/edit-expense-modal-slice"
import { addExpenseModalSliceReducer } from "./slices/add-expense-modal-slice"

export const store = configureStore({
 reducer: {
  addExpenseModal: addExpenseModalSliceReducer,
  editExpenseModal: editExpenseModalSliceReducer,
 },
})

export type RootState = ReturnType<typeof store.getState>


export default store