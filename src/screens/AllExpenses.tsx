import { View, Text, StatusBar, StyleSheet, FlatList, Dimensions } from 'react-native';
import { COLORS, DEFAULT_BACKGROUND } from './../constants/colors';
import EXPENSES from '../data/expenses';
import ExpenseCard from '../components/shared/ExpenseCard';

const { width, height } = Dimensions.get('window');


function RecentExpenses()
{
 return (
  <View style={styles.container}>
   <View style={styles.bar}>
    <Text style={styles.barText}>Total</Text>
    <Text style={[styles.barText, { fontWeight: '600' }]}>$399.99</Text>
   </View>
   <FlatList
    data={EXPENSES}
    renderItem={({ item }) => <ExpenseCard item={item} />}
    contentContainerStyle={styles.list}
    style={{ width: "100%" }}
   />
  </View>
 );
}

const styles = StyleSheet.create({
 container: {
  width: "100%",
  flex: 1,
  padding: 20,
  alignItems: 'center',
  backgroundColor: DEFAULT_BACKGROUND
 },
 bar: {
  width: "100%",
  backgroundColor: COLORS.blue150,
  borderRadius: 6,
  paddingVertical: 12,
  paddingHorizontal: 16,
  flexDirection: "row",
  justifyContent: "space-between",
  marginBottom: 10
 },
 barText: {
  color: COLORS.blue500,
  fontSize: 16
 },
 list: {
  paddingVertical: 15,
  gap: 10
 }
})


export default RecentExpenses