---
title: CAMP — Campus asset management
summary: A team-built platform for authenticated campus resource workflows, with contributions to backend APIs and integration testing.
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

## The problem

Campus equipment booking connects several workflows: students need to find and reserve items, while staff need to manage inventory, issue equipment, record returns, and understand what is happening across reservations. Those workflows share data but require different permissions.

CAMP brings resource scheduling, equipment reservations, and inventory management into one web application. It was developed as a five-person software engineering project at NYU Abu Dhabi.

## My contribution

I implemented backend REST API endpoints for staff workflows, equipment alerts, and dashboard statistics in Express.js. I also configured the backend integration-testing setup and worked on client API integration utilities.

The team rotated agile responsibilities during the project. I served as Product Owner in Sprint 1 and Scrum Master in Sprint 3, alongside my technical contributions. Those roles connected implementation work with the team's planning and delivery process.

The full platform was a shared effort with Saad Iftikhar, Talal Naveed, Shaf Khalid, and Akshith Karthik. We shared responsibility for the interface, application-wide feature set, and deployment.

## How the platform fits together

The application uses a React frontend, an Express REST API running on Node.js, and MongoDB Atlas. JWT authentication and role-based access distinguish student and staff workflows.

The platform supports browsing equipment, submitting reservation requests, checking for booking conflicts, and managing item issuance and returns. The staff dashboard brings together reservation activity and operational information.

The project used GitHub Actions for continuous integration and was deployed on a DigitalOcean droplet with Nginx and PM2. That describes the documented project deployment; the portfolio links to the repository rather than assuming the original live service is still available.

## Engineering choices

### Give staff operations an explicit API

Equipment alerts and dashboard statistics need defined server responses that the client can consume. My endpoint work focused on those staff-facing needs, with client utilities connecting the frontend to the API.

### Test across the integration boundary

The backend testing setup uses Mocha and Chai, with Supertest available in the project. Integration tests provide a way to exercise API behavior beyond an isolated function. Configuring that setup was part of my contribution to making backend changes easier to check.

### Keep responsibilities clear

Student and staff tasks are different. The platform's authentication and role-based workflows provide the context in which the API operates. Team sprint rotations also made responsibilities explicit at the project level.

## Outcome and artifacts

The outcome was a team-built campus asset-management application with documented setup and testing instructions. The repository records the stack, implemented functionality, team members, and contribution breakdown. It is the best starting point for inspecting the code or running the project locally.
