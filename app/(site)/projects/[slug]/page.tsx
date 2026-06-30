import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, MapPin, Calendar, Users, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { getProject, projects } from '@/lib/projects'
import { notFound } from 'next/navigation'

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata(props: ProjectPageProps) {
  const params = await props.params
  const project = getProject(params.slug)

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.title} | Expressions Architects`,
    description: project.description,
  }
}

export default async function ProjectDetailPage(props: ProjectPageProps) {
  const params = await props.params
  const project = getProject(params.slug)

  if (!project) {
    notFound()
  }

  const relatedProjects = projects.filter((p) => p.id !== project.id).slice(0, 3)

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Image */}
      <section className="relative h-96 md:h-[500px] w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-12">
          <div className="max-w-7xl mx-auto w-full">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-3 py-1 mb-4">
              <span className="text-xs font-semibold text-accent capitalize">{project.category}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">{project.title}</h1>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {/* Description */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Project Overview</h2>
              <p className="text-lg text-muted-foreground">{project.description}</p>
            </div>

            {/* Gallery */}
            {project.gallery.length > 0 && (
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.gallery.map((image, idx) => (
                    <div key={idx} className="relative h-64 rounded-lg overflow-hidden">
                      <Image
                        src={image}
                        alt={`${project.title} gallery ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Challenge & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
                <p className="text-muted-foreground">{project.challenge}</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Our Solution</h3>
                <p className="text-muted-foreground">{project.solution}</p>
              </div>
            </div>

            {/* Results */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Results & Impact</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.results.map((result, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-accent/10 border border-accent/20 rounded-lg p-4">
                    <Zap className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <p className="text-sm font-medium">{result}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            {/* Project Details Card */}
            <div className="bg-card border border-border rounded-lg p-8 mb-8 sticky top-24">
              <h3 className="text-xl font-bold mb-6">Project Details</h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-semibold">{project.details.location}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Calendar className="w-5 h-5 text-accent flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">Year Completed</p>
                    <p className="font-semibold">{project.details.year}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Zap className="w-5 h-5 text-accent flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">Project Scope</p>
                    <p className="font-semibold">{project.details.scope}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Users className="w-5 h-5 text-accent flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">Team</p>
                    <div className="space-y-1">
                      {project.details.team.map((member, idx) => (
                        <p key={idx} className="font-semibold text-sm">
                          {member}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="border-t border-border pt-6">
                  <p className="text-sm text-muted-foreground mb-3">Materials & Techniques</p>
                  <div className="space-y-2">
                    {project.details.materials.map((material, idx) => (
                      <div
                        key={idx}
                        className="inline-block bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium mr-2 mb-2"
                      >
                        {material}
                      </div>
                    ))}
                  </div>
                </div>

                <Link href="/contact">
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    Discuss Your Project
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              More <span className="text-accent">Featured Projects</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProjects.map((relatedProject) => (
                <Link key={relatedProject.slug} href={`/projects/${relatedProject.slug}`}>
                  <div className="group cursor-pointer">
                    <div className="relative h-64 rounded-lg overflow-hidden mb-4">
                      <Image
                        src={relatedProject.image}
                        alt={relatedProject.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-3 py-1 mb-2">
                      <span className="text-xs font-semibold text-accent capitalize">{relatedProject.category}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                      {relatedProject.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{relatedProject.shortDescription}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Ready to Start Your <span className="text-accent">Project?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 text-balance">
            Let&apos;s discuss how we can bring your architectural vision to life with the same excellence you see here.
          </p>
          <Link href="/contact">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 rounded-full text-base">
              Schedule a Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
