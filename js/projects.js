window.projects = [
  {
    title: "→ Bad Artist Coffee Co.",
    url: "projects/work/bad-artist.html",
    images: [
        "assets/images/bad-artist/badartist-icon-1.jpg",
            "assets/images/bad-artist/badartist-icon-live.jpg",
               
            "assets/images/bad-artist/badartist-logo-1.jpg",
  
       "assets/images/bad-artist/badartist-packaging-2.jpg",
    ],
    description: "Embracing imperfection with a community-centric coffee roaster in Kuala Lumpur, Malaysia",
    tags: ["Identity, Packaging, Illustration" ]
  },
  {
    title: "→ MORNING",
    url: "projects/work/morning.html",
    images: ["assets/images/morning/morning-cover.jpg",
      "assets/images/morning/morning-stickers-1.png",      
      "assets/images/morning/morning-cards.jpeg",
    ],
     description: "In-house design for a coffee tech startup",
    tags: ["In-House Design, Marketing, Socials" ]
  },
  {
    title: "→ Time is a Black Circle (Dawn Ng)",
    url: "projects/work/tiabc.html",
    images: [

      "assets/images/tiabc/tiabc-interior-3.jpg",
             "assets/images/tiabc/tiabc-cover-2.jpg",
       "assets/images/tiabc/tiabc-cover.jpg",

        "assets/images/tiabc/tiabc-interior-1.jpg",

    ],
    description: "A disco time portal – Dawn Ng's installation at the National Museum of Singapore",
    tags: ["Spatial, Exhibition"]
  },
   {
    title: "→ Horizon (Liu Liling)",
    url: "projects/work/horizon.html",
    images: [
        "assets/images/horizon/horizon-7.jpeg",
      "assets/images/horizon/horizon-4b.jpg",
      "assets/images/horizon/horizon-cover.jpg",
      "assets/images/horizon/horizon-2.jpeg",
    ],
     description: "Organic grid systems for Liu Liling's Horizon at Hearth",
     tags: ["Exhibition, Publication"]
  },
  {
    title: "→ SCO Financial Report AY20/21",
    url: "projects/work/sco-financial-report.html",
    images: [
      "assets/images/sco-financialreport/sco-cover-2.jpg",
      "assets/images/sco-financialreport/sco-cover-3.jpg",
      "assets/images/sco-financialreport/sco-cover-4.jpg"
    ],
    description: "Bringing the orchestra's financial year to life through information design",
    tags: ["Publication"]

  }, 
  {
    title: "→ Man Eat Man Meat Deli (Zine)",
    url: "projects/play/man-eat-man-deli.html",
    images: [   "assets/images/man-eat-man-deli/deli-book-1.jpg",
      "assets/images/man-eat-man-deli/deli-coverpage.jpg",
      "assets/images/man-eat-man-deli/deli-cover.jpg",
      "assets/images/man-eat-man-deli/deli-stickers.jpg"
    ],
     description: "Cannibalism as a vessel for empathy and understanding",
    tags: ["Publication"]
  },
  // {
  //   title: "Erika's Gig Posters",
  //   url: "projects/work/erika-posters.html",
  //   images: [
  //     "assets/images/erika-posters/erika-cover-1.jpg",
  //     "assets/images/erika-posters/erika-cover-2.jpg",
  //     "assets/images/erika-posters/erika-cover-3.jpg",
  //     "assets/images/erika-posters/erika-cover-4.jpg"
  //   ],
  //       tags: ["(Illustration, Poster Design)"]
  // },
 
  {
    title: "→ Top Most Best Airport in the World",
    url: "projects/play/top-most-best-airport.html",
    images: [
            "assets/images/top-most-best-airport/airport-display-3.jpg",
           "assets/images/top-most-best-airport/airport-image-2.jpeg",
      "assets/images/top-most-best-airport/airport-display-5.jpg",
    ],
    description: "Photographic investigation into a megastructure such as the Singapore Changi Airport",
        tags: ["Photography as Research, Publication"]
  },  
  {
    title: "→ Magic in the Machine",
    url: "projects/play/magic-in-the-machine.html",
    images: [
       "assets/images/magic-in-the-machine/magic-4.jpeg",   
          "assets/images/magic-in-the-machine/magic-9.jpg",     
         "assets/images/magic-in-the-machine/magic-8.jpg",
         "assets/images/magic-in-the-machine/magic-6.jpg",
           "assets/images/magic-in-the-machine/magic-1b.jpg",   
    ],
     description: "Speculative design project exploring technology through the lens of magic",
        tags: ["Speculative Design, Creative Coding"]
  },  

];



const illustrationImages = [
  "assets/images/illustrations/direction.jpg",
  "assets/images/illustrations/dumbass-1.jpg",
  "assets/images/illustrations/dumbass-2.jpg",
  "assets/images/illustrations/losing-it.jpg",
  "assets/images/illustrations/rat.jpg",

  // Add more filenames as needed
];

const flexibleGrid = document.querySelector('.flexible-grid');
if (flexibleGrid) {
  flexibleGrid.innerHTML = illustrationImages.map(src => `
    <div class="flexible-grid-item">
      <img src="${src}" alt="">
    </div>
  `).join('');
}