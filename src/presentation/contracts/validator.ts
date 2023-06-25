export type ValidatorResponse = {
  isValid: boolean;
  error?: any;
};

export interface ValidatorInterface {
  validate(data: any): ValidatorResponse;
}
