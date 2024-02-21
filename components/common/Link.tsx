import NextLink from "next/link";
import type { LinkProps } from "next/link";
import { ClassName } from "@/lib/types";
import classNames from "classnames";
import { PropsWithChildren } from "react";

export type LinkPropsT = {
    className?: ClassName;
    disabled?: boolean;
} & PropsWithChildren &
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
    Omit<LinkProps, "href"> &
    React.RefAttributes<HTMLAnchorElement> &
    LinkProps;

export default function Link({ className, children, href, disabled, ...props }:LinkPropsT){
    if (disabled === true) {
        return <>{children}</>;
    } else {
        return (
            <>
                <NextLink href={href} prefetch={false} {...props} className={classNames(className)}>
                    {children}
                </NextLink>
            </>
        );
    }
};