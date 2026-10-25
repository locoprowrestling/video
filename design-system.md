# LoCo Pro Video, itch store theme (2026-10-25)

Current direction: the site matches the LoCo Pro Video itch store (https://locoprowrestling.itch.io/) so visitors move between the two without a change in look.

Tokens, read from the live itch theme on 2026-10-25: page purple #760cf5, panel #881eff, deep section #402b59, text #ffffff, links #f8f136 (bold, underlined), buttons #174f2a with #346c47 edge, square corners, system sans (Helvetica Neue, Arial) at weight 700 for headings. Product art and video thumbnails sit on near-black #0b0f14.

Hero: the approved green and gold filmstrip banner (assets/itch/banner.jpg, itch image 30738240, the same banner on every itch page), then the store bio line and the Slave 17 reel button.

The previous cinema-portfolio files are preserved in verification/redesign/before-itch-theme-2026-10-25. The earlier direction below is history.

---

# LoCo Pro Video — cinema portfolio direction

Visual thesis: an editorial film portfolio, with action footage as the dominant visual, the original green-and-yellow title-card filmstrip logo and condensed cinema type and a warm paper canvas.

Content plan: full-bleed branded hero featuring the Slave reel; selected work in an asymmetric editorial index; short studio introduction; restrained footer. Five owner-selected films and credits stay intact.

Interaction thesis: real watch links, subtle image scale on hover/focus, clear press state. Reduced motion removes transitions. No autoplay or decorative control surfaces.

Tokens: paper #eae7df, ink #232521, dark #20231e, white #f2f0e8, accent #ffe312; display Impact/Arial Narrow, body Avenir Next/Trebuchet MS; weights 400/600; 24/32px grouping, 64/96px section rhythm; 48px control floor; square media, no shadows. Native installed fonts only; no downloaded fonts, packages or skill installation.

Layout:

```text
[brand                         selected work / studio / YouTube]
[                FULL-BLEED ACTION IMAGE                       ]
[ LoCo Pro                                                    ]
[ Video.                 watch Slave 17                        ]
[ Selected work                                               ]
[ Joey: wide feature              Tyra: smaller feature        ]
[ Slave promo                    Slave ultimate                ]
[ Last Stand image               project description           ]
[ Studio statement               concise context               ]
[ copyright                      back to top                   ]
```

Mobile uses a single film column, a separately composed hero, readable 16px+ body copy and 48px controls. The previous files are preserved in verification/redesign/before; that directory never publishes.

Skill used remotely: https://github.com/mblode/agent-skills/blob/main/skills/ui-design/SKILL.md, Direction + Build, marketing track. Read marketing-ui, aesthetic-direction, design-in-code, design-guidelines, and applicable color/button/heading/image/landing/responsive/type/section/surface/footer guidance. No CRO modules loaded for a portfolio.

Brand asset: assets/loco-pro-video.png is a byte-identical copy of the Joey v9 title-card source asset. Original source preserved at /Users/gecko/locoprowrestling/LoCoProGenFactory/recovery/joey-provider-career-rebuild-2026-09-23/v9-work/source-assets/loco-video.png. Source ledger v9 identifies /Users/gecko/Desktop/LoCoPro Video Filmstrip Mark.png as the original title mark.

Confirmed the same filmstrip mark in tyra-title-reference.jpg. SHA-256 matches the Desktop original: 10f5afa80a00e344e0ef435fd8a393446dcb64453211848706ae96a6cacb1a85.
