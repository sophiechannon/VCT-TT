import { useState } from "react";
import { useForm } from "react-hook-form";

export function SearchForm() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  return (
    <div class = "case-id-form">
      <p>Welcome to VetCT's client interface. Please enter your case ID for full details on your case</p>
      <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
        <input {...register("caseId")} placeholder="Case ID" />
        <input type="submit" />
      </form>
    </div>
  );
}