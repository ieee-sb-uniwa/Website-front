"use client"
import {council} from "../../constants/constants.js"
import CouncilMember from './TeamMember.jsx';
import {
    Card,
    CardBody,
    Avatar,
    IconButton,
    Typography,
  } from "@material-tailwind/react";
  
  function TeamCard({ photo, name, role, email }) {
    return (
      <Card className="rounded-lg bg-s1" shadow={false}>
        <CardBody className="text-center">
          <Avatar
            src={photo}
            alt={name}
            className="mx-auto mb-6 object-top rounded-full"
          />
          <Typography variant="h5" className="!font-medium text-lg text-p1">
            {name}
          </Typography>
          <Typography
            className="mb-2 !text-base !font-semibold text-p5"
          >
            {role}
          </Typography>
          <Typography
            className="mb-2 !text-base text-p4"
          >
            {email}
          </Typography>
        </CardBody>
      </Card>
    );
  }
  
  export function TeamSection12() {
    return (
        <section className="relative z-2 py-24 md:py-28 lg:py-40">
            <div className="container block lg:flex">
                <div className='council_head-res relative z-2 mr-200 flex-300'>
                    <p className='caption green_gradient mb-5 mx-md:mb-2.5 '>The Driving Force</p>
                    <h3 className='h3 max-md:h5 text-p4'>Our Executive Council</h3>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {council.map((props, key) => (
                    <TeamCard key={key} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
  }
  
  export default TeamSection12;
  