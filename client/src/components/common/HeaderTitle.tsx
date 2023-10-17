import React from "react";

interface HeaderTitleProps {
  title: string;
}

const HeaderTitle = ({ title }: HeaderTitleProps) => {
  return <h3 className="font-bold text-xl mt-4 mb-2">{title}</h3>;
};

export default HeaderTitle;
