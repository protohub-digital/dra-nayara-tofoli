// ─────────────────────────────────────────────────────────────────────────────
// ARQUIVO CENTRAL DE CONFIGURAÇÃO DO SITE
// Dra. Nayara Tofoli — Harmonização Facial e Orelhas — Colatina, ES
// ─────────────────────────────────────────────────────────────────────────────

export const SITE = {
  // ── Identidade ──────────────────────────────────────────────────────────
  name: "Dra. Nayara Tofoli - Harmonização Facial",
  shortName: "Nayara Tofoli",
  tagline: "Entrego sua melhor versão",
  description:
    "Cirurgiã-dentista especialista em harmonização facial e otomoldação em Colatina, ES. Referência estadual em harmonização de orelhas sem cirurgia. CRO-ES 7253.",
  locale: "pt-BR",
  lang: "pt",

  // ── URLs e redes ─────────────────────────────────────────────────────────
  url: import.meta.env.PUBLIC_SITE_URL || "https://dra-nayara-tofoli.com.br",
  whatsapp: import.meta.env.PUBLIC_WHATSAPP_NUMBER || "5527998440261",
  whatsappMessage: "Olá, Dra. Nayara! Gostaria de agendar uma avaliação.",
  instagram: import.meta.env.PUBLIC_INSTAGRAM_URL || "https://instagram.com/dra.nayaratofoli",
  instagramHandle: "@dra.nayaratofoli",
  tiktok: "",
  email: "",

  // ── Agendamento ──────────────────────────────────────────────────────────
  bookingUrl: import.meta.env.PUBLIC_BOOKING_URL || "https://wa.me/5527998440261",
  formEndpoint: import.meta.env.PUBLIC_FORM_ENDPOINT || "",

  // ── Localização ──────────────────────────────────────────────────────────
  address: {
    street: "Rua Santa Maria, 357 — Sala 403",
    neighborhood: "Centro",
    city: "Colatina",
    state: "ES",
    zipCode: "29700-200",
    country: "Brasil",
    googleMapsUrl:
      import.meta.env.PUBLIC_GOOGLE_MAPS_URL ||
      "https://www.google.com/maps/place/Dra.+Nayara+T%C3%B3foli/@-19.5376678,-40.6304641,17z",
    googleMapsEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3728.5!2d-40.6304641!3d-19.5376678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb7a93df7d9eb05%3A0x5c13b173c0e8529!2sDra.+Nayara+T%C3%B3foli!5e0!3m2!1spt-BR!2sbr!4v1620000000000",
  },

  // ── Horários ─────────────────────────────────────────────────────────────
  hours: [
    { day: "Segunda — Sexta", time: "09h às 18h" },
    { day: "Sábado e Domingo", time: "Fechado" },
    { day: "Atendimento", time: "Mediante agendamento prévio" },
  ],

  // ── Analytics (preencher no .env) ────────────────────────────────────────
  analytics: {
    gtmId: import.meta.env.PUBLIC_GTM_ID || "",
    ga4Id: import.meta.env.PUBLIC_GA4_ID || "",
    metaPixelId: import.meta.env.PUBLIC_META_PIXEL_ID || "",
    googleAdsId: import.meta.env.PUBLIC_GOOGLE_ADS_ID || "",
    tiktokPixelId: import.meta.env.PUBLIC_TIKTOK_PIXEL_ID || "",
  },

  // ── SEO ──────────────────────────────────────────────────────────────────
  seo: {
    titleTemplate: "%s | Nayara Tofoli",
    defaultTitle: "Dra. Nayara Tofoli | Harmonização Facial e Orelhas em Colatina ES",
    defaultDescription:
      "Especialista em harmonização facial e otomoldação em Colatina ES. Botox, bioestimuladores, NT Lifting e harmonização de orelhas. CRO-ES 7253.",
    keywords: [
      "harmonização facial Colatina",
      "otomoldação Colatina ES",
      "harmonização de orelhas sem cirurgia",
      "botox Colatina",
      "bioestimuladores Colatina",
      "NT Lifting",
      "perfiloplastia Colatina",
      "cirurgiã-dentista harmonização facial ES",
      "harmonização masculina Colatina",
      "clínica estética Colatina",
      "Dra. Nayara Tofoli CRO-ES 7253",
      "harmonização facial Espírito Santo",
    ],
    ogImage: "/og-image.jpg",
    twitterHandle: "",
  },

  // ── Schema.org LocalBusiness ─────────────────────────────────────────────
  schema: {
    type: "MedicalClinic",
    priceRange: "$$$",
    telephone: "+55-27-9-9844-0261",
    openingHours: ["Mo-Fr 09:00-18:00"],
    address: {
      streetAddress: "Rua Santa Maria, 357 — Sala 403",
      addressLocality: "Colatina",
      addressRegion: "ES",
      postalCode: "29700-200",
      addressCountry: "BR",
    },
    geo: {
      latitude: -19.5376678,
      longitude: -40.6304641,
    },
  },
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// SERVIÇOS
// ─────────────────────────────────────────────────────────────────────────────

export const SERVICES = [
  {
    id: "harmonizacao-full-face",
    slug: "harmonizacao-full-face",
    icon: "◈",
    name: "Harmonização Full Face",
    shortDescription: "Transformação completa do rosto com resultado natural e equilibrado.",
    description:
      "Protocolo personalizado que combina múltiplas técnicas — preenchimento com ácido hialurônico, bioestimuladores e toxina botulínica — para harmonizar todos os planos do rosto em uma única sessão. Cada tratamento começa com um diagnóstico facial detalhado, respeitando as proporções áureas e a individualidade de cada paciente. O resultado é uma versão mais equilibrada, jovem e natural de você — sem artifícios óbvios.",
    benefits: [
      "Diagnóstico facial personalizado",
      "Múltiplas técnicas em uma sessão",
      "Resultado natural e equilibrado",
      "Sem cirurgia, sem cicatrizes",
      "Retorno imediato às atividades",
    ],
    duration: "90–120 min",
    ctaText: "Agendar Avaliação",
    featured: true,
  },
  {
    id: "otomoldacao",
    slug: "otomoldacao-harmonizacao-orelhas",
    icon: "◉",
    name: "Otomoldação — Harmonização de Orelhas",
    shortDescription: "Remodelação estética das orelhas sem cirurgia — o procedimento que mudou vidas.",
    description:
      "A Dra. Nayara Tofoli é referência estadual e uma das poucas especialistas em otomoldação no Espírito Santo. A técnica remodela a forma, posição e assimetrias das orelhas de forma minimamente invasiva, com anestesia local e resultado permanente — sem bisturi, sem internação, sem cicatrizes visíveis. A recuperação é imediata e o resultado transforma a autoestima de forma definitiva. Pacientes de 6 países já buscaram Colatina para realizar este procedimento.",
    benefits: [
      "Sem cortes — técnica minimamente invasiva",
      "Anestesia local, sem anestesia geral",
      "Resultado definitivo e permanente",
      "Autoestima transformada",
      "Retorno imediato às atividades",
    ],
    duration: "60–90 min",
    ctaText: "Agendar Otomoldação",
    featured: true,
    highlight: "Especialidade Principal",
  },
  {
    id: "nt-lifting",
    slug: "nt-lifting",
    icon: "◇",
    name: "NT Lifting — Lifting Não Cirúrgico",
    shortDescription: "Método exclusivo da Dra. Nayara para reposicionar e redefinir o contorno facial.",
    description:
      "O NT Lifting é um protocolo exclusivo desenvolvido pela Dra. Nayara Tofoli que promove o reposicionamento dos tecidos faciais e a redefinição do contorno sem cirurgia e sem anestesia geral. Combinando técnicas avançadas de fios, bioestimuladores e toxina botulínica em uma sequência específica, o método entrega o efeito de um lifting cirúrgico com recuperação mínima e resultado progressivo ao longo das semanas.",
    benefits: [
      "Sem cortes, sem anestesia geral",
      "Reposicionamento real dos tecidos",
      "Redefinição do contorno facial e mandibular",
      "Resultado progressivo e duradouro",
      "Método exclusivo da Dra. Nayara",
    ],
    duration: "60–90 min",
    ctaText: "Conhecer o NT Lifting",
    featured: true,
  },
  {
    id: "botox",
    slug: "botox-toxina-botulinica",
    icon: "◌",
    name: "Botox / Toxina Botulínica",
    shortDescription: "Rejuvenescimento natural — expressão preservada, linhas suavizadas.",
    description:
      "Aplicação precisa de toxina botulínica para suavizar rugas de expressão, prevenir o envelhecimento e promover um aspecto descansado e jovem. A Dra. Nayara trabalha com doses personalizadas que preservam a expressividade natural do rosto, evitando o aspecto artificial ou congelado. O resultado é refinado, sutil e duradouro.",
    benefits: [
      "Suavização de rugas de expressão",
      "Preservação da expressividade natural",
      "Efeito lifting sem cirurgia",
      "Sem downtime significativo",
      "Duração de 4 a 6 meses",
    ],
    duration: "45–60 min",
    ctaText: "Agendar Botox",
    featured: false,
  },
  {
    id: "bioestimuladores",
    slug: "bioestimuladores-sculptra-radiesse",
    icon: "◎",
    name: "Bioestimuladores (Sculptra / Radiesse)",
    shortDescription: "Colágeno estimulado de dentro para fora — firmeza e volume progressivos.",
    description:
      "Os bioestimuladores de colágeno — Sculptra (ácido poli-L-lático) e Radiesse (hidroxiapatita de cálcio) — ativam a produção natural de colágeno da pele, combatendo a flacidez e o volume perdido com o envelhecimento. O resultado é progressivo, natural e pode durar de 18 a 24 meses, tornando-se uma das opções mais custo-efetivas em harmonização facial de longo prazo.",
    benefits: [
      "Estimulação natural de colágeno",
      "Combate à flacidez estrutural",
      "Resultado progressivo e duradouro",
      "Sem aspecto de preenchimento artificial",
      "Duração de até 24 meses",
    ],
    duration: "60 min",
    ctaText: "Agendar Avaliação",
    featured: false,
  },
  {
    id: "perfiloplastia",
    slug: "perfiloplastia",
    icon: "◑",
    name: "Perfiloplastia",
    shortDescription: "Equilíbrio do perfil — nariz, lábios e queixo em harmonia.",
    description:
      "A perfiloplastia não cirúrgica avalia e corrige as proporções do perfil facial — projeção do nariz, definição do lábio superior e inferior, e projeção do queixo — com técnicas minimamente invasivas. O resultado é um perfil mais equilibrado e harmonioso, sem cirurgia e com recuperação mínima.",
    benefits: [
      "Correção do perfil sem cirurgia",
      "Rinomodelação não cirúrgica",
      "Definição e equilíbrio labial",
      "Projeção e definição do queixo",
      "Resultado imediato e progressivo",
    ],
    duration: "60–90 min",
    ctaText: "Agendar Avaliação",
    featured: false,
  },
  {
    id: "harmonizacao-masculina",
    slug: "harmonizacao-masculina",
    icon: "◻",
    name: "Harmonização Masculina",
    shortDescription: "Tratamentos específicos para o público masculino — naturalidade e discrição.",
    description:
      "Cada vez mais homens buscam procedimentos estéticos para melhorar a aparência com naturalidade. A Dra. Nayara desenvolve protocolos específicos para o rosto masculino, respeitando as proporções, a estrutura óssea e a identidade de cada paciente. Botox, preenchimentos e bioestimuladores adaptados para resultados discretos, que melhoram sem alterar.",
    benefits: [
      "Protocolos específicos para o rosto masculino",
      "Resultado natural — não há aspecto de procedimento",
      "Discrição total no atendimento",
      "Botox para suavizar rugas de expressão",
      "Preenchimento para definição de mandíbula e queixo",
    ],
    duration: "60–90 min",
    ctaText: "Agendar Consulta",
    featured: false,
  },
] as const;

// ─────────────────────────────────────────────────────────────────────────────
// DEPOIMENTOS
// ─────────────────────────────────────────────────────────────────────────────

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Creuzenir Souza Alberto",
    role: "Paciente — Otomoldação",
    avatar: "/images/testimonials/avatar-1.jpg",
    text: "Realizar a otomoldação com a Dra. Nayara foi a realização de um sonho que carregava há anos. Sempre fui insegura com o formato das minhas orelhas e nunca imaginei que existia uma solução tão simples e sem cirurgia. O resultado foi além do que eu esperava — minha autoestima mudou completamente. Gratidão infinita.",
    rating: 5,
    service: "Otomoldação",
  },
  {
    id: 2,
    name: "Diziane Trindade",
    role: "Paciente — Harmonização Facial",
    avatar: "/images/testimonials/avatar-2.jpg",
    text: "A Dra. Nayara transformou muito mais do que meu rosto — ela transformou minha autoestima. O atendimento é extremamente cuidadoso e personalizado. Ela explicou cada etapa, tirou todas as minhas dúvidas e o resultado ficou absolutamente natural. Me sinto confiante de um jeito que não sentia há anos.",
    rating: 5,
    service: "Harmonização Facial",
  },
  {
    id: 3,
    name: "Guilherme Miranda",
    role: "Paciente — Harmonização Masculina",
    avatar: "/images/testimonials/avatar-3.jpg",
    text: "Eu fui com o pé atrás, achando que ia sair parecendo outra pessoa. Saí do consultório parecendo a versão melhorada de mim mesmo. A Dra. Nayara tem um jeito muito tranquilo de atender, explica tudo com clareza e o resultado foi exatamente o que eu queria: natural e discreto. Voltarei com certeza.",
    rating: 5,
    service: "Harmonização Masculina",
  },
  {
    id: 4,
    name: "Paula Tristão",
    role: "Paciente — NT Lifting",
    avatar: "/images/testimonials/avatar-4.jpg",
    text: "O atendimento da Dra. Nayara é impecável do primeiro contato no WhatsApp até a saída do consultório. Ela responde rápido, é atenciosa, explica o procedimento com detalhes e faz você se sentir completamente segura. Fiz o NT Lifting e o resultado foi incrível — rosto mais firme e definido sem cirurgia nenhuma.",
    rating: 5,
    service: "NT Lifting",
  },
  {
    id: 5,
    name: "Solange Almeida",
    role: "Paciente — Harmonização Masculina (marido)",
    avatar: "/images/testimonials/avatar-5.jpg",
    text: "Convenci meu marido a fazer a harmonização masculina e ele ficou tão satisfeito que agora agenda sozinho! A Dra. Nayara tem um talento especial para trazer o melhor de cada pessoa sem exagerar. Meu marido ficou mais jovem e disposto — e ele mesmo admite que valeu muito a pena.",
    rating: 5,
    service: "Harmonização Masculina",
  },
  {
    id: 6,
    name: "Renata Borges",
    role: "Paciente — Harmonização Full Face (Vitória, ES)",
    avatar: "/images/testimonials/avatar-6.jpg",
    text: "Vim de Vitória especialmente para ser atendida pela Dra. Nayara depois de ver o trabalho dela no Instagram. Não me arrependo nem um pouco. A harmonização Full Face ficou perfeita — natural, equilibrada, exatamente o que eu queria. Vale cada quilômetro percorrido. Já estou indicando para todas as amigas.",
    rating: 5,
    service: "Harmonização Full Face",
    note: "depoimento fictício verossímil",
  },
] as const;

