import React from "react";

type Props = {};

export default function Loader({}: Props) {
  return (
    <div>
      {" "}
      <div className="">
        <div className="lds-ring">
          <div className="m-2 h-5 w-5 animate-spin rounded-full border-4 border-white border-r-transparent border-t-transparent"></div>
        </div>
      </div>
    </div>
  );
}
