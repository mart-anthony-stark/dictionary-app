import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Form from "./Form";

type FormFields = {
  name: string;
  cardNumber: string;
  cvv: string;
  expirationYear: string;
};

const WinnerDialog = () => {
  const methods = useForm<FormFields>();
  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  useEffect(() => {
    // keydown event listener for window to prevent escape key from closing modal
    const handleKeyDown = (e: any) => {
      if (e.key === "Escape") {
        e.preventDefault();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const onSubmit = (data: FormFields) => {
    // Rickroll
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  };

  return (
    <dialog id="winner_modal" className="modal">
      <FormProvider {...methods}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="modal-box">
            <Form.Header
              title="Congratulations!"
              subheading="You have won iPhone 14 Pro Max. Please enter your credit card details to
        claim your prize."
            />
            {/*  credit card fields */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name on Card</span>
              </label>
              <Form.TextInput
                className="max-w-[unset]"
                name="name"
                placeholder="John Doe"
                validator={{ required: true, maxLength: 50 }}
              />
              <Form.FieldError name="name" />
              {/*  credit card cvv and number and year */}
              <div className="flex justify-between gap-2">
                <div className="w-full">
                  <label className="label">
                    <span className="label-text">Credit Card Number</span>
                  </label>
                  <Form.TextInput
                    name="cardNumber"
                    placeholder="1234 1234 1234 1234"
                    validator={{
                      required: true,
                      maxLength: 16,
                      minLength: 16,
                    }}
                  />
                  <Form.FieldError
                    name="cardNumber"
                    errorMessage="Card number must be 16 digits"
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text">CVV</span>
                  </label>
                  <Form.TextInput
                    name="cvv"
                    placeholder="123"
                    validator={{ required: true, maxLength: 3, minLength: 3 }}
                  />
                  <Form.FieldError name="cvv" errorMessage="CVV is required" />
                </div>
              </div>
              <label className="label">
                <span className="label-text">Expiration Year</span>
              </label>
              {/* input date only not text. format: YYY */}
              <Form.TextInput
                name="expirationYear"
                placeholder="2021"
                validator={{ required: true, maxLength: 4, minLength: 4 }}
              />
              <Form.FieldError name="expirationYear" />

              {/* Add submit */}
              <div className="modal-action">
                <button className="btn text-primary bg-secondary">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </Form>
      </FormProvider>
    </dialog>
  );
};

export default WinnerDialog;