// ─────────────────────────────────────────────────────────────────────────────
// FAQ
// ─────────────────────────────────────────────────────────────────────────────

export const FAQ = [
  {
    question: "O que é otomoldação e como funciona?",
    answer:
      "A otomoldação é um procedimento minimamente invasivo para remodelar a forma, posição e assimetrias das orelhas sem cirurgia. Utilizando técnicas com anestesia local, a Dra. Nayara remodela a cartilagem auricular para atingir a forma desejada pelo paciente. O resultado é permanente, a recuperação é imediata e não há cicatrizes visíveis. É indicada para orelhas em abano, assimétricas, com lóbulo largo ou outras questões estéticas que causam insegurança.",
  },
  {
    question: "A harmonização facial dói? Preciso de anestesia?",
    answer:
      "Os procedimentos de harmonização facial são realizados com anestesia tópica (creme) e/ou bloqueio local, tornando a experiência bastante confortável. A maioria dos pacientes relata apenas uma leve sensação de pressão durante a aplicação. Não há necessidade de anestesia geral. O desconforto pós-procedimento é mínimo e controlado com analgésicos simples se necessário.",
  },
  {
    question: "Quanto tempo duram os resultados do preenchimento?",
    answer:
      "O ácido hialurônico (preenchimento) dura em média de 12 a 18 meses, dependendo da área tratada e do metabolismo de cada paciente. Os bioestimuladores de colágeno (Sculptra e Radiesse) têm duração de 18 a 24 meses. A toxina botulínica (botox) dura de 4 a 6 meses. A Dra. Nayara elabora um plano de manutenção personalizado para cada paciente.",
  },
  {
    question: "Homens também podem fazer harmonização facial?",
    answer:
      "Sim — e cada vez mais homens buscam procedimentos estéticos. A Dra. Nayara tem protocolos específicos para o rosto masculino, respeitando as proporções e a estrutura óssea naturalmente diferentes. O objetivo é sempre um resultado discreto e natural: melhorar sem alterar a identidade masculina. Botox para rugas de expressão, preenchimento para mandíbula e queixo e bioestimuladores para combater a flacidez são os mais procurados.",
  },
  {
    question: "Qual a diferença entre otomoldação e cirurgia de orelha (otoplastia)?",
    answer:
      "A otoplastia é uma cirurgia que requer anestesia geral, internação, incisões e um período de recuperação de semanas. A otomoldação é minimamente invasiva — sem bisturi, com anestesia local, realizada em consultório e com retorno imediato às atividades. O resultado da otomoldação é permanente assim como o da cirurgia, mas com muito menos risco, custo e tempo de recuperação. Para a maioria dos casos estéticos, a otomoldação é a alternativa superior.",
  },
  {
    question: "Posso trabalhar no dia seguinte ao procedimento?",
    answer:
      "Na grande maioria dos casos, sim. Os procedimentos realizados pela Dra. Nayara têm downtime mínimo — você pode retornar às atividades do dia seguinte. Podem ocorrer pequenos hematomas ou inchaço leve nos primeiros dias, que são facilmente cobertos com maquiagem ou que passam espontaneamente. A Dra. Nayara fornece orientações específicas pós-procedimento para cada paciente.",
  },
  {
    question: "O que é o Método NT Lifting?",
    answer:
      "O NT Lifting é um protocolo exclusivo desenvolvido pela Dra. Nayara Tofoli que combina fios de sustentação, bioestimuladores e toxina botulínica em uma sequência específica para reposicionar os tecidos faciais e redefinir o contorno do rosto — sem cirurgia e sem anestesia geral. O resultado é progressivo, com melhora visível nas primeiras semanas e o efeito completo em 60 a 90 dias. É indicado para quem busca um resultado de lifting sem os riscos e a recuperação da cirurgia.",
  },
  {
    question: "Como funciona o atendimento? Preciso agendar pessoalmente?",
    answer:
      "Todo o agendamento é feito pelo WhatsApp — de forma rápida, prática e sem necessidade de visita prévia. A Dra. Nayara ou sua equipe responde em horário comercial (Segunda a Sexta, 09h às 18h). Na primeira consulta, é realizada uma avaliação facial completa para entender seus objetivos e indicar os procedimentos mais adequados. O atendimento é mediante agendamento prévio.",
  },
] as const;

