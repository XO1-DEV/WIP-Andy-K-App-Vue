import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  fr: {
    translation: {
      // Navigation
      nav: {
        logo: 'AndyK.app',
        parcours: 'Les parcours',
        handicaps: 'Les handicaps',
        projet: 'Le projet AndyKapp',
        support: 'Soutenir le projet'
      },
      // Accessibilité
      accessibility: {
        skipToContent: 'Aller au contenu',
        showMenu: 'Afficher le menu',
        goToFooter: 'Aller au pied de page'
      },
      // Page parcours mission
      parcoursMission: {
        backToParcours: 'Retour aux parcours',
        title: 'Parcours 1 : Trouble de la perception des couleurs',
        troublesVisuels: 'Troubles visuels',
        mission: 'Mission',
        sur: 'sur',
        protanopie: 'Les daltonismes : La protanopie',
        markSays: 'Mark Z. :',
        welcome: 'Bienvenue',
        missionDescription: 'Dans ce premier parcours je te propose de découvrir les problèmes que peuvent rencontrer les personnes qui, comme-moi, voient les couleurs d\'une manière différentes des autres.',
        yourMission: 'Ta mission si tu l\'acceptes :',
        missionTask: 'Sur l\'écran qui va apparaître ci-contre, ajoute à ton panier un t-shirt rouge.',
        acceptMission: 'Accepter et démarrer la mission',
        readMessage: 'Lire le message'
      },
      // Erreur 404
      notFound: {
        title: 'OOPS! PAGE NON TROUVÉE',
        code: '404',
        message: 'NOUS SOMMES DÉSOLÉS, MAIS LA PAGE DEMANDÉE N\'A PAS ÉTÉ TROUVÉE'
      }
    }
  },
  en: {
    translation: {
      nav: {
        logo: 'AndyK.app',
        parcours: 'Courses',
        handicaps: 'Disabilities',
        projet: 'The AndyKapp Project',
        support: 'Support the Project'
      },
      accessibility: {
        skipToContent: 'Skip to content',
        showMenu: 'Show menu',
        goToFooter: 'Go to footer'
      },
      parcoursMission: {
        backToParcours: 'Back to courses',
        title: 'Course 1: Color Perception Disorder',
        troublesVisuels: 'Visual impairments',
        mission: 'Mission',
        sur: 'of',
        protanopie: 'Color blindness: Protanopia',
        markSays: 'Mark Z.:',
        welcome: 'Welcome',
        missionDescription: 'In this first course, I suggest you discover the problems that people like me, who see colors differently from others, can encounter.',
        yourMission: 'Your mission, should you accept it:',
        missionTask: 'On the screen that will appear opposite, add a red t-shirt to your cart.',
        acceptMission: 'Accept and start the mission',
        readMessage: 'Read the message'
      },
      notFound: {
        title: 'OOPS! PAGE NOT FOUND',
        code: '404',
        message: 'WE ARE SORRY, BUT THE REQUESTED PAGE WAS NOT FOUND'
      }
    }
  },
  es: {
    translation: {
      nav: {
        logo: 'AndyK.app',
        parcours: 'Cursos',
        handicaps: 'Discapacidades',
        projet: 'El Proyecto AndyKapp',
        support: 'Apoyar el Proyecto'
      },
      accessibility: {
        skipToContent: 'Ir al contenido',
        showMenu: 'Mostrar menú',
        goToFooter: 'Ir al pie de página'
      },
      parcoursMission: {
        backToParcours: 'Volver a cursos',
        title: 'Curso 1: Trastorno de Percepción del Color',
        troublesVisuels: 'Problemas visuales',
        mission: 'Misión',
        sur: 'de',
        protanopie: 'Daltonismo: Protanopia',
        markSays: 'Mark Z.:',
        welcome: 'Bienvenido',
        missionDescription: 'En este primer curso, te propongo descubrir los problemas que pueden encontrar las personas que, como yo, ven los colores de manera diferente a los demás.',
        yourMission: 'Tu misión, si la aceptas:',
        missionTask: 'En la pantalla que aparecerá al lado, añade una camiseta roja a tu carrito.',
        acceptMission: 'Aceptar e iniciar la misión',
        readMessage: 'Leer el mensaje'
      },
      notFound: {
        title: '¡OOPS! PÁGINA NO ENCONTRADA',
        code: '404',
        message: 'LO SENTIMOS, PERO LA PÁGINA SOLICITADA NO FUE ENCONTRADA'
      }
    }
  },
  de: {
    translation: {
      nav: {
        logo: 'AndyK.app',
        parcours: 'Kurse',
        handicaps: 'Behinderungen',
        projet: 'Das AndyKapp-Projekt',
        support: 'Projekt unterstützen'
      },
      accessibility: {
        skipToContent: 'Zum Inhalt springen',
        showMenu: 'Menü anzeigen',
        goToFooter: 'Zum Footer gehen'
      },
      parcoursMission: {
        backToParcours: 'Zurück zu Kursen',
        title: 'Kurs 1: Farbwahrnehmungsstörung',
        troublesVisuels: 'Sehstörungen',
        mission: 'Mission',
        sur: 'von',
        protanopie: 'Farbenblindheit: Protanopie',
        markSays: 'Mark Z.:',
        welcome: 'Willkommen',
        missionDescription: 'In diesem ersten Kurs schlage ich vor, dass du die Probleme entdeckst, denen Menschen wie ich begegnen können, die Farben anders sehen als andere.',
        yourMission: 'Deine Mission, falls du sie annimmst:',
        missionTask: 'Auf dem Bildschirm, der gegenüber erscheint, füge ein rotes T-Shirt zu deinem Warenkorb hinzu.',
        acceptMission: 'Mission akzeptieren und starten',
        readMessage: 'Nachricht lesen'
      },
      notFound: {
        title: 'OOPS! SEITE NICHT GEFUNDEN',
        code: '404',
        message: 'ES TUT UNS LEID, ABER DIE ANGEFORDERTE SEITE WURDE NICHT GEFUNDEN'
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr',
    debug: false,
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    }
  });

export default i18n;