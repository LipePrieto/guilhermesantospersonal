// ==================== CONFIGURAÇÕES DO SITE ====================
// Altere os valores aqui e o site inteiro se atualiza sozinho.

const CONFIG = {

    // ---------- DADOS DE CONTATO ----------
    whatsapp: "5514988095118",
    email: "contato@nexusvital.com.br",
    nomeProfissional: "Guilherme",

    // ---------- TEXTO DO HERO ----------
    hero: {
        titulo: "Redescubra o equilíbrio do seu corpo e mente",
        subtitulo: "O método Nexus Vital foi desenvolvido para auxiliar pessoas com fibromialgia a encontrarem caminhos de bem-estar, respeitando os limites e potencialidades de cada indivíduo.",
        tag: "Consultoria especializada"
    },

    // ---------- SEÇÃO SOBRE ----------
    sobre: {
        titulo: "O que é a fibromialgia?",
        tag: "Compreendendo a condição",
        texto1: "A fibromialgia é uma síndrome clínica caracterizada por dor musculoesquelética crônica e generalizada, frequentemente acompanhada de fadiga, distúrbios do sono, alterações de memória e concentração, além de sensibilidade em pontos específicos do corpo.",
        texto2: "Estima-se que atinja cerca de 2% a 4% da população mundial, com maior prevalência entre mulheres. Por ser uma condição complexa e multifatorial, seu manejo exige uma abordagem integrativa."
    },

    // ---------- SEÇÃO MÉTODO ----------
    metodo: {
        titulo: "Método Nexus Vital",
        tag: "Nossa abordagem",
        subtitulo: "Uma visão integrativa que une ciência, acolhimento e estratégias personalizadas.",
        cards: [
            { icone: "ph-compass", titulo: "Avaliação Integral", texto: "Análise aprofundada do histórico de saúde, hábitos de vida e rotina para compreender o contexto único de cada pessoa." },
            { icone: "ph-heartbeat", titulo: "Estratégias de Movimento", texto: "Orientações baseadas em exercícios de baixo impacto, respeitando os limites corporais e promovendo fortalecimento gradual." },
            { icone: "ph-moon-stars", titulo: "Higiene do Sono", texto: "Técnicas e rotinas que favorecem o descanso noturno, essencial para a regulação da dor e do humor." },
            { icone: "ph-scales", titulo: "Equilíbrio Emocional", texto: "Práticas de mindfulness, respiração consciente e ferramentas para lidar com o estresse." },
            { icone: "ph-apple-logo", titulo: "Nutrição Funcional", texto: "Orientações alimentares que consideram alimentos anti-inflamatórios e individualidade." },
            { icone: "ph-chat-centered-text", titulo: "Acompanhamento Contínuo", texto: "Suporte próximo e ajustes periódicos do plano para evolução consistente." }
        ]
    },

    // ---------- BENEFÍCIOS ----------
    beneficios: {
        titulo: "Benefícios da consultoria",
        tag: "Por que escolher o Nexus Vital",
        itens: [
            { icone: "ph-user-circle-check", titulo: "Acompanhamento individualizado", texto: "Plano construído especificamente para você, considerando suas queixas e objetivos." },
            { icone: "ph-clock-countdown", titulo: "Otimização da rotina", texto: "Estratégias práticas para incluir hábitos saudáveis sem sobrecarregar seu dia." },
            { icone: "ph-hand-heart", titulo: "Acolhimento e escuta ativa", texto: "Espaço seguro para compartilhar desafios com empatia." },
            { icone: "ph-book-bookmark", titulo: "Educação em saúde", texto: "Compreensão sobre fibromialgia para você ser protagonista do cuidado." },
            { icone: "ph-trend-up", titulo: "Evolução mensurável", texto: "Acompanhamento de indicadores de bem-estar ao longo do tempo." },
            { icone: "ph-shield-check", titulo: "Segurança e confiança", texto: "Método baseado em evidências e constantemente atualizado." }
        ]
    },

    // ---------- LINHA DO TEMPO ----------
    passos: [
        { numero: "1", titulo: "Primeira Conversa", texto: "Agendamos uma consulta inicial para entender seu momento atual, histórico e expectativas." },
        { numero: "2", titulo: "Plano Personalizado", texto: "Estruturamos um plano de ação individualizado, com metas realistas e progressivas." },
        { numero: "3", titulo: "Acompanhamento e Evolução", texto: "Mantemos contato próximo para avaliação contínua e celebração de conquistas." }
    ],

    // ---------- DIFERENCIAIS ----------
    diferenciais: {
        titulo: "Diferenciais",
        tag: "O que nos torna únicos",
        cards: [
            { badge: "Exclusivo", titulo: "Metodologia proprietária", texto: "Construído a partir de anos de estudo e prática, integrando diversas áreas." },
            { badge: "Personalizado", titulo: "Atendimento individual", texto: "Cada pessoa recebe um plano único. Nada de receitas prontas." },
            { badge: "Completo", titulo: "Visão 360° da saúde", texto: "Olhamos para o ser humano como um todo: corpo, mente e ambiente." }
        ]
    },

    // ---------- DEPOIMENTOS ----------
    depoimentos: {
        titulo: "Depoimentos",
        tag: "Quem já conhece",
        lista: [
            { estrelas: 5, texto: "O acolhimento e a atenção aos detalhes fizeram toda a diferença na minha jornada. Hoje me sinto mais preparada.", nome: "Maria S.", info: "42 anos, São Paulo" },
            { estrelas: 5, texto: "Finalmente encontrei um profissional que entende o que é viver com fibromialgia. Método claro e humano.", nome: "Carlos A.", info: "38 anos, Belo Horizonte" },
            { estrelas: 5, texto: "O Nexus Vital me ajudou a reorganizar minha rotina e a encontrar pequenas alegrias no dia a dia.", nome: "Ana L.", info: "29 anos, Curitiba" }
        ],
        disclaimer: "Depoimentos ilustrativos para fins de demonstração."
    },

    // ---------- FAQ ----------
    faq: {
        titulo: "Perguntas e Respostas",
        tag: "Dúvidas frequentes",
        perguntas: [
            { pergunta: "O que é o método Nexus Vital?", resposta: "Consultoria individualizada que integra estratégias de movimento, sono, nutrição e equilíbrio emocional para pessoas com fibromialgia." },
            { pergunta: "Preciso de encaminhamento médico?", resposta: "Não é obrigatório, mas recomendamos manter acompanhamento médico regular. Atuamos de forma complementar." },
            { pergunta: "Como são realizadas as consultas?", resposta: "Online ou presenciais, conforme sua preferência e localização. Atendimento sempre individual." },
            { pergunta: "Em quanto tempo noto melhoras?", resposta: "Cada pessoa responde de maneira única. Focamos em construir hábitos consistentes." },
            { pergunta: "O método substitui medicamentos?", resposta: "Não. O Nexus Vital é complementar. Medicamentos devem ser discutidos com seu médico." }
        ]
    },

    // ---------- CTA FINAL ----------
    ctaFinal: {
        titulo: "Vamos conversar sobre sua jornada",
        tag: "Pronto para dar o primeiro passo?",
        texto: "Agende uma conversa sem compromisso. Será um prazer ouvir sua história e explicar como podemos apoiar você."
    },

    // ---------- CORES ----------
    cores: {
        primaria: "#1a2a3a",
        secundaria: "#4dab8a"
    },

    // ---------- RODAPÉ ----------
    footer: {
        slogan: "Consultoria em qualidade de vida para pessoas com fibromialgia.",
        redes: {
            instagram: "#",
            youtube: "#",
            linkedin: "#"
        }
    }
};
