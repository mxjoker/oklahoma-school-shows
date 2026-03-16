export interface Testimonial {
  id:       number;
  quote:    string;
  name:     string;
  title:    string;
  school:   string;
  location: string;
  state:    string;
  program:  string;
  initials: string;
  color:    string;
}

export const ALL_TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote: "Our students are STILL talking about the Science Magic show three weeks later. Joe had 400 kids completely locked in for 45 minutes straight. Every teacher in the building was blown away.",
    name: "Sarah Mitchell", title: "Principal",
    school: "Ridgeview Elementary", location: "Edmond, OK", state: "Oklahoma",
    program: "Science Magic", initials: "SM", color: "#2563EB",
  },
  {
    id: 2,
    quote: "I've booked a dozen assembly performers over the years. Funky Monkey Magic is in a completely different league — educational, hilarious, and every kid was on the edge of their seat. We rebooked on the spot.",
    name: "Tamara Reynolds", title: "PTA President",
    school: "Westwood Elementary", location: "Norman, OK", state: "Oklahoma",
    program: "Character Education", initials: "TR", color: "#5B2D8E",
  },
  {
    id: 3,
    quote: "The reading scores in my class went up after the literacy show. The kids were begging to go to the library — that has NEVER happened before. I can't recommend this enough.",
    name: "Jennifer Clarke", title: "3rd Grade Teacher",
    school: "Lincoln Elementary", location: "Tulsa, OK", state: "Oklahoma",
    program: "Reading & Literacy", initials: "JC", color: "#10B981",
  },
  {
    id: 4,
    quote: "We hired Joe for our anti-bullying assembly and it was the most impactful program we've had in 12 years. Students were talking about it at lunch, at home, everywhere. Truly outstanding.",
    name: "Marcus Webb", title: "Assistant Principal",
    school: "Prairie View Elementary", location: "Broken Arrow, OK", state: "Oklahoma",
    program: "Anti-Bullying", initials: "MW", color: "#E0218A",
  },
  {
    id: 5,
    quote: "Joe drove all the way from OKC to our little school in rural Kansas and treated us like we were the biggest gig he'd ever played. Professional, punctual, and an absolutely incredible show.",
    name: "Linda Hargrove", title: "Principal",
    school: "Clearwater Elementary", location: "Clearwater, KS", state: "Kansas",
    program: "Math Magic", initials: "LH", color: "#F97316",
  },
  {
    id: 6,
    quote: "Our district booked Funky Monkey Magic for all five elementary schools on the same day. Every campus called me raving about it. That's never happened with any vendor. Ever.",
    name: "Dr. Patricia Nguyen", title: "District Curriculum Director",
    school: "Midwest City-Del City ISD", location: "Midwest City, OK", state: "Oklahoma",
    program: "Multiple Programs", initials: "PN", color: "#7C3AED",
  },
  {
    id: 7,
    quote: "Our science test scores went up the quarter after this show. I'm not saying it's magic — but it kind of is. The kids were genuinely excited to learn.",
    name: "Rachel Torres", title: "5th Grade Science Teacher",
    school: "Westlake Elementary", location: "Moore, OK", state: "Oklahoma",
    program: "Science Magic", initials: "RT", color: "#2563EB",
  },
  {
    id: 8,
    quote: "We booked this show four years in a row. Every year it hits different because Joe updates it. The kids who saw it in 2nd grade reference it again when they're in 5th.",
    name: "Patricia Ortega", title: "Principal",
    school: "Ridgeview Elementary", location: "Edmond, OK", state: "Oklahoma",
    program: "Anti-Bullying", initials: "PO", color: "#E0218A",
  },
  {
    id: 9,
    quote: "I watched a student who is typically a bully stand up during the commitment moment and mean it. That's not something a poster or a lesson plan can do. This show did.",
    name: "Kim Lee", title: "School Counselor",
    school: "Summit Ridge Elementary", location: "Owasso, OK", state: "Oklahoma",
    program: "Anti-Bullying", initials: "KL", color: "#E0218A",
  },
  {
    id: 10,
    quote: "We did this show the week before our reading incentive program launched. Participation was up 40% compared to last year. Absolute game-changer.",
    name: "Kim Wallace", title: "Principal",
    school: "Sunrise Elementary", location: "Broken Arrow, OK", state: "Oklahoma",
    program: "Reading & Literacy", initials: "KW", color: "#10B981",
  },
  {
    id: 11,
    quote: "I have a student who hated math and refused to participate in class. After this show he was showing other kids math tricks at recess. I still can't believe it.",
    name: "Marcus Webb", title: "4th Grade Math Teacher",
    school: "Prairie View Elementary", location: "Broken Arrow, OK", state: "Oklahoma",
    program: "Math Magic", initials: "MW", color: "#F97316",
  },
  {
    id: 12,
    quote: "We booked Character Education for the first week of school and it set the tone for our entire year. Teachers still reference moments from the show in November.",
    name: "Diane Foster", title: "Principal",
    school: "Maple Ridge Elementary", location: "Edmond, OK", state: "Oklahoma",
    program: "Character Education", initials: "DF", color: "#5B2D8E",
  },
  {
    id: 13,
    quote: "Booked Joe for a school in the Texas panhandle — 3+ hour drive each way. He showed up early, stayed late to talk to teachers, and the show was flawless. Worth every mile.",
    name: "James Whitfield", title: "PTA Chair",
    school: "Rolling Plains Elementary", location: "Amarillo, TX", state: "Texas",
    program: "Science Magic", initials: "JW", color: "#2563EB",
  },
  {
    id: 14,
    quote: "Three months later students still say 'remember when Joe showed us that kindness trick?' That's the goal of character education — and this show delivers it.",
    name: "Dr. Patricia Webb", title: "District Curriculum Director",
    school: "Midwest City-Del City ISD", location: "Midwest City, OK", state: "Oklahoma",
    program: "Character Education", initials: "PW", color: "#5B2D8E",
  },
  {
    id: 15,
    quote: "Our Arkansas school had never had a magic show before. Joe made it feel completely natural — professional setup, no tech issues, perfect for our older students who can sometimes be hard to impress.",
    name: "Nancy Simmons", title: "Assistant Principal",
    school: "Hillcrest Elementary", location: "Fayetteville, AR", state: "Arkansas",
    program: "Reading & Literacy", initials: "NS", color: "#10B981",
  },
];

export const PROGRAMS_LIST = [
  "All Programs",
  "Science Magic",
  "Reading & Literacy",
  "Math Magic",
  "Character Education",
  "Anti-Bullying",
  "Multiple Programs",
];

export const STATES_LIST = [
  "All States",
  "Oklahoma",
  "Texas",
  "Kansas",
  "Arkansas",
  "Missouri",
];

export const PROGRAM_COLORS: Record<string, string> = {
  "Science Magic":       "bg-blue-100 text-blue-700 border-blue-200",
  "Reading & Literacy":  "bg-purple-100 text-purple-700 border-purple-200",
  "Math Magic":          "bg-orange-100 text-orange-700 border-orange-200",
  "Character Education": "bg-emerald-100 text-emerald-700 border-emerald-200",
  "Anti-Bullying":       "bg-pink-100 text-pink-700 border-pink-200",
  "Multiple Programs":   "bg-violet-100 text-violet-700 border-violet-200",
};
