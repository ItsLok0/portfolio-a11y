export type FieldType = 'text' | 'email' | 'password' | 'number';

export type FieldConfig = {
  id: string;
  type: FieldType;
  label: string;
  placeholder?: string;
  defaultValue?: string;
  size?: 'sm' | 'md' | 'lg';
  validation?: { required?: boolean };
}