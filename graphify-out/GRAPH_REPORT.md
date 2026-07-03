# Graph Report - .  (2026-07-03)

## Corpus Check
- 24 files · ~8,900 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 68 nodes · 62 edges · 18 communities (16 shown, 2 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Kenya Page & Footer|Kenya Page & Footer]]
- [[_COMMUNITY_Pins API & Auth|Pins API & Auth]]
- [[_COMMUNITY_Layout & Navigation|Layout & Navigation]]
- [[_COMMUNITY_Episode Map & Pins|Episode Map & Pins]]
- [[_COMMUNITY_Kenya Details & Gallery|Kenya Details & Gallery]]
- [[_COMMUNITY_Podcast Carousel|Podcast Carousel]]

## God Nodes (most connected - your core abstractions)
1. `readPins()` - 4 edges
2. `POST()` - 4 edges
3. `DELETE()` - 4 edges
4. `writePins()` - 3 edges
5. `validateToken()` - 3 edges
6. `Footer()` - 3 edges
7. `GET()` - 2 edges
8. `pinsFile` - 1 edges
9. `barlowCondensed` - 1 edges
10. `metadata` - 1 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (18 total, 2 thin omitted)

### Community 0 - "Kenya Page & Footer"
Cohesion: 0.20
Nodes (3): Footer(), sections, essentials

### Community 1 - "Pins API & Auth"
Cohesion: 0.50
Nodes (7): DELETE(), GET(), pinsFile, POST(), readPins(), validateToken(), writePins()

### Community 3 - "Episode Map & Pins"
Cohesion: 0.33
Nodes (4): CONTINENTS, ICONS, Pin, PinDraft

### Community 4 - "Kenya Details & Gallery"
Cohesion: 0.33
Nodes (4): GALLERY, STATS, Tab, TABS

## Knowledge Gaps
- **15 isolated node(s):** `pinsFile`, `barlowCondensed`, `metadata`, `CONTINENTS`, `ICONS` (+10 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What connects `pinsFile`, `barlowCondensed`, `metadata` to the rest of the system?**
  _15 weakly-connected nodes found - possible documentation gaps or missing edges._