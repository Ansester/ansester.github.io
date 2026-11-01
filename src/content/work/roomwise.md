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

## What we built

RoomWise checks whether a chair's footprint fits a room. The iPhone app captures the room with Apple's RoomPlan or imports a room file, shows a scaled preview, and searches for chairs. A desktop app reads the same room format. Both use shared Kotlin code for room models, geometry, and product evidence.

Aadil Chasmawala and I built RoomWise together, from the first version through the iPhone and desktop apps and the standalone release.

## Key decisions

- **Keeping the model out of the measurements.** A hosted Groq model turns the request into validated preferences such as budget and colour. It receives no room data and produces no dimensions, prices, or fit result.
- **Treating listings as evidence.** Tavily search finds indexed retailer pages. Package dimensions cannot stand in for assembled dimensions, and conflicting prices or sizes stay unknown.
- **Recording where each fact came from.** Sample, live, saved, and user-entered product data stay distinct, including after the app restarts.
- **Working without accounts.** The sample room, fit checks, and manual chair entry need no keys. Live search uses each person's own provider keys, with no shared key or server. On iPhone, a search makes at most one Groq request and three Tavily requests, against a local limit of 300 Tavily requests a month.

## What changed my conclusions

An earlier version joined wall endpoints within 15 cm, so a 10 cm gap in a scan could silently become a complete room. Endpoints now join only when each has exactly one partner within 3 cm. Otherwise the app shows the partial room and withholds the fit result.

The first public CI run failed because the Xcode build needed a generated source file that a clean checkout did not have. Passing on the machine that built it had not shown that anyone else could build it.

## Limits

All 67 automated tests passed in public CI on revision `8da670f`: 13 shared, 13 desktop, and 41 iPhone. Provider tests use mocked responses.

No recorded run for this release covers a live Groq or Tavily search, a RoomPlan scan, or camera AR on a physical iPhone. Nobody has measured whether a fit result matches a real room, and the app has not been tested with users. A result covers the captured floor footprint only, not hidden obstacles, chair movement, overhead clearance, door swings, or delivery routes.

The app is not on the App Store. The code is public but has no licence, so it is not open source.
