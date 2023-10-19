import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { expenseType } from "./../../types/expenseType"
import { COLORS, DEFAULT_BACKGROUND } from '../../constants/colors'

const { width, height } = Dimensions.get('window');

function ExpenseCard({ item }: { item: expenseType })
{
 return (
  <View style={styles.container}>
   <View>
    <Text style={styles.titleText}>{item.title}</Text>
    <Text style={styles.dateText}>{item.purchaseDate}</Text>
   </View>
   <View style={styles.priceConatiner}>
    <Text style={styles.priceText}>{item.price}</Text>
   </View>
  </View>
 )
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  width: "100%",
  padding: 20,
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: COLORS.blue150,
  borderRadius: 10,
  flexDirection: "row"
 },
 bar: {
  width: "100%",
  backgroundColor: COLORS.blue250,
  borderRadius: 6,
  paddingVertical: 12,
  paddingHorizontal: 16,
  flexDirection: "row",
  justifyContent: "space-between"
 },
 barText: {
  color: COLORS.blue500,
  fontSize: 16
 },
 titleText: {
  fontWeight: "600",
 },
 dateText: {
  marginTop: 4
 },
 priceConatiner: {
  paddingHorizontal: 20,
  paddingVertical: 15,
  minWidth: 80,
  backgroundColor: COLORS.blue100,
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 6
 },
 priceText: {
  fontWeight: "700",
  fontSize: 16
 },
})

export default ExpenseCard