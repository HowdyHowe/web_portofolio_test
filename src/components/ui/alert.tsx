import { useState } from "react";

function Alert() {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div className="fixed w-full h-screen z-50">
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded" role="alert">
            <strong className="font-bold">Success!</strong>
            <span className="block sm:inline">Your operation completed.</span>
            <button
                onClick={() => setShow(false)}
                className="top-0 bottom-0 right-0 px-4 py-3"
            >
                <span className="text-xl font-bold text-green-700">&times;</span>
            </button>
        </div>
    </div>
  );
}

export default Alert;