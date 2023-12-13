import { CalculateTaxProps } from 'types/props/CalculateTaxProps';
import { TaxThreshold, TaxThresholdValue } from 'types/enums/TaxThreshold';

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

  const calculatePensionContribution = (amount: number) => {
    return calculatePercentage(taxRates.pensionContribution, amount);
  };

  const calculateDisabilityContribution = (amount: number) => {
    return calculatePercentage(taxRates.disabilityContribution, amount);
  };

  const calculateSicknessInsuranceContribution = (amount: number) => {
    return calculatePercentage(taxRates.sicknessInsuranceContribution, amount);
  };

  const calculateSocialSecurity = (amount: number): number => {
    const pensionContribution = calculatePensionContribution(amount);
    const disabilityContribution = calculateDisabilityContribution(amount);
    const sicknessInsuranceContribution = calculateSicknessInsuranceContribution(amount);
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
    const incomeTax = calculateIncomeTax(salaryAfterHealthInsurance, TaxThresholdValue.low);
    return Number((salary - socialSecurity - healthInsurance - incomeTax).toFixed(2));
  };

  const pensionContribution = calculatePensionContribution(earningForDay);
  const disabilityContribution = calculateDisabilityContribution(earningForDay);
  const sicknessInsuranceContribution = calculateSicknessInsuranceContribution(earningForDay);
  const socialSecurity = calculateSocialSecurity(earningForDay);
  const earningAfterSocailSecuriy = earningForDay - socialSecurity;
  const healthInsurance = calculateHealthInsurance(earningAfterSocailSecuriy);
  const aerningAfterHealthInsurance = earningAfterSocailSecuriy - healthInsurance;
  const incomeTax = calculateIncomeTax(aerningAfterHealthInsurance, TaxThresholdValue.low);
  const total = calculateTotal(earningForDay);

  return {
    calculateTotal,
    calculateSocialSecurity,
    calculateHealthInsurance,
    calculateIncomeTax,
    healthInsurance,
    incomeTax,
    total,
    pensionContribution,
    disabilityContribution,
    sicknessInsuranceContribution,
  };
};

export default useCalculateTax;
