/* ============================================================
   TRANSLATIONS
   ============================================================ */
const t = {
  pt: {
    'nav.about':        'Sobre',
    'nav.speaking':     'Palestras',
    'nav.testimonials': 'Depoimentos',
    'nav.experience':   'Experiência',
    'nav.contact':      'Contato',

    'hero.eyebrow':  'Gestão · Tecnologia · Experiência do Cliente',
    'hero.tagline':  'Com mais de 25 anos no mercado, conduzo equipes nas fronteiras da tecnologia, customer experience e produtos digitais — do varejo às telecomunicações.',
    'hero.cta.contact':  'Vamos conversar',
    'hero.cta.speaking': 'Temas de palestra',

    'badge.phd':    'Doutorando FEA-USP',
    'badge.voice':  'LinkedIn Top Voice',
    'badge.fiap':   'Professor FIAP',
    'badge.native': 'Digitalmente nativo desde 1997',

    'about.label': 'Sobre',
    'about.title': 'Combinação de skills técnicos, de estratégia e de liderança.',
    'about.intro': 'Estou no mundo de inovação e liderança há mais de 25 anos. Tenho conduzido equipes nas fronteiras da tecnologia, customer experience e produtos digitais, em indústrias diversificadas como varejo, telecomunicações, serviços, consultoria e educação.',

    'pillar.lead.title': 'Liderança',
    'pillar.lead.text':  'Amplamente reconhecido por liderança empática, técnica e eficaz. Mais de 50 recomendações no LinkedIn de colaboradores e parceiros. Elevou NPS acima de 80 em múltiplas iniciativas de CX no varejo de moda.',
    'pillar.cx.title':   'Customer Experience',
    'pillar.cx.text':    'Especialista em jornada do cliente, NPS e voz do consumidor. Reduziu contact rate de 51% para 13% em um ano na AMARO. Referência em CX no varejo omnichannel brasileiro.',
    'pillar.product.title': 'Produtos Digitais',
    'pillar.product.text':  'Mais de 100 projetos de tecnologia bem-sucedidos, impulsionando eficiência e crescimento. Top Product Management Voice no LinkedIn (novembro de 2023). Pioneiro em IA Generativa no varejo.',
    'pillar.edu.title': 'Educação & Pesquisa',
    'pillar.edu.text':  'Milhares de alunos treinados na FIAP, CommSchool e CS Academy. Mestrado Profissional em Empreendedorismo pela FEA-USP (2024). Doutorando pesquisando IA Generativa no varejo (2025–2029).',

    'stats.years':     'anos de experiência',
    'stats.students':  'alunos e colaboradores treinados',
    'stats.companies': 'empresas atendidas',

    'speaking.label':  'Palestras & Workshops',
    'speaking.title':  'Temas que domino e que transformam audiências.',
    'speaking.intro':  'Atuo como palestrante em eventos corporativos, universidades e conferências de tecnologia e varejo. Cada palestra combina pesquisa acadêmica com casos reais de grandes empresas brasileiras.',
    'speaking.cta':    'Solicitar proposta de palestra',

    'testi.label': 'Depoimentos',
    'testi.title': 'O que dizem por aí',
    'testi.intro': 'São mais de 50 recomendações disponíveis no LinkedIn. Veja algumas delas abaixo.',
    'testi.cta':   'Ver todas no LinkedIn',

    'pubs.label': 'Publicações',
    'pubs.title': 'Pesquisa acadêmica com aplicação prática.',

    'exp.label': 'Experiência',
    'exp.title': 'Onde construí resultados de verdade.',

    'job.riachuelo.role':    'Diretor de Tecnologia — eCommerce, CRM, Fidelidade, Omnichannel & Sistemas de Marketing',
    'job.riachuelo.context': 'Top 20 varejistas do Brasil · +BRL 10B de receita anual · organização técnica de 70 pessoas',
    'job.riachuelo.l1': 'Reconstruiu a base tecnológica do eCommerce em seis pilares: estabilidade, arquitetura, dados, automação, segurança e time.',
    'job.riachuelo.l2': 'Liderou o lançamento do Riachuelo Fidelidade e a estreia na TikTok Shop — primeiro grande varejista de moda do Brasil no social commerce.',
    'job.riachuelo.l3': 'Reduziu custo de cloud em BRL 220K/mês via FinOps; implementou DORA metrics e KPIs de observabilidade.',
    'job.amaro.role':    'CTO (2023–24) / Diretor de Produto (2021–22) / Head de CX & Data (2017–20)',
    'job.amaro.context': 'Varejista D2C omnichannel pioneiro no Brasil · moda, beleza e casa',
    'job.amaro.l1': 'Lançou o AMARO Marketplace com cashback, live shopping, PIX e ship-from-store — 4.9 na App Store e 4.5 no Google Play.',
    'job.amaro.l2': 'Implementou IA Generativa com OpenAI APIs, aumentando eficiência operacional em 35% (2023).',
    'job.amaro.l3': 'Construiu CRM Omnichannel + Cockpit de Atendimento: reduziu contact rate de 51% → 13% e elevou o NPS de 67 → 82.',
    'job.mutant.role': 'Consultor de Customer Experience',
    'job.mutant.l1':   'Liderou 8 especialistas melhorando eficiência de autoatendimento em operação de BRL 160MM/ano.',
    'job.mutant.l2':   'Mapeou +150 oportunidades de CX em IVR, SMS, apps, hotsites e chatbots.',
    'job.nextel.role': 'Gerente de Voz do Cliente',
    'job.nextel.l1':   'Liderou 56 profissionais de CX, aumentando o NPS em 9pp.',
    'job.nextel.l2':   'Criou o "Atendimento ReSolucionário", treinando +3K agentes e reduzindo reincidência de chamadas em 8pp.',

    'edu.label':      'Formação',
    'edu.title':      'Sempre aprendendo.',
    'edu.phd.title':  'Doutorado em Administração de Empresas',
    'edu.phd.sub':    'FEA-USP (PPGA) · Pesquisa: IA Generativa no Varejo',
    'edu.msc.title':  'Mestrado Profissional (MSc)',
    'edu.msc.sub':    'FEA-USP · Pesquisa sobre modelos D2C / DNVB',
    'edu.ds.title':   'Nanodegree em Design Sprint',
    'edu.tera.title': 'Liderança em Produtos Digitais',
    'edu.mba.title':  'MBA em Gestão Empresarial',
    'edu.bsc.title':  'Bacharelado em Sistemas de Informação',

    'content.label':  'Conteúdo',
    'content.title':  'Falando sobre digital, CX e inovação.',
    'content.intro':  'Cortes e apresentações sobre digital, customer experience e startups em conferências e podcasts. Mais conteúdo na CS Academy, +Clientes Podcast, Amigos do CX e podcast Conexão Customer.',
    'content.video1': 'IA Generativa no Varejo — Palestra completa',
    'content.video2': 'Customer Experience como vantagem competitiva',
    'content.video3': 'D2C e novos modelos de negócio digital',

    'contact.label': 'Contato',
    'contact.title': 'Vamos conversar!',
    'contact.sub':   'Aberto a oportunidades em liderança, produtos digitais, experiência do cliente, palestras e colaborações acadêmicas.',

    'form.name':    'Seu nome',
    'form.company': 'Empresa',
    'form.email':   'E-mail para retorno',
    'form.phone':   'Telefone de contato',
    'form.consent': 'Concordo em receber retorno do Wellington para tratar de consultoria e educação.',
    'form.submit':  'Receber Contato',
    'form.success': 'Mensagem enviada! Wellington entrará em contato em breve.',

    'footer.since': 'Digitalmente nativo desde 1997.',
  },

  en: {
    'nav.about':        'About',
    'nav.speaking':     'Speaking',
    'nav.testimonials': 'Testimonials',
    'nav.experience':   'Experience',
    'nav.contact':      'Contact',

    'hero.eyebrow':  'Management · Technology · Customer Experience',
    'hero.tagline':  'With 25+ years in the market, I lead teams at the forefront of technology, customer experience and digital products — across retail, telecom, and beyond.',
    'hero.cta.contact':  "Let's talk",
    'hero.cta.speaking': 'Speaking topics',

    'badge.phd':    'Ph.D. Candidate — FEA-USP',
    'badge.voice':  'LinkedIn Top Voice',
    'badge.fiap':   'FIAP Lecturer',
    'badge.native': 'Digitally native since 1997',

    'about.label': 'About',
    'about.title': 'A unique blend of technical skills, strategy and leadership.',
    'about.intro': "I've been in the world of innovation and leadership for over 25 years. I've led teams at the frontier of technology, customer experience and digital products across diverse industries including retail, telecom, services, consulting and education.",

    'pillar.lead.title': 'Leadership',
    'pillar.lead.text':  'Widely recognized for empathetic, technical and effective leadership. 50+ LinkedIn recommendations from colleagues and partners. Elevated NPS above 80 in multiple CX initiatives in fashion retail.',
    'pillar.cx.title':   'Customer Experience',
    'pillar.cx.text':    'Expert in customer journey, NPS and voice of the customer. Reduced contact rate from 51% to 13% in one year at AMARO. Reference in CX in Brazilian omnichannel retail.',
    'pillar.product.title': 'Digital Products',
    'pillar.product.text':  '100+ successful technology projects driving efficiency and growth. Top Product Management Voice on LinkedIn (November 2023). Pioneer in Generative AI for retail.',
    'pillar.edu.title': 'Education & Research',
    'pillar.edu.text':  'Thousands of students trained at FIAP, CommSchool and CS Academy. Professional Master\'s in Entrepreneurship from FEA-USP (2024). Ph.D. candidate researching Generative AI in Retail (2025–2029).',

    'stats.years':     'years of experience',
    'stats.students':  'students & collaborators trained',
    'stats.companies': 'companies served',

    'speaking.label':  'Speaking & Workshops',
    'speaking.title':  'Topics I master that transform audiences.',
    'speaking.intro':  'I speak at corporate events, universities and technology & retail conferences. Each talk combines academic research with real cases from major Brazilian companies.',
    'speaking.cta':    'Request a speaking proposal',

    'testi.label': 'Testimonials',
    'testi.title': 'What people say',
    'testi.intro': '50+ recommendations available on LinkedIn. See some of them below.',
    'testi.cta':   'See all on LinkedIn',

    'pubs.label': 'Publications',
    'pubs.title': 'Academic research with practical application.',

    'exp.label': 'Experience',
    'exp.title': 'Where I built real results.',

    'job.riachuelo.role':    'Tech Director — eCommerce, CRM, Loyalty, Omnichannel & Marketing Systems',
    'job.riachuelo.context': 'Top 20 Brazilian retailers · BRL 10B+ annual revenue · 70-member technical organization',
    'job.riachuelo.l1': 'Rebuilt eCommerce tech foundation across six pillars: stability, architecture, data, automation, security and team.',
    'job.riachuelo.l2': 'Led the launch of Riachuelo Loyalty and debut on TikTok Shop — first major Brazilian fashion retailer on social commerce.',
    'job.riachuelo.l3': 'Reduced cloud costs by BRL 220K/month via FinOps; implemented DORA metrics and observability KPIs.',
    'job.amaro.role':    'CTO (2023–24) / Product Director (2021–22) / Head of CX & Data (2017–20)',
    'job.amaro.context': 'Pioneer D2C omnichannel retailer in Brazil · fashion, beauty & home',
    'job.amaro.l1': 'Launched AMARO Marketplace with cashback, live shopping, PIX and ship-from-store — 4.9 on App Store and 4.5 on Google Play.',
    'job.amaro.l2': 'Implemented Generative AI with OpenAI APIs, boosting operational efficiency by 35% (2023).',
    'job.amaro.l3': 'Built Omnichannel CRM + Support Cockpit: reduced contact rate from 51% → 13% and elevated NPS from 67 → 82.',
    'job.mutant.role': 'Customer Experience Consultant',
    'job.mutant.l1':   'Led 8 experts improving self-service efficiency in a BRL 160MM/year operation.',
    'job.mutant.l2':   'Mapped 150+ CX opportunities across IVR, SMS, apps, hotsites and chatbots.',
    'job.nextel.role': 'Voice of Customer Manager',
    'job.nextel.l1':   'Led 56 CX professionals, increasing NPS by 9pp.',
    'job.nextel.l2':   'Created "ReSolutionary Attendance", training 3K+ agents and reducing repeat calls by 8pp.',

    'edu.label':      'Education',
    'edu.title':      'Always learning.',
    'edu.phd.title':  'Ph.D. Candidate in Business Management',
    'edu.phd.sub':    'FEA-USP (PPGA) · Research: Generative AI in Retail',
    'edu.msc.title':  'Master of Science (MSc)',
    'edu.msc.sub':    'FEA-USP · Research on D2C / DNVB Business Models',
    'edu.ds.title':   'Design Sprint Nanodegree',
    'edu.tera.title': 'Digital Product Leadership Program',
    'edu.mba.title':  'MBA in Business Management',
    'edu.bsc.title':  'Bachelor in Information Systems',

    'content.label':  'Content',
    'content.title':  'Speaking about digital, CX and innovation.',
    'content.intro':  'Clips and presentations on digital, customer experience and startups at conferences and podcasts. More content at CS Academy, +Clientes Podcast, Amigos do CX and Conexão Customer podcast.',
    'content.video1': 'Generative AI in Retail — Full talk',
    'content.video2': 'Customer Experience as a competitive advantage',
    'content.video3': 'D2C and new digital business models',

    'contact.label': 'Contact',
    'contact.title': "Let's talk!",
    'contact.sub':   'Open to conversations about technology leadership, digital products, customer experience, speaking engagements and academic collaboration.',

    'form.name':    'Your name',
    'form.company': 'Company',
    'form.email':   'E-mail for reply',
    'form.phone':   'Phone number',
    'form.consent': 'I agree to receive a reply from Wellington regarding consulting and education services.',
    'form.submit':  'Get in Touch',
    'form.success': 'Message sent! Wellington will get back to you soon.',

    'footer.since': 'Digitally native since 1997.',
  },
};

