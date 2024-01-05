import React, { FC } from "react";

type FormProps = {
  onSubmit: any;
  children: React.ReactNode;
};
const Form: FC<FormProps> & {
  TextInput: FC<TextInputProps>;
  Action: FC<ActionProps>;
} = ({ onSubmit, children }) => {
  return (
    <form
      onSubmit={onSubmit}
      className="flex gap-2 w-full justify-center items-center"
    >
      {children}
    </form>
  );
};

type TextInputProps = {
  placeholder: string;
  ref?: any;
  name: string;
  default?: string;
};

// type InputFieldProps = {
//   label: string;
//   name: string;
//   placeholder: string;
//   type: string;
//   register: any;
//   errors: any;
// };
const TextInput: FC<TextInputProps> = (props) => {
  //   const { register, formState, setValue } = useFormContext<InputFieldProps>();

  //   if (props.default) {
  //     setValue(props.name, props.default);
  //   }
  return (
    <input
      {...props}
      //   {...register(props.name)}
      type="text"
      placeholder={props.placeholder}
      className="input input-bordered w-full max-w-md"
    />
  );
};

/**
 * FIX: Type '{ children: string; onClick: () => void; }' is not assignable to type 'IntrinsicAttributes & ActionProps'.
  Property 'onClick' does not exist on type 'IntrinsicAttributes & ActionProps'.ts(2322)
 */
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
