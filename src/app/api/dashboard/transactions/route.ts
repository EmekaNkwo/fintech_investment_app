import { transactionTableData } from "@/shared/data";
import { NextResponse } from "next/server";
import { transactionSchema } from "@/shared/models"; // Import the transaction schema

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const filterType = searchParams.get("type"); // Get the filter type from query parameters

  // Validate the filter type
  const allowedTypes = ["spending", "savings"];
  if (filterType && !allowedTypes.includes(filterType)) {
    return NextResponse.json(
      {
        message:
          "Invalid filter type. Allowed values are 'spending' or 'savings'.",
      },
      { status: 400 }
    );
  }

  // Fetch transactions
  const transactions = transactionTableData;

  try {
    // Validate transactions against the schema
    const parsedTransactions = transactions.map((transaction) => {
      return transactionSchema.parse(transaction); // Validate each transaction
    });

    // Filter transactions based on the type
    const filteredTransactions = filterType
      ? parsedTransactions.filter(
          (transaction) => transaction.type === filterType
        )
      : parsedTransactions;

    return NextResponse.json({
      message: "Transactions retrieved successfully",
      data: filteredTransactions,
    });
  } catch {
    return NextResponse.json(
      {
        message: "Validation error",
      },
      { status: 422 }
    );
  }
}
