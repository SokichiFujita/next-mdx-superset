import Link from "next/link";
import { FunctionComponent } from "react";

interface HeaderType {
  service_title: string;
}

const Header: FunctionComponent<HeaderType> = ({ service_title }) => {
  return (
    <div className="flex items-center h-16 px-4 border-b border-slate-200">
      <Link href="/">
        <a className="font-bold text-xl flex-1">{service_title}</a>
      </Link>
    </div>
  );
};

export default Header;
