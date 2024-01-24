import React from "react";

const CartLayout = ({ children, className }) => {
  const containerClasses = `max-w-3xl mx-auto  bg-white my-2 ${className}`;

  return <div className={containerClasses}>{children}</div>;
};

export default CartLayout;
