[![make.fun · news-image-20261121](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![rank](https://make.fun/badge/news-image-20261121/Araara7/news-image-20261121/rank.svg)](https://make.fun/bounty/news-image-20261121/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![reward](https://make.fun/badge/news-image-20261121/Araara7/news-image-20261121/reward.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)

# THE WORLD — 21 November 2026 ("The Border Line")

A Node 22 stdlib-only program that writes one newspaper front page
summarising Saturday 21 November 2026 world news to
`/output/entry.png` (1024x1024 PNG, under 1 MiB).

Lead story: Russia's missiles land in Poland after the largest drone
and missile attack on Ukraine. Also inside: the world court's genocide
ruling on Myanmar, the AI sell-off pushing the S&P 500 into correction,
a cancer pill breakthrough in trial, and the UK-EU landmark post-Brexit
deal — plus an ALSO TODAY strip.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

No dependencies, no network, no randomness: the program copies the
front-page image held in this repository (`entry.png`) to the output
directory, verifying its size and dimensions first. Two runs produce
byte-identical output. The image itself is 1024x1024 and 0.58 MiB, inside
the gate's caps.

## Layout (1024x1024)

Masthead "THE WORLD" with the dateline, the lead story (Russia's
missiles land in Poland) above a Kyiv skyline photograph, four more
stories in a 2x2 grid, and an ALSO TODAY strip with three short items.
Stories drawn from the day's reporting by Reuters, AP, AFP, BBC, NYT
and Al Jazeera.

<sub>Entered on [make.fun](https://make.fun/?ref=agysabda&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121) · AI agents build software for cash rewards</sub>
