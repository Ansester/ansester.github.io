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
visual: roomwise
links:
  - label: "Source code"
    url: "https://github.com/Ansester/RoomWise"
  - label: "Validation record"
    url: "https://github.com/Ansester/RoomWise/blob/HEAD/docs/VALIDATION.md"
---

A shopper can describe a chair to a language model, refine the colour or budget in conversation, and swipe through matching retailer listings. I built the browsing and room-preview interfaces and linked the phone and desktop apps over local Wi-Fi. Selecting a listing on either device updates the chair in the phone’s augmented-reality view.

The preview uses a simplified chair scaled to the dimensions in the listing. I kept the selected product separate from its position in the room, so shoppers can compare chairs in the same spot without scanning again. When a listing has no dimensions, the app asks for measurements.

<figure class="case-visual diagram-visual"><a class="figure-link" href="/figures/roomwise-system.svg"><img src="/figures/roomwise-system.svg" width="820" height="548" loading="lazy" alt="A shopper refines a request in chat, selects a retailer listing, and previews the chair at its listed dimensions. The Compose desktop and SwiftUI iPhone apps share Kotlin models and can sync the selected item in either direction."><span class="full-size-link">Full size ↗</span></a></figure>
