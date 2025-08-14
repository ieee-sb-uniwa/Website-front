import Hyperlink from "@components/ui/Hyperlink";
const imagesUrl = process.env.NEXT_PUBLIC_IMAGES_STORAGE_URL;

export const sponsors= [
  {title: "Αγροκτήματα Κιθαιρώνα",img:"/assets/logos/sponsors/kitheronfarms.png", url: "https://www.kitheronfarms.gr" , imgWidth:230, imgHeight:130},
  { title: "Mathisys Technologies Hellas", img: "/assets/logos/sponsors/MATHISYS_2024.png", url: "https://www.mathisys-hellas.com", imgWidth:5069, imgHeight:1358}, 
];

export const scientificGroupsLogos= [
  { title: "Web", img: "/assets/logos/scientific_groups/web.svg", url: "/science-teams/web", imgWidth:800, imgHeight:500}, 
  { title: "Electronics", img: "/assets/logos/scientific_groups/electronics.svg", url: "/science-teams/electronics", imgWidth:800, imgHeight:500}, 
  // {title: "Telecommunications",img:"/assets/logos/scientific_groups/telecom.svg", url: "/science-teams/telecom" , imgWidth:800, imgHeight:500},
  { title: "Game Development", img: "/assets/logos/scientific_groups/gamedev.svg", url: "/science-teams/gamedev", imgWidth:800, imgHeight:500}, 
  // { title: "Biomedical Engineering", img: "/assets/logos/scientific_groups/BiomedSG.png", url: "/science-teams/biomed", imgWidth:800, imgHeight:500}, 
  // { title: "Competitive Programming", img: "/assets/logos/scientific_groups/CompetitiveProgrammingSG.png", url: "/science-teams/comp-prog", imgWidth:800, imgHeight:500},  
  { title: "Energy", img: "/assets/logos/scientific_groups/energy.svg", url: "/science-teams/energy", imgWidth:800, imgHeight:500}, 
];

export const collageList = [
    {url: `${imagesUrl}/join_collage/collage1.jpg`,title: "Biomedical Workshop" },
    {url: `${imagesUrl}/join_collage/collage2.jpg`,title: "ExCom Meeting" },
    {url: `${imagesUrl}/join_collage/collage3.JPG`,title: "IEEEXtreme 17.0"},
    {url: `${imagesUrl}/join_collage/collage4.jpg`,title: "Stelios Foundation SB Presentation"},
    {url: `${imagesUrl}/join_collage/collage5.jpg`,title: "IEEEXplore Research and Publishing Event"},
    {url: `${imagesUrl}/join_collage/collage6.jpg`,title: "IEEE Open Day"},
    {url: `${imagesUrl}/join_collage/collage7.jpg`,title: "IEEEXtreme 18.0 Pizza" }
];

/* ----------------------- SCIENTIFIC GROUPS ------------------------- */

export const web =
  {
        "id": 0,
        "name": "Web",
        "name_short": "Web",
        "wallpaper": "/assets/photos/web.JPG",
        "images": ["/projects/notifier.jpg"],
        "logo": "/assets/logos/scientific_groups/web.svg",
        "info": {
            "gr": {
                "description": "Ομάδα υλοποίησης διαδικτυακών εφαρμογών. Ελάτε στην ομάδα για να δημιουργήσουμε δυναμικές ιστοσελίδες που αλληλεπιδρούν με τον έξω κόσμο και εξυπηρετούν μια πραγματική εφαρμογή με χρήση σύγχρονων τεχνολογιών."
            },
            "en": {
                "description": "Ομάδα υλοποίησης διαδικτυακών εφαρμογών. Ελάτε στην ομάδα για να δημιουργήσουμε δυναμικές ιστοσελίδες που αλληλεπιδρούν με τον έξω κόσμο και εξυπηρετούν μια πραγματική εφαρμογή με χρήση σύγχρονων τεχνολογιών."
            }
        }
    };
