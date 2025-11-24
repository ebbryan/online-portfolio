import { ReactNode } from "react";

interface IContainerProps {
  children: ReactNode;
}

const ContainerProvider = (props: IContainerProps) => {
  return <main className="p-2 md:px-12 lg:px-24">{props.children}</main>;
};

export default ContainerProvider;
