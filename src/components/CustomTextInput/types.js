/**
 * @flow
 */

export type PropsType = {
  value: string, // required
  onChangeText: () => void, // required
  errorMessage: string, // required
  style?: Object,
  placeholder?: string,
  placeholderTextColor?: string,
  returnKeyType?: 'done' | 'search',
  onSubmitEditing?: () => void,
  keyboardType?: 'default' | 'numeric',
  maxLength?: number,
  onBlur?: Boolean,
  onFocus?: Boolean,
  caretHidden?: Boolean,
  editable?: Boolean,
  label?: string,
  numberOfLines?: number,
  textAlignVertical?: 'top',
  multiline?: Boolean,
};