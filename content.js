/* =====================================================================
   WEIGHTLIFTING FRIENDS · PAGE CONTENT
   ---------------------------------------------------------------------
   This is the ONLY file you need to edit (or use edit.html). The design
   (index.html) reads everything from here, so changing words, prices or
   photos here never touches the layout, fonts or colours.

   Rules that keep it working:
   • Text goes inside "double quotes". Apostrophes (I'm, you'll) are fine.
   • To add an item to a list, copy a whole { ... } block and paste it
     below the last one. To remove one, delete its whole block.
   • Photos: put the file in the images folder, then type its name here.
       style: "bw" (black & white), "natural" (colour), "warm" (35 mm warm)
       focus: which part of the photo stays in frame, "left% top%".
              "50% 50%" is the centre.
   • After saving, open your page with ?preview on the end of the address.
     A green bar means the content loaded; red means a quote or comma
     is missing.
   ===================================================================== */

window.SITE = {

  /* ---------- Links ---------- */
  links: {
    apply: "APPLY_LINK",
    inPerson: "https://collectivefitnessgym.com/",
    turnover: "https://www.instagram.com/theturnovercreative?cplk=MWM3cmF2OGQzYmZ5MA%3D%3D&utm_source=qr",
    team: "",
    instagram: "https://instagram.com/collective_weightlifting"
  },

  /* ---------- Top bar ---------- */
  topline: { left: "Olympic weightlifting coaching · Pacific Northwest & remote", right: "The remote team extension of Collective Weightlifting" },

  /* ---------- First screen ---------- */
  hero: {
    label: "One-to-one coaching · Issue 01",
    headline: "I'll see you in the",
    headlineItalic: "warm-up room.",
    intro:    "Our team travels to USA Weightlifting national meets, so if you're lifting there, you won't be warming up alone.",
    coachesLabel: "Meet the coaches",
    // Add, remove or reorder coaches here. Each shows as one line under the intro.
    coaches: [
      { name: "Jacob Howard",      role: "Head Coach · National USAW Coach" },
      { name: "Stephanie Langdon", role: "Head Coach · USAW Level 2" }
    ],
    applyButton: "Apply for coaching",
    plansButton: "Ways to train",
    photo: { file: "images/img-7273.jpg", alt: "", style: "bw", focus: "50% 50%" },
    photoCredit: "Photo · The Turnover Creative",
    paths: [
      { text: "I'm chasing a qualifying total", goesTo: "competitive" },
      { text: "I'm a masters lifter", goesTo: "masters" },
      { text: "I'm coming from CrossFit", goesTo: "crossfit" }
    ]
  },

  /* ---------- Results strip ---------- */
  results: {
    label: "Results · athletes developed on this team",
    note: "Qualified to compete",
    rows: [
      { level: "Junior Nationals", who: "Youth and junior lifters, first meet to national stage", result: "QUALIFIED" },
      { level: "Senior Nationals", who: "Open-age competitors chasing national totals", result: "QUALIFIED" },
      { level: "Masters Worlds", who: "Masters lifters competing internationally", result: "QUALIFIED" }
    ]
  },

  /* ---------- Your story ---------- */
  story: {
    label: "Feature · Why I coach",
    headline: "Ten years waiting for coaching I could get to.",
    photo: { file: "images/masters-chalk.jpg", alt: "Lifter chalking up at the chalk bowl", style: "bw", focus: "50% 50%" },
    photoCaption: "Waiting is part of the story.",
    paragraphs: [
      "I fell in love with weightlifting at a time when there was nowhere near me to learn it properly. No high-level coaches, no real facilities. It took about ten years, getting through college and watching CrossFit put barbells in gyms everywhere, before proper weightlifting was somewhere I could actually train.",
      "My first meet gave me something I'd been missing. I'd always been a competitive team-sport athlete, and always harder on myself than on anyone else. I could accept a teammate's bad day long before I'd accept my own.",
      "That's what I coach for now: real coaching for lifters who don't live next door to it, and a sport where what you put in is what shows up on the scoresheet.",
      "I'm still competing myself, so I know what your training week feels like, and I know what the back room feels like on meet day."
    ],
    pullQuote: "“On the platform, the outcome was fully mine.”",
    signature: "Jacob Howard · USA Weightlifting National Level Coach"
  },

  /* ---------- Who I coach ---------- */
  lifters: {
    label: "Who I coach",
    heading: ["Three kinds of lifter.", "Three different plans."],
    types: [
      {
        id: "competitive",
        label: "01 · Competitive",
        title: "Chasing a qualifying total",
        photo: { file: "images/session-snatch.jpg", alt: "Two lifters in the bottom of a snatch during a meet session", style: "natural", focus: "50% 50%" },
        paragraphs: [
          "You know the total you need, the class you'll lift in and when the window closes. What's usually missing is someone watching every session and changing next week because of what they saw.",
          "We plan your block backward from your meet and your class."
        ],
        goal: "The total, on the day it counts."
      },
      {
        id: "masters",
        label: "02 · Masters",
        title: "Lifting well for the long run",
        photo: { file: "images/warmup-waiting.jpg", alt: "Two lifters waiting in the warm-up room", style: "bw", focus: "30% 50%" },
        paragraphs: [
          "I'm in the masters age range myself, and I've coached masters lifters to Worlds. A hard week at work shows up in the snatch, so your training adjusts to how you actually recovered.",
          "We map your season around the meets you care about."
        ],
        goal: "A season of meets, and still lifting at 55."
      },
      {
        id: "crossfit",
        label: "03 · CrossFit",
        title: "Making the barbell efficient",
        photo: { file: "images/shoes-prep.jpg", alt: "Lifter pulling on weightlifting shoes in a garage gym", style: "bw", focus: "42% 60%" },
        paragraphs: [
          "You're already strong. The snatch and clean & jerk are where that strength leaks out. We've helped plenty of CrossFit athletes get more efficient on the barbell, and it carries straight back to your workouts.",
          "You don't have to quit CrossFit. Three focused days a week is enough to start."
        ],
        goal: "Better lifts, and a first total if you want one."
      }
    ]
  },

  /* ---------- Meet day ---------- */
  meetDay: {
    heading: "Meet day.",
    headingPink: "Built backward.",
    topTag: "ATTEMPT PLAN · 48 HRS OUT",
    photoTag: "IN THE WARM-UP ROOM",
    bottomTag: "EVERY USAW NATIONAL MEET · TEAM TRAVELS",
    bigPhoto: { file: "images/attempt-card.jpg", alt: "Lifter in a snatch with a hand-written attempt card in the foreground", focus: "40% 50%" },
    smallPhoto: { file: "images/bar-detail.jpg", alt: "Close-up of shoulders under a loaded competition bar", focus: "30% 50%" },
    intro: "Most remote coaching ends when the program is sent. Ours is built to finish on a platform. We agree your competition calendar at the start, and every block ends at a meet.",
    rules: [
      { title: "Attempt plan + warm-up timeline", text: "Sent 48 hours before weigh-in, once the session start list is out." },
      { title: "In person at national meets", text: "When the team travels to a USA Weightlifting national event, coached athletes there are coached in person." },
      { title: "Remote for everything else", text: "A live line from your first warm-up to your last attempt, with attempt changes by text." },
      { title: "Debrief within 72 hours", text: "What to keep, what to fix, and the first week of your next block." }
    ]
  },

  /* ---------- Coaching and prices ---------- */
  plans: {
    label: "Ways to train",
    heading: ["Pick how closely", "we work together."],
    options: [
      {
        featured: false,
        badge: "",
        label: "Remote · team",
        name: "Team Programming",
        price: "$20",
        priceNote: " / month",
        forWho: "For self-directed lifters who want structure and a team.",
        features: [
          "Team program on TrainHeroic",
          "Quick feedback on your videos",
          "Meet taper available, $15",
          "Cancel any time"
        ],
        button: "Join the team",
        buttonLink: "https://marketplace.trainheroic.com/workout-plan/team/weightlifting-friends"
      },
      {
        featured: true,
        badge: "BY APPLICATION · LIMITED SEATS",
        label: "Remote · one-to-one",
        name: "Coached",
        price: "$295",
        priceNote: " / month",
        forWho: "For lifters with a meet in mind who want a coach in their corner.",
        features: [
          "Monthly plan written for you, adjusted every week",
          "In-depth video analysis, reply within 24 hrs Mon–Fri",
          "Weekly check-in and a monthly video call",
          "Competition calendar planned with you for the year",
          "Meet-day coaching: in person at nationals, remote everywhere else",
          "12-week blocks; drop to Team between seasons"
        ],
        button: "Apply",
        buttonLink: "APPLY_LINK"
      },
      {
        featured: false,
        badge: "",
        label: "In person · the gym",
        name: "Collective Weightlifting",
        price: "Gym",
        priceNote: " membership",
        forWho: "For lifters near the gym who want to train with the team.",
        features: [
          "Coached training with the in-house team",
          "Part of Collective Fitness gym membership",
          "New lifters and 10-year veterans side by side",
          "Pair with Coached for in-person check-ups"
        ],
        button: "Ask about the gym",
        buttonLink: "INPERSON_LINK"
      }
    ],
    audit: {
      show: true,
      name: "Lift Audit",
      text: "Not sure yet? Send your lifts and get a full video breakdown, a 45-minute call and four weeks of priorities. $150, fully credited if you join Coached within 14 days.",
      button: "Book an audit"
    }
  },

  /* ---------- How it starts ---------- */
  steps: {
    label: "How it starts",
    heading: ["From application", "to your first meet."],
    items: [
      { title: "Apply", text: "Your lifts, your goals, and the meet you want to be ready for." },
      { title: "Talk", text: "A 20–30 minute call. We watch one of your lifts together." },
      { title: "Map the year", text: "We agree your meets and plan your first block back from the first one." },
      { title: "Train", text: "Film your key sets. Get specific feedback within a day." },
      { title: "Compete", text: "Show up with an attempt plan, a warm-up timeline, and your coach." }
    ]
  },

  /* ---------- The team ---------- */
  team: {
    label: "The team",
    heading: "A team,",
    headingItalic: "not a subscription.",
    text: "We bring a big team and big energy to every meet, whether it's someone's first total or a lifter with more than ten years in the sport. Remote or in the gym, you're part of the same team.",
    tallPhoto: { file: "images/team-clap.jpg", alt: "Teammate clapping as a lifter stands up a heavy pull", style: "bw", focus: "62% 50%" },
    shortPhoto: { file: "images/garage-sled.jpg", alt: "Lifter smiling as she pulls a loaded sled out of her garage gym", style: "warm", focus: "50% 42%" }
  },

  /* ---------- Questions ---------- */
  faq: {
    label: "Questions",
    heading: ["Before", "you apply."],
    items: [
      {
        q: "Can remote coaching really fix my technique?",
        a: "It works when the feedback is fast and specific. You film your key sets from a side or 45° angle, and you get a reply within a day about the exact lift, not a general note. If you're near the gym, you can add in-person sessions too."
      },
      { q: "Do I have to compete?", a: "No. But most people progress faster with a date to aim at, so we'll talk about whether a meet makes sense for you." },
      { q: "I already have a coach. Can I still apply?", a: "Please talk to your current coach first. We'd rather you move with their knowledge than behind their back." },
      { q: "Can I pause between seasons?", a: "Yes. After a block, you can drop to Team Programming and keep priority for your Coached seat for three months." },
      { q: "Do you coach lifters under 18?", a: "Yes, with a parent or guardian completing the application and included on all coaching messages and calls." },
      { q: "Why limited seats?", a: "Detailed video analysis and meet-day coaching take real time. Keeping the group small is how we keep the promises on this page." }
    ]
  },

  /* ---------- Closing section ---------- */
  closing: {
    tag: "COACHED SEATS OPEN",
    heading: ["Which meet are", "you getting ready for?"],
    text: "Tell us on the application. We'll take it from there.",
    applyButton: "Apply for coaching",
    compareButton: "Compare options"
  },

  /* ---------- Footer ---------- */
  footer: {
    tagline: "Coaching · Collective Weightlifting",
    copyright: "© 2026 Weightlifting Friends ·",
    instagramHandle: "@weightliftingfriends",
    photoCredit: "Photography · The Turnover Creative"
  }
};
