export function useCalculateMonthlyPayment() {
  return (loanAmount: number, loanDuration: number, interestRate: number) => {
    const monthlyInterestRate = interestRate / 100;

    const totalRepayment =
      loanAmount * Math.pow(1 + monthlyInterestRate, loanDuration);
    const monthlyPayment = totalRepayment / loanDuration;
    return { monthlyPayment, totalRepayment, monthlyInterestRate };
  };
}

//NOTE: totalRepayment = loanAmount × (1 + monthlyInterestRate) ^ loanDuration
