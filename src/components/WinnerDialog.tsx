import { useEffect } from "react";

const WinnerDialog = () => {
  useEffect(() => {
    // add keydown event listener to window to prevent escape key from closing modal
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

  return (
    <dialog id="winner_modal" className="modal">
      <form className="modal-box">
        <h3 className="font-bold text-lg">Congratulations!</h3>
        <p className="py-4">
          You have won iPhone 14 Pro Max. Please enter your credit card details
          to claim your prize.
        </p>
        {/* Add credit card fields */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name on Card</span>
          </label>
          <input
            type="text"
            placeholder="John Doe"
            className="input input-bordered"
          />
          {/* add credit card cvv and number and year */}
          <div className="flex justify-between gap-2">
            <div className="w-full">
              <label className="label">
                <span className="label-text">Credit Card Number</span>
              </label>
              <input
                type="text"
                placeholder="1234 1234 1234 1234"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">CVV</span>
              </label>
              <input
                type="text"
                placeholder="123"
                className="input input-bordered w-[100px]"
              />
            </div>
          </div>
          <label className="label">
            <span className="label-text">Expiration Year</span>
          </label>
          {/* input date only not text. format: YYY */}
          <input
            type="text"
            placeholder="2021"
            className="input input-bordered"
          />
          {/* Add submit */}
          <div className="modal-action">
            <button className="btn text-primary bg-secondary">Submit</button>
          </div>
        </div>
      </form>
    </dialog>
  );
};

export default WinnerDialog;
