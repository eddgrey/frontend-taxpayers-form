import { CheckIcon, XIcon } from "lucide-react";

function Notification({ type, message, onClose }) {
  return (
    <>
      {type === "success" ? (
        <div className="relative flex bg-green-50 pl-4 py-4 max-w-screen-lg w-full rounded-md shadow-md shadow-gray-300/80">
          <span className="flex items-center justify-center bg-green-400 rounded-full h-6 w-6 mr-2">
            <CheckIcon className="h-4 w-4 text-green-50" />
          </span>
          <p className="text-green-600 font-semibold">{message}</p>
          <button className="absolute top-2 right-2" onClick={onClose}>
            <XIcon className="h-5 w-5 text-green-600" />
          </button>
        </div>
      ) : type === "error" ? (
        <div className="relative flex bg-red-50 pl-4 py-4 max-w-screen-lg w-full rounded-md shadow-md shadow-gray-300/80">
          <span className="flex items-center justify-center bg-red-400 rounded-full h-6 w-6 mr-2">
            <XIcon className="h-4 w-4 text-red-50" />
          </span>
          <p className="text-red-600 font-semibold">{message}</p>
          <button className="absolute top-2 right-2" onClick={onClose}>
            <XIcon className="h-5 w-5 text-red-600" />
          </button>
        </div>
      ) : null}
    </>
  );
}

export default Notification;
