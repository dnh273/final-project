import clsx from "clsx";
import React from "react";

interface NotFoundTable {
  colSpan?: number;
  rowSpan?: number;
  className?: string;
}

const NotFoundTable = ({ colSpan = 99, rowSpan, className }: NotFoundTable) => {
  return (
    <tr>
      <td
        className={clsx(
          "text-black h-72 bg-slate-100 text-xl font-semibold text-center",
          className
        )}
        rowSpan={rowSpan}
        colSpan={colSpan}
      >
        Không tìm thấy dữ liệu
      </td>
    </tr>
  );
};

export default NotFoundTable;
