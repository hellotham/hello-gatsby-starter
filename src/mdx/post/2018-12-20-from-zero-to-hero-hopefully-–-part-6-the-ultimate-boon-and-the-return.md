---
published: true
title: From Zero to Hero Part 6 (The Ultimate Boon and The Return)
description: This is the sixth part (and probably the last, for now) of my
  series of articles on learning to code at age 55 and creating some prototypes.
author: Chris Tham
date: 2018-12-19T22:00:00.000Z
featuredpost: false
image: ../../images/zero-6.png
tags:
  - Proof of Concept
  - technology
  - Swift
  - iOS
---

Previous articles in the series are:

- [Part 1 (Learning ServiceNow and Xcode/Swift)](/blog/2018-11-01-from-zero-to-hero-hopefully-–-part-1-learning-servicenow-and-xcode-swift/)
- [Part 2 (Learnin’ and Hustlin’)](/blog/2018-11-08-from-zero-to-hero-hopefully-–-part-2-learnin’%E2%80%8B-and-hustlin’%E2%80%8B/)
- [Part 3 (Approaching the Innermost Cave)](/blog/2018-11-21-from-zero-to-hero-hopefully-–-part-3-approach-to-the-inmost-cave/)
- [Part 4 (Eating, Drinking, Sprinting)](/blog/2018-11-28-from-zero-to-hero-hopefully-–-part-4-eating-drinking-sprinting/)
- [Part 5 (The Dark Cave)](/blog/2018-12-11-from-zero-to-hero-hopefully-–-part-5-the-dark-cave/)

If you recall, Part 5 represented the nadir (or rock bottom point) of the journey, with me struggling to use the Microsoft Graph API and the team trying to hold on to our dev environment in order to establish some Odata services. We finally reached Apotheosis and found a way forward after nearly two weeks of struggling.

Well, in the last week and the last Sprint, all that is left is to complete the prototype, achieve Minimum Viable Product, and deliver to the client.

I started this series of articles by referencing the archetypical Hero’s Journey by Joseph Campbell (_The Hero With a Thousand Faces_), so it seems appropriate to structure this article along the concluding stages of the journey – please note this diagram mis-spells apotheosis as “apostasis” which is a completely different word with an entirely different (and not altogether pleasant) meaning:

![The 17 stages of the Monomyth](../../images/zero-6a.png "The 17 stages of the Monomyth")

## The Ultimate Boon

> **Campbell:** “The gods and goddesses then are to be understood as embodiments and custodians of the elixir of Imperishable Being but not themselves the Ultimate in its primary state. What the hero seeks through his intercourse with them is therefore not finally themselves, but their grace, i.e., the power of their sustaining substance. This miraculous energy-substance and this alone is the Imperishable; the names and forms of the deities who everywhere embody, dispense, and represent it come and go. This is the miraculous energy of the thunderbolts of Zeus, Yahweh, and the Supreme Buddha, the fertility of the rain of Viracocha, the virtue announced by the bell rung in the Mass at the consecration, and the light of the ultimate illumination of the saint and sage. Its guardians dare release it only to the duly proven.”

The ultimate boon is the achievement of the goal of the quest. It is what the hero went on the journey to get.

We started the week in high spirits, and we felt confident we could connect the app to the backend Odata services before the end of the week. The client secretly (at first) dialled in to our Daily Check-in in the morning and was able to hear the confidence in our voices. Even so, we still were cautious that there may be unanticipated problems that could completely derail our progress.

So, after the client logged off from the check-in, we secretly decided to proceed with two approaches in parallel. One was me trying to connect to the Odata services by writing “native” Swift code using the Foundation URLRequest class and JSON encoding/decoding, the second was the Hacker leveraging the SAP SDK for iOS and using the Assistant to generate the code.

We struggled for most of Monday and Tuesday, but much to our surprise managed to successfully consume the Odata services and by late Tuesday we excited gathered around my desk and watched the app successfully reading and creating records on the simulator. We have finally achieved Minimum Viable Product. Yay!

I cannot really begin to describe the elation and sense of fulfilment that one gets from producing or creating something and watching it come to life. Let’s say it’s like all the feelgood movies you have ever seen rolled into one, but more intense because it is real, it is actually happening, you have actually achieved something …

