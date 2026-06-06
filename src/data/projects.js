

import { image } from 'framer-motion/client';
import kitoma from '../assets/kit_pic.png'
import acc from '../assets/KitomaSDA.png'
import rcsn from '../assets/rcsn.png'

export const projects = [
  {
    id: 1,
    title: "Account Management System",
    description: "Full-stack Account management system, a solution built with React and python. Features include tracking Cash Inflows, cash outflows, generates graph and reports for all entities.",
    image: acc,
    tags: ["React", "TypeScript", "SQL", "Python"],
    liveUrl: "https://github.com/EDSONZ-WASSWA",
    githubUrl: "https://github.com/EDSONZ-WASSWA/Kitoma-Secondary-School",
    featured: true,
  },
  {
    id: 2,
    title: "School Management System",
    "description": "A collaborative school management system built for high-level administration. Streamlines daily school activities including real-time enrollment analytics, quick action workflows, examination grading, and automated notice boards.",
    image: rcsn,
    tags: ["Java" ,"SQL","Maven","CSS"],
    liveUrl: "https://github.com/EDSONZ-WASSWA",
    githubUrl: "https://github.com/EDSONZ-WASSWA/SCHOOL-MANAGEMENT",
    featured: true,
  },
  {
    id:3,
    title: "School Website",
    description: "The School needed an online platform that would market the school, It shows current afairs of the school, openning and closing of the term, It has a gallery that shows diferent school activities taking place",
    image: kitoma,
    tags: ["Html","CSS","JavaScript"],
    liveUrl: "https://edsonz-wasswa.github.io/kitomasda/",
    githubUrl: "https://github.com/EDSONZ-WASSWA/kitomasda",
    featured: true
  }
];
