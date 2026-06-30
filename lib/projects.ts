export interface Project {
  id: string;
  slug: string;
  title: string;
  category: 'residential' | 'educational' | 'commercial' | 'housing';
  image: string;
  description: string;
  shortDescription: string;
  details: {
    location: string;
    year: string;
    scope: string;
    team: string[];
    materials: string[];
  };
  gallery: string[];
  challenge: string;
  solution: string;
  results: string[];
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'luxury-hillside-residence',
    title: 'Luxury Hillside Residence',
    category: 'residential',
    image: '/portfolio-1.png',
    description: 'A stunning contemporary residence designed for a private client seeking harmony between luxury and nature. This high-end residential project showcases our commitment to custom design and environmental sensitivity.',
    shortDescription: 'Contemporary luxury home with panoramic views',
    details: {
      location: 'Coastal Hills, California',
      year: '2023',
      scope: 'Complete architectural design and site planning',
      team: ['Principal Architect', 'Landscape Designer', 'Structural Engineer'],
      materials: ['Sustainable timber', 'Low-E glass', 'Natural stone', 'Recycled steel'],
    },
    gallery: ['/portfolio-1.png', '/featured-residential.png'],
    challenge:
      'The client wanted a luxury residence that would blend seamlessly with the hillside landscape while providing modern amenities and exceptional views.',
    solution:
      'We created a multi-level design that follows the natural topography, minimizing site disruption. Floor-to-ceiling windows frame the landscape while innovative passive heating and cooling systems reduce energy consumption.',
    results: [
      '35% reduction in energy usage',
      'LEED Silver certification',
      'Preserved 80% of native vegetation',
      'Featured in Architectural Digest',
    ],
  },
  {
    id: '2',
    slug: 'modern-educational-complex',
    title: 'Modern Educational Complex',
    category: 'educational',
    image: '/portfolio-2.png',
    description: 'A forward-thinking educational facility designed to inspire learning and collaboration. This project demonstrates our expertise in creating functional, innovative spaces for educational institutions.',
    shortDescription: 'Contemporary learning environment with flexible spaces',
    details: {
      location: 'Metropolitan Area, New York',
      year: '2022',
      scope: 'Master planning and full architectural design',
      team: ['Design Principal', 'Educational Planner', 'MEP Engineer', 'Sustainability Consultant'],
      materials: ['Recycled composite panels', 'High-performance glazing', 'FSC-certified wood', 'Permeable paving'],
    },
    gallery: ['/portfolio-2.png', '/featured-educational.png'],
    challenge:
      'Design an educational facility that accommodates diverse learning styles and future growth while maintaining sustainability standards.',
    solution:
      'We created modular, flexible spaces with reconfigurable walls and multi-purpose areas. Natural light optimization and biophilic design elements enhance learning outcomes and student well-being.',
    results: [
      'Accommodates 800+ students',
      'Net-zero water consumption',
      '45% improvement in student engagement metrics',
      '25% construction cost savings through efficient design',
    ],
  },
  {
    id: '3',
    slug: 'urban-commercial-tower',
    title: 'Urban Commercial Tower',
    category: 'commercial',
    image: '/portfolio-3.png',
    description: 'A sleek commercial tower that redefines urban workspace. This project exemplifies our ability to create premium commercial environments that prioritize employee well-being and operational efficiency.',
    shortDescription: 'Premium mixed-use commercial development',
    details: {
      location: 'Downtown Business District, Texas',
      year: '2023',
      scope: 'Master plan, architectural design, and interior strategy',
      team: ['Design Director', 'Commercial Specialist', 'Structural Engineer', 'Facade Specialist'],
      materials: ['Double-skin facade', 'Recycled aluminum', 'Smart glass technology', 'Reclaimed brick accents'],
    },
    gallery: ['/portfolio-3.png', '/featured-corporate.png'],
    challenge:
      'Create a commanding commercial presence that attracts top-tier tenants while meeting strict urban design guidelines and sustainability requirements.',
    solution:
      'Our design features an innovative double-skin facade that reduces energy costs, collaborative work environments, and public plaza that activates the street level.',
    results: [
      '95% pre-leasing within 6 months',
      '40% energy efficiency above code',
      'LEED Platinum certification',
      'Award-winning architectural design',
    ],
  },
  {
    id: '4',
    slug: 'sustainable-housing-development',
    title: 'Sustainable Housing Development',
    category: 'housing',
    image: '/portfolio-4.png',
    description: 'An innovative housing development that proves sustainability and affordability can coexist. This project showcases our dedication to creating communities that enhance residents\' quality of life.',
    shortDescription: 'Mixed-income sustainable community',
    details: {
      location: 'Urban Regeneration Zone, Colorado',
      year: '2022',
      scope: 'Master planning and 150-unit residential design',
      team: ['Master Planner', 'Residential Architect', 'Landscape Architect', 'Traffic Engineer'],
      materials: ['Prefabricated panels', 'Green roofs', 'Solar panels', 'Rainwater harvesting systems'],
    },
    gallery: ['/portfolio-4.png', '/featured-residential.png'],
    challenge:
      'Design an affordable, sustainable housing community that creates a sense of place and encourages resident interaction while minimizing environmental impact.',
    solution:
      'We created a mixed-income development with shared community spaces, green corridors, and diverse unit types. Prefabrication reduced construction time by 30% and costs by 25%.',
    results: [
      '150 units across multiple affordability levels',
      '60% energy reduction vs. standard construction',
      'Zero Net Carbon certification',
      '20% construction cost savings',
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectsByCategory(
  category: Project['category']
): Project[] {
  return projects.filter((project) => project.category === category);
}
