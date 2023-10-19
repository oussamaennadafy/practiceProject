import React from 'react'
import { useSelector } from 'react-redux'
import { Modal, Text, View } from 'react-native'
import { RootState } from '../../../store'

function AddExpenseModal()
{
 const { isOpen } = useSelector((state: RootState) => state.addExpenseModal)
 return (
  <Modal visible={isOpen}>
   <Text>Add Modal</Text>
  </Modal>
 )
}

export default AddExpenseModal