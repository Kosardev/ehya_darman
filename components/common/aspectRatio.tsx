import { FC, ReactElement, memo, useEffect, useMemo, useState } from "react";

interface IAspectRatio {
    children: ReactElement;
    aspect?: number;
}

const AspectRatio: FC<IAspectRatio> = ({ children, aspect = 1 }) => {
    const aspectRatio = useMemo(() => (aspect > 1 ? aspect : aspect < 0 ? 0 : aspect) * 100, [aspect]);

    return (
        <div className={`w-full relative`} style={{ paddingTop: `${aspectRatio}%` }}>
            <div className="absolute inset-0 w-full h-full">{children}</div>
        </div>
    );
};

export default memo(AspectRatio);
