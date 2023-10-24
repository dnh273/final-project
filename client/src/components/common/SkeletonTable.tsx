import React from "react";

interface SkeletonTableProps {
  colSpan?: number;
}

const SkeletonTable = ({ colSpan }: SkeletonTableProps) => {
  return (
    <>
      <tr className=" animate-pulse">
        <td
          className="h-12 py-3 text-center bg-slate-200 text-transparent"
          colSpan={colSpan}
        ></td>
      </tr>
      <tr className=" animate-pulse">
        <td
          className="h-12 py-3 text-center bg-slate-100 text-transparent"
          colSpan={colSpan}
        ></td>
      </tr>
      <tr className=" animate-pulse">
        <td
          className="h-12 py-3 text-center bg-slate-200 text-transparent"
          colSpan={colSpan}
        ></td>
      </tr>
      <tr className=" animate-pulse">
        <td
          className="h-12 py-3 text-center bg-slate-100 text-transparent"
          colSpan={colSpan}
        ></td>
      </tr>
      <tr className=" animate-pulse">
        <td
          className="h-12 py-3 text-center bg-slate-200 text-transparent"
          colSpan={colSpan}
        ></td>
      </tr>
      <tr className=" animate-pulse">
        <td
          className="h-12 py-3 text-center bg-slate-100 text-transparent"
          colSpan={colSpan}
        ></td>
      </tr>
      <tr className=" animate-pulse">
        <td
          className="h-12 py-3 text-center bg-slate-200 text-transparent"
          colSpan={colSpan}
        ></td>
      </tr>
      <tr className=" animate-pulse">
        <td
          className="h-12 py-3 text-center bg-slate-100 text-transparent"
          colSpan={colSpan}
        ></td>
      </tr>
    </>
  );
};

export default SkeletonTable;
