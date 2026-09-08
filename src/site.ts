/** Everything editable about the site, apart from the images themselves. */

export const site = {
  name: "AMPHIBIOUX",
  /** TODO: your real domain, before deploying. */
  url: "https://amphibioux.com",
  description:
    "Amphibioux — choro, forró, samba, baião, bossa nova and jazz. Julia Farry, Mauricio Zani, Choenden Kyirong, Tiago Cavalcanti.",

  about:
    "Drawing from the roots of choro, forró, samba, baião, bossa nova, and jazz, Amphibioux honours the musical giants that came before them, while joyfully adding their own present-day ripples of inspiration.",

  lineup: [
    { name: "Julia Farry", instrument: "bass" },
    { name: "Mauricio Zani", instrument: "piano" },
    { name: "Choenden Kyirong", instrument: "trombone" },
    { name: "Tiago Cavalcanti", instrument: "percussion" },
  ],

  links: [
    { label: "Photos", href: "/photos" },
    { label: "Videos", href: "/videos" },
    { label: "Instagram", href: "https://www.instagram.com/amphibioux/" },
    { label: "YouTube", href: "https://www.youtube.com/@amphibioux" },
    { label: "SoundCloud", href: "https://soundcloud.com/amphibiouxx" },
  ],
} as const;
