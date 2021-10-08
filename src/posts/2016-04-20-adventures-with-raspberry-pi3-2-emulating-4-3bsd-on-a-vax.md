---
templateKey: blog-post
title: "Adventures with Raspberry Pi3 #2: Emulating 4.3BSD on a VAX"
date: 2016-04-19T23:00:00.000Z
description: How to run 4.3BSD Unix in an emulated Micro VAX 3000 using a Raspberry Pi
featuredpost: false
image: ../images/vax.png
tags:
  - Unix
  - 4.3BSD
  - VAX
  - Raspberry Pi
  - simh
---
As a sucessor on my previous [post](/blog/2016-04-15-adventures-with-raspberry-pi3-1-running-unix-v7-on-an-emulated-pdp-11/), I also did some investigation to see if I can emulate another classic Unix hardware and software combo, 4.3BSD on a VAX, this time with networking!

### VAX

[DEC ](https://en.wikipedia.org/wiki/Digital_Equipment_Corporation)introduced the VAX-11/780 in 1977 (coincidentally the year my parents bought me a home computer after strenous amounts of pleading and begging). It was intended as the 32-bit successor to the PDP-11 with virtual memory addressing.

The VAX-11/780 was widely believed to be the world’s most powerful mini-computer when it was first introduced, with performance comparable to the IBM System/360 which executed 1 million instructions per second (1 MIPS). Many people then subsequently referred to it as a 1 MIPS machine (even though apparently the actual number of instructions it could execute in 1 second was lower). For many years, it was a standard for system benchmarking, and other systems were reported as*x*times the speed of the original VAX 11/780 (where*x*was typically a lot less than 1 for home computers and faster than 1 for high end machines).

An interesting note: the Raspberry Pi 3 (a US$35 “toy” computer) has a clock speed of 1.2GHz, and hence it is hundreds, possibly thousand times faster than the original VAX-11/780, and tens of times faster than the most powerful VAX ever built (the 9000 series, of which very few were ever produced) – even on just a single core, and the Pi 3 has 4 cores.

When I was in university, I was surrounded by VAXs (or, as some prefer,*vaxen*). The maths department was using it to teach undergraduate students (we were actually using real teletype machines to do our assignments), Physics also had several which weren’t accessible to undergrads, and the Computer Science department had the luxury of 2 of them, one for staff and one for students. The one for students was running a tuned version of Unix 32V and could support hundreds of physical terminals, and the staff version had a whopping 8MB of physical memory and was upgraded to the latest version of Research Unix (8th edition).

In my last year at university, I was given access to the staff VAX, and was even experimenting with some of the new tools (such as the sam editor) on a Blit terminal (the university could only afford a handful) which evolved to be part of Plan 9 from Bell Labs.

But most of all, I remember some happy memories playing Infocom text adventures with the late, great[John Mackin](http://shand.pagesperso-orange.fr/jjm/)in his office late at night. We were using a very early version of the Infocom Task Force interpreter (I was loosely affiliated with the Infocom Task Force – actually, the members were my friends – and not proud to admit that I contributed to MS-DOS port as I was one of the few people that owned an IBM PC XT which I was using for my thesis). I remember one late night when we solved[Lurking Horror](https://en.wikipedia.org/wiki/The_Lurking_Horror)(and John yelled out one of the loudest “SCORE!!!” I have ever heard from him) – those of you who have played Lurking Horror will realise how self-referential the game was to the conditions in which we played it. After that, John and I celebrated by John playing one of his prized possessions – a rare Japanese LP pressing of Pink Floyd’s Dark Side of the Moon.

### Berkeley Software Distribution (BSD)

Although ironically I have never actually used BSD on a VAX, it also had a profound impact on my life, and arguably BSD was the operating system that created the Internet as we know it today. For years,[ucbvax](http://ucbvax.berkeley.edu/passing-of-ucbvax.txt)was one of the primary relays for UUCP carrying mail and USENET traffic. The Berkeley TCP/IP networking stack ended up being used in many other operating systems (including Linux and Windows pre NT).

BSD started off as a “West Coast” or “Californian” version of Unix, and it originated in the Computer Science Research Group (CSRG) at the University of California at Berkeley (UCB) after Ken Thompson spent a year there as a visiting professor.

If Unix V7 can be considered the “pure” or “austere” form of Unix, then BSD was the colourful, sugary, full-flavoured version of it – it was the equivalent of an ice cream sundae with lots of toppings and V7 was the wafer. Many of the things that we take for granted today as part of the backbone of the Internet was developed for BSD, such as the socket interface, sendmail, the domain name service … BSD also beefed up Unix to be more than a “toy” or research system and updated it to support “modern” video display terminals. Virtual memory, job control, the Fast File System, the lp spooler, long file names, the ex and vi editors … BSD “completed” Unix to the form that it is today. Nearly all operating systems today have been either directly or indirectly influenced by BSD. These days, I still use vi as my preferred text editor for small tasks when I am in the shell.

For me, BSD was also responsible the loss of a significant portion of my youth – countless hours spent trying to play the game of[rogue](https://en.wikipedia.org/wiki/Rogue_%28video_game%29). Not many know this, but rogue was initially written as a showcase of the termcap and curses libraries, which became the backbone for most Unix screen oriented applications.

Many commercial Unix implementations were originally based on BSD. In my first job after leaving university, I was using Sun workstations running SunOS in a stockbroker, then we moved to HP-UX, AIX … all originally BSD based. Most notably, Apple’s operating systems (watchOS, tvOS, iOS and Mac OS X) are all derived from Darwin, which was an attempt to merge Mach with elements from BSD, and OS X still contains most of the BSD user space tools.

### Emulating 4.3BSDQuasijarus0c on a MicroVAX

For the purposes of our trip back in time, I have chosen the Quasijarus fork of 4.3BSDTahoe – the last pure distribution of BSD before it was butchered to make it POSIX compliant. Quasijarus was an attempt in the mid-2000s to update it for some “modern” hardware, including the MicroVAX.

This can be downloaded and uncompressed:

```
wget https://sourceforge.net/projects/bsd42/files/Install%20tapes/4.3%20BSD%20Quasijarus%200c/4.3BSD-Quasijarus0c.tap.bz2/download -O quasijarus.tap.bz2
bunzip2 quasijarus.tap.bz2
```

The standard simh package distributed with the Raspbian operating system on the Raspberry Pi is an older version with no networking support, so we grab the latest working copy of simh:

```
git clone https://github.com/simh/simh
```

We also install a number of additional packages for networking support:

```
sudo apt-get install libpcap-dev bridge-utils uml-utilities libvdeplug2-dev vde2 libsdl2-dev
sd simh; make -j4
```

Now make a coffee because the Pi 3 is not going to be a fast compiling machine compared to a Macbook.

Note: some of the steps in the following guide were inspired and derived from the following two articles which I consulted:

* [unixhistory Quasijarus page](http://www.tavi.co.uk/unixhistory/quasijarus.html)
* [smh networking how to (qu1j0t3)](https://github.com/qu1j0t3/simh-networking-linux-howto)

### Stage 1: Restoring the mini root filesystem

Once the binaries are built, we can start the simulator with the RA82 disk and TQK50/TK50 tape drive, but all other devices disabled (via a boot.ini configuration file for the simulator):

```
cd ..
cat > boot.ini
; Disable devices we will not be using.
set cr disable
set dz disable
set lpt disable
set rl disable
set rq1 disable
set rq2 disable
set rq3 disable
set tq1 disable
set tq2 disable
set tq3 disable
set ts disable
set xq disable
; Attach the disk image
set rq0 ra82
attach rq0 ra82.dsk
; Attach the tape image
attach tq0 quastape.tap
set tq0 locked
; Attach the NVRAM file
attach nvr nvram.bin
; Set 7 bits on the terminal
set tti 7b
set tto 7b
; Boot the CPU.
boot cpu

simh/BIN/vax boot.ini
MicroVAX 3900 simulator V4.0-0 Beta git commit id: 60439625
RQ0: creating new file
NVR: creating new file
NVR: buffering file in memory
Loading boot code from internal ka655x.bin
KA655-B V5.3, VMB 2.7
1) Dansk
2) Deutsch (Deutschland/�sterreich)
3) Deutsch (Schweiz)
4) English (United Kingdom)
5) English (United States/Canada)
6) Espa�ol
7) Fran�ais (Canada)
8) Fran�ais (France/Belgique)
9) Fran�ais (Suisse)
10) Italiano
11) Nederlands
12) Norsk
13) Portugu�s
14) Suomi
15) Svenska
(1..15): 5
Performing normal system tests.
40..39..38..37..36..35..34..33..32..31..30..29..28..27..26..25..
24..23..22..21..20..19..18..17..16..15..14..13..12..11..10..09..
08..07..06..05..04..03..
Tests completed.   >>>boot mua0
(BOOT/R5:0 MUA0   2..
-MUA0
1..0.. =copy
cpu: uVAX 3000
From: tms(0,1)
To: ra(0,1)
ra0: unlabeled
Copy completed: 308 records copied
= 
```

### Stage 2: Creating and restoring the full root filesystem

Now we boot up the miniroot environment and use it to create and restore the full root filesystem:

```
=boot
cpu: uVAX 3000Boot
: ra(0,1)vmunix
ra0: unlabeled
326312+104440+130352 start 0x23b8
4.3 BSD Quasijarus UNIX #3: Sat Feb 14 20:31:03 PST 2004
root@luthien.Harhan.ORG:/nbsd/usr/src/sys/GENERIC
real mem = 16744448
SYSPTSIZE limits number of buffers to 112
avail mem = 14920704
using 112 buffers containing 917504 bytes of memory
MicroVAX 3000, ucode rev 6
tmscp0 at uba0 csr 174500 vec 774, ipl 15
tms0 at tmscp0 slave 0
uda0 at uba0 csr 172150 vec 770, ipl 15
uda0: version 3 model 3
uda0: DMA burst size set to 4
ra0 at uda0 slave 0: no disk label: ra82, size = 1216665 sectors
root device? ra0*
WARNING: clock gained 64 days -- CHECK AND RESET THE DATE!
erase ^?, kill ^U, intr ^C
# disklabel -rw ra0 ra82 "Quasijarus" /usr/mdec/rdboot /usr/mdec/bootra
# disk=ra0 type=ra82 tape=tms xtr
Build root file system
Warning: 361 sector(s) in last cylinder unallocated
/dev/rra0a: 15884 sectors in 19 cylinders of 15 tracks, 57 sectors
8.1MB in 2 cyl groups (16 c/g, 7.00MB/g, 3200 i/g)
super-block backups (for fsck -b #) at:
32, 13776,
Check the file system
** /dev/rra0a
** Last Mounted on
** Phase 1 - Check Blocks and Sizes
** Phase 2 - Check Pathnames
** Phase 3 - Check Connectivity
** Phase 4 - Check Reference Counts
** Phase 5 - Check Cyl groups
1 files, 1 used, 7092 free (20 frags, 884 blocks, 0.3% fragmentation)
Rewind tape   Restore the dump image of the root
** /dev/rra0a
** Last Mounted on /a
** Phase 1 - Check Blocks and Sizes
** Phase 2 - Check Pathnames
** Phase 3 - Check Connectivity
** Phase 4 - Check Reference Counts
** Phase 5 - Check Cyl groups
426 files, 5195 used, 1898 free (18 frags, 235 blocks, 0.3% fragmentation)
Root filesystem extracted If this is an 8650 or 8600, update the console rl02
If this is a 780 or 785, update the floppy
If this is a 730, update the cassette
# sync
# sync
# 
```

At this point we kill the simulator (Control-E then q) and restart it again, simulating a power cycle.

### Stage 3: Creating and restoring other filesystems

We create the /usr and /home filesystems, and then restore /usr, /usr/src/sys and finally /usr/src from tape. We also take the opportunity to set the default boot device so that we can enable autoboot later.

```
simh/BIN/vax boot.iniMicroVAX 3900 simulator V4.0-0 Beta git commit id: 60439625
NVR: buffering file in memory
Loading boot code from internal ka655x.bin
KA655-B V5.3, VMB 2.7
Performing normal system tests.
40..39..38..37..36..35..34..33..32..31..30..29..28..27..26..25..
24..23..22..21..20..19..18..17..16..15..14..13..12..11..10..09..
08..07..06..05..04..03..
Tests completed.
>>>set boot dua0
>>>boot
(BOOT/R5:0 DUA0     2..
-DUA0
1..0.. loading boot Boot
: /vmunix
326312+104440+130352 start 0x23b8
4.3 BSD Quasijarus UNIX #3: Sat Feb 14 20:31:03 PST 2004
root@luthien.Harhan.ORG:/nbsd/usr/src/sys/GENERIC
real mem = 16744448
SYSPTSIZE limits number of buffers to 112
avail mem = 14920704
using 112 buffers containing 917504 bytes of memory
MicroVAX 3000, ucode rev 6
tmscp0 at uba0 csr 174500 vec 774, ipl 15
tms0 at tmscp0 slave 0
uda0 at uba0 csr 172150 vec 770, ipl 15
uda0: version 3 model 3
uda0: DMA burst size set to 4
ra0 at uda0 slave 0: ra82, size = 1216665 sectors
Changing root device to ra0a
Automatic reboot in progress...
Mon Apr 19 09:12:57 PDT 2004
Can't open checklist file: /etc/fstab
Automatic reboot failed... help!
erase ^?, kill ^U, intr ^C
# newfs ra0g ra82
/dev/rra0g: 841320 sectors in 984 cylinders of 15 tracks, 57 sectors
430.8MB in 62 cyl groups (16 c/g, 7.00MB/g, 3200 i/g)
super-block backups (for fsck -b #) at:
32, 13776, 27520, 41264, 55008, 68752, 82496, 96240, 109984,
123728, 137472, 151216, 164960, 178704, 192448, 206192, 218912, 232656,
246400, 260144, 273888, 287632, 301376, 315120, 328864, 342608, 356352,
370096, 383840, 397584, 411328, 425072, 437792, 451536, 465280, 479024,
492768, 506512, 520256, 534000, 547744, 561488, 575232, 588976, 602720,
616464, 630208, 643952, 656672, 670416, 684160, 697904, 711648, 725392,
739136, 752880, 766624, 780368, 794112, 807856, 821600, 835344,
# newfs ra0h ra82
Warning: 209 sector(s) in last cylinder unallocated
/dev/rra0h: 291346 sectors in 341 cylinders of 15 tracks, 57 sectors
149.2MB in 22 cyl groups (16 c/g, 7.00MB/g, 3200 i/g)
super-block backups (for fsck -b #) at:
32, 13776, 27520, 41264, 55008, 68752, 82496, 96240, 109984,
123728, 137472, 151216, 164960, 178704, 192448, 206192, 218912, 232656,
246400, 260144, 273888, 287632,
# mount /dev/ra0g /usr
# mkdir /home
# mount /dev/ra0h /home
# cd /dev
# MAKEDEV tmscp0
# MAKEDEV dz0
# cd /usr
# mt rew
# mt fsf 3
# tar xpbf 20 /dev/rmt12
# mkdir src
# cd src
# mkdir sys
# cd sys
# mt fsf
# tar xpbf 20 /dev/rmt12
# cd ..
# mt fsf
# tar xpbf 20 /dev/rmt12
# cat > /etc/fstab
/dev/ra0a:/:rw:1:1
/dev/ra0b:none:sw:1:1
/dev/ra0g:/usr:rw:1:2
/dev/ra0h:/home:rw:1:3
# halt
syncing disks... done HALT instruction, PC: 8002F4C2 (BRB 8002F4A4)
sim> q
Goodbye
NVR: writing buffer to file 
```

### Stage 4: Setting up an Ethernet bridge for simh

simh should work with the Raspberry Pi 3 Ethernet port (I haven’t tried it with the Wi-Fi interface). First, we need to determine the current networking parameters:

```
ifconfig eth0
eth0 Link encap:Ethernet HWaddr b8:27:eb:b1:3d:ff
inet addr:192.168.0.235 Bcast:192.168.0.255 Mask:255.255.255.0
inet6 addr: fe80::6973:1a1a:a317:33a0/64 Scope:Link
UP BROADCAST RUNNING MULTICAST MTU:1500 Metric:1
RX packets:134170 errors:0 dropped:1544 overruns:0 frame:0
TX packets:7160 errors:0 dropped:0 overruns:0 carrier:0
collisions:0 txqueuelen:1000
RX bytes:29582652 (28.2 MiB) TX bytes:2495187 (2.3 MiB)
```

The above are the values for my system (For the purposes of simplicity, I have assigned a static IP address to the eth0 interface by mapping the MAC address to an IP address in my router – an Apple Time Capsule). Now we configure the bridge:

```
sudo tunctl -t tap0 -u pi
Set 'tap0' persistent and owned by uid 1000
sudo brctl addbr br0
sudo brctl addif br0 eth0
sudo brctl setfd br0 0
sudo ifconfig eth0 0.0.0.0
sudo ifconfig br0 192.168.0.235 netmask 255.255.255.0 broadcast 192.168.0.255
sudo brctl addif br0 tap0
sudo ifconfig tap0 0.0.0.0
```

Note I did not set up a default gateway because I already have one (because my wlan0 interface is also active and connected to the same network). However, if you are using eth0 as your only interface, you may want to do this:

* **`route -n`**\
  *\[before you do the steps above and write down your current default gateway – which is usually the address of your router]*
* **`sudo route add -net 0.0.0.0/0 gw`**\
  *\[IP address of your gateway]*

### Stage 5: Multi-user boot and set up networking

We create a default initialisation file called vax.ini (which the vax simulator will automatically execute if it finds it). This enables the DZV11 terminal multiplexor and connect it to port 8023, as well as the DEQNA Ethernet controller connected to the tap0 interface. We also enable autoboot from the default device (DUAO:)

```
cat > vax.ini
; Disable devices we are not using.
set cr disable
set lpt disable
set rl disable
set rq1 disable
set rq2 disable
set rq3 disable
set tq1 disable
set tq2 disable
set tq3 disable
set ts disable
; Enable the DZ-11 serial lines on port 8023.
set dz enable
attach dz 8023
set dz lines=8
set dz 7b
; Attach the Ethernet interface
set xq enable
set xq type=deqna
attach xq0 tap:tap0
; Attach the disk image
set rq0 ra82
attach rq0 ra82.dsk
; Attach the NVRAM file
attach nvr nvram.bin
; Set 7 bits on the terminal
set tti 7b
set tto 7b
; CPU idle time tuning
set cpu idle=quasijarus
; Set Boot and Diagnostic Register (BDR) to 0 to enable autoboot to default dev
; Actually the only important bit is bit 7 (Break Enable on the CPU panel)
deposit bdr 0
; Boot the CPU.
boot cpu
```

Now we commence the first boot of 4.3BSD which will do a filesystem check (fsck) of all filesystems:

```
simh/BIN/vax
MicroVAX 3900 simulator V4.0-0 Beta git commit id: 60439625
Listening on port 8023
libpcap version 1.6.2
Eth: opened OS device tap0
NVR: buffering file in memory
Loading boot code from internal ka655x.bin
KA655-B V5.3, VMB 2.7
Performing normal system tests.
40..39..38..37..36..35..34..33..32..31..30..29..28..27..26..25..
24..23..22..21..20..19..18..17..16..15..14..13..12..11..10..09..
08..07..06..05..04..03..
Tests completed.
Loading system software.
(BOOT/R5:0 DUA0     2..
-DUA0
1..0.. loading boot Boot
: /vmunix
326312+104440+130352 start 0x23b8
4.3 BSD Quasijarus UNIX #3: Sat Feb 14 20:31:03 PST 2004
root@luthien.Harhan.ORG:/nbsd/usr/src/sys/GENERIC
real mem = 16744448
SYSPTSIZE limits number of buffers to 112
avail mem = 14920704
using 112 buffers containing 917504 bytes of memory
MicroVAX 3000, ucode rev 6
tmscp0 at uba0 csr 174500 vec 774, ipl 15
tms0 at tmscp0 slave 0
uda0 at uba0 csr 172150 vec 770, ipl 15
uda0: version 3 model 3
uda0: DMA burst size set to 4
ra0 at uda0 slave 0: ra82, size = 1216665 sectors
dz0 at uba0 csr 160100 vec 300, ipl 17
dz1 at uba0 csr 160110 vec 310, ipl 17
qe0 at uba0 csr 174440 vec 764, ipl 14
qe0: deqna, hardware address 08:00:2b:aa:bb:cc
Changing root device to ra0a
Automatic reboot in progress...
Tue Apr 20 02:31:48 PDT 2004
/dev/ra0a: 451 files, 5228 used, 1865 free (17 frags, 231 blocks, 0.2% fragmentation)
/dev/rra0g: 12316 files, 71689 used, 323162 free (426 frags, 40342 blocks, 0.1% fragmentation)
/dev/rra0h: 1 files, 1 used, 136503 free (15 frags, 17061 blocks, 0.0% fragmentation)
Tue Apr 20 02:32:20 PDT 2004
checking quotas: done.
starting system logger preserving editor files
clearing /tmp
standard daemons: update cron accounting.
starting network daemons: routedApr 20 02:32:23 myname named[78]: /etc/named.boot: No such file or directory
named inetd printer.
starting local daemons: sendmail.
Tue Apr 20 02:32:26 PDT 2004
4.3 BSD UNIX (myname.my.domain) (console) login: 
```

We then login as root (no password), then set the terminal to xterms (assuming that we are running the Pi under X graphical environment), allowing us to then run vi:

```
4.3 BSD UNIX (myname.my.domain) (console)login: root
Last login: Tue Apr 20 02:28:21 on console
Apr 20 02:33:47 myname login: ROOT LOGIN console
4.3 BSD Quasijarus UNIX #3: Sat Feb 14 20:31:03 PST 2004   Welcome to UNIX! erase ^?, kill ^U, intr ^C
# TERM=xterms
# export TERM
# vi /etc/networks 
```

Or, if you prefer the old school way (I am calling my home network home-net):

```
cat > /etc/networks
home-net 255.255.255 HOME network
```

My /etc/hosts file is quite minimal, I just insert my hostname (uvaxquas) and the gateway (router):

```
cat > /etc/hosts
127.0.0.1 localhost
# HOME network
192.168.0.1 router
192.168.0.235 uvaxquas
```

Next up is /etc/netstart, which I edited using vi (bold text indicate what I changed in that file):

```
#!/bin/sh -
#
# @(#)netstart 1.1 (Berkeley) 1/10/99routedflags=-q
rwhod=NO   # uvaxquas is my symbolic name
# home-net is specified in /etc/networks
#
hostname=uvaxquas
hostname $hostname # ifconfig imp0 inet $hostname
# ifconfig de0 inet $hostname netmask my-netmask
ifconfig qe0 inet $hostname netmask home-net ifconfig lo0 inet localhost
route add $hostname localhost 0
hostid $hostname route add default 192.168.0.1 1 
```

Finally enable remote name resolution by disabling the named server (comment out the line beginning with named in /etc/rc) and insert the router as the nameserver

```
cat > /etc/resolv.conf
nameserver 192.168.0.1
```

After reboot, the system should be up and running and can connect to the Internet. This can be tested by pinging any of the IANA root servers:

```
ping a.root-servers.net
PING a.root-servers.net (198.41.0.4): 56 data bytes
64 bytes from 198.41.0.4: icmp_seq=0. time=170. ms
64 bytes from 198.41.0.4: icmp_seq=1. time=140. ms
64 bytes from 198.41.0.4: icmp_seq=2. time=140. ms
```

### But there’s one more thing …

To play rogue, you need to set a policy for the dungeon master:

```
cat > /usr/games/dm.config
game default * * *
rogue
```

That’s it folks. Happy fighting, and may you find the Amulet of Yendor. I will leave the installation of Rog-O-Matic as a “exercise for the reader.”