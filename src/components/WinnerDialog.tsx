const WinnerDialog = () => {
  return (
    <dialog id="my_modal_1" className="modal">
      <form className="modal-box">
        <h3 className="font-bold text-lg">Congratulations!</h3>
        <p className="py-4">
          You have won Iphone 14 pro max. Please enter your credit card details
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
          <label className="label">
            <span className="label-text">Credit Card Number</span>
          </label>
          <input
            type="text"
            placeholder="1234 1234 1234 1234"
            className="input input-bordered"
          />
          <label className="label">
            <span className="label-text">CVV</span>
          </label>
          <input
            type="text"
            placeholder="123"
            className="input input-bordered"
          />
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