---
title: "Payrolls"
description: "Payroll system from a college group project — being refactored as a C++ re-engagement exercise."
date: 2026-05-19
tags: ["C++", "SQLite", "Makefile"]
status: "wip"
featured: true
draft: false
---

Originally built for a Software Engineering course at CUNY College of Staten Island. Group project, course deadline, delivered in C++/CLI targeting Windows Forms and Microsoft Access(We had no experience with Databases at the time) — the fastest GUI available in Visual Studio at the time. Right call under the constraints.

The problem: I've been wanting to freshen up my C++ skills for some time. For career gains but also I loved it in college and in some ways prefer its low-level philosophy over many of the higher level languages. Refactoring this project is a good exercise.

## Approach

The original codebase has a clear set of problems worth solving — not just cleanup, but the kind of design work that requires actually understanding the language: stripping managed extensions for standard C++17, replacing Windows-only dependencies with portable equivalents, fixing broken marginal tax math, and designing a proper inheritance hierarchy where none exists.

It covers ground that spans financial correctness (progressive tax brackets, payroll withholding) and low-level engineering fundamentals (RAII, resource management, the header/implementation split). Both ends of that range are intentional.

The goal isn't a production payroll system. It's a working codebase that reflects how I think about systems design and numerical correctness in C++

## Stack

- **C++17** — stripping C++/CLI entirely; target is `g++`/`clang++` on any platform
- **SQLite** — replaces Microsoft Access; single-file DB, no install, version-controllable schema
- **Makefile** — replaces `.sln`/`.vcxproj` (VS studio); builds from any terminal

## Status

Work in progress. Original submission preserved on a branch. Refactor underway: Makefile and directory structure first, then C++/CLI removal, then design work (tax inheritance, marginal bracket math, RAII DB connections).
