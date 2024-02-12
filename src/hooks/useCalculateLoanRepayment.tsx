export function useCalculateMonthlyPayment() {
  return (loanAmount: number, loanDuration: number, interestRate: number) => {
    const monthlyInterest = (loanAmount * interestRate * loanDuration) / 100;

    const totalRepayment = monthlyInterest + loanAmount;
    const monthlyPayment = totalRepayment / loanDuration;
    return { monthlyPayment, totalRepayment, monthlyInterest };
  };
}

// NOTE: totalRepayment = loanAmount × (1 + monthlyInterest) ^ loanDuration
