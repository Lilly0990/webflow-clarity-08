import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { toast } from "sonner";

interface CodeBlockProps {
  code: string;
  label?: string;
}

const CodeBlock = ({ code, label }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      toast.success("Скопійовано!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Помилка копіювання");
    }
  };

  return (
    <div className="group relative">
      {label && (
        <div className="text-sm text-muted-foreground mb-2 font-medium">
          {label}
        </div>
      )}
      <div className="relative bg-zinc-900 rounded-lg overflow-hidden">
        <pre className="p-4 pr-14 overflow-x-auto">
          <code className="text-sm text-zinc-100 font-mono whitespace-pre-wrap break-all">
            {code}
          </code>
        </pre>
        <button
          onClick={handleCopy}
          className="absolute top-3 right-3 p-2 rounded-md bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-zinc-100 transition-all"
          aria-label="Копіювати код"
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-400" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </button>
      </div>
    </div>
  );
};

export default CodeBlock;
