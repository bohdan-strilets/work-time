import { CalculateTaxProps } from 'types/props/CalculateTaxProps';
import { TaxThreshold } from 'types/enums/TaxThreshold';

const useCalculateTax = ({ earningForDay }: CalculateTaxProps) => {
  const taxRates = {
    pensionContribution: 9.76,
    disabilityContribution: 1.5,
    sicknessInsuranceContribution: 2.45,
    healthInsurancePremium: 9,
  };

  const calculatePercentage = (percentage: number, amount: number): number => {
    const result = ((percentage * amount) / 100).toFixed(2);
    return Number(result);
  };

  const calculateSocialSecurity = (amount: number): number => {
    const pensionContribution = calculatePercentage(taxRates.pensionContribution, amount);
    const disabilityContribution = calculatePercentage(taxRates.disabilityContribution, amount);
    const sicknessInsuranceContribution = calculatePercentage(
      taxRates.sicknessInsuranceContribution,
      amount,
    );
    return Number(
      (pensionContribution + disabilityContribution + sicknessInsuranceContribution).toFixed(2),
    );
  };

  const calculateHealthInsurance = (amount: number): number => {
    return calculatePercentage(taxRates.healthInsurancePremium, amount);
  };

  const calculateIncomeTax = (amount: number, tax: TaxThreshold): number => {
    return calculatePercentage(tax, amount);
  };

  const calculateTotal = (salary: number): number => {
    const socialSecurity = calculateSocialSecurity(salary);
    const salaryAfterSocialSecurity = salary - socialSecurity;
    const healthInsurance = calculateHealthInsurance(salaryAfterSocialSecurity);
    const salaryAfterHealthInsurance = salaryAfterSocialSecurity - healthInsurance;
    const incomeTax = calculateIncomeTax(salaryAfterHealthInsurance, TaxThreshold.low);
    return Number((salary - socialSecurity - healthInsurance - incomeTax).toFixed(2));
  };

  const socialSecurity = calculateSocialSecurity(earningForDay);
  const earningAfterSocailSecuriy = earningForDay - socialSecurity;
  const healthInsurance = calculateHealthInsurance(earningAfterSocailSecuriy);
  const aerningAfterHealthInsurance = earningAfterSocailSecuriy - healthInsurance;
  const incomeTax = calculateIncomeTax(aerningAfterHealthInsurance, TaxThreshold.low);
  const total = calculateTotal(earningForDay);

  return {
    calculateTotal,
    calculateSocialSecurity,
    calculateHealthInsurance,
    calculateIncomeTax,
    healthInsurance,
    incomeTax,
    socialSecurity,
    total,
  };
};

export default useCalculateTax;
