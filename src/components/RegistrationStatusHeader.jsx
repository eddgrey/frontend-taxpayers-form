import { useTaxpayerRegistration } from "../context/useTaxpayerRegistration";
import Notification from "./Notification";

function RegistrationStatusHeader() {
  const { registrationStatus, setRegistrationStatus } =
    useTaxpayerRegistration();

  return (
    <header className="flex justify-center py-6 px-6">
      {registrationStatus.type ? (
        <Notification
          type={registrationStatus.type}
          message={registrationStatus.message}
          onClose={() => setRegistrationStatus({ type: "", message: "" })}
        />
      ) : (
        <h2 className="text-blue-900 text-lg font-medium py-4">
          Taxpayer form
        </h2>
      )}
    </header>
  );
}

export default RegistrationStatusHeader;
