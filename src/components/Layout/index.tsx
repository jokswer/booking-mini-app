import React from "react";

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="min-h-screen py-3 px-4 w-full bg-primary-bg text-primary-text">
      {children}
    </div>
  );
};
