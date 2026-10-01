---
title: "Payrolls"
description: "A TUI payroll app in standard C++17, rebuilt from a college group project as a way to shake off rusty C++."
date: 2026-05-19
tags: ["C++", "ncurses", "SQLite", "CMake"]
image: "/images/projects/payrolls/demo.gif"
status: "hold"
featured: true
order: 1
draft: false
---

Originally built for a Software Engineering course at CUNY College of Staten Island. Group project, course deadline, delivered in C++/CLI targeting Windows Forms and Microsoft Access.

![Payrolls TUI demo](/images/projects/payrolls/demo.gif)

I hadn't written serious C++ since college and wanted to shake the rust off, so I came back to this project instead of starting from a blank folder. It's not a straight refactor as I originally scoped. It ended up becoming a from scratch TUI rewrite in standard C++17: vim style motions, a panel based view router, a custom layout engine built directly over ncurses, and SQLite persistence through SQLiteCpp. No framework GUI, no ORM.

## Approach

Almost none of the original code survived. The old version's UI was Visual Studio designer output wired to Access files. I know what you're thinking so let me just tell you, this was at that point in college where you "think you know but, you don't." I and probably everyone else who worked on this would laugh now at how silly using a Microsoft Access file as a DB was. TBH it still makes me chuckle. We took database classes but never connected the dots and just thought "oh we could use files", "well it needs authentication!" "How do we do that??" we were told "it doesn't matter it just has to achieve the required behavior." "Oh the file requires a password, that counts right?" Yeah.. fun times.

I originally thought this was just going to be a quick 1-2 refactor, keep the core logic, turn it into a terminal app and be done. Then I was like "eh I'll focus on c++17", "eh why not make it a real TUI instead" and before I knew it I found myself creating my own mini framework around ncurses. Scope created out the wazoo and really just wanted to have something simple to re-learn basic concepts like std tools and common practices like RAII and polymorphism.

Some of the interesting work became building the pieces a GUI framework normally hands you for free: a view router that manages a panel stack, a layout engine that carves up terminal geometry by weighted rows and columns, a focus and keyboard navigation model, and RAII wrappers around every ncurses resource so nothing leaks on exit. I used Django professionally, so a lot of the view/section structure ended up thinking in those terms even though the plumbing underneath is raw ncurses.

The goal was never a production payroll system.

## What's built

The employee view is wired to real SQLite data: employee info, compensation, latest paystub, benefit elections, and a benefits request panel, all laid out through the custom layout engine and navigable with vim style keys. The rest of the app (login, HR and manager routes, add/update/remove employee flows, proper marginal tax bracket math) is scaffolded but not implemented yet.

## Stack

- **C++17**: removed C++/CLI, no managed extensions, builds with `g++`/`clang++` on any platform
- **ncurses** (panel + menu): the TUI itself, driven directly rather than through a wrapper library
- **SQLite via SQLiteCpp**: replaces Microsoft Access; single file DB, version controlled schema in `data/migrations/`
- **CMake**: replaces the `.sln`/`.vcxproj` Visual Studio build; `-Wall -Wextra -Wpedantic -Werror` plus clang-format/clang-tidy enforced on commit

## Status

Work in progress, though loosely. I've touched most of the concepts I set out to practice here (the layout engine, the RAII model, the panel router), and the parts still open (auth, the HR/manager screens, correct tax bracket math, error handling, tests) are more chores than problems I still need to think through. I may come back and finish them, or I may not. The original submission is preserved in the repo for reference.
