import React, { FC } from "react";
import { useFormContext } from "react-hook-form";

type FormProps = {
  onSubmit: any;
  children: React.ReactNode;
  style: any;
};
const Form: FC<FormProps> & {
  TextInput: FC<TextInputProps>;
  Action: FC<ActionProps>;
  className?: any;
} = ({ onSubmit, children, ...props }) => {
  return (
    <form
      {...props}
      onSubmit={onSubmit}
      className={`flex gap-2 w-full justify-center items-center`}
    >
      {children}
    </form>
  );
};

type TextInputProps = {
  placeholder: string;
  name: string;
  validator?: any;
  default?: string;
};

const TextInput: FC<TextInputProps> = (props) => {
  const { register } = useFormContext();
  return (
    <input
      {...register(props.name, props.validator)}
      type="text"
      placeholder={props.placeholder}
      className="input input-bordered w-full max-w-md"
    />
  );
};

type ActionProps = {
  children: React.ReactNode;
  onClick?: () => void;
};
const Action: FC<ActionProps> = ({ children, ...props }) => {
  return (
    <button className="btn bg-secondary text-primary" {...props}>
      {children}
    </button>
  );
};

Form.TextInput = TextInput;
Form.Action = Action;

export default Form;
