export function formatExpenseAmount(amount) {
    return amount.toLocaleString('en-US', { maximumFractionDigits: 2 });
}