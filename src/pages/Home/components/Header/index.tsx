import React from "react";
import WebApp from "@twa-dev/sdk";

import { Select } from "components";
import { useAppNavigation } from "navigation";

export const Header: React.FC = () => {
  const { goToProfile } = useAppNavigation();
  return (
    <div className="flex gap-4">
      <div className="flex flex-wrap gap-1">
        <Select className="px-3" placeholder="Дата" />
        <Select className="px-3" placeholder="Время" />
        <Select
          className="px-3"
          placeholder="Системы"
          options={[
            { label: "KT", value: "KT" },
            { label: "WH 40k", value: "WH" },
            { label: "AOS", value: "AOS" },
          ]}
        />
        <Select className="px-3" placeholder="Игроки" />
        <Select className="px-3" placeholder="Уровень игры" />
      </div>

      <img
        className="h-12 w-12 rounded-[50%] active:scale-95 transition-transform"
        onClick={goToProfile}
        src={WebApp.initDataUnsafe.user?.photo_url}
        alt="avatar"
      />
    </div>
  );
};
