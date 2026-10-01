---
title: "Pulse-Travel App"
description: "Group travel organizer: shared trips, shared decisions, less back-and-forth. Built for mobile and desktop."
date: 2026-02-01
tags: ["Next.js", "React", "TypeScript", "Tailwind", "Supabase", "Vercel"]
image: "/src/assets/images/projects/pulse/rate-view.png"
status: "abandoned"
featured: true
order: 2
draft: false
---

Group trips fall apart on a question nobody tracks: who should actually do what together? Fourteen people say yes to everything in the group chat, then half of them quietly don't show up to the thing you booked. Everyone has opinions, everyone arrives and leaves on different days, and none of that lives anywhere you can look at.

Pulse asks every member to rate each proposed activity MUST / MAYBE / SKIP, then shows the group what falls out of those ratings — who's counting on what, who's in if it works out, and which days actually line up for the people who care.

## Rating

The entry point. Each member goes down the list of proposed activities and marks MUST, MAYBE, or SKIP. The detail panel splits interest three ways: counting on it, in if it works out, skipping.

![Pulse rating view on desktop — activity list beside an open detail panel](/images/projects/pulse/01-rate-desktop.png)

![Pulse rating detail as a bottom sheet on mobile](/images/projects/pulse/01-rate-mobile.png)

Group chats produce enthusiasm, not signal. A three-way rating is fast enough that non-technical family members will finish it, and structured enough that the app can do something with it.

## Find Your Crew

The sub-groups that fall out of the ratings. Members, what they align on, and a profile that breaks one person's ratings into must / maybe / not rated. There's a pairwise view too, for when you want to know who your travel twin is.

![Pulse crew view on desktop — member grid with an open member profile](/images/projects/pulse/02-crew-desktop.png)

![Pulse member profile sheet on mobile](/images/projects/pulse/02-crew-mobile.png)

A 14-person trip is never one group, it's several overlapping ones. Naming them means nobody has to renegotiate every outing from scratch.

## Plan

The newest surface and the one I like most. A month grid: how many people are in town each day, which leg of the trip that day belongs to, and what's proposed for it. Days where things clash get outlined, with a banner counting them.

![Pulse convergence calendar on desktop — month grid with conflicts outlined](/images/projects/pulse/03-plan-desktop.png)

![Pulse plan view on mobile — week list centred on the best-overlap window](/images/projects/pulse/03-plan-mobile.png)

People arrive and leave on different days. An activity only works if the people who called it a MUST are actually in town for it. This is where you see that line up, or not.

## Timeline

The trip in order: each stop, its dates, and what's on the table there with the roster behind each activity.

![Pulse timeline on desktop — stops in order with per-activity rosters](/images/projects/pulse/04-timeline-desktop.png)

![Pulse timeline on mobile](/images/projects/pulse/04-timeline-mobile.png)

## Stack

- **Next.js 16 + React 19**: App Router, bleeding-edge
- **TypeScript**: strict
- **Tailwind CSS v4**: CSS-variable-based theming, no config file
- **Zustand 5**: client state; chosen for eventual React Native parity
- **Supabase**: Postgres + Auth (magic link + Google OAuth)
- **Vercel**: deployment
- **Turborepo + pnpm**: monorepo, business logic split out of the web app so a future React Native client can use it without a rewrite

## Status

Abandoned. Never deployed, no public link. The four surfaces above work end to end; conflict tooling on the calendar is where it stopped.
