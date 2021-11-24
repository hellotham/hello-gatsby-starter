---
published: true
title: A celebration of 50 Years of Unix
description: A beautiful operating system, still healthy after 50 years.
author: Chris Tham
date: 2020-06-10T00:00:00.000Z
featuredpost: false
image: ../../images/Unix_history-simple.png
tags:
  - UNIX
---

Recently Unix celebrated it's 50th birthday. We don't know the exact date but we do know it was sometime in late 1970. That's one reason why the Unix system clock starts from 1970.

## What is Unix?

According the [Wikipedia entry on Unix](https://en.wikipedia.org/wiki/Unix), Unix (sometimes spelled UNIX) is

> a family of multitasking, multiuser computer operating systems that derive from the original AT&T Unix, development starting in the 1970s at the Bell Labs research center by Ken Thompson, Dennis Ritchie, and others.

## Early years (1970-1980)

The underpinnings of Unix were in the late 1960s when Bell Labs, MIT and General Electric collaborated in a project (which subsequently failed) to design and develop a time-sharing (multi-user, multi-tasking) operating system called MULTICS. One of the researchers working on MULTICS was Ken Thompson, who was frustrated with the project and decided to develop a simpler operating system originally targeting a spare PDP-7 at Bell Labs.

Soon a number of his colleagues decided to help him and Brian Kernighan in 1970 cheekily named it "UNICS" as a pun on MULTICS. Later on the spelling was changed to Unix because it was easier for people to pronounce (it is intended to be pronounced the same way as "eunuchs" as it was jokingly viewed as a "castrated" version of MULTICS).

Sometime in August 1970, the first version of Unix successfully ran on a PDP-11/20 computer. By the end of the decade, the operating system became so popular it was used not only within Bell Labs but in educational institutions who used it mainly for research, and to teach students.

## Unix in Academia (early 1980s)

My exposure to Unix was through the computer science courses I took at the University of Sydney in the early 1980s, as part of a B.Sc. degree. Like many students of my generation, I immediately fell in love with the operating system. Compared to what I was using prior to entering university (various personal computers such as the Apple ][, TRS-80 and Commodore 64), it was sophisticated and elegant, and surprisingly powerful.

In Unix, you could refer to any system resource as a file (including system memory and I/O ports!). There was an interactive shell that you could actually program. There was a small collection of utilities (which were called "tools"), each a simple program in it's own right that typically only did something simple, that you can join (using a data transfer mechanism known as a "pipe") to do useful and non-trivial tasks (much like building using LEGO bricks).

The operating system and utilities were mostly written in a language called "C", which was easy to learn, elegant, and was fast. The language had an almost 1-1 relationship with machine language (particularly on the DEC family of minicomputers) so the C compiler was very good at generating efficient and small executables. A "Hello World" program written in C resulted in an executable file only about 4 kilobytes in size, and that included the entire C runtime library.

At the time, the Basser Department of Computer Science at the University of Sydney had two systems running Unix - basset (which was used for undergraduate teaching) and basser (which was used by the teaching staff and postgraduates for research). The version of Unix (originally 32V which is based on PWB/Unix) was highly tweaked and customised to be able to support hundreds of students using a single VAX 11/780 (a mini-computer that was fast in it's day, and capable of executing 1 millions instructions per second, but very slow by today's standards, hundreds of times slower than even the least capable Raspberry Pi). By the time I was in my final (honours) year, basser was upgraded to a vanilla 8th edition Research Unix. In those days, honours students were considered quasi-postgrads so I had access to basser as well as basset. Not only did I have an email address, I could access USENET news. I even had a chance to play around with an early generation graphics terminal (the "Blit" developed by Bell Labs which ran a simplified operating system that eventually morphed into Plan 9).

I was depressed and dreaded graduating. In those days, Unix was unheard of outside the academic world. Big companies ran mainframes, smaller companies ran minicomputers, small businesses were starting to use personal computers for business tasks. None of these machines ran Unix. Their operating systems looked clunky and Byzantine compared to the elegance of Unix. Everyone I knew, teachers and students, said it was almost impossible to land a job in the "real" world that involved Unix.

## Unix in Industry (late 1980s and early 1990s)

My lucky break came during my third year of studies. HP has just released a new minicomputer called the HP 9000, running a version of Unix called HP-UX. A stockbroker called Bain & Co (now part of Deutsche Bank) bought a machine and was looking for a system administrator. A friend of mine who was working as a currency trader approached me and asked if I was interested. Of course I was, but I was still studying. He suggested I could work on a casual basis, and I was keen.

I attended a meeting with my future boss. I had assumed it was a job interview, but I can only remember him asking me one question: "When can you start?" I meekly suggested I was free tomorrow afternoon. He said "Great, we will see you then. I'll pay you $10 an hour."

I was estatic. Not only was I getting paid to play around with my very own Unix minicomputer, my desk was basically in front of the console, which turned out to be a graphics terminal (which probably cost a fortune in those days). However, I was missing email and USENET news.

At that time, there was no Internet. But there was ACSnet (the Australian Computer Science network) which connected academic institutions around Australia and was linked to ARPANET and the UUCP network in the US. However, several individuals (including myself) were keen to connect to it, and finally we were given the opportunity, provided we paid $3,000 for the ACSnet software, bought our own modem (2400 baud) and arranged for a telephone connection.

I tried to persuade my boss, but he didn't see what the benefit was to the company. He didn't understand what email was, and even then I was smart enough not to disclose that my primary use case was going to be surfing USENET news. I said we could download free software from USENET newsgroups and that may be useful. The moment I mentioned the word "free" he was convinced and said I could go ahead.

So we became one of the earliest Australian non-academic sites with an "Internet" presence - we had a domain name, email was working, and best of all I had access to USENET news. I still remember the early "flame wars" in various newsgroups and participated in quite a few myself.

As for the free software, I remember unpacking and installing the very first version of Python, released to alt.sources. I also remember installing Perl, and I thought it was very useful.

In those days, the number of systems in Australia connected to ACSnet were in the dozens, and the domain names can easily fit on a single A4 sheet of paper with plenty of white space.

After graduating, my first full time job was for a fintech startup. The words "fintech" and "startup" didn't exist then, but the company fit the description. It manufactured synthetic foreign currency options (mainly for importers and exporters) by hedging a combination of the physical currencies and futures contracts. I used a Sun 3/60 workstation running SunOS (an almost vanilla version of 4.3BSD with a graphical user interface). I loved that workstation, that was my ideal of the ultimate desktop computer.

I wrote a technical paper on using a set of distributed workstations to do risk management for an options portfolio, which was published on SunTech Journal.

After that, I worked in the Treasury Division of State Bank Victoria (now part of Commonwealth Bank). I wasn't part of the Information Systems group that was managing the bank's mainframes and PCs, but the Treasury Division used Sun workstations for the trading room floor, and had one of the fastest Unix machines of it's day, a Pyramid Unix super minicomputer running PyramidOS (a strange "dual universe" operating system that was capable of supporting both the BSD and SystemV variants of Unix simultaneously).

Security and operational controls were more relaxed back then. Even though I wasn't in the IT team, I was regarded as "safe" and "trustworthy" so I had sudo access to the production Pyramid system as well as root access to my Sun workstation. I used to opportunity to install lots of brand new software, including GCC, bash, etc.

I ended up using the computing power of the Pyramid to crack Unix passwords. As part of writing a Usenix paper called "Unix passwords considered insecure" I wrote a brute force password guesser that used large amounts of system memory to speed things up. I then successfully used the algorithm to obtain the passwords for quite a few accounts on a machine belonging to the University of Sydney, and successfully logged into the system using various usernames.

A few weeks later, I received a phone call from a system administrator at the University of Sydney. Apparently they noticed my successful hacking attempts. I explained what I was doing, and I think they forgave me. They ended up offering me a chance to connect my home PC to the Internet for $10 a month as long as I promised never to hack them again. Needless to say I accepted the offer immediately.

So I became one of the first people in Australia to have a personal system (a home PC running FreeBSD) connected to the Internet via dialup TCP/IP (PPP). I loved those days. I used to have the entire FreeBSD source code synced to my machine, and I will recompile the entire system (kernel, libraries and apps) every now and then just to prove that I can do it. I may have been one of the earliest people to live on a "rolling distribution" (FreeBSD-current).

## Unix in the 1990s

After that I've worked for two Unix companies, AT&T and HP. Sometime in the late 1990s, I stopped being intimately involved in Unix as my role changed and I became less and less involved in the technical side of things. I still ran a version of FreeBSD at home for a long time, but I've never really liked Microsoft Windows. Windows was probably one of the reasons I became less and less technical as I disliked almost everything Microsoft did in the 90s. At one stage, it seemed Unix will disappear into oblivion.

There was Linux, but I never really liked Linux much - a lot of it was different enough from Unix that it annoyed me. And Linux as an operating system today seems to break almost every aspect of the original Unix philosophy of keeping things small and simple, or the philosophy of being able to using small tools as building blocks for achieving more complex tasks.

## Unix in the new Millennium

But Apple came to the rescue with OS X. Apple in the 1990s was a floundering company stuck with an ageing macOS that didn't even multi-task well. There were several failed attempts to write a new operating system (I wonder how many people remember Taligent, or Pink), but it wasn't until Steve Jobs came back, and brought NeXT with him, that Apple finally went to Unix (the precursor to the Macintosh, the Lisa, supported a version of Unix but it was never widely used). macOS X was based on NeXTOS, which is turn was a Unix operating system using Mach (which as designed by CMU as a modern rewrite of the traditional monolithic Unix kernel) plus BSD utilities.

The success of Apple in the post-iPhone era means that today Unix is used by billions of people in the world. There is a little bit of Unix in every iPhone, iPad, HomePod, Apple TV and even Apple Watch. Every Macintosh runs a fully compliant Unix operating system (one of a handful of Unix variants certified to the Single Unix Specification at the UNIX 03 level).

The other major use of Unix is in the Sony Playstation 4, which runs a modified version of FreeBSD called Orbix.

Finally, Linux is a Unix-like operating system, even though it doesn't have any of the original Unix source code it in (unlike macOS, FreeBSD and Orbix which can trace their ancestry all the way back to 1970). And of course, since Android uses Linux, it means a variant of a Unix or Unix like operating system is used by the majority of people on the planet. By contrast, Windows is becoming less and less relevant and the latest version of Windows even supports Linux so arguably in the future every Windows machine is potentially a Linux machine.

So let's celebrate a beautiful operating system, still healthy after 50 years, and may it live another 50 at least.
