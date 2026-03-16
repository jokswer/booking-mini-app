import * as React from 'react';

import checkboxActive from 'assets/checkboxActive.svg'
import checkboxInactive from 'assets/checkboxInactive.svg'

type IGameSystemsType = {
    typesId: string;
    shortName: string;
    fullName: string;
}

type Props = {
    types: IGameSystemsType[],
    selected: string[],
    onClose: () => void,
    onSelect: (types: IGameSystemsType[]) => void
}

export const GameSystemsSellercot: React.FC<Props> = ({
    types,
    selected,
    onClose,
    onSelect
}) => {
    const [selectedTypes, setSelectedTypes] = React.useState<{ [key: string]: boolean }>({})

    React.useEffect(() => {
        const selectTypes = types.reduce<{ [key: string]: boolean }>((acc, type) => {
            const isSelect = !!selected.find(item => type.typesId === item);
            acc[type.typesId] = isSelect;
            return acc;
        }, {});
        setSelectedTypes(selectTypes);
    }, [selected, types])

    const switchSelect = (type: IGameSystemsType) => {
        const newValue = !selectedTypes[type.typesId];
        setSelectedTypes({ ...selectedTypes, [type.typesId]: newValue })
    }

    const onSave = () => {
        const saveTypes = Object.keys(selectedTypes).reduce<IGameSystemsType[]>((acc, key) => {
            if (selectedTypes[key]) {
                const _type = types.find(type => type.typesId === key)
                _type && acc.push(_type)
            }
            return acc
        }, []);
        onSelect(saveTypes);
    }

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                paddingLeft: 24,
                paddingRight: 24,
                paddingTop: 16,
                paddingBottom: 16,
                gap: 12,
                borderRadius: 12,
                backgroundColor: "#26303A"
            }}
        >
            <p
                style={{
                    fontSize: 16,
                    fontWidth: '700',
                    color: '#FFFFFF',
                }}
            >
                Игровые системы
            </p>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 8,

                }}
            >
                {types.map((type) => {
                    const isSelected = selectedTypes[type.typesId]
                    return (
                        <div
                            key={type.typesId}
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: "center",
                            }}
                        >
                            <button
                                style={{
                                    padding: 8
                                }}
                                onClick={() => switchSelect(type)}
                            >
                                <img src={isSelected ? checkboxActive : checkboxInactive} />
                            </button>
                            <p
                                style={{
                                    fontSize: 14,
                                    fontWidth: "500",
                                    color: "#FFFFFF"
                                }}
                            >
                                {type.fullName}
                            </p>
                        </div>
                    )
                })}
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: "center",
                    justifyContent: 'right',
                    gap: 12
                }}
            >
                <button
                    style={{
                        height: 36,
                        paddingLeft: 12,
                        paddingRight: 12,
                        fontSize: 14,
                        fontWeight: '700'
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
                        fontWeight: '700'
                    }}
                    onClick={onSave}
                >
                    Добавить
                </button>
            </div>
        </div>
    )
}