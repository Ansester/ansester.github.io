---
title: RoomWise
summary: Talk through what you want to buy, swipe through furniture listings, and see the room preview change with each selection.
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

I co-developed RoomWise to bring furniture shopping and room previews into the same app. You talk through what you want with a language model, swipe through product listings, and see each selection appear in your room preview.

## Shopping with your room in view

The conversation keeps track of your preferences. You can ask for “a black office chair under 500 AED,” then refine it with “make it white” or “under 300 instead.” When you are ready, the app searches retailer listings using those preferences.

The phone keeps the room preview visible as you swipe through the shortlist. Each shopping page selects its chair and updates the preview, so you can compare options without a separate preview step or a new room scan. You can move and rotate the chair, inspect the listing, and open the retailer’s page to check the offer.

The preview uses a simplified chair sized from the listing’s assembled dimensions. An optional camera AR view places it in the room; the Simulator provides a 3D rehearsal. If dimensions are missing, the app asks for measurements before showing a size-based preview.

## Browse on desktop, preview on your phone

You can also pair the desktop app and phone over a trusted local Wi-Fi network. Browsing another RoomWise product page on desktop updates the phone’s selected chair while its room or camera AR preview stays visible. Changing the selection on the phone updates the desktop too. Both apps also work independently.

The iPhone app uses SwiftUI, RoomPlan, and ARKit; the Compose desktop app shares Kotlin geometry and product models. RoomPlan captures the room, while imported room files and the included sample support the same workflow without scanning hardware. The language model handles the conversation, retailer records supply product information, and shared code handles placement and footprint checks.

The public repository includes the completed iPhone and desktop apps, automated tests, and build instructions.
