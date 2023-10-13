"use client";
import { Controller, useForm } from "react-hook-form";
import InputMask from "react-input-mask";

export default function Career() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = useForm();

  const agree = watch("agree");

  return (
    <section id="career" className="career">
      <div className="container sm:py-[55px]">
        <h2 className="visually-hidden">Career</h2>
        <div className="sm:w-[180px] font-extralight leading-[1.428] tracking-normal text-left ml-[100px] mb-[24px]">
          <p>Don&apos;t miss your opportunity!</p>
          <p>Fill out the form right now and join our team!</p>
        </div>

        <form
          onSubmit={handleSubmit((data) => console.log(data))}
          className="flex flex-col"
        >
          <fieldset className="flex flex-col">
            <legend className="hidden">Personal information</legend>
            <label htmlFor="fullName" className="label">
              Full name
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="John Smith"
              name="name"
              {...register("name", { required: true })}
              className="input"
            />
            {errors.name && <p>Name is required.</p>}

            <label htmlFor="email" className="label">
              E-mail
            </label>
            <input
              id="email"
              name="email"
              placeholder="johnsmith@email.com"
              type="email"
              {...register("email", {
                required: "Email is required.",
                pattern: {
                  value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                  message: "Invalid email format.",
                },
              })}
              className="input"
            />
            {errors.email && <p>{errors.email.message}</p>}

            <label htmlFor="position" className="label">
              Position
            </label>
            <input
              id="position"
              name="position"
              type="text"
              placeholder="Movie maker"
              {...register("position", { required: true })}
              className="input"
            />
            {errors.position && <p>Position is required.</p>}

            <label htmlFor="phone" className="label">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="+ 38 (097) 12 34 567"
              {...register("phone", {
                required: "Phone is required.",
                pattern: {
                  value: /^\+38 \(\d{3}\) \d{2} \d{2} \d{3}$/,
                  message: "Invalid phone format. Example: +38 (097) 12 34 567",
                },
              })}
              className="input"
            />
            {errors.phone && <p>{errors.phone.message}</p>}
          </fieldset>

          <fieldset className="flex flex-col">
            <legend className="hidden">User message</legend>
            <label htmlFor="message" className="label">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              {...register("message")}
              className="input mb-[18px]"
            ></textarea>
          </fieldset>
          <label className=" flex content-baseline gap-[8px] tracking-normal font-extralight text-[12px] text-justify checkbox-label leading-[1.83]  ">
            <Controller
              name="agree"
              control={control}
              render={({ field }) => (
                <>
                  <input className="checkbox" type="checkbox" {...field} />
                  <div
                    role="checkbox"
                    className="checkbox-container w-[24px] h-[24px] shrink-0"
                    aria-checked={agree}
                  ></div>
                </>
              )}
            />
            I confirm my consent to the processing of personal data.
          </label>

          <input type="submit" value={"Send"} className="submit-button" />
        </form>
      </div>
    </section>
  );
}
