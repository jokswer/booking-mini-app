import { useNavigate, useLocation } from "react-router";

import { CREATE_GAME, HOME, PROFILE, SLOT } from "./routes";

export const useAppNavigation = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);
  const goToProfile = () => navigate(PROFILE);
  const goToHome = () => navigate(HOME);
  const goToCreateGame = () => navigate(CREATE_GAME);
  const goToSlot = () => navigate(SLOT);

  const pathLevel = () => {
    const { pathname } = useLocation();
    return pathname.split("/").filter(Boolean).length;
  };

  return { goBack, goToProfile, goToHome, goToCreateGame, goToSlot, pathLevel };
};
