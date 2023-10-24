import clsx from "clsx";
import React from "react";

interface NotFoundTable {
  colSpan?: number;
  rowSpan?: number;
  className?: string;
}

const NotFoundTable = ({ colSpan, rowSpan, className }: NotFoundTable) => {
  return (
    <tr>
      <td
        className={clsx("px-6 py-3 text-center", className)}
        rowSpan={rowSpan}
        colSpan={colSpan}
      >
        Không tìm thấy dữ liệu
      </td>
    </tr>
  );
};

export default NotFoundTable;
