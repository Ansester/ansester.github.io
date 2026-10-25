---
title: CAMP — Campus asset management
summary: A campus equipment-reservation application built by a five-person team, with contributions to staff APIs, backend testing, and client API utilities.
category: Software engineering
role: Backend endpoints, integration testing, and client API utilities
organization: Five-person software engineering team, NYU Abu Dhabi
period: Fall 2024
status: Course project
order: 6
tags: [React, Express, MongoDB, Mocha / Chai]
visual: camp
links:
  - label: Source code
    url: https://github.com/Ansester/camp-final-project
---

## The project

CAMP is a campus equipment-reservation and inventory application, developed by a five-person software engineering team at NYU Abu Dhabi. Students can browse equipment and request reservations; staff manage inventory, issue items, and record returns.

## My contribution

I implemented Express.js REST endpoints for staff workflows, equipment alerts, and dashboard statistics. I configured the backend integration-testing setup with Mocha and Chai and worked on client API integration utilities.

I also served as Product Owner in Sprint 1 and Scrum Master in Sprint 3. My teammates were Saad Iftikhar, Talal Naveed, Shaf Khalid, and Akshith Karthik; the interface, application-wide features, and deployment were shared work.

## Implementation

The application uses React, an Express API on Node.js, and MongoDB Atlas. JWT authentication and role-based access distinguish student and staff operations. Reservation workflows include booking-conflict checks, item issuance, and returns.

The team used GitHub Actions for continuous integration and deployed the project on a DigitalOcean droplet with Nginx and PM2. The repository contains the source, setup and testing instructions, and contribution breakdown.
