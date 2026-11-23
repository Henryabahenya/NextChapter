import { TeamMember } from "../models/TeamMember";

// Portrait assets: place each member's generated PNG in team/<slug>.png at the repository root.
// Startup seeding updates photoUrl automatically for all 9 existing MongoDB records.

const leadershipTeam = [
  {
    fullName: "James Lochek",
    role: "Founder and Director",
    bio: "Provides strategic leadership and champions inclusive digital ecosystems.",
    photoUrl: "/team/james-lochek.png",
    displayOrder: 1,
  },
  {
    fullName: "Sunday James",
    role: "Program and Project Lead",
    bio: "Coordinates programmes and turns community-led ideas into measurable projects.",
    photoUrl: "/team/sunday-james.png",
    displayOrder: 2,
  },
  {
    fullName: "Henry Abahenya",
    role: "Monitoring, Evaluation, and Learning Lead",
    bio: "Strengthens learning, evidence, accountability, and organizational impact.",
    photoUrl: "/team/henry-abahenya.png",
    displayOrder: 3,
  },
  {
    fullName: "Helder James",
    role: "Finance and Administration Lead",
    bio: "Supports responsible financial stewardship and efficient operations.",
    photoUrl: "/team/helder-james.png",
    displayOrder: 4,
  },
  {
    fullName: "Martin Philip",
    role: "Communication and Media Lead",
    bio: "Leads storytelling, public communications, and digital engagement.",
    photoUrl: "/team/martin-philip.png",
    displayOrder: 5,
  },
  {
    fullName: "Victoria Iliha",
    role: "Secretary",
    bio: "Coordinates governance, records, and institutional communication.",
    photoUrl: "/team/victoria-iliha.png",
    displayOrder: 6,
  },
  {
    fullName: "Laku Noel",
    role: "Community Engagement Lead",
    bio: "Builds trusted relationships and advances participation across communities.",
    photoUrl: "/team/laku-noel.png",
    displayOrder: 7,
  },
  {
    fullName: "Lucy Iholong",
    role: "Partnership and Resource Mobilization Lead",
    bio: "Develops partnerships and mobilizes resources for sustainable growth.",
    photoUrl: "/team/lucy-iholong.png",
    displayOrder: 8,
  },
  {
    fullName: "Salah Charles",
    role: "Digital Innovation and Tech Lead",
    bio: "Leads technology strategy, digital tools, and practical innovation.",
    photoUrl: "/team/salah-charles.png",
    displayOrder: 9,
  },
];

export async function seedTeam(): Promise<void> {
  for (const member of leadershipTeam) {
    await TeamMember.updateOne(
      { displayOrder: member.displayOrder },
      {
        $set: {
          fullName: member.fullName,
          role: member.role,
          bio: member.bio,
          photoUrl: member.photoUrl,
          displayOrder: member.displayOrder,
          isActive: true,
        },
      },
      { upsert: true },
    );
  }
  console.log("Team seed ensured: 9 leadership and team members");
}
