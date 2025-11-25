import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Contact = () => {
  return (
    <section className="section-padding container-custom bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to Start Your Webflow Project?</h2>
          <p className="text-xl text-muted-foreground">
            Tell us about your project — we respond within 24 hours with realistic timelines and an honest assessment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-fade-in-left">
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
            <form className="space-y-6">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" className="mt-2" />
              </div>
              
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" className="mt-2" />
              </div>
              
              <div>
                <Label htmlFor="project-type">Project type</Label>
                <Select>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="new">New site</SelectItem>
                    <SelectItem value="redesign">Redesign</SelectItem>
                    <SelectItem value="integrations">Integrations</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="message">Tell us about your project</Label>
                <Textarea 
                  id="message" 
                  placeholder="Describe your project..." 
                  className="mt-2 min-h-[150px]" 
                />
              </div>
              
              <Button size="lg" className="w-full glow-effect">Send Message</Button>
            </form>
          </div>

          <div className="animate-fade-in-right">
            <h3 className="text-2xl font-bold mb-6">Or reach us directly</h3>
            <div className="space-y-8">
              <div className="bg-card border border-border rounded-lg p-6">
                <h4 className="font-bold mb-2">Email</h4>
                <a href="mailto:hello@webf.love" className="text-primary hover:underline">
                  hello@webf.love
                </a>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6">
                <h4 className="font-bold mb-2">Response time</h4>
                <p className="text-muted-foreground">Within 24 hours</p>
              </div>
              
              <Button size="lg" variant="outline" className="w-full">
                Start a Conversation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
