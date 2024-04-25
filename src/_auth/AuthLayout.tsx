import { userContext } from "@/context/AuthContext";
import { Outlet, Navigate } from "react-router-dom";

function AuthLayout() {
  const { isAuthenticated } = userContext();

  return (
    <>
      {isAuthenticated ? (
        <>
          <Navigate to="/" />{" "}
        </>
      ) : (
        <>
          <section className="flex flex-1 justify-center items-center flex-col pyy-10">
            <Outlet />
          </section>

          <img
            src="/assets/images/side-img1.svg"
            alt="logo"
            className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"
          />
        </>
      )}
    </>
  );
}

export default AuthLayout;