/* ============================================================
   SPEAKING TOPICS DATA
   ============================================================ */
const topics = {
  pt: [
    {
      tag: 'Inteligência Artificial',
      title: 'IA Generativa no Varejo',
      desc: 'Como a IA está redefinindo operações, personalização e experiência do cliente no comércio. Casos reais de implementação com OpenAI e Amazon AI na AMARO e Riachuelo.',
    },
    {
      tag: 'Customer Experience',
      title: 'CX como Vantagem Competitiva',
      desc: 'Metodologias de NPS, Voz do Cliente e jornada do consumidor que transformam métricas em cultura organizacional e impacto em receita.',
    },
    {
      tag: 'Produto Digital',
      title: 'Omnichannel & Comércio Digital',
      desc: 'Da estratégia à execução: como construir produtos digitais que integram canais físicos e digitais, com foco em conversão, retenção e engajamento.',
    },
    {
      tag: 'Liderança',
      title: 'Liderança de Times de Alta Performance',
      desc: 'Como construir, engajar e escalar equipes de tecnologia. DORA metrics, cultura de entrega, FinOps e a liderança empática que gera resultados.',
    },
    {
      tag: 'Pesquisa Acadêmica',
      title: 'D2C e Novos Modelos de Negócio',
      desc: 'Resultados da pesquisa de Mestrado na FEA-USP: como marcas nativas digitais (DNVB) estão disrupting o varejo tradicional no Brasil e no mundo.',
    },
    {
      tag: 'Social Commerce',
      title: 'TikTok Shop & Social Commerce',
      desc: 'O futuro do varejo é social. Estratégias, métricas e aprendizados do lançamento da Riachuelo — a primeira grande varejista de moda brasileira no TikTok Shop.',
    },
  ],
  en: [
    {
      tag: 'Artificial Intelligence',
      title: 'Generative AI in Retail',
      desc: 'How AI is redefining operations, personalization and customer experience in commerce. Real implementation cases with OpenAI and Amazon AI at AMARO and Riachuelo.',
    },
    {
      tag: 'Customer Experience',
      title: 'CX as a Competitive Advantage',
      desc: 'NPS, Voice of the Customer and consumer journey methodologies that transform metrics into organizational culture and revenue impact.',
    },
    {
      tag: 'Digital Product',
      title: 'Omnichannel & Digital Commerce',
      desc: 'From strategy to execution: how to build digital products that integrate physical and digital channels, focused on conversion, retention and engagement.',
    },
    {
      tag: 'Leadership',
      title: 'Leading High-Performance Tech Teams',
      desc: 'How to build, engage and scale technology teams. DORA metrics, delivery culture, FinOps and empathetic leadership that drives results.',
    },
    {
      tag: 'Academic Research',
      title: 'D2C & New Business Models',
      desc: 'Findings from the FEA-USP Master\'s research: how digitally native vertical brands (DNVB) are disrupting traditional retail in Brazil and worldwide.',
    },
    {
      tag: 'Social Commerce',
      title: 'TikTok Shop & Social Commerce',
      desc: 'The future of retail is social. Strategies, metrics and learnings from Riachuelo\'s launch — the first major Brazilian fashion retailer on TikTok Shop.',
    },
  ],
};

