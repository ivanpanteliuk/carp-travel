export const validationRules = {
  name: {
    required: "Name is required.",
    pattern: {
      value: /^[A-Za-z\s]+$/,
      message: "Incorrect name",
    },
  },
  email: {
    required: "Email is required.",
    pattern: {
      value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
      message: "Invalid email format.",
    },
  },
  position: {
    required: "Position is required.",
    pattern: {
      value: /^[A-Za-z\s]+$/,
      message: "Incorrect position",
    },
  },
  phone: {
    required: "Phone is required.",
    pattern: {
      value: /^\+38 \(\d{3}\) \d{2} \d{2} \d{3}$/,
      message: "Invalid phone format.",
    },
  },
};
