export const Note = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="text-xs border border-l-2 border-l-yellow-500 border-yellow-300 pl-2 py-1 italic">
      {children}
    </div>
  );
};
