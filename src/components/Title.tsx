import { cn } from "@/lib/utils";

export const Title = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <h2 className={cn("text-base font-bold", className)}>{children}</h2>;
};
