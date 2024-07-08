import React from "react";

export interface IContainerProps extends React.HTMLAttributes<HTMLDivElement> {
}

const Container = ({ children, ...props }: IContainerProps) => {
  return (
    <div className="container pb-10 flex-1  rounded-lg slide-in-fwd-center" {...props}>
      {children}
    </div>
  );
};

export { Container };