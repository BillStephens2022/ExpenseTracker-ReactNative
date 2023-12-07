import { FlatList, StyleSheet, Text } from "react-native";
import ExpenseItem from "./ExpenseItem";

function renderExpenseItem(itemData) {
    return (
      <ExpenseItem
        id={itemData.item.id} 
        description={itemData.item.description} 
        amount={itemData.item.amount}
        date={itemData.item.date}
      />
    );
}

function ExpensesList({ expenses }) {
  return <FlatList data={expenses} renderItem={renderExpenseItem} keyExtractor={(item) => item.id}/>;
}

export default ExpensesList;

const styles = StyleSheet.create({});
