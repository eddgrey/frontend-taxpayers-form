import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { cn, getColorTone } from "../lib/utils";
import TaxpayerForm from "./TaxpayerForm";

function Accordion({ index, taxpayer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col w-full bg-gray-50 rounded-md border-[1.5px] border-gray-300">
      <button
        onClick={() => setIsOpen((p) => !p)}
        className={cn(
          "flex items-center h-14 w-full rounded-md border-b-[1.5px] border-none",
          isOpen && "border-solid border-gray-300 rounded-none"
        )}
      >
        <div
          className={cn(
            "flex items-center justify-center h-full rounded-l-md w-12",
            isOpen && "rounded-bl-none",
            getColorTone(index)
          )}
        >
          <p className="text-lg text-white font-bold">{index + 1}</p>
        </div>

        <div className="flex items-center justify-between w-full px-4">
          <p className="text-lg font-bold flex-1 text-start">{taxpayer.name}</p>
          <ChevronDown />
        </div>
      </button>

      {isOpen && <TaxpayerForm initialValues={taxpayer} isReadOnly={true} />}
    </div>
  );
}

export default Accordion;