export const biomed =
  {
        "id": 1,
        "name": "Biomedical Engineering",
        "name_short": "BioMed",
        "wallpaper": "/assets/photos/energy-project.jpg",
        "images": ["/projects/notifier.jpg"],
        "logo": "/assets/logos/scientific_groups/biomed.svg",
        "info": {
            "gr": {
                "description": "Ομάδα υλοποίησης εφαρμογών βιοϊατρικής μηχανικής. Ελάτε στην ομάδα μας να μάθετε τις βασικές πτυχές του biomedical engineering και να ασχοληθείτε με σύγχρονες τεχνικές και αλγορίθμους επεξεργασίας δεδομένων στην επιστήμη της ιατρικής και της βιολογίας."
            },
            "en": {
                "description": "Ομάδα υλοποίησης εφαρμογών βιοϊατρικής μηχανικής. Ελάτε στην ομάδα μας να μάθετε τις βασικές πτυχές του biomedical engineering και να ασχοληθείτε με σύγχρονες τεχνικές και αλγορίθμους επεξεργασίας δεδομένων στην επιστήμη της ιατρικής και της βιολογίας."
            }
        }
};
export const gamedev =
  {
        "id": 3,
        "name": "Game Development",
        "name_short": "GameDev",
        "wallpaper": "/assets/photos/Gamedev.JPG",
        "images": ["/projects/notifier.jpg"],
        "logo": "/assets/logos/scientific_groups/gamedev.svg",
        "info": {
            "gr": {
                "description": "Entry level game development team. Το Game Development είναι ένας κλάδος που έχει ανάγκη από ανθρώπους με διαφορετικά προσόντα και δεξιότητες. Ελάτε στην ομάδας μας για να δημιουργήσετε τους κόσμους και τους χαρακτήρες των παιχνιδιών ή τα γραφικά και τα εφέ. Επίσης μπορείτε να δημιουργήσετε τον κώδικα που καθοδηγεί τα παιχνίδια ή να συνεισφέρετε στην ιστορία και τα σενάρια."
            },
            "en": {
                "description": "Entry level game development team. Game Development is an industry that needs people with different qualifications and skills. Join our team to create game worlds and characters or graphics and effects. You can also create the code that drives the games or contribute to the story and scenarios."
            }
        }
};
export const compprog =
  {
        "id": 2,
        "name": "Competitive Programming",
        "name_short": "CompProg",
        "wallpaper": "/assets/photos/energy-project.jpg",
        "images": ["/projects/notifier.jpg"],
        "logo": "/assets/logos/scientific_groups/CompetitiveProgrammingSG.png",
        "info": {
            "gr": {
                "description": "Ομάδα συμμετοχής σε διαγωνισμούς προγραμματισμού. Ελάτε στην ομάδα μας για να μάθετε αλγορίθμους, δομές δεδομένων και μεθοδολογίες επίλυσης προβλημάτων με σκοπό την συμμετοχή σε παγκόσμιους διαγωνισμούς προγραμματισμού (ΙΕΕΕΧtreme, ICPC και άλλοι)."
            },
            "en": {
                "description": "Ομάδα συμμετοχής σε διαγωνισμούς προγραμματισμού. Ελάτε στην ομάδα μας για να μάθετε αλγορίθμους, δομές δεδομένων και μεθοδολογίες επίλυσης προβλημάτων με σκοπό την συμμετοχή σε παγκόσμιους διαγωνισμούς προγραμματισμού (ΙΕΕΕΧtreme, ICPC και άλλοι)."
            }
        }
};
export const telecom =
  {
        "id": 4,
        "name": "Telecommunications",
        "name_short": "Telecom",
        "wallpaper": "/assets/photos/energy-project.jpg",
        "images": ["/projects/notifier.jpg"],
        "logo": "/assets/logos/scientific_groups/telecom.svg",
        "info": {
            "gr": {
                "description": "Ομάδα υλοποίησης τηλεπικοινωνιακών εφαρμογών. Ελάτε στην ομάδα μας να μάθουμε για τις σύγχρονες τάσεις στις τηλεπικοινωνίες, να σχεδιάσουμε κυκλώματα RF, να προσομοιώσουμε και να εξετάσουμε μοντέλα και πολλές άλλες τηλεπικοινωνιακές εφαρμογές."
            },
            "en": {
                "description": "Ομάδα υλοποίησης τηλεπικοινωνιακών εφαρμογών. Ελάτε στην ομάδα μας να μάθουμε για τις σύγχρονες τάσεις στις τηλεπικοινωνίες, να σχεδιάσουμε κυκλώματα RF, να προσομοιώσουμε και να εξετάσουμε μοντέλα και πολλές άλλες τηλεπικοινωνιακές εφαρμογές."
            }
        }
};
export const energy =
  {
        "id": 5,
        "name": "Energy",
        "name_short": "Energy",
        "wallpaper": "/assets/photos/Energy.jpg",
        "images": ["/projects/notifier.jpg"],
        "logo": "/assets/logos/scientific_groups/energy.svg",
        "info": {
            "gr": {
                "description": "Το Energy Scientific Group είναι μια ομάδα η οποία έχει ως σκοπό την διεξαγωγή ομαδικών εργασιών (Projects) σχετικά με το αντικείμενο της ενέργειας : Ηλεκτρικές Μηχανές, Ηλεκτρονικά Ισχύος, Ανανεώσιμες Πηγές Ενέργειας και ο,τι άλλο σχετικό.  Τα Projects είναι τόσο ανατπυξιακού χαρακτήρα, όσο και εκπαιδευτικού. Τυχόν ενδιαφερόμενοι μπορούν να φέρουν ιδέες για Project που θα τους ενδιέφερε να ασχοληθούν."
            },
            "en": {
                "description": "The Energy Scientific Group is a team whose purpose is to carry out group projects related to energy: Electric Machines, Power Electronics, Renewable Energy Sources, and anything else related.  The projects are both developmental and educational in nature. Anyone interested can contribute ideas for projects they would like to work on."
            }
        }
  };
  export const electronics =
  {
        "id": 6,
        "name": "Electronics",
        "name_short": "Electronics",
        "wallpaper": "/assets/photos/energy-project.jpg",
        "images": ["/projects/notifier.jpg"],
        "logo": "/assets/logos/scientific_groups/electronics.svg",
        "info": {
            "gr": {
                "description": "Η ομάδα electronics ασχολείται κυρίως με projects που σχετίζονται με μικροελεγκτές και ενσωματωμένα συστήματα. Οι μικροελεγκτές και τα ενσωματωμένα συστήματα αποτελούν τον πυρήνα πολλών σύγχρονων τεχνολογικών λύσεων, καθώς χρησιμοποιούνται ευρέως σε εφαρμογές όπως αυτοματισμοί, ρομποτική, οικιακές συσκευές, αυτοκίνητα, βιομηχανικά συστήματα και το Διαδίκτυο των Πραγμάτων (IoT). Ελάτε στην ομάδα μας για να αποκτήσετε εμπειρία στους τομείς αυτούς μέσω της συμμετοχής σας σε διαγωνισμούς και στα projects μας."
            },
            "en": {
                "description": "The electronics team mainly deals with projects related to microcontrollers and embedded systems. Microcontrollers and embedded systems are at the core of many modern technological solutions, as they are widely used in applications such as automation, robotics, home appliances, automobiles, industrial systems, and the Internet of Things (IoT). Join our team to gain experience in these areas by participating in competitions and our projects."
            }
        }
  };
  
