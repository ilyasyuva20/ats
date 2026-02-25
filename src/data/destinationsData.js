import thekkadySafariImg from '../assets/thekkady_safari.jpg';
import kumarakomBackwatersImg from '../assets/kumarakom_backwaters.jpg';

export const destinationsData = [
    {
        id: 1,
        slug: 'munnar',
        name: 'Munnar',
        desc: 'Famous for its tea estates, exotic lush greenery and craggy peaks.',
        image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=1200',
        overview: 'Munnar rises as three mountain streams merge - Mudrapuzha, Nallathanni and Kundala. 1,600 m above sea level, this hill station was once the summer resort of the erstwhile British Government in South India. Sprawling tea plantations, picturesque towns, winding lanes and holiday facilities make this a popular resort town. Among the exotic flora found in the forests and grasslands here is the Neelakurinji. This flower which bathes the hills in blue every twelve years, will bloom next in 2030. Munnar also has the highest peak in South India, Anamudi, which towers over 2,695 m.',
        howToReach: {
            air: 'The nearest airport is Cochin International Airport, which is about 110 kilometers away (a 3.5-hour drive) from Munnar.',
            road: 'Munnar is well connected by both National Highways and State Highways. Regular KSRTC and private bus services are available from major cities in Kerala and Tamil Nadu. The drive to Munnar itself is incredibly scenic.',
            rail: 'The nearest railway station is Aluva, located about 110 km away. Alternatively, Ernakulam Railway Station is about 130 km away. Both are well connected to major cities across India.'
        },
        attractions: [
            {
                name: 'Eravikulam National Park',
                description: 'Home to the endangered Nilgiri Tahr, this park offers stunning views of the tea plantations and rolling hills.',
                image: 'https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&q=80&w=600'
            },
            {
                name: 'Mattupetty Dam',
                description: 'A beautiful concrete gravity dam surrounded by lush green valleys, popular for speed boating and horse riding.',
                image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=600'
            },
            {
                name: 'Tea Museum',
                description: 'Housed at the Nallathanni Estate, this museum showcases the genesis and growth of tea plantations in Munnar.',
                image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&q=80&w=600'
            },
            {
                name: 'Echo Point',
                description: 'Known for its natural echo phenomenon, situated at the confluence of three mountain streams.',
                image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&q=80&w=600'
            }
        ]
    },
    {
        id: 2,
        slug: 'alleppey',
        name: 'Alleppey (Alappuzha)',
        desc: 'Known as the Venice of the East, famous for houseboat cruises.',
        image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&q=80&w=1200',
        overview: 'Referred to as the Venice of the East, Alappuzha has always enjoyed an important place in the maritime history of Kerala. Today, it is famous for its boat races, backwater holidays, beaches, marine products and coir industry. Alappuzha Beach is a popular picnic spot. The pier, which extends into the sea here, is over 137 years old. Entertainment facilities at the Vijaya Beach Park add to the attraction of the beach. There is also an old lighthouse nearby which is greatly fascinating to visitors.',
        howToReach: {
            air: 'Cochin International Airport, situated at a distance of 85 km, is the closest airport to Alleppey.',
            road: 'Alleppey is accessible by NH-66 which passes through the city, connecting it to all major towns along the coast of Kerala.',
            rail: 'Alappuzha Railway Station is well connected within the city limits and has regular trains connecting to major cities like Kochi, Trivandrum, Chennai, and Mumbai.'
        },
        attractions: [
            {
                name: 'Vembanad Lake',
                description: 'The longest lake in India, central to Kerala Backwaters tourism, famous for houseboat cruising.',
                image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&q=80&w=600'
            },
            {
                name: 'Alappuzha Beach',
                description: 'A scenic white sand beach with a 137-year-old pier extending into the Arabian Sea.',
                image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=600'
            },
            {
                name: 'Krishnapuram Palace',
                description: 'An 18th-century palace built by Anizham Thirunal Marthanda Varma featuring traditional Kerala architecture and ancient murals.',
                image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&q=80&w=600'
            },
            {
                name: 'Pathiramanal Island',
                description: 'A small island in Vembanad Lake, accessible only by boat, making it a haven for hundreds of rare migratory birds.',
                image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=600'
            }
        ]
    },
    {
        id: 3,
        slug: 'wayanad',
        name: 'Wayanad',
        desc: 'A rural district known for its spice plantations and wildlife.',
        image: 'https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&q=80&w=1200',
        overview: 'Wayanad is a gorgeous verdant district in Kerala. Clean and pristine, enchanting and hypnotizing, this land is full of history and culture. Located at a distance of 76 km from the sea shores of Calicut, this hill station is full of plantations, forests and wildlife. Wayanad hills are contiguous to Mudumalai in Tamil Nadu and Bandipur in Karnataka, thus forming a vast land mass for the wild animals to move about in their most natural abode.',
        howToReach: {
            air: 'The nearest airport is Calicut International Airport (Kozhikode), located about 90 km away from Wayanad.',
            road: 'Wayanad is well connected by road. Visitors can enjoy a spectacular drive via the Thamarassery Churam, a mountain pass with 9 hairpin bends overlooking the lush landscape.',
            rail: 'Kozhikode Railway Station is the nearest railhead, located approximately 110 km from Wayanad.'
        },
        attractions: [
            {
                name: 'Edakkal Caves',
                description: 'Famous for its ancient petroglyphs tracing back to the Neolithic age, requiring an adventurous trek to reach.',
                image: 'https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&q=80&w=600'
            },
            {
                name: 'Banasura Sagar Dam',
                description: 'The largest earth dam in India, offering spectacular views of the Banasura hills and thrilling boating experiences.',
                image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&q=80&w=600'
            },
            {
                name: 'Soochipara Waterfalls',
                description: 'A three-tiered waterfall surrounded by deciduous, evergreen and montane forests, ideal for rock climbing and swimming.',
                image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=600'
            },
            {
                name: 'Muthanga Wildlife Sanctuary',
                description: 'A dense forest reserve contiguous with Bandipur and Mudumalai, famous for its wild elephant population.',
                image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&q=80&w=600'
            }
        ]
    },
    {
        id: 4,
        slug: 'kochi',
        name: 'Kochi (Cochin)',
        desc: 'A vibrant city situated on the south-west coast of the Indian peninsula.',
        image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&q=80&w=1200',
        overview: 'Popularly known as the Queen of the Arabian Sea, Cochin (Kochi) is one of the finest natural harbours in the world and is the gateway to the enchanting backwaters of Kerala. Kochi is the business capital of Kerala and is one of the fastest growing cities in India. It is comprised of a group of islands scattered along the Vembanad Lake. An interesting ensemble of various cultures like the Portuguese, Jewish, English, French, Dutch and Chinese, Kochi is a tapestry of vivid and varied colors, which attracts scores of tourist from far and wide to its shores. The majestic houseboats that glide across the water form another dramatic spectacle that not many cities in India can boast.',
        howToReach: {
            air: 'The Cochin International Airport Limited (CIAL) is located at a distance of 22Km from the city of Cochin. The airport offers daily flight service to various international as well as domestic destinations.',
            road: 'Cochin is well connected to all important cities in India through a wide network of Highways and roads. NH 17 and NH 47 passes through the city. KSRTC and private buses ply to different parts of the state.',
            rail: 'Cochin has two main railroad stations: Ernakulam Town Station (North) and Ernakulam Junction Station (South). Regular train services are available to almost all Indian Cities.'
        },
        attractions: [
            {
                name: 'Fort Kochi & Chinese Fishing Nets',
                description: 'Take a stroll through the colonial streets of Fort Kochi and witness the iconic, elegant Chinese fishing nets silhouetted against the sunset.',
                image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&q=80&w=600'
            },
            {
                name: 'Mattancherry Palace (Dutch Palace)',
                description: 'A Portuguese palace featuring Kerala murals depicting Hindu temple art, portraits and exhibits of the Rajas of Kochi.',
                image: 'https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&q=80&w=600'
            },
            {
                name: 'Jewish Synagogue',
                description: 'The oldest active synagogue in the Commonwealth of Nations, located in Jew Town, famous for its hand-painted tiles and Belgian chandeliers.',
                image: 'https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&q=80&w=600'
            },
            {
                name: 'Marine Drive',
                description: 'A picturesque promenade in Ernakulam featuring beautiful backwater views, shopping options, and boat rides.',
                image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&q=80&w=600'
            }
        ]
    },
    {
        id: 5,
        slug: 'thekkady',
        name: 'Thekkady',
        desc: 'Home to the country\'s largest Tiger Reserve - Periyar.',
        image: thekkadySafariImg,
        overview: 'The very sound of the word Thekkady conjures up images of elephants, unending chains of hills and spice scented plantations. In the crisp, cool air of the Western Ghats you will experience the most enchanting holiday. With the sanctuary\'s rich biodiversity and the scenic Periyar Lake, Thekkady is a nature lover\'s dream. It is famously home to the Periyar National Park, one of the most prominent tiger reserves in India.',
        howToReach: {
            air: 'Madurai Airport in Tamil Nadu is about 136 km away, while Cochin International Airport is approximately 190 km away.',
            road: 'Thekkady is easily accessible by road from major cities in Kerala and Tamil Nadu. The beautifully scenic drive passes through expansive spice plantations.',
            rail: 'Kottayam is the nearest railway station, located about 114 km away from Thekkady.'
        },
        attractions: [
            {
                name: 'Periyar National Park',
                description: 'A renowned tiger reserve and elephant habitat. The boat safari on Periyar Lake is the best way to observe wildlife in their natural habitat.',
                image: thekkadySafariImg
            },
            {
                name: 'Spice Plantations',
                description: 'Guided tours through lush plantations growing cardamom, pepper, vanilla, and cinnamon.',
                image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=600'
            },
            {
                name: 'Kadathanadan Kalari Centre',
                description: 'Experience authentic Kalaripayattu, the ancient martial art of Kerala, performed by highly skilled practitioners.',
                image: 'https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&q=80&w=600'
            },
            {
                name: 'Elephant Junction',
                description: 'An interactive center where visitors can enjoy elephant rides, bathing them, and feeding them.',
                image: 'https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&q=80&w=600'
            }
        ]
    },
    {
        id: 6,
        slug: 'kumarakom',
        name: 'Kumarakom',
        desc: 'Set in the backdrop of Vembanad Lake, a popular tourism destination.',
        image: kumarakomBackwatersImg,
        overview: 'Kumarakom is a popular tourism destination located near the city of Kottayam, famous for its backwater tourism. It is set in the backdrop of Vembanad Lake, the largest lake in the state of Kerala. Kumarakom was the first destination in India to implement Responsible Tourism practices. It is a cluster of little islands on the Lake, and is part of the Kuttanad region. The bird sanctuary here, which is spread across 14 acres, is a favourite haunt of migratory birds and an ornithologist\'s paradise.',
        howToReach: {
            air: 'Cochin International Airport is the nearest airport, located around 85 km from Kumarakom.',
            road: 'Kumarakom is well connected to major cities in Kerala. KSRTC and private buses frequently operate from Kottayam, which is just 14 km away.',
            rail: 'Kottayam Railway station is the closest, situated approximately 16 km from Kumarakom. It connects to all major Indian cities.'
        },
        attractions: [
            {
                name: 'Kumarakom Bird Sanctuary',
                description: 'A paradise for bird watchers, hosting numerous migratory species including Siberian Storks and elegant egrets.',
                image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=600'
            },
            {
                name: 'Vembanad Lake',
                description: 'The heart of Kerala backwaters. Renting a houseboat or a canoe here is the quintessential Kumarakom experience.',
                image: kumarakomBackwatersImg
            },
            {
                name: 'Pathiramanal Island',
                description: 'A picturesque haven situated in Vembanad Lake, rich in biodiversity and accessible only by boat.',
                image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&q=80&w=600'
            },
            {
                name: 'Aruvikkuzhi Waterfall',
                description: 'Located a short distance away in Kottayam, this beautiful waterfall cascades down the mountains surrounded by rubber plantations.',
                image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=600'
            }
        ]
    }
];
