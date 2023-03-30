import { RefObject } from 'react';

export interface IInputProps {
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  refLink?: RefObject<HTMLInputElement>;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
