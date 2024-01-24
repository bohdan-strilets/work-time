import { CalculateTaxProps } from 'types/props/CalculateTaxProps';
import { TaxThreshold } from 'types/enums/TaxThreshold';
import { useAppSelector } from './useAppSelector';
import { getContractType, getAlready26, getPpkRate, getPpk } from '../redux/user/userSelectors';
import { ContractTypeEnum } from 'types/enums/ContractTypeEnum';

const useCalculateTax = ({ earningForDay }: CalculateTaxProps) => {
  const contractType = useAppSelector(getContractType);
  const already26 = useAppSelector(getAlready26);
  const ppkRate = useAppSelector(getPpkRate);
  const ppk = useAppSelector(getPpk);
  const simplifiedTaxationSystem = contractType === ContractTypeEnum.MandateContract && !already26;
  const exemptFromTaxes = !already26;

  const taxRates = {
    pensionContribution: simplifiedTaxationSystem ? 0 : 9.76,
    disabilityContribution: simplifiedTaxationSystem ? 0 : 1.5,
    sicknessInsuranceContribution: simplifiedTaxationSystem ? 0 : 2.45,
    healthInsurancePremium: simplifiedTaxationSystem ? 0 : 9,
    ppk: ppkRate,
  };

  const calculatePercentage = (percentage: number, amount: number): number => {
    const result = ((percentage * amount) / 100).toFixed(2);
    return Number(result);
  };

  const calculatePpk = (amount: number) => {
    if (taxRates.ppk) {
      return calculatePercentage(taxRates.ppk, amount);
    }
    return 0;
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
    if (exemptFromTaxes) {
      return calculatePercentage(0, amount);
    } else {
      return calculatePercentage(tax, amount);
    }
  };

  const calculateTotal = (salary: number): number => {
    const amountForPpk = calculatePpk(salary);
    const socialSecurity = calculateSocialSecurity(salary);
    const salaryAfterSocialSecurity = salary - socialSecurity;
    const healthInsurance = calculateHealthInsurance(salaryAfterSocialSecurity);
    const salaryAfterHealthInsurance = salaryAfterSocialSecurity - healthInsurance;
    const incomeTax = calculateIncomeTax(salaryAfterHealthInsurance, TaxThreshold.low);

    if (
      (contractType === ContractTypeEnum.ContractEmployment && ppk) ||
      (contractType === ContractTypeEnum.MandateContract && ppk && already26)
    ) {
      return Number(
        (salary - socialSecurity - healthInsurance - incomeTax - amountForPpk).toFixed(2),
      );
    } else {
      return Number((salary - socialSecurity - healthInsurance - incomeTax).toFixed(2));
    }
  };

  const pensionContribution = calculatePensionContribution(earningForDay);
  const disabilityContribution = calculateDisabilityContribution(earningForDay);
  const sicknessInsuranceContribution = calculateSicknessInsuranceContribution(earningForDay);
  const socialSecurity = calculateSocialSecurity(earningForDay);
  const earningAfterSocailSecuriy = earningForDay - socialSecurity;
  const healthInsurance = calculateHealthInsurance(earningAfterSocailSecuriy);
  const aerningAfterHealthInsurance = earningAfterSocailSecuriy - healthInsurance;
  const incomeTax = calculateIncomeTax(aerningAfterHealthInsurance, TaxThreshold.low);
  const amountForPpk = calculatePpk(earningForDay);
  const total = calculateTotal(earningForDay);

  return {
    calculateTotal,
    calculateSocialSecurity,
    calculateHealthInsurance,
    calculateIncomeTax,
    healthInsurance,
    incomeTax,
    amountForPpk,
    total,
    pensionContribution,
    disabilityContribution,
    sicknessInsuranceContribution,
  };
};

export default useCalculateTax;
