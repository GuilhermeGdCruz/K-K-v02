import { Project, Testimonial, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Início', href: '#hero' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Projetos', href: '#portfolio' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Refúgio Porto Rico",
    category: "Lazer de Alto Padrão",
    imageUrl: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=1200&auto=format&fit=crop",
    location: "Porto Rico, PR",
    description: "Um santuário moderno às margens do Rio Paraná. Projetado para integrar a vida social com a natureza exuberante, este projeto utiliza pedra natural, madeira e grandes vãos livres para criar uma experiência de liberdade total.",
    gallery: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    id: 2,
    title: "Residência Aurora",
    category: "Residencial",
    imageUrl: "https://images.unsplash.com/photo-1600596542815-e32870110029?q=80&w=1200&auto=format&fit=crop",
    location: "Maringá, PR",
    description: "Sofisticação urbana com alma acolhedora. A Residência Aurora foi concebida para uma família que valoriza a privacidade sem abrir mão de áreas de convivência amplas e iluminadas. O destaque é a fachada minimalista e o uso inteligente da luz natural.",
    gallery: [
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    id: 3,
    title: "Clínica & Espaço Vivre",
    category: "Comercial",
    imageUrl: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop",
    location: "Maringá, PR",
    description: "Arquitetura que cura. Para a Clínica Vivre, criamos um ambiente que foge do frio hospitalar, abraçando texturas quentes e formas orgânicas para transmitir acolhimento e confiança desde a recepção até os consultórios.",
    gallery: [
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=800&auto=format&fit=crop"
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote: "Construir em Porto Rico à distância nos preocupava, mas a gestão da Kendy + Kobayashi foi impecável. O resultado é um refúgio que nossa família ama.",
    author: "Ricardo",
    projectInfo: "Casa de Veraneio",
    imageUrl: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    quote: "Eles entenderam que precisávamos de um lar funcional para as crianças, mas sem perder a sofisticação. O projeto superou o que imaginávamos.",
    author: "Ana & Pedro",
    projectInfo: "Residência Maringá",
    imageUrl: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    quote: "Minha clínica precisava transmitir credibilidade e acolhimento. O design de interiores transformou a percepção dos meus pacientes.",
    author: "Dra. Juliana",
    projectInfo: "Clínica de Estética",
    imageUrl: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

export const CATEGORIES = ['Destaques'];

export const CONTACT_INFO = {
  whatsapp: "5544997142218",
  phoneDisplay: "(44) 99714-2218",
  address: "Rua Princesa Isabel, 175 - Maringá, PR",
  email: "contato@kendykobayashi.com.br"
};