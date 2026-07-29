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
        a: "Oui — aisselles, bras, jambes, maillot, dos, torse... Nous traitons la grande majorité des zones avec des paramètres ajustés selon la sensibilité et la pilosité de chaque zone.",
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
    color: "#C9A5A0",
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
        desc: "La photobiomodulation est un soin non invasif, indolore et sans éviction sociale. Elle peut être réalisée sur le visage, le corps (dos, jambes, abdomen) et le cuir chevelu.",
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
    slug: "v-tox-lift",
    title: "V-Tox Lift",
    tagline: "Une peau plus lisse, plus lumineuse et visiblement revitalisée.",
    excerpt:
      "Un soin visage expert conçu pour redonner de l'éclat à la peau, améliorer son aspect et révéler un teint plus frais et plus uniforme.",
    image: "/images/soin-v-tox-lift.jpg",
    heroImage: "/images/soin-v-tox-lift.jpg",
    color: "#C9A5A0",
    intro:
      "Le soin V-Tox Lift est un protocole professionnel conçu pour redonner de l'éclat à la peau, améliorer son aspect et révéler un teint plus frais et plus uniforme. Grâce à l'association d'actifs sélectionnés et d'un protocole spécifique, ce soin aide à améliorer l'apparence de la peau tout en procurant une agréable sensation de confort.",
    benefits: [
      {
        icon: "✦",
        title: "Peau plus lumineuse",
        desc: "Atténuer l'apparence des premières rides et ridules.",
      },
      {
        icon: "✦",
        title: "Grain de peau visiblement plus régulier",
        desc: "Retrouver une peau plus lisse.",
      },
      {
        icon: "✦",
        title: "Sensation de peau plus souple",
        desc: "Raviver l'éclat du teint.",
      },
      {
        icon: "✦",
        title: "Apparence des ridules estompée",
        desc: "Améliorer l'aspect d'une peau fatiguée ou terne.",
      },
      {
        icon: "✦",
        title: "Teint plus frais et reposé",
        desc: "Offrir à votre peau un soin préventif pour préserver sa qualité au fil du temps.",
      },
    ],
    howItWorks: [
      {
        step: "01",
        title: "L'analyse de la peau",
        desc: "Chaque séance débute par une analyse de votre peau afin de vérifier que le protocole est adapté à vos besoins.",
      },
      {
        step: "02",
        title: "Le protocole V-Tox Lift",
        desc: "Le soin comprend les différentes étapes du protocole V-Tox Lift, permettant d'optimiser la pénétration des actifs et de favoriser une peau visiblement plus lumineuse, souple et revitalisée.",
      },
      {
        step: "03",
        title: "Les soins de finition",
        desc: "La séance se termine par l'application de soins de finition adaptés à votre type de peau.",
      },
    ],
    reassurance: [
      "Analyse de votre peau avant chaque séance",
      "Durée de la séance : 60 minutes",
      "Tarif : 70 € la séance",
      "Cure conseillée de 4 séances espacées de 7 jours pour un résultat optimal",
      "Soins de finition adaptés à votre type de peau",
    ],
    faq: [
      {
        q: "Combien de temps dure une séance de V-Tox Lift ?",
        a: "La séance dure 60 minutes et comprend une analyse de votre peau, le protocole V-Tox Lift puis l'application de soins de finition adaptés à votre type de peau.",
      },
      {
        q: "Combien de séances sont recommandées ?",
        a: "Pour un résultat optimal, une cure de 4 séances espacées de 7 jours est conseillée.",
      },
      {
        q: "Pour quels besoins ce soin est-il recommandé ?",
        a: "Le V-Tox Lift est idéal pour atténuer l'apparence des premières rides et ridules, retrouver une peau plus lisse, raviver l'éclat du teint ou offrir à votre peau un soin préventif.",
      },
      {
        q: "Quel est le tarif du soin V-Tox Lift ?",
        a: "Le soin V-Tox Lift est proposé à 70 € la séance de 60 minutes.",
      },
    ],
    cta: "Réserver mon soin V-Tox Lift",
  },
  {
    slug: "hydralips",
    title: "Hydralips",
    tagline: "Un soin dédié à l'hydratation et à l'embellissement des lèvres.",
    excerpt:
      "Une infusion d'actifs hydratants pour redonner confort, douceur et éclat à vos lèvres.",
    image: "/images/soin-hydralips.jpg",
    heroImage: "/images/soin-hydralips.jpg",
    color: "#C9A5A0",
    intro:
      "Les lèvres sont quotidiennement exposées au soleil, au froid et à la déshydratation. Le soin Hydralips a été conçu pour leur redonner confort, douceur et éclat grâce à une infusion d'actifs hydratants. Ce protocole est idéal pour sublimer naturellement les lèvres, avant un événement ou simplement pour retrouver des lèvres souples et confortables.",
    benefits: [
      {
        icon: "✦",
        title: "Lèvres intensément hydratées",
        desc: "Hydrater intensément vos lèvres.",
      },
      {
        icon: "✦",
        title: "Lèvres plus douces",
        desc: "Retrouver des lèvres plus douces.",
      },
      {
        icon: "✦",
        title: "Confort retrouvé",
        desc: "Améliorer l'aspect des lèvres sèches ou fragilisées.",
      },
      {
        icon: "✦",
        title: "Aspect plus lisse",
        desc: "Préparer vos lèvres avant un maquillage.",
      },
      {
        icon: "✦",
        title: "Éclat naturel",
        desc: "Sublimer naturellement votre sourire.",
      },
    ],
    howItWorks: [
      {
        step: "01",
        title: "La préparation",
        desc: "Le protocole débute par une préparation des lèvres.",
      },
      {
        step: "02",
        title: "L'infusion par nanoneedling",
        desc: "Une infusion d'actifs hydratants est réalisée par nanoneedling pour une action en profondeur.",
      },
      {
        step: "03",
        title: "Le masque nourrissant",
        desc: "La séance se termine par l'application d'un masque nourrissant afin d'optimiser le confort et l'hydratation.",
      },
    ],
    reassurance: [
      "Infusion d'actifs hydratants par nanoneedling",
      "Durée de la séance : 30 minutes",
      "Tarif : 35 €",
      "Idéal avant un événement ou un maquillage",
      "Masque nourrissant en fin de séance",
    ],
    faq: [
      {
        q: "Combien de temps dure le soin Hydralips ?",
        a: "Le soin dure 30 minutes et comprend une préparation des lèvres, une infusion d'actifs hydratants par nanoneedling puis l'application d'un masque nourrissant.",
      },
      {
        q: "Pour qui est recommandé ce soin ?",
        a: "Hydralips est idéal pour hydrater intensément les lèvres, retrouver des lèvres plus douces, améliorer l'aspect de lèvres sèches ou fragilisées, ou préparer les lèvres avant un maquillage.",
      },
      {
        q: "Quel est le tarif du soin Hydralips ?",
        a: "Le soin Hydralips est proposé à 35 € la séance de 30 minutes.",
      },
      {
        q: "Qu'est-ce que le nanoneedling ?",
        a: "C'est la technique utilisée pour infuser les actifs hydratants au cœur des lèvres, afin d'optimiser leur pénétration et leur efficacité.",
      },
    ],
    cta: "Réserver mon soin Hydralips",
  },
  {
    slug: "inflacure",
    title: "Inflacure",
    tagline: "Un protocole apaisant pour les peaux sujettes aux rougeurs et aux imperfections.",
    excerpt:
      "Un protocole professionnel associant actifs ciblés et photobiomodulation LED pour accompagner les peaux fragilisées ou sujettes aux imperfections.",
    image: "/images/soin-inflacure.jpg",
    heroImage: "/images/soin-inflacure.jpg",
    color: "#C9A5A0",
    intro:
      "Inflacure est un protocole professionnel conçu pour accompagner les peaux fragilisées ou sujettes aux imperfections. Grâce à une association d'actifs spécifiques et à la photobiomodulation LED, il aide à améliorer l'apparence de la peau tout en favorisant son confort.",
    benefits: [
      {
        icon: "✦",
        title: "Peau apaisée",
        desc: "Idéal en cas de rougeurs diffuses.",
      },
      {
        icon: "✦",
        title: "Rougeurs visiblement atténuées",
        desc: "Idéal en cas d'imperfections.",
      },
      {
        icon: "✦",
        title: "Teint plus uniforme",
        desc: "Idéal pour les peaux à tendance acnéique.",
      },
      {
        icon: "✦",
        title: "Sensation de confort",
        desc: "Idéal en cas de sensations d'inconfort ou de tiraillement.",
      },
      {
        icon: "✦",
        title: "Peau plus lumineuse",
        desc: "Idéal pour les peaux sensibilisées ou réactives.",
      },
    ],
    howItWorks: [
      {
        step: "01",
        title: "L'analyse de la peau",
        desc: "Après une analyse de votre peau, le protocole le plus adapté à vos besoins est déterminé.",
      },
      {
        step: "02",
        title: "Le protocole Inflacure",
        desc: "Le protocole Inflacure est réalisé selon les étapes prévues par le soin, associant des actifs ciblés à l'action de la photobiomodulation LED.",
      },
      {
        step: "03",
        title: "La photobiomodulation LED",
        desc: "La séance est complétée par une séance de photobiomodulation LED afin d'accompagner l'action des actifs et le confort cutané.",
      },
    ],
    reassurance: [
      "Analyse de votre peau avant chaque séance",
      "Association d'actifs ciblés et de photobiomodulation LED",
      "Durée de la séance : 60 minutes",
      "Tarif : 90 €",
      "Adapté aux peaux fragilisées, sensibles ou à tendance acnéique",
    ],
    faq: [
      {
        q: "À qui s'adresse le soin Inflacure ?",
        a: "Inflacure s'adresse aux peaux présentant des rougeurs diffuses, des imperfections, une tendance acnéique, des sensations d'inconfort ou de tiraillement, ou une peau sensibilisée et réactive.",
      },
      {
        q: "Combien de temps dure la séance ?",
        a: "La séance dure 60 minutes : analyse de la peau, protocole Inflacure puis séance de photobiomodulation LED.",
      },
      {
        q: "Quel est le tarif du soin Inflacure ?",
        a: "Le soin Inflacure est proposé à 90 € la séance de 60 minutes.",
      },
      {
        q: "Pourquoi associer la photobiomodulation LED au protocole ?",
        a: "La photobiomodulation LED vient accompagner l'action des actifs et favoriser le confort cutané tout au long de la séance.",
      },
    ],
    cta: "Réserver mon soin Inflacure",
  },
  {
    slug: "thread-fill",
    title: "Thread Fill",
    tagline: "Un soin expert pour améliorer la fermeté et la qualité de la peau.",
    excerpt:
      "Un protocole associant fils de collagène et microstimulation cutanée pour raffermir la peau et révéler un teint plus lumineux.",
    image: "/images/soin-thread-fill.jpg",
    heroImage: "/images/soin-thread-fill.jpg",
    color: "#C9A5A0",
    intro:
      "Le protocole Thread Fill associe des fils de collagène à une microstimulation cutanée afin d'améliorer visiblement l'aspect de la peau, favoriser sa fermeté et révéler un teint plus lumineux.",
    benefits: [
      {
        icon: "✦",
        title: "Peau plus ferme",
        desc: "Raffermir votre peau.",
      },
      {
        icon: "✦",
        title: "Aspect plus lisse",
        desc: "Améliorer son élasticité.",
      },
      {
        icon: "✦",
        title: "Grain de peau amélioré",
        desc: "Atténuer l'apparence des rides et ridules.",
      },
      {
        icon: "✦",
        title: "Teint plus lumineux",
        desc: "Retrouver une peau plus lisse.",
      },
      {
        icon: "✦",
        title: "Peau visiblement revitalisée",
        desc: "Préserver la qualité de votre peau.",
      },
    ],
    howItWorks: [
      {
        step: "01",
        title: "L'analyse personnalisée",
        desc: "Chaque séance débute par une analyse personnalisée de votre peau.",
      },
      {
        step: "02",
        title: "L'application des fils de collagène",
        desc: "Les fils de collagène sont appliqués selon le protocole Thread Fill puis intégrés grâce à une technique de microstimulation cutanée.",
      },
      {
        step: "03",
        title: "Les produits de finition",
        desc: "Le soin se termine par des produits de finition adaptés à votre peau.",
      },
    ],
    reassurance: [
      "Analyse personnalisée avant chaque séance",
      "Fils de collagène intégrés par microstimulation cutanée",
      "Durée de la séance : 60 minutes",
      "Tarif : 90 €",
      "Produits de finition adaptés à votre peau",
    ],
    faq: [
      {
        q: "En quoi consiste le protocole Thread Fill ?",
        a: "Il associe des fils de collagène, appliqués après une analyse personnalisée, à une technique de microstimulation cutanée, puis se termine par des produits de finition adaptés à votre peau.",
      },
      {
        q: "Combien de temps dure la séance ?",
        a: "La séance dure 60 minutes.",
      },
      {
        q: "Quel est le tarif du soin Thread Fill ?",
        a: "Le soin Thread Fill est proposé à 90 € la séance de 60 minutes.",
      },
      {
        q: "Pour quels besoins ce soin est-il recommandé ?",
        a: "Thread Fill est idéal pour raffermir la peau, améliorer son élasticité, atténuer l'apparence des rides et ridules, ou préserver la qualité de la peau.",
      },
    ],
    cta: "Réserver mon soin Thread Fill",
  },
  {
    slug: "microneedling",
    title: "Microneedling",
    tagline: "Un soin personnalisable pour répondre aux besoins spécifiques de votre peau.",
    excerpt:
      "Une technique de microstimulation cutanée qui favorise le renouvellement de la peau et facilite la pénétration d'actifs sélectionnés selon vos besoins.",
    image: "/images/soin-microneedling.jpg",
    heroImage: "/images/soin-microneedling.jpg",
    color: "#C9A5A0",
    intro:
      "Le microneedling est une technique de microstimulation cutanée qui permet de favoriser le renouvellement de la peau tout en facilitant la pénétration d'actifs sélectionnés selon vos besoins. Chaque séance est personnalisée afin d'accompagner les différentes préoccupations cutanées.",
    benefits: [
      {
        icon: "✦",
        title: "Peau plus lumineuse",
        desc: "Idéal en cas de manque d'éclat.",
      },
      {
        icon: "✦",
        title: "Grain de peau affiné",
        desc: "Idéal pour les irrégularités du grain de peau et les cicatrices d'acné.",
      },
      {
        icon: "✦",
        title: "Teint plus uniforme",
        desc: "Idéal en cas d'imperfections ou de taches pigmentaires.",
      },
      {
        icon: "✦",
        title: "Qualité de peau améliorée",
        desc: "Idéal pour atténuer les premières rides et améliorer la qualité globale de la peau.",
      },
      {
        icon: "✦",
        title: "Résultats progressifs au fil des séances",
        desc: "Chaque séance est personnalisée selon vos besoins et vos objectifs.",
      },
    ],
    howItWorks: [
      {
        step: "01",
        title: "L'analyse & le choix du sérum",
        desc: "Chaque séance débute par une analyse de votre peau afin de sélectionner le sérum le plus adapté à vos besoins.",
      },
      {
        step: "02",
        title: "La préparation de la peau",
        desc: "La peau est préparée avant la réalisation de la séance de microneedling.",
      },
      {
        step: "03",
        title: "La séance de microneedling",
        desc: "Le sérum sélectionné est infusé grâce à la technique de microneedling, favorisant le renouvellement de la peau.",
      },
      {
        step: "04",
        title: "Les soins apaisants",
        desc: "La séance se termine par l'application de soins apaisants et protecteurs.",
      },
    ],
    reassurance: [
      "Analyse de votre peau et choix du sérum adapté à chaque séance",
      "Technique personnalisable selon vos préoccupations cutanées",
      "Durée de la séance : 60 minutes",
      "Tarif : 80 €",
      "Cure de plusieurs séances espacées de quelques semaines recommandée selon les objectifs",
    ],
    faq: [
      {
        q: "Le microneedling est-il adapté à tous les types de peau ?",
        a: "Oui, chaque séance est personnalisée : une analyse de votre peau permet de sélectionner le sérum et le protocole les plus adaptés à vos besoins (éclat, grain de peau, cicatrices d'acné, imperfections, taches pigmentaires, premières rides...).",
      },
      {
        q: "Combien de temps dure la séance ?",
        a: "La séance dure 60 minutes.",
      },
      {
        q: "Quel est le tarif du soin microneedling ?",
        a: "Le soin est proposé à 80 € la séance de 60 minutes.",
      },
      {
        q: "Combien de séances sont nécessaires ?",
        a: "Une cure de plusieurs séances espacées de quelques semaines peut être proposée selon vos objectifs et les besoins de votre peau.",
      },
    ],
    cta: "Réserver mon soin microneedling",
  },
];

export function getSoinBySlug(slug: string): Soin | undefined {
  return soins.find((s) => s.slug === slug);
}
