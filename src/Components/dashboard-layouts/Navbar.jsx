import React, { useState } from "react";
import { Avathar } from "../../ui/Avathar";
import { Link } from "react-router-dom";
import { Button } from "../../ui/button/Button";
import {
  IconBell,
  IconCheverontDown,
  IconHamburger,
} from "../../assets/icons/InterfaceIcons";
import List from "../../ui/List";

// ✅ Language options
const languages = [
  { code: "IN", name: "India", flag: "/images/flags/india.png" },
  { code: "US", name: "USA", flag: "/images/flags/united-states.png" },
  { code: "CN", name: "China", flag: "/images/flags/china.png" },
  { code: "AE", name: "UAE", flag: "/images/flags/united-arab-emirates.png" },
];

const Navbar = () => {
  const [selectedLang, setSelectedLang] = useState("IN");
  const [isOpenLangMenu, setIsOpenLangMenu] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false); // ✅ Fix: add missing state

  const current = languages.find((lang) => lang.code === selectedLang);

  const handleLanguageChange = (lang) => {
    setSelectedLang(lang.code);
    setIsOpenLangMenu(false);
    console.log("Language changed to:", lang.code);
  };

  const toggleProfileMenu = () => {
    setShowProfileMenu((prev) => !prev);
  };

  return (
    <>
      <div className="w-full h-[60px] flex-shrink-0  py-3 flex items-center justify-between gap-4 border-b-2 md:border-b-0 border-gray-200 bg-white">
        <div className="flex items-center gap-2 px-4">
          <img
            src="/public/svg/brand-logo/logo-flowbe-secondary.svg"
            alt="logo"
            width="125"
            className="flex-shrink-0"
          />
        </div>

        <div className="flex-grow flex items-center gap-2 justify-end ">
          {/* 🌐 Language Selector */}
          <div className="relative">
            <Button
              variant="secondary"
              onClick={() => setIsOpenLangMenu((prev) => !prev)}
              className=""
            >
              <img
                src={current?.flag}
                alt={current?.name}
                className="w-5 h-5 rounded-sm"
              />
              <span className="font-bold text-sm uppercase">
                {current?.name}
              </span>
              <IconCheverontDown size="16" />
            </Button>

            {isOpenLangMenu && (
              <div className="absolute right-0 mt-2 bg-white border rounded-lg shadow-md z-50 w-40">
                <List
                  className="flex flex-col"
                  data={languages}
                  render={(item) => (
                    <button
                      key={item.code}
                      onClick={() => handleLanguageChange(item)}
                      className="w-full text-left px-4 cursor-pointer py-2 hover:bg-gray-100 flex items-center gap-2"
                    >
                      <img
                        src={item.flag}
                        alt={item.name}
                        className="w-5 h-5 rounded-sm"
                      />
                      <span className="uppercase ">{item.name}</span>
                    </button>
                  )}
                />
              </div>
            )}
          </div>

          {/* 🔔 Notification Button */}
          <Button variant="secondary" className="border-none shadow-none">
            <IconBell size="24" />
          </Button>
          {/* 👤 Profile Section */}
          <div className="relative">
            <div
              className="flex items-center gap-2   px-2 cursor-pointer"
              onClick={toggleProfileMenu}
            >
              <Avathar
                imgUrl="https://i.pinimg.com/736x/eb/76/a4/eb76a46ab920d056b02d203ca95e9a22.jpg"
                loading={false}
                className="cursor-pointer"
              />
              <IconCheverontDown />
            </div>
            {/* ✅ Optional Profile Menu (if you want it functional) */}
            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-10">
                <ul className="text-sm">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <Link to="/dashboard/profile">Profile</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Settings
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>

    // <div className="sticky top-0 z-50 w-full h-[4.75rem] bg-white">
    //   <div className="relative h-full flex gap-2 px-4 p-6">
    //     <div className="flex-grow flex items-center gap-2 justify-end">
    //       {/* 🌐 Language Selector */}
    //       <div className="relative">
    //         <Button
    //           variant="secondary"
    //           onClick={() => setIsOpenLangMenu((prev) => !prev)}
    //           className=""
    //         >
    //           <img
    //             src={current?.flag}
    //             alt={current?.name}
    //             className="w-5 h-5 rounded-sm"
    //           />
    //           <span className="font-bold text-sm uppercase">{current?.name}</span>
    //           <IconCheverontDown size="16" />
    //         </Button>

    //         {isOpenLangMenu && (
    //           <div className="absolute right-0 mt-2 bg-white border rounded-lg shadow-md z-50 w-40">
    //             <List
    //               className="flex flex-col"
    //               data={languages}
    //               render={(item) => (
    //                 <button
    //                   key={item.code}
    //                   onClick={() => handleLanguageChange(item)}
    //                   className="w-full text-left px-4 cursor-pointer py-2 hover:bg-gray-100 flex items-center gap-2"
    //                 >
    //                   <img
    //                     src={item.flag}
    //                     alt={item.name}
    //                     className="w-5 h-5 rounded-sm"
    //                   />
    //                   <span className="uppercase ">{item.name}</span>
    //                 </button>
    //               )}
    //             />
    //           </div>
    //         )}
    //       </div>

    //       {/* 🔔 Notification Button */}
    //       <Button
    //       variant="secondary"
    //       className="border-none shadow-none"
    //       >
    //         <IconBell size="24" />
    //       </Button>

    //       {/* 👤 Profile Section */}
    //       <div className="relative">
    //         <div
    //           className="flex items-center gap-2 px-2 cursor-pointer"
    //           onClick={toggleProfileMenu}
    //         >
    //           <Avathar
    //             imgUrl="https://i.pinimg.com/736x/eb/76/a4/eb76a46ab920d056b02d203ca95e9a22.jpg"
    //             loading={false}
    //             className="cursor-pointer"
    //           />
    //           <IconCheverontDown />
    //         </div>

    //         {/* ✅ Optional Profile Menu (if you want it functional) */}
    //         {showProfileMenu && (
    //           <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-10">
    //             <ul className="text-sm">
    //               <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
    //                 <Link to="/dashboard/profile">Profile</Link>
    //               </li>
    //               <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
    //                 Settings
    //               </li>
    //               <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
    //                 Logout
    //               </li>
    //             </ul>
    //           </div>
    //         )}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Navbar;
