import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa6";
import { FaCheckDouble } from "react-icons/fa6";

const SingleColor = ({ rgb, code, i }) => {
  console.log(rgb);
  const [copied, setCopied] = useState(false);
  return (
    <>
      <div className="col-lg-3 mb-1">
        <div
          style={{ background: `rgb(${rgb})` }}
          className="card my-1 p-1 mt-4 border border-secondary"
        >
          {copied ? (
            <FaCheckDouble size={20} />
          ) : (
            <FaRegCopy
              size={20}
              cursor="pointer"
              onClick={() => {
                navigator.clipboard.writeText(`#${code}`);
                setCopied(true);
              }}
            />
          )}
          <h4 className={`${i >= 10 && "text-white"} p-2 text-center`}>
            #{code}
          </h4>
        </div>
      </div>
    </>
  );
};

export default SingleColor;
