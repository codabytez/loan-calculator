// export function useCalculateMonthlyPayment() {
//   return (loanAmount: number, loanDuration: number, interestRate: number) => {
//     const monthlyInterest = (loanAmount * interestRate * loanDuration) / 100;

//     const totalRepayment = monthlyInterest + loanAmount;
//     const monthlyPayment = totalRepayment / loanDuration;
//     return { monthlyPayment, totalRepayment, monthlyInterest };
//   };
// }

// // NOTE: totalRepayment = loanAmount × (1 + monthlyInterest) ^ loanDuration

import { useState, useEffect } from "react";

export function useCalculateLoanPayments(
  loanAmount: number,
  loanDuration: number,
  interestRate: number
): [number[], number] {
  const [payments, setPayments] = useState<number[]>([]);
  const [totalPayment, setTotalPayment] = useState<number>(0);

  useEffect(() => {
    const newPayments: number[] = [];
    const monthlyPrincipalPayment = loanAmount / loanDuration;
    let total = 0;

    for (let i = 0; i < loanDuration; i++) {
      const monthlyInterest = loanAmount * interestRate;
      const monthlyPayment = monthlyPrincipalPayment + monthlyInterest;
      newPayments.push(monthlyPayment);
      total += monthlyPayment;

      // eslint-disable-next-line react-hooks/exhaustive-deps
      loanAmount -= monthlyPrincipalPayment;
    }

    setPayments(newPayments);
    setTotalPayment(total);
  }, [loanAmount, loanDuration, interestRate]);

  return [payments, totalPayment];
}
