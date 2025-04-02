import { transactionTableData } from "@/shared/data";
import { NextResponse } from "next/server";

export async function GET() {
  const transactions = transactionTableData;
  let totalBalance = 0;
  let investmentPortfolio = 0;
  let savingsBalance = 0;
  let goalsBalance = 0;
  let totalInvestmentIncrement = 0;

  // Constants
  const interestRate = 0.05; // 5% interest
  const goalInterestRate = 0.05; // Apply same interest rate for goals
  const targetSet = 10000; // Example target set for goals

  transactions.forEach((transaction) => {
    const amount = parseFloat(transaction.amount);

    if (transaction.type === "savings") {
      savingsBalance += amount;
      totalBalance += amount; // Add savings to total balance
    } else if (transaction.type === "spending") {
      totalBalance -= amount;
    }

    // Handle investments
    if (
      transaction.type === "savings" &&
      transaction.description.includes("Investment")
    ) {
      investmentPortfolio += amount;
      totalInvestmentIncrement += amount * 0.125; // 12.5% increment
    }

    // Handle goals balance
    if (transaction.description.includes("Goals")) {
      goalsBalance += amount;
    }
  });

  // Interest calculations
  const interestAccumulated = savingsBalance * interestRate;
  const goalsInterestAccumulated = goalsBalance * goalInterestRate;

  return NextResponse.json({
    message: "Success",
    data: {
      totalBalance,
      investmentPortfolio: {
        amount: investmentPortfolio,
        increment: totalInvestmentIncrement,
      },
      savingsBalance: {
        amount: savingsBalance,
        interest: interestAccumulated,
      },
      goalsBalance: {
        amount: goalsBalance,
        interest: goalsInterestAccumulated,
        targetAchieved: goalsBalance,
        targetSet,
      },
    },
  });
}
