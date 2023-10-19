import { View, Text, Pressable } from 'react-native'
import AntDesign from "react-native-vector-icons/AntDesign"
import { useDispatch } from 'react-redux'
import { addExpenseModalSliceActions } from './../../store/slices/add-expense-modal-slice'

import React from 'react'

export default function PlusButton()
{
 const dispatch = useDispatch();
 const handlePressPlusButton = () =>
 {
  dispatch(addExpenseModalSliceActions.openModal())
 }
 return (
  <Pressable onPress={handlePressPlusButton}>
   <AntDesign style={{ marginRight: 20 }} color={"white"} name='plus' size={40} />
  </Pressable>
 )
}