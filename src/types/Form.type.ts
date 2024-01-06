export type FormProps = {
  onSubmit: any;
  children: React.ReactNode;
  style?: any;
  className?: any;
};

export type TextInputProps = {
  placeholder: string;
  name: string;
  validator?: any;
  default?: string;
  className?: string;
};

export type HeaderProps = {
  title: string;
  subheading?: string;
};

export type FormFields = {
  name: string;
  cardNumber: string;
  cvv: string;
  expirationYear: string;
};

export type FieldErrorProps = {
  name: string;
  errorMessage?: string;
};

export type ActionProps = {
  children: React.ReactNode;
  onClick?: () => void;
};
