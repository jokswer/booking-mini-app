import { useNavigate } from "react-router";

import { CREATE_GAME, HOME, PROFILE } from "./routes";

export const useAppNavigation = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);
  const goToProfile = () => navigate(PROFILE);
  const goToHome = () => navigate(HOME);
  const goToCreateGame = () => navigate(CREATE_GAME);

  return { goBack, goToProfile, goToHome, goToCreateGame };
};
