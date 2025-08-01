import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
function Form() {
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleRecaptcha = (value) => {
    setRecaptchaToken(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      subject,
      message,
      recaptchaToken,
    };
    try {
      const response = await fetch("/api/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      // Handle result (show success/error message)
      console.log(result);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="md:w-[50%]">
        <h2 className="mb-[40px] mt-[20px] text-3xl font-bold">
          <span className="border-b border-b-[#1fa12e] pb-[3px] border-b-[3px]">
            Sen
          </span>
          d Us Message
        </h2>
        <form
          onSubmit={handleSubmit}
          action=""
          method="post"
          className="space-y-4"
        >
          <div className="md:flex md:gap-5">
            <input
              type="text"
              name="Name"
              placeholder="Name*"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-[#d6d6d6] block w-full p-3 rounded-[5px] mb-[20px] outline-none"
            />
            <input
              type="email"
              name="Email"
              placeholder="Email*"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-[#d6d6d6] block w-full p-3 rounded-[5px] mb-[20px] outline-none"
            />
          </div>
          <div className="md:flex md:gap-5">
            <input
              type="text"
              name="Subject"
              placeholder="Subject*"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="border border-[#d6d6d6] block w-full p-3 rounded-[5px] mb-[20px] outline-none"
            />
            <input
              type="tel"
              name="Phone"
              placeholder="Phone*"
              required
              className="border border-[#d6d6d6] block w-full p-3 rounded-[5px] mb-[20px] outline-none"
            />
          </div>
          <div>
            <textarea
              placeholder="Message"
              className="border border-[#d6d6d6] block w-full p-1  rounded-[5px] mb-[20px] outline-none"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          {/* reCAPTCHA just above the Send Message button */}
          <div>
            <ReCAPTCHA
              sitekey="6LeX1ZQrAAAAAKH8l6nP2OSN-GdEynMcPt38RMSQ"
              onChange={handleRecaptcha}
            />
          </div>
          <div
            id="form"
            className="bg-[#1fa12e] w-[200px] rounded-[30px] px-4 py-3 flex gap-[10px]"
          >
            <i className="fas fa-arrow-right text-2xl text-white" id="span"></i>
            <button
              type="submit"
              className="cursor-pointer text-white"
              id="button"
            >
              SEND MESSAGE
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default Form;