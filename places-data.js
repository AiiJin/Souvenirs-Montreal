/**
 * SOUVENIRS ? MONTR?AL ? DONN?ES DES LIEUX
 *
 * CONSIGNE IMP?RATIVE POUR CODEX :
 * - NE PAS refaire le site et NE PAS modifier son principe actuel.
 * - Conserver exactement les boutons ? Retirer faites ? et ? Liste de d?part ?.
 * - Conserver le syst?me existant de cases ? cocher.
 * - Lorsqu?une activit? est coch?e, conserver l?animation actuelle du crayon,
 *   le texte ray? et le d?placement de l?activit? dans la rubrique ? Faites ?.
 * - Lorsqu?elle est d?coch?e, elle doit revenir dans ? ? faire ? comme aujourd?hui.
 * - Conserver la jauge, les onglets ? Toutes / To do / Faites ?, l?ajout personnel
 *   et toutes les donn?es localStorage d?j? pr?sentes.
 * - Ce fichier sert uniquement ? alimenter la liste existante avec des donn?es.
 * - Ne jamais ?craser `fait` dans ce fichier : le statut utilisateur reste dans localStorage.
 *
 * POINT DE D?PART DES TRAJETS :
 * ETS, pavillon A ? 1100 rue Notre-Dame Ouest, Montr?al.
 *
 * IMPORTANT :
 * Les dur?es de trajet sont des estimations de planification, pas du temps r?el.
 * Les entr?es marqu?es ? ? v?rifier avant visite ? doivent ?tre confirm?es avant affichage
 * comme information certaine. Ne jamais inventer une valeur manquante.
 */

window.ETS_ORIGIN = {
  "nom": "ETS — pavillon A",
  "adresse": "1100 rue Notre-Dame Ouest, Montréal, QC"
};

