import { useState } from "react";
import { useForm } from "react-hook-form";

export function SearchForm() {
  const { register, handleSubmit } = useForm();
  const [records, setRecord] = useState([{ CASEID: "",
                                          PATIENT: "",
                                          OWNER: "",
                                          PRICEBEFOREDISCOUNT: "",
                                          PRICEAFTERDISCOUNT: "",
                                          CURRENCY: "",
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
      {records[0].CASEID != "" && (
        records.map((record) => (
        <div className="record-info">
          <div id="case-id">Case ID: {record.CASEID}</div>
          <div id="patient-name">Patient: {record.PATIENT}</div>
          <div id="species">Species: {record.SPECIES}</div>
          <div id="owner">Owner: {record.OWNER}</div>
          <div id="price-before-discount">Price before discount: {record.PRICEAFTERDISCOUNT} {record.CURRENCY}</div>
          <div id="price-after-discount">Price after discount: {record.PRICEAFTERDISCOUNT} {record.CURRENCY}</div>
        </div>
        ))
      )}
    </div>
  );
}