/* ============================================================
   TESTIMONIALS DATA
   ============================================================ */
const testimonials = [
  {
    tag: 'Varejo & Tecnologia',
    title: 'Tecnologia para varejo',
    quote: 'Wellington é um profissional excepcional, com quem tive o prazer de trabalhar em projetos como Customer Insights, Jornada do cliente, provador RFID e novos sistemas de Checkout. Seu conhecimento em Experiência do cliente, Atendimento, UX e Digital é impressionante.',
    author: 'Gerente de Treinamento de Varejo',
  },
  {
    tag: 'Customer Experience',
    title: 'Necessidades de um time de suporte',
    quote: 'Tive o prazer de trabalhar com ele por mais de três anos, colaborando em vários projetos de CX que posicionaram a empresa como "melhor em sua classe" no varejo. Fiquei impressionado com a habilidade do Wellington de lidar com desafios complexos de tecnologia mantendo o foco nos clientes e em suas experiências.',
    author: 'Diretor de Atendimento',
  },
  {
    tag: 'Liderança',
    title: 'Sinergia entre as áreas',
    quote: 'Foi um dos melhores líderes que tive em minha carreira. Ele está sempre disposto a atingir o objetivo como uma equipe. Trabalha em todas as áreas — tecnologia, negócios, operações e CX. Todos gostam de trabalhar com ele porque sempre ouve e te estimula a ir além.',
    author: 'Gerente de Data Analytics',
  },
  {
    tag: 'Inspiração',
    title: 'Técnica + Liderança',
    quote: 'Tem uma compreensão profunda das necessidades do cliente e sabe como criar produtos que atendem às expectativas. Em uma análise de perfil de gestores de alta performance, o nome dele estava entre os mais amados — com melhor resultado de performance vs. cultura e feedback positivo dos times.',
    author: 'Gerente de People Analytics',
  },
  {
    tag: 'Conteúdo',
    title: 'Mais vozes do conhecimento',
    quote: 'Um professor que pesquisou outros nomes de referências no mercado e diferentes vozes além das óbvias. Isso é muito importante para sair dos mesmos pensamentos e repetitividade em aula. Trouxe livros escritos por mulheres e profissionais mulheres referências — gerando reflexão real.',
    author: 'Aluno de MBA',
  },
  {
    tag: 'Confiança',
    title: 'Projetos complexos em varejo',
    quote: 'Suas contribuições para a gestão de stakeholders durante projetos complexos, como a reformulação completa da plataforma de e-commerce, foram excepcionais, demonstrando expertise e dedicação. O estilo de comunicação acolhedor e inclusivo do Wellington promoveu uma cultura de confiança e respeito.',
    author: 'Diretor de Logística',
  },
];

