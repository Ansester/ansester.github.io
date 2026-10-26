---
title: CAMP — Campus asset management
summary: A campus equipment-reservation application built by a five-person team, with contributions to staff APIs, backend testing, and client API utilities.
category: Software engineering
role: Backend endpoints, integration testing, and client API utilities
organization: Five-person software engineering team, NYU Abu Dhabi
period: Fall 2025
status: Course project
order: 6
tags: [React, Express, MongoDB, Mocha / Chai]
updated: 26 October 2026
visual: camp
links:
  - label: Source code
    url: https://github.com/Ansester/camp-final-project
  - label: Original team repository
    url: https://github.com/agile-students-fall2025/4-final-camp
---

## The project

CAMP is a campus equipment-reservation and inventory application, developed by a five-person software engineering team at NYU Abu Dhabi. Students can browse equipment and request reservations; staff manage inventory, issue items, and record returns.

## My contribution

I implemented Express.js REST endpoints for staff workflows, equipment alerts, and dashboard statistics. I configured the backend integration-testing setup with Mocha and Chai and worked on client API integration utilities.

I also served as Product Owner in Sprint 1 and Scrum Master in Sprint 3. My teammates were Saad Iftikhar, Talal Naveed, Shaf Khalid, and Akshith Karthik; the interface, application-wide features, and deployment were shared work.

## Implementation

The application uses React, an Express API on Node.js, and MongoDB. JWT authentication and role-based access distinguish student and staff operations. Reservation workflows include booking-conflict checks, item issuance, and returns.

The original coursework deployment used a DigitalOcean droplet with Nginx and PM2. The public repository provides local setup instructions and automated checks; it does not advertise a running hosted service.
