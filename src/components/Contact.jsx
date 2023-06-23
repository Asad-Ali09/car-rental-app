import React, { useState } from "react";
import "../styles/contact.scss";
import { BsPersonCircle } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FiSmartphone } from "react-icons/fi";
import contactImage from "../assests/contact.jpg";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  // const notify = () => toast("Here is your toast.");

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    text: "",
  });

  function handleSubmit(event) {
    event.preventDefault(); // prevent the form from submitting normally

    if (
      formData.fname &&
      formData.lname &&
      formData.email &&
      formData.phone &&
      formData.text
    ) {
      toast.success("Submitted Successfully");
      setFormData({ fname: "", lname: "", email: "", phone: "", text: "" });
    } else {
      console.log("true");
    }
  }
  function CHECK() {
    if (
      !formData.fname ||
      !formData.lname ||
      !formData.email ||
      !formData.phone ||
      !formData.text
    ) {
      toast.error("Please Fill All Fields");
    }
  }

  return (
    <>
      <div className="contact-form">
        {/* Section */}
        <img src={contactImage} alt="Car" />
        {/* Form */}
        <article>
          <h1>Get in touch</h1>
          <p>24/7 We Will Answer your question and problems</p>

          <form onSubmit={handleSubmit}>
            <InputField
              For={"Fist Name"}
              SVG={<BsPersonCircle />}
              value={formData.fname}
              Setter={(e) =>
                setFormData({ ...formData, fname: e.target.value })
              }
            />
            <InputField
              For={"Last Name"}
              SVG={<BsPersonCircle />}
              value={formData.lname}
              Setter={(e) =>
                setFormData({ ...formData, lname: e.target.value })
              }
            />
            <InputField
              For={"email"}
              SVG={<AiOutlineMail />}
              value={formData.email}
              Setter={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <InputField
              For={"phone"}
              SVG={<FiSmartphone />}
              value={formData.phone}
              Setter={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
            <div htmlFor="input">
              <textarea
                type="text"
                className="textbox"
                placeholder="Describe your issue"
                required
                value={formData.text}
                onChange={(e) =>
                  setFormData({ ...formData, text: e.target.value })
                }
              ></textarea>
            </div>
            <button type="submit" onClick={CHECK}>
              Send
            </button>
          </form>
        </article>
        <Toaster />
      </div>
    </>
  );
};

const InputField = ({ For, SVG, value, Setter }) => {
  return (
    <>
      <label htmlFor={For}>
        {SVG}
        <input
          required
          type={For}
          placeholder=""
          onChange={(e) => {
            e.target.value.length !== 0
              ? e.target.parentElement.classList.add("active")
              : e.target.parentElement.classList.remove("active");
            Setter(e);
          }}
          value={value}
        />
      </label>
    </>
  );
};

export default Contact;
