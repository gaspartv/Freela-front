import { NavStyled } from "./styles";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

export const Nav = () => {
  const navigate = useNavigate();
  const { userLogout, user } = useContext(UserContext);

  return (
    <NavStyled>
      <h1>frilla</h1>
      <div>
        <p>{user?.name}</p>
        <ChevronRightIcon />
        <button
          onClick={() => {
            userLogout();
            navigate("/");
          }}
        >
          Sair<span></span>
        </button>
      </div>
    </NavStyled>
  );
};
