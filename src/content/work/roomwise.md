---
title: "RoomWise"
summary: "Describe a chair in chat, then swipe through listings to compare their dimensions in the same spot in your room."
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
  - label: "How we tested it"
    url: "https://github.com/Ansester/RoomWise/blob/HEAD/docs/VALIDATION.md"
---

I built the shopping and room-preview interfaces for RoomWise, an app I co-developed with [Aadil Chasmawala](https://github.com/Aarz1401). You can describe a chair to a language model, change your budget or color preference, and swipe through matching retailer listings. As you swipe, the preview keeps the chair in the same spot and scales it to each listing’s dimensions. If a listing has no measurements, the preview clears.

I connected the Kotlin desktop app to the SwiftUI iPhone app over HTTP. They share the listings and the selected product, so you can browse on the desktop and see the preview change on the phone. I tested selection in both directions between the desktop app and the iPhone Simulator.
