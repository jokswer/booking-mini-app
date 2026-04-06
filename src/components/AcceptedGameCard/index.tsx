import React, { memo } from "react";

import acceptGameIcon from "assets/acceptGame.svg";

type UserProps = {
  src?: string;
  name: string;
};

const User: React.FC<UserProps> = ({ src, name }) => (
  <div className="flex min-w-0 flex-col gap-2 items-center w-28">
    <img className="w-12 h-12 rounded-full" src={src} alt="avatar" />
    <div className="w-full text-base truncate text-center">{name}</div>
  </div>
);

const AcceptedGameCardComponent: React.FC = () => {
  return (
    <div className="flex flex-col w-full py-3 px-4 gap-4 rounded-lg bg-[radial-gradient(100%_80%_at_50%_115%,#E94817_0%,#26303A_100%)]">
      <div className="text-sm">День</div>
      <div className="flex gap-3 justify-between">
        <User
          src="https://placehold.co/48x48/000000/FFFFFF/svg"
          name="Дима Кривицкий"
        />
        <div className="flex flex-col gap-3 max-w-15.5 items-center">
          <img src={acceptGameIcon} width={24} height={24} />
          <div className="text-xs py-0.5 px-1 rounded-sm bg-[#919EAB14]">Wh 40k</div>
        </div>
        <User
          src="https://placehold.co/48x48/000000/FFFFFF/svg"
          name="Петя Васькин"
        />
      </div>
    </div>
  );
};

export const AcceptedGameCard = memo(AcceptedGameCardComponent);
