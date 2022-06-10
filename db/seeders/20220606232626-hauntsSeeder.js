"use strict";
// historical -1  outdoors - 2  hotel - 3  asylum - 4  house - 5

const d1 =
  "Now a historic state park, Bodie California was once a booming western town. Today it is a ghost town… in more ways than one, according to some. Visitors have claimed seeing sightings of ghosts, or hearing music coming from the abandoned saloons.";
const d2 =
  "Toni Jo, was the first and only woman in Louisiana to be executed in the electric chair. However, her spirit is said to have remained in the courthouse, where workers can feel her presence and even smell her burning hair. Many claim she meddles with everyday life at the courthouse to make life more difficult for the employees, locking doors and fiddling with office equipment.";
const d3 =
  "This historical prison was home to some very lonely stories. Prisoners lived, ate, exercised alone. Visitors have claimed to hear laughter coming from walls, footsteps, and seeing the outline of shadows.";
const d4 =
  "As the story goes, a woman named Emily was supposed to meet her lover at the bridge to elope, but hanged herself from the rafters when he never showed up. Visitors claim seeing images of a white apparition, and hearing strange voices or footsteps when crossing through. On a more menacing note, there are claims that her ghost has scratched at passing cars, and even has drawn blood on the backs of passing pedestrians.";
const d5 =
  "If flight delays and $13 sandwiches aren't enough to make you fear airports, Honolulu's Daniel K. Inouye International Airport (also known as Honolulu International Airport) has an extra feature to strike fear in even the most intrepid of travelers: a resident ghost. Dubbed 'the Lady in Waiting,' the apparition is a blonde woman in a white dress who shows up in off-limits areas of the airport. According to legend, the woman fell in love with a man who promised to marry her (while she was still alive, of course), but then he hopped on an international flight and abandoned her at the gate—her ghost is still waiting for him to return. People have reported other strange occurrences as well, like toilet paper rolls that unravel on their own and toilets that flush by themselves. Although when it comes to airport bathrooms, we've seen a lot scarier.";
const d6 =
  "Those of you who remember the '90s will recognize this cemetery as the one featured in the novel Midnight in the Garden of Good and Evil. Like the book, the Savannah cemetery itself has a Southern Gothic atmosphere, with Spanish moss giving shade to time-worn Victorian monuments. There are many notable figures buried here, like singer Johnny Mercer and poet Conrad Aiken, but it's Gracie Watson who most deserves a visit. Having died at just six years old, her grave is marked by a life-size marble statue with her hand resting on a tree stump, symbolizing her life cut short. Many visitors place toys at her grave when they visit, and some have reported seeing the ghost of Gracie near the site. Other spooky accounts of the Bonaventure include inexplicable sounds, like crying babies and barking dogs, and statues suddenly smiling as people approach them.";
const d7 =
  "A true spooky house, haunted by many ghosts before us. The perfect traditional stomping ground! This is a popular site for teenagers to come visit. Relax by the spooky lake in the back of the house- a great place to dwell on your memories and act them out in ghastly form during the full moon. All of those daring tourists make for good opportunities for possession, as well.";
const d8 = "The heavily forested Pine Barrens spans over 1 million acres and seven counties in New Jersey. The area thrived during the Colonial period, host to sawmills, paper mills, and other industries. People eventually abandoned the mills and surrounding villages when coal was discovered to the west in Pennsylvania, leaving behind ghost towns—and, some say, a few supernatural wanderers. The most popular Pine Barrens resident is without a doubt the Jersey Devil. According to legend, the creature was born in 1735 to Deborah Leeds (her 13th child) with leathery wings, a goat's head, and hooves. It flew up the Leeds' chimney and into the Barrens, where it has reportedly been killing livestock—and creeping out South Jersey residents—ever since.";
const d9 = "No, this house did not steal its name from the classic novel, though some say it may have inspired it! Aside from its beautiful-yet-spooky facade, the house is surrounded by tales of paranormal activity and ghost sightings (all based on personal experiences of staff). Every October, the house offers spooky tours as well as weekly performances of two plays, The Legacy of the Hanging Judge and Spirits of The Gables."
const d10 = "Oregonian pioneers Henry and Georgiana Pittock decided to build their dream house when they reached their golden years, in 1909, spurring the innovative design and construction of the Pittock Mansion. Unfortunately, the couple only got to enjoy their home for a few years before passing away—Georgiana in 1918 and Henry in 1919. The building is now a public landmark where some strange occurrences have been reported, such as the smell of roses (Georgiana's favorite bloom) filling a room with no flowers in it, and a childhood painting of Henry moving, on its own, from spot to spot within the house. Clearly, death was not enough of a reason for the Pittocks to vacate their beloved home."
const d11 = "This quiet ghost town is bustling nowadays thanks to tourism, so it's a great spot to get some people watching in. For the real party, there are some romantic abandoned mines, the perfect spooktacular getaway!"
const d12 = "The RMS Queen Mary served as a luxury ocean liner from 1936 to 1967. During that time, it was the site of at least one murder, a sailor being crushed to death by a door in the engine room, and children drowning in the pool. The city of Long Beach purchased the ship in 1967 and turned it into a hotel, and it still serves that purpose today -- although the reported ghosts of the deceased passengers get to stay for free. (For an extra dose of spine-tingling experiences, see if you can visit the ship's engine room, which is considered by many to be a 'hotbed' of paranormal activity.)"

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Haunts",
      [
        {
          title: "Bodie, CA",
          description: d1,
          score: 4,
          genreId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Calcasieu Courthouse, Lake Charles, LA",
          description: d2,
          score: 2.5,
          genreId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Eastern State Penitentiary, Philadelphia, PA",
          description: d3,
          score: 3,
          genreId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Emily's Bridge, VT",
          description: d4,
          score: 1,
          genreId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Honolulu International Airport, HI",
          description: d5,
          score: 0,
          genreId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Bonaventure Cemetery, Savannah, GA",
          description: d6,
          score: 0,
          genreId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Moose, WY",
          description: d7,
          score: 0,
          genreId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Pine Barrens, NJ",
          description: d8,
          score: 0,
          genreId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "House of the Seven Gables, MA",
          description: d9,
          score: 0,
          genreId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Pittock Mansion, OR",
          description: d10,
          score: 0,
          genreId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Calico, CA",
          description: d11,
          score: 0,
          genreId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "RMS Queen Mary, CA",
          description: d12,
          score: 0,
          genreId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Haunts", null, {});
  },
};
