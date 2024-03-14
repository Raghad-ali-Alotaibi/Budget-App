import {toast } from 'react-toastify';

export const toastError = (text: string) => {
  return toast.error(text);
};