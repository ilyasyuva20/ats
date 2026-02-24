export const packagesData = [
    {
        id: 1,
        slug: 'munnar-tea-gardens-escape',
        title: 'Munnar Tea Gardens Escape',
        location: 'Munnar',
        duration: '3 Days / 2 Nights',
        price: '8,500',
        image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=800',
        featured: true,
        overview: 'Experience the breathtaking beauty of Munnar, a majestic hill station at the confluence of three mountain streams. Known for its endless expanse of tea plantations, pristine valleys, and exotic flora and fauna, this 3-day getaway is the perfect retreat into nature.',
        itinerary: [
            {
                day: 1,
                title: 'Arrival in Kochi & Travel to Munnar',
                description: 'Pick up from Cochin Airport / Ernakulam Railway Station. Drive to Munnar (approx 4 hours). En route, enjoy scenic waterfalls and lush green landscapes. Check-in to your resort and relax. Evening at leisure.'
            },
            {
                day: 2,
                title: 'Munnar Sightseeing',
                description: 'After breakfast, proceed for a full day of local sightseeing. Visit Mattupetty Dam, Echo Point, and the Kundale Lake. In the afternoon, visit Rajamalai (Eravikulam National Park) to spot the rare Nilgiri Tahr. Return to hotel for overnight stay.'
            },
            {
                day: 3,
                title: 'Departure',
                description: 'After breakfast, check out from the resort and drive back to Kochi for your onward journey, carrying wonderful memories.'
            }
        ],
        inclusions: [
            'Accommodation in a premium resort/hotel',
            'Daily breakfast',
            'Private A/C vehicle for transfers and sightseeing',
            'Toll, parking, and driver allowances'
        ],
        exclusions: [
            'Airfare/Train fare',
            'Entry fees to monuments and parks',
            'Meals other than mentioned',
            'Any personal expenses'
        ],
        notes: [
            'Check-in time is 2:00 PM and Check-out is 11:00 AM.',
            'Rates are subject to change during peak season.',
            'Eravikulam National Park remains closed during calving season (Feb-March).'
        ]
    },
    {
        id: 2,
        slug: 'alleppey-houseboat-cruise',
        title: 'Alleppey Houseboat Cruise',
        location: 'Alleppey',
        duration: '2 Days / 1 Night',
        price: '5,000',
        image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&q=80&w=800',
        featured: false,
        overview: 'Drift along the serene backwaters of Alleppey in a traditional Kerala Houseboat. Experience the unique lifestyle of the backwater villages, savor authentic Kerala cuisine prepared on board, and witness a spectacular sunset over the tranquil waters.',
        itinerary: [
            {
                day: 1,
                title: 'Embarkation at Alleppey',
                description: 'Board your private houseboat at 12:00 Noon. Begin your cruise through the winding canals and Vembanad Lake. Enjoy a traditional Kerala lunch on board. Evening tea/coffee with snacks. Cruise halts at 5:30 PM for the night.'
            },
            {
                day: 2,
                title: 'Morning Cruise & Departure',
                description: 'Wake up early to catch the beautiful sunrise over the backwaters. Enjoy a brief morning cruise followed by a hearty breakfast. Check out by 9:00 AM.'
            }
        ],
        inclusions: [
            'Exclusive houseboat for 1 night',
            'All meals on board (Lunch, Dinner, Breakfast)',
            'Welcome drink and evening snacks',
            'A/C operates in the bedroom from 9 PM to 6 AM'
        ],
        exclusions: [
            'Transportation to the boarding point',
            'Beverages and extra meals',
            'Tips and personal expenses'
        ],
        notes: [
            'Houseboats are stationary from 5:30 PM to 8:00 AM next day due to Govt regulations.',
            'Premium houseboats with full-time A/C are available at an extra cost.'
        ]
    },
    {
        id: 3,
        slug: 'wayanad-nature-retreat',
        title: 'Wayanad Nature Retreat',
        location: 'Wayanad',
        duration: '4 Days / 3 Nights',
        price: '11,200',
        image: 'https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&q=80&w=800',
        featured: false,
        overview: 'Escape to the pristine hills of Wayanad, a haven for nature lovers and adventure enthusiasts. Explore ancient caves, magnificent waterfalls, and dense forests teeming with wildlife in this comprehensive 4-day tour.',
        itinerary: [
            {
                day: 1,
                title: 'Arrival in Calicut & Transfer to Wayanad',
                description: 'Arrive at Calicut Airport/Railway Station. Drive to Wayanad via the picturesque Thamarassery Churam (ghat road) with 9 hairpin bends. Check-in to your resort. Visit Pookode Lake in the evening.'
            },
            {
                day: 2,
                title: 'Historical & Natural Wonders',
                description: 'Visit the ancient Edakkal Caves (requires a moderate trek). Afternoon visit to the Soochipara Waterfalls. Return to the resort.'
            },
            {
                day: 3,
                title: 'Wildlife & Scenic Beauty',
                description: 'Morning safari at the Muthanga Wildlife Sanctuary. Later, visit the Banasura Sagar Dam, the largest earth dam in India, and enjoy optional boating.'
            },
            {
                day: 4,
                title: 'Departure',
                description: 'After breakfast, check out from the resort. If time permits, visit the Lakkidi View Point before driving back to Calicut for your departure.'
            }
        ],
        inclusions: [
            '3 Nights accommodation in Wayanad',
            'Daily breakfast',
            'Private A/C vehicle from Calicut',
            'Driver allowances and toll charges'
        ],
        exclusions: [
            'Entrance fees and safari charges',
            'Meals other than breakfast',
            'Any flight/train tickets'
        ],
        notes: [
            'Edakkal Caves are closed on Mondays.',
            'Muthanga Wildlife Sanctuary safaris are subject to availability and weather conditions.'
        ]
    },
    {
        id: 4,
        slug: 'cochin-heritage-walk',
        title: 'Cochin Heritage Walk',
        location: 'Kochi',
        duration: '1 Day',
        price: '2,500',
        image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&q=80&w=800',
        featured: false,
        overview: 'Discover the rich historical tapestry of Fort Kochi and Mattancherry. Walk through streets echoing with the colonial past of the Portuguese, Dutch, and British, and witness the iconic Chinese Fishing Nets.',
        itinerary: [
            {
                day: 1,
                title: 'Explore Fort Kochi & Mattancherry',
                description: 'Start your walking tour at the Chinese Fishing Nets. Visit the St. Francis Church, Santa Cruz Basilica, and the vibrant streets of Fort Kochi. Proceed to Mattancherry to visit the Dutch Palace and the Jewish Synagogue. End the day with a stroll through Jew Town.'
            }
        ],
        inclusions: [
            'Guided walking tour',
            'Bottled water',
            'Tuk-tuk ride between Fort Kochi and Mattancherry if needed'
        ],
        exclusions: [
            'Entrance fees to monuments',
            'Meals and snacks',
            'Transportation to Fort Kochi'
        ],
        notes: [
            'The Jewish Synagogue is closed on Fridays, Saturdays, and Jewish holidays.',
            'Dutch Palace is closed on Fridays.'
        ]
    },
    {
        id: 5,
        slug: 'thekkady-wildlife-safari',
        title: 'Thekkady Wildlife Safari',
        location: 'Thekkady',
        duration: '2 Days / 1 Night',
        price: '6,800',
        image: 'https://images.unsplash.com/photo-1588880625902-690a6a382e7e?auto=format&fit=crop&q=80&w=800',
        featured: true,
        overview: 'Immerse yourself in the wild beauty of Periyar National Park. This short trip offers the perfect mix of wildlife spotting, spice plantation tours, and an authentic experience of Kerala’s rich biodiversity.',
        itinerary: [
            {
                day: 1,
                title: 'Arrival in Thekkady',
                description: 'Drive from Kochi/Munnar to Thekkady. Check-in to your hotel. In the afternoon, enjoy a scenic boat cruise on Periyar Lake to spot wild elephants and other animals. Evening free for a spice plantation visit or watching a traditional Kathakali performance.'
            },
            {
                day: 2,
                title: 'Morning Trek & Departure',
                description: 'Optional early morning jungle trek or elephant ride. After breakfast, check out and proceed to your next destination.'
            }
        ],
        inclusions: [
            '1 Night accommodation in Thekkady',
            'Breakfast',
            'Private A/C vehicle for transfers'
        ],
        exclusions: [
            'Boating tickets at Periyar Lake',
            'Entrance fees and optional activity charges',
            'Lunch and Dinner'
        ],
        notes: [
            'Boating tickets should be booked in advance as they sell out quickly.',
            'Activities like Elephant rides and Jungle Patrols are subject to availability.'
        ]
    },
    {
        id: 6,
        slug: 'kumarakom-backwater-bliss',
        title: 'Kumarakom Backwater Bliss',
        location: 'Kumarakom',
        duration: '3 Days / 2 Nights',
        price: '9,500',
        image: 'https://images.unsplash.com/photo-1592667362846-5be81a30f14d?auto=format&fit=crop&q=80&w=800',
        featured: false,
        overview: 'Relax in the sleepy village of Kumarakom, located on the banks of Vembanad Lake. Experience world-class resorts, Ayurvedic therapies, and the famous Kumarakom Bird Sanctuary in this deeply rejuvenating trip.',
        itinerary: [
            {
                day: 1,
                title: 'Arrival in Kumarakom',
                description: 'Drive from Kochi Airport to Kumarakom. Check into a beautiful backwater resort. Spend the day relaxing by the lake. Optional sunset canoe ride.'
            },
            {
                day: 2,
                title: 'Bird Sanctuary & Village Walk',
                description: 'Early morning visit to the Kumarakom Bird Sanctuary to spot migratory birds. Return for breakfast. Afternoon village walk to see local life, toddy tapping, and coir making. Enjoy an Ayurvedic massage at the resort.'
            },
            {
                day: 3,
                title: 'Departure',
                description: 'After breakfast, enjoy the calm morning surroundings. Check out and drive back to Kochi.'
            }
        ],
        inclusions: [
            '2 Nights stay in a premium backwater resort',
            'Daily breakfast',
            'A/C sedan for transfers'
        ],
        exclusions: [
            'Ayurvedic spa treatments',
            'Entrance fee for the bird sanctuary',
            'Canoe ride charges'
        ],
        notes: [
            'Best time to visit the Bird Sanctuary is between June and August for resident birds, and November to March for migratory birds.',
            'Ayurvedic sessions should be booked directly with the resort in advance.'
        ]
    }
];
