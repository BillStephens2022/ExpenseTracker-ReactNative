const DATABASE_URL = "https://expensetracker-fe9e0-default-rtdb.firebaseio.com";

export async function storeExpense(expenseData) {
  try {
    const response = await fetch(`${DATABASE_URL}/expenses.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(expenseData),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    const id = data.name;
    console.log("Expense added successfully:", data);
    return id;
  } catch (error) {
    console.error("Error adding expense:", error);
    throw error;
  }
}

export async function fetchExpenses() {
  try {
    const response = await fetch(`${DATABASE_URL}/expenses.json`);
    const data = await response.json();
    console.log("RESPONSE", data);
    const expenses = [];
    for (const key in data) {
      const expenseObj = {
        id: key,
        amount: data[key].amount,
        date: new Date(data[key].date),
        description: data[key].description,
      };
      expenses.push(expenseObj);
      console.log("EXPENSES: ", expenses);
    }
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return expenses;
  } catch (error) {
    console.error("Error fetching expenses:", error);
    throw error;
  }
}

export async function updateExpense(expenseId, updatedExpenseData) {
  try {
    const response = await fetch(`${DATABASE_URL}/expenses/${expenseId}.json`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedExpenseData),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log("Expense updated successfully:", data);
    return data;
  } catch (error) {
    console.error("Error updating expense:", error);
    throw error;
  }
}

export async function deleteExpense(expenseId) {
  try {
    const response = await fetch(`${DATABASE_URL}/expenses/${expenseId}.json`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    console.log("Expense deleted successfully");
    
    return true;
  } catch (error) {
    console.error("Error deleting expense:", error);
    throw error;
  }
}
