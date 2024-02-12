export function useCalculateMonthlyPayment() {
  return (loanAmount: number, loanDuration: number, interestRate: number) => {
    const monthlyInterestRate =
      (loanAmount * interestRate * loanDuration) / 100;

    const totalRepayment = monthlyInterestRate + loanAmount;
    const monthlyPayment = totalRepayment / loanDuration;
    return { monthlyPayment, totalRepayment, monthlyInterestRate };
  };
}

// NOTE: totalRepayment = loanAmount × (1 + monthlyInterestRate) ^ loanDuration
