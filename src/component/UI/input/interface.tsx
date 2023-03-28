import { MutableRefObject } from 'react';

export interface IInputProps {
  placeholder?: string;
  value?: string;
  ref?: MutableRefObject<HTMLInputElement | null>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
