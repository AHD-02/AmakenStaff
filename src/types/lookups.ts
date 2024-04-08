export type DropDownItem = {
  value: string | undefined
  label: string | undefined
}
export const calculationTypesLookup = [
  {value: 1, label: "Fixed"},
  {value: 2, label: "Percentage"},
  {value: 3, label: "Variable"},
];

export const leaveCycleLookup = [
  {value: "ContractAnniversary", label: "Contract Anniversary"},
  {value: "CalendarYear", label: "Calendar Year"},
];

export const allowncesPercentageTypeLookup = [
  {value: 1, label: "Basic Salary"},
  {value: 3, label: "Allowance"},
  {value: 4, label: "Basic Plus Allowance"},
];

export const deductionsPercentageTypeLookup = [
  {value: 1, label: "Basic Salary"},
  {value: 2, label: "Gross Salary"},
  {value: 3, label: "Allowance"},
  {value: 4, label: "Basic Plus Allowance"},
];