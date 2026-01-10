"use client";

import BlurFade from "@/components/animations/blur-fade";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function Skills() {
    return (
        <section id="skills">
            <div className="flex min-h-0 flex-col gap-y-6">
                <BlurFade delay={BLUR_FADE_DELAY * 9}>
                    <h2 className="text-xl font-bold">Skills</h2>
                </BlurFade>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(DATA.skills).map(([category, skills], categoryId) => (
                        <BlurFade
                            key={category}
                            delay={BLUR_FADE_DELAY * 10 + categoryId * 0.05}
                        >
                            <div className="space-y-2 p-4 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/20 transition-colors">
                                <h3 className="text-sm font-semibold capitalize text-muted-foreground flex items-center gap-2">
                                    <span className="size-1.5 rounded-full bg-primary" />
                                    {category}
                                </h3>
                                <div className="flex flex-wrap gap-1">
                                    {skills.map((skill, id) => (
                                        <Badge
                                            key={skill}
                                            variant="secondary"
                                            className="px-2 py-0.5 text-[11px] font-medium bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                                        >
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </BlurFade>
                    ))}
                </div>
            </div>
        </section>
    );
}
