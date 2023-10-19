import { createSlice } from "@reduxjs/toolkit";

interface editExpenseModalStateType
{
 isOpen: boolean,
}

const initialState: editExpenseModalStateType = {
 isOpen: false,
}

const editExpenseModalSlice = createSlice({
 name: "editExpenseModal",
 initialState,
 reducers: {
  openModal: (state) =>
  {
   state.isOpen = !state.isOpen
   return state
  },
  closeModal: (state) =>
  {
   state.isOpen = !state.isOpen
   return state
  },
 }
})

export const editExpenseModalSliceActions = editExpenseModalSlice.actions

export const editExpenseModalSliceReducer = editExpenseModalSlice.reducer