I now understand why people create things, and dedicate their whole lives to a pursuit. To me, it is the essence of what being human truly means.

## Refusal of the Return

> **Campbell:** “When the hero-quest has been accomplished, through penetration to the source, or through the grace of some male or female, human or animal, personification, the adventurer still must return with his life-transmuting trophy. The full round, the norm of the monomyth, requires that the hero shall now begin the labor of bringing the runes of wisdom, the Golden Fleece, or his sleeping princess, back into the kingdom of humanity, where the boon may redound to the renewing of the community, the nation, the planet or the ten thousand worlds. But the responsibility has been frequently refused. Even Gautama Buddha, after his triumph, doubted whether the message of realization could be communicated, and saints are reported to have died while in the supernal ecstasy. Numerous indeed are the heroes fabled to have taken up residence forever in the blessed isle of the unaging Goddess of Immortal Being.”

Having achieved Minimum Viable Product, our client was happy and said it’s time to wrap up and distribute the app for demo.

A part of me was a bit sad and wishing we could continue. Although I have found the journey to be difficult, and frustrating at times, the learning opportunity was fantastic. Now that we have gotten into the groove, we can think of numerous enhancements that we can make.

The list of things we achieved over four weeks on the backend:

- Enabled SAP Mobile Services on our instance of SAP Cloud Platform.
- Installed SAP Cloud Connector on a temporary server.
- Established a connection to the dev environment from SAP Cloud Platform via SAP Cloud Connector.
- Tested connectivity and access to existing mobile services on the dev environment via SAP Cloud Platform through a native iOS app written using the SAP SDK for iOS.
- Identified BAPI services for use in the prototype.
- Established Odata services via API Management layer on SAP Cloud Platform.
- Confirmed (with the help of ServiceNow) that a dev instance of ServiceNow is able to access the Odata services.

In addition, we wrote two native iOS apps – one conceptual (wireframe), and second with the following features:

- Connectivity and authentication to development instance of Office 365 through Microsoft Graph API
- Connectivity and authentication to Odata services residing on SAP Cloud Platform connecting to dev environment via Cloud Connector
- Ability to update by scanning QR code on phone
- Ability to see status of other users (user information obtained from Office 365)
- Ability to see calendar events (from Office 365)
- Integration to phone functionality (call person, send text message, send email)
- Ability to view history and create new records (on SAP dev environment)

Even though we were supposed to wrap up, I found it hard to let go. Over the weekend, I implemented integration into MapKit with geocoding of addresses to display locations on the app, and also completely rewrote the SAP integration code to use Swift Generics, so that a single set of generic functions were able to consume all services in an extensible way.

Finally, I was ready to let go. I sent an email asking for the app to be packaged and distributed, and on Monday was able to demo it successfully to the client.

## The Magic Flight

> **Campbell:** “If the hero in his triumph wins the blessing of the goddess or the god and is then explicitly commissioned to return to the world with some elixir for the restoration of society, the final stage of his adventure is supported by all the powers of his supernatural patron. On the other hand, if the trophy has been attained against the opposition of its guardian, or if the hero’s wish to return to the world has been resented by the gods or demons, then the last stage of the mythological round becomes a lively, often comical, pursuit. This flight may be complicated by marvels of magical obstruction and evasion.”

This week, we demoed our app to Apple representatives. I emphasised that we could have implemented a simple prototype as a Proof of Concept, but we deliberately went on a Human Centred Design journey to try and create something that was useful and relevant. They appreciated that.

They were quite kind to us, and gave us lots of useful feedback on how we could extend the app and also clean up the user interface. They were excited enough about the app to offer us resources to enhance the app. I said the most useful thing was probably indoor mapping which I don’t have the skills to do by myself. Probably the best thing they said to us was that they found the app to be genuinely useful, and they would be happy to use it in their own offices.

## Rescue from Without

> **Campbell:** “The hero may have to be brought back from his supernatural adventure by assistance from without. That is to say, the world may have to come and get him. For the bliss of the deep abode is not lightly abandoned in favor of the self-scattering of the wakened state. ‘Who having cast off the world,’ we read, ‘would desire to return again? He would be only there.’ And yet, in so far as one is alive, life will call. Society is jealous of those who remain away from it, and will come knocking at the door. If the hero… is unwilling, the disturber suffers an ugly shock; but on the other hand, if the summoned one is only delayed—sealed in by the beatitude of the state of perfect being (which resembles death)—an apparent rescue is effected, and the adventurer returns.”

