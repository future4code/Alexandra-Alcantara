import { useState } from "react";

export const useForm = (initialForm) => {
  const [form, setForm] = useState(initialForm);

  const onChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setForm({ ...form, [name]: value });
  };

  const resetForm = () => {
    setForm(initialForm);
  };

  return [form, onChange, resetForm];
};
