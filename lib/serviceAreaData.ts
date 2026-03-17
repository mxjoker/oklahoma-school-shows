// lib/serviceAreaData.ts
// All 5 service area state definitions with city lists, SEO content, and metadata

export interface StateData {
  slug: string;
  name: string;
  abbreviation: string;
  emoji: string;
  tagline: string;
  heroDescription: string;
  population: string;
  schools: string;
  students: string;
  travelNote: string;
  cities: string[];
  featuredCities: {
    name: string;
    description: string;
    schools: string;
  }[];
  seoTitle: string;
  seoDescription: string;
  localFacts: string[];
}

export const statesData: StateData[] = [
  {
    slug: "oklahoma",
    name: "Oklahoma",
    abbreviation: "OK",
    emoji: "🌾",
    tagline: "Joe's Home State — Local Performer, Local Prices",
    heroDescription:
      "As an Oklahoma City native, Joe Coover has performed for hundreds of Oklahoma schools across the state — from Tulsa to Lawton, Enid to Durant. No travel fees. No hotel markups. Just world-class magic delivered by someone who genuinely loves Oklahoma schools.",
    population: "4 million+",
    schools: "1,800+",
    students: "690,000+",
    travelNote:
      "Based in Oklahoma City — no travel fees anywhere in Oklahoma. Day-of travel is always included.",
    cities: [
      "Oklahoma City",
      "Tulsa",
      "Norman",
      "Broken Arrow",
      "Lawton",
      "Edmond",
      "Moore",
      "Midwest City",
      "Enid",
      "Stillwater",
      "Muskogee",
      "Bartlesville",
      "Owasso",
      "Shawnee",
      "Yukon",
      "Bixby",
      "Jenks",
      "Sapulpa",
      "Mustang",
      "Ardmore",
      "Durant",
      "Ponca City",
      "Claremore",
      "El Reno",
      "McAlester",
      "Altus",
      "Tahlequah",
      "Ada",
      "Weatherford",
      "Chickasha",
    ],
    featuredCities: [
      {
        name: "Oklahoma City",
        description:
          "Home base! Joe serves OKC metro schools with same-week availability and zero travel costs.",
        schools: "200+",
      },
      {
        name: "Tulsa",
        description:
          "Joe makes regular runs to the Tulsa metro — Broken Arrow, Owasso, Bixby, and more.",
        schools: "150+",
      },
      {
        name: "Norman",
        description:
          "Just 20 minutes south of OKC, Norman schools get all the perks of a local performer.",
        schools: "25+",
      },
    ],
    seoTitle: "Oklahoma School Assembly Performer | Funky Monkey Magic | OKC",
    seoDescription:
      "Joe Coover brings high-energy magic assemblies to Oklahoma elementary schools. Science, literacy, math, and character education shows. Based in OKC — no travel fees statewide.",
    localFacts: [
      "Oklahoma has 513 school districts",
      "Serving Sooner State schools since 2015",
      "No travel fee anywhere in Oklahoma",
      "Same-week bookings often available",
    ],
  },
  {
    slug: "texas",
    name: "Texas",
    abbreviation: "TX",
    emoji: "⭐",
    tagline: "The Lone Star State's Favorite Magic Assembly",
    heroDescription:
      "Texas schools deserve world-class entertainment — and Joe brings it. From the DFW Metroplex to Amarillo, Texarkana to Wichita Falls, Funky Monkey Magic has dazzled Texas elementary students with curriculum-connected magic that teachers love and kids never forget.",
    population: "30 million+",
    schools: "9,000+",
    students: "5.4 million+",
    travelNote:
      "Travel fee applies for Texas bookings. Multi-school days in the same region reduce per-school costs significantly.",
    cities: [
      "Dallas",
      "Fort Worth",
      "Arlington",
      "Plano",
      "Irving",
      "Garland",
      "Frisco",
      "McKinney",
      "Amarillo",
      "Lubbock",
      "Wichita Falls",
      "Abilene",
      "Texarkana",
      "Longview",
      "Tyler",
      "Denton",
      "Lewisville",
      "Carrollton",
      "Richardson",
      "Allen",
      "Flower Mound",
      "Grapevine",
      "Southlake",
      "Sherman",
      "Denison",
      "Gainesville",
      "Mineral Wells",
      "Weatherford",
      "Cleburne",
      "Corsicana",
    ],
    featuredCities: [
      {
        name: "DFW Metroplex",
        description:
          "The Dallas-Fort Worth area is Joe's most-visited Texas region. Multi-school trips keep costs down.",
        schools: "1,000+",
      },
      {
        name: "Amarillo",
        description:
          "Just a few hours from OKC — Amarillo schools get great rates and reliable service.",
        schools: "40+",
      },
      {
        name: "Wichita Falls",
        description:
          "Right on the Oklahoma border, Wichita Falls schools enjoy near-local pricing.",
        schools: "30+",
      },
    ],
    seoTitle: "Texas School Assembly Performer | Magic Shows for Elementary Schools | Funky Monkey Magic",
    seoDescription:
      "Bring Funky Monkey Magic to your Texas elementary school! Joe Coover delivers curriculum-connected magic assemblies across DFW, Amarillo, Wichita Falls, and more. Book today.",
    localFacts: [
      "Serving North and East Texas schools",
      "Multi-school trips reduce travel costs",
      "TEKS-aligned show content available",
      "Licensed and insured in Texas",
    ],
  },
  {
    slug: "arkansas",
    name: "Arkansas",
    abbreviation: "AR",
    emoji: "🦅",
    tagline: "Natural State Schools, Supernatural Entertainment",
    heroDescription:
      "Arkansas schools are just a short drive from Oklahoma City — making Funky Monkey Magic one of the most accessible, affordable professional assembly programs available to Natural State elementary schools. From Fort Smith to Fayetteville, Joe brings big-city production quality to every Arkansas community.",
    population: "3 million+",
    schools: "1,100+",
    students: "480,000+",
    travelNote:
      "Western Arkansas is a quick drive from OKC. Travel fees are very reasonable — often comparable to in-state rates.",
    cities: [
      "Fort Smith",
      "Fayetteville",
      "Springdale",
      "Rogers",
      "Bentonville",
      "Conway",
      "Jonesboro",
      "North Little Rock",
      "Little Rock",
      "Texarkana",
      "Pine Bluff",
      "Russellville",
      "Bella Vista",
      "Searcy",
      "Van Buren",
      "El Dorado",
      "Marion",
      "Paragould",
      "Cabot",
      "Sherwood",
      "Maumelle",
      "Benton",
      "Bryant",
      "Siloam Springs",
      "Alma",
      "Clarksville",
      "Morrilton",
      "Stuttgart",
      "Batesville",
      "Mountain Home",
    ],
    featuredCities: [
      {
        name: "Fort Smith",
        description:
          "Right on the Oklahoma border — Fort Smith schools enjoy fast service and great rates.",
        schools: "40+",
      },
      {
        name: "Northwest Arkansas",
        description:
          "Fayetteville, Springdale, Rogers, and Bentonville form one of the fastest-growing school regions in the South.",
        schools: "120+",
      },
      {
        name: "Little Rock Metro",
        description:
          "Arkansas's capital region gets full-production shows with professional setup and teardown.",
        schools: "80+",
      },
    ],
    seoTitle: "Arkansas School Assembly Performer | Magic Shows for Elementary Schools | Funky Monkey Magic",
    seoDescription:
      "Joe Coover brings award-winning magic assemblies to Arkansas elementary schools. Fort Smith, Fayetteville, Little Rock, and beyond. Affordable rates, unforgettable shows.",
    localFacts: [
      "Close to OKC — lower travel costs",
      "Arkansas Common Core aligned content",
      "Serving AR schools since 2017",
      "Same-week bookings possible",
    ],
  },
  {
    slug: "kansas",
    name: "Kansas",
    abbreviation: "KS",
    emoji: "🌻",
    tagline: "From the Sunflower State to Standing Ovations",
    heroDescription:
      "Kansas schools deserve the same high-energy, curriculum-connected magic that Oklahoma schools have loved for years — and now they can have it. Joe Coover travels regularly to Wichita, the Kansas City metro, and throughout the Sunflower State to bring Funky Monkey Magic to elementary schools that want something truly memorable.",
    population: "2.9 million+",
    schools: "1,300+",
    students: "490,000+",
    travelNote:
      "Southern Kansas cities like Wichita are just 2.5 hours from OKC. Multi-school regional days are available.",
    cities: [
      "Wichita",
      "Overland Park",
      "Kansas City",
      "Olathe",
      "Topeka",
      "Lawrence",
      "Shawnee",
      "Manhattan",
      "Lenexa",
      "Salina",
      "Hutchinson",
      "Leavenworth",
      "Leawood",
      "Garden City",
      "Dodge City",
      "Derby",
      "Liberal",
      "Emporia",
      "Junction City",
      "Prairie Village",
      "Hays",
      "Pittsburg",
      "Arkansas City",
      "Winfield",
      "El Dorado",
      "McPherson",
      "Newton",
      "Andover",
      "Augusta",
      "Haysville",
    ],
    featuredCities: [
      {
        name: "Wichita",
        description:
          "Kansas's largest city and just 2.5 hours north — Wichita schools get professional shows at great rates.",
        schools: "100+",
      },
      {
        name: "Kansas City Metro",
        description:
          "Overland Park, Olathe, Shawnee, and Lenexa — a thriving region with excellent schools.",
        schools: "200+",
      },
      {
        name: "Topeka",
        description:
          "The Kansas capital has dozens of elementary schools that love magic assembly programs.",
        schools: "35+",
      },
    ],
    seoTitle: "Kansas School Assembly Performer | Magic Shows for Elementary Schools | Funky Monkey Magic",
    seoDescription:
      "Funky Monkey Magic brings curriculum-connected magic assemblies to Kansas elementary schools. Wichita, Kansas City metro, Topeka, and beyond. Book Joe Coover today.",
    localFacts: [
      "Regular trips to Wichita and KC metro",
      "Kansas state standards aligned content",
      "Multi-school trips save on travel",
      "Fully insured for Kansas events",
    ],
  },
  {
    slug: "missouri",
    name: "Missouri",
    abbreviation: "MO",
    emoji: "🎡",
    tagline: "Show-Me State Schools, Show-Stopping Magic",
    heroDescription:
      "Missouri's 'Show Me' motto is practically a magic challenge — and Joe Coover is ready to answer it. From Joplin and Springfield to Kansas City and St. Louis, Funky Monkey Magic brings professional school assembly programming that Missouri elementary educators have been recommending to each other for years.",
    population: "6.1 million+",
    schools: "2,400+",
    students: "880,000+",
    travelNote:
      "Southwest Missouri (Joplin, Springfield) is very accessible. Kansas City and St. Louis bookings work best as multi-school regional tours.",
    cities: [
      "Joplin",
      "Springfield",
      "Kansas City",
      "St. Louis",
      "Independence",
      "Columbia",
      "Lee's Summit",
      "O'Fallon",
      "St. Joseph",
      "St. Charles",
      "Blue Springs",
      "Florissant",
      "Chesterfield",
      "Jefferson City",
      "Cape Girardeau",
      "Wildwood",
      "University City",
      "Ballwin",
      "Raytown",
      "Liberty",
      "Wentzville",
      "Kirkwood",
      "Maryland Heights",
      "Hazelwood",
      "Gladstone",
      "Belton",
      "Webb City",
      "Carthage",
      "Neosho",
      "Nixa",
    ],
    featuredCities: [
      {
        name: "Joplin",
        description:
          "Southwest Missouri's hub — Joplin is close enough to OKC to offer near-local rates.",
        schools: "20+",
      },
      {
        name: "Springfield",
        description:
          "A fast-growing city with dozens of elementary schools that love engaging assembly programming.",
        schools: "50+",
      },
      {
        name: "Kansas City",
        description:
          "Missouri's KC metro is served as part of regional tour weeks with excellent per-school rates.",
        schools: "200+",
      },
    ],
    seoTitle: "Missouri School Assembly Performer | Magic Shows for Elementary Schools | Funky Monkey Magic",
    seoDescription:
      "Joe Coover brings Funky Monkey Magic to Missouri elementary schools. Joplin, Springfield, Kansas City, and beyond. Curriculum-connected magic that teachers and students love.",
    localFacts: [
      "SW Missouri (Joplin) near-local rates",
      "Missouri learning standards aligned",
      "KC and STL regional tour scheduling",
      "Fully licensed and insured",
    ],
  },
];

export function getStateData(slug: string): StateData | undefined {
  return statesData.find((s) => s.slug === slug);
}

export const allServiceAreaSlugs = statesData.map((s) => s.slug);
