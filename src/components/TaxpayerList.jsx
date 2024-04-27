import { useTaxpayerRegistration } from "../context/useTaxpayerRegistration";
import Accordion from "./Accordion";

function TaxpayerList() {
  const { taxpayers } = useTaxpayerRegistration();

  return (
    <section className="flex flex-col items-center w-full">
      <ul className="flex flex-col gap-y-4 w-full">
        {taxpayers.map((taxpayer, index) => (
          <li key={index + taxpayer.id}>
            <Accordion index={index} taxpayer={taxpayer} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TaxpayerList;
