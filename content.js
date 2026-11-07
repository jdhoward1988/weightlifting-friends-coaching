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
    intro: "Our team travels to USA Weightlifting national meets, so if you're lifting there, you won't be warming up alone.",
    coachesLabel: "Meet the coaches",
    coaches: [
      { name: "Jacob Howard", role: "Head Coach · National USAW Coach" },
      { name: "Stephanie Langdon", role: "Head Coach · USAW Level 2" }
    ],
    applyButton: "Apply for coaching",
    plansButton: "Ways to train",
    photo: { file: "images/img-7273.jpg", alt: "Lifter holding a barbell overhead at a meet while a teammate watches", style: "bw", focus: "50% 50%" },
    photoCredit: "Photo · The Turnover Creative",
    paths: [
      { text: "I'm chasing a qualifying total", goesTo: "competitive" },
      { text: "I lift for fun and longevity", goesTo: "hobbyists" },
      { text: "I'm coming from CrossFit", goesTo: "crossfit" }
    ]
  },

  /* ---------- Results strip ---------- */
  results: {
    label: "Goals · Results developed on this team",
    note: "",
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
    photo: { file: "images/img-0024.jpg", alt: "Lifter chalking his hands in front of the meet scoreboard", style: "bw", focus: "50% 50%" },
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
    heading: ["Any kind of lifter.", "Three different plans."],
    types: [
      {
        id: "competitive",
        label: "01 · Competitive",
        title: "Chasing a qualifying total",
        photo: { file: "images/img-0793.jpg", alt: "Lifter at full extension pulling a loaded barbell", style: "natural", focus: "45% 32%" },
        paragraphs: [
          "You know the total you need, the class you'll lift in and when the window closes. What's missing is someone watching every session and anticipating the changes your body will need next week because of what we saw.",
          "Plan your block backward from your meet and your class."
        ],
        goal: "The total you need, on the day it counts."
      },
      {
        id: "hobbyists",
        label: "02 · Hobbyists",
        title: "Lifting better for longevity",
        photo: { file: "images/05d439b7-59d1-43e8-bd72-7121bf75ec82.jpg", alt: "Lifter holding a barbell in the front rack, black and white", style: "bw", focus: "41% 50%" },
        paragraphs: [
          "A hard week at work shows up in the snatch, so your training adjusts to how you actually recovered.  Maybe you don’t have a competitive bone in your body but the community drew you in. Or maybe you are a die hard competitor but realistically this comes somewhere after your day job and your family time. ",
          "We map your season around the meets you care about."
        ],
        goal: "A season of meets, and still lifting at 55 or beyond."
      },
      {
        id: "crossfit",
        label: "03 · CrossFit Enthusiasts",
        title: "Making the improvements to move faster",
        photo: { file: "images/img-8730.jpg", alt: "Athlete in the bottom of a front squat in a CrossFit gym", style: "bw", focus: "50% 67%" },
        paragraphs: [
          "You're already strong. The snatch and clean & jerk are where the skill may be lacking. We've helped plenty of CrossFit athletes get more efficient on the barbell, and it carries straight back to your workouts.",
          "You don't have to quit CrossFit. A couple of focused days a week is enough to start, and you may get hooked and come over to our side full time. "
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
    bigPhoto: { file: "images/img-4418.jpg", alt: "Lifter holding a barbell overhead on the platform in a busy meet hall", focus: "50% 63%" },
    smallPhoto: { file: "images/img-5735.jpg", alt: "Lifter in a split jerk with the bar locked out overhead", focus: "50% 50%" },
    intro: "Our program is built to finish on a platform with us by your side. We agree to your competition calendar at the start, and every important block ends at a meet. ",
    rules: [
      { title: "Attempt plan + warm-up timeline", text: "That’s on us, we’ll get your feedback on your goals and how things are feeling. " },
      { title: "In person at national meets", text: "If you’re making the trip to a national meet, we’ll be there ready to handle your cards" },
      { title: "Remote but never far away", text: "We work with you to fulfill your needs as a person and an athlete " },
      { title: "Debrief following any meet", text: "What to keep, what to fix, and the first week of your next block." }
    ]
  },

  /* ---------- Coaching and prices ---------- */
  plans: {
    label: "Ways to train",
    heading: ["Pick how tightly", "we work together."],
    options: [
      {
        featured: false,
        badge: "",
        label: "Remote · team",
        name: "Team Programming",
        price: "$30",
        priceNote: " / month",
        forWho: "For self-directed lifters who want structure and a team.",
        features: [
          "Team program on CoachLogik ",
          "Quick feedback on your videos ",
          "Meet taper available for multiple reuse, $15",
          "Cancel any time"
        ],
        button: "Join the team",
        buttonLink: "https://marketplace.trainheroic.com/workout-plan/team/weightlifting-friends"
      },
      {
        featured: true,
        badge: "BY APPLICATION · LIMITED SEATS",
        label: "Remote · two-to-one",
        name: "Fully Customized",
        price: "$195",
        priceNote: " / month",
        forWho: "For lifters with a meet in mind who want a coach in their corner.",
        features: [
          "Monthly plan written for you, adjusted every week",
          "In-depth video analysis, reply within 24-48 hrs",
          "Weekly check-in and a monthly video call",
          "Competition calendar planned with you for the year",
          "Meet-day coaching: in person at national meets, and local if in PNW",
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
        price: "",
        priceNote: "Gym membership",
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
      text: "Not sure yet? Send your lifts and get a full video breakdown, a 45-minute call and four weeks of priorities. $80, fully credited if you join Coached within 14 days.",
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
      { title: "Compete", text: "Show up. We come with an attempt plan, a warm-up timeline, and snacks. " }
    ]
  },

  /* ---------- The team ---------- */
  team: {
    label: "The team",
    heading: "A team,",
    headingItalic: "not a subscription.",
    text: "We bring a big team and big energy to every meet, whether it's someone's first total or a lifter with more than ten years in the sport. Remote or in the gym, you're part of the same team.",
    tallPhoto: { file: "images/a7v06640.jpg", alt: "Coach helping a lifter get ready in the warm-up area", style: "bw", focus: "50% 35%" },
    shortPhoto: { file: "images/a7v00388.jpg", alt: "Two teammates laughing together", style: "warm", focus: "50% 33%" }
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
