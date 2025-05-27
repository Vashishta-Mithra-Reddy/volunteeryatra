// opportunities.ts

export const opportunities = [
    {
      id: "opp1",
      name: "Eco Farm Retreat",
      location: "Coorg, Karnataka",
      typeOfStay: "Homestay",
      maxVolunteers: 4,
      images: [
        "/images/demo.jpg",
        "/images/demo2.jpg",
        "/images/demo3.jpg",
        "/images/demo.jpg",
        "/images/demo2.jpg",
        "/images/demo3.jpg"
      ],
      minDurationWeeks: 2,
      maxDurationWeeks: 8,
      skillsRequired: ["Organic Farming", "Cooking", "Management"],
      whatYouOffer: {
        hoursPerDay: 5,
        daysPerWeek: 5
      },
      whatYouGet: {
        roomType: "Shared Cottage",
        meals: "3 Meals/Day",
        transport: "Cycles Provided",
        extras: ["Free Weekend Hikes", "Internet Access"],
        daysOff: 2
      },
      aboutExperience: "Experience sustainable living amidst nature, participate in organic farming, and live with a local family.",
      description: "This eco-farm retreat offers a unique opportunity to connect with nature and learn about sustainable agriculture practices. You'll be involved in daily farm activities, from planting and harvesting to animal care. Enjoy fresh, organic meals and the peaceful environment of the Coorg countryside.",
      host: {
        name: "Ramesh Gowda",
        totalReviews: 34,
        rating: 4.8,
        yearsHosting: 5,
        about: "A passionate farmer promoting eco-conscious living for over a decade."
      },
      ratings: [
        {
          rating: 5,
          date: "2024-12-10",
          review: "A serene and eye-opening experience. Ramesh is an amazing host!",
          profile: {
            name: "Elena M.",
            country: "Spain",
            profilePic: "/profiles/elena.jpg"
          }
        },
        {
          rating: 4.5,
          date: "2024-11-05",
          review: "Loved the nature and food. Could improve room facilities a bit.",
          profile: {
            name: "Liam P.",
            country: "UK",
            profilePic: "/profiles/liam.jpg"
          }
        }
      ]
    },
    {
      id: "opp2",
      name: "Beach Hostel Helper",
      location: "Gokarna, Karnataka",
      typeOfStay: "Hostel",
      maxVolunteers: 2,
      images: [
        "/images/demo2.jpg",
        "/images/demo.jpg",
        "/images/demo3.jpg",
        "/images/demo2.jpg",
        "/images/demo.jpg",
        "/images/demo3.jpg"
      ],
      minDurationWeeks: 1,
      maxDurationWeeks: 4,
      skillsRequired: ["Communication", "Reception", "Cleaning"],
      whatYouOffer: {
        hoursPerDay: 4,
        daysPerWeek: 6
      },
      whatYouGet: {
        roomType: "Mixed Dorm",
        meals: "Breakfast Only",
        transport: "None",
        extras: ["Free Yoga Classes", "Internet Access"],
        daysOff: 1
      },
      aboutExperience: "Help out at a lively beach hostel, meet travelers from around the world, and enjoy sunsets every evening.",
      description: "Join our team at a vibrant beach hostel in Gokarna! Your tasks will include assisting with check-ins, helping guests, and light cleaning. In return, you get to stay steps away from the beach, meet fellow travelers, and enjoy the laid-back coastal life.",
      host: {
        name: "Anjali Menon",
        totalReviews: 50,
        rating: 4.7,
        yearsHosting: 3,
        about: "Traveler turned hostel owner. Loves music, surf, and stories."
      },
      ratings: [
        {
          rating: 5,
          date: "2025-01-12",
          review: "Amazing vibe and great people. Perfect for short volunteering.",
          profile: {
            name: "Carlos R.",
            country: "Mexico",
            profilePic: "/profiles/carlos.jpg"
          }
        },
        {
          rating: 4.6,
          date: "2024-10-22",
          review: "Hostel work was light and the beach is just 2 minutes away!",
          profile: {
            name: "Sana A.",
            country: "India",
            profilePic: "/profiles/sana.jpg"
          }
        }
      ]
    },
    {
      id: "opp3",
      name: "Himalayan Homestay Support",
      location: "Manali, Himachal Pradesh",
      typeOfStay: "Homestay",
      maxVolunteers: 1,
      images: [
        "/images/demo3.jpg",
        "/images/demo2.jpg",
        "/images/demo.jpg",
        "/images/demo2.jpg",
        "/images/demo.jpg",
        "/images/demo3.jpg"
      ],
      minDurationWeeks: 3,
      maxDurationWeeks: 12,
      skillsRequired: ["Teaching", "Childcare", "Gardening"],
      whatYouOffer: {
        hoursPerDay: 6,
        daysPerWeek: 5
      },
      whatYouGet: {
        roomType: "Private Room",
        meals: "All Meals",
        transport: "Cycles Available",
        extras: ["Free Local Tours", "High-speed Internet"],
        daysOff: 2
      },
      aboutExperience: "Live in the mountains, help with community projects, and immerse yourself in local Himachali culture.",
      description: "Experience the tranquility of the Himalayas by supporting a local homestay. You'll assist with daily chores, help with gardening, and potentially teach English to local children. This is a chance to live like a local, explore mountain trails, and enjoy breathtaking views.",
      host: {
        name: "Tashi Rana",
        totalReviews: 20,
        rating: 4.9,
        yearsHosting: 4,
        about: "A retired teacher who loves sharing stories and helping travelers explore the Himalayas."
      },
      ratings: [
        {
          rating: 5,
          date: "2025-02-15",
          review: "Most peaceful time of my life. Tashi is kind and knowledgeable.",
          profile: {
            name: "Julia K.",
            country: "Germany",
            profilePic: "/profiles/julia.jpg"
          }
        },
        {
          rating: 4.8,
          date: "2024-11-20",
          review: "Beautiful mountains, great food, and fulfilling work.",
          profile: {
            name: "Arjun D.",
            country: "India",
            profilePic: "/profiles/arjun.jpg"
          }
        }
      ]
    },
    {
      id: "opp4",
      name: "Himalayan Homestay Support",
      location: "Manali, Himachal Pradesh",
      typeOfStay: "Hotel",
      maxVolunteers: 1,
      images: [
        "/images/demo4.jpg",
        "/images/demo3.jpg",
        "/images/demo2.jpg",
        "/images/demo.jpg",
        "/images/demo2.jpg",
        "/images/demo.jpg",
        "/images/demo3.jpg"
      ],
      minDurationWeeks: 3,
      maxDurationWeeks: 12,
      skillsRequired: ["Teaching", "Childcare", "Gardening"],
      whatYouOffer: {
        hoursPerDay: 6,
        daysPerWeek: 5
      },
      whatYouGet: {
        roomType: "Private Room",
        meals: "All Meals",
        transport: "Cycles Available",
        extras: ["Free Local Tours", "High-speed Internet"],
        daysOff: 2
      },
      aboutExperience: "Live in the mountains, help with community projects, and immerse yourself in local Himachali culture.",
      description: "This opportunity is similar to the previous Himalayan Homestay, focusing on cultural immersion and community support in Manali. You'll assist with various tasks depending on the host family's needs, which may include teaching, gardening, or helping with daily routines. A great way to experience authentic mountain life.",
      host: {
        name: "Tashi Rana",
        totalReviews: 20,
        rating: 4.9,
        yearsHosting: 4,
        about: "A retired teacher who loves sharing stories and helping travelers explore the Himalayas."
      },
      ratings: [
        {
          rating: 5,
          date: "2025-02-15",
          review: "Most peaceful time of my life. Tashi is kind and knowledgeable.",
          profile: {
            name: "Julia K.",
            country: "Germany",
            profilePic: "/profiles/julia.jpg"
          }
        },
        {
          rating: 4.8,
          date: "2024-11-20",
          review: "Beautiful mountains, great food, and fulfilling work.",
          profile: {
            name: "Arjun D.",
            country: "India",
            profilePic: "/profiles/arjun.jpg"
          }
        }
      ]
    }
    
  ];
  