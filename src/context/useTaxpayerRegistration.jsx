import { createContext, useContext, useEffect, useState } from "react";

const TaxpayerRegistration = createContext(undefined);

export function TaxpayerRegistrationProvider({ children }) {
  const [taxpayers, setTaxpayers] = useState([]);
  const [registrationStatus, setRegistrationStatus] = useState({
    type: "",
    message: "",
  });
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://ynhumjrgo3.execute-api.us-east-1.amazonaws.com/v1/taxpayers"
      );

      if (response.ok) {
        const data = await response.json();
        setTaxpayers(
          data.data.map((taxpayer) => ({
            ...taxpayer,
            phone: taxpayer.phone_number,
          }))
        );
      }
    };
    getData();
  }, []);

  const addNewTaxpayer = (taxpayer) => setTaxpayers([taxpayer, ...taxpayers]);

  const openRegistrationForm = () => setShowRegistrationForm(true);
  const closeRegistrationForm = () => setShowRegistrationForm(false);

  const value = {
    taxpayers,
    addNewTaxpayer,
    totalTaxpayers: taxpayers.length,
    registrationStatus,
    setRegistrationStatus,
    showRegistrationForm: showRegistrationForm || taxpayers.length === 0,
    openRegistrationForm,
    closeRegistrationForm,
  };

  return (
    <TaxpayerRegistration.Provider value={value}>
      {children}
    </TaxpayerRegistration.Provider>
  );
}

export function useTaxpayerRegistration() {
  const context = useContext(TaxpayerRegistration);

  if (context === undefined) {
    throw Error(
      "useTaxpayerRegistration must be used within a TaxpayerRegistrationProvider"
    );
  }

  return context;
}
