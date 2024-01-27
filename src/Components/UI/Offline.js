import React from "react";
import offline from "../../assets/img/offline.png";
import useOnline from "../../utils/useOnline";

const Offline = () => {
  const isOnline = useOnline();

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <section>
      <div className="flex justify-center items-center pt-20">
        <div className="text-center">
          {/* <img className="w-[450px] mx-auto" src={offline} alt="offline" /> */}
          <div className="my-6">
            <h6 className="font-bold text-xl mb-1 text-gray-700">
              {isOnline
                ? "You are currently online"
                : "You are currently offline"}
            </h6>
            <p className="text-gray-500 text-sm">
              {isOnline
                ? "You are connected to the internet."
                : "Please check your internet connection and try again."}
            </p>
          </div>
          {!isOnline && (
            <button
              className="bg-orange-500 text-white text-sm font-semibold px-4 py-2"
              onClick={reloadPage}
            >
              Reload
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Offline;
