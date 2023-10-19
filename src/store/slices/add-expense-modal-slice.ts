import { createSlice } from "@reduxjs/toolkit";

interface addExpenseModalStateType
{
 isOpen: boolean,
 openModal: () => void,
 closeModal: () => void,
}

const initialState: addExpenseModalStateType = {
 isOpen: false,
 openModal: () => { },
 closeModal: () => { },
}

const addExpenseModalSlice = createSlice({
 name: "addExpenseModal",
 initialState,
 reducers: {
  openModal: (state) =>
  {
   state.isOpen = true
  },
  closeModal: (state) =>
  {
   state.isOpen = false
  },
 }
})

export const addExpenseModalSliceActions = addExpenseModalSlice.actions

export const addExpenseModalSliceReducer = addExpenseModalSlice.reducer