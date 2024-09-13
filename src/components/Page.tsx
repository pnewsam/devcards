import { cn } from "@/lib/utils";

export const Page = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={cn("sheet padding-10mm w-[8.5in] h-[11in] mx-auto", className)}
  >
    {children}
  </div>
);
