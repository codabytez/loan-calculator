export function useCalculateMonthlyPayment() {
  return (loanAmount: number, loanDuration: number, interestRate: number) => {
    const monthlyInterestRate = interestRate / 12 / 100;
    const monthlyPayment =
      (loanAmount * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -loanDuration));
    const totalRepayment = monthlyPayment * loanDuration;
    return { monthlyPayment, totalRepayment, monthlyInterestRate };
  };
}

export function useCalculatePaymentTwo() {
  return (loanAmount: number, loanDuration: number, interestRate: number) => {
    const monthlyInterestRate = (interestRate * loanDuration) / 12 / 100;
    const monthlyPayment =
      (loanAmount * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -loanDuration));
    const totalRepayment = monthlyPayment * loanDuration;
    return { monthlyPayment, totalRepayment, monthlyInterestRate };
  };
}
