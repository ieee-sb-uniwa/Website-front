import Hyperlink from "@components/ui/Hyperlink";
const imagesUrl = process.env.NEXT_PUBLIC_IMAGES_STORAGE_URL;

export const sponsors = [
  // Top
  {
    title: "B&T Composites",
    img: "/assets/logos/sponsors/BT2.svg",
    url: "https://www.bt-composites.gr/",
    imgWidth: "",
    imgHeight: "",
    scale: 1.3,
  },

  // Platinum
  {
    title: "ALFASOLID Works",
    img: "/assets/logos/sponsors/alfasolid.png",
    url: "https://alfasolid.gr/",
    imgWidth: "",
    imgHeight: "",
    scale: 3,
  },

  // Gold
  {
    title: "Altium",
    img: "/assets/logos/sponsors/altium-white.png",
    url: "https://www.altium.com/",
    imgWidth: "",
    imgHeight: "",
    scale: 1.1,
  },

  // Bronze
  {
    title: "Aytokollita",
    img: "/assets/logos/sponsors/aytokollita.png",
    url: "https://www.aytokollita.gr/",
    imgWidth: "",
    imgHeight: "",
    scale: 1.1,
  },
  {
    title: "Σχήμα.gr",
    img: "/assets/logos/sponsors/sxhma.png",
    url: "https://sxhma.gr/",
    imgWidth: "",
    imgHeight: "",
    scale: 1.6,
  },
  {
    title: "mysfragida",
    img: "/assets/logos/sponsors/mysfragida.avif",
    url: "https://mysfragida.gr/",
    imgWidth: "",
    imgHeight: "",
    scale: 1.8,
  },

  // Unknown - Bronze?
  {
    title: "Mathisys Technologies Hellas",
    img: "/assets/logos/sponsors/MATHISYS_2024.png",
    url: "https://www.mathisys-hellas.com",
    imgWidth: 5069,
    imgHeight: 1358,
    scale: 1,
  },
  {
    title: "Αγροκτήματα Κιθαιρώνα",
    img: "/assets/logos/sponsors/kitheronfarms.png",
    url: "https://www.kitheronfarms.gr",
    imgWidth: 230,
    imgHeight: 130,
    scale: 1,
  },
];

export const collageList = [
  {
    url: `${imagesUrl}/join_collage/collage1.jpg`,
    title: "Biomedical Workshop",
  },
  { url: `${imagesUrl}/join_collage/collage2.jpg`, title: "ExCom Meeting" },
  { url: `${imagesUrl}/join_collage/collage3.JPG`, title: "IEEEXtreme 17.0" },
  {
    url: `${imagesUrl}/join_collage/collage4.jpg`,
    title: "Stelios Foundation SB Presentation",
  },
  {
    url: `${imagesUrl}/join_collage/collage5.jpg`,
    title: "IEEEXplore Research and Publishing Event",
  },
  { url: `${imagesUrl}/join_collage/collage6.jpg`, title: "IEEE Open Day" },
  {
    url: `${imagesUrl}/join_collage/collage7.jpg`,
    title: "IEEEXtreme 18.0 Pizza",
  },
];

/* ----------------------- SCIENTIFIC GROUPS ------------------------- */