/* ============================================================
   PUBLICATIONS DATA
   ============================================================ */
const publications = [
  {
    venue: 'HSM Management · Mai–Jun 2022',
    title: 'DNVB: o modelo de negócio nativo digital e vertical',
    meta: 'Artigo sobre como marcas D2C estão transformando o varejo brasileiro.',
  },
  {
    venue: 'REGE — Revista de Gestão da USP · Set 2023',
    title: "Amaro's business model innovation: DNVB or platform?",
    meta: 'Pesquisa acadêmica publicada na revista indexada da USP.',
  },
  {
    venue: 'Ed. Rokkets · Dez 2020',
    title: 'Experiência do Cliente — Capítulo 18',
    meta: 'Co-autor do capítulo sobre tecnologia e experiência digital.',
  },
];

/* ============================================================
   LANGUAGE ENGINE
   ============================================================ */
let currentLang = localStorage.getItem('lang') || 'pt';

function setLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

  // Translate static elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[lang][key] !== undefined) el.textContent = t[lang][key];
  });

  // Update active lang button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Re-render dynamic sections
  renderTopics(lang);
  renderTestimonials();
  renderPublications();

  localStorage.setItem('lang', lang);
}

/* ============================================================
   RENDER DYNAMIC SECTIONS
   ============================================================ */
