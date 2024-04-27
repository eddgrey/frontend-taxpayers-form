import { PlusIcon } from "lucide-react";

import { cn, getColorTone } from "../lib/utils";
import { useTaxpayerRegistration } from "../context/useTaxpayerRegistration";

import TaxpayerForm from "./TaxpayerForm";

function NewTaxpayerForm() {
  const { showRegistrationForm, openRegistrationForm, totalTaxpayers } =
    useTaxpayerRegistration();

  return (
    <div className="flex flex-col items-center w-full mt-6 gap-y-6">
      {showRegistrationForm ? (
        <div className="bg-gray-50 rounded-md w-full">
          <div className="flex items-center border-b-[1.5px] border-gray-300">
            <div
              className={cn(
                "flex items-center justify-center rounded-tl-md w-12 h-14 mr-4",
                getColorTone(totalTaxpayers)
              )}
            >
              <p className="text-lg text-white font-bold">
                {totalTaxpayers + 1}
              </p>
            </div>
            <h2 className="text-lg text-blue-700 font-bold">New taxpayer</h2>
          </div>
          <TaxpayerForm />
        </div>
      ) : null}
      <button
        className="flex items-center text-blue-700 font-semibold underline underline-offset-4"
        onClick={openRegistrationForm}
      >
        <PlusIcon className="text-blue-700 mr-1 h-4 w-4" />
        Add another taxpayer
      </button>
    </div>
  );
}

export default NewTaxpayerForm;
