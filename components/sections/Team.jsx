import React from 'react'
import TeamMember from './TeamMember.jsx';

export const Team = ({team, translationsComponent}) => {
  const sortedTeam = [...team].sort((a, b) => a.id - b.id);
  const halfLength = Math.floor(team.length/2); 
  return (
    <section className="relative z-2 py-24 md:py-28 lg:py-40">
        <div className="container block lg:flex">
            <div className='team_head-res relative z-2 mr-20 flex-300'>
                <p className='caption green_gradient mb-5 mx-md:mb-2.5 '>{translationsComponent('caption')}</p>
                <h3 className='h3 max-md:h5 text-p4'>{translationsComponent('heading')}</h3>
            </div>
            <div className='team_inner-before relative -my-12 -mr-3 flex items-start max-lg:static max-md:block'> 
                <div className='flex-50'>
                    {sortedTeam.slice(0, halfLength).map((member) => (
                    <TeamMember
                        key={member.id}
                        item={member}
                        containerClassName="last:after-hidden last:after:max-md:block"
                    />
                    ))}
                </div>
                <div className='flex-50'>
                    {sortedTeam.slice(halfLength).map((member) => (
                    <TeamMember
                        key={member.id}
                        item={member}
                        containerClassName="last:after-hidden after:right-auto after:left-0 after:max-md:-left-4 md:px-12"
                    />
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}
  
export default Team;