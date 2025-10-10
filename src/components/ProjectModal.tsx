import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";

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
            <DialogContent className="max-w-4xl overflow-hidden">
                <DialogHeader>
                    <DialogTitle className="text-3xl">{project.title}</DialogTitle>
                    <DialogDescription className="text-base">{project.shortDesc}</DialogDescription>
                </DialogHeader>
                
                    <div className="space-y-6 mt-4 max-h-[80vh] overflow-auto no-scrollbar p-2">
                    {/* Image Carousel */}
                    <Carousel className="w-full">
                        <CarouselContent>
                            {project.images.map((image, index) => (
                                <CarouselItem key={index}>
                                        <div className="aspect-video overflow-hidden rounded-lg">
                                        <img
                                            src={image}
                                            alt={`${project.title} Imagen ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>

                    {/* Long Description */}
                    {project.longDesc && (
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Descripción Detallada</h3>
                            <div className="text-muted-foreground space-y-2">
                                {project.longDesc
                                    .replace(/\\n/g, "\n")
                                    .split(/\n{2,}/)
                                    .map((para) => para.trim())
                                    .filter(Boolean)
                                    .map((para, idx) => (
                                        <p key={idx}>{para}</p>
                                    ))}
                            </div>
                        </div>
                    )}

                    {/* Features */}
                    {project.features && project.features.length > 0 && (
                        <div>
                            <h3 className="text-xl font-semibold mb-3">Características Principales</h3>
                            <ul className="space-y-2">
                                {project.features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <span className="text-muted-foreground">•</span>
                                        <span className="text-muted-foreground">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Technologies */}
                    <div>
                        <h3 className="text-xl font-semibold mb-3">Tecnologías Utilizadas</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-4 py-2 text-sm rounded-full bg-primary/10 text-primary"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4">
                        {project.github && (
                            <Button
                                variant="outline"
                                className="flex-1"
                                onClick={() => window.open(project.github, "_blank")}
                            >
                                <Github className="h-4 w-4 mr-2" />
                                Ver Código
                            </Button>
                        )}
                        {project.demo && (
                            <Button
                                variant="outline"
                                className="flex-1"
                                onClick={() => window.open(project.demo, "_blank")}
                            >
                                <ExternalLink className="h-4 w-4 mr-2" />
                                Ver Demo en Vivo
                            </Button>
                        )}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};