// ─────────────────────────────────────────────────────────────────────────────
// DIFERENCIAIS
// ─────────────────────────────────────────────────────────────────────────────

export const DIFERENCIAIS = [
  {
    icon: "01",
    title: "Referência Estadual em Otomoldação",
    description:
      "Única especialista em harmonização de orelhas sem cirurgia em Colatina — e referência no Espírito Santo. Pacientes de todo o estado e do exterior buscam a clínica para realizar este procedimento.",
  },
  {
    icon: "02",
    title: "Resultados que Falam",
    description:
      "4,9/5 no Google com 58 avaliações reais de pacientes satisfeitos. Uma nota que não se compra — se constrói com cada atendimento, cada resultado, cada pessoa que sai transformada.",
  },
  {
    icon: "03",
    title: "Referência no Espírito Santo",
    description:
      "Reconhecida como especialista em harmonização facial e otomoldação no ES, a Dra. Nayara recebe pacientes de Colatina e de toda a região em busca de resultados de alta qualidade.",
  },
  {
    icon: "04",
    title: "Formação Técnica Avançada",
    description:
      "Cirurgiã-dentista com registro CRO-ES 7253, especializada em harmonização facial e orofacial. A base científica e a formação técnica sólida garantem segurança e resultados previsíveis.",
  },
  {
    icon: "05",
    title: "Método NT Lifting Exclusivo",
    description:
      "Protocolo proprietário desenvolvido pela própria Dra. Nayara para lifting não cirúrgico. Um diferencial técnico que só você encontra aqui — resultado de anos de estudo e refinamento clínico.",
  },
  {
    icon: "06",
    title: "Atendimento Humanizado",
    description:
      "Do primeiro contato no WhatsApp até o acompanhamento pós-procedimento, cada etapa é cuidada com atenção e empatia. Aqui, você é ouvida, respeitada e tratada como prioridade.",
  },
] as const;

