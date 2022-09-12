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
    fetch(`/records/${data.caseId}`, {})
      .then((response) => response.json())
      .then((responseJson) => {
        setRecord(responseJson);
        console.log(responseJson);
      });
  };

  return (
    <div className="case-id-form">
      <p>
        Welcome to VetCT's client interface. Please enter your case ID for full
        details on your case
      </p>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <input {...register("caseId")} placeholder="Case ID" />
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
