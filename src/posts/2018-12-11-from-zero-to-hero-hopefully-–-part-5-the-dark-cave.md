---
title: From Zero to Hero Part 5 (The Dark Cave)
description: "This is the fifth part of my series of articles on learning to
  code at age 55 and creating some prototypes. "
author: Chris Tham
date: 2018-12-10T22:00:00.000Z
featuredpost: false
image: ../images/zero-5.png
tags:
  - Proof of Concept
  - technology
  - Swift
  - iOS
---
Previous articles in the series are:

* [Part 1 (Learning ServiceNow and Xcode/Swift)](/blog/2018-11-01-from-zero-to-hero-hopefully-–-part-1-learning-servicenow-and-xcode-swift/)
* [Part 2 (Learnin’ and Hustlin’)](/blog/2018-11-08-from-zero-to-hero-hopefully-–-part-2-learnin’%E2%80%8B-and-hustlin’%E2%80%8B/)
* [Part 3 (Approaching the Innermost Cave)](/blog/2018-11-21-from-zero-to-hero-hopefully-–-part-3-approach-to-the-inmost-cave/)
* [Part 4 (Eating, Drinking, Sprinting)](/blog/2018-11-28-from-zero-to-hero-hopefully-–-part-4-eating-drinking-sprinting/)

## Code Code Code

As we headed towards the end of Week 3 Sprint 3, that seems to be all I can think of. I am even starting to dream code in my sleep. Seriously. I was stuck in a static variable initialisation that I can’t seem to escape out of, and descending into ever deeper closures that I can’t complete.

On the plus side, I managed to get the prototype to scan and read a QR code – this turned out to be easier than I thought and looks very impressive when we demo the app. I also figured out how to generate custom QR codes with the client’s logo embedded.

However, using the Microsoft Graph API to connect to Office 365 turned out to be a real challenge. An App-Id needs to be generated and registered on the portal, and since I did not have admin access to the client’s Office 365 tenant, I was forced to create a development Office 365 account (which Microsoft recommends for testing anyway).

That was the easy bit. Figuring out how to actually use the Microsoft Graph SDK for iOS ended up taking a week and a half. I encountered one frustration after another.

1. To begin with, downloading the [Quick Start (Swift) app](https://developer.microsoft.com/en-us/graph/quick-start?platform=option-ios-swift) which is supposed to get me up and going in three minutes did not work. It turned out I have to download [CocoaPods](https://cocoapods.org/), [Carthage](https://github.com/Carthage/Carthage), and then try and integrate frameworks from two different package managers into the code. Very little guidance is provided on exactly how to do that, and after a day, I still can’t get the code to compile. So, I eventually gave up.
2. Then, I followed a different tutorial ([Write an iOS app to get Outlook mail, calendar, and contacts](https://docs.microsoft.com/en-us/outlook/rest/ios-tutorial)). This was easier to get going and the step by step instructions were reasonably clear and easy to follow. Then I realised this tutorial does not use the Microsoft Graph for iOS SDK but uses a different framework called SwiftyJSON from CocoaPods.
3. Finally, I found yet another sample app in Github (<https://github.com/microsoftgraph/ios-swift-connect-sample>). Finally, a sample that actually uses the SDK that kind of works. Well, it worked after lots of twiddling – the code was written for an older version of Swift and Xcode, and generated lots of errors and warnings which I tried fixing.
4. Microsoft also had a selection of sample code for the SDK on GitHub (<https://github.com/microsoftgraph/ios-swift-snippets-sample>). This was written in an even older version of Swift (Swift 2) and required lots of hand editing.
5. Then I found the source code for the SDK at <https://github.com/microsoftgraph/msgraph-sdk-ios>. With a sinking feeling, I noticed that the repository was archived with the following note in the README:

> This project is being archived and replaced with the [Microsoft Graph SDK for ObjC](https://github.com/microsoftgraph/msgraph-sdk-objc). As part of the archival process, we’re closing all open issues and pull requests. See #37 for more context.
>
> You can continue to use this library “as-is”, but it won’t be maintained moving forward. We apologize for any inconvenience.

Well, that’s … not good. I had a look at the replacement library ([Microsoft Graph SDK for ObjC](https://github.com/microsoftgraph/msgraph-sdk-objc)) but realised it is not yet finished and is a barebones implementation.

I must admit, I was getting very frustrated with Microsoft at this point. Clearly, Swift/iOS wasn’t their primary target for creating apps, but I expected better quality and more up to date code from them. The SDK itself was terrible and I understand why Microsoft is trying to replace it – it hard codes API return properties rather than self discovering from the REST response, plus different API calls are implemented differently. Worst of all, retrieving a property that has a nil value in the REST response crashes the app and can’t be trapped using a guard or let statement (the crash happens in a different thread I think). I finally discovered I have to use a different way of testing whether there was a value before accessing – but this really was barely better than me handcrafting and decoding the JSON myself.

In desperation, I even tried the sample ASP.NET app on Visual Studio just to see what the SDK was like on Microsoft’s primary development platform. I was sad to see the SDK wasn’t that great there either.

At this point, more than a week has passed and I had achieved basically nothing except fixing broken, unsupported, obsolete code written by other people.

## Heavy Weather

In the meantime, other members of my team were battling challenges of their own. We discovered that the dev environment was being reserved for a system upgrade, and they wanted to kick everyone out of the system, including us. After some discussion, however, we were allowed to continue to use the environment as long as we did not modify anything.

Creating Odata services also turned out to be problematic. It was fairly easy (so I’ve been told) to establish a service that can be consumed internally, but creating services that could be accessible over the Internet required another level of complexity. There were various debates on how this should be done, but in the end we opted to create these services using the API management layer on SAP Cloud Platform, even though our technical architect was recommending that we reach out to the Enterprise Integration team and get them to create the services through our hub. I voted to use the SAP Cloud Platform because I felt the exercise was about trying new things, and it was a good opportunity to learn the features of the SAP Cloud Platform.

## Finally, a ray of light

I entered the third week feeling a bit depressed. But then I decided there was no point being frustrated over the lack of maturity of Microsoft SDKs, in the end I simply had a choose the best option available to me and just forge ahead.

I was very tempted to just write my own code and access the Graph REST APIs using native Switch URL handling code, but decided I didn’t really have the time. The new SDK was just too immature, so in the end I opted to use the deprecated but somewhat functional old SDK.

Wednesday was probably my darkest day. After dealing with one issue after another, I was almost ready to give up.

Then on Thursday the storm passed. I finally managed to get a rudimentary app going that successfully authenticated, and managed to retrieve the user’s profile. By Thursday evening I had a demo-able barebones second version of the prototype, and by Friday morning I was able to polish up the code and added a few more features.

Also, we finally managed to get an Internet facing Odata service working on Thursday, so finally everything was starting to come together.

On Thursday, I also attended a ServiceNow networking event and met with our Technical Account Manager. I promised to send him details of our Odata services and he agreed to help us out.

On Friday evening, I attended a Christmas function – this was a cruise around Sydney Harbour on a very nice boat, and on the weekend we attended a Japanese festival at Darling Harbour and also had a great Malaysian buffet lunch on Sunday.

![Sydney Harbour cruise](../images/zero-5a.png "Sydney Harbour cruise")

This week is the last week and we are focused on pulling everything together and achieving end to end integration between the prototype and SAP via our Odata services. Hopefully we will have something to demo!

Filed Under:
