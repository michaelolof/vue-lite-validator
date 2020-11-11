import { RuleReturn } from "./index";
import { required } from "./required";


export const min = (minimum :number) => (value: any) :RuleReturn => {

  const valid = { hasError: false, validator: undefined };

  const notRequired = required(value).hasError;
  if(notRequired) return valid;

  if(value < minimum) return {
    hasError: true,
    validator: "min",
  }

  return valid;
  
}