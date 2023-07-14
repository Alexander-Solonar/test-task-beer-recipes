import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import css from "./Layout.module.css";
import Header from "../header/Header";

const Layout = () => {
  return (
    <div className={css.wraper}>
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
