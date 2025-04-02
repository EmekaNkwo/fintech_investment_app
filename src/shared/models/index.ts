import { z } from "zod";

export const transactionSchema = z.object({
  id: z.number(),
  description: z.string(),
  type: z.enum(["spending", "savings"]),
  status: z.string(),
  amount: z.string(),
  beneficiary: z.string(),
  targetSet: z.string().optional(),
});

export interface ITransaction {
  id: number;
  description: string;
  type: "spending" | "savings"; // Use literal types for strict validation
  status: string;
  amount: string;
  beneficiary: string;
}

interface InvestmentPortfolio {
  amount: number;
  increment: number;
}

interface SavingsBalance {
  amount: number;
  interest: number;
}

interface GoalsBalance {
  amount: number;
  interest: number;
  targetAchieved: number;
  targetSet: number; // Assuming targetSet is a number; adjust type if needed
}

export interface MetricResponse {
  totalBalance: number;
  investmentPortfolio: InvestmentPortfolio;
  savingsBalance: SavingsBalance;
  goalsBalance: GoalsBalance;
}
