---
title: "RoomWise"
summary: "I co-developed an app for talking through furniture choices, swiping through listings, and previewing each selection in a room."
category: "Software engineering"
role: "Co-developer"
organization: "Collaborative software project"
period: "2026"
status: "Software project"
order: 6
tags: [Kotlin Multiplatform, SwiftUI, RoomPlan, ARKit, Compose Desktop, Groq, Tavily]
updated: "15 November 2026"
visual: roomwise
links:
  - label: "Source code"
    url: "https://github.com/Ansester/RoomWise"
  - label: "Validation record"
    url: "https://github.com/Ansester/RoomWise/blob/HEAD/docs/VALIDATION.md"
---

## Shopping with a room in view

I co-developed RoomWise to bring furniture shopping and room previews into the same app. I built product-browsing and room-preview interfaces and connected the phone and desktop selections. You can talk through what you want with a language model, swipe through retailer listings, and see the preview update with each selection.

I built the chat to retain accepted preferences and recent conversation history. A request for a black office chair under 500 AED can become “make it white” or “under 300 instead.” When the user is ready, a separate search uses those preferences to find retailer listings.

## Selection and placement

I connected the product carousel to a persistent room preview. Changing the chair updates its dimensions while preserving placement, so browsing does not require another scan. I added controls to move and rotate the chair and open the retailer’s page.

The preview uses a simplified chair sized from the listing’s assembled dimensions. An AR camera view places it in the room, and the Simulator supports a 3D rehearsal. When dimensions are missing, the size-based preview clears and the app asks for measurements.

## Phone and desktop synchronization

I connected the SwiftUI/ARKit phone interface and Compose desktop interface through shared Kotlin geometry and product models. Local pairing keeps the selected RoomWise listing in sync between the devices. Selection and placement are stored separately, so the next chair can reuse the same location.

<figure class="case-visual diagram-visual"><a class="figure-link" href="/figures/roomwise-system.svg"><img src="/figures/roomwise-system.svg" width="820" height="548" loading="lazy" alt="A shopper refines a request in chat, selects a retailer listing, and previews the chair at its listed dimensions. The Compose desktop and SwiftUI iPhone apps share Kotlin models and can sync the selected item in either direction."><span class="full-size-link">Full size ↗</span></a><figcaption>I built local Wi-Fi pairing to keep desktop and phone selections in sync; changing the chair updates the preview.</figcaption></figure>

I integrated RoomPlan for room capture, with imported room files and sample data supporting the same workflow. I also added release checks, privacy controls, and automated build and pairing tests. The repository contains the implementation and setup instructions.
