import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBooking } from "../../redux/features/booking/bookingSlice";
const InputCard = () => {
  const dispatch = useDispatch();
  const bookingValue = useSelector((state) => state.booking.bookings);

  const isDisabled = bookingValue.length >= 3;

  const [formData, setFormData] = useState({
    from: "",
    to: "",
    date: "",
    guests: "",
    ticketClass: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();

    dispatch(addBooking(formData));
    console.log("handleSubmit form Date", formData);
  };
  return (
    <>
      <div class="mt-[160px] mx-4 md:mt-[160px] relative">
        <div class="bg-white rounded-md max-w-6xl w-full mx-auto">
          <form class="first-hero lws-inputform" onSubmit={handleSubmitForm}>
            <div class="des-from">
              <p>Destination From</p>
              <div class="flex flex-row">
                <img src="./img/icons/Frame.svg" alt="" />
                <select
                  value={formData.from}
                  onChange={handleChange}
                  class="outline-none px-2 py-2 w-full"
                  name="from"
                  id="lws-from"
                  required
                >
                  <option value="" hidden>
                    Please Select
                  </option>
                  <option>Dhaka</option>
                  <option>Sylhet</option>
                  <option>Saidpur</option>
                  <option>Cox's Bazar</option>
                </select>
              </div>
            </div>

            {/* To */}
            <div class="des-from">
              <p>Destination To</p>
              <div class="flex flex-row">
                <img src="./img/icons/Frame.svg" alt="" />
                <select
                  value={formData.to}
                  onChange={handleChange}
                  class="outline-none px-2 py-2 w-full"
                  name="to"
                  id="lws-to"
                  required
                >
                  <option value="" hidden>
                    Please Select
                  </option>
                  <option>Dhaka</option>
                  <option>Sylhet</option>
                  <option>Saidpur</option>
                  <option>Cox's Bazar</option>
                </select>
              </div>
            </div>

            {/* Date */}
            <div class="des-from">
              <p>Journey Date</p>
              <input
                value={formData.date}
                onChange={handleChange}
                type="date"
                class="outline-none px-2 py-2 w-full date"
                name="date"
                id="lws-date"
                required
              />
            </div>

            {/* Guest */}
            <div class="des-from">
              <p>Guests</p>
              <div class="flex flex-row">
                <img src="./img/icons/Vector (1).svg" alt="" />
                <select
                  value={formData.guests}
                  onChange={handleChange}
                  class="outline-none px-2 py-2 w-full"
                  name="guests"
                  id="lws-guests"
                  required
                >
                  <option value="" hidden>
                    Please Select
                  </option>
                  <option value="1">1 Person</option>
                  <option value="2">2 Persons</option>
                  <option value="3">3 Persons</option>
                  <option value="4">4 Persons</option>
                </select>
              </div>
            </div>

            {/* Class */}
            <div class="des-from !border-r-0">
              <p>Class</p>
              <div class="flex flex-row">
                <img src="./img/icons/Vector (3).svg" alt="" />
                <select
                  value={formData.ticketClass}
                  onChange={handleChange}
                  class="outline-none px-2 py-2 w-full"
                  name="ticketClass"
                  id="lws-ticketClass"
                  required
                >
                  <option value="" hidden>
                    Please Select
                  </option>
                  <option>Business</option>
                  <option>Economy</option>
                </select>
              </div>
            </div>

            <button class="addCity" type="submit" id="lws-addCity" disabled={isDisabled}>
              <svg
                width="15px"
                height="15px"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              <span class="text-sm"> {isDisabled ? 'Booking Limit Reached' : 'Book'}</span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default InputCard;
