"use client";
import { useForm } from "react-hook-form";
import warningClose from "@/public/assets/icons/warning-close.svg";

export default function Contacts() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
    reset,
  } = useForm();

  const agree = watch("agree");

  return (
    <section id="contacts" className="contacts">
      <div className="container sm:py-[55px]">
        <h2 className="text-[40px] font-thin leading-[1.4] uppercase tracking-[-1.6px] mb-[36px] ">
          Contact <b>us</b>
        </h2>

        <div className="flex justify-end gap-[20px] tracking-normal mb-[24px]">
          <p className="text-[14px] font-normal leading-[1.714]">
            +38 (098) 12 34 567 <br /> +38 (073) 12 34 567
          </p>
          <p className="text-[12px] font-extralight leading-[1.667]">
            Phone number
          </p>
        </div>

        <div className="flex gap-[20px] tracking-normal mb-[24px] items-baseline">
          <p className="text-[14px] font-normal leading-[1.714] ml-[16px]">
            support@carptravel.com
          </p>
          <p className="text-[12px] font-extralight leading-[1.667]">E-mail</p>
        </div>

        <div className="flex justify-end gap-[20px] tracking-normal mb-[12px]">
          <p className="text-[12px] font-extralight leading-[1.667]">
            Follow us
          </p>
          <p className="text-[14px] font-normal leading-[1.714]">
            facebook <br />
            instagram <br />
            youtube <br />
            tiktok
          </p>
        </div>

        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
            reset();
          })}
          className="flex flex-col"
        >
          <fieldset className="flex flex-col">
            <legend className="hidden">Personal information</legend>
            <label
              htmlFor="fullNameContacts"
              className={`label ${errors.NameContacts ? "text-red-500" : ""}`}
            >
              Full name
            </label>
            <input
              type="text"
              id="fullNameContacts"
              placeholder="John Smith"
              name="NameContacts"
              {...register("NameContacts", {
                required: "Name is required.",
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: "Incorrect name",
                },
              })}
              className={`input ${errors.NameContacts ? "text-red-500" : ""}`}
            />
            {errors.NameContacts && (
              <div className="flex items-center justify-end">
                <svg
                  width={18}
                  height={18}
                  viewBox={warningClose.viewBox}
                  className="mr-[3px]"
                >
                  <use xlinkHref={`#${warningClose.id}`} />
                </svg>
                <p className="warning-message">{errors.NameContacts.message}</p>
              </div>
            )}

            <label
              htmlFor="emailContacts"
              className={`label ${errors.emailContacts ? "text-red-500" : ""}`}
            >
              E-mail
            </label>
            <input
              id="emailContacts"
              name="emailContacts"
              placeholder="johnsmith@email.com"
              type="email"
              {...register("emailContacts", {
                required: "Email is required.",
                pattern: {
                  value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                  message: "Invalid email format.",
                },
              })}
              className={`input ${errors.emailContacts ? "text-red-500" : ""}`}
            />
            {errors.emailContacts && (
              <div className="flex items-center justify-end">
                <svg
                  width={18}
                  height={18}
                  viewBox={warningClose.viewBox}
                  className="mr-[3px]"
                >
                  <use xlinkHref={`#${warningClose.id}`} />
                </svg>
                <p className="warning-message">
                  {errors.emailContacts.message}
                </p>
              </div>
            )}
          </fieldset>

          <fieldset className="flex flex-col">
            <legend className="hidden">User message</legend>
            <label htmlFor="messageContacts" className="label">
              Message
            </label>
            <textarea
              name="messageContacts"
              id="messageContacts"
              cols="30"
              rows="8"
              {...register("messageContacts")}
              className="input"
            ></textarea>
          </fieldset>

          <input type="submit" value={"Send"} className="submit-button" />
        </form>
      </div>
    </section>
  );
}
