export interface AccessibilityText {
  id: string;
  element: string;
  type: 'aria-label' | 'alt' | 'title' | 'aria-describedby' | 'aria-labelledby';
  text: {
    fr: string;
    en: string;
    es: string;
    de: string;
  };
  context?: string;
}

export const accessibilityTexts: AccessibilityText[] = [
  {
    id: 'nav-logo',
    element: 'Logo AndyK.app',
    type: 'aria-label',
    text: {
      fr: 'Logo AndyK.app, retour à l\'accueil',
      en: 'AndyK.app logo, return to home',
      es: 'Logo AndyK.app, volver al inicio',
      de: 'AndyK.app Logo, zurück zur Startseite'
    },
    context: 'Navigation principale'
  },
  {
    id: 'nav-parcours',
    element: 'Lien navigation parcours',
    type: 'aria-label',
    text: {
      fr: 'Accéder à la section des parcours de sensibilisation',
      en: 'Access awareness courses section',
      es: 'Acceder a la sección de cursos de sensibilización',
      de: 'Zugang zum Bereich der Sensibilisierungskurse'
    },
    context: 'Navigation principale'
  },
  {
    id: 'nav-handicaps',
    element: 'Lien navigation handicaps',
    type: 'aria-label',
    text: {
      fr: 'En savoir plus sur les différents handicaps',
      en: 'Learn more about different disabilities',
      es: 'Conocer más sobre las diferentes discapacidades',
      de: 'Mehr über verschiedene Behinderungen erfahren'
    },
    context: 'Navigation principale'
  },
  {
    id: 'nav-projet',
    element: 'Lien navigation projet',
    type: 'aria-label',
    text: {
      fr: 'Découvrir le projet AndyKapp',
      en: 'Discover the AndyKapp project',
      es: 'Descubrir el proyecto AndyKapp',
      de: 'Das AndyKapp-Projekt entdecken'
    },
    context: 'Navigation principale'
  },
  {
    id: 'btn-support',
    element: 'Bouton soutenir le projet',
    type: 'aria-label',
    text: {
      fr: 'Soutenir financièrement le projet AndyKapp',
      en: 'Financially support the AndyKapp project',
      es: 'Apoyar financieramente el proyecto AndyKapp',
      de: 'Das AndyKapp-Projekt finanziell unterstützen'
    },
    context: 'Actions principales'
  },
  {
    id: 'btn-back-parcours',
    element: 'Bouton retour aux parcours',
    type: 'aria-label',
    text: {
      fr: 'Retourner à la liste des parcours',
      en: 'Return to courses list',
      es: 'Volver a la lista de cursos',
      de: 'Zurück zur Kursliste'
    },
    context: 'Navigation secondaire'
  },
  {
    id: 'btn-accept-mission',
    element: 'Bouton accepter mission',
    type: 'aria-label',
    text: {
      fr: 'Accepter et démarrer la mission de sensibilisation',
      en: 'Accept and start the awareness mission',
      es: 'Aceptar e iniciar la misión de sensibilización',
      de: 'Die Sensibilisierungsmission akzeptieren und starten'
    },
    context: 'Actions mission'
  },
  {
    id: 'btn-read-message',
    element: 'Bouton lire le message',
    type: 'aria-label',
    text: {
      fr: 'Écouter le message audio de la mission',
      en: 'Listen to the mission audio message',
      es: 'Escuchar el mensaje de audio de la misión',
      de: 'Die Audionachricht der Mission anhören'
    },
    context: 'Accessibilité audio'
  },
  {
    id: 'avatar-mark',
    element: 'Avatar Mark Z.',
    type: 'alt',
    text: {
      fr: 'Avatar de Mark Z., guide des missions',
      en: 'Mark Z. avatar, mission guide',
      es: 'Avatar de Mark Z., guía de misiones',
      de: 'Mark Z. Avatar, Missionsführer'
    },
    context: 'Personnage guide'
  },
  {
    id: 'avatar-andy',
    element: 'Avatar Andy K.',
    type: 'alt',
    text: {
      fr: 'Avatar d\'Andy K., votre compagnon virtuel',
      en: 'Andy K. avatar, your virtual companion',
      es: 'Avatar de Andy K., tu compañero virtual',
      de: 'Andy K. Avatar, dein virtueller Begleiter'
    },
    context: 'Personnage principal'
  },
  {
    id: 'mission-zone',
    element: 'Zone de mission interactive',
    type: 'alt',
    text: {
      fr: 'Zone interactive pour réaliser la mission de sensibilisation',
      en: 'Interactive area to complete the awareness mission',
      es: 'Zona interactiva para completar la misión de sensibilización',
      de: 'Interaktiver Bereich zur Durchführung der Sensibilisierungsmission'
    },
    context: 'Zone d\'activité'
  },
  {
    id: 'skip-to-content',
    element: 'Lien aller au contenu',
    type: 'aria-label',
    text: {
      fr: 'Passer directement au contenu principal',
      en: 'Skip directly to main content',
      es: 'Saltar directamente al contenido principal',
      de: 'Direkt zum Hauptinhalt springen'
    },
    context: 'Navigation d\'accessibilité'
  },
  {
    id: 'show-menu',
    element: 'Bouton afficher le menu',
    type: 'aria-label',
    text: {
      fr: 'Afficher le menu de navigation',
      en: 'Show navigation menu',
      es: 'Mostrar menú de navegación',
      de: 'Navigationsmenü anzeigen'
    },
    context: 'Navigation d\'accessibilité'
  },
  {
    id: 'go-to-footer',
    element: 'Lien aller au pied de page',
    type: 'aria-label',
    text: {
      fr: 'Aller directement au pied de page',
      en: 'Go directly to footer',
      es: 'Ir directamente al pie de página',
      de: 'Direkt zum Footer gehen'
    },
    context: 'Navigation d\'accessibilité'
  }
];

export const getAccessibilityText = (id: string, language: string = 'fr'): string => {
  const item = accessibilityTexts.find(text => text.id === id);
  if (!item) return '';
  
  const lang = language as keyof typeof item.text;
  return item.text[lang] || item.text.fr;
};