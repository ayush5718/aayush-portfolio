"use client";

import BlurFade from "@/components/animations/blur-fade";
import { HackathonCard } from "@/components/hackathon-card";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function Activities() {
    return (
        <section id="activities">
            <div className="space-y-12 w-full py-12">
                <BlurFade delay={BLUR_FADE_DELAY * 13}>
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                                Extra-Curriculars
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                Leadership & Creative Pursuits
                            </h2>
                            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Beyond writing code, I am deeply involved in my college community. From leading the photography club to organizing large-scale events and competing in hackathons, I thrive in collaborative environments and enjoy taking on leadership roles.
                            </p>
                        </div>
                    </div>
                </BlurFade>
                <BlurFade delay={BLUR_FADE_DELAY * 14}>
                    <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
                        {DATA.activities.map((project, id) => (
                            <BlurFade
                                key={project.title + project.dates}
                                delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                            >
                                <HackathonCard
                                    title={project.title}
                                    description={project.description}
                                    location={project.location}
                                    dates={project.dates}
                                    image={project.image}
                                    links={project.links}
                                />
                            </BlurFade>
                        ))}
                    </ul>
                </BlurFade>
            </div>
        </section>
    );
}
