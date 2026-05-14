import { CloseButton, Select } from "components";
import * as React from "react";

type Props = {
    title: string,
    level: string,
    description: string,
    onChange: (level: string, description: string) => void,
    onDelete: () => void,
}

const gameLevelsMOCK = [
    {
        lvlId: "0",
        title: "Легкий уровень",
    },
    {
        lvlId: "1",
        title: "Средний уровень",
    },
    {
        lvlId: "2",
        title: "Тяжёлый уровень",
    }
]


export const AddSystem: React.FC<Props> = ({
    title,
    level,
    description,
    onChange,
    onDelete,
}) => {
    const [selectLevel, setSelectLevel] = React.useState<string>(level)
    const [newDescription, setNewDescription] = React.useState<string>(description)

    React.useEffect(() => {
        onChange(selectLevel, newDescription)
    }, [selectLevel, newDescription])

    const mapperLevel = (level: any) => ({ label: level.title, value: level.lvlId })
    return (
        <div
            key={title}
            style={{
                display: 'flex',
                flexDirection: 'column',
                padding: 16,
                gap: 16,
                backgroundColor: "#212B35",
                borderRadius: 8,
                position: "relative",
            }}
        >

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                }}
            >
                <p style={styles.title} >
                    {title}
                </p>
                <div
                    style={{
                        top: 8,
                        right: 8,
                        position: "absolute",
                    }}
                >
                    <CloseButton onClose={onDelete} />
                </div>
            </div>

            <div>
                <Select
                    className="px-3"
                    options={gameLevelsMOCK.map(mapperLevel)}
                    defaultValue={mapperLevel(gameLevelsMOCK.find(_level => _level.lvlId === level))}
                    onChange={(newValue: {label: string, value: string}) => {
                        console.log(newValue)
                        setSelectLevel(newValue.value)
                    }}
                />
            </div>

            <div>
                <textarea
                    className="px-3"
                    style={styles.textarea}
                    placeholder="Описание игры"
                    value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)}
                    rows={4}
                />
            </div>
        </div>
    )
}


const styles = {
    button: {
        display: "flex",
        alignItems: "center",
        padding: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#919EAB52",
    },
    title: {
        fontSize: 14,
        fontWeight: "600",
        verticalAlign: "middle",
    },
    blokContainer: {
        gap: 12,
        display: "flex",
        flexDirection: "column",
    },
    textarea: {
        width: "100%",
        height: 100,
        borderRadius: 8,
        border: "1px solid #919EAB52",
        padding: 12,
    },
};