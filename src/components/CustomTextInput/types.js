/**
 * @flow
 */

export type PropsType = {
  value: string, // required
  onChangeText: () => void, // required
  style?: Object,
  placeholder?: string,
  placeholderTextColor?: string,
  returnKeyType?: 'done' | 'search',
  keyboardType?: 'default' | 'numeric',
  label?: string,
};
