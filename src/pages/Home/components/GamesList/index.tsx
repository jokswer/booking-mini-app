import React from "react";
import { useAppNavigation } from "navigation";

export const GamesList: React.FC = () => {
  const { goToSlot } = useAppNavigation();
  return (
    <div className="mt-6">
      <h1 className="text-lg text-primary-text font-semibold">
        Доступные игры
      </h1>
      <button
        onClick={goToSlot}
      ><p>Тест игра</p></button>
    </div>
  );
};
