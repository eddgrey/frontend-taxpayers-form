import { useState } from "react";
import { Loader2 } from "lucide-react";

import { useTaxpayerRegistration } from "../context/useTaxpayerRegistration";
import Input from "./Input";

const defaultFormValues = {
  name: "",
  email: "",
  phone: "",
  rfc: "",
  address: "",
};

function TaxpayerForm({ isReadOnly, initialValues }) {
  const [isLoading, setIsLoading] = useState(false);
  const [formValues, setFormValues] = useState(
    initialValues || defaultFormValues
  );
  const { addNewTaxpayer, setRegistrationStatus, closeRegistrationForm } =
    useTaxpayerRegistration();

  const onChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setFormValues({ ...formValues, [id]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(
        " https://ynhumjrgo3.execute-api.us-east-1.amazonaws.com/v1/taxpayers",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formValues,
            phone_number: formValues.phone,
          }),
        }
      );

      if (response.ok) {
        const newTaxpayer = await response.json();
        addNewTaxpayer(newTaxpayer);
        setRegistrationStatus({
          type: "success",
          message: "Successfully added.",
        });
      } else {
        setRegistrationStatus({
          type: "error",
          message: "Error adding taxpayer.",
        });
      }
    } catch (error) {
      console.log({ error });
      setRegistrationStatus({
        type: "error",
        message: "Error adding taxpayer.",
      });
    }

    closeRegistrationForm();
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-y-6 p-6 bg-gray-50 w-full rounded-b-md"
    >
      <div className="flex gap-x-4 w-full">
        <Input
          id="name"
          label="Name"
          type="text"
          placeholder="Jhon Doe"
          value={formValues.name}
          onChange={onChange}
          disabled={isReadOnly || isLoading}
        />
        <Input
          id="email"
          label="Email"
          type="email"
          placeholder="jhon@doe.com"
          value={formValues.email}
          onChange={onChange}
          disabled={isReadOnly || isLoading}
        />
      </div>

      <div className="flex gap-x-4 w-full">
        <Input
          id="phone"
          label="Phone number"
          type="tel"
          placeholder="1234567890"
          value={formValues.phone}
          onChange={onChange}
          disabled={isReadOnly || isLoading}
          minLength={10}
          maxLength={10}
          pattern="[0-9]*"
        />
        <Input
          id="rfc"
          label="RFC"
          type="text"
          placeholder="XAXX010101000"
          value={formValues.rfc}
          onChange={onChange}
          disabled={isReadOnly || isLoading}
          minLength={12}
          maxLength={13}
        />
      </div>

      <Input
        id="address"
        label="Address"
        type="text"
        placeholder="Address"
        value={formValues.address}
        onChange={onChange}
        disabled={isReadOnly || isLoading}
      />

      {!isReadOnly && (
        <button
          className="flex items-center self-end bg-amber-500 text-white disabled:opacity-70 px-10 py-2 w-max rounded-lg"
          disabled={isLoading}
          type="submit"
        >
          {isLoading ? (
            <>
              <Loader2 className="h-6 w-6 animate-spin mr-2" />
              Loading
            </>
          ) : (
            <>Add taxpayer</>
          )}
        </button>
      )}
    </form>
  );
}

export default TaxpayerForm;
