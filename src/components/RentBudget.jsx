import { useState, useEffect } from "react";

export default function RentBudget({ onChange }) {
  const min = 0;
  const max = 900;

  const [leftValue, setLeftValue] = useState(200); // initial left
  const [rightValue, setRightValue] = useState(650); // initial right

  // Call parent when value updates
  useEffect(() => {
    onChange({ min: leftValue, max: rightValue });
  }, [leftValue, rightValue]);

  // Ensure no overlap
  const handleLeft = (e) => {
    const v = Number(e.target.value);
    setLeftValue(Math.min(v, rightValue - 1));
  };

  const handleRight = (e) => {
    const v = Number(e.target.value);
    setRightValue(Math.max(v, leftValue + 1));
  };

  const resetRange = () => {
    setLeftValue(200);
    setRightValue(650);
  };

  const leftPercent = ((leftValue - min) / (max - min)) * 100;
  const rightPercent = ((rightValue - min) / (max - min)) * 100;

  return (
    <div className="border p-4 rounded-xl space-y-4">
      <div className="flex justify-between items-center ">
        <p className="font-medium ">Rent Budget</p>
        <button onClick={resetRange} className=" text-black text-2xl">
          -
        </button>
      </div>

      <div className="w-full h-[2px] bg-gray-300"></div>

      {/* Range Slider */}
      <div className="relative w-full h-12 flex items-center">
        <div className="absolute left-0 right-0 h-[10px] rounded-full bg-[#E5C7D4]"></div>

        <div
          className="absolute h-[10px] rounded-full bg-[#57002A]"
          style={{
            left: `${leftPercent}%`,
            right: `${100 - rightPercent}%`,
          }}
        ></div>

        {/* LEFT RANGE INPUT */}
        <input
          type="range"
          min={min}
          max={max}
          value={leftValue}
          onChange={handleLeft}
          className="absolute w-full appearance-none bg-transparent h-12 pointer-events-none"
        />

        {/* RIGHT RANGE INPUT */}
        <input
          type="range"
          min={min}
          max={max}
          value={rightValue}
          onChange={handleRight}
          className="absolute w-full appearance-none bg-transparent h-12 pointer-events-none z-10"
        />

        {/* THUMB STYLE */}
        <style>
          {`
            input[type=range]::-webkit-slider-thumb {
              -webkit-appearance: none;
              pointer-events: auto;
              width: 14px;
              height: 14px;
              border-radius: 50%;
              background: #FFFFFF;
              border: 4px solid #57002A;
              outline: 6px solid #E5C7D4;
              cursor: pointer;
            }
            input[type=range]::-moz-range-thumb {
              pointer-events: auto;
              width: 26px;
              height: 26px;
              border-radius: 50%;
              background: #FFFFFF;
              border: 4px solid #57002A;
              outline: 6px solid #E5C7D4;
              cursor: pointer;
            }
          `}
        </style>
      </div>

      {/* MIN / MAX BOXES */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-gray-100 p-3 rounded-lg text-center">
          <p className="text-xs text-gray-500">Minimum</p>
          <p className="text-lg font-semibold">${leftValue}</p>
        </div>

        <div className="bg-gray-100 p-3 rounded-lg text-center">
          <p className="text-xs text-gray-500">Maximum</p>
          <p className="text-lg font-semibold">${rightValue}</p>
        </div>
      </div>
    </div>
  );
}
