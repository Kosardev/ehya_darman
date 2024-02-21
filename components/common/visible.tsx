import { FC, ReactNode, memo } from "react";

interface IVisible {
    visible?: boolean;
    children: ReactNode;
}

const Visible: FC<IVisible> = ({ visible, children }) => {
    if (!visible) return null;
    return <>{children}</>;
};

export default memo(Visible);
