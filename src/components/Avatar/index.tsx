import * as React from 'react'

type Props = {
    url: string;
}

export const Avatar: React.FC<Props> = ({
    url
}) => {
    return (
        <img
            src={url}
            width={48}
            height={48}
            style={{
                borderRadius: 24,
                height: 48,
                objectFit: 'contain'
            }}

        />
    )
}