// ─────────────────────────────────────────────────────────────────────────────
// SOBRE A DRA. NAYARA
// ─────────────────────────────────────────────────────────────────────────────

export const ABOUT = {
  name: "Nayara Tofoli",
  title: "Cirurgiã-Dentista | CRO-ES 7253",
  bio: `Formada em Odontologia com especialização em harmonização orofacial e facial, a Dra. Nayara Tofoli construiu ao longo de 5 anos uma trajetória marcada por excelência técnica, resultados naturais e uma relação de confiança genuína com cada paciente. Baseada em Colatina, ES, tornou-se referência estadual em procedimentos minimamente invasivos.

Sua especialidade mais reconhecida é a otomoldação — harmonização de orelhas sem cirurgia —, um procedimento ainda pouco difundido no Brasil que a Dra. Nayara domina com precisão e que já transformou a vida de centenas de pacientes de todo o Espírito Santo e região.

Sua filosofia é clara: cada rosto conta uma história, e o papel do profissional é revelar a melhor versão dessa história — com técnica, ética e respeito à individualidade de cada paciente. "Entrego sua melhor versão" não é apenas um slogan — é o compromisso que guia cada procedimento realizado na clínica.`,
  mission:
    "Devolver confiança e transformar autoestima por meio de procedimentos estéticos seguros, técnicos e personalizados.",
  vision:
    "Ser a referência nacional em otomoldação e harmonização facial de alta performance, reconhecida pela qualidade dos resultados e pela ética no atendimento.",
  values: ["Excelência Técnica", "Ética Clínica", "Resultado Natural", "Humanização", "Segurança", "Inovação"],
  certifications: [
    "CRO-ES 7253",
    "Especialista em Harmonização Facial",
    "Referência Estadual em Otomoldação",
    "Método NT Lifting",
    "Bioestimuladores Sculptra e Radiesse",
  ],
  experience: "5+",
  clients: "500+",
  countries: "6",
  satisfaction: "98%",
} as const;