window.places = [
  {
    "id": "musee-imaginarium",
    "nom": "Musée Imaginarium",
    "type": "activite",
    "categorie": "Activités et amusement",
    "sousCategorie": "Expérience immersive",
    "descriptionCourte": "Parcours de salles immersives et photogéniques.",
    "quartier": "Griffintown",
    "adresse": "290 rue de la Montagne, Montréal, QC",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 30,
      "maximum": 40,
      "devise": "CAD",
      "texte": "Environ 30 à 40 $",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": {
        "duree": "8 à 12 min",
        "description": "Estimation depuis l’ETS, pavillon A."
      },
      "transport": {
        "duree": "10 à 18 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": {
        "duree": "4 à 7 min",
        "description": "Estimation à vélo depuis l’ETS."
      },
      "voiture": {
        "duree": "5 à 10 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "1 h à 1 h 30",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Intérieur",
      "Photo",
      "Jour de pluie"
    ],
    "tags": [
      "immersif",
      "photo",
      "griffintown"
    ],
    "halal": null,
    "gratuit": false,
    "reservation": "Conseillée",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": false,
    "priorite": "Très recommandé",
    "siteOfficiel": "https://museeimaginarium.com/",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "ETS et Griffintown"
  },
  {
    "id": "lanneau-de-place-ville-marie",
    "nom": "L’Anneau de Place Ville Marie",
    "type": "culture",
    "categorie": "Culture",
    "sousCategorie": "Œuvre urbaine",
    "descriptionCourte": "Grande installation circulaire lumineuse au centre-ville.",
    "quartier": "Centre-ville",
    "adresse": "Esplanade Place Ville Marie, 1 Place Ville Marie, Montréal, QC",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 0,
      "maximum": 0,
      "devise": "CAD",
      "texte": "Gratuit",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": {
        "duree": "18 à 23 min",
        "description": "Estimation depuis l’ETS, pavillon A."
      },
      "transport": {
        "duree": "15 à 25 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": {
        "duree": "7 à 10 min",
        "description": "Estimation à vélo depuis l’ETS."
      },
      "voiture": {
        "duree": "8 à 15 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "15 à 30 min",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Extérieur",
      "Soirée",
      "Photo"
    ],
    "tags": [
      "anneau",
      "place ville marie",
      "nuit"
    ],
    "halal": null,
    "gratuit": true,
    "reservation": "Non",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": false,
    "priorite": "Très recommandé",
    "siteOfficiel": "https://placevillemarie.com/fr/lanneau",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Centre-ville et Sainte-Catherine"
  },
  {
    "id": "funhub-montreal",
    "nom": "FUNHUB Montréal",
    "type": "activite",
    "categorie": "Activités et amusement",
    "sousCategorie": "Arcade et réalité virtuelle",
    "descriptionCourte": "Arcades, VR, billard, fléchettes et jeux interactifs.",
    "quartier": "Centre-ville",
    "adresse": "733 rue Cathcart, local 2, Montréal, QC H3B 1M6",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 20,
      "maximum": 50,
      "devise": "CAD",
      "texte": "Environ 20 à 50 $; VR 39,99 $",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": {
        "duree": "18 à 24 min",
        "description": "Estimation depuis l’ETS, pavillon A."
      },
      "transport": {
        "duree": "18 à 27 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": {
        "duree": "8 à 12 min",
        "description": "Estimation à vélo depuis l’ETS."
      },
      "voiture": {
        "duree": "8 à 15 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "1 h 30 à 3 h",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Entre amis",
      "Intérieur",
      "Jour de pluie",
      "Soirée"
    ],
    "tags": [
      "arcade",
      "vr",
      "jeux"
    ],
    "halal": null,
    "gratuit": false,
    "reservation": "Conseillée pour la VR",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": false,
    "priorite": "Très recommandé",
    "siteOfficiel": "https://funhub.ca/",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "https://funhub.ca/prices",
    "dateVerification": "2026-07-12",
    "verification": "Vérifié sur source officielle",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Centre-ville et Sainte-Catherine"
  },
  {
    "id": "centre-eaton-de-montreal",
    "nom": "Centre Eaton de Montréal",
    "type": "shopping",
    "categorie": "Shopping",
    "sousCategorie": "Centre commercial",
    "descriptionCourte": "Grand centre commercial relié au réseau souterrain.",
    "quartier": "Centre-ville",
    "adresse": "705 rue Sainte-Catherine Ouest, Montréal, QC",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 0,
      "maximum": null,
      "devise": "CAD",
      "texte": "Entrée gratuite; achats variables",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": {
        "duree": "20 à 25 min",
        "description": "Estimation depuis l’ETS, pavillon A."
      },
      "transport": {
        "duree": "15 à 22 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": {
        "duree": "8 à 12 min",
        "description": "Estimation à vélo depuis l’ETS."
      },
      "voiture": {
        "duree": "8 à 15 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "1 h à 3 h",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Intérieur",
      "Shopping",
      "Jour de pluie"
    ],
    "tags": [
      "shopping",
      "eaton",
      "sainte-catherine"
    ],
    "halal": null,
    "gratuit": true,
    "reservation": "Non",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": false,
    "priorite": "À voir",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Centre-ville et Sainte-Catherine"
  },
  {
    "id": "rue-sainte-catherine",
    "nom": "Rue Sainte-Catherine",
    "type": "quartier",
    "categorie": "Quartiers et découvertes",
    "sousCategorie": "Rue commerçante",
    "descriptionCourte": "",
    "quartier": "Centre-ville",
    "adresse": "Rue Sainte-Catherine, Montréal, QC",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 0,
      "maximum": null,
      "devise": "CAD",
      "texte": "Gratuit hors achats",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": {
        "duree": "15 à 30 min",
        "description": "Estimation depuis l’ETS, pavillon A."
      },
      "transport": {
        "duree": "12 à 25 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": {
        "duree": "7 à 15 min",
        "description": "Estimation à vélo depuis l’ETS."
      },
      "voiture": {
        "duree": "8 à 18 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "1 h à une demi-journée",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Shopping",
      "Extérieur",
      "Soirée"
    ],
    "tags": [
      "centre-ville",
      "shopping",
      "rue"
    ],
    "halal": null,
    "gratuit": true,
    "reservation": "Non",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": false,
    "priorite": "Incontournable",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Centre-ville et Sainte-Catherine"
  },
  {
    "id": "place-des-arts-et-quartier-des-spectacles",
    "nom": "Place des Arts et Quartier des spectacles",
    "type": "quartier",
    "categorie": "Quartiers et découvertes",
    "sousCategorie": "Quartier culturel",
    "descriptionCourte": "",
    "quartier": "Quartier des spectacles",
    "adresse": "Place des Arts, Montréal, QC",
    "coordonnees": {
      "latitude": 45.508674,
      "longitude": -73.566572
    },
    "prix": {
      "minimum": 0,
      "maximum": null,
      "devise": "CAD",
      "texte": "Gratuit hors spectacles",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": {
        "duree": "25 à 32 min",
        "description": "Estimation depuis l’ETS, pavillon A."
      },
      "transport": {
        "duree": "18 à 27 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": {
        "duree": "10 à 15 min",
        "description": "Estimation à vélo depuis l’ETS."
      },
      "voiture": {
        "duree": "10 à 18 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "1 h à une soirée",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Culture",
      "Extérieur",
      "Soirée"
    ],
    "tags": [
      "festival",
      "concert",
      "place des arts"
    ],
    "halal": null,
    "gratuit": true,
    "reservation": "Non hors spectacle",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": false,
    "priorite": "Incontournable",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": 45.508674,
    "longitude": -73.566572,
    "sector": "Centre-ville et Sainte-Catherine"
  },
  {
    "id": "autour-du-centre-bell",
    "nom": "Autour du Centre Bell",
    "type": "quartier",
    "categorie": "Quartiers et découvertes",
    "sousCategorie": "Centre-ville sportif",
    "descriptionCourte": "",
    "quartier": "Centre-ville",
    "adresse": "1909 avenue des Canadiens-de-Montréal, Montréal, QC",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 0,
      "maximum": null,
      "devise": "CAD",
      "texte": "Gratuit hors événement",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": {
        "duree": "12 à 18 min",
        "description": "Estimation depuis l’ETS, pavillon A."
      },
      "transport": {
        "duree": "10 à 18 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": {
        "duree": "5 à 8 min",
        "description": "Estimation à vélo depuis l’ETS."
      },
      "voiture": {
        "duree": "5 à 12 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "30 min à 2 h",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Sport",
      "Soirée",
      "Extérieur"
    ],
    "tags": [
      "centre bell",
      "hockey",
      "downtown"
    ],
    "halal": null,
    "gratuit": true,
    "reservation": "Billet requis pour événement",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": false,
    "priorite": "À voir",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Centre-ville et Sainte-Catherine"
  },
  {
    "id": "vieux-montreal",
    "nom": "Vieux-Montréal",
    "type": "quartier",
    "categorie": "Quartiers et découvertes",
    "sousCategorie": "Quartier historique",
    "descriptionCourte": "",
    "quartier": "Vieux-Montréal",
    "adresse": "Vieux-Montréal, Montréal, QC",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 0,
      "maximum": null,
      "devise": "CAD",
      "texte": "Gratuit hors achats",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": {
        "duree": "28 à 40 min",
        "description": "Estimation depuis l’ETS, pavillon A."
      },
      "transport": {
        "duree": "22 à 32 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": {
        "duree": "12 à 18 min",
        "description": "Estimation à vélo depuis l’ETS."
      },
      "voiture": {
        "duree": "10 à 20 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "2 h à une demi-journée",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Balade",
      "Culture",
      "Photo",
      "Extérieur"
    ],
    "tags": [
      "vieux montréal",
      "historique",
      "cobblestone"
    ],
    "halal": null,
    "gratuit": true,
    "reservation": "Non",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": false,
    "priorite": "Incontournable",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Vieux-Montr?al et Vieux-Port"
  },
  {
    "id": "vieux-port-de-montreal",
    "nom": "Vieux-Port de Montréal",
    "type": "quartier",
    "categorie": "Quartiers et découvertes",
    "sousCategorie": "Front de mer",
    "descriptionCourte": "",
    "quartier": "Vieux-Port",
    "adresse": "Vieux-Port de Montréal, Montréal, QC",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 0,
      "maximum": null,
      "devise": "CAD",
      "texte": "Gratuit hors attractions",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": {
        "duree": "32 à 45 min",
        "description": "Estimation depuis l’ETS, pavillon A."
      },
      "transport": {
        "duree": "25 à 35 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": {
        "duree": "13 à 20 min",
        "description": "Estimation à vélo depuis l’ETS."
      },
      "voiture": {
        "duree": "12 à 22 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "2 h à une journée",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Balade",
      "Extérieur",
      "Couple",
      "Famille"
    ],
    "tags": [
      "vieux port",
      "fleuve",
      "promenade"
    ],
    "halal": null,
    "gratuit": true,
    "reservation": "Non",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": false,
    "priorite": "Incontournable",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Vieux-Montr?al et Vieux-Port"
  },
  {
    "id": "la-grande-roue-de-montreal",
    "nom": "La Grande Roue de Montréal",
    "type": "activite",
    "categorie": "Activités et amusement",
    "sousCategorie": "Point de vue",
    "descriptionCourte": "Tour panoramique d’environ 18 minutes dans une cabine fermée.",
    "quartier": "Vieux-Port",
    "adresse": "362 rue de la Commune Est, Montréal, QC",
    "coordonnees": {
      "latitude": 45.508517,
      "longitude": -73.548623
    },
    "prix": {
      "minimum": 24,
      "maximum": 29.5,
      "devise": "CAD",
      "texte": "Étudiant 24 $; adulte 29,50 $ + taxes",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": {
        "duree": "35 à 45 min",
        "description": "Estimation depuis l’ETS, pavillon A."
      },
      "transport": {
        "duree": "28 à 38 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": {
        "duree": "14 à 20 min",
        "description": "Estimation à vélo depuis l’ETS."
      },
      "voiture": {
        "duree": "12 à 22 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "45 min à 1 h 30",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Couple",
      "Photo",
      "Soirée",
      "Famille"
    ],
    "tags": [
      "grande roue",
      "vue",
      "vieux port"
    ],
    "halal": null,
    "gratuit": false,
    "reservation": "Conseillée",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": false,
    "priorite": "Très recommandé",
    "siteOfficiel": "https://lagranderouedemontreal.com/",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "https://lagranderouedemontreal.com/tickets/",
    "dateVerification": "2026-07-12",
    "verification": "Vérifié sur source officielle",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": 45.508517,
    "longitude": -73.548623,
    "sector": "Vieux-Montr?al et Vieux-Port"
  },
  {
    "id": "voiles-en-voiles",
    "nom": "Voiles en Voiles",
    "type": "activite",
    "categorie": "Activités et amusement",
    "sousCategorie": "Parcours d’aventure",
    "descriptionCourte": "Parcours aériens et activités dans des bateaux pirates.",
    "quartier": "Vieux-Port",
    "adresse": "Vieux-Port de Montréal, Montréal, QC",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 15.99,
      "maximum": 65,
      "devise": "CAD",
      "texte": "15,99 $ parc au sol; formule complète à vérifier",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": {
        "duree": "35 à 45 min",
        "description": "Estimation depuis l’ETS, pavillon A."
      },
      "transport": {
        "duree": "28 à 40 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": {
        "duree": "15 à 20 min",
        "description": "Estimation à vélo depuis l’ETS."
      },
      "voiture": {
        "duree": "12 à 22 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "1 h à 4 h",
    "saison": [
      "Printemps",
      "Été",
      "Automne"
    ],
    "ambiance": [
      "Entre amis",
      "Extérieur",
      "Sensations",
      "Famille"
    ],
    "tags": [
      "bateaux pirates",
      "parcours aérien",
      "vieux port"
    ],
    "halal": null,
    "gratuit": false,
    "reservation": "Conseillée",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": false,
    "priorite": "Très recommandé",
    "siteOfficiel": "https://www.voilesenvoiles.com/",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "https://www.voilesenvoiles.com/billets-journaliers/",
    "dateVerification": "2026-07-12",
    "verification": "Vérifié sur source officielle",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Vieux-Montr?al et Vieux-Port"
  },
  {
    "id": "cirque-du-soleil-au-grand-chapiteau",
    "nom": "Cirque du Soleil au Grand Chapiteau",
    "type": "activite",
    "categorie": "Activités et amusement",
    "sousCategorie": "Spectacle",
    "descriptionCourte": "",
    "quartier": "Vieux-Port",
    "adresse": "Grand Chapiteau, Vieux-Port de Montréal, QC",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 70,
      "maximum": 200,
      "devise": "CAD",
      "texte": "Prix variable, souvent 70 à 200 $",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": {
        "duree": "35 à 45 min",
        "description": "Estimation depuis l’ETS, pavillon A."
      },
      "transport": {
        "duree": "28 à 40 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": {
        "duree": "15 à 20 min",
        "description": "Estimation à vélo depuis l’ETS."
      },
      "voiture": {
        "duree": "12 à 22 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "Environ 2 h",
    "saison": [
      "Printemps",
      "Été"
    ],
    "ambiance": [
      "Spectacle",
      "Couple",
      "Soirée"
    ],
    "tags": [
      "cirque du soleil",
      "chapiteau"
    ],
    "halal": null,
    "gratuit": false,
    "reservation": "Obligatoire",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": true,
    "priorite": "Occasion spéciale",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Vieux-Montr?al et Vieux-Port"
  },
  {
    "id": "feux-loto-quebec",
    "nom": "Feux Loto-Québec",
    "type": "culture",
    "categorie": "Culture",
    "sousCategorie": "Événement estival",
    "descriptionCourte": "",
    "quartier": "Vieux-Port / La Ronde",
    "adresse": "Secteur du pont Jacques-Cartier et Vieux-Port, Montréal, QC",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 0,
      "maximum": 0,
      "devise": "CAD",
      "texte": "Gratuit depuis plusieurs points de vue",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": {
        "duree": "30 à 45 min",
        "description": "Estimation depuis l’ETS, pavillon A."
      },
      "transport": {
        "duree": "25 à 40 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": {
        "duree": "15 à 22 min",
        "description": "Estimation à vélo depuis l’ETS."
      },
      "voiture": {
        "duree": "15 à 30 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "1 h à 2 h",
    "saison": [
      "Été"
    ],
    "ambiance": [
      "Soirée",
      "Extérieur",
      "Entre amis"
    ],
    "tags": [
      "feux d'artifice",
      "été"
    ],
    "halal": null,
    "gratuit": true,
    "reservation": "Non pour les points de vue gratuits",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": true,
    "priorite": "Incontournable",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Vieux-Montr?al et Vieux-Port"
  },
  {
    "id": "queues-de-castor-vieux-montreal",
    "nom": "Queues de Castor — Vieux-Montréal",
    "type": "restaurant",
    "categorie": "Restaurants et gourmandises",
    "sousCategorie": "Dessert québécois",
    "descriptionCourte": "",
    "quartier": "Vieux-Montréal",
    "adresse": "Vieux-Montréal, Montréal, QC",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 7,
      "maximum": 15,
      "devise": "CAD",
      "texte": "Environ 7 à 15 $",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": {
        "duree": "30 à 40 min",
        "description": "Estimation depuis l’ETS, pavillon A."
      },
      "transport": {
        "duree": "22 à 32 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": {
        "duree": "12 à 18 min",
        "description": "Estimation à vélo depuis l’ETS."
      },
      "voiture": {
        "duree": "10 à 20 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "15 à 30 min",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Dessert",
      "Touristique"
    ],
    "tags": [
      "queue de castor",
      "dessert",
      "canadien"
    ],
    "halal": null,
    "gratuit": false,
    "reservation": "Non",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": false,
    "priorite": "Très recommandé",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Vieux-Montr?al et Vieux-Port"
  },
  {
    "id": "belvedere-kondiaronk",
    "nom": "Belvédère Kondiaronk",
    "type": "nature",
    "categorie": "Nature et points de vue",
    "sousCategorie": "Belvédère",
    "descriptionCourte": "",
    "quartier": "Mont-Royal",
    "adresse": "Belvédère Kondiaronk, parc du Mont-Royal, Montréal, QC",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 0,
      "maximum": 0,
      "devise": "CAD",
      "texte": "Gratuit",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": null,
      "transport": {
        "duree": "35 à 50 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": {
        "duree": "25 à 35 min",
        "description": "Estimation à vélo depuis l’ETS."
      },
      "voiture": {
        "duree": "18 à 30 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "1 h à 3 h",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Nature",
      "Photo",
      "Extérieur"
    ],
    "tags": [
      "mont royal",
      "vue",
      "belvédère"
    ],
    "halal": null,
    "gratuit": true,
    "reservation": "Non",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": false,
    "priorite": "Incontournable",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Plateau et Mont-Royal"
  },
  {
    "id": "lac-aux-castors",
    "nom": "Lac aux Castors",
    "type": "nature",
    "categorie": "Nature et points de vue",
    "sousCategorie": "Parc et lac",
    "descriptionCourte": "",
    "quartier": "Mont-Royal",
    "adresse": "Lac aux Castors, parc du Mont-Royal, Montréal, QC",
    "coordonnees": {
      "latitude": 45.49875,
      "longitude": -73.597
    },
    "prix": {
      "minimum": 0,
      "maximum": 0,
      "devise": "CAD",
      "texte": "Gratuit hors location",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": null,
      "transport": {
        "duree": "35 à 50 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": {
        "duree": "25 à 35 min",
        "description": "Estimation à vélo depuis l’ETS."
      },
      "voiture": {
        "duree": "18 à 30 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "1 h à 3 h",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Nature",
      "Chill",
      "Famille",
      "Extérieur"
    ],
    "tags": [
      "lac",
      "mont royal",
      "pique-nique"
    ],
    "halal": null,
    "gratuit": true,
    "reservation": "Non",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": false,
    "priorite": "Incontournable",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": 45.49875,
    "longitude": -73.597,
    "sector": "Plateau et Mont-Royal"
  },
  {
    "id": "summit-circle-lookout",
    "nom": "Summit Circle Lookout",
    "type": "nature",
    "categorie": "Nature et points de vue",
    "sousCategorie": "Lever de soleil",
    "descriptionCourte": "",
    "quartier": "Westmount",
    "adresse": "Summit Circle, Westmount, QC",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 0,
      "maximum": 0,
      "devise": "CAD",
      "texte": "Gratuit",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": null,
      "transport": {
        "duree": "35 à 50 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": {
        "duree": "25 à 35 min",
        "description": "Estimation à vélo depuis l’ETS."
      },
      "voiture": {
        "duree": "15 à 25 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "45 min à 1 h 30",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Lever de soleil",
      "Photo",
      "Extérieur"
    ],
    "tags": [
      "sunrise",
      "westmount",
      "vue"
    ],
    "halal": null,
    "gratuit": true,
    "reservation": "Non",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": false,
    "priorite": "Très recommandé",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Plateau et Mont-Royal"
  },
  {
    "id": "avenue-du-mont-royal",
    "nom": "Avenue du Mont-Royal",
    "type": "quartier",
    "categorie": "Quartiers et découvertes",
    "sousCategorie": "Rue commerçante",
    "descriptionCourte": "",
    "quartier": "Plateau-Mont-Royal",
    "adresse": "Avenue du Mont-Royal, Montréal, QC",
    "coordonnees": {
      "latitude": 45.524303,
      "longitude": -73.582606
    },
    "prix": {
      "minimum": 0,
      "maximum": null,
      "devise": "CAD",
      "texte": "Gratuit hors achats",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": null,
      "transport": {
        "duree": "25 à 38 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": {
        "duree": "18 à 28 min",
        "description": "Estimation à vélo depuis l’ETS."
      },
      "voiture": {
        "duree": "15 à 25 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "1 h à une demi-journée",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Balade",
      "Shopping",
      "Café",
      "Extérieur"
    ],
    "tags": [
      "plateau",
      "mont royal",
      "piétonne"
    ],
    "halal": null,
    "gratuit": true,
    "reservation": "Non",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": false,
    "priorite": "Incontournable",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": 45.524303,
    "longitude": -73.582606,
    "sector": "Plateau et Mont-Royal"
  },
  {
    "id": "avenue-duluth",
    "nom": "Avenue Duluth",
    "type": "quartier",
    "categorie": "Quartiers et découvertes",
    "sousCategorie": "Rue de quartier",
    "descriptionCourte": "",
    "quartier": "Plateau-Mont-Royal",
    "adresse": "Avenue Duluth, Montréal, QC",
    "coordonnees": {
      "latitude": 45.521034,
      "longitude": -73.575579
    },
    "prix": {
      "minimum": 0,
      "maximum": null,
      "devise": "CAD",
      "texte": "Gratuit hors achats",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": null,
      "transport": {
        "duree": "28 à 40 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": {
        "duree": "20 à 30 min",
        "description": "Estimation à vélo depuis l’ETS."
      },
      "voiture": {
        "duree": "15 à 25 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "1 h à 3 h",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Balade",
      "Restaurants",
      "Extérieur"
    ],
    "tags": [
      "duluth",
      "plateau",
      "terrasses"
    ],
    "halal": null,
    "gratuit": true,
    "reservation": "Non",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": false,
    "priorite": "À voir",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": 45.521034,
    "longitude": -73.575579,
    "sector": "Plateau et Mont-Royal"
  },
  {
    "id": "square-saint-louis",
    "nom": "Square Saint-Louis",
    "type": "nature",
    "categorie": "Nature et points de vue",
    "sousCategorie": "Parc urbain",
    "descriptionCourte": "",
    "quartier": "Plateau-Mont-Royal",
    "adresse": "Square Saint-Louis, Montréal, QC",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 0,
      "maximum": 0,
      "devise": "CAD",
      "texte": "Gratuit",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": null,
      "transport": {
        "duree": "25 à 35 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": {
        "duree": "18 à 25 min",
        "description": "Estimation à vélo depuis l’ETS."
      },
      "voiture": {
        "duree": "12 à 22 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "30 min à 1 h",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Chill",
      "Photo",
      "Extérieur"
    ],
    "tags": [
      "fontaine",
      "square",
      "plateau"
    ],
    "halal": null,
    "gratuit": true,
    "reservation": "Non",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": false,
    "priorite": "À voir",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Plateau et Mont-Royal"
  },
  {
    "id": "parc-la-fontaine",
    "nom": "Parc La Fontaine",
    "type": "nature",
    "categorie": "Nature et points de vue",
    "sousCategorie": "Parc urbain",
    "descriptionCourte": "",
    "quartier": "Plateau-Mont-Royal",
    "adresse": "Parc La Fontaine, Montréal, QC",
    "coordonnees": {
      "latitude": 45.526,
      "longitude": -73.5689
    },
    "prix": {
      "minimum": 0,
      "maximum": 0,
      "devise": "CAD",
      "texte": "Gratuit",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": null,
      "transport": {
        "duree": "30 à 45 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": {
        "duree": "20 à 30 min",
        "description": "Estimation à vélo depuis l’ETS."
      },
      "voiture": {
        "duree": "15 à 25 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "1 h à 3 h",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Nature",
      "Chill",
      "Pique-nique",
      "Extérieur"
    ],
    "tags": [
      "parc la fontaine",
      "plateau"
    ],
    "halal": null,
    "gratuit": true,
    "reservation": "Non",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": false,
    "priorite": "Très recommandé",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": 45.526,
    "longitude": -73.5689,
    "sector": "Plateau et Mont-Royal"
  },
  {
    "id": "kem-coba",
    "nom": "Kem Coba",
    "type": "restaurant",
    "categorie": "Restaurants et gourmandises",
    "sousCategorie": "Glacier",
    "descriptionCourte": "",
    "quartier": "Mile End",
    "adresse": "60 avenue Fairmount Ouest, Montréal, QC",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 5,
      "maximum": 12,
      "devise": "CAD",
      "texte": "Environ 5 à 12 $",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": null,
      "transport": {
        "duree": "35 à 45 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": {
        "duree": "22 à 32 min",
        "description": "Estimation à vélo depuis l’ETS."
      },
      "voiture": {
        "duree": "18 à 28 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "15 à 30 min",
    "saison": [
      "Printemps",
      "Été",
      "Automne"
    ],
    "ambiance": [
      "Dessert",
      "Extérieur"
    ],
    "tags": [
      "glace",
      "mile end",
      "saisonnier"
    ],
    "halal": null,
    "gratuit": false,
    "reservation": "Non",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": false,
    "priorite": "Très recommandé",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Mile End"
  },
  {
    "id": "september-cafe",
    "nom": "September Café",
    "type": "restaurant",
    "categorie": "Restaurants et gourmandises",
    "sousCategorie": "Brunch",
    "descriptionCourte": "",
    "quartier": "Petite-Bourgogne",
    "adresse": "2471 rue Notre-Dame Ouest, Montréal, QC",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 15,
      "maximum": 35,
      "devise": "CAD",
      "texte": "Environ 15 à 35 $",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": {
        "duree": "22 à 30 min",
        "description": "Estimation depuis l’ETS, pavillon A."
      },
      "transport": {
        "duree": "18 à 28 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": {
        "duree": "8 à 12 min",
        "description": "Estimation à vélo depuis l’ETS."
      },
      "voiture": {
        "duree": "8 à 15 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "1 h à 1 h 30",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Brunch",
      "Café"
    ],
    "tags": [
      "pancakes",
      "brunch",
      "café"
    ],
    "halal": null,
    "gratuit": false,
    "reservation": "Conseillée",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": false,
    "priorite": "Très recommandé",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "ETS et Griffintown"
  },
  {
    "id": "tacos-mayas",
    "nom": "Tacos Mayas",
    "type": "restaurant",
    "categorie": "Restaurants et gourmandises",
    "sousCategorie": "Mexicain",
    "descriptionCourte": "Le TikTok indique des options halal et non halal; confirmer la séparation et la certification.",
    "quartier": "Plateau-Mont-Royal",
    "adresse": "Près du métro Mont-Royal, Montréal, QC",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 10,
      "maximum": 20,
      "devise": "CAD",
      "texte": "Environ 10 à 20 $",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": null,
      "transport": {
        "duree": "25 à 35 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": {
        "duree": "18 à 28 min",
        "description": "Estimation à vélo depuis l’ETS."
      },
      "voiture": {
        "duree": "15 à 25 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "45 min à 1 h 30",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Entre amis",
      "Soirée"
    ],
    "tags": [
      "tacos",
      "birria",
      "mexicain"
    ],
    "halal": true,
    "gratuit": false,
    "reservation": "Non",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": false,
    "priorite": "À vérifier",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Plateau et Mont-Royal"
  },
  {
    "id": "focaccia-pizzeria-napolitaine",
    "nom": "Focaccia Pizzeria Napolitaine",
    "type": "restaurant",
    "categorie": "Restaurants et gourmandises",
    "sousCategorie": "Pizza",
    "descriptionCourte": "",
    "quartier": "Plateau-Mont-Royal",
    "adresse": "2202 avenue du Mont-Royal Est, Montréal, QC",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 15,
      "maximum": 35,
      "devise": "CAD",
      "texte": "Environ 15 à 35 $",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": null,
      "transport": {
        "duree": "30 à 42 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": {
        "duree": "20 à 30 min",
        "description": "Estimation à vélo depuis l’ETS."
      },
      "voiture": {
        "duree": "15 à 25 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "1 h à 1 h 30",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Couple",
      "Entre amis"
    ],
    "tags": [
      "pizza",
      "napolitaine",
      "plateau"
    ],
    "halal": true,
    "gratuit": false,
    "reservation": "Conseillée",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": false,
    "priorite": "Très recommandé",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Plateau et Mont-Royal"
  },
  {
    "id": "mr-puffs-mont-royal",
    "nom": "Mr Puffs — Mont-Royal",
    "type": "restaurant",
    "categorie": "Restaurants et gourmandises",
    "sousCategorie": "Dessert",
    "descriptionCourte": "",
    "quartier": "Plateau-Mont-Royal",
    "adresse": "1810 avenue du Mont-Royal Est, Montréal, QC",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 5,
      "maximum": 15,
      "devise": "CAD",
      "texte": "Environ 5 à 15 $",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": null,
      "transport": {
        "duree": "28 à 40 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": {
        "duree": "18 à 28 min",
        "description": "Estimation à vélo depuis l’ETS."
      },
      "voiture": {
        "duree": "15 à 25 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "15 à 30 min",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Dessert",
      "Entre amis"
    ],
    "tags": [
      "loukoumades",
      "puffs",
      "chocolat"
    ],
    "halal": null,
    "gratuit": false,
    "reservation": "Non",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": false,
    "priorite": "Très recommandé",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Plateau et Mont-Royal"
  },
  {
    "id": "tsukuyomi-ramen",
    "nom": "Tsukuyomi Ramen",
    "type": "restaurant",
    "categorie": "Restaurants et gourmandises",
    "sousCategorie": "Ramen",
    "descriptionCourte": "",
    "quartier": "Montréal",
    "adresse": "Montréal, QC — succursale à confirmer",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 18,
      "maximum": 35,
      "devise": "CAD",
      "texte": "Environ 18 à 35 $",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": null,
      "transport": {
        "duree": "25 à 45 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": {
        "duree": "18 à 35 min",
        "description": "Estimation à vélo depuis l’ETS."
      },
      "voiture": {
        "duree": "15 à 30 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "1 h à 1 h 30",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Ramen",
      "Intérieur"
    ],
    "tags": [
      "ramen",
      "japonais",
      "totoro"
    ],
    "halal": null,
    "gratuit": false,
    "reservation": "À vérifier",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": false,
    "priorite": "À voir",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Centre-ville et Sainte-Catherine"
  },
  {
    "id": "griffintown",
    "nom": "Griffintown",
    "type": "quartier",
    "categorie": "Quartiers et découvertes",
    "sousCategorie": "Quartier moderne",
    "descriptionCourte": "",
    "quartier": "Griffintown",
    "adresse": "Griffintown, Montréal, QC",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 0,
      "maximum": null,
      "devise": "CAD",
      "texte": "Gratuit hors achats",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": {
        "duree": "5 à 20 min",
        "description": "Estimation depuis l’ETS, pavillon A."
      },
      "transport": {
        "duree": "8 à 18 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": {
        "duree": "3 à 10 min",
        "description": "Estimation à vélo depuis l’ETS."
      },
      "voiture": {
        "duree": "5 à 12 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "1 h à 3 h",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Balade",
      "Architecture",
      "Photo"
    ],
    "tags": [
      "griffintown",
      "proche ets"
    ],
    "halal": null,
    "gratuit": true,
    "reservation": "Non",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": false,
    "priorite": "Très recommandé",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "ETS et Griffintown"
  },
  {
    "id": "canal-de-lachine",
    "nom": "Canal de Lachine",
    "type": "nature",
    "categorie": "Nature et points de vue",
    "sousCategorie": "Canal et piste cyclable",
    "descriptionCourte": "",
    "quartier": "Sud-Ouest",
    "adresse": "Canal de Lachine, Montréal, QC",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 0,
      "maximum": 0,
      "devise": "CAD",
      "texte": "Gratuit",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": {
        "duree": "10 à 25 min",
        "description": "Estimation depuis l’ETS, pavillon A."
      },
      "transport": {
        "duree": "10 à 25 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": {
        "duree": "5 à 15 min",
        "description": "Estimation à vélo depuis l’ETS."
      },
      "voiture": {
        "duree": "8 à 18 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "1 h à une demi-journée",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Vélo",
      "Balade",
      "Extérieur",
      "Coucher de soleil"
    ],
    "tags": [
      "canal",
      "vélo",
      "sud-ouest"
    ],
    "halal": null,
    "gratuit": true,
    "reservation": "Non",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": false,
    "priorite": "Incontournable",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Centre-ville et Sainte-Catherine"
  },
  {
    "id": "marche-atwater",
    "nom": "Marché Atwater",
    "type": "quartier",
    "categorie": "Quartiers et découvertes",
    "sousCategorie": "Marché public",
    "descriptionCourte": "",
    "quartier": "Saint-Henri",
    "adresse": "138 avenue Atwater, Montréal, QC",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 0,
      "maximum": null,
      "devise": "CAD",
      "texte": "Entrée gratuite; achats variables",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": {
        "duree": "25 à 35 min",
        "description": "Estimation depuis l’ETS, pavillon A."
      },
      "transport": {
        "duree": "18 à 28 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": {
        "duree": "10 à 15 min",
        "description": "Estimation à vélo depuis l’ETS."
      },
      "voiture": {
        "duree": "8 à 15 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "1 h à 2 h",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Marché",
      "Food",
      "Balade"
    ],
    "tags": [
      "atwater",
      "marché",
      "canal"
    ],
    "halal": null,
    "gratuit": true,
    "reservation": "Non",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": false,
    "priorite": "Très recommandé",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Centre-ville et Sainte-Catherine"
  },
  {
    "id": "rue-wellington-pietonne",
    "nom": "Rue Wellington piétonne",
    "type": "quartier",
    "categorie": "Quartiers et découvertes",
    "sousCategorie": "Rue commerçante",
    "descriptionCourte": "",
    "quartier": "Verdun",
    "adresse": "Rue Wellington, Verdun, QC",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 0,
      "maximum": null,
      "devise": "CAD",
      "texte": "Gratuit hors achats",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": null,
      "transport": {
        "duree": "28 à 40 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": {
        "duree": "18 à 28 min",
        "description": "Estimation à vélo depuis l’ETS."
      },
      "voiture": {
        "duree": "15 à 25 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "1 h à 3 h",
    "saison": [
      "Été",
      "Toute l’année"
    ],
    "ambiance": [
      "Balade",
      "Restaurants",
      "Extérieur"
    ],
    "tags": [
      "verdun",
      "wellington"
    ],
    "halal": null,
    "gratuit": true,
    "reservation": "Non",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": false,
    "priorite": "Très recommandé",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Verdun et Wellington"
  },
  {
    "id": "passerelle-wellington",
    "nom": "Passerelle Wellington",
    "type": "nature",
    "categorie": "Nature et points de vue",
    "sousCategorie": "Coucher de soleil",
    "descriptionCourte": "",
    "quartier": "Verdun / Sud-Ouest",
    "adresse": "Secteur de la passerelle Wellington, Montréal, QC",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 0,
      "maximum": 0,
      "devise": "CAD",
      "texte": "Gratuit",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": null,
      "transport": {
        "duree": "25 à 40 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": {
        "duree": "15 à 25 min",
        "description": "Estimation à vélo depuis l’ETS."
      },
      "voiture": {
        "duree": "12 à 22 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "30 min à 1 h 30",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Coucher de soleil",
      "Photo",
      "Chill"
    ],
    "tags": [
      "passerelle",
      "sunset",
      "eau"
    ],
    "halal": null,
    "gratuit": true,
    "reservation": "Non",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": false,
    "priorite": "Très recommandé",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Verdun et Wellington"
  },
  {
    "id": "parc-de-dieppe",
    "nom": "Parc de Dieppe",
    "type": "nature",
    "categorie": "Nature et points de vue",
    "sousCategorie": "Point de vue",
    "descriptionCourte": "",
    "quartier": "Cité du Havre",
    "adresse": "Parc de Dieppe, Montréal, QC",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 0,
      "maximum": 0,
      "devise": "CAD",
      "texte": "Gratuit",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": null,
      "transport": {
        "duree": "35 à 50 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": {
        "duree": "20 à 30 min",
        "description": "Estimation à vélo depuis l’ETS."
      },
      "voiture": {
        "duree": "12 à 22 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "1 h à 2 h",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Coucher de soleil",
      "Photo",
      "Extérieur"
    ],
    "tags": [
      "parc de dieppe",
      "skyline",
      "vieux port"
    ],
    "halal": null,
    "gratuit": true,
    "reservation": "Non",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": false,
    "priorite": "Très recommandé",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Vieux-Montr?al et Vieux-Port"
  },
  {
    "id": "belvedere-sous-le-pont-samuel-de-champlain",
    "nom": "Belvédère sous le pont Samuel-De Champlain",
    "type": "nature",
    "categorie": "Nature et points de vue",
    "sousCategorie": "Point de vue",
    "descriptionCourte": "",
    "quartier": "Brossard / Verdun",
    "adresse": "Secteur sous le pont Samuel-De Champlain — point exact à confirmer",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 0,
      "maximum": 0,
      "devise": "CAD",
      "texte": "Gratuit",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": null,
      "transport": {
        "duree": "40 à 60 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": {
        "duree": "25 à 40 min",
        "description": "Estimation à vélo depuis l’ETS."
      },
      "voiture": {
        "duree": "20 à 35 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "30 min à 1 h 30",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Coucher de soleil",
      "Photo",
      "Extérieur"
    ],
    "tags": [
      "pont champlain",
      "vue",
      "fleuve"
    ],
    "halal": null,
    "gratuit": true,
    "reservation": "Non",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": false,
    "priorite": "À vérifier",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Verdun et Wellington"
  },
  {
    "id": "ile-sainte-helene",
    "nom": "Île Sainte-Hélène",
    "type": "nature",
    "categorie": "Nature et points de vue",
    "sousCategorie": "Île et parc",
    "descriptionCourte": "",
    "quartier": "Parc Jean-Drapeau",
    "adresse": "Île Sainte-Hélène, Montréal, QC",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 0,
      "maximum": 0,
      "devise": "CAD",
      "texte": "Gratuit hors attractions",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": null,
      "transport": {
        "duree": "30 à 42 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": {
        "duree": "20 à 30 min",
        "description": "Estimation à vélo depuis l’ETS."
      },
      "voiture": {
        "duree": "12 à 20 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "1 h à une demi-journée",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Nature",
      "Balade",
      "Famille"
    ],
    "tags": [
      "île",
      "jean-drapeau",
      "parc"
    ],
    "halal": null,
    "gratuit": true,
    "reservation": "Non",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": false,
    "priorite": "Incontournable",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "?le Sainte-H?l?ne et Parc Jean-Drapeau"
  },
  {
    "id": "traversier-vieux-port-ile-sainte-helene",
    "nom": "Traversier Vieux-Port — Île Sainte-Hélène",
    "type": "activite",
    "categorie": "Activités et amusement",
    "sousCategorie": "Navette fluviale",
    "descriptionCourte": "",
    "quartier": "Vieux-Port / Île Sainte-Hélène",
    "adresse": "Départ à confirmer selon la saison",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 6,
      "maximum": 10,
      "devise": "CAD",
      "texte": "Environ 6 à 10 $; intégration tarifaire à vérifier",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": null,
      "transport": {
        "duree": "30 à 45 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": null,
      "voiture": null
    },
    "dureeActivite": "15 à 40 min",
    "saison": [
      "Printemps",
      "Été",
      "Automne"
    ],
    "ambiance": [
      "Bateau",
      "Photo",
      "Extérieur"
    ],
    "tags": [
      "navette fluviale",
      "traversier"
    ],
    "halal": null,
    "gratuit": false,
    "reservation": "Conseillée",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": true,
    "priorite": "Très recommandé",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Vieux-Montr?al et Vieux-Port"
  },
  {
    "id": "circuit-gilles-villeneuve-a-velo",
    "nom": "Circuit Gilles-Villeneuve à vélo",
    "type": "nature",
    "categorie": "Nature et points de vue",
    "sousCategorie": "Vélo",
    "descriptionCourte": "",
    "quartier": "Île Notre-Dame",
    "adresse": "Circuit Gilles-Villeneuve, Montréal, QC",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 0,
      "maximum": 0,
      "devise": "CAD",
      "texte": "Gratuit avec son propre vélo",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": null,
      "transport": {
        "duree": "35 à 50 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": {
        "duree": "20 à 30 min",
        "description": "Estimation à vélo depuis l’ETS."
      },
      "voiture": {
        "duree": "15 à 25 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "1 h à 3 h",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Sport",
      "Vélo",
      "Extérieur"
    ],
    "tags": [
      "f1",
      "circuit",
      "vélo"
    ],
    "halal": null,
    "gratuit": true,
    "reservation": "Non",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": false,
    "priorite": "Très recommandé",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Centre-ville et Sainte-Catherine"
  },
  {
    "id": "la-ronde",
    "nom": "La Ronde",
    "type": "activite",
    "categorie": "Activités et amusement",
    "sousCategorie": "Parc d’attractions",
    "descriptionCourte": "",
    "quartier": "Île Sainte-Hélène",
    "adresse": "22 chemin Macdonald, Montréal, QC",
    "coordonnees": {
      "latitude": 45.524533,
      "longitude": -73.535208
    },
    "prix": {
      "minimum": 45,
      "maximum": 90,
      "devise": "CAD",
      "texte": "Environ 45 à 90 $ selon date et formule",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": null,
      "transport": {
        "duree": "35 à 50 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": {
        "duree": "22 à 35 min",
        "description": "Estimation à vélo depuis l’ETS."
      },
      "voiture": {
        "duree": "15 à 25 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "Une demi-journée à une journée",
    "saison": [
      "Printemps",
      "Été",
      "Automne"
    ],
    "ambiance": [
      "Sensations",
      "Entre amis",
      "Extérieur"
    ],
    "tags": [
      "manèges",
      "six flags"
    ],
    "halal": null,
    "gratuit": false,
    "reservation": "Conseillée",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": false,
    "priorite": "Très recommandé",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": 45.524533,
    "longitude": -73.535208,
    "sector": "?le Sainte-H?l?ne et Parc Jean-Drapeau"
  },
  {
    "id": "arcade-casino-de-montreal",
    "nom": "ARcade — Casino de Montréal",
    "type": "activite",
    "categorie": "Activités et amusement",
    "sousCategorie": "Arcade augmentée",
    "descriptionCourte": "",
    "quartier": "Île Notre-Dame",
    "adresse": "1 avenue du Casino, Montréal, QC",
    "coordonnees": {
      "latitude": 45.505472,
      "longitude": -73.525972
    },
    "prix": {
      "minimum": 20,
      "maximum": 50,
      "devise": "CAD",
      "texte": "Environ 20 à 50 $",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": null,
      "transport": {
        "duree": "35 à 50 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": {
        "duree": "22 à 35 min",
        "description": "Estimation à vélo depuis l’ETS."
      },
      "voiture": {
        "duree": "15 à 25 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "1 h à 3 h",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Intérieur",
      "Entre amis",
      "Soirée"
    ],
    "tags": [
      "casino",
      "arcade",
      "moment factory"
    ],
    "halal": null,
    "gratuit": false,
    "reservation": "Conseillée",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": false,
    "priorite": "Très recommandé",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": 45.505472,
    "longitude": -73.525972,
    "sector": "Centre-ville et Sainte-Catherine"
  },
  {
    "id": "biodome-de-montreal",
    "nom": "Biodôme de Montréal",
    "type": "culture",
    "categorie": "Culture",
    "sousCategorie": "Musée nature",
    "descriptionCourte": "",
    "quartier": "Parc olympique",
    "adresse": "4777 avenue Pierre-De Coubertin, Montréal, QC",
    "coordonnees": {
      "latitude": 45.559623,
      "longitude": -73.549714
    },
    "prix": {
      "minimum": 15,
      "maximum": 30,
      "devise": "CAD",
      "texte": "Environ 15 à 30 $",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": null,
      "transport": {
        "duree": "35 à 50 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": {
        "duree": "25 à 35 min",
        "description": "Estimation à vélo depuis l’ETS."
      },
      "voiture": {
        "duree": "18 à 30 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "1 h 30 à 2 h 30",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Intérieur",
      "Famille",
      "Jour de pluie"
    ],
    "tags": [
      "animaux",
      "écosystèmes",
      "biodôme"
    ],
    "halal": null,
    "gratuit": false,
    "reservation": "Conseillée",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": false,
    "priorite": "Incontournable",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": 45.559623,
    "longitude": -73.549714,
    "sector": "Parc olympique et Hochelaga"
  },
  {
    "id": "planetarium-rio-tinto-alcan",
    "nom": "Planétarium Rio Tinto Alcan",
    "type": "culture",
    "categorie": "Culture",
    "sousCategorie": "Planétarium",
    "descriptionCourte": "",
    "quartier": "Parc olympique",
    "adresse": "4801 avenue Pierre-De Coubertin, Montréal, QC",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 15,
      "maximum": 25,
      "devise": "CAD",
      "texte": "Environ 15 à 25 $",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": null,
      "transport": {
        "duree": "35 à 50 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": {
        "duree": "25 à 35 min",
        "description": "Estimation à vélo depuis l’ETS."
      },
      "voiture": {
        "duree": "18 à 30 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "1 h 30 à 2 h 30",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Intérieur",
      "Culture",
      "Jour de pluie"
    ],
    "tags": [
      "espace",
      "projection",
      "planétarium"
    ],
    "halal": null,
    "gratuit": false,
    "reservation": "Conseillée",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": false,
    "priorite": "Très recommandé",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Parc olympique et Hochelaga"
  },
  {
    "id": "stade-olympique-et-esplanade",
    "nom": "Stade olympique et Esplanade",
    "type": "culture",
    "categorie": "Culture",
    "sousCategorie": "Architecture",
    "descriptionCourte": "",
    "quartier": "Parc olympique",
    "adresse": "4545 avenue Pierre-De Coubertin, Montréal, QC",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 0,
      "maximum": null,
      "devise": "CAD",
      "texte": "Extérieur gratuit; activités payantes variables",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": null,
      "transport": {
        "duree": "35 à 50 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": {
        "duree": "25 à 35 min",
        "description": "Estimation à vélo depuis l’ETS."
      },
      "voiture": {
        "duree": "18 à 30 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "45 min à 2 h",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Architecture",
      "Photo",
      "Extérieur"
    ],
    "tags": [
      "stade olympique",
      "tour"
    ],
    "halal": null,
    "gratuit": true,
    "reservation": "Non pour l’esplanade",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": false,
    "priorite": "À voir",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Parc olympique et Hochelaga"
  },
  {
    "id": "jardin-botanique-de-montreal",
    "nom": "Jardin botanique de Montréal",
    "type": "nature",
    "categorie": "Nature et points de vue",
    "sousCategorie": "Jardin",
    "descriptionCourte": "",
    "quartier": "Parc olympique",
    "adresse": "4101 rue Sherbrooke Est, Montréal, QC",
    "coordonnees": {
      "latitude": 45.556745,
      "longitude": -73.556345
    },
    "prix": {
      "minimum": 15,
      "maximum": 30,
      "devise": "CAD",
      "texte": "Environ 15 à 30 $",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": null,
      "transport": {
        "duree": "38 à 55 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": {
        "duree": "25 à 38 min",
        "description": "Estimation à vélo depuis l’ETS."
      },
      "voiture": {
        "duree": "20 à 32 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "2 h à 4 h",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Nature",
      "Photo",
      "Chill"
    ],
    "tags": [
      "jardin botanique",
      "plantes"
    ],
    "halal": null,
    "gratuit": false,
    "reservation": "Conseillée",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": false,
    "priorite": "Très recommandé",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": 45.556745,
    "longitude": -73.556345,
    "sector": "Parc olympique et Hochelaga"
  },
  {
    "id": "chinatown-de-montreal",
    "nom": "Chinatown de Montréal",
    "type": "quartier",
    "categorie": "Quartiers et découvertes",
    "sousCategorie": "Quartier culturel",
    "descriptionCourte": "",
    "quartier": "Chinatown",
    "adresse": "Boulevard Saint-Laurent et rue De La Gauchetière, Montréal, QC",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 0,
      "maximum": null,
      "devise": "CAD",
      "texte": "Gratuit hors achats",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": {
        "duree": "28 à 38 min",
        "description": "Estimation depuis l’ETS, pavillon A."
      },
      "transport": {
        "duree": "20 à 30 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": {
        "duree": "12 à 18 min",
        "description": "Estimation à vélo depuis l’ETS."
      },
      "voiture": {
        "duree": "10 à 18 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "1 h à 3 h",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Food",
      "Culture",
      "Balade"
    ],
    "tags": [
      "chinatown",
      "asiatique",
      "murales"
    ],
    "halal": null,
    "gratuit": true,
    "reservation": "Non",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": false,
    "priorite": "Très recommandé",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Centre-ville et Sainte-Catherine"
  },
  {
    "id": "mur-de-berlin-centre-de-commerce-mondial",
    "nom": "Mur de Berlin — Centre de commerce mondial",
    "type": "culture",
    "categorie": "Culture",
    "sousCategorie": "Monument historique",
    "descriptionCourte": "",
    "quartier": "Vieux-Montréal",
    "adresse": "747 rue du Square-Victoria, Montréal, QC",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 0,
      "maximum": 0,
      "devise": "CAD",
      "texte": "Gratuit",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": {
        "duree": "20 à 28 min",
        "description": "Estimation depuis l’ETS, pavillon A."
      },
      "transport": {
        "duree": "15 à 22 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": {
        "duree": "8 à 12 min",
        "description": "Estimation à vélo depuis l’ETS."
      },
      "voiture": {
        "duree": "8 à 15 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "15 à 30 min",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Culture",
      "Intérieur",
      "Histoire"
    ],
    "tags": [
      "mur de berlin",
      "ccmm",
      "square victoria"
    ],
    "halal": null,
    "gratuit": true,
    "reservation": "Non",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": false,
    "priorite": "À voir",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Vieux-Montr?al et Vieux-Port"
  },
  {
    "id": "marche-jean-talon",
    "nom": "Marché Jean-Talon",
    "type": "quartier",
    "categorie": "Quartiers et découvertes",
    "sousCategorie": "Marché public",
    "descriptionCourte": "",
    "quartier": "Petite Italie",
    "adresse": "7070 avenue Henri-Julien, Montréal, QC",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 0,
      "maximum": null,
      "devise": "CAD",
      "texte": "Entrée gratuite; achats variables",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": null,
      "transport": {
        "duree": "38 à 52 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": {
        "duree": "25 à 35 min",
        "description": "Estimation à vélo depuis l’ETS."
      },
      "voiture": {
        "duree": "20 à 30 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "1 h 30 à 3 h",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Marché",
      "Food",
      "Balade"
    ],
    "tags": [
      "jean talon",
      "petite italie"
    ],
    "halal": null,
    "gratuit": true,
    "reservation": "Non",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": false,
    "priorite": "Incontournable",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Jean-Talon et Petite-Italie"
  },
  {
    "id": "zero-latency-montreal",
    "nom": "Zero Latency Montréal",
    "type": "activite",
    "categorie": "Activités et amusement",
    "sousCategorie": "Réalité virtuelle",
    "descriptionCourte": "",
    "quartier": "Jean-Talon Est",
    "adresse": "910 rue Jean-Talon Est, Montréal, QC",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 35,
      "maximum": 60,
      "devise": "CAD",
      "texte": "Environ 35 à 60 $",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": null,
      "transport": {
        "duree": "38 à 52 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": {
        "duree": "25 à 35 min",
        "description": "Estimation à vélo depuis l’ETS."
      },
      "voiture": {
        "duree": "20 à 30 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "1 h à 1 h 30",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Entre amis",
      "Intérieur",
      "Sensations",
      "Jour de pluie"
    ],
    "tags": [
      "vr",
      "free roam",
      "zero latency"
    ],
    "halal": null,
    "gratuit": false,
    "reservation": "Obligatoire",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": false,
    "priorite": "Très recommandé",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Jean-Talon et Petite-Italie"
  },
  {
    "id": "allez-up-pointe-saint-charles",
    "nom": "Allez Up — Pointe-Saint-Charles",
    "type": "activite",
    "categorie": "Activités et amusement",
    "sousCategorie": "Escalade",
    "descriptionCourte": "",
    "quartier": "Pointe-Saint-Charles",
    "adresse": "1555 rue Saint-Patrick, Montréal, QC H3K 2B7",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 23.75,
      "maximum": 42,
      "devise": "CAD",
      "texte": "Passe 23,75 $; initiation/auto-assurage jusqu’à env. 42 $",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": {
        "duree": "28 à 38 min",
        "description": "Estimation depuis l’ETS, pavillon A."
      },
      "transport": {
        "duree": "20 à 30 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": {
        "duree": "10 à 15 min",
        "description": "Estimation à vélo depuis l’ETS."
      },
      "voiture": {
        "duree": "8 à 15 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "1 h 30 à 3 h",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Sport",
      "Intérieur",
      "Entre amis"
    ],
    "tags": [
      "escalade",
      "bloc",
      "pointe saint-charles"
    ],
    "halal": null,
    "gratuit": false,
    "reservation": "Conseillée pour initiation",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": false,
    "priorite": "Très recommandé",
    "siteOfficiel": "https://allezup.com/",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "https://allezup.com/en/",
    "dateVerification": "2026-07-12",
    "verification": "Vérifié sur source officielle",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Centre-ville et Sainte-Catherine"
  },
  {
    "id": "horizon-gt",
    "nom": "Horizon GT",
    "type": "activite",
    "categorie": "Activités et amusement",
    "sousCategorie": "Simulateur automobile",
    "descriptionCourte": "",
    "quartier": "Montréal",
    "adresse": "Adresse à confirmer",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 25,
      "maximum": 60,
      "devise": "CAD",
      "texte": "Environ 25 à 60 $",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": null,
      "transport": {
        "duree": "À vérifier",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": null,
      "voiture": {
        "duree": "À vérifier",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "1 h à 2 h",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Entre amis",
      "Intérieur",
      "Jour de pluie"
    ],
    "tags": [
      "simulateur",
      "course",
      "auto"
    ],
    "halal": null,
    "gratuit": false,
    "reservation": "Conseillée",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": false,
    "priorite": "À vérifier",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Centre-ville et Sainte-Catherine"
  },
  {
    "id": "bubble-planet-montreal",
    "nom": "Bubble Planet Montréal",
    "type": "activite",
    "categorie": "Activités et amusement",
    "sousCategorie": "Expérience immersive temporaire",
    "descriptionCourte": "",
    "quartier": "Montréal",
    "adresse": "Lieu et disponibilité 2026 à confirmer",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 25,
      "maximum": 50,
      "devise": "CAD",
      "texte": "Environ 25 à 50 $",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": null,
      "transport": {
        "duree": "À vérifier",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": null,
      "voiture": {
        "duree": "À vérifier",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "1 h à 1 h 30",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Intérieur",
      "Photo",
      "Famille"
    ],
    "tags": [
      "bulles",
      "immersif"
    ],
    "halal": null,
    "gratuit": false,
    "reservation": "Obligatoire",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": true,
    "priorite": "À vérifier",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Centre-ville et Sainte-Catherine"
  },
  {
    "id": "ninja-factory-brossard",
    "nom": "Ninja Factory Brossard",
    "type": "activite",
    "categorie": "Activités et amusement",
    "sousCategorie": "Parcours ninja",
    "descriptionCourte": "",
    "quartier": "Brossard",
    "adresse": "Brossard, QC — adresse exacte à confirmer",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 25,
      "maximum": 45,
      "devise": "CAD",
      "texte": "Environ 25 à 45 $",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": null,
      "transport": {
        "duree": "45 à 65 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": {
        "duree": "35 à 50 min",
        "description": "Estimation à vélo depuis l’ETS."
      },
      "voiture": {
        "duree": "20 à 35 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "1 h à 2 h",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Sport",
      "Entre amis",
      "Intérieur"
    ],
    "tags": [
      "ninja warrior",
      "brossard"
    ],
    "halal": null,
    "gratuit": false,
    "reservation": "Conseillée",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": false,
    "priorite": "Très recommandé",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Brossard"
  },
  {
    "id": "tag-e-karting-amusement",
    "nom": "TAG E-Karting & Amusement",
    "type": "activite",
    "categorie": "Activités et amusement",
    "sousCategorie": "Karting et centre multi-activités",
    "descriptionCourte": "",
    "quartier": "Sainte-Thérèse",
    "adresse": "270 rue Sicard, Sainte-Thérèse, QC J7E 3X4",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 25,
      "maximum": 100,
      "devise": "CAD",
      "texte": "Environ 25 à 100 $ selon activités",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": null,
      "transport": {
        "duree": "1 h 15 à 1 h 45",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": null,
      "voiture": {
        "duree": "35 à 55 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "2 h à une journée",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Entre amis",
      "Intérieur",
      "Sensations"
    ],
    "tags": [
      "karting",
      "laser tag",
      "bowling",
      "vr"
    ],
    "halal": null,
    "gratuit": false,
    "reservation": "Conseillée",
    "transportPublic": true,
    "voitureRecommandee": true,
    "temporaire": false,
    "priorite": "Très recommandé",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Centre-ville et Sainte-Catherine"
  },
  {
    "id": "funcity-repentigny",
    "nom": "FunCity Repentigny",
    "type": "activite",
    "categorie": "Activités et amusement",
    "sousCategorie": "Arcade et VR",
    "descriptionCourte": "",
    "quartier": "Repentigny",
    "adresse": "80 boulevard Brien, Repentigny, QC J6A 5K7",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 20,
      "maximum": 60,
      "devise": "CAD",
      "texte": "Environ 20 à 60 $",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": null,
      "transport": {
        "duree": "1 h 10 à 1 h 40",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": null,
      "voiture": {
        "duree": "35 à 55 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "1 h 30 à 3 h",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Entre amis",
      "Intérieur"
    ],
    "tags": [
      "arcade",
      "vr",
      "repentigny"
    ],
    "halal": null,
    "gratuit": false,
    "reservation": "Non",
    "transportPublic": true,
    "voitureRecommandee": true,
    "temporaire": false,
    "priorite": "Optionnel",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Centre-ville et Sainte-Catherine"
  },
  {
    "id": "snatch-restaurant",
    "nom": "Snatch Restaurant",
    "type": "restaurant",
    "categorie": "Restaurants et gourmandises",
    "sousCategorie": "Burgers, tacos français et poutines",
    "descriptionCourte": "Restaurant halal du Plateau proposant notamment burgers, tacos français et poutines.",
    "quartier": "Plateau-Mont-Royal",
    "adresse": "4675 boulevard Saint-Laurent, Montréal, QC H2T 1R2",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 15,
      "maximum": 30,
      "devise": "CAD",
      "texte": "Environ 15 à 30 $",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": null,
      "transport": {
        "duree": "25 à 50 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": null,
      "voiture": {
        "duree": "15 à 30 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "",
    "saison": null,
    "ambiance": [
      "Gourmand",
      "Entre amis"
    ],
    "tags": [
      "burgers",
      "tacos français",
      "poutines",
      "halal",
      "restaurant halal"
    ],
    "foodTypes": [
      "savory"
    ],
    "badges": [
      "Halal",
      "Burgers",
      "Tacos français"
    ],
    "halal": true,
    "gratuit": false,
    "reservation": "",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": false,
    "priorite": "À essayer",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Plateau et Mont-Royal"
  },
  {
    "id": "rotisserie-piri-piri-cote-des-neiges",
    "nom": "Rôtisserie Piri Piri — Côte-des-Neiges",
    "type": "restaurant",
    "categorie": "Restaurants et gourmandises",
    "sousCategorie": "Poulet portugais",
    "descriptionCourte": "",
    "quartier": "Côte-des-Neiges",
    "adresse": "Côte-des-Neiges, Montréal, QC",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 15,
      "maximum": 30,
      "devise": "CAD",
      "texte": "Environ 15 à 30 $",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": null,
      "transport": {
        "duree": "25 à 50 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": null,
      "voiture": {
        "duree": "15 à 30 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "45 min à 1 h 30",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Food",
      "Entre amis"
    ],
    "tags": [
      "poutine",
      "poulet",
      "portugais"
    ],
    "halal": true,
    "gratuit": false,
    "reservation": "À vérifier",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": false,
    "priorite": "À essayer",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Centre-ville et Sainte-Catherine"
  },
  {
    "id": "opoulet",
    "nom": "O’Poulet",
    "type": "restaurant",
    "categorie": "Restaurants et gourmandises",
    "sousCategorie": "Poutine et poulet frit",
    "descriptionCourte": "",
    "quartier": "Montréal",
    "adresse": "Adresse à confirmer",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 15,
      "maximum": 30,
      "devise": "CAD",
      "texte": "Environ 15 à 30 $",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": null,
      "transport": {
        "duree": "25 à 50 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": null,
      "voiture": {
        "duree": "15 à 30 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "45 min à 1 h 30",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Food",
      "Entre amis"
    ],
    "tags": [
      "nashville",
      "poutine",
      "poulet"
    ],
    "halal": true,
    "gratuit": false,
    "reservation": "À vérifier",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": false,
    "priorite": "À essayer",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Centre-ville et Sainte-Catherine"
  },
  {
    "id": "habibz-corner",
    "nom": "Habibz Corner",
    "type": "restaurant",
    "categorie": "Restaurants et gourmandises",
    "sousCategorie": "Poutine smoked meat",
    "descriptionCourte": "",
    "quartier": "Montréal",
    "adresse": "Adresse à confirmer",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 15,
      "maximum": 30,
      "devise": "CAD",
      "texte": "Environ 15 à 30 $",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": null,
      "transport": {
        "duree": "25 à 50 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": null,
      "voiture": {
        "duree": "15 à 30 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "45 min à 1 h 30",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Food",
      "Entre amis"
    ],
    "tags": [
      "smoked meat",
      "poutine",
      "halal"
    ],
    "halal": true,
    "gratuit": false,
    "reservation": "À vérifier",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": false,
    "priorite": "À essayer",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Centre-ville et Sainte-Catherine"
  },
  {
    "id": "uncle-potato",
    "nom": "Uncle Potato",
    "type": "restaurant",
    "categorie": "Restaurants et gourmandises",
    "sousCategorie": "Pommes de terre garnies",
    "descriptionCourte": "",
    "quartier": "Ahuntsic",
    "adresse": "70 rue Chabanel Ouest, Montréal, QC",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 10,
      "maximum": 25,
      "devise": "CAD",
      "texte": "Environ 10 à 25 $",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": null,
      "transport": {
        "duree": "25 à 50 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": null,
      "voiture": {
        "duree": "15 à 30 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "45 min à 1 h 30",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Food",
      "Entre amis"
    ],
    "tags": [
      "loaded potato",
      "poulet",
      "halal"
    ],
    "halal": true,
    "gratuit": false,
    "reservation": "À vérifier",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": false,
    "priorite": "À essayer",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Centre-ville et Sainte-Catherine"
  },
  {
    "id": "poulet-royal",
    "nom": "Poulet Royal",
    "type": "restaurant",
    "categorie": "Restaurants et gourmandises",
    "sousCategorie": "Poulet frit",
    "descriptionCourte": "",
    "quartier": "Centre-ville",
    "adresse": "2055 rue Bishop, Montréal, QC H3G 2E8",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 12,
      "maximum": 30,
      "devise": "CAD",
      "texte": "Environ 12 à 30 $",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": null,
      "transport": {
        "duree": "15 à 30 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": null,
      "voiture": {
        "duree": "8 à 18 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "45 min à 1 h 30",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Food",
      "Entre amis"
    ],
    "tags": [
      "tenders",
      "nashville",
      "halal"
    ],
    "halal": true,
    "gratuit": false,
    "reservation": "À vérifier",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": false,
    "priorite": "À essayer",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Centre-ville et Sainte-Catherine"
  },
  {
    "id": "hunkar-istanbul",
    "nom": "Hunkar Istanbul",
    "type": "restaurant",
    "categorie": "Restaurants et gourmandises",
    "sousCategorie": "Buffet turc",
    "descriptionCourte": "",
    "quartier": "Saint-Léonard",
    "adresse": "4510 rue Jean-Talon Est, Montréal, QC H1S 3E2",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 25,
      "maximum": 50,
      "devise": "CAD",
      "texte": "Environ 25 à 50 $",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": null,
      "transport": {
        "duree": "25 à 50 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": null,
      "voiture": {
        "duree": "15 à 30 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "45 min à 1 h 30",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Food",
      "Entre amis"
    ],
    "tags": [
      "buffet",
      "turc",
      "grillades"
    ],
    "halal": true,
    "gratuit": false,
    "reservation": "À vérifier",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": false,
    "priorite": "À essayer",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Jean-Talon et Petite-Italie"
  },
  {
    "id": "jardin-de-seoul",
    "nom": "Jardin de Séoul",
    "type": "restaurant",
    "categorie": "Restaurants et gourmandises",
    "sousCategorie": "BBQ coréen buffet",
    "descriptionCourte": "",
    "quartier": "Brossard",
    "adresse": "8900 boulevard Leduc, Brossard, QC",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 30,
      "maximum": 60,
      "devise": "CAD",
      "texte": "Environ 30 à 60 $",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": null,
      "transport": {
        "duree": "45 à 80 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": null,
      "voiture": {
        "duree": "25 à 45 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "45 min à 1 h 30",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Food",
      "Entre amis"
    ],
    "tags": [
      "coréen",
      "bbq",
      "buffet"
    ],
    "halal": true,
    "gratuit": false,
    "reservation": "À vérifier",
    "transportPublic": true,
    "voitureRecommandee": true,
    "temporaire": false,
    "priorite": "À essayer",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Brossard"
  },
  {
    "id": "soup-zen-hot-pot",
    "nom": "Soup Zen Hot Pot",
    "type": "restaurant",
    "categorie": "Restaurants et gourmandises",
    "sousCategorie": "Hot pot",
    "descriptionCourte": "",
    "quartier": "Montréal",
    "adresse": "Adresse à confirmer",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 25,
      "maximum": 50,
      "devise": "CAD",
      "texte": "Environ 25 à 50 $",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": null,
      "transport": {
        "duree": "25 à 50 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": null,
      "voiture": {
        "duree": "15 à 30 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "45 min à 1 h 30",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Food",
      "Entre amis"
    ],
    "tags": [
      "hot pot",
      "halal",
      "buffet"
    ],
    "halal": true,
    "gratuit": false,
    "reservation": "À vérifier",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": false,
    "priorite": "À essayer",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Centre-ville et Sainte-Catherine"
  },
  {
    "id": "b12-burger",
    "nom": "B12 Burger",
    "type": "restaurant",
    "categorie": "Restaurants et gourmandises",
    "sousCategorie": "Burger",
    "descriptionCourte": "",
    "quartier": "Notre-Dame-de-Grâce",
    "adresse": "6334A rue Sherbrooke Ouest, Montréal, QC H4B 2S4",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 15,
      "maximum": 30,
      "devise": "CAD",
      "texte": "Environ 15 à 30 $",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": null,
      "transport": {
        "duree": "25 à 50 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": null,
      "voiture": {
        "duree": "15 à 30 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "45 min à 1 h 30",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Food",
      "Entre amis"
    ],
    "tags": [
      "burger",
      "poulet frit",
      "halal"
    ],
    "halal": true,
    "gratuit": false,
    "reservation": "À vérifier",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": false,
    "priorite": "À essayer",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Centre-ville et Sainte-Catherine"
  },
  {
    "id": "buffet-maharani",
    "nom": "Buffet Maharani",
    "type": "restaurant",
    "categorie": "Restaurants et gourmandises",
    "sousCategorie": "Buffet indien",
    "descriptionCourte": "",
    "quartier": "Parc-Extension",
    "adresse": "808 rue Jean-Talon Ouest, Montréal, QC H3N 1S4",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 20,
      "maximum": 35,
      "devise": "CAD",
      "texte": "Environ 20 à 35 $",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": null,
      "transport": {
        "duree": "25 à 50 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": null,
      "voiture": {
        "duree": "15 à 30 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "45 min à 1 h 30",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Food",
      "Entre amis"
    ],
    "tags": [
      "indien",
      "buffet",
      "halal"
    ],
    "halal": true,
    "gratuit": false,
    "reservation": "À vérifier",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": false,
    "priorite": "À essayer",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Jean-Talon et Petite-Italie"
  },
  {
    "id": "grillades-amira",
    "nom": "Grillades Amira",
    "type": "restaurant",
    "categorie": "Restaurants et gourmandises",
    "sousCategorie": "Grillades",
    "descriptionCourte": "",
    "quartier": "Montréal",
    "adresse": "2483 — rue à confirmer, Montréal, QC",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 15,
      "maximum": 30,
      "devise": "CAD",
      "texte": "Environ 15 à 30 $",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": null,
      "transport": {
        "duree": "25 à 50 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": null,
      "voiture": {
        "duree": "15 à 30 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "45 min à 1 h 30",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Food",
      "Entre amis"
    ],
    "tags": [
      "shawarma",
      "grillades",
      "halal"
    ],
    "halal": true,
    "gratuit": false,
    "reservation": "À vérifier",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": false,
    "priorite": "À essayer",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Centre-ville et Sainte-Catherine"
  },
  {
    "id": "le-roi-du-sous-marin",
    "nom": "Le Roi du Sous-Marin",
    "type": "restaurant",
    "categorie": "Restaurants et gourmandises",
    "sousCategorie": "Sous-marins",
    "descriptionCourte": "",
    "quartier": "Rive-Nord",
    "adresse": "1067 — adresse complète à confirmer",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 12,
      "maximum": 25,
      "devise": "CAD",
      "texte": "Environ 12 à 25 $",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": null,
      "transport": {
        "duree": "45 à 80 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": null,
      "voiture": {
        "duree": "25 à 45 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "45 min à 1 h 30",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Food",
      "Entre amis"
    ],
    "tags": [
      "sous-marin",
      "casse-croûte",
      "halal"
    ],
    "halal": true,
    "gratuit": false,
    "reservation": "À vérifier",
    "transportPublic": true,
    "voitureRecommandee": true,
    "temporaire": false,
    "priorite": "À essayer",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Excursions hors Montr?al"
  },
  {
    "id": "chicken-plus",
    "nom": "Chicken Plus",
    "type": "restaurant",
    "categorie": "Restaurants et gourmandises",
    "sousCategorie": "Poulet coréen",
    "descriptionCourte": "",
    "quartier": "Montréal",
    "adresse": "Succursale à confirmer",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 15,
      "maximum": 30,
      "devise": "CAD",
      "texte": "Environ 15 à 30 $",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": null,
      "transport": {
        "duree": "25 à 50 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": null,
      "voiture": {
        "duree": "15 à 30 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "45 min à 1 h 30",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Food",
      "Entre amis"
    ],
    "tags": [
      "korean fried chicken",
      "halal"
    ],
    "halal": true,
    "gratuit": false,
    "reservation": "À vérifier",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": false,
    "priorite": "À essayer",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Centre-ville et Sainte-Catherine"
  },
  {
    "id": "poulet-rouge",
    "nom": "Poulet Rouge",
    "type": "restaurant",
    "categorie": "Restaurants et gourmandises",
    "sousCategorie": "Bol de poulet",
    "descriptionCourte": "",
    "quartier": "Centre-ville",
    "adresse": "1623 rue Sainte-Catherine Ouest, Montréal, QC H3H 1L8",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 12,
      "maximum": 25,
      "devise": "CAD",
      "texte": "Environ 12 à 25 $",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": null,
      "transport": {
        "duree": "15 à 30 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": null,
      "voiture": {
        "duree": "8 à 18 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "45 min à 1 h 30",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Food",
      "Entre amis"
    ],
    "tags": [
      "bol",
      "poulet",
      "rapide"
    ],
    "halal": true,
    "gratuit": false,
    "reservation": "À vérifier",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": false,
    "priorite": "À essayer",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Centre-ville et Sainte-Catherine"
  },
  {
    "id": "lestancia",
    "nom": "L’Estancia",
    "type": "restaurant",
    "categorie": "Restaurants et gourmandises",
    "sousCategorie": "Mexicain",
    "descriptionCourte": "",
    "quartier": "Montréal",
    "adresse": "5053 — rue à confirmer, Montréal, QC",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 15,
      "maximum": 35,
      "devise": "CAD",
      "texte": "Environ 15 à 35 $",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": null,
      "transport": {
        "duree": "25 à 50 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": null,
      "voiture": {
        "duree": "15 à 30 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "45 min à 1 h 30",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Food",
      "Entre amis"
    ],
    "tags": [
      "birria",
      "tacos",
      "burrito"
    ],
    "halal": true,
    "gratuit": false,
    "reservation": "À vérifier",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": false,
    "priorite": "À essayer",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Centre-ville et Sainte-Catherine"
  },
  {
    "id": "mexigo-mexigo-churros",
    "nom": "Mexigo & Mexigo Churros",
    "type": "restaurant",
    "categorie": "Restaurants et gourmandises",
    "sousCategorie": "Mexicain et desserts",
    "descriptionCourte": "",
    "quartier": "Plateau",
    "adresse": "372 rue Sherbrooke Est, Montréal, QC",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 8,
      "maximum": 20,
      "devise": "CAD",
      "texte": "Environ 8 à 20 $",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": null,
      "transport": {
        "duree": "25 à 50 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": null,
      "voiture": {
        "duree": "15 à 30 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "45 min à 1 h 30",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Food",
      "Entre amis"
    ],
    "tags": [
      "tacos",
      "burrito",
      "churros"
    ],
    "halal": true,
    "gratuit": false,
    "reservation": "À vérifier",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": false,
    "priorite": "À essayer",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Plateau et Mont-Royal"
  },
  {
    "id": "3-amigos",
    "nom": "3 Amigos",
    "type": "restaurant",
    "categorie": "Restaurants et gourmandises",
    "sousCategorie": "Mexicain",
    "descriptionCourte": "",
    "quartier": "Montréal",
    "adresse": "Succursale et options halal à confirmer",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 15,
      "maximum": 35,
      "devise": "CAD",
      "texte": "Environ 15 à 35 $",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": null,
      "transport": {
        "duree": "25 à 50 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": null,
      "voiture": {
        "duree": "15 à 30 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "45 min à 1 h 30",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Food",
      "Entre amis"
    ],
    "tags": [
      "mexicain",
      "chaîne",
      "halal à vérifier"
    ],
    "halal": null,
    "gratuit": false,
    "reservation": "À vérifier",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": false,
    "priorite": "À essayer",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Centre-ville et Sainte-Catherine"
  },
  {
    "id": "ranjys-restaurant",
    "nom": "Ranjy’s Restaurant",
    "type": "restaurant",
    "categorie": "Restaurants et gourmandises",
    "sousCategorie": "Poulet et poutine",
    "descriptionCourte": "",
    "quartier": "Pierrefonds",
    "adresse": "15783 boulevard de Pierrefonds, Pierrefonds, QC H9H 3X6",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 10,
      "maximum": 25,
      "devise": "CAD",
      "texte": "Environ 10 à 25 $",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": null,
      "transport": {
        "duree": "45 à 80 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": null,
      "voiture": {
        "duree": "25 à 45 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "45 min à 1 h 30",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Food",
      "Entre amis"
    ],
    "tags": [
      "wings",
      "poutine",
      "halal"
    ],
    "halal": true,
    "gratuit": false,
    "reservation": "À vérifier",
    "transportPublic": true,
    "voitureRecommandee": true,
    "temporaire": false,
    "priorite": "À essayer",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Centre-ville et Sainte-Catherine"
  },
  {
    "id": "grillados-laval",
    "nom": "Grillados Laval",
    "type": "restaurant",
    "categorie": "Restaurants et gourmandises",
    "sousCategorie": "Côtes levées et poulet",
    "descriptionCourte": "",
    "quartier": "Laval",
    "adresse": "1228A boulevard Curé-Labelle, Laval, QC",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 20,
      "maximum": 45,
      "devise": "CAD",
      "texte": "Environ 20 à 45 $",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": null,
      "transport": {
        "duree": "45 à 80 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": null,
      "voiture": {
        "duree": "25 à 45 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "45 min à 1 h 30",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Food",
      "Entre amis"
    ],
    "tags": [
      "ribs",
      "steak",
      "halal"
    ],
    "halal": true,
    "gratuit": false,
    "reservation": "À vérifier",
    "transportPublic": true,
    "voitureRecommandee": true,
    "temporaire": false,
    "priorite": "À essayer",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Laval"
  },
  {
    "id": "arthurs-nosh-bar",
    "nom": "Arthur’s Nosh Bar",
    "type": "restaurant",
    "categorie": "Restaurants et gourmandises",
    "sousCategorie": "Brunch",
    "descriptionCourte": "",
    "quartier": "Saint-Henri",
    "adresse": "Montréal, QC — adresse à confirmer",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 20,
      "maximum": 40,
      "devise": "CAD",
      "texte": "Environ 20 à 40 $",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": null,
      "transport": {
        "duree": "15 à 30 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": null,
      "voiture": {
        "duree": "8 à 18 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "45 min à 1 h 30",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Food",
      "Entre amis"
    ],
    "tags": [
      "brunch",
      "pancakes"
    ],
    "halal": null,
    "gratuit": false,
    "reservation": "À vérifier",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": false,
    "priorite": "À essayer",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Centre-ville et Sainte-Catherine"
  },
  {
    "id": "lemeac",
    "nom": "Leméac",
    "type": "restaurant",
    "categorie": "Restaurants et gourmandises",
    "sousCategorie": "Brunch",
    "descriptionCourte": "",
    "quartier": "Outremont",
    "adresse": "Montréal, QC — adresse à confirmer",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 25,
      "maximum": 55,
      "devise": "CAD",
      "texte": "Environ 25 à 55 $",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": null,
      "transport": {
        "duree": "25 à 50 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": null,
      "voiture": {
        "duree": "15 à 30 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "45 min à 1 h 30",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Food",
      "Entre amis"
    ],
    "tags": [
      "brunch",
      "français"
    ],
    "halal": null,
    "gratuit": false,
    "reservation": "À vérifier",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": false,
    "priorite": "À essayer",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Plateau et Mont-Royal"
  },
  {
    "id": "mckiernan",
    "nom": "McKiernan",
    "type": "restaurant",
    "categorie": "Restaurants et gourmandises",
    "sousCategorie": "Brunch",
    "descriptionCourte": "",
    "quartier": "Sud-Ouest",
    "adresse": "Montréal, QC — adresse à confirmer",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 20,
      "maximum": 45,
      "devise": "CAD",
      "texte": "Environ 20 à 45 $",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": null,
      "transport": {
        "duree": "15 à 30 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": null,
      "voiture": {
        "duree": "8 à 18 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "45 min à 1 h 30",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Food",
      "Entre amis"
    ],
    "tags": [
      "brunch",
      "sud-ouest"
    ],
    "halal": null,
    "gratuit": false,
    "reservation": "À vérifier",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": false,
    "priorite": "À essayer",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Centre-ville et Sainte-Catherine"
  },
  {
    "id": "shaka-club",
    "nom": "Shaka Club",
    "type": "restaurant",
    "categorie": "Restaurants et gourmandises",
    "sousCategorie": "Brunch",
    "descriptionCourte": "",
    "quartier": "Montréal",
    "adresse": "Adresse à confirmer",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 15,
      "maximum": 35,
      "devise": "CAD",
      "texte": "Environ 15 à 35 $",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": null,
      "transport": {
        "duree": "25 à 50 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": null,
      "voiture": {
        "duree": "15 à 30 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "45 min à 1 h 30",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Food",
      "Entre amis"
    ],
    "tags": [
      "brunch",
      "bol"
    ],
    "halal": null,
    "gratuit": false,
    "reservation": "À vérifier",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": false,
    "priorite": "À essayer",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Centre-ville et Sainte-Catherine"
  },
  {
    "id": "bernies",
    "nom": "Bernie’s",
    "type": "restaurant",
    "categorie": "Restaurants et gourmandises",
    "sousCategorie": "Brunch",
    "descriptionCourte": "",
    "quartier": "Montréal",
    "adresse": "Adresse à confirmer",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 15,
      "maximum": 35,
      "devise": "CAD",
      "texte": "Environ 15 à 35 $",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": null,
      "transport": {
        "duree": "25 à 50 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": null,
      "voiture": {
        "duree": "15 à 30 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "45 min à 1 h 30",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Food",
      "Entre amis"
    ],
    "tags": [
      "brunch",
      "donut"
    ],
    "halal": null,
    "gratuit": false,
    "reservation": "À vérifier",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": false,
    "priorite": "À essayer",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Centre-ville et Sainte-Catherine"
  },
  {
    "id": "ozen",
    "nom": "O’Zen",
    "type": "restaurant",
    "categorie": "Restaurants et gourmandises",
    "sousCategorie": "Vietnamien",
    "descriptionCourte": "",
    "quartier": "Montréal",
    "adresse": "Adresse à confirmer",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 18,
      "maximum": 35,
      "devise": "CAD",
      "texte": "Environ 18 à 35 $",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": null,
      "transport": {
        "duree": "25 à 50 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": null,
      "voiture": {
        "duree": "15 à 30 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "45 min à 1 h 30",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Food",
      "Entre amis"
    ],
    "tags": [
      "vietnamien",
      "halal"
    ],
    "halal": true,
    "gratuit": false,
    "reservation": "À vérifier",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": false,
    "priorite": "À essayer",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Centre-ville et Sainte-Catherine"
  },
  {
    "id": "dohies-desserts",
    "nom": "Dohie’s Desserts",
    "type": "restaurant",
    "categorie": "Restaurants et gourmandises",
    "sousCategorie": "Desserts",
    "descriptionCourte": "",
    "quartier": "Montréal",
    "adresse": "Adresse à confirmer",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 8,
      "maximum": 20,
      "devise": "CAD",
      "texte": "Environ 8 à 20 $",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": null,
      "transport": {
        "duree": "25 à 50 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": null,
      "voiture": {
        "duree": "15 à 30 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "45 min à 1 h 30",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Food",
      "Entre amis"
    ],
    "tags": [
      "dessert",
      "boîte",
      "sucré"
    ],
    "halal": null,
    "gratuit": false,
    "reservation": "À vérifier",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": false,
    "priorite": "À essayer",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Centre-ville et Sainte-Catherine"
  },
  {
    "id": "homers-donuts",
    "nom": "Homer’s Donuts",
    "type": "restaurant",
    "categorie": "Restaurants et gourmandises",
    "sousCategorie": "Donuts",
    "descriptionCourte": "",
    "quartier": "Montréal",
    "adresse": "6206 — rue à confirmer, Montréal, QC",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 4,
      "maximum": 15,
      "devise": "CAD",
      "texte": "Environ 4 à 15 $",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": null,
      "transport": {
        "duree": "25 à 50 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": null,
      "voiture": {
        "duree": "15 à 30 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "45 min à 1 h 30",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Food",
      "Entre amis"
    ],
    "tags": [
      "donuts",
      "dessert"
    ],
    "halal": null,
    "gratuit": false,
    "reservation": "À vérifier",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": false,
    "priorite": "À essayer",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Centre-ville et Sainte-Catherine"
  },
  {
    "id": "iconoglace-esplanade-tranquille",
    "nom": "Iconoglace — Esplanade Tranquille",
    "type": "restaurant",
    "categorie": "Restaurants et gourmandises",
    "sousCategorie": "Glacier",
    "descriptionCourte": "",
    "quartier": "Quartier des spectacles",
    "adresse": "Esplanade Tranquille, Montréal, QC",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 6,
      "maximum": 15,
      "devise": "CAD",
      "texte": "Environ 6 à 15 $",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": null,
      "transport": {
        "duree": "15 à 30 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": null,
      "voiture": {
        "duree": "8 à 18 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "45 min à 1 h 30",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Food",
      "Entre amis"
    ],
    "tags": [
      "glace",
      "dessert",
      "centre-ville"
    ],
    "halal": null,
    "gratuit": false,
    "reservation": "À vérifier",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": false,
    "priorite": "À essayer",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Centre-ville et Sainte-Catherine"
  },
  {
    "id": "fullsun",
    "nom": "Fullsun",
    "type": "restaurant",
    "categorie": "Restaurants et gourmandises",
    "sousCategorie": "Épicerie / ramen minute",
    "descriptionCourte": "",
    "quartier": "Montréal",
    "adresse": "Adresse à confirmer",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 8,
      "maximum": 20,
      "devise": "CAD",
      "texte": "Environ 8 à 20 $",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": null,
      "transport": {
        "duree": "25 à 50 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": null,
      "voiture": {
        "duree": "15 à 30 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "45 min à 1 h 30",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Food",
      "Entre amis"
    ],
    "tags": [
      "ramen",
      "épicerie asiatique"
    ],
    "halal": null,
    "gratuit": false,
    "reservation": "À vérifier",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": false,
    "priorite": "À essayer",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Centre-ville et Sainte-Catherine"
  },
  {
    "id": "cf-fairview-pointe-claire",
    "nom": "CF Fairview Pointe-Claire",
    "type": "shopping",
    "categorie": "Shopping",
    "sousCategorie": "Centre commercial",
    "descriptionCourte": "",
    "quartier": "Pointe-Claire",
    "adresse": "6801 route Transcanadienne, Pointe-Claire, QC",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 0,
      "maximum": null,
      "devise": "CAD",
      "texte": "Entrée gratuite; achats variables",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": null,
      "transport": {
        "duree": "55 à 75 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": null,
      "voiture": {
        "duree": "25 à 40 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "2 h à une demi-journée",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Shopping",
      "Intérieur"
    ],
    "tags": [
      "fairview",
      "mall",
      "west island"
    ],
    "halal": null,
    "gratuit": true,
    "reservation": "Non",
    "transportPublic": true,
    "voitureRecommandee": true,
    "temporaire": false,
    "priorite": "Optionnel",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Excursions hors Montr?al"
  },
  {
    "id": "premium-outlets-montreal",
    "nom": "Premium Outlets Montréal",
    "type": "shopping",
    "categorie": "Shopping",
    "sousCategorie": "Outlet",
    "descriptionCourte": "",
    "quartier": "Mirabel",
    "adresse": "19001 chemin Notre-Dame, Mirabel, QC",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 0,
      "maximum": null,
      "devise": "CAD",
      "texte": "Entrée gratuite; achats variables",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": null,
      "transport": {
        "duree": "Transport public peu pratique",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": null,
      "voiture": {
        "duree": "40 à 60 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "Une demi-journée à une journée",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Shopping",
      "Extérieur"
    ],
    "tags": [
      "outlet",
      "mirabel",
      "marques"
    ],
    "halal": null,
    "gratuit": true,
    "reservation": "Non",
    "transportPublic": false,
    "voitureRecommandee": true,
    "temporaire": false,
    "priorite": "Très recommandé",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Laurentides et Mont-Tremblant"
  },
  {
    "id": "parc-omega",
    "nom": "Parc Oméga",
    "type": "excursion",
    "categorie": "Excursions et road trips",
    "sousCategorie": "Parc animalier",
    "descriptionCourte": "",
    "quartier": "Montebello",
    "adresse": "399 route 323 Nord, Montebello, QC J0V 1L0",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 45,
      "maximum": 60,
      "devise": "CAD",
      "texte": "Environ 45 à 60 $ par adulte",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": null,
      "transport": {
        "duree": "Transport public non pratique",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": null,
      "voiture": {
        "duree": "1 h 25 à 1 h 45",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "Une journée",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Animaux",
      "Road trip",
      "Famille"
    ],
    "tags": [
      "parc omega",
      "safari",
      "animaux"
    ],
    "halal": null,
    "gratuit": false,
    "reservation": "Conseillée",
    "transportPublic": false,
    "voitureRecommandee": true,
    "temporaire": false,
    "priorite": "Incontournable",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Excursions hors Montr?al"
  },
  {
    "id": "ziptrek-tremblant",
    "nom": "Ziptrek Tremblant",
    "type": "excursion",
    "categorie": "Excursions et road trips",
    "sousCategorie": "Tyrolienne",
    "descriptionCourte": "",
    "quartier": "Mont-Tremblant",
    "adresse": "Mont-Tremblant, QC",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 100,
      "maximum": 180,
      "devise": "CAD",
      "texte": "Environ 100 à 180 $",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": null,
      "transport": {
        "duree": "Navette/excursion à rechercher",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": null,
      "voiture": {
        "duree": "1 h 35 à 2 h",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "Une journée",
    "saison": [
      "Printemps",
      "Été",
      "Automne"
    ],
    "ambiance": [
      "Sensations",
      "Road trip",
      "Extérieur"
    ],
    "tags": [
      "zipline",
      "tremblant"
    ],
    "halal": null,
    "gratuit": false,
    "reservation": "Obligatoire",
    "transportPublic": false,
    "voitureRecommandee": true,
    "temporaire": false,
    "priorite": "Occasion spéciale",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Laurentides et Mont-Tremblant"
  },
  {
    "id": "observation-des-baleines-a-tadoussac",
    "nom": "Observation des baleines à Tadoussac",
    "type": "excursion",
    "categorie": "Excursions et road trips",
    "sousCategorie": "Croisière nature",
    "descriptionCourte": "",
    "quartier": "Tadoussac",
    "adresse": "Port de Tadoussac, Tadoussac, QC",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 100,
      "maximum": 170,
      "devise": "CAD",
      "texte": "Environ 100 à 170 $ selon formule",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": null,
      "transport": {
        "duree": "Excursion organisée ou autocar à rechercher",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": null,
      "voiture": {
        "duree": "5 h 30 à 6 h 30",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "2 à 3 jours conseillés",
    "saison": [
      "Printemps",
      "Été",
      "Automne"
    ],
    "ambiance": [
      "Nature",
      "Bateau",
      "Road trip"
    ],
    "tags": [
      "baleines",
      "bélugas",
      "tadoussac"
    ],
    "halal": null,
    "gratuit": false,
    "reservation": "Obligatoire",
    "transportPublic": false,
    "voitureRecommandee": true,
    "temporaire": false,
    "priorite": "Occasion spéciale",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Excursions hors Montr?al"
  },
  {
    "id": "sports-nautiques-a-montreal",
    "nom": "Sports nautiques à Montréal",
    "type": "activite",
    "categorie": "Activités et amusement",
    "sousCategorie": "Activité nautique",
    "descriptionCourte": "",
    "quartier": "Montréal",
    "adresse": "Fournisseur et lieu à choisir",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 25,
      "maximum": 200,
      "devise": "CAD",
      "texte": "Environ 25 à 200 $ selon pédalo, bateau ou jet-ski",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": null,
      "transport": {
        "duree": "À vérifier",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": null,
      "voiture": {
        "duree": "À vérifier",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "1 h à 3 h",
    "saison": [
      "Été"
    ],
    "ambiance": [
      "Extérieur",
      "Entre amis",
      "Sensations"
    ],
    "tags": [
      "jet ski",
      "pédalo",
      "bateau"
    ],
    "halal": null,
    "gratuit": false,
    "reservation": "Obligatoire",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": true,
    "priorite": "À vérifier",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Centre-ville et Sainte-Catherine"
  },
  {
    "id": "atelier-de-creation-de-parfum",
    "nom": "Atelier de création de parfum",
    "type": "activite",
    "categorie": "Activités et amusement",
    "sousCategorie": "Atelier créatif",
    "descriptionCourte": "",
    "quartier": "Beaubien",
    "adresse": "À environ 2 min du métro Beaubien — commerce exact à confirmer",
    "coordonnees": {
      "latitude": null,
      "longitude": null
    },
    "prix": {
      "minimum": 60,
      "maximum": 150,
      "devise": "CAD",
      "texte": "Environ 60 à 150 $",
      "taxesIncluses": false
    },
    "trajetETS": {
      "pied": null,
      "transport": {
        "duree": "35 à 50 min",
        "description": "Estimation en transport public; vérifier l’itinéraire en temps réel."
      },
      "velo": {
        "duree": "25 à 35 min",
        "description": "Estimation à vélo depuis l’ETS."
      },
      "voiture": {
        "duree": "18 à 28 min",
        "description": "Estimation hors recherche de stationnement et circulation exceptionnelle."
      }
    },
    "dureeActivite": "1 h à 2 h",
    "saison": [
      "Toute l’année"
    ],
    "ambiance": [
      "Créatif",
      "Couple",
      "Intérieur"
    ],
    "tags": [
      "parfum",
      "atelier",
      "personnalisation"
    ],
    "halal": null,
    "gratuit": false,
    "reservation": "Obligatoire",
    "transportPublic": true,
    "voitureRecommandee": false,
    "temporaire": false,
    "priorite": "Très recommandé",
    "siteOfficiel": "",
    "googleMaps": "",
    "image": "",
    "sourcePrix": "",
    "dateVerification": "",
    "verification": "À vérifier avant visite",
    "fait": false,
    "favori": false,
    "ajoutPersonnel": false,
    "latitude": null,
    "longitude": null,
    "sector": "Jean-Talon et Petite-Italie"
  }
];
