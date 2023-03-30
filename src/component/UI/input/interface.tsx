import { RefObject } from 'react';

export interface IInputProps {
  placeholder?: string;
  value?: string;
  ref1: RefObject<HTMLInputElement>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
