import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

export function SearchForm() {
  const { register, handleSubmit } = useForm();
  const [record, setRecord] = useState([{ CASEID: "",
                                          PATIENT: "",
                                          OWNER: "",
                                          HOSPITAL: "",
                                          SPECIES: ""}]);

  const handleFormSubmit = (data) => {
    console.log(data.caseId);
    fetch(`/invoices/${data.date}&${data.hospital}`, {})
      .then((response) => response.json())
      .then((responseJson) => {
        setRecord(responseJson);
        console.log(responseJson);
      });
  };

  return (
    <div className="case-id-form">
      <p>
        Welcome to VetCT's client interface. Please enter your hospital name and the billing period to get your invoice"
      </p>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <input {...register("hospital")} placeholder="Hospital Name" />
        <select {...register("date")}>
        <option value="2022-03">March 2022</option>
        <option value="2022-04">April 2022</option>
        <option value="2022-05">May 2022</option>
      </select>
        <input type="submit" />
      </form>
      {record[0].CASEID != "" && (
        <div className="record-info">
          <div id="patient-name">Case ID: {record[0].CASEID}</div>
          <div id="patient-name">Patient: {record[0].PATIENT}</div>
          <div id="patient-name">Species: {record[0].SPECIES}</div>
          <div id="patient-name">Owner: {record[0].OWNER}</div>
          <div id="patient-name">Hospital: {record[0].HOSPITAL}</div>
        </div>
      )}
    </div>
  );
}
