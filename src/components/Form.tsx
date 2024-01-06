import { FC } from "react";
import { FieldErrors, useFormContext } from "react-hook-form";
import {
  ActionProps,
  FieldErrorProps,
  FormFields,
  FormProps,
  HeaderProps,
  TextInputProps,
} from "../types/Form.type";

const Form: FC<FormProps> & {
  TextInput: FC<TextInputProps>;
  Action: FC<ActionProps>;
  Header: FC<HeaderProps>;
  FieldError: FC<FieldErrorProps>;
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

const Header: FC<HeaderProps> = ({ title, subheading }) => {
  return (
    <>
      <h3 className="font-bold text-lg">{title}</h3>
      {subheading && <p className="py-4">{subheading}</p>}
    </>
  );
};

const TextInput: FC<TextInputProps> = (props) => {
  const { register } = useFormContext();
  return (
    <input
      {...register(props.name, props.validator)}
      type="text"
      placeholder={props.placeholder}
      className={`input input-bordered w-full max-w-md ${props.className}`}
    />
  );
};

const FieldError: FC<FieldErrorProps> = ({ name, errorMessage }) => {
  let {
    formState: { errors },
  } = useFormContext<FormFields>();
  let error = errors[name as keyof FieldErrors<FormFields>];
  return (
    <>
      {error && (
        <div className="text-error ml-2">
          {error.message || errorMessage || "This field is required"}
        </div>
      )}
    </>
  );
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
Form.Header = Header;
Form.FieldError = FieldError;

export default Form;
