import ProjectCard from "../sub/ProjectCard";

export default function Projects(){
    return(
        <section className="flex flex-col items-center justify-center py-20 md:mt-20" id = "projects">
            
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                My Projects
            </h1>
            <div className="h-full w-full flex flex-col items-center md:flex-row gap-10 px-10">
                <ProjectCard 
                src="/NextPortfolio.png" 
                title="Next Js Portfolio"
                description="This portfolio is made with Next.js using framer-motion and different libraries."              
                />
                <ProjectCard 
                src="/simplecv.png" 
                title="Simple Portfolio Website"
                description="Simple Portfolio made with React using shadcn ui libraries"              
                />
                <ProjectCard 
                src="/live-talk.png" 
                title="Live Talk Website"
                description="Live-Talk Website that navigate you to an call translator for Pakistani Lnaguages using LLM."              
                />
            </div>
        </section>
    )
}