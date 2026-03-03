import React, { memo } from "react";

import type { DaySchedule } from "types";

import { GameItem } from "./components";

export type TimeSlotsCardProps = {
  daySchedule: DaySchedule;
  onClick?: () => void;
};

const TimeSlotsCardComponent: React.FC<TimeSlotsCardProps> = ({
  daySchedule,
  onClick,
}) => {
  const { date, timeSlots } = daySchedule;

  return (
    <div className="flex flex-col gap-2" onClick={onClick}>
      <div>{date.toDateString()}</div>

      <div className="flex flex-col gap-3">
        {timeSlots.map(({ timeSlotsPeriod, games }) => (
          <div className="bg-card-bg rounded-2xl py-3">
            <div className="m-3 mx-4">{timeSlotsPeriod}</div>
            <div className="flex flex-col gap-3">
              {games.map(({ userName, userAvatar, systems }) => (
                <GameItem
                  isMyGame={true}
                  userAvatar={userAvatar}
                  userName={userName}
                  systems={systems}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const TimeSlotsCard = memo(TimeSlotsCardComponent);
