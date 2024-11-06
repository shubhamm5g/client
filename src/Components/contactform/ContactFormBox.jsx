import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
function ContactFormBox() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    options: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (value) {
      setErrors((prev) => ({ ...prev, [name]: false }));
    } else {
      setErrors((prev) => ({ ...prev, [name]: true }));
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    Object.keys(formData).forEach((key) => {
      if (formData[key] == "") setErrors((prev) => ({ ...prev, [key]: true }));
    });
    const isFormDataValid = Object.keys(errors).every(
      (key) => errors[key] != true
    );

    if (isFormDataValid) {
      try {
        console.log(formData);
        const response = await fetch(
          `http://localhost:4000/api/common/contactForm`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          }
        );
        console.log(response);
        const responseData = await response.json();
        if (response.ok) {
          toast.success("Form submission successful");
          console.log("Form submission successful");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            options: "",
            message: "",
          });
        }
        if (response.status == 400) {
          toast.error(responseData.msg);
          console.log(responseData.msg);
          console.log(response);
          console.log("Form submission failed");
        }
      } catch (error) {
        toast.error("Something went wrong");
        console.error(error);
        return;
      }
    }
  };

  return (
    <div className="min-h-[616px] lg:ms-[250px] transition-all p-2">
      <h2 className="text-2xl font-semibold ">Contect Form</h2>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="form shadow-md shadow-secondaryHover/20 p-2 rounded-lg  mt-3"
      >
        <div className="sm:grid  sm:grid-cols-2  gap-5">
          <div className="">
            <label htmlFor="firstName" className="text-sm">
              First Name
            </label>
            <div>
              <input
                onChange={handleInputChange}
                value={formData.firstName}
                type="text"
                id="firstName"
                name="firstName"
                className="border text-secondary w-full rounded-[4px] p-2 mt-2 mb-1  outline-none"
                placeholder="Enter your first name "
              />
            </div>
            {errors.firstName ? (
              <div className="!text-[red] text-xs ">First Name is required</div>
            ) : (
              ""
            )}
          </div>
          <div className="">
            <label htmlFor="lastName" className="text-sm">
              Last Name
            </label>
            <div>
              <input
                onChange={handleInputChange}
                value={formData.lastName}
                type="text"
                id="lastName"
                name="lastName"
                className="border text-secondary w-full rounded-[4px] p-2 mt-2 mb-1  outline-none"
                placeholder="Enter your last name "
              />
            </div>
            {errors.lastName ? (
              <div className="!text-[red] text-xs ">Last Name is required</div>
            ) : (
              ""
            )}
          </div>
          <div className="">
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <div>
              <input
                onChange={handleInputChange}
                value={formData.email}
                type="email"
                id="email"
                name="email"
                className="border text-secondary w-full rounded-[4px] p-2 mt-2 mb-1  outline-none"
                placeholder="Enter your email "
              />
            </div>
            {errors.email ? (
              <div className="!text-[red] text-xs ">Email is required</div>
            ) : (
              ""
            )}
          </div>
          <div className="">
            <label htmlFor="phone" className="text-sm">
              Phone
            </label>
            <div>
              <input
                onChange={handleInputChange}
                value={formData.phone}
                type="number"
                id="phone"
                name="phone"
                className="border text-secondary w-full rounded-[4px] p-2 mt-2 mb-1  outline-none"
                placeholder="Enter your phone "
              />
            </div>
            {errors.phone ? (
              <div className="!text-[red] text-xs ">Phone is required</div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="mt-2">
          <label className="text-sm">Select Option</label>
          <div className="flex gap-5 flex-wrap my-2 ">
            <div>
              <input
                type="radio"
                id="graphics-design"
                name="options"
                value={"graphics-design"}
                onChange={handleInputChange}
                className="me-2"
              />
              <label htmlFor="graphics-design">Graphics Design</label>
            </div>
            <div>
              <input
                type="radio"
                id="web-development"
                value={"web-development"}
                onChange={handleInputChange}
                name="options"
                className="me-2"
              />
              <label htmlFor="web-development">Web Development</label>
            </div>
            <div>
              <input
                type="radio"
                id="logo-design"
                value={"logo-design"}
                onChange={handleInputChange}
                name="options"
                className="me-2"
              />
              <label htmlFor="logo-design">Logo Design</label>
            </div>
            <div>
              <input
                type="radio"
                id="others"
                value={"others"}
                onChange={handleInputChange}
                name="options"
                className="me-2"
              />
              <label htmlFor="others">Others</label>
            </div>
          </div>
          {errors.options ? (
            <div className="!text-[red] text-xs ">Options is required</div>
          ) : (
            ""
          )}
        </div>
        <div className="mt-2">
          <label htmlFor="message" className="text-sm">
            Message
          </label>
          <div>
            <textarea
              type=""
              onChange={handleInputChange}
              value={formData.message}
              id="message"
              name="message"
              className="border text-secondary w-full rounded-[4px] p-2 mt-2 mb-1  outline-none"
              placeholder="Enter Message "
            ></textarea>
          </div>
          {errors.message ? (
            <div className="!text-[red] text-xs ">Message is required</div>
          ) : (
            ""
          )}
        </div>
        <div className="mt-10 flex gap-4">
          <button
            type="submit"
            className="border px-2 py-1 rounded-[5px] hover:bg-secondaryHover bg-secondary text-white "
          >
            Submit
          </button>
          <button
            type="reset"
            onClick={() =>
              setErrors({
                firstName: true,
                lastName: true,
                email: true,
                phone: true,
                options: true,
                message: true,
              })
            }
            className="border px-2 py-1 rounded-[5px] hover:bg-[#6d1b1b] bg-[#ad1a1a] text-white "
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactFormBox;
