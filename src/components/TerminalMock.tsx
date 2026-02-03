interface TerminalMockProps {
  lines: Array<{
    text: string;
    type?: "command" | "output" | "success" | "info" | "warning" | "orange";
  }>;
  title?: string;
  minHeight?: string;
}

const TerminalMock = ({ lines, title = "Terminal", minHeight }: TerminalMockProps) => {
  const getLineClass = (type?: string) => {
    switch (type) {
      case "command":
        return "text-green-400";
      case "success":
        return "text-green-400";
      case "info":
        return "text-blue-400";
      case "warning":
        return "text-yellow-400";
      case "orange":
        return "text-[#E07A5F]";
      default:
        return "text-zinc-300";
    }
  };

  return (
    <div className="rounded-lg overflow-hidden border border-zinc-700/50 shadow-xl">
      {/* Window Header */}
      <div className="bg-zinc-800 px-4 py-2.5 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="text-zinc-500 text-xs ml-2 font-medium">{title}</span>
      </div>

      {/* Terminal Content */}
      <div
        className="bg-zinc-900 p-4 font-mono text-sm leading-relaxed overflow-x-auto"
        style={minHeight ? { minHeight } : undefined}
      >
        {lines.map((line, index) => (
          <div key={index} className={getLineClass(line.type)}>
            {line.type === "command" ? (
              <span>
                <span className="text-zinc-500">$ </span>
                {line.text}
              </span>
            ) : (
              <span className="whitespace-pre-wrap">{line.text}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TerminalMock;
