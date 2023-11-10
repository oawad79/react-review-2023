import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  children: ReactNode;
};

const Banner = ({ children }: Props) => {
  const navigate = useNavigate();

  return (
    <header className="grid grid-cols-2">
      <div className="my-5 h-44 w-44">
        <img
          src="/assets/GloboLogo.png"
          alt="Logo"
          onClick={() => navigate("/")}
          className="hover:cursor-pointer"
        />
      </div>
      <div className="flex items-center font-mono">{children}</div>
    </header>
  );
};

export default Banner;
