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
    tagline: "Une peau lisse, pour toujours.",
    excerpt:
      "Dites adieu aux rasoirs et à l'épilation douloureuse. Notre laser de dernière génération offre des résultats durables sur tous les types de peau, en toute sécurité.",
    image: "/images/photo-4.jpg",
    heroImage: "/images/photo-4.jpg",
    color: "#C8963E",
    intro:
      "L'épilation laser est aujourd'hui la solution la plus efficace et la plus durable pour se débarrasser des poils indésirables. Contrairement aux idées reçues, c'est un soin accessible à tous les types de peau et qui ne fait pas forcément mal. Chez Maison Sophie, nous utilisons un laser de dernière génération, calibré séance après séance selon l'évolution de votre peau.",
    benefits: [
      { icon: "✦", title: "Résultats durables", desc: "Jusqu'à 80 % de réduction définitive des poils après un protocole complet." },
      { icon: "✦", title: "Sécurité maximale", desc: "Notre laser est adapté à tous les phototypes, même les peaux mates et foncées." },
      { icon: "✦", title: "Sans douleur excessive", desc: "La technologie actuelle rend le traitement bien toléré, sans anesthésie nécessaire." },
      { icon: "✦", title: "Gain de temps réel", desc: "Fini les épilations hebdomadaires. Libérez-vous des contraintes pour de bon." },
    ],
    howItWorks: [
      { step: "01", title: "Consultation gratuite", desc: "Analyse de votre peau, de votre pilosité et de vos attentes. Nous définissons ensemble le protocole adapté et répondons à toutes vos questions." },
      { step: "02", title: "Préparation", desc: "24h avant la séance, rasez la zone concernée. Évitez toute exposition au soleil dans les jours précédents." },
      { step: "03", title: "La séance", desc: "Application du laser sur la zone cible. Chaque impulsion détruit le follicule pileux en profondeur. La durée varie de 20 à 60 min selon la zone." },
      { step: "04", title: "Suivi & résultats", desc: "Les poils tombent naturellement dans les 10-15 jours. Les séances sont espacées de 6 à 8 semaines pour cibler chaque cycle de pousse." },
    ],
    reassurance: [
      "Consultation de diagnostic 100 % gratuite et sans engagement avant toute première séance",
      "Protocole adapté séance après séance selon l'évolution de votre peau",
      "Matériel certifié CE, entretenu et contrôlé régulièrement",
      "Sophie est formée et certifiée en techniques laser avancées",
      "Résultats réévalués ensemble à chaque séance — transparence totale",
    ],
    faq: [
      { q: "Est-ce douloureux ?", a: "La sensation varie selon les zones et la sensibilité de chacun. La plupart des clients décrivent une légère chaleur ou un picotement bref. Les zones plus sensibles (maillot, visage) peuvent être plus inconfortables, mais restent très bien tolérées." },
      { q: "Combien de séances sont nécessaires ?", a: "En moyenne, 6 à 8 séances sont nécessaires pour un résultat optimal, espacées de 6 à 8 semaines. Le nombre exact dépend de votre type de peau, la couleur et la densité de vos poils." },
      { q: "La consultation est-elle vraiment gratuite ?", a: "Oui, complètement. Elle est aussi obligatoire car elle nous permet d'évaluer votre peau et de vous expliquer le protocole sans surprise. Aucun engagement n'est nécessaire à l'issue de cette consultation." },
      { q: "Peut-on traiter toutes les zones du corps ?", a: "Oui — visage, aisselles, bras, jambes, maillot, dos, torse... Nous traitons quasiment toutes les zones, avec des paramètres ajustés selon la sensibilité et la pilosité de chaque zone." },
    ],
    cta: "Réserver ma consultation laser gratuite",
  },
  {
    slug: "estheled",
    title: "EstheLED",
    tagline: "La lumière au service de votre peau.",
    excerpt:
      "La photobiomodulation LED est une technologie douce et non invasive qui régénère vos cellules en profondeur. Anti-âge, éclat, apaisement : une révolution pour votre peau.",
    image: "/images/photo-2.jpg",
    heroImage: "/images/photo-2.jpg",
    color: "#44b4e7",
    intro:
      "La photobiomodulation par LED (lumière thérapeutique) est l'une des technologies les plus prometteuses en esthétique médicale. Elle stimule naturellement vos cellules pour activer leur propre capacité de régénération. Indolore, non invasive, sans effets secondaires — l'EstheLED convient à tous les types de peau et à toutes les générations.",
    benefits: [
      { icon: "✦", title: "Anti-âge profond", desc: "Stimule la production de collagène et d'élastine pour une peau plus ferme et lissée." },
      { icon: "✦", title: "Éclat retrouvé", desc: "Harmonise le teint, réduit les taches et redonne de la luminosité à une peau terne." },
      { icon: "✦", title: "Apaisement", desc: "Idéal pour les peaux sensibles, réactives ou sujettes aux rougeurs." },
      { icon: "✦", title: "Soin cheveux", desc: "Stimule les follicules pileux pour lutter contre la chute et améliorer la densité capillaire." },
    ],
    howItWorks: [
      { step: "01", title: "Consultation gratuite", desc: "Analyse de votre peau et de vos objectifs. Nous choisissons ensemble le protocole lumineux adapté à votre problématique." },
      { step: "02", title: "La séance LED", desc: "Vous installez confortablement, un masque ou panneau LED est appliqué sur la zone ciblée. La séance dure 20 à 45 minutes selon le protocole. Indolore et relaxant." },
      { step: "03", title: "Programme de cure", desc: "L'efficacité de l'EstheLED se construit sur un protocole de plusieurs séances. Nous définissons le rythme optimal ensemble : généralement 1 à 2 fois par semaine au départ." },
      { step: "04", title: "Résultats progressifs", desc: "La peau s'améliore progressivement séance après séance. Les premiers effets (éclat, confort) sont souvent visibles dès les premières séances." },
    ],
    reassurance: [
      "Consultation de diagnostic gratuite avant la première séance",
      "Technologie utilisée en milieu médical et hospitalier depuis 30 ans",
      "Aucun effet secondaire, aucune douleur, aucune éviction sociale",
      "Protocoles adaptés à chaque problématique de peau",
      "Compatible avec la grossesse, l'allaitement et les peaux les plus sensibles",
    ],
    faq: [
      { q: "La LED est-elle sans danger ?", a: "Absolument. La photobiomodulation LED est utilisée en médecine depuis plus de 30 ans. Elle n'émet pas d'UV, ne chauffe pas et ne présente aucun risque pour la peau. C'est l'un des soins les plus sûrs qui soit." },
      { q: "Combien de temps avant de voir des résultats ?", a: "Les effets immédiats (éclat, sensation de confort) sont souvent visibles dès la première séance. Les résultats profonds (rides, fermeté, taches) apparaissent progressivement sur 4 à 6 semaines de cure." },
      { q: "Peut-on l'associer à d'autres soins ?", a: "Oui, l'EstheLED se combine très bien avec d'autres soins. Chez Maison Sophie, nous proposons des protocoles associant LED et pressothérapie, notamment dans nos soins sportifs." },
      { q: "Y a-t-il des contre-indications ?", a: "Très peu. La LED est contre-indiquée en cas d'épilepsie photosensible et de certains traitements photosensibilisants. La consultation de diagnostic permet d'identifier d'éventuelles contre-indications." },
    ],
    cta: "Réserver ma consultation EstheLED gratuite",
  },
  {
    slug: "pressotherapie",
    title: "Pressothérapie",
    tagline: "Des jambes légères, un corps régénéré.",
    excerpt:
      "Le drainage par pressothérapie stimule la circulation lymphatique, réduit la cellulite et accélère la récupération sportive. Résultats visibles dès la première séance.",
    image: "/images/photo-5.jpg",
    heroImage: "/images/photo-5.jpg",
    color: "#8BA888",
    intro:
      "La pressothérapie est un soin de drainage mécanique qui mime et amplifie le drainage lymphatique naturel du corps. En comprimant successivement les membres inférieurs, elle stimule la circulation, élimine les toxines et les excès de liquides. Résultat : des jambes légères, une silhouette affinée et une récupération accélérée.",
    benefits: [
      { icon: "✦", title: "Jambes légères", desc: "Soulagement immédiat des jambes lourdes, des œdèmes et des gonflements." },
      { icon: "✦", title: "Anti-cellulite", desc: "Améliore la circulation lymphatique pour atténuer la peau d'orange et affiner la silhouette." },
      { icon: "✦", title: "Récupération sportive", desc: "Élimine l'acide lactique et accélère la récupération après l'effort." },
      { icon: "✦", title: "Détoxification", desc: "Stimule l'élimination des toxines et des déchets métaboliques accumulés." },
    ],
    howItWorks: [
      { step: "01", title: "Installation", desc: "Vous enfilez une combinaison spéciale. Vous vous allongez confortablement sur la table de soin." },
      { step: "02", title: "Le drainage", desc: "La combinaison se gonfle progressivement, créant des compressions séquentielles des pieds vers les hanches. La séance dure 30 minutes. C'est relaxant et indolore." },
      { step: "03", title: "Résultats immédiats", desc: "Les effets se ressentent dès la sortie : sensation de légèreté, jambes désenflées, corps plus détendu." },
      { step: "04", title: "Programme de cure", desc: "Pour des résultats durables sur la cellulite ou un œdème chronique, une cure de séances régulières est recommandée." },
    ],
    reassurance: [
      "Soin non invasif, indolore et relaxant",
      "Résultats ressentis dès la première séance",
      "Compatible avec la grossesse (sous avis médical)",
      "Protocoles sportifs associant pressothérapie et massage",
      "Combinaisons stérilisées et entretenues entre chaque client",
    ],
    faq: [
      { q: "Qui peut bénéficier de la pressothérapie ?", a: "Tout le monde, ou presque. Elle est particulièrement recommandée pour les personnes souffrant de jambes lourdes, d'œdèmes, de cellulite, ainsi que pour les sportifs en récupération. Quelques contre-indications existent (thrombose active, insuffisance cardiaque sévère) — à vérifier lors de la consultation." },
      { q: "Est-ce douloureux ?", a: "Non, c'est l'un des soins les plus confortables qui soit. La pression est progressive et contrôlée. Beaucoup de clients s'endorment pendant la séance !" },
      { q: "Combien de séances pour des résultats ?", a: "Les effets se ressentent dès la 1ère séance. Pour une action durable sur la cellulite, un minimum de 10 séances est recommandé, à raison de 2-3 par semaine." },
    ],
    cta: "Réserver ma séance de pressothérapie",
  },
  {
    slug: "sportifs",
    title: "Soins Sportifs",
    tagline: "Performer et récupérer comme un pro.",
    excerpt:
      "Des protocoles sur-mesure associant massage, LED et pressothérapie pour préparer votre corps à l'effort, optimiser la récupération et prévenir les blessures.",
    image: "/images/photo-6.jpg",
    heroImage: "/images/photo-6.jpg",
    color: "#C8963E",
    intro:
      "Que vous soyez athlète de haut niveau ou sportif du dimanche, votre corps mérite une prise en charge adaptée. Les soins sportifs de Maison Sophie combinent les technologies les plus efficaces — massage, pressothérapie et photobiomodulation LED — pour des protocoles ciblés selon votre objectif : préparer, performer, récupérer.",
    benefits: [
      { icon: "✦", title: "Récupération accélérée", desc: "Élimine l'acide lactique, réduit les courbatures et prépare vos muscles à la prochaine séance." },
      { icon: "✦", title: "Préparation optimale", desc: "Activez votre circulation et votre système musculaire avant une compétition ou un entraînement intense." },
      { icon: "✦", title: "Prévention des blessures", desc: "Des protocoles réguliers améliorent la souplesse musculaire et réduisent les risques de blessure." },
      { icon: "✦", title: "Approche globale", desc: "Corps, circulation, cellules : nous traitons votre récupération sous tous les angles." },
    ],
    howItWorks: [
      { step: "01", title: "Récupération Express (60 min)", desc: "Pressothérapie 30 min + massage sportif ciblé 30 min. À réaliser dans les 24-72h suivant l'effort. Idéal en entretien régulier." },
      { step: "02", title: "Récupération Profonde (90 min)", desc: "LED 20 min + pressothérapie 30 min + massage global 45 min. Le protocole complet pour une récupération totale après un effort intense." },
      { step: "03", title: "Préparation Compétition (45 min)", desc: "Massage d'activation énergisant pour préparer le corps avant un entraînement ou une compétition. Améliore la proprioception et la réactivité musculaire." },
    ],
    reassurance: [
      "Protocoles testés et adaptés aux sportifs de tous niveaux",
      "Combinaison de technologies complémentaires pour une efficacité maximale",
      "Conseils personnalisés sur la fréquence optimale de récupération",
      "Compatible avec toutes les pratiques sportives",
      "Sophie est formée aux soins sportifs et à la physiologie de l'effort",
    ],
    faq: [
      { q: "À quel moment faire le soin par rapport à l'effort ?", a: "Pour la récupération : idéalement dans les 24 à 72h suivant l'effort. Pour la préparation : la veille ou le matin de la compétition/entraînement." },
      { q: "Ces soins remplacent-ils la kinésithérapie ?", a: "Non, ils sont complémentaires. Les soins sportifs de Maison Sophie agissent sur la récupération musculaire générale et la circulation. En cas de blessure avérée ou de douleur persistante, consultez un kinésithérapeute ou un médecin du sport." },
      { q: "Quelle fréquence recommandez-vous ?", a: "Pour les sportifs réguliers, une séance de récupération par semaine ou toutes les deux semaines est idéale. En période de compétition intensive, nous pouvons adapter la fréquence à vos besoins." },
    ],
    cta: "Réserver mon soin sportif",
  },
];

export function getSoinBySlug(slug: string): Soin | undefined {
  return soins.find((s) => s.slug === slug);
}
