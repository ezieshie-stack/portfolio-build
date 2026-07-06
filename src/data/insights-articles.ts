/** "The Notebook" — David Ezieshi's personal journal at /insights.
   Ported from the v6 handoff (pages.jsx → INSIGHTS_FEATURED +
   INSIGHTS_PULLQUOTES). One entry so far; the six BA think-pieces are
   parked in _DRAFT_ARTICLES and are NOT published. */

export type Block =
  | { p: string }
  | { h: string }
  | { ul: string[] }
  | { q: string }
  | { img: string; cap?: string };

export type Entry = {
  slug: string;
  tag: string;
  title: string;
  sub: string;
  date: string;
  read: string;
  cta: string;
  image: string;
  body: Block[];
};

export const PULLQUOTES = [
  "Life is going to beat you up a bit. Some days it will break your heart.",
  "Hardship is guaranteed, but so is survival. And the thing that gets you through is joy.",
  "You have to insist on it. Refuse to let a bad week decide how you feel on the inside.",
];

export const FEATURED: Entry = {
  slug: "familiar-was-never-the-point",
  tag: "Personal",
  title: "Familiar Was Never the Point",
  sub: "I almost didn't go to my convocation. I'd graduated before, so another few hours in a hard chair felt like nothing I hadn't sat through already. I was wrong about what I needed to hear.",
  date: "Jun 2026",
  read: "5 min read",
  cta: "Read the entry",
  image: "/insight-grad-card.jpg",
  body: [
    { p: "I've been sitting with my convocation for a few days now, turning it over." },
    { p: "Not the ceremony itself, the gown, the walk, the names read out one after another. I keep coming back to something smaller and stranger. I almost didn't go at all." },
    { p: "I'd graduated before, so a convocation wasn't some once-in-a-lifetime thing for me. When this one came around, part of me had quietly filed it under been there. Another few hours in a hard chair, nothing I hadn't sat through before. Skip it, I told myself. You won't be missing anything." },
    { p: "But that was never really about the chairs." },
    { p: "The truth I wasn't saying out loud was harder. This certificate had meant starting over in a field I knew nothing about, at a point in life when I was supposed to have arrived already. Some days it felt less like moving forward and more like circling back to the beginning. Calling the ceremony boring was easier than sitting with the real question underneath it. Does this one even count, or am I just doing the same thing twice?" },
    { p: "My mom didn't see it that way. She kept asking for the date, and she kept nudging me to go. So did my friends. They treated it like it mattered, even while I was quietly insisting to myself that it didn't. Eventually I gave in, less because I'd changed my mind and more because saying no again was more effort than just showing up." },
    { p: "So there I was. A dark room, a gown, hundreds of us, and me half braced for a few forgettable hours." },
    { img: "/insight-grad-card.jpg", cap: "T405, Information Systems Business Analysis. The reason I was there." },
    { p: "Then Chancellor Geoff Smith began to speak, and it stopped feeling like a crowd. It started to feel like he was talking to me." },
    { img: "/insight-podium.jpg", cap: "Chancellor Geoff Smith, George Brown College convocation." },
    { q: "Life is going to beat you up a bit. It beats everyone up a bit. Some days it will break your heart." },
    { p: "That got me, because he wasn't describing a stranger. He was describing the last stretch of my life. The job hunt in a country that wasn't home yet, and the rejection email that kept me asking what the point was. The textbooks I cracked open at midnight after a shift had already emptied me out. The loneliness of building a whole new life from scratch, an ocean away from everyone who knew my name before I got here." },
    { p: "Here was someone who had clearly made it, standing up there and saying the heartbreak was part of the deal, that struggling didn't mean I was failing. Something I'd been carrying in secret set itself down. Gritty, resilient, determined. I'd always heard those as resume words. He made them sound like what they actually are, which is the tools you survive with." },
    { p: "But he didn't leave us in the hard part. He turned it around." },
    { q: "Hardship is guaranteed, but so is survival. And the thing that gets you through the dark stretches is joy." },
    { p: "Not the kind that lands in your lap, though, because that kind doesn't come. You have to dig for it, because it hides under the dull routine of ordinary days. You have to go looking, and train your eyes to catch the good even when the day has given you no reason to. And you have to insist on it. Claim it, and refuse to let a bad week decide how you feel on the inside." },
    { p: "Seventy years of living, and he boiled it down to one line. Finding that joy was the whole point." },
    { p: "That was the moment it stopped being a repeat ceremony to me. The thing I'd been too scared to say, the quiet does this count, he answered without knowing he was answering it. The starting over, the being a beginner again, the doing it the hard way when I didn't have to. It wasn't a detour. It counted. I counted. And so did every difficult midnight it took to get into that chair." },
    { p: "I came in convinced I already knew everything the day had to offer. That was the whole reason I almost stayed home. And I was right about one thing. Nothing new happened. The gown was familiar, the ceremony was familiar, and I'd done all of it before. But familiar was never the point. The point was being in that exact room, on that exact day, hearing exactly that. If I had talked myself out of going like I nearly did, I'd have been right that I wouldn't miss anything new, and completely wrong about what I needed." },
    { p: "So now, with the certificate in hand, I'm trying to hold onto the thing I almost skipped town to avoid hearing. It would be easy to start chasing the next milestone, the promotion, the raise, the better title. But the late nights and the shifts and the long road here weren't just obstacles to get past. They were the story, and they counted." },
    { p: "There is joy right here, right now, in this gown I almost didn't wear. And there will be more of it every day going forward, if I'm stubborn enough to look for it. This certificate proves I can survive the grind. Now I want to spend that same stubbornness on something better. A life with real meaning in it, some grit, and a flat refusal to let go of joy." },
    { img: "/insight-grad-portrait.jpg", cap: "Convocation day. George Brown College, June 2026." },
    { p: "Even on the days I'd rather stay home." },
  ],
};

/** Additional entries appear here when they're ready. The old six BA
   think-pieces are parked and NOT rendered. */
export const ENTRIES: Entry[] = [];

/** All published entries, most-recent first. Used by the sitemap and
   the /insights/[slug] route. FEATURED is always the head; ENTRIES are
   the older reads. */
export const ALL_ENTRIES: Entry[] = [FEATURED, ...ENTRIES];

export function getEntry(slug: string): Entry | undefined {
  return ALL_ENTRIES.find((e) => e.slug === slug);
}

export function listEntries(): Entry[] {
  return ALL_ENTRIES;
}
