"use client";
import dynamic from "next/dynamic.js";

const App = dynamic(() => import("../../components/app/app"), { ssr: false });
export const AppClient = (props) => {
  return <App />;
};
