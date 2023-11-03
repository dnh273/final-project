import React from "react";
import { Routes, Route } from "react-router-dom";
import { LoginForm } from "..";
import AuthLayout from "../../../components/layout/AuthLayout";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="login" element={<LoginForm />} />
      </Route>
    </Routes>
  );
};

export default AuthRoutes;
