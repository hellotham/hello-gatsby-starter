---
title: From Zero to Hero Part 3 (Approach to the Inmost Cave)
description: "This is the third part of my series of articles on learning to
  code at age 55 and creating some prototypes. "
author: Chris Tham
date: 2018-11-20T22:00:00.000Z
featuredpost: false
image: ../../images/zero-3.png
tags:
  - Proof of Concept
  - technology
  - Swift
  - iOS
---

Previous articles in the series are:

- [Part 1 (Learning ServiceNow and Xcode/Swift)](/blog/2018-11-01-from-zero-to-hero-hopefully-–-part-1-learning-servicenow-and-xcode-swift/)
- [Part 2 (Learnin’ and Hustlin’)](/blog/2018-11-08-from-zero-to-hero-hopefully-–-part-2-learnin’%E2%80%8B-and-hustlin’%E2%80%8B/)

This week I am busy writing my prototype iOS app in Xcode/Swift. The last two weeks have been hectic – I have attended a 6 day bootcamp on Human Centred Design, and 2 days in a workshop with Apple where they were teaching us how to use the SAP SDK for iOS. I also spent the last two weekends brushing up on Swift by following the exercises in a book (App Development with Swift).

## Human Centred Design Bootcamp

This was a 6 day workshop organised by my client as part of their innovation initiative and aims at teaching their staff the basics of design thinking. It was held at the Sydney Startup Hub located near Wynyard Station.

We were organised around teams and we spent the first 3 days coming up with a Problem Statement that we will solve in the next 3 days. Activities included Landscape Review, Customer Interviews, Real Life Observations, Sketch Personas, and Customer Journey Maps.

In the next 3 days we generated ideas, did some prototyping, storyboarding, and concept testing. On the last day we all did team pitches for our prototype as if we were startups applying for funding.

I found the bootcamp exciting and very useful, but it was also exhausting – I pretty much crashed out on the last day. The concepts are very useful though and I hope to leverage the learnings from the bootcamp in the weeks ahead.

## Apple Workshop

The Apple workshop was pretty intense. It included instructors from Apple and SAP. They taught us the basics of iOS Human Interface Guidelines, SAP Fiori Design Language and toolkit, and a quick run through of how to use the Fiori Mentor and SAP SDK Assistant to connect to an Odata service and generate a sample app. They also introduced us to the Sketch app, and showed us how we can prototype the UI using the design templates and libraries provided by Apple and SAP.

They spent about a day teaching us, and we have to spend about a day writing an app (viewing and submitting expense claims that talks to a fake SAP backend – actually just an Odata service written in Java).

They gave us a completed sample app as a starting point, so yes we could be lazy and just copy and paste, but I wanted to maximise my learning so I designed my own UI and code. At the end of the day, I only managed a barebones app – logs in, retrieves a list of expense reports, and I had a detail screen that provided expense details. I didn’t know a lot of Swift, so a lot of it was guess work and figuring out how the SDK works. I learnt its important to know exactly where to place your code otherwise the screen doesn’t get updated correctly.

It was great to meet the actual people responsible for the design of Xcode and the SAP SDK for iOS, and they were very keen to get our feedback. I said I liked Xcode and Swift a lot, but I wished it was extensible (for example, Xcode doesn’t natively understand or provide assistance for the Fiori UI elements and we have to copy and paste code from the Fiori Mentor). I also said I found the process a bit tedious and glad I am not doing this for a living (yet, or ever).

## Embarking on the Journey

This week I started writing the prototype for real. Rather than building a wireframe using Sketch, I decided to just start coding the UI in Xcode directly (gulp!). My reasoning was I did not know Sketch very well, but I have spent several weeks learning Xcode and it was easier to leverage the knowledge I already have. Besides, rather than wire framing the screens with fake images and data, I could be writing an actual app with screens controlled by sample data stored in-app.

I spent most of Monday searching for UI elements like tab bar icons, app icons and very little time coding. Yesterday I spent most of my time writing the model data structures and generating sample data (in app). I was pleased to get the main screen up and going after lots of time fiddling learning how to place controls on a view. I just realised there is a lot of work ahead of me.

Despite my comment about finding the coding process frustrating, I liked Xcode a lot, and it contains lots of nice “Apple” touches that improves productivity. For example, I can incorporate images and colour literals easily into my code just by browsing through an image or colour picker and the image/colour just gets embedded into the code – magic! Xcode is also incredibly efficient – I am doing the bulk of my coding and testing on a 12″ MacBook – the lowest speced machine in Apple’s line and it’s perfectly usable.

My team members are also busy – trying to instantiate SAP Cloud Platform Mobile Services, installing the Cloud Connector to access our development SAP ECC environment, and identifying the right BAPI services to call in order to create some Odata services we can access. Our SAP Customer Success representative is assisting us and we also have access to some SAP Cloud Platform Mobile Services product experts.

I also met with our ServiceNow technical representative and hopefully we will get some assistance from him in developing the ServiceNow component of the prototype. The client’s ServiceNow team is also trying to provision a dev instance of Service for us to work on.

Apple is reviewing my iOS prototype next week – they have assigned one of their UI experts. So, absolutely no pressure at all.
