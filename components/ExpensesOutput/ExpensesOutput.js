import { View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "monthly mortgage payment",
    amount: 2834.85,
    date: new Date("2023-11-01"),
  },
  {
    id: "e2",
    description: "Lunch at Chipotle",
    amount: 10.86,
    date: new Date("2023-12-03"),
  },
  {
    id: "e3",
    description: "monthly Utility Bill - JCP&L",
    amount: 177.41,
    date: new Date("2023-12-08"),
  },
  {
    id: "e4",
    description: "monthly mortgage payment",
    amount: 2834.85,
    date: new Date("2023-12-01"),
  },
  {
    id: "e5",
    description: "monthly Netflix subscription",
    amount: 16.99,
    date: new Date("2022-12-01"),
  },
  {
    id: "e6",
    description: "Dinner at Wolfgang's",
    amount: 216.28,
    date: new Date("2023-12-07"),
  },
  {
    id: "e7",
    description: "A book",
    amount: 18.39,
    date: new Date("2023-12-04"),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;
