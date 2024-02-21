import { FC, FormHTMLAttributes, ReactNode, memo } from "react";

interface IForm extends FormHTMLAttributes<HTMLFormElement> {
    autoComplete?: "off" | "on";
    children: ReactNode;
}

const Form: FC<IForm> = ({ autoComplete = "off", children, ...props }) => {
    return (
        <form autoComplete={autoComplete} {...props}>
            {children}
        </form>
    );
};

export default memo(Form);
