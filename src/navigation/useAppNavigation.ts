import { useNavigate } from "react-router";

import { CREATE_GAME, HOME, PROFILE, SLOT } from "./routes";

export const useAppNavigation = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);
  const goToProfile = () => navigate(PROFILE);
  const goToHome = () => navigate(HOME);
  const goToCreateGame = () => navigate(CREATE_GAME);
  const goToSlot = () => navigate(SLOT);

  return { goBack, goToProfile, goToHome, goToCreateGame, goToSlot };
};
