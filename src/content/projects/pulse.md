---
title: "Pulse"
description: "Group travel organizer — shared trips, shared decisions, less back-and-forth."
date: 2026-05-19
tags: ["Next.js", "React", "TypeScript", "Tailwind", "Supabase", "Vercel"]
status: "wip"
featured: true
draft: false
---

Group travel is a coordination problem that nobody has solved well. Everyone has opinions, everyone has different schedules and desires for what they want out of a trip.

Pulse is a group travel organizer built to cut that friction. Members join a trip, add what they want to do, and the app helps the group figure out what to actually plan and when.

## Approach

The core insight is that group decisions aren't hard because people are difficult — they're hard because there's no shared view of what everyone wants. Visualize that clearly and the decisions mostly make themselves.

Built to work for non-technical users first. If someone can't figure it out in under a minute, it's broken.

Meant for anyone who quickly wants oranize a trip.

## Stack

- **Next.js 16 + React 19** — App Router, bleeding-edge
- **TypeScript** — strict
- **Tailwind CSS v4** — CSS-variable-based theming, no config file
- **Zustand 5** — client state; chosen for eventual React Native parity
- **Supabase** — Postgres + Auth (magic link + Google OAuth)
- **Vercel** — deployment

Architecture is structured for a future React Native port — all business logic lives in hooks and service functions, zero logic in components.

## Status

Work in progress. MVP scaffolding and type system are in place. Core features under active development.
