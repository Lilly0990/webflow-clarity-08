import { Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PricingPlan {
  name: string;
  price: string;
  period?: string;
  description?: string;
  features: string[];
  highlighted?: boolean;
  cta?: {
    label: string;
    url: string;
  };
}

interface PricingTableProps {
  plans: PricingPlan[];
  title?: string;
}

const PricingTable = ({ plans, title }: PricingTableProps) => {
  if (!plans || plans.length === 0) return null;

  return (
    <div className="my-12">
      {title && (
        <h2 id="pricing" className="text-2xl md:text-3xl font-bold mb-8 text-center">
          {title}
        </h2>
      )}

      <div className={`grid gap-6 ${
        plans.length === 2 ? 'md:grid-cols-2' :
        plans.length >= 3 ? 'md:grid-cols-3' : 'md:grid-cols-1'
      }`}>
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative bg-card border rounded-lg p-6 flex flex-col ${
              plan.highlighted
                ? 'border-primary shadow-lg shadow-primary/10'
                : 'border-border'
            }`}
          >
            {plan.highlighted && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  Popular
                </span>
              </div>
            )}

            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-3xl font-bold">{plan.price}</span>
                {plan.period && (
                  <span className="text-muted-foreground">/{plan.period}</span>
                )}
              </div>
              {plan.description && (
                <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
              )}
            </div>

            <ul className="space-y-3 mb-6 flex-grow">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            {plan.cta && (
              <Button
                variant={plan.highlighted ? 'default' : 'outline'}
                className="w-full"
                asChild
              >
                <a href={plan.cta.url}>{plan.cta.label}</a>
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingTable;
