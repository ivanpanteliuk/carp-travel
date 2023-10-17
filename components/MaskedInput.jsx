import { validationRules } from "@/helpers/validationRules ";
import { useController } from "react-hook-form";
import ReactInputMask from "react-input-mask";

export default function MaskedInput({ control, name, ...props }) {
  const { field } = useController({
    name,
    control,
    rules: validationRules.phone,
    defaultValue: "",
  });

  return (
    <ReactInputMask
      {...props}
      alwaysShowMask={false}
      mask="+38 (099) 99 99 999"
      maskChar=" "
      type="tel"
      id="phone"
      placeholder="+ 38 (097) 12 34 567"
      inputMode="numeric"
      onChange={field.onChange}
      onBlur={field.onBlur}
      value={field.value}
      name={field.name}
    >
      {(inputProps) => <input ref={field.ref} {...inputProps} />}
    </ReactInputMask>
  );
}
