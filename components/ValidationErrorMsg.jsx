import warningClose from "@/public/assets/icons/warning-close.svg";

export default function ValidationErrorMsg({ errorMsg }) {
  return (
    <div role="alert-container" className="flex items-center justify-end">
      <svg
        role="alert-icon"
        width={18}
        height={18}
        viewBox={warningClose.viewBox}
        className="mr-[3px]"
      >
        <use xlinkHref={`#${warningClose.id}`} />
      </svg>
      <p role="alert" className="warning-message">
        {errorMsg}
      </p>
    </div>
  );
}