export const software =
  {
        "id": 0,
        "name": "Software Engineering",
        "name_short": "Software",
        "wallpaper": "/assets/photos/web.JPG",
        "images": ["/projects/notifier.jpg"],
        "logo": `${imagesUrl}/SG/Software SG.png`,
        "info": {
            "gr": {
                "description": "Το Software SG είναι η ομάδα που εστιάζει στην εκμάθηση προγραμματισμού, την ανάπτυξη λογισμικού και την έρευνα σε αλγορίθμους. Μέσα από πρακτικά projects και συμμετοχή σε διαγωνισμούς, τα μέλη χτίζουν ισχυρές βάσεις στην επίλυση προβλημάτων και τον σύγχρονο software engineering κύκλο."
            },
            "en": {
                "description": "Το Software SG είναι η ομάδα που εστιάζει στην εκμάθηση προγραμματισμού, την ανάπτυξη λογισμικού και την έρευνα σε αλγορίθμους. Μέσα από πρακτικά projects και συμμετοχή σε διαγωνισμούς, τα μέλη χτίζουν ισχυρές βάσεις στην επίλυση προβλημάτων και τον σύγχρονο software engineering κύκλο."
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
        "logo": `${imagesUrl}/SG/Biomed-SG.png`,
        "info": {
            "gr": {
                "description": "Το Biomed SG είναι μια διεπιστημονική ομάδα με στόχο την έρευνα και ανάπτυξη λύσεων στον τομέα της βιοϊατρικής τεχνολογίας. Μέσα από συνεργασία, πειραματισμό και πρακτική εφαρμογή, τα μέλη εξερευνούν καινοτόμες ιδέες που συμβάλλουν στην υγεία και την ποιότητα ζωής."
            },
            "en": {
                "description": "Biomed SG is an interdisciplinary group focused on the research and development of solutions in the field of biomedical technology. Through collaboration, experimentation, and practical application, its members explore innovative ideas that contribute to health and quality of life."
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
        "logo": `${imagesUrl}/SG/GameDev-SG.png`,
        "info": {
            "gr": {
                "description": "Το GameDev SG φέρνει κοντά φοιτητές από διαφορετικά backgrounds με κοινό στόχο τη δημιουργία εκπαιδευτικών και ψυχαγωγικών παιχνιδιών. Η ομάδα προσφέρει hands-on εμπειρία στα στάδια παραγωγής ενός παιχνιδιού — από τον προγραμματισμό και το game design μέχρι τη μουσική, τα γραφικά και την αφήγηση."
            },
            "en": {
                "description": "GameDev SG brings together students from diverse backgrounds with a shared goal of creating educational and entertainment games. The team offers hands-on experience across all stages of game development — from programming and game design to music, graphics, and storytelling."
            }
        }
};
export const ai =
  {
        "id": 2,
        "name": "Artificial Intelligence",
        "name_short": "A.I.",
        "wallpaper": "/assets/photos/energy-project.jpg",
        "images": ["/projects/notifier.jpg"],
        "logo": `${imagesUrl}/SG/AI-SG.png`,
        "info": {
            "gr": {
                "description": "Η ομάδα επικεντρώνεται στην ανάπτυξη καινοτόμων λύσεων Τεχνητής Νοημοσύνης που απαντούν σε πραγματικές ανάγκες. Τα μέλη αποκτούν πρακτική εμπειρία σε σύγχρονα εργαλεία και τεχνολογίες του industry, υλοποιώντας end-to-end projects."
            },
            "en": {
                "description": "Η ομάδα επικεντρώνεται στην ανάπτυξη καινοτόμων λύσεων Τεχνητής Νοημοσύνης που απαντούν σε πραγματικές ανάγκες. Τα μέλη αποκτούν πρακτική εμπειρία σε σύγχρονα εργαλεία και τεχνολογίες του industry, υλοποιώντας end-to-end projects."
            }
        }
};
export const naval =
  {
        "id": 4,
        "name": "Naval Architecture",
        "name_short": "Naval",
        "wallpaper": "/assets/photos/energy-project.jpg",
        "images": ["/projects/notifier.jpg"],
        "logo": `${imagesUrl}/SG/Naval-SG.png`,
        "info": {
            "gr": {
                "description": "Το Naval SG επικεντρώνεται στην εφαρμογή τεχνολογίας αιχμής στον τομέα της ναυτιλίας. Μέσα από projects που συνδυάζουν ναυπηγική, ηλεκτρολογία, μηχανολογία και τεχνητή νοημοσύνη, στοχεύει στην ανάπτυξη έξυπνων και βιώσιμων λύσεων για το μέλλον των πλοίων και των θαλάσσιων μεταφορών."
            },
            "en": {
                "description": "Naval SG focuses on the application of cutting-edge technology in the maritime sector. Through projects that combine naval architecture, electrical and mechanical engineering, and artificial intelligence, the team aims to develop smart and sustainable solutions for the future of ships and marine transportation."
            }
        }
};
export const energy =
  {
        "id": 5,
        "name": "Power & Energy",
        "name_short": "Energy",
        "wallpaper": "/assets/photos/Energy.jpg",
        "images": ["/projects/notifier.jpg"],
        "logo": `${imagesUrl}/SG/Energy-SG.png`,
        "info": {
            "gr": {
                "description": "Το Energy Scientific Group είναι μια ομάδα η οποία έχει ως σκοπό την διεξαγωγή ομαδικών εργασιών (Projects) σχετικά με το αντικείμενο της ενέργειας: Ηλεκτρικές Μηχανές, Ηλεκτρονικά Ισχύος, Ανανεώσιμες Πηγές Ενέργειας και ότι άλλο σχετικό. Τα Projects είναι τόσο αναπτυξιακού χαρακτήρα, όσο και εκπαιδευτικού.Τυχόν ενδιαφερόμενοι μπορούν να φέρουν ιδέες για Project που θα τους ενδιέφερε να ασχοληθούν."
            },
            "en": {
                "description": "Energy SG focuses on applied technology in the fields of electrical power, renewable energy sources, electric machines, and energy systems optimization. The team carries out projects with technical, developmental, and educational objectives, bridging the gap between academic knowledge and practical application."
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
        "logo": `${imagesUrl}/SG/Electronics-SG.png`,
        "info": {
            "gr": {
                "description": "Το Electronics SG ασχολείται με τον σχεδιασμό, την ανάπτυξη και την κατασκευή συστημάτων που βασίζονται σε μικροελεγκτές, ενσωματωμένα κυκλώματα και hardware τεχνολογίες. Η ομάδα επικεντρώνεται στη δημιουργία πρακτικών λύσεων σε τομείς όπως η ρομποτική, το IoT, η αυτοκίνηση και τα βιομηχανικά συστήματα."
            },
            "en": {
                "description": "Electronics SG is engaged in the design, development, and construction of systems based on microcontrollers, embedded circuits, and hardware technologies. The team focuses on creating practical solutions in fields such as robotics, IoT, automotive applications, and industrial systems."
            }
        }
  };
    export const metaverse =
  {
        "id": 7,
        "name": "Metaverse & XR",
        "name_short": "Metaverse",
        "wallpaper": "/assets/photos/energy-project.jpg",
        "images": ["/projects/notifier.jpg"],
        "logo": `${imagesUrl}/SG/Metaverse-SG.png`,
        "info": {
            "gr": {
                "description": "Το Metaverse SG επικεντρώνεται στην έρευνα και ανάπτυξη σε τομείς όπως η Εικονική (VR), Επαυξημένη (AR), Μικτή (MR) και Επεκταμένη Πραγματικότητα (XR), με εφαρμογές σε gaming, εκπαίδευση, remote engineering και αεροναυτική. Η ομάδα λειτουργεί σε συνεργασία με το Metaverse Hub του εργαστηρίου CoNSeRT του Πανεπιστημίου Δυτικής Αττικής, προσφέροντας πρόσβαση σε προηγμένες υποδομές, βιομηχανική τεχνογνωσία και διασύνδεση με διεθνή δίκτυα."
            },
            "en": {
                "description": "Metaverse SG focuses on research and development in areas such as Virtual Reality (VR), Augmented Reality (AR), Mixed Reality (MR), and Extended Reality (XR), with applications in gaming, education, remote engineering, and aerospace. The team operates in collaboration with the Metaverse Hub of the CoNSeRT Laboratory at the University of West Attica, providing access to advanced infrastructure, industrial expertise, and connections with international networks."
            }
        }
  };
export const electronics_projects = [
      {
            "index": "0",
            "name": "IEEEDuino Project",
            "description": "Ανάπτυξη και κατασκευή Arduino-based συστημάτων και εφαρμογών που θα συμμετάσχουν στον διαγωνισμό IEEEduino. Το project συνδυάζει hardware και software, δίνοντας στα μέλη πρακτική εμπειρία σε πραγματικές συνθήκες ανάπτυξης.",
            "tags": [{ name: "C/C++" },{ name: "Arduino" },{ name: "Embedded Systems" },{ name: "Competition" }],
            "image": "/assets/images/IEEEDuino.jpg",
            "links": "https://ai-sg-uniwa.streamlit.app/milon"
  },
    {
            "index": "2",
            "name": "Autonomous Fixed-Wing UAV",
            "description": "Το UAV Project στοχεύει στη σχεδίαση και κατασκευή ενός αυτόνομου fixed-wing drone, ικανού να εκτελεί ακριβείς αποστολές μεταφοράς μικρών φορτίων σε μεγάλες αποστάσεις. Μέρος των συστημάτων (όπως custom flight controller, PCB, και αεροδυναμικό πλαίσιο) θα σχεδιαστεί και θα υλοποιηθεί εξ ολοκλήρου από την ομάδα.",
            "tags": [{ name: "PCB" },{ name: "MATLAB/Simulink" }, { name: "CAD/CFD Design Tools" }, { name: "Sensors" }],
            "image": "/assets/images/IEEEDuino.jpg",
            "links": "https://ai-sg-uniwa.streamlit.app/milon"
  }
]
export const software_projects = [
    {
            "index": "0",
            "name": "IEEE SB UniWA Website",
            "description": "AI-powered σύστημα που παρακολουθεί τη διατροφή, την προπόνηση και την απόδοση αθλητών, παρέχοντας εξατομικευμένες συστάσεις για συνεχή βελτίωση.",
            "tags": [{ name: "Next.js" },{ name: "Traefik" },{ name: "Elysia.js" },{ name: "MongoDB" },{ name: "Docker" }],
            "image": "/assets/images/IEEE-SB-Website.jpg",
            "links": "https://ai-sg-uniwa.streamlit.app/milon"
  },
    {
            "index": "2",
            "name": "Competitive Programming",
            "description": "AI-powered σύστημα που παρακολουθεί τη διατροφή, την προπόνηση και την απόδοση αθλητών, παρέχοντας εξατομικευμένες συστάσεις για συνεχή βελτίωση.",
            "tags": [{ name: "Greedy Algorithms" },{ name: "IEEEXtreme" }, { name: "Dynamic Programming" }],
            "image": "/assets/images/CompProgThumbnail.jpg",
            "links": "https://ai-sg-uniwa.streamlit.app/milon"
  },
    {
            "index": "3",
            "name": "My UniWA Schedule",
            "description": "AI-powered σύστημα που παρακολουθεί τη διατροφή, την προπόνηση και την απόδοση αθλητών, παρέχοντας εξατομικευμένες συστάσεις για συνεχή βελτίωση.",
            "tags": [{ name: "Android" }, { name: "React.js" },{ name: "ASP.NET" }],
            "image": "/assets/images/.jpg",
            "links": "https://ai-sg-uniwa.streamlit.app/milon"
  },
    {
            "index": "4",
            "name": "UniWA Parking",
            "description": "AI-powered σύστημα που παρακολουθεί τη διατροφή, την προπόνηση και την απόδοση αθλητών, παρέχοντας εξατομικευμένες συστάσεις για συνεχή βελτίωση.",
            "tags": [{ name: "Node.js" }, { name: "Python OpenCV" },{ name: "Python FastAPI" },{ name: "YOLO v5" }],
            "image": "/assets/images/PARKING-UNIWA.png",
            "links": "https://ai-sg-uniwa.streamlit.app/milon"
  },
]
export const naval_projects =[
    {
            "index": "0",
            "name": "AcquaMind",
            "description": "Έξυπνος AI βοηθός για μηχανικούς πλοίων, που υποστηρίζει τη διάγνωση και ιχνηλάτηση βλαβών με βάση δεδομένα λειτουργίας και manuals. Αναλύει δεδομένα σε πραγματικό χρόνο και βελτιστοποιεί τη συντήρηση μέσω predictive analytics.",
            "tags": [{ name: "AI Assistant"} ],
            "image": "/assets/images/AquaMindThumbnail.jpeg",
            "links": ["https://ai-sg-uniwa.streamlit.app/milon"]
  },
    {
            "index": "1",
            "name": "CleanSea",
            "description": "Αυτόνομο ηλεκτρικό σκάφος καθαρισμού θαλάσσιων επιφανειών, με φωτοβολταϊκή τροφοδοσία και συστήματα αναγνώρισης εμποδίων.Μια βιώσιμη λύση για καθαρότερους ωκεανούς και λιμάνια.",
            "tags": [{ name: "Sensing"}, { name: "Cleanup Vessel"} ],
            "image": "/assets/images/CleanSeaThumbnail.png",
            "links": ["https://ai-sg-uniwa.streamlit.app/milon"]
  },
  {
            "index": "2",
            "name": "HydroNav",
            "description": "Έξυπνο οικοσύστημα σπιτιού με αισθητήρες και AI, το οποίο φροντίζει για ανθρώπους, φυτά και κατοικίδια, προάγοντας υγεία και ευεξία.",
            "tags": [{ name: "sonar"}, { name: "radar"}, { name: "Submarine Mapping"}],
            "image": "/assets/images/HydroNavThumbnail.png",
            "links": ["https://ai-sg-uniwa.streamlit.app/estia"]
  },
  
]
export const ai_projects = [
  {
            "index": "0",
            "name": "Milon",
            "description": "AI-powered σύστημα που παρακολουθεί τη διατροφή, την προπόνηση και την απόδοση αθλητών, παρέχοντας εξατομικευμένες συστάσεις για συνεχή βελτίωση.",
            "tags": [{ name: "Food Recognition & Classification"}, { name: "Exercise Analytics"} ],
            "image": "/assets/images/MilonThumbnail.png",
            "links": ["https://ai-sg-uniwa.streamlit.app/milon"]
  },
  {
            "index": "1",
            "name": "Estia",
            "description": "Έξυπνο οικοσύστημα σπιτιού με αισθητήρες και AI, το οποίο φροντίζει για ανθρώπους, φυτά και κατοικίδια, προάγοντας υγεία και ευεξία.",
            "tags": [{ name: "Plant Disease Detection"}, { name: "Smart Home"}],
            "image": "/assets/images/EstiaThumbnail.png",
            "links": ["https://ai-sg-uniwa.streamlit.app/estia"]
  },
]
export const gamedev_projects = [
  {
      "index": "0",
      "name": "Cyber-Quest",
      "description": "Ανάπτυξη εκπαιδευτικού 2D παιχνιδιού για παιδιά δημοτικού με θέμα την ασφάλεια στο διαδίκτυο. Μέσα από διαδραστικές αποστολές, οι μαθητές μαθαίνουν πώς να προστατεύονται online, να αναγνωρίζουν κινδύνους και να υιοθετούν καλές πρακτικές για ασφαλή χρήση του διαδικτύου. Ακόμα οι εκπαιδευτικοί μπορούν να το αξιοποιήσουν ως εργαλείο για πιο ενεργό και ευχάριστο μάθημα πληροφορικής.",
      "tags": [{ name: "GDScript" },{ name: "Photoshop" },{ name: "Aseprite" },{ name: "Godot" } ,{ name: "Pixelorama" } ],
      "image": "/assets/images/CyberQuestThumbnail.jpeg"
  }
]
export const energy_projects = [
          {
            "index": "0",
            "name": "DC-DC Converter",
            "description": "Σχεδίαση και κατασκευή ενός μετατροπέα συνεχούς ρεύματος με σκοπό την ενσωμάτωσή του σε μονοθέσιο διαγωνισμού Shell Eco-Marathon.",
            "tags": [{ name: "PCB" },{ name: "Simulink" },{ name: "LT Spice" }, {name:"Matlab", color:"bg-gradient-energy"}],
            "image": `/assets/images/Power-Electronics-Thumbnail.jpg`,
            "links": "/"
          },
          {
            "index": "1",
            "name": "Reverse Engineering",
            "description": "Επαναχρησιμοποίηση υλικών από end-of-life ηλεκτρονικές συσκευές, κατανόηση της λειτουργίας τους και δημιουργία νέων, χρήσιμων εφαρμογών.",
            "tags": [{ name: "Recycling"}],
            "image": "/assets/images/Reverse-Engineering-Thumbnail.jpg",
            "links": "/"
          },
          {
            "index": "2",
            "name": "Semiconductor Measurement Chart",
            "description": "Δημιουργία ενός Χάρτη - Οδηγού Μέτρησης Ημιαγωγών, ως χρήσιμο εργαλείο αναφοράς για φοιτητές και τεχνικούς.",
            "tags": [{ name: "Semiconductors" }],
            "image": "/assets/images/Semiconductor-map-thumbnail.png",
            "links": "/"
          },
          {
            "index": "3",
            "name": "Cool & Re-Use",
            "description": "Μελέτη και ανάπτυξη ενός συστήματος εξοικονόμησης θερμότητας που βελτιώνει την απόδοση φωτοβολταϊκών πλαισίων.",
            "tags": [{ name: "photovoltaic panels" }, {name: "thermodynamics"}, {name: "heat transfer"}],
            "image": "/assets/images/cool-and-reuse.png",
            "links": "/"
          },
          {
            "index": "4",
            "name": "Intelligent Lighting",
            "description": " Ανάπτυξη ενός συστήματος φωτισμού για τη βελτίωση της απόδοσης, ποιότητας και διάρκειας ζωής εγκαταστάσεων φωτισμού.",
            "tags": [{ name: "ReLux" }],
            "image": "/assets/images/SmartLighting.png",
            "links": "/"
          }
]

export const heroImages = [
  `${imagesUrl}/wallpapers/IEEEXTREME_18.0.jpg`,
  `${imagesUrl}/wallpapers/incubation_centre.jpg`,
  // `${imagesUrl}/wallpapers/IEEEXtreme-17.0.jpg`,
  `${imagesUrl}/wallpapers/OPEN-DAY.jpg`,
  // `${imagesUrl}/wallpapers/git-workshop-team-photo.png`,
];

export const joinSBStepsEN = [
  <>
    To register for the branch, simply fill out the{" "}
    <Hyperlink
      href="https://forms.gle/QM1pkrSQfDRZKCaPA"
      className="text-p4"
      arrow={false}
    >
      registration form
    </Hyperlink>
    .
  </>,
  "Afterwards, a member of HR of the branch will contact you directly via Discord to discuss your interests and find the appropriate team for you.",
  "Once the process is successfully completed, you will officially be a member of IEEE SB UniWA.",
];

export const joinIEEEStepsEN = [
  <>
    To subscribe to IEEE, you can visit the{" "}
    <Hyperlink
      href="https://www.ieee.org/membership/index.html"
      className="text-p4"
      arrow={false}
    >
      IEEE Main Page
    </Hyperlink>
    .
  </>,
  "You will need to create an account and then log in with it.",
  'Next, select "Join IEEE" and follow the subscription steps.',
  "The annual Subscription comes at around $27 USD for the whole year.",
];
export const joinSBStepsGR = [
  <>
    Για την εγγραφή σας στο παράρτημα αρκεί να συμπληρώσετε την φόρμα εγγραφής{" "}
    <Hyperlink
      href="https://forms.gle/QM1pkrSQfDRZKCaPA"
      className="text-p4"
      arrow={false}
    >
      φόρμα εγγραφής
    </Hyperlink>
    .
  </>,
  "Στη συνέχεια θα επικοινωνήσει άμεσα μαζί σας ένα μέλος του παραρτήματος μέσω discord προκειμένου να συζητήσετε με βάση τα ενδιαφέροντά σας με στόχο να βρείτε την κατάλληλη ομάδα.",
  "Μόλις ολοκληρωθεί επιτυχώς η διαδικασία είστε και επίσημα μέλος του IEEE SB UniWA.",
];

export const joinIEEEStepsGR = [
  <>
    Για την συνδρομή στο IEEE μπορείτε να απευθυνθείτε στην{" "}
    <Hyperlink
      href="https://www.ieee.org/membership/index.html"
      className="text-p4"
      arrow={false}
    >
      κεντρική σελίδα του IEEE
    </Hyperlink>
    .
  </>,
  "Πρέπει να δημιουργήσετε έναν λογαριασμό και στην συνέχεια να κάνετε log in με αυτόν.",
  "Στη συνέχεια επιλέγετε Join IEEE και ακολουθείτε τα βήματα συνδρομής.",
  "Η ετήσια συνδρομή ανέρχεται στα 27 δολάρια.",
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
  },
];
