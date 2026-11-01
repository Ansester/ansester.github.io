---
title: RoomWise
summary: Describe what you want to buy, browse furniture listings, and see the room preview update as you choose different items.
category: Software engineering
role: Co-developer
organization: Collaborative software project
period: September to November 2026
status: Completed project
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

I co-developed RoomWise to bring furniture shopping and room previews into the same app. You describe the chair you want in ordinary language, browse options from different retailers, and see the preview change as you select another item.

## Shopping with your room in view

A language model interprets requests such as “a black office chair with armrests under 500 AED.” The app searches retailer listings and builds a shortlist with product details and links to the shopping pages.

Selecting a different chair updates the room preview with its dimensions. You can move and rotate it to compare placements, then switch to another option without starting a new room scan. On iPhone, an AR view also places a simplified chair model, sized to the selected product, in the camera view.

## Connecting search and the preview

The iPhone app uses SwiftUI, RoomPlan, and ARKit; a Compose desktop companion shares the Kotlin geometry and product models. RoomPlan captures the room, while imported room files and the included sample make the same workflow available without scanning hardware.

Product selection connects the shopping interface to the preview. The language model interprets the request, retailer records supply the product dimensions, and geometry code checks the chair’s footprint against room boundaries and other objects. Missing dimensions stay visible so the user can enter measurements rather than previewing a guessed size.

The public repository includes the completed iPhone and desktop apps, automated tests, and build instructions.
