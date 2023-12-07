import { createContext, useReducer } from "react";

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
  {
    id: "e8",
    description: "J Crew",
    amount: 142.58,
    date: new Date("2023-11-17"),
  },
  {
    id: "e9",
    description: "weekly grocery shopping",
    amount: 183.16,
    date: new Date("2023-12-02"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updateableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updateableExpense = state[updateableExpenseIndex];
      const updatedItem = { ...updateableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updateableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
