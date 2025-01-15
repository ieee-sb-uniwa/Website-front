import Hero from "@components/sections/Hero";
import MapWrapper from "@components/sections/MapWrapper";
import { Sponsors } from "@components/sections/Sponsors";
import Team from "@components/sections/Team";
import {council} from "@constants/constants.js"
import { getCouncil } from "@actions/getCouncil";
export const dynamic = 'force-dynamic'
import {getTranslations} from 'next-intl/server';
import EventCard from "@components/news/EventCard";

export default async function Home({ params }) {
  const locale = params.locale; 
  //const council = await getCouncil(locale);
  if (!council) notFound();
  const councilTranslations =  await getTranslations('Council');
  const events =[
    {
        "id": 0,
        "date": "2024-11-30T12:00:00",
        "location": "UniWA - Campus 2 - Amphitheater",
        "title": "ΙΕΕΕ Open Day",
        "images": ["https://career.uniwa.gr/wp-content/uploads/2024/11/Open-Day-Flyer.png"],
        "keywords": ["Workshop","Version Control", "Git"],
        "description": "✨ We invite you to IEEE SB UniWA's first on-site workshop on version control with Git and GitHub! Git and GitHub are two related tools widely used for code tracking and management. 🖥️👨‍💻 Git is a version control system that allows developers to track changes in their code, keep a history of these changes, and collaborate with others on shared projects. 💾 GitHub is a Git repository hosting platform that offers an environment for code sharing and collaboration, combining Git’s features with an online platform. 🌐✅ This workshop will be conducted by Spyros Saridakis and will cover all the essential knowledge needed to effectively work on team projects involving code and more! 👥📅 Date: Saturday, October 12 - 12:00 p.m. 📍 Location: University of West Attica 🔷 To register, please fill out the form below. 🚀 Don’t miss the chance to boost your productivity and collaborate effectively with others! 😎",
        "links": [
            {
                "title": "Workshop Participation Form",
                "url": "https://forms.gle/8ubz9qhCwxtUmjbU8"
            }
        ]
    },
    {
      "id": 1,
      "date": "2024-10-26T03:00:00",
      "location": "UniWA - Campus 2 - ZB001",
      "title": "IEEEXtreme 18.0",
      "images": ["/assets/thumbnails/IEEEXtreme_18.0.png"],
      "keywords": ["Hackathon","Programming"],
      "description": "✨ We invite you to IEEE SB UniWA's first on-site workshop on version control with Git and GitHub! Git and GitHub are two related tools widely used for code tracking and management. 🖥️👨‍💻 Git is a version control system that allows developers to track changes in their code, keep a history of these changes, and collaborate with others on shared projects. 💾 GitHub is a Git repository hosting platform that offers an environment for code sharing and collaboration, combining Git’s features with an online platform. 🌐✅ This workshop will be conducted by Spyros Saridakis and will cover all the essential knowledge needed to effectively work on team projects involving code and more! 👥📅 Date: Saturday, October 12 - 12:00 p.m. 📍 Location: University of West Attica 🔷 To register, please fill out the form below. 🚀 Don’t miss the chance to boost your productivity and collaborate effectively with others! 😎",
      "links": [
          {
              "title": "Workshop Participation Form",
              "url": "https://forms.gle/8ubz9qhCwxtUmjbU8"
          }
      ]
    },
    {
      "id": 2,
      "date": "2024-10-12T12:00:00",
      "location": "UniWA - Campus 1 - Amphitheater",
      "title": "Git-Github Workshop",
      "images": ["/assets/thumbnails/GithubWorkshop.jpg"],
      "keywords": ["Seminar","Tech Event"],
      "description": "✨ We invite you to IEEE SB UniWA's first on-site workshop on version control with Git and GitHub! Git and GitHub are two related tools widely used for code tracking and management. 🖥️👨‍💻 Git is a version control system that allows developers to track changes in their code, keep a history of these changes, and collaborate with others on shared projects. 💾 GitHub is a Git repository hosting platform that offers an environment for code sharing and collaboration, combining Git’s features with an online platform. 🌐✅ This workshop will be conducted by Spyros Saridakis and will cover all the essential knowledge needed to effectively work on team projects involving code and more! 👥📅 Date: Saturday, October 12 - 12:00 p.m. 📍 Location: University of West Attica 🔷 To register, please fill out the form below. 🚀 Don’t miss the chance to boost your productivity and collaborate effectively with others! 😎",
      "links": [
          {
              "title": "Workshop Participation Form",
              "url": "https://forms.gle/8ubz9qhCwxtUmjbU8"
          }
      ]
  }
]

  return (
  <section className='w-full flex-center flex-col'>
    <Hero/>

    <section className="section_container">
      <h3 className='h3 max-md:h5 text-p4'>Recent Activities</h3>
      <ul className="mt-7 card_grid">
      {events && events.length > 0 ? (
        events.map((event, index) => (
          <EventCard key={event.id || index} event={event} locale={locale} />
        ))
        ) : (
          <p className="no-events">No Events</p>
        )}
      </ul>
    </section>
    <Team team={council} translationsComponent={councilTranslations}/>
    <Sponsors/>
    
    <MapWrapper/>

  </section>
);
}