import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import css from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={css.wrapper}>
      <Header />
      <main className={css.main}>
        <div className={css.container}>
          <Suspense>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </div>
  );
};

export default Layout;
