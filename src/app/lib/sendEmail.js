import axios from "axios";

export const sendContactForm = async (data) => {
  return axios(`${process.env.NEXT_PUBLIC_BACKEND_API}/api/v1/sendEmail`, {
    method: "post",
    data,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
};
export const sendFiles = async (data) => {
  return axios(`${process.env.NEXT_PUBLIC_BACKEND_API}/api/v1/sendFile`, {
    method: "post",
    data,
    headers: { "Content-Type": "multipart/form-data" },
  });
};
