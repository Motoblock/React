export interface IInputProps {
  placeholder?: string;
  value?: string;
  type?: string;
  id?: string;
  defaultValue?: string | '';
  accept?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
