import React, { useEffect, useState } from "react";
import Image from "next/image";

import { aeroDown, error } from "../assets";
import Divider from "./Divider";
import InputBox from "./InputBox";

interface Props {
  placeholder: string;
  handleSelect: (data: Object) => void;
  list: Array<string>;
  value: string;
  name: string;
  mainStyle?: string;
  innelStyle?: string;
  dropdownStyle?: string;
  errorText?: string;
  secondPlaceholder?: string;
  inputID?: string;
  fontSize?: string;
  onBlur?: (props: any) => void;
  labelID: string;
}

const SelectBox = ({
  handleSelect,
  list,
  name,
  placeholder,
  value,
  mainStyle,
  innelStyle,
  dropdownStyle,
  errorText,
  secondPlaceholder,
  inputID,
  fontSize,
  labelID,
  onBlur,
}: Props) => {
  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  useEffect(() => {
    if (inputID) {
      try {
        const elm = document.getElementById(inputID);
        if (elm) {
          elm.focus();
        }
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  const changeField = (e) => {
    handleSelect({ name: name, value: e.target.value });
  };

  return selectedItem === "Other" ? (
    <>
      <InputBox
        id={inputID}
        onBlur={onBlur}
        handleChange={changeField}
        name={name}
        placeholder={placeholder}
        type="text"
        errorText={errorText}
        value={value || ""}
        fontSize={fontSize}
        labelID={inputID + "lab"}
      />
    </>
  ) : (
    <div
      className={`select relative pt-[1.07rem] ${
        mainStyle
          ? mainStyle
          : `flex gap-2 cursor-pointer items-center border-b-2 w-full pb-1 sm:pb-3 text-[0.9rem] md:text-[1.2rem] sm:mt-5 relative ${
              show ? "border-main-teal" : "border-main-light_white"
            }`
      } `}
    >
      <p
        className={`absolute text-red-600 text-xs bottom-[-23px] left-0 flex justify-center items-center font-miligramTextMedium ${
          errorText ? "opacity-100" : "opacity-0"
        } `}
      >
        <Image
          src={error}
          alt={error}
          width={17}
          height={17}
          className="mr-1"
        />
        {errorText}
      </p>

      <div
        className={`koders-input font-miligramLight relative select-label px-1 text-main-light_white bg-transparent border-none outline-none tracking-[1px] sm:tracking-[2px] placeholder:text-main-light_white w-full ${innelStyle} ${
          fontSize ? fontSize : ""
        }`}
        onClick={() => {
          console.log("first");
          setShow(!show);
        }}
      >
        <input
          onBlur={(e) => {
            onBlur(e);
            setShow(false);
          }}
          type="text"
          value={value || ""}
          required
        />
        {placeholder && <span id={labelID}>{placeholder}</span>}
      </div>

      <Image
        src={aeroDown}
        alt="show"
        className={`select-img h-2 mt-6 w-3 mr-2 hover:brightness-75 transition-all duration-300 ${
          show ? "rotate-180" : ""
        }`}
      />
      <ul
        className={`down-list font-miligramLight ${
          dropdownStyle
            ? dropdownStyle
            : "w-full z-50 rounded-md absolute top-10 sm:top-[5.5rem] transition-all duration-500 bg-main-secondary text-main-light_white overflow-hidden"
        } ${show ? "max-h-[300px]" : "max-h-0"} ${fontSize ? fontSize : ""}`}
      >
        <Divider className="mt-1" />
        {list.map((item, i) => (
          <React.Fragment key={i}>
            <li
              onClick={() => {
                setShow(false);
                setSelectedItem(item);
                if (item === "Other") {
                  handleSelect({ name: name, value: "Other: " });
                  return;
                }
                handleSelect({ name: name, value: item });
              }}
              className="items mx-3 z-30 hover:text-white cursor-pointer hover:bg-gray-600 px-3 py-2 border-b-[1px] border-gray-600"
            >
              {item}
            </li>
          </React.Fragment>
        ))}
        <Divider className="mt-3" />
      </ul>
    </div>
  );
};

export default SelectBox;