Before I even had a chance to rest, my client has already asked me to move onto other things. I am back doing my normal role as a management consultant. I have spent most of this week trying to create a Powerpoint deck to explain our multi-channel strategy to senior stakeholders and now I am helping to finalise the terms of reference for a governance steering committee.

## The Crossing of the Return Threshold

> **Campbell:** “The returning hero, to complete his adventure, must survive the impact of the world. Many failures attest to the difficulties of this life-affirmative threshold. The first problem of the returning hero is to accept as real, after an experience of the soul-satisfying vision of fulfillment, the passing joys and sorrows, banalities and noisy obscenities of life. Why re-enter such a world? Why attempt to make plausible, or even interesting, to men and women consumed with passion, the experience of transcendental bliss? As dreams that were momentous by night may seem simply silly in the light of day, so the poet and the prophet can discover themselves playing the idiot before a jury of sober eyes. The easy thing is to commit the whole community to the devil and retire again into the heavenly rock dwelling, close the door, and make it fast. But if some spiritual obstetrician has drawn the [shimenawa](https://en.wikipedia.org/wiki/Shimenawa) across the retreat, then the work of representing eternity in time, and perceiving in time eternity, cannot be avoided” _The hero returns to the world of common day and must accept it as real._

The trick in returning is to retain the wisdom gained on the quest, to integrate that wisdom into a human life, and then maybe figure out how to share the wisdom with the rest of the world.

To me, learning how to code has reaffirmed to me that Coding has become a basic skill, like reading, writing and arithmetic. In fact, Coding is the combination of all three, plus the ability to structure and organise thinking, solve problems, and creativity (not only in coming up with the concept, but also making design decisions along the way).

In many ways, coding is akin to a superpower in a comic. It’s a skill that not everyone possesses, and it grants the holder the ability to see things others don’t see, do things that others can’t do, and create things seemingly from nothing.

## Master of Two Worlds

> **Campbell:** “Freedom to pass back and forth across the world division, from the perspective of the apparitions of time to that of the causal deep and back—not contaminating the principles of the one with those of the other, yet permitting the mind to know the one by virtue of the other—is the talent of the master. The Cosmic Dancer, declares Nietzsche, does not rest heavily in a single spot, but gaily, lightly, turns and leaps from one position to another. It is possible to speak from only one point at a time, but that does not invalidate the insights of the rest. The individual, through prolonged psychological disciplines, gives up completely all attachment to his personal limitations, idiosyncrasies, hopes and fears, no longer resists the self-annihilation that is prerequisite to rebirth in the realization of truth, and so becomes ripe, at last, for the great at-one-ment. His personal ambitions being totally dissolved, he no longer tries to live but willingly relaxes to whatever may come to pass in him; he becomes, that is to say, an anonymity.”

Now that I am back to being a management consultant, I haven’t forgotten what I have learnt, and I am continuing to have meetings discussing what next. I also realised what I have learnt and accomplished is in fact a dry run for the steps I need to do if I want to create a startup and develop a digital product. I now find I have product ideas everywhere I turn, but also the confidence that should I choose, I have skills and the proven capability to execute those ideas.

## Freedom to Live

> **Campbell**: “The hero is the champion of things becoming, not of things become, because he is. “Before Abraham was, I AM.” He does not mistake apparent changelessness in time for the permanence of Being, nor is he fearful of the next moment (or of the ‘other thing’), as destroying the permanent with its change. ‘Nothing retains its own form; but Nature, the greater renewer, ever makes up forms from forms. Be sure that nothing perishes in the whole universe; it does but vary and renew its form.’ Thus the next moment is permitted to come to pass.”

Mastery leads to freedom from the fear of death, which in turn is the freedom to live. This is sometimes referred to as living in the moment, neither anticipating the future nor regretting the past.

Now that I know I have a superpower, I will be like Superman, choosing to hide it until it is required, perhaps in order to save the world. Or perhaps I am like Neo at the end of the Matrix (the first movie, that is, I don’t really like the other movies in the trilogy). I see the world as code, and I can fly anywhere and do anything. As I gaze contemplatively on the world, all I need to figure out is: What’s Next?
