import React, { memo } from "react";
import { twMerge } from "tailwind-merge";

import type { PlayerEntry, GameSystem } from "types";

type GameItemProps = {
  isMyGame: boolean;
  userAvatar?: PlayerEntry["userAvatar"];
  userName?: PlayerEntry["userName"];
  systems?: GameSystem[];
};

const GameItemComponent: React.FC<GameItemProps> = ({
  isMyGame,
  userAvatar,
  userName,
  systems,
}) => {
  return (
    <div className={twMerge("flex w-full pr-4 items-center", !isMyGame && "pl-4")}>
      {isMyGame && <div className="w-1 h-7 mr-3 rounded-r-sm bg-accent-bg" />}
      <img className="rounded-full size-7 mr-3" src={userAvatar} />
      <div className="font-medium text-base/6 text-line mr-2">{userName}</div>
      <div className="flex gap-1">
        {systems?.map(({ name, level }) => (
          <div className="flex gap-1 items-center justify-center bg-secondary-bg/90 rounded-xl px-2 py-1">
            <div className="font-medium text-base/6 text-primary-text">
              {name}
            </div>
            <div
              className={twMerge(
                "w-1.5 h-1.5 rounded-full",
                level === "JUNIOR" && "bg-junior-bg",
                level === "MIDDLE" && "bg-middle-bg",
                level === "SENIOR" && "bg-senior-bg",
              )}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const GameItem = memo(GameItemComponent);
