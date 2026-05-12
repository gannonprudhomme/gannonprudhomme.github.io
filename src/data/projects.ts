export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  summary: string;
  overview: string;
  highlights: string[];
  tech: string[];
  image: string;
  imageAlt: string;
  screenshots?: {
    src: string;
    alt: string;
  }[];
  demoVideo?: {
    src: string;
    poster: string;
    title: string;
    description?: string;
  };
  presentation?: {
    embedUrl: string;
    externalUrl: string;
    title: string;
    description?: string;
  };
  imageFit?: "cover" | "contain";
  mediaKind?: "image" | "phone";
  featured?: boolean;
  sourceUrl?: string;
  liveUrl?: string;
  secondaryUrl?: string;
  secondaryLabel?: string;
  status?: string;
  hidden?: boolean;
};

const allProjects: Project[] = [
  {
    slug: "cineduel",
    title: "Cineduel",
    subtitle: "Beli meets movies — a native iOS app for ranking what you've watched.",
    year: "2026",
    summary:
      "A native iOS app that ranks your watchlist through head-to-head comparisons instead of star ratings.",
    overview:
      "Cineduel is essentially \"Beli meets movies\": a work-in-progress iOS app I designed and developed that ranks your watchlist through head-to-head comparisons instead of star ratings, born out of frustration with Letterboxd's web-like iOS app. It has not launched on the App Store yet.",
    highlights: [
      "It is implemented with SwiftUI and TCA, backed by a SQLite database used for local persistence and caching.",
    ],
    tech: ["Swift", "SwiftUI", "TCA", "SQLite"],
    image: "/projects/cineduel-feed.webp",
    imageAlt: "Cineduel feed screen showing trending and popular movies",
    demoVideo: {
      src: "/projects/cineduel-rating-demo.mp4",
      poster: "/projects/cineduel-rating-demo-poster.jpg",
      title: "Rating flow",
      description:
        "The core interaction asks which movie you prefer, then uses those choices to place the movie in your personal ranked list.",
    },
    screenshots: [
      {
        src: "/projects/cineduel-feed.webp",
        alt: "Cineduel feed showing a trailer hero, trending titles, and popular movies",
      },
      {
        src: "/projects/cineduel-lists.webp",
        alt: "Cineduel lists overview with To watch, Studio Ghibli, Anime, Pixar, and Comedies",
      },
      {
        src: "/projects/cineduel-watchlist.webp",
        alt: "Cineduel To watch list with manually ordered films",
      },
      {
        src: "/projects/cineduel-profile.webp",
        alt: "Cineduel profile with watched count, total runtime, and personal ranked list",
      },
      {
        src: "/projects/cineduel-movie-details.webp",
        alt: "Cineduel movie detail for Spider-Man: Into the Spider-Verse with personal rating, audience rating, and metadata",
      },
      {
        src: "/projects/cineduel-movie-cast.webp",
        alt: "Cineduel movie detail showing cast, trailers, and rating history",
      },
    ],
    mediaKind: "phone",
    featured: true,
  },
  {
    slug: "artificer",
    title: "Artificer",
    subtitle: "A playable Risk of Rain 2-inspired prototype with spells, enemies, items, and custom 3D pathfinding.",
    year: "2024",
    summary:
      "A Unity project built to learn combat systems, shaders, VFX, enemy behavior, item pickups, and 3D navigation.",
    overview: `This is a Risk of Rain 2 clone I created as my first game dev project, with the sole goal of learning various aspects of game development I had never done before, including: shaders, visual effects/particle systems,
3D modeling and animation, and texturing (Photoshop + Substance Designer).

Of technical note is my sparse voxel octree (SVO) implementation, which I use in order to efficiently represent 3D space for pathfinding in 3D for flying entities. (lesser wisp & AtG Missile's projectile) It can generate a SVO from a mesh with 2 million vertices in ~1.5 seconds, resulting in ~500k nodes, all of which is parallelized using Unity Jobs + the Burst compiler. This can then be saved to disk & loaded at runtime.

You can read more details about it <a class="link-hover link" href="https://github.com/gannonprudhomme/Artificer/blob/main/Assets/Scripts/3D%20Navigation/Octree.md" target="_blank" rel="noopener noreferrer">here</a>.

I also gave a presentation on the sparse voxel octree pipeline, which you can see the slides of below.`,
    highlights: [],
    tech: ["Unity", "C#"],
    image: "/projects/artificer-stage.jpg",
    imageAlt: "Artificer wide stage view with a Stone Golem and a Backup Magazine item pickup",
    screenshots: [
      {
        src: "/projects/artificer.jpg",
        alt: "Artificer gameplay screenshot showing combat in a grassy level",
      },
      {
        src: "/projects/artificer-stage.jpg",
        alt: "Artificer wide stage view with a Stone Golem and a Backup Magazine item pickup",
      },
      {
        src: "/projects/artificer-aerial.jpg",
        alt: "Artificer player hovering above the Titanic Plains level with item HUD visible",
      },
      {
        src: "/projects/artificer-lemurian.jpg",
        alt: "Artificer player fighting a Lemurian enemy at close range",
      },
      {
        src: "/projects/artificer-combat.jpg",
        alt: "Artificer combat scene with multiple enemies, AoE damage numbers, and spell VFX",
      },
    ],
    featured: true,
    sourceUrl: "https://github.com/gannonprudhomme/Artificer",
    demoVideo: {
      src: "/projects/artificer-demo.mp4",
      poster: "/projects/artificer-demo-poster.jpg",
      title: "Gameplay clip",
    },
    presentation: {
      embedUrl:
        "https://docs.google.com/presentation/d/1VnxJV4OxIorpmZvwsRjuv5sqpwxE9dvfHuSSCWP6O3c/embed",
      externalUrl:
        "https://docs.google.com/presentation/d/1VnxJV4OxIorpmZvwsRjuv5sqpwxE9dvfHuSSCWP6O3c/view",
      title: "Pathfinding in 3D Space",
    },
  },
  {
    slug: "desktop-control-tablet",
    title: "Desktop Control Tablet",
    subtitle: "A Raspberry Pi touchscreen companion for a Windows desktop.",
    year: "2018-2021",
    summary:
      "A modular Electron and Express dashboard for controlling desktop volume, Spotify, lights, weather, and system stats from a Raspberry Pi touchscreen.",
    overview:
      "Desktop Control Tablet is a companion control surface for a Windows 10 desktop. It runs on a Raspberry Pi touchscreen, talks to a desktop companion server, and lets modules be added or swapped through shared settings and view conventions.",
    highlights: [
      "Controlled Spotify playback, desktop process volume, audio devices, lights, weather, and performance stats.",
      "Designed a modular view system so new dashboard modules could be dropped into the tablet UI.",
      "Paired a Raspberry Pi frontend with a Windows companion server for desktop integrations.",
      "Used Socket.io for low-latency state updates between the tablet and desktop.",
    ],
    tech: ["Electron", "Node.js", "Express", "Socket.io", "Pug", "Raspberry Pi"],
    image: "/projects/desktop-control-tablet.png",
    imageAlt: "Desktop Control Tablet screenshot with process volume controls and media playback",
    screenshots: [
      {
        src: "/projects/desktop-control-tablet.png",
        alt: "Desktop Control Tablet screenshot with process volume controls and media playback",
      },
    ],
    sourceUrl: "https://github.com/gannonprudhomme/Desktop-Control-Tablet",
    secondaryUrl: "https://github.com/gannonprudhomme/Desktop-Control-Tablet-Server",
    secondaryLabel: "Companion server",
    hidden: true,
  },
  {
    slug: "rev-registration",
    title: "Rev Registration",
    subtitle: "A Texas A&M class scheduler for generating compatible course schedules.",
    year: "2020-2021",
    summary:
      "A Django and React app that generated compatible course schedules from selected classes, sections, availability, and preferences.",
    overview:
      "Rev Registration helped Texas A&M students plan registration by selecting courses, blocking off unavailable times, and generating compatible schedules with section, seat, grade-distribution, honors, online, and saved-schedule preferences.",
    highlights: [
      "Project is no longer active because Texas A&M shut down the public API used for course data in 2023.",
    ],
    tech: ["TypeScript", "React", "Python", "Django", "PostgreSQL"],
    image: "/projects/rev-registration-schedule.jpg",
    imageAlt: "Rev Registration generated schedule shown in fullscreen view",
    screenshots: [
      {
        src: "/projects/rev-registration.gif",
        alt: "Rev Registration demo showing a class schedule planning interface",
      },
      {
        src: "/projects/rev-registration-add-course.jpg",
        alt: "Rev Registration course search showing MATH 151 being added",
      },
      {
        src: "/projects/rev-registration-sections.jpg",
        alt: "Rev Registration section list with filters and busy-time blocks on the schedule",
      },
      {
        src: "/projects/rev-registration-schedule.jpg",
        alt: "Rev Registration generated schedule shown in fullscreen view",
      },
    ],
    sourceUrl: "https://github.com/aggie-coding-club/Rev-Registration",
    status: "No longer active",
  },
];

export const projects = allProjects.filter((project) => !project.hidden);

export const featuredProjects = projects.filter((project) => project.featured);

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
