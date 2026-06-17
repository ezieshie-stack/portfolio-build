import Link from "next/link";
import type { ReactNode, ComponentPropsWithoutRef } from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

type CommonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  pill?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  className?: string;
};

type ButtonAsButton = CommonProps &
  ComponentPropsWithoutRef<"button"> & { href?: undefined };

type ButtonAsLink = CommonProps & {
  href: string;
  type?: never;
  onClick?: never;
  disabled?: never;
  "aria-label"?: string;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

function classes({
  variant = "primary",
  size = "md",
  pill,
  className,
}: Pick<CommonProps, "variant" | "size" | "pill" | "className">) {
  return [
    "ds-btn",
    `ds-btn--${variant}`,
    `ds-btn--${size}`,
    pill ? "ds-btn--pill" : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");
}

/** Three variants × three sizes, optional pill, optional leading/trailing icons.
   Renders as <Link> when href is internal, <a> for external/mailto, <button> otherwise. */
export function Button(props: ButtonProps) {
  const { children, variant, size, pill, iconLeft, iconRight, className } = props;
  const cls = classes({ variant, size, pill, className });
  const inner = (
    <>
      {iconLeft}
      {children}
      {iconRight}
    </>
  );

  if ("href" in props && props.href) {
    const isExternal =
      props.href.startsWith("http") ||
      props.href.startsWith("mailto:") ||
      props.href.startsWith("tel:");
    if (isExternal) {
      return (
        <a
          href={props.href}
          className={cls}
          target={props.href.startsWith("http") ? "_blank" : undefined}
          rel={props.href.startsWith("http") ? "noreferrer" : undefined}
          aria-label={props["aria-label"]}
        >
          {inner}
        </a>
      );
    }
    return (
      <Link href={props.href} className={cls} aria-label={props["aria-label"]}>
        {inner}
      </Link>
    );
  }

  const { type = "button", ...rest } = props as ButtonAsButton;
  return (
    <button {...rest} type={type} className={cls}>
      {inner}
    </button>
  );
}
