import { Lightbulb } from 'lucide-react';

interface KeyTakeawaysProps {
  takeaways: string[];
}

const KeyTakeaways = ({ takeaways }: KeyTakeawaysProps) => {
  if (!takeaways || takeaways.length === 0) return null;

  return (
    <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Lightbulb className="w-5 h-5 text-primary" />
        <h4 className="font-bold text-lg">Key Takeaways</h4>
      </div>
      <ul className="space-y-3">
        {takeaways.map((takeaway, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-medium flex items-center justify-center flex-shrink-0 mt-0.5">
              {index + 1}
            </span>
            <span className="text-foreground leading-relaxed">{takeaway}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KeyTakeaways;
