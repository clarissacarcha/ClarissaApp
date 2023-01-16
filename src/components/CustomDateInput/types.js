/**
 * @flow
 */

export type PropsType = {
  date: string,
  onConfirmDate: string => void,
  label?: string,
  dateFormat?: string,
  minDate?: string,
};
