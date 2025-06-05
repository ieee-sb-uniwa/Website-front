import Hyperlink from "@components/ui/Hyperlink";
const imagesUrl = process.env.NEXT_PUBLIC_IMAGES_STORAGE_URL;

export const sponsors= [
  {title: "Αγροκτήματα Κιθαιρώνα",img:"/assets/logos/sponsors/kitheronfarms.png", url: "https://www.kitheronfarms.gr" , imgWidth:230, imgHeight:130},
  { title: "Mathisys Technologies Hellas", img: "/assets/logos/sponsors/MATHISYS_2024.png", url: "https://www.mathisys-hellas.com", imgWidth:5069, imgHeight:1358}, 
];

export const scientificGroupsLogos= [
  { title: "Web", img: "/assets/logos/scientific_groups/web.svg", url: "/science-teams/web", imgWidth:800, imgHeight:500}, 
  { title: "Electronics", img: "/assets/logos/scientific_groups/electronics.svg", url: "/science-teams/electronics", imgWidth:800, imgHeight:500}, 
  {title: "Telecommunications",img:"/assets/logos/scientific_groups/telecom.svg", url: "/science-teams/telecom" , imgWidth:800, imgHeight:500},
  { title: "Game Development", img: "/assets/logos/scientific_groups/gamedev.svg", url: "/science-teams/gamedev", imgWidth:800, imgHeight:500}, 
  { title: "Biomedical Engineering", img: "/assets/logos/scientific_groups/biomed.svg", url: "/science-teams/biomed", imgWidth:800, imgHeight:500}, 
  { title: "Competitive Programming", img: "/assets/logos/scientific_groups/competitive programming.svg", url: "/science-teams/comp-prog", imgWidth:800, imgHeight:500},  
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