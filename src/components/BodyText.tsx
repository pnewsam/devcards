import { cn } from "@/lib/utils";

export const BodyText = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <p className={cn("text-[9px]", className)}>{children}</p>;
};
