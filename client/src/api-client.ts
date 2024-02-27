import { Inputs } from "./pages/register";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

export const register = async (formData: Inputs) => {
  const res = await fetch(`${API_BASE_URL}/api/users/register`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const resBody = await res.json();

  if (!res.ok) {
    throw new Error(resBody.message);
  }
};