function renderTopics(lang) {
  const grid = document.getElementById('topics-grid');
  if (!grid) return;
  grid.innerHTML = topics[lang].map(item => `
    <div class="topic fade-up">
      <span class="topic__tag">${item.tag}</span>
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
    </div>
  `).join('');
  observeFadeUps();
}

function renderTestimonials() {
  const grid = document.getElementById('testimonials-grid');
  if (!grid) return;
  grid.innerHTML = testimonials.map(item => `
    <div class="testi fade-up">
      <span class="testi__tag">${item.tag}</span>
      <p class="testi__title">${item.title}</p>
      <p class="testi__quote">${item.quote}</p>
      <p class="testi__author">${item.author}</p>
    </div>
  `).join('');
  observeFadeUps();
}

function renderPublications() {
  const grid = document.getElementById('pubs-grid');
  if (!grid) return;
  grid.innerHTML = publications.map(item => `
    <div class="pub fade-up">
      <span class="pub__venue">${item.venue}</span>
      <p class="pub__title">${item.title}</p>
      <p class="pub__meta">${item.meta}</p>
    </div>
  `).join('');
  observeFadeUps();
}

/* ============================================================
   SCROLL ANIMATIONS
   ============================================================ */
let intersectionObserver;

function observeFadeUps() {
  if (intersectionObserver) {
    document.querySelectorAll('.fade-up:not(.visible)').forEach(el => {
      intersectionObserver.observe(el);
    });
    return;
  }
  intersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        intersectionObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-up').forEach(el => {
    intersectionObserver.observe(el);
  });
}

function initFadeUps() {
  document.querySelectorAll(
    '.pillar, .stat-big, .timeline__item, .edu__card, .video-placeholder'
  ).forEach(el => el.classList.add('fade-up'));
  observeFadeUps();
}

/* ============================================================
   NAV SCROLL
   ============================================================ */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ============================================================
   MOBILE MENU
   ============================================================ */
const burger   = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

/* ============================================================
   CONTACT FORM
   ============================================================ */
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const consent = document.getElementById('consent');
  if (!consent.checked) return;

  const successEl = document.getElementById('formSuccess');
  successEl.textContent = t[currentLang]['form.success'];
  successEl.classList.add('visible');
  this.reset();

  setTimeout(() => successEl.classList.remove('visible'), 6000);
});

/* ============================================================
   LANG BUTTONS
   ============================================================ */
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLang(btn.dataset.lang));
});

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  setLang(currentLang);
  initFadeUps();
});
