"use client";

// function ContactForm() {
//   const handleSubmit = async (e: any) => {
//     e.preventDefault();
//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: JSON.stringify({
//         access_key: "f3e690b6-b619-4b25-92ac-dc74108caba0",
//         name: e.target.name.value,
//         email: e.target.email.value,
//         message: e.target.message.value,
//       }),
//     });
//     const result = await response.json();
//     if (result.success) {
//       console.log(result);
//     }
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">Name</label>
//           <input type="text" name="name" required placeholder="Your name" />
//         </div>
//         <div>
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             name="email"
//             required
//             placeholder="email@example.com"
//           />
//         </div>
//         <div>
//           <label htmlFor="message">Message</label>
//           <textarea
//             name="message"
//             required
//             rows={3}
//             placeholder="Enter Message"
//           ></textarea>
//         </div>
//         <button type="submit">Submit Form</button>
//       </form>
//     </>
//   );
// }
// export default ContactForm;

import React, { BaseSyntheticEvent, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import ComeUpText from "../animated/ComeUpText";
import WordAnim from "../animated/WordAnim";
import { useInView } from "react-intersection-observer";
import AnimLeft from "../animated/AnimLeft";
import AnimUp from "../animated/AnimUp";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    control,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [Message, setMessage] = useState("");
  const [ref, inView] = useInView({ triggerOnce: true });

  const onSubmit = async (
    data: any,
    e: BaseSyntheticEvent<object, any, any> | undefined
  ) => {
    console.log(data);
    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data, null, 2),
    })
      .then(async (response) => {
        let json = await response.json();
        console.log(json);
        if (json.success) {
          setIsSuccess(true);
          setMessage(json.message);
          e?.target.reset();
          reset();
        } else {
          setIsSuccess(false);
          setMessage(json.message);
        }
      })
      .catch((error) => {
        setIsSuccess(false);
        setMessage("Client Error. Please check the console.log for more info");
        console.log(error);
      });
  };

  return (
    <>
      <div className="w-full pb-10 pt-10 font-Antonio md:w-3/4 md:pb-52 md:pt-0">
        {!isSubmitSuccessful && (
          <form ref={ref} onSubmit={handleSubmit(onSubmit)}>
            <input
              type="hidden"
              value="f3e690b6-b619-4b25-92ac-dc74108caba0"
              {...register("access_key")}
            />
            <input type="hidden" {...register("subject")} />
            <input
              type="hidden"
              value="Message Portfolio"
              {...register("from_name")}
            />
            <input
              type="checkbox"
              id=""
              className="hidden"
              style={{ display: "none" }}
              {...register("botcheck")}
            ></input>

            <AnimLeft
              duration={3}
              inView={inView}
              className=" flex items-start  border-b border-t border-white py-5"
            >
              <h2 className="bold mr-10 text-2xl opacity-50">01</h2>

              <div>
                <label className="text-xl">{`WHAT'S YOUR NAME`}</label>
                <input
                  type="text"
                  placeholder="Full Name"
                  autoComplete="false"
                  className={`mt-3 w-full bg-transparent px-4 py-3 focus:outline-none`}
                  {...register("name", {
                    required: "Full name is required",
                    maxLength: 80,
                  })}
                />
                {errors.name && (
                  <div className="mt-1 text-red-600">
                    <small>{errors.name.message as string}</small>
                  </div>
                )}
              </div>
            </AnimLeft>

            <AnimLeft
              inView={inView}
              duration={3.5}
              className=" mb-5 flex items-start  border-b  border-white py-5"
            >
              <h2 className="bold mr-10 text-2xl opacity-50">02</h2>

              <div>
                <label className="text-xl">{`WHAT'S YOUR EMAIL`}</label>
                <input
                  id="email_address"
                  type="email"
                  placeholder="Email Address"
                  autoComplete="false"
                  className={`mt-3 w-full bg-transparent  px-4 py-3 focus:outline-none`}
                  {...register("email", {
                    required: "Enter your email",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Please enter a valid email",
                    },
                  })}
                />
                {errors.name && (
                  <div className="mt-1 text-red-600">
                    <small>{errors.name.message as string}</small>
                  </div>
                )}
              </div>
            </AnimLeft>

            <AnimLeft
              duration={4}
              inView={inView}
              className="mb-5 flex w-full items-start  border-b  border-white py-5"
            >
              <h2 className="bold mr-10 text-2xl opacity-50">03</h2>

              <div className="w-full">
                <label className="text-xl">{`WHAT'S YOUR MESSAGE`}</label>
                <textarea
                  placeholder="Your Message"
                  rows={7}
                  className={`mt-3 w-full bg-transparent px-4   py-3 outline-none  focus:outline-none `}
                  {...register("message", { required: "Enter your Message" })}
                />
                {errors.name && (
                  <div className="mt-1 text-red-600">
                    <small>{errors.name.message as string}</small>
                  </div>
                )}
              </div>
            </AnimLeft>

            <button type="submit" className="my-10 ">
              {isSubmitting ? (
                <svg
                  className="mx-auto h-5 w-5 animate-spin text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                <div
                  className={`group flex h-8 flex-col overflow-hidden border-b text-2xl  font-bold`}
                >
                  <p className="transform transition duration-500 group-hover:-translate-y-8 ">
                    SEND REQUEST
                  </p>
                  <p className="mt-2 -translate-y-1 transform transition duration-500 group-hover:-translate-y-10 ">
                    SEND REQUEST
                  </p>
                </div>
              )}
            </button>
          </form>
        )}
        {isSubmitSuccessful && isSuccess && (
          <>
            <div>
              <h3 className="text-xl">THANKS FOR YOUR MESSAGE</h3>
              <p className="mt-2 text-white opacity-50">{Message}</p>
              <button
                className="mt-6 border-b text-white focus:outline-none"
                onClick={() => reset()}
              >
                <div
                  className={`group flex h-8 flex-col overflow-hidden text-2xl  font-bold`}
                >
                  <p className="transform transition duration-500 group-hover:-translate-y-8 ">
                    GO BACK
                  </p>
                  <p className="mt-2 -translate-y-1 transform transition duration-500 group-hover:-translate-y-10 ">
                    GO BACK
                  </p>
                </div>
              </button>
            </div>
          </>
        )}

        {isSubmitSuccessful && !isSuccess && (
          <div className="flex flex-col items-center justify-center rounded-md text-center text-white">
            <svg
              width="97"
              height="97"
              viewBox="0 0 97 97"
              className="text-red-400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.9995 69C43.6205 53.379 52.3786 44.621 67.9995 29M26.8077 29L67.9995 69M48.2189 95C42.0906 95 36.0222 93.7929 30.3604 91.4477C24.6985 89.1025 19.554 85.6651 15.2206 81.3316C10.8872 76.9982 7.44975 71.8538 5.10454 66.1919C2.75932 60.53 1.55225 54.4617 1.55225 48.3333C1.55225 42.205 2.75932 36.1366 5.10454 30.4748C7.44975 24.8129 10.8872 19.6684 15.2206 15.335C19.554 11.0016 24.6985 7.56418 30.3604 5.21896C36.0222 2.87374 42.0906 1.66667 48.2189 1.66667C60.5957 1.66667 72.4655 6.58333 81.2172 15.335C89.9689 24.0867 94.8856 35.9566 94.8856 48.3333C94.8856 60.7101 89.9689 72.58 81.2172 81.3316C72.4655 90.0833 60.5957 95 48.2189 95Z"
                stroke="CurrentColor"
                strokeWidth="3"
              />
            </svg>

            <h3 className="py-7 text-2xl text-red-400">
              Oops, Something went wrong!
            </h3>
            <p className="text-gray-300 md:px-3">{Message}</p>
            <button className="mt-5 focus:outline-none" onClick={() => reset()}>
              Try Again
            </button>
          </div>
        )}
      </div>
    </>
  );
}
