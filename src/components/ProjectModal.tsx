import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Button } from "./ui/button";
import { ExternalLink, Github, CheckCircle2 } from "lucide-react";
import { Badge } from "./ui/badge";

interface ProjectModalProps {
    project: {
        title: string;
        shortDesc: string;
        longDesc?: string;
        tags: string[];
        images: string[];
        github?: string;
        demo?: string;
        features?: string[];
    };
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export const ProjectModal = ({ project, open, onOpenChange }: ProjectModalProps) => {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-4xl w-[95vw] max-h-[90vh] flex flex-col p-0 overflow-hidden">
                
                <DialogHeader className="px-6 py-4 border-b shrink-0">
                    <DialogTitle className="text-2xl md:text-3xl font-bold text-primary">
                        {project.title}
                    </DialogTitle>
                    <DialogDescription className="text-base mt-1">
                        {project.shortDesc}
                    </DialogDescription>
                </DialogHeader>
                
                <div className="flex-1 overflow-y-auto p-6 space-y-8">
                    
                    <div className="relative rounded-xl overflow-hidden bg-muted/20 border border-border">
                        <Carousel className="w-full">
                            <CarouselContent>
                                {project.images.map((image, index) => (
                                    <CarouselItem key={index}>
                                        <div className="flex items-center justify-center h-[300px] md:h-[450px] w-full bg-black/5 dark:bg-white/5">
                                            <img
                                                src={image}
                                                alt={`${project.title} vista ${index + 1}`}
                                                className="max-h-full max-w-full object-contain shadow-sm"
                                            />
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="left-2 bg-background/80 hover:bg-background border-none" />
                            <CarouselNext className="right-2 bg-background/80 hover:bg-background border-none" />
                        </Carousel>
                    </div>

                    {project.longDesc && (
                        <div className="animate-fade-in">
                            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                                💡 Sobre el proyecto
                            </h3>
                            <div className="text-muted-foreground leading-relaxed space-y-4 text-sm md:text-base">
                                {project.longDesc.split('\n').map((paragraph, idx) => 
                                    paragraph.trim() && (
                                        <p key={idx} className="text-justify">
                                            {paragraph}
                                        </p>
                                    )
                                )}
                            </div>
                        </div>
                    )}

                    {project.features && project.features.length > 0 && (
                        <div>
                            <h3 className="text-lg font-semibold mb-3">Características Principales</h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {project.features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <div>
                        <h3 className="text-lg font-semibold mb-3">Stack Tecnológico</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <Badge 
                                    key={tag} 
                                    variant="secondary" 
                                    className="px-3 py-1 text-sm bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20"
                                >
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="p-6 border-t bg-background shrink-0 flex flex-col sm:flex-row gap-3">
                    {project.demo && (
                        <Button
                            className="flex-1 gap-2 shadow-lg hover:scale-[1.02] transition-transform"
                            onClick={() => window.open(project.demo, "_blank")}
                        >
                            <ExternalLink className="h-4 w-4" />
                            Ver Demo en Vivo
                        </Button>
                    )}
                    {project.github && (
                        <Button
                            variant="outline"
                            className="flex-1 gap-2"
                            onClick={() => window.open(project.github, "_blank")}
                        >
                            <Github className="h-4 w-4" />
                            Ver Código
                        </Button>
                    )}
                </div>

            </DialogContent>
        </Dialog>
    );
};