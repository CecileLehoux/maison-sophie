export type Soin = {
  slug: string;
  title: string;
  tagline: string;
  excerpt: string;
  image: string;
  heroImage: string;
  color: string;
  intro: string;
  benefits: { icon: string; title: string; desc: string }[];
  howItWorks: { step: string; title: string; desc: string }[];
  reassurance: string[];
  faq: { q: string; a: string }[];
  cta: string;
};

export const soins: Soin[] = [
  {
    slug: "laser",
    title: "Épilation Laser",
    tagline: "Une technologie performante, un protocole sécurisé.",
    excerpt:
      "Réalisée avec un laser diode et la rigueur du milieu paramédical, l'épilation laser chez Maison Sophie offre des résultats durables grâce à un parcours de soin entièrement personnalisé.",
    image: "/images/soin-laser.jpg",
    heroImage: "/images/soin-laser.jpg",
    color: "#C9A5A0",
    intro:
      "Chez Maison Sophie, l'épilation laser est réalisée avec un laser diode, une technologie reconnue pour son efficacité dans la réduction durable de la pilosité. Chaque séance est réalisée avec la rigueur issue du milieu paramédical : analyse de la peau, réglages adaptés et respect de protocoles stricts. Chaque peau et chaque pilosité sont différentes — c'est pourquoi l'épilation laser chez Maison Sophie repose sur un parcours de soin personnalisé.",
    benefits: [
      {
        icon: "✦",
        title: "Laser diode certifié",
        desc: "Une technologie reconnue pour son efficacité dans la réduction durable de la pilosité, adaptée à tous les phototypes.",
      },
      {
        icon: "✦",
        title: "Rigueur paramédicale",
        desc: "Mon parcours d'infirmière me permet d'apporter à chaque séance la rigueur, la précision et l'attention nécessaires.",
      },
      {
        icon: "✦",
        title: "Protocole personnalisé",
        desc: "Analyse de votre peau, de votre phototype et de votre pilosité avant chaque protocole pour des résultats optimaux.",
      },
      {
        icon: "✦",
        title: "Interlocutrice unique",
        desc: "Un suivi personnalisé avec la même praticienne à chaque séance, pour adapter les réglages et optimiser les résultats.",
      },
    ],
    howItWorks: [
      {
        step: "01",
        title: "Le diagnostic",
        desc: "Avant de débuter les séances, un rendez-vous de diagnostic est réalisé afin d'analyser votre peau, votre phototype et votre pilosité, et de définir le protocole adapté. Ce rendez-vous est gratuit et obligatoire.",
      },
      {
        step: "02",
        title: "Les séances",
        desc: "Les séances sont espacées de 6 à 8 semaines afin de respecter le cycle de croissance du poil. La zone est préparée avec précision et les paramètres du laser sont ajustés à chaque séance pour garantir sécurité, efficacité et confort.",
      },
      {
        step: "03",
        title: "Le suivi",
        desc: "Les résultats sont visibles progressivement : le poil repousse plus fin et plus rare. Vous bénéficiez d'un suivi personnalisé avec une interlocutrice unique, permettant d'adapter les réglages et d'optimiser les résultats séance après séance.",
      },
      {
        step: "04",
        title: "Un soin en toute confiance",
        desc: "Mon parcours d'infirmière me permet d'apporter à chaque séance la rigueur, la précision et l'attention nécessaires. L'objectif : vous proposer une épilation laser efficace, sécurisée et adaptée à votre peau.",
      },
    ],
    reassurance: [
      "Consultation de diagnostic gratuite et obligatoire avant la première séance",
      "Protocole personnalisé selon votre phototype et votre pilosité",
      "Paramètres du laser ajustés à chaque séance",
      "Suivi avec une interlocutrice unique du début à la fin",
      "Rigueur et protocoles issus du milieu paramédical",
    ],
    faq: [
      {
        q: "La consultation est-elle vraiment gratuite ?",
        a: "Oui, complètement gratuite et sans engagement. Elle est aussi obligatoire avant la première séance : elle nous permet d'analyser votre peau, votre phototype et votre pilosité afin de définir le protocole le plus adapté.",
      },
      {
        q: "Combien de séances sont nécessaires ?",
        a: "En moyenne, 6 à 8 séances sont nécessaires pour un résultat optimal, espacées de 6 à 8 semaines pour respecter le cycle de croissance du poil. Le nombre exact dépend de votre type de peau, de la couleur et de la densité de vos poils.",
      },
      {
        q: "Est-ce douloureux ?",
        a: "La sensation varie selon les zones et la sensibilité de chacun. La plupart des personnes décrivent une légère chaleur ou un picotement bref. Les paramètres sont ajustés à chaque séance pour garantir confort et efficacité.",
      },
      {
        q: "Peut-on traiter toutes les zones du corps ?",
        a: "Oui — aisselles, bras, jambes, maillot, dos, torse, visage... Nous traitons la grande majorité des zones avec des paramètres ajustés selon la sensibilité et la pilosité de chaque zone.",
      },
    ],
    cta: "Réserver ma consultation laser gratuite",
  },
  {
    slug: "estheled",
    title: "EstheLED",
    tagline: "La lumière au service de votre peau.",
    excerpt:
      "La photobiomodulation LED stimule les mécanismes naturels de la peau. Développée et fabriquée à Toulouse, la technologie EstheLED agit en douceur pour régénérer, apaiser et illuminer.",
    image: "/images/soin-estheled.jpg",
    heroImage: "/images/soin-estheled.jpg",
    color: "#44b4e7",
    intro:
      "Chez Maison Sophie, les soins LED reposent sur la photobiomodulation, une technologie avancée qui utilise la lumière pour stimuler les mécanismes naturels de la peau. La technologie EstheLED, développée et fabriquée à Toulouse, diffuse différentes longueurs d'onde lumineuses qui agissent directement au cœur des cellules. Contrairement aux technologies chauffantes, la LED agit en douceur et sans agresser la peau, en stimulant les processus naturels de régénération.",
    benefits: [
      {
        icon: "✦",
        title: "Effet régénérant",
        desc: "Stimulation des fibroblastes et de la production de collagène pour une peau plus ferme et lissée.",
      },
      {
        icon: "✦",
        title: "Effet anti-inflammatoire",
        desc: "Apaisement des rougeurs et des peaux sensibles grâce à l'action lumineuse sur les tissus.",
      },
      {
        icon: "✦",
        title: "Effet réparateur",
        desc: "Soutien de la régénération cellulaire et protection contre le stress oxydatif.",
      },
      {
        icon: "✦",
        title: "Soin visage & cheveux",
        desc: "Applicable sur le visage, le dos, le cuir chevelu et certaines zones du corps selon votre besoin.",
      },
    ],
    howItWorks: [
      {
        step: "01",
        title: "Le principe de la photobiomodulation",
        desc: "Nos cellules contiennent des structures sensibles à la lumière appelées chromophores, situées dans les mitochondries. Lorsqu'elles absorbent la lumière émise par les LED, elles augmentent leur production d'ATP — l'énergie cellulaire — relançant ainsi l'activité biologique des tissus.",
      },
      {
        step: "02",
        title: "Les effets sur la peau",
        desc: "La photobiomodulation déclenche plusieurs réponses biologiques : effet régénérant (collagène), anti-inflammatoire (rougeurs), réparateur (régénération cellulaire) et antioxydant. Elle peut accompagner imperfections, rougeurs, signes de l'âge et manque d'éclat.",
      },
      {
        step: "03",
        title: "Une technologie douce et polyvalente",
        desc: "La photobiomodulation est un soin non invasif, indolore et sans éviction sociale. Elle peut être réalisée sur le visage, le dos, le cuir chevelu et certaines zones du corps.",
      },
      {
        step: "04",
        title: "Un protocole en cure",
        desc: "Pour des résultats optimaux, les séances sont réalisées en cure afin d'accompagner durablement les mécanismes naturels de la peau. Une consultation gratuite est réalisée avant la première séance pour définir le protocole adapté.",
      },
    ],
    reassurance: [
      "Consultation de diagnostic gratuite avant la première séance",
      "Technologie EstheLED développée et fabriquée à Toulouse",
      "Soin non invasif, indolore et sans éviction sociale",
      "Protocoles adaptés à chaque problématique de peau",
      "Compatible avec les peaux les plus sensibles",
    ],
    faq: [
      {
        q: "La LED est-elle sans danger ?",
        a: "Oui. La photobiomodulation LED est un soin non invasif, indolore et sans éviction sociale. Elle n'émet pas d'UV, ne chauffe pas et ne présente aucun risque pour la peau. La consultation de diagnostic préalable permet d'identifier d'éventuelles contre-indications.",
      },
      {
        q: "Combien de temps avant de voir des résultats ?",
        a: "Les premiers effets (éclat, confort) sont souvent perceptibles dès les premières séances. Les résultats profonds (rides, fermeté, taches) apparaissent progressivement sur l'ensemble de la cure.",
      },
      {
        q: "Sur quelles zones peut-on faire un soin LED ?",
        a: "La photobiomodulation peut être réalisée sur le visage, le dos, le cuir chevelu et certaines zones du corps, selon votre problématique.",
      },
      {
        q: "Y a-t-il des contre-indications ?",
        a: "La LED est contre-indiquée en cas d'épilepsie photosensible et de certains traitements photosensibilisants. La consultation de diagnostic permet de les identifier en amont.",
      },
    ],
    cta: "Réserver ma consultation EstheLED gratuite",
  },
  {
    slug: "pressotherapie",
    title: "Pressothérapie",
    tagline: "Stimuler la circulation, favoriser la récupération.",
    excerpt:
      "La pressothérapie utilise des pressions séquentielles pour stimuler la circulation sanguine et lymphatique. Résultat immédiat : une sensation de légèreté et de détente.",
    image: "/images/soin-pressotherapie.jpg",
    heroImage: "/images/soin-pressotherapie.jpg",
    color: "#C9A5A0",
    intro:
      "La pressothérapie est une technique de drainage mécanique qui utilise un système de pressions séquentielles pour stimuler la circulation sanguine et lymphatique. Des bottes ou manchons se gonflent et se dégonflent successivement afin de reproduire l'effet d'un drainage, favorisant ainsi le retour veineux et l'élimination des liquides. Ce soin procure une sensation immédiate de légèreté et de détente.",
    benefits: [
      {
        icon: "✦",
        title: "Circulation stimulée",
        desc: "Favorise la circulation sanguine et lymphatique pour un corps plus léger et mieux oxygéné.",
      },
      {
        icon: "✦",
        title: "Jambes légères",
        desc: "Soulagement des sensations de jambes lourdes et amélioration du retour veineux.",
      },
      {
        icon: "✦",
        title: "Récupération musculaire",
        desc: "Améliore la récupération après l'effort en favorisant l'élimination des déchets métaboliques.",
      },
      {
        icon: "✦",
        title: "Action anti-cellulite",
        desc: "Contribue à l'amélioration de l'aspect de la cellulite et accompagne les protocoles corps.",
      },
    ],
    howItWorks: [
      {
        step: "01",
        title: "Le principe",
        desc: "Des bottes ou manchons se gonflent et se dégonflent successivement afin de reproduire l'effet d'un drainage, favorisant le retour veineux et l'élimination des liquides. La séance dure 30 minutes.",
      },
      {
        step: "02",
        title: "Les bienfaits",
        desc: "La pressothérapie favorise la circulation sanguine et lymphatique, soulage les jambes lourdes, améliore la récupération musculaire et contribue à l'amélioration de l'aspect de la cellulite.",
      },
      {
        step: "03",
        title: "Un soin polyvalent",
        desc: "Chez Maison Sophie, la pressothérapie peut être réalisée sur les jambes, la ceinture abdominale et les bras. Elle peut être proposée seule ou intégrée dans certains protocoles pour optimiser les résultats.",
      },
      {
        step: "04",
        title: "Résultats immédiats",
        desc: "Ce soin procure une sensation immédiate de légèreté et de détente dès la première séance. Pour des résultats durables, une cure de séances régulières est recommandée.",
      },
    ],
    reassurance: [
      "Soin non invasif, indolore et relaxant",
      "Résultats ressentis dès la première séance",
      "Réalisable sur les jambes, l'abdomen et les bras",
      "Proposée seule ou intégrée dans un protocole sportif",
      "Combinaisons entretenues entre chaque client",
    ],
    faq: [
      {
        q: "Qui peut bénéficier de la pressothérapie ?",
        a: "La pressothérapie s'adresse aux personnes souffrant de jambes lourdes, aux sportifs en récupération et à toute personne souhaitant améliorer sa circulation. Quelques contre-indications existent (thrombose active, insuffisance cardiaque sévère) — à vérifier lors de la consultation.",
      },
      {
        q: "Est-ce douloureux ?",
        a: "Non, c'est l'un des soins les plus confortables qui soit. La pression est progressive et contrôlée, procurant une sensation immédiate de légèreté et de détente.",
      },
      {
        q: "Sur quelles zones est-ce réalisable ?",
        a: "Chez Maison Sophie, la pressothérapie peut être réalisée sur les jambes, la ceinture abdominale et les bras, seule ou intégrée dans un protocole de soins.",
      },
      {
        q: "Combien de séances pour des résultats durables ?",
        a: "Les effets se ressentent dès la première séance. Pour une action durable sur la cellulite ou la circulation, une cure de séances régulières est recommandée.",
      },
    ],
    cta: "Réserver ma séance de pressothérapie",
  },
  {
    slug: "sportifs",
    title: "Soins Sportifs",
    tagline: "Optimiser la récupération et le confort musculaire.",
    excerpt:
      "Des protocoles conçus pour accompagner le corps dans la récupération et favoriser le bien-être musculaire, pour les sportifs réguliers comme pour les personnes actives.",
    image: "/images/soin-sportifs.jpg",
    heroImage: "/images/soin-sportifs.jpg",
    color: "#C9A5A0",
    intro:
      "Chez Maison Sophie, les soins sportifs sont conçus pour accompagner le corps dans la récupération et favoriser le bien-être musculaire. Ils s'adressent aussi bien aux sportifs réguliers, aux coureurs ou aux personnes actives souhaitant améliorer leur récupération et relâcher les tensions accumulées. Ces soins permettent de soutenir les mécanismes naturels du corps après l'effort et d'aider les muscles à retrouver souplesse et confort.",
    benefits: [
      {
        icon: "✦",
        title: "Récupération musculaire",
        desc: "Soutient les mécanismes naturels du corps après l'effort pour retrouver souplesse et confort.",
      },
      {
        icon: "✦",
        title: "Circulation améliorée",
        desc: "Favorise la circulation pour une meilleure oxygénation des muscles et une élimination des déchets métaboliques.",
      },
      {
        icon: "✦",
        title: "Tensions relâchées",
        desc: "Relâche les tensions musculaires accumulées et soutient la récupération après l'effort.",
      },
      {
        icon: "✦",
        title: "Détente et légèreté",
        desc: "Procure une sensation de détente et de légèreté, idéale après une compétition ou un entraînement intense.",
      },
    ],
    howItWorks: [
      {
        step: "01",
        title: "Récupération rapide après l'effort",
        desc: "Un protocole ciblé pour accompagner le corps dans les heures suivant l'effort. Associant pressothérapie et massage sportif, il favorise la récupération musculaire et le retour au calme.",
      },
      {
        step: "02",
        title: "Préparation avant l'activité",
        desc: "Un soin énergisant pour préparer les muscles avant un entraînement ou une compétition, améliorer la circulation et optimiser les capacités musculaires.",
      },
      {
        step: "03",
        title: "Récupération profonde",
        desc: "Un protocole complet associant LED, pressothérapie et massage pour relâcher les tensions accumulées et accompagner une récupération en profondeur.",
      },
    ],
    reassurance: [
      "Protocoles adaptés à tous les niveaux, du sportif régulier au coureur occasionnel",
      "Combinaison de technologies complémentaires pour une efficacité maximale",
      "Chaque séance est adaptée à vos objectifs et à votre pratique",
      "Compatible avec toutes les pratiques sportives",
      "Conseils personnalisés sur la fréquence optimale de récupération",
    ],
    faq: [
      {
        q: "À quel moment faire le soin par rapport à l'effort ?",
        a: "Pour la récupération : idéalement dans les 24 à 72h suivant l'effort. Pour la préparation : la veille ou le matin de la compétition ou de l'entraînement.",
      },
      {
        q: "Ces soins s'adressent-ils uniquement aux sportifs de haut niveau ?",
        a: "Non. Ils s'adressent aussi bien aux sportifs réguliers, aux coureurs, qu'aux personnes actives souhaitant améliorer leur récupération et relâcher les tensions accumulées.",
      },
      {
        q: "Ces soins remplacent-ils la kinésithérapie ?",
        a: "Non, ils sont complémentaires. Les soins sportifs de Maison Sophie agissent sur la récupération musculaire générale et la circulation. En cas de blessure avérée ou de douleur persistante, consultez un kinésithérapeute ou un médecin du sport.",
      },
      {
        q: "Quelle fréquence recommandez-vous ?",
        a: "Chaque séance est adaptée à vos besoins afin d'accompagner au mieux votre pratique sportive. La fréquence est définie ensemble selon vos objectifs et votre rythme d'entraînement.",
      },
    ],
    cta: "Réserver mon soin sportif",
  },
];

export function getSoinBySlug(slug: string): Soin | undefined {
  return soins.find((s) => s.slug === slug);
}
