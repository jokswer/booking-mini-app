import { Checkbox, CloseButton } from "components";
import * as React from "react";

type ITimeSlote = {
    title: string;
    id: string;
}

type Props = {
    date: string;
    dayWeek: string;
    timeSlotes: ITimeSlote[];
    selected: string[],
    onDelete: (date: string) => void,
    onSelect: (types: ITimeSlote) => void
}

export const AddedTimeSlote: React.FC<Props> = ({
    date,
    dayWeek,
    timeSlotes,
    selected,
    onSelect,
    onDelete
}) => {

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
                backgroundColor: "#26303A",
                position: 'relative'
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: "space-between",
                    gap: 4
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 4
                    }}
                >
                    <p
                        style={{
                            fontSize: 16,
                            fontWidth: '600',
                            color: '#FFFFFF',
                        }}
                    >
                        {date}
                    </p>
                    <p
                        style={{
                            fontSize: 16,
                            fontWidth: '600',
                            color: '#919EAB',
                        }}
                    >
                        {dayWeek}
                    </p>
                </div>
                <div
                    style={{
                        top: 8,
                        right: 8,
                        position: 'absolute',
                    }}
                >
                    <CloseButton onClose={() => onDelete(date)} />
                </div>
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 12,

                }}
            >
                {timeSlotes.map((slote) => {
                    const isSelected = !!selected.find(select => slote.id === select)
                    return <Checkbox
                        selected={isSelected}
                        text={slote.title}
                        onClick={() => onSelect(slote)}
                    />
                })}
            </div>
        </div>
    )

}