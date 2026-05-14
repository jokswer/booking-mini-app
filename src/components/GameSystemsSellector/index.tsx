import * as React from "react";

import { Checkbox } from "components";
import type { IGameSystemsType } from "types";

type Props = {
  types: IGameSystemsType[];
  selected: string[];
  onClose: () => void;
  onSelect: (types: IGameSystemsType[]) => void;
  canDelete?: boolean;
};

export const GameSystemsSellercot: React.FC<Props> = ({
  types,
  selected,
  onClose,
  onSelect,
  canDelete = true,
}) => {
  const [selectedTypes, setSelectedTypes] = React.useState<{
    [key: string]: boolean;
  }>({});

  React.useEffect(() => {
    const selectTypes = types.reduce<{ [key: string]: boolean }>(
      (acc, type) => {
        const isSelect = !!selected.find((item) => type.typesId === item);
        acc[type.typesId] = isSelect;
        return acc;
      },
      {},
    );
    setSelectedTypes(selectTypes);
  }, [selected, types]);

  const switchSelect = (type: IGameSystemsType) => {
    const newValue = !selectedTypes[type.typesId];
    if (!canDelete && !!selected.find(id => id === type.typesId) && !newValue) return;
    setSelectedTypes({ ...selectedTypes, [type.typesId]: newValue });
  };

  const onSave = () => {
    const saveTypes = Object.keys(selectedTypes).reduce<IGameSystemsType[]>(
      (acc, key) => {
        if (selectedTypes[key]) {
          const _type = types.find((type) => type.typesId === key);
          _type && acc.push(_type);
        }
        return acc;
      },
      [],
    );
    onSelect(saveTypes);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        paddingLeft: 24,
        paddingRight: 24,
        paddingTop: 16,
        paddingBottom: 16,
        gap: 12,
        borderRadius: 12,
        backgroundColor: "#26303A",
      }}
    >
      <p
        style={{
          fontSize: 16,
          fontWidth: "700",
          color: "#FFFFFF",
        }}
      >
        Игровые системы
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        {types.map((type) => {
          const isSelected = selectedTypes[type.typesId];
          const needDisable = !canDelete && !!selected.find(id => id === type.typesId) && isSelected
          return (
            <Checkbox
              selected={isSelected}
              text={type.fullName}
              onClick={() => switchSelect(type)}
              disabled={needDisable}
            />
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "right",
          gap: 12,
        }}
      >
        <button
          style={{
            height: 36,
            paddingLeft: 12,
            paddingRight: 12,
            fontSize: 14,
            fontWeight: "700",
          }}
          onClick={onClose}
        >
          Закрыть
        </button>
        <button
          style={{
            height: 36,
            paddingLeft: 12,
            paddingRight: 12,
            borderRadius: 8,
            backgroundColor: "#FFFFFF",
            color: "#000000",
            fontSize: 14,
            fontWeight: "700",
          }}
          onClick={onSave}
        >
          Добавить
        </button>
      </div>
    </div>
  );
};
