---
title: "CAMP: Campus asset management"
summary: A campus equipment-reservation app. I built staff APIs, integration tests, and client API utilities within a five-person team.
category: Software engineering
role: Backend endpoints, integration testing, and client API utilities
organization: Five-person software engineering team, NYU Abu Dhabi
period: Fall 2025
status: Course project
order: 9
tags: [React, Express, MongoDB, Mocha / Chai]
updated: 1 November 2026
visual: camp
links:
  - label: Source code
    url: https://github.com/Ansester/camp-final-project
  - label: Original team repository
    url: https://github.com/agile-students-fall2025/4-final-camp
---

## The project

CAMP is a campus equipment-reservation and inventory application, developed by a five-person software engineering team at NYU Abu Dhabi. Students can browse equipment and request reservations; staff manage inventory, issue items, and record returns.

## My part in the team

I implemented Express.js REST endpoints for staff workflows, equipment alerts, and dashboard statistics. I wrote Mocha/Chai integration tests and client API functions, including token handling and authentication-error handling.

I also served as Product Owner in Sprint 1 and Scrum Master in Sprint 3. My teammates were Saad Iftikhar, Talal Naveed, Shaf Khalid, and Akshith Karthik; the interface, application-wide features, and deployment were shared work.

## How it works

The application uses React, an Express API on Node.js, and MongoDB. JWT authentication and role-based access distinguish student and staff operations. Reservation workflows include booking-conflict checks, item issuance, and returns.

The original coursework deployment used a DigitalOcean droplet with Nginx and PM2. The source repository includes setup instructions and automated checks for running the application locally.
