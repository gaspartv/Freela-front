/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const RouterDirection = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.getItem("@token") === null
      ? navigate("/login")
      : navigate("/home");
  }, []);

  return <></>;
};
