import { TaxpayerRegistrationProvider } from "../context/useTaxpayerRegistration";

import RegistrationStatusHeader from "./RegistrationStatusHeader";
import NewTaxpayerForm from "./NewTaxpayerForm";
import TaxpayerList from "./TaxpayerList";

function TaxpayerRegistration() {
  return (
    <TaxpayerRegistrationProvider>
      <section>
        <RegistrationStatusHeader />
        <main className="flex flex-col mx-auto max-w-screen-lg w-full px-8 sm:px-24 md:px-32">
          <TaxpayerList />
          <NewTaxpayerForm />
        </main>
      </section>
    </TaxpayerRegistrationProvider>
  );
}
export default TaxpayerRegistration;
