import { cn } from "@/lib/utils";

export const Flashcard = ({
  children,
  id,
  className = "",
}: {
  children: React.ReactNode;
  id: number;
  className?: string;
}) => {
  return (
    <div
      id={id.toString()}
      className={cn(
        "bg-white border border-gray-300 p-2 w-[5in] h-[3.5in]",
        className
      )}
    >
      {children}
    </div>
  );
};