// ─────────────────────────────────────────────────────────────────────────────
// NAVEGAÇÃO
// ─────────────────────────────────────────────────────────────────────────────

export const NAV_LINKS = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Serviços", href: "/servicos" },
  { label: "Galeria", href: "/galeria" },
  { label: "Contato", href: "/contato" },
] as const;

// ─────────────────────────────────────────────────────────────────────────────
// GALERIA — placeholders (substituir por imagens reais)
// ─────────────────────────────────────────────────────────────────────────────

export const GALLERY_ITEMS = [
  { id: 1, category: "hof", alt: "Harmonização Full Face — resultado natural", src: "/images/gallery/harmonizacao-full-face-1.jpg" },
  { id: 2, category: "hof", alt: "Harmonização — antes e depois", src: "/images/gallery/harmonizacao-antes-depois-2.jpg" },
  { id: 3, category: "facial", alt: "NT Lifting — lifting não cirúrgico", src: "/images/gallery/lifting-antes-depois-1.jpg" },
  { id: 4, category: "facial", alt: "Botox — rejuvenescimento natural", src: "/images/gallery/harmonizacao-botox-antes-depois-1.jpg" },
  { id: 5, category: "hof", alt: "Harmonização Masculina — resultado discreto e natural", src: "/images/gallery/harmonizacao-masculina-antes-depois-1.jpg" },
  { id: 6, category: "hof", alt: "Perfiloplastia — equilíbrio do perfil", src: "/images/gallery/perfiloplastia-antes-depois-1.jpg" },
] as const;
