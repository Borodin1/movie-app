//Core
import { Outlet } from "react-router-dom";

//components
import { MainNavigation } from "../../components/MainNavigation/MainNavigation";

export const RootLayout:React.FC = () => {
  return (
    <>
      <MainNavigation />
      <div>
        <Outlet />
      </div>
    </>
  );
};