export const heroImages = [
  `${imagesUrl}/wallpapers/IEEEXTREME_18.0.jpg`,
  `${imagesUrl}/wallpapers/incubation_centre.jpg`,
 // `${imagesUrl}/wallpapers/IEEEXtreme-17.0.jpg`,
  `${imagesUrl}/wallpapers/OPEN-DAY.jpg`,
// `${imagesUrl}/wallpapers/git-workshop-team-photo.png`, 
];

export const joinSBStepsEN = [
  <>
    To register for the branch, simply fill out the{' '}
    <Hyperlink href="https://forms.gle/QM1pkrSQfDRZKCaPA" className="text-p4" arrow={false}>
      registration form
    </Hyperlink>.
  </>,
  'Afterwards, a member of HR of the branch will contact you directly via Discord to discuss your interests and find the appropriate team for you.',
  'Once the process is successfully completed, you will officially be a member of IEEE SB UniWA.',
];

export const joinIEEEStepsEN = [
  <>
    To subscribe to IEEE, you can visit the{' '}
    <Hyperlink href="https://www.ieee.org/membership/index.html" className="text-p4" arrow={false}>
      IEEE Main Page
    </Hyperlink>.
  </>,
  'You will need to create an account and then log in with it.',
  'Next, select "Join IEEE" and follow the subscription steps.',
  'The annual Subscription comes at around $27 USD for the whole year.',
];
export const joinSBStepsGR = [
  <>
    Για την εγγραφή σας στο παράρτημα αρκεί να συμπληρώσετε την φόρμα εγγραφής{' '}
    <Hyperlink href="https://forms.gle/QM1pkrSQfDRZKCaPA" className="text-p4" arrow={false}>
      φόρμα εγγραφής
    </Hyperlink>.
  </>,
  'Στη συνέχεια θα επικοινωνήσει άμεσα μαζί σας ένα μέλος του παραρτήματος μέσω discord προκειμένου να συζητήσετε με βάση τα ενδιαφέροντά σας με στόχο να βρείτε την κατάλληλη ομάδα.',
  'Μόλις ολοκληρωθεί επιτυχώς η διαδικασία είστε και επίσημα μέλος του IEEE SB UniWA.',
];

export const joinIEEEStepsGR = [
  <>
    Για την συνδρομή στο IEEE μπορείτε να απευθυνθείτε στην{' '}
    <Hyperlink href="https://www.ieee.org/membership/index.html" className="text-p4" arrow={false}>
      κεντρική σελίδα του IEEE
    </Hyperlink>.
  </>,
  'Πρέπει να δημιουργήσετε έναν λογαριασμό και στην συνέχεια να κάνετε log in με αυτόν.',
  'Στη συνέχεια επιλέγετε Join IEEE και ακολουθείτε τα βήματα συνδρομής.',
  'Η ετήσια συνδρομή ανέρχεται στα 27 δολάρια.',
];
export const socials = [
    {
      id: "0",
      title: "Email",
      icon: "/assets/logos/socials/email.png",
      url: "mailto:ieeesb@uniwa.gr",
    },
    {
      id: "1",
      title: "Discord",
      icon: "/assets/logos/socials/discord.svg",
      url: "https://discord.com/invite/m2zH8F33xD",
    },
    {
      id: "2",
      title: "Instagram",
      icon: "/assets/logos/socials/instagram.svg",
      url: "https://www.instagram.com/ieeesbuniwa/",
    },
    {
      id: "3",
      title: "LinkedIn",
      icon: "/assets/logos/socials/linkedin.svg",
      url: "https://www.linkedin.com/company/ieee-student-branch-uniwa/",
    },
    {
      id: "4",
      title: "Facebook",
      icon: "/assets/logos/socials/facebook.svg",
      url: "https://www.facebook.com/ieeesbuniwa/",
    },
    {
      id: "5",
      title: "Github",
      icon: "/assets/logos/socials/github.svg",
      url: "https://github.com/ieee-sb-uniwa",
    }
];