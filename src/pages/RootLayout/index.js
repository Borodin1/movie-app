//Core
import { Outlet } from "react-router-dom";

//components
import { MainNavigation } from "../../components/MainNavigation/MainNavigation";

export const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <div>
        <Outlet />
      </div>
    </>
  );
};
