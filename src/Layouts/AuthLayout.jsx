import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="relative min-h-[100dvh] bg-gradient-to-b from-white to-yellow-50 overflow-hidden">
      {/* Bottom Background SVGs */}
      <img
        src="/public/svg/layout1.svg"
        alt="Wave Background 2"
        className="absolute bottom-0 left-0 w-full z-0 pointer-events-none"
      />
      <img
        src="/public/svg/layout2.svg"
        alt="Wave Background 1"
        className="absolute bottom-0 left-0 w-full z-0 pointer-events-none"
      />

      {/* Main Content */}
      <div className="relative z-10 min-h-[100dvh] flex flex-col justify-between p-4">
        {/* Header */}
        <div className="flex-grow container flex flex-col items-center justify-center gap-6">
          <div className="text-center mb-4">
            <img src="/public/svg/brand-logo/logo-flowbe-secondary.svg" alt="Flowbee Logo" className="mx-auto" />
            <h2 className="text-2xl font-semibold mt-2 ">Login to Flowbee</h2>
          </div>
          <div className="flex items-center justify-center">{children}</div>
        </div>

        {/* Footer */}
        <div className="flex-shrink-0 container flex items-end justify-end text-sm text-gray-700 py-4">
          {/* <p className="font-medium">How it Works</p> */}
          <small className=" text-md text-black">© 2024. All Rights Reserved</small>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
