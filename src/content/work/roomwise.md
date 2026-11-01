---
title: RoomWise
summary: A chair-fit checker for iPhone and desktop. A language model reads the request, and shared geometry code decides whether the chair's footprint fits the captured room.
category: Software engineering
role: Co-developer
organization: Collaborative project with Aadil Chasmawala
period: September to November 2026
status: Prototype
order: 4
tags: [Kotlin Multiplatform, SwiftUI, RoomPlan, ARKit, Compose Desktop, Groq, Tavily]
updated: 1 November 2026
visual: roomwise
links:
  - label: Source code
    url: https://github.com/Ansester/RoomWise
  - label: Validation record
    url: https://github.com/Ansester/RoomWise/blob/HEAD/docs/VALIDATION.md
---

I’m developing RoomWise with Aadil Chasmawala. It checks whether a chair’s footprint fits a captured room, with an iPhone app and a desktop companion. The iPhone app can capture a room through Apple’s RoomPlan or import a room file; both apps use shared Kotlin code for geometry and product information.

## From a room scan to a fit check

The app shows a scaled room preview and lets the user place and rotate a chair. Geometry code calculates the fit. A language model interprets search preferences such as budget and colour, and retailer pages supply the product information.

Dimensions need a clear source: a package measurement is different from an assembled chair measurement. When listings conflict or a size is missing, the app leaves that information unresolved. The sample room, manual chair entry, and fit checks work without provider accounts.

## Incomplete room geometry

An early version joined wall endpoints within 15 cm. That could turn a 10 cm gap in a scan into an apparently closed room. Endpoints now join only when each has exactly one partner within 3 cm; otherwise, the app keeps the partial room visible and withholds a fit result.

The current prototype has automated checks for shared geometry and the desktop and iPhone apps. Physical-room measurements and testing with users are still ahead. A fit result describes the captured floor footprint; it does not account for door swings or overhead clearance.
