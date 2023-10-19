"use client";
import { Controller, useForm } from "react-hook-form";
import ValidationErrorMsg from "../components/ValidationErrorMsg";
import { validationRules } from "@/helpers/validationRules ";
import InputMask from "react-input-mask";
import { useState } from "react";
import MaskedInput from "../components/MaskedInput";

export default function Career() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
    reset,
  } = useForm();

  const [consent, setConsent] = useState(false);

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
          onSubmit={handleSubmit((data) => {
            if (agree) {
              console.log(data);
              setConsent(false);
              reset();
            } else setConsent(true);
          })}
          className="flex flex-col"
        >
          <fieldset className="flex flex-col">
            <legend className="hidden">Personal information</legend>
            <label
              htmlFor="fullName"
              className={`label ${errors.nameCareer ? "text-red-500" : ""}`}
            >
              Full name
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="John Smith"
              name="nameCareer"
              aria-invalid={errors.nameCareer ? "true" : "false"}
              {...register("nameCareer", validationRules.name)}
              className={`input ${errors.nameCareer ? "text-red-500" : ""}`}
            />
            {errors.nameCareer && (
              <ValidationErrorMsg errorMsg={errors.nameCareer.message} />
            )}

            <label
              htmlFor="email"
              className={`label ${errors.emailCareer ? "text-red-500" : ""}`}
            >
              E-mail
            </label>
            <input
              id="email"
              name="emailCareer"
              placeholder="johnsmith@email.com"
              type="email"
              aria-invalid={errors.emailCareer ? "true" : "false"}
              {...register("emailCareer", validationRules.email)}
              className={`input ${errors.emailCareer ? "text-red-500" : ""}`}
            />
            {errors.emailCareer && (
              <ValidationErrorMsg errorMsg={errors.emailCareer.message} />
            )}

            <label
              htmlFor="position"
              className={`label ${errors.positionCareer ? "text-red-500" : ""}`}
            >
              Position
            </label>
            <input
              id="position"
              name="positionCareer"
              type="text"
              placeholder="Movie maker"
              aria-invalid={errors.positionCareer ? "true" : "false"}
              {...register("positionCareer", validationRules.position)}
              className={`input ${errors.positionCareer ? "text-red-500" : ""}`}
            />
            {errors.positionCareer && (
              <ValidationErrorMsg errorMsg={errors.positionCareer.message} />
            )}

            <label
              htmlFor="phone"
              className={`label ${errors.phoneCareer ? "text-red-500" : ""}`}
            >
              Phone
            </label>
            <MaskedInput
              control={control}
              name="phoneCareer"
              aria-invalid={errors.phoneCareer ? "true" : "false"}
              className={`input ${errors.phoneCareer ? "text-red-500" : ""}`}
            />

            {errors.phoneCareer && (
              <ValidationErrorMsg errorMsg={errors.phoneCareer.message} />
            )}
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
          <label
            className={`${
              !agree && consent ? "text-red-500" : ""
            } flex content-baseline gap-[8px] tracking-normal font-extralight text-[12px] text-justify checkbox-label leading-[1.83] `}
          >
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

          <input
            type="submit"
            value={"Send"}
            className="submit-button cursor-pointer"
          />
        </form>
      </div>
    </section>
  );
}
