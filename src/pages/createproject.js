import React from "react";
import stylesApp from "@/styles/Home.module.scss";
import ProjectForm from "@/components/ProjectForm";

const createproject = () => {
  return (
    <main className={stylesApp.main}>
      <ProjectForm />
    </main>
  );
};

export default createproject;
