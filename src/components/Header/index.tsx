import React from "react";
import { useAppNavigation } from "navigation";
import arrowLeftIcon from "assets/arrowLeft.svg";
import closeIcon from "assets/close.svg";
import moreIcon from "assets/moreVert.svg";

const HeaderButton: React.FC<{
    img: string;
    onPress: () => void;
    stile?: React.CSSProperties | undefined
}> = ({ img, onPress, stile }) => (
    <div>
        <button
            onClick={onPress}
            style={{
                height: 48,
                width: 48,
                padding: 12,
                display: "flex",
                justifyContent: "center",
                verticalAlign: "center",
                ...stile,
            }}
        >
            <img src={img} />
        </button>
    </div>
)

type IHeader = {
    morePress?: () => void;
    closePress?: () => void;
}

export const Header: React.FC<IHeader> = (
    {
        morePress,
        closePress,
    }
) => {
    const { goBack, pathLevel } = useAppNavigation();

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                backgroundColor: "#17212B",
                borderColor: "#26303A",
                borderWidth: 1,
                gap: 8,
                padding: 8
            }}
        >
            {pathLevel() && <HeaderButton
                img={arrowLeftIcon}
                onPress={goBack}
            />}
            <div
                style={{
                    display: "flex",
                    flex: 1,
                    justifyItems: "left",
                    alignItems: "center",
                }}
            >
                <p
                    style={{
                        fontSize: 20,
                        fontWidth: "700",
                        color: "#FFFFFF",
                    }}
                >
                    Warhammer Кемерово
                </p>
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 8,
                }}
            >
                {morePress && <HeaderButton
                    img={moreIcon}
                    onPress={morePress}
                />}
                {closePress && <HeaderButton
                    img={closeIcon}
                    onPress={closePress}
                    stile={{
                        padding: 16
                    }}
                />}
            </div>
        </div>
    )
}