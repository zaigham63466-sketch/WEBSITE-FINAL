export interface Tour {
  id: string;
  name: string;
  category: 'trek' | 'expedition' | 'valley' | 'ski' | 'cultural';
  description: string;
  duration: string;
  durationDays: number;
  altitude: string;
  altitudeMeters: number;
  difficulty: 'Leisure' | 'Easy' | 'Moderate' | 'Challenging' | 'Expert';
  bestSeason: string;
  price: number;
  originalPrice?: number;
  tags: string[];
  image: string;
}

export const tours: Tour[] = [
  {
    "id": "k2-base-camp",
    "name": "K2 Base Camp Trek",
    "category": "trek",
    "description": "Trek up the massive Baltoro Glacier into the heart of the Karakoram. This demanding route offers fit hikers direct views of K2.",
    "duration": "16 Days",
    "durationDays": 16,
    "altitude": "5,150m",
    "altitudeMeters": 5150,
    "difficulty": "Expert",
    "bestSeason": "June to September",
    "price": 2200,
    "tags": [
      "snow-peaks",
      "camping",
      "photography"
    ],
    "image": "/images/k2 base camp trek.jpeg",
    "originalPrice": 2650
  },
  {
    "id": "gondogoro-la",
    "name": "K2 & Gondogoro La Trek",
    "category": "trek",
    "description": "Complete the ultimate Karakoram circuit by trekking up the Baltoro Glacier to K2, then crossing the high Gondogoro La pass into Hushe.",
    "duration": "20 days",
    "durationDays": 20,
    "altitude": "5,585m",
    "altitudeMeters": 5585,
    "difficulty": "Expert",
    "bestSeason": "Jul\u2013Aug",
    "price": 2400,
    "tags": [
      "snow-peaks",
      "camping",
      "photography"
    ],
    "image": "/images/gondogoro la trek..jpeg",
    "originalPrice": 2900
  },
  {
    "id": "snow-lake",
    "name": "Snow Lake & Hispar La Trek",
    "category": "trek",
    "description": "Traverse the massive Biafo and Hispar glaciers. This remote, demanding ice trek crosses the 5,151m Hispar La and ends in the Hunza Valley.",
    "duration": "21 days",
    "durationDays": 21,
    "altitude": "5,151m",
    "altitudeMeters": 5151,
    "difficulty": "Expert",
    "bestSeason": "Jul\u2013Aug",
    "price": 2500,
    "tags": [
      "snow-peaks",
      "camping"
    ],
    "image": "https://hunzaguidespakistan.com/wp-content/uploads/2021/12/Trekking-on-Biafo-Glacier-Snow-Lake-Trek.jpg",
    "originalPrice": 3000
  },
  {
    "id": "fairy-meadows",
    "name": "Fairy Meadows & Nanga Parbat Base Camp",
    "category": "trek",
    "description": "Hike to a beautiful alpine pasture directly beneath the massive north face of Nanga Parbat. This short trek is perfect for beginners.",
    "duration": "7 days",
    "durationDays": 7,
    "altitude": "3,967m",
    "altitudeMeters": 3967,
    "difficulty": "Moderate",
    "bestSeason": "May\u2013Oct",
    "price": 2200,
    "tags": [
      "green-valleys",
      "camping",
      "photography"
    ],
    "image": "https://www.jackandjilltravel.com/wp-content/uploads/2024/02/P8100236-2-scaled.jpg",
    "originalPrice": 2650
  },
  {
    "id": "rakaposhi-bc",
    "name": "Rakaposhi Base Camp Trek",
    "category": "trek",
    "description": "A short, rewarding trek in the Nagar Valley near Hunza. Fit beginners can do this in 5 days starting from Gilgit.",
    "duration": "5 days",
    "durationDays": 5,
    "altitude": "3,700m",
    "altitudeMeters": 3800,
    "difficulty": "Moderate",
    "bestSeason": "Jun\u2013Sep",
    "price": 1600,
    "tags": [
      "snow-peaks",
      "camping"
    ],
    "image": "/images/rakaposhi base camp trek.jpeg",
    "originalPrice": 1950
  },
  {
    "id": "rush-lake",
    "name": "Rush Lake Alpine Trek",
    "category": "trek",
    "description": "Cross rough glaciers and steep alpine pastures to reach one of the world's highest lakes, hidden deep in the Nagar Valley.",
    "duration": "10 days",
    "durationDays": 10,
    "altitude": "5,098m",
    "altitudeMeters": 4694,
    "difficulty": "Challenging",
    "bestSeason": "Jul\u2013Sep",
    "price": 1800,
    "tags": [
      "snow-peaks",
      "camping",
      "photography"
    ],
    "image": "/images/Rush Lake Alpine Trek.jpeg",
    "originalPrice": 2200
  },
  {
    "id": "buddha-ringchan-trek",
    "name": "Buddha Rock & Ringchan Trail",
    "category": "trek",
    "description": "Explore Skardu's ancient Buddhist history and hike steep, panoramic trails above the valley on this active two-day local tour.",
    "duration": "2 days",
    "durationDays": 2,
    "altitude": "2,800m",
    "altitudeMeters": 2500,
    "difficulty": "Moderate",
    "bestSeason": "Apr\u2013Nov",
    "price": 350,
    "tags": [
      "culture",
      "photography"
    ],
    "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiZUtwYKniALKRH_X2dpfzbol7JIDYGuYTF6sTnqfuZwhGXwIRcuAMMCBOL0lEgJFzfWnCtPhRJGD5TO1y7p62DTAQd8gfI-h-V3uYoFonnNt8bV7zEFZ_2aNhClEsGcqCvKi8l95_VcZ0/s1600/Menthal+Rock+Budha.JPG",
    "originalPrice": 450
  },
  {
    "id": "k2-expedition",
    "name": "K2 Expedition (8,611m)",
    "category": "expedition",
    "description": "K2, Central Karakoram. A highly technical, extreme-altitude expedition on the Abruzzi Spur, designed only for experienced, self-sufficient high-altitude mountaineers.",
    "duration": "60 days",
    "durationDays": 60,
    "altitude": "8,611m",
    "altitudeMeters": 8611,
    "difficulty": "Expert",
    "bestSeason": "Jun\u2013Aug",
    "price": 24000,
    "tags": [
      "snow-peaks"
    ],
    "image": "https://adventureguide.com.pk/wp-content/uploads/2026/04/K2-trek-and-Gandagoro-7--1024x521.webp",
    "originalPrice": 28800
  },
  {
    "id": "broad-peak",
    "name": "Broad Peak Expedition (8,051m)",
    "category": "expedition",
    "description": "Broad Peak, Karakoram. A challenging yet accessible 8,000m expedition via the West Ridge, ideal for experienced high-altitude mountaineers seeking a major summit.",
    "duration": "50 days",
    "durationDays": 50,
    "altitude": "8,051m",
    "altitudeMeters": 8051,
    "difficulty": "Expert",
    "bestSeason": "Jun\u2013Jul",
    "price": 16000,
    "tags": [
      "snow-peaks"
    ],
    "image": "/images/Broad Peak Expedition.jpeg",
    "originalPrice": 19200
  },
  {
    "id": "gasherbrum-i",
    "name": "Gasherbrum I Expedition (8,080m)",
    "category": "expedition",
    "description": "Hidden Peak, Karakoram. A highly technical, extreme-altitude expedition via the Japanese Couloir, meant only for highly experienced 8,000m mountaineers.",
    "duration": "50 days",
    "durationDays": 50,
    "altitude": "8,080m",
    "altitudeMeters": 8080,
    "difficulty": "Expert",
    "bestSeason": "Jun\u2013Aug",
    "price": 14000,
    "tags": [
      "snow-peaks"
    ],
    "image": "https://summitk2.com/wp-content/uploads/2024/02/gasherbrum-i-expedition-Pakistan.jpeg",
    "originalPrice": 16800
  },
  {
    "id": "gasherbrum-ii",
    "name": "Gasherbrum II Expedition (8,035m)",
    "category": "expedition",
    "description": "Climb the stunning Southwest Ridge of Gasherbrum II, widely considered the most accessible 8,000m peak in the remote Karakoram range.",
    "duration": "45 days",
    "durationDays": 45,
    "altitude": "8,035m",
    "altitudeMeters": 8035,
    "difficulty": "Expert",
    "bestSeason": "Jun\u2013Jul",
    "price": 14000,
    "tags": [
      "snow-peaks"
    ],
    "image": "/images/Gasherbrum II Expedition.jpeg",
    "originalPrice": 16800
  },
  {
    "id": "spantik-expedition",
    "name": "Spantik Peak Expedition (7,027m)",
    "category": "expedition",
    "description": "Known as Golden Peak, this is the perfect, accessible 7,000m expedition to build your high-altitude experience in the Karakoram range.",
    "duration": "28 days",
    "durationDays": 28,
    "altitude": "7,027m",
    "altitudeMeters": 7027,
    "difficulty": "Expert",
    "bestSeason": "Jun\u2013Aug",
    "price": 6500,
    "tags": [
      "snow-peaks"
    ],
    "image": "https://hunzaguidespakistan.com/wp-content/uploads/2022/02/Spantik-expedition-7027m.jpg",
    "originalPrice": 7800
  },
  {
    "id": "nanga-parbat-exp",
    "name": "Nanga Parbat Expedition (8,126m)",
    "category": "expedition",
    "description": "An elite, technical expedition to the summit of the world's ninth-highest peak, strictly designed for highly experienced high-altitude mountaineers.",
    "duration": "50 days",
    "durationDays": 50,
    "altitude": "8,126m",
    "altitudeMeters": 8126,
    "difficulty": "Expert",
    "bestSeason": "Jun\u2013Aug",
    "price": 14000,
    "tags": [
      "snow-peaks"
    ],
    "image": "/images/Nanga Parbat Expedition.jpeg",
    "originalPrice": 16800
  },
  {
    "id": "skardu-valley",
    "name": "Skardu Valley Explorer",
    "category": "valley",
    "description": "A comprehensive cultural and sightseeing journey through the heart of Baltistan, perfect for families and travelers seeking spectacular scenery without strenuous trekking.",
    "duration": "10 days",
    "durationDays": 10,
    "altitude": "2,500m",
    "altitudeMeters": 2500,
    "difficulty": "Easy",
    "bestSeason": "Apr\u2013Oct",
    "price": 850,
    "tags": [
      "green-valleys",
      "culture",
      "photography"
    ],
    "image": "/images/Skardu Valley Explorer.jpeg",
    "originalPrice": 1050
  },
  {
    "id": "hunza-valley",
    "name": "Hunza Valley Cultural Tour",
    "category": "valley",
    "description": "A spectacular journey along the Karakoram Highway into the heart of Hunza, blending ancient mountain culture with world-famous alpine scenery.",
    "duration": "7 days",
    "durationDays": 7,
    "altitude": "2,400m",
    "altitudeMeters": 2400,
    "difficulty": "Easy",
    "bestSeason": "Apr\u2013Oct",
    "price": 950,
    "tags": [
      "green-valleys",
      "culture"
    ],
    "image": "https://cdn-blog.zameen.com/blog/wp-content/uploads/2020/01/Cover-29-01.jpg",
    "originalPrice": 1150
  },
  {
    "id": "deosai",
    "name": "Deosai Plateau & Sheosar Lake Safari",
    "category": "valley",
    "description": "A rugged 4x4 jeep safari into the \"Land of Giants,\" camping on one of the world's highest alpine plateaus among wildflowers and wildlife.",
    "duration": "5 days",
    "durationDays": 5,
    "altitude": "4,114m",
    "altitudeMeters": 4114,
    "difficulty": "Moderate",
    "bestSeason": "Jun\u2013Sep",
    "price": 750,
    "tags": [
      "green-valleys",
      "photography"
    ],
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR08Iwkm-8IEQHGQeT-n5he3419e0xVuGPkWfaopd49As89xUnw71XGs70&s=10",
    "originalPrice": 900
  },
  {
    "id": "naltar-valley",
    "name": "Naltar Valley Emerald Lakes",
    "category": "valley",
    "description": "A thrilling 4x4 adventure into a hidden, pine-forested valley famous for its vivid, multi-colored alpine lakes and dramatic Karakoram scenery.",
    "duration": "4 days",
    "durationDays": 4,
    "altitude": "2,900m",
    "altitudeMeters": 2900,
    "difficulty": "Easy",
    "bestSeason": "May\u2013Oct",
    "price": 650,
    "tags": [
      "green-valleys"
    ],
    "image": "/images/Naltar Valley Lakes.jpeg",
    "originalPrice": 800
  },
  {
    "id": "phander-valley",
    "name": "Phander Lake & Ghizer Valley",
    "category": "valley",
    "description": "A peaceful journey through the lush, off-the-beaten-path Ghizer District, famous for its turquoise lakes, world-class trout fishing, and vibrant autumn foliage.",
    "duration": "5 days",
    "durationDays": 5,
    "altitude": "2,800m",
    "altitudeMeters": 2800,
    "difficulty": "Easy",
    "bestSeason": "May\u2013Oct",
    "price": 1200,
    "tags": [
      "green-valleys",
      "culture"
    ],
    "image": "/images/Phander Lake.jpeg",
    "originalPrice": 1450
  },
  {
    "id": "bilamik-valley",
    "name": "Bilamik Valley Discovery",
    "category": "valley",
    "description": "Venture off the beaten path into the hidden, pine-scented meadows of Bilamik, a pristine alpine sanctuary tucked away in the Rondu District.",
    "duration": "4 days",
    "durationDays": 4,
    "altitude": "2,800m",
    "altitudeMeters": 2800,
    "difficulty": "Easy",
    "bestSeason": "May\u2013Oct",
    "price": 600,
    "tags": [
      "green-valleys",
      "camping",
      "photography"
    ],
    "image": "/images/Bilamik Valley.jpeg",
    "originalPrice": 750
  },
  {
    "id": "tormik-valley",
    "name": "Tormik Valley Alpine Escape",
    "category": "valley",
    "description": "Discover Baltistan's best-kept secret on a rugged camping adventure into Tormik Valley, famous for its dramatic granite cliffs and traditional village culture.",
    "duration": "4 days",
    "durationDays": 4,
    "altitude": "2,900m",
    "altitudeMeters": 2900,
    "difficulty": "Easy",
    "bestSeason": "May\u2013Oct",
    "price": 550,
    "tags": [
      "green-valleys",
      "homestay",
      "culture"
    ],
    "image": "/images/Tormik Valley.jpeg",
    "originalPrice": 700
  },
  {
    "id": "haramosh-kutawal",
    "name": "Haramosh Valley & Kutawal Lake",
    "category": "valley",
    "description": "A moderate, multi-day trekking adventure through lush alpine forests to the stunning, turquoise waters of Kutawal Lake, guarded by the towering Haramosh Peak.",
    "duration": "7 days",
    "durationDays": 7,
    "altitude": "3,800m",
    "altitudeMeters": 3800,
    "difficulty": "Moderate",
    "bestSeason": "Jun\u2013Sep",
    "price": 1100,
    "tags": [
      "green-valleys",
      "snow-peaks",
      "camping",
      "photography"
    ],
    "image": "https://northbackend.northonwheels.com/storage/uploads/kutwal-lake-haramosh-valley3.jpg",
    "originalPrice": 1350
  },
  {
    "id": "basho-valley",
    "name": "Basho Valley Pine Forest Retreat",
    "category": "valley",
    "description": "Escape the barren landscapes of Skardu for a peaceful, 3-day camping retreat hidden within the dense pine forests and lush alpine meadows of Basho Valley.",
    "duration": "3 days",
    "durationDays": 3,
    "altitude": "3,200m",
    "altitudeMeters": 3200,
    "difficulty": "Easy",
    "bestSeason": "May\u2013Oct",
    "price": 500,
    "tags": [
      "green-valleys",
      "camping",
      "photography"
    ],
    "image": "/images/Basho Valley.jpeg",
    "originalPrice": 600
  },
  {
    "id": "chunda-valley",
    "name": "Chunda Valley Panoramic Viewpoint",
    "category": "valley",
    "description": "Experience the \"Roof of Skardu\" on a relaxing overnight getaway offering spectacular bird's-eye views, lush apricot orchards, and peaceful Balti village life.",
    "duration": "2 days",
    "durationDays": 2,
    "altitude": "2,950m",
    "altitudeMeters": 2950,
    "difficulty": "Leisure",
    "bestSeason": "Apr\u2013Oct",
    "price": 60,
    "tags": [
      "green-valleys",
      "photography",
      "culture"
    ],
    "image": "https://www.apricottours.pk/wp-content/uploads/2024/06/153009984_213922410482100_210234.jpg",
    "originalPrice": 80
  },
  {
    "id": "hussain-abad-waterfall",
    "name": "Hussain Abad Waterfall Day Tour",
    "category": "valley",
    "description": "Take a scenic, half-day excursion to the roaring mountain cascades and rocky cliffs of Hussain Abad, nestled just outside Skardu city.",
    "duration": "1 day",
    "durationDays": 1,
    "altitude": "2,350m",
    "altitudeMeters": 2350,
    "difficulty": "Leisure",
    "bestSeason": "Apr\u2013Oct",
    "price": 50,
    "tags": [
      "green-valleys",
      "photography"
    ],
    "image": "/images/Hussain Abad Waterfall.jpeg",
    "originalPrice": 60
  },
  {
    "id": "sarfaranga-desert",
    "name": "Sarfaranga Cold Desert & Stargazing Safari",
    "category": "valley",
    "description": "Experience the thrill of a 4x4 dune safari and camp under the stars in one of the world\u2019s highest cold deserts.",
    "duration": "2 days",
    "durationDays": 2,
    "altitude": "2,450m",
    "altitudeMeters": 2450,
    "difficulty": "Easy",
    "bestSeason": "Apr\u2013Nov",
    "price": 120,
    "tags": [
      "camping",
      "photography"
    ],
    "image": "/images/Sarfaranga Cold Desert.jpeg",
    "originalPrice": 150
  },
  {
    "id": "katpana-desert",
    "name": "Katpana Desert & Indus Sunset Tour",
    "category": "valley",
    "description": "Experience the surreal beauty of one of the world's highest cold deserts, watching the sun set over sweeping white sand and snow-capped peaks.",
    "duration": "1 day",
    "durationDays": 1,
    "altitude": "2,220m",
    "altitudeMeters": 2220,
    "difficulty": "Leisure",
    "bestSeason": "Year-round",
    "price": 60,
    "tags": [
      "photography",
      "camping"
    ],
    "image": "/images/Katpana Desert.jpeg",
    "originalPrice": 80
  },
  {
    "id": "khamosh-waterfall",
    "name": "Khamosh Waterfall & Kharmang Valley",
    "category": "valley",
    "description": "Journey deep into the untouched Kharmang Valley to discover the magical mist of Khamosh Waterfall, a hidden gem surrounded by wildflower meadows.",
    "duration": "2 days",
    "durationDays": 2,
    "altitude": "2,400m",
    "altitudeMeters": 2400,
    "difficulty": "Easy",
    "bestSeason": "May\u2013Sep",
    "price": 150,
    "tags": [
      "green-valleys",
      "photography"
    ],
    "image": "/images/Khamosh Waterfall.jpeg",
    "originalPrice": 180
  },
  {
    "id": "manthokha-waterfall",
    "name": "Manthokha Waterfall & Trout Valley",
    "category": "valley",
    "description": "Relax by the spectacular 180-foot Manthokha Waterfall and enjoy fresh, locally farmed trout on this peaceful overnight getaway into the Kharmang Valley.",
    "duration": "2 days",
    "durationDays": 2,
    "altitude": "2,300m",
    "altitudeMeters": 2300,
    "difficulty": "Leisure",
    "bestSeason": "May\u2013Oct",
    "price": 130,
    "tags": [
      "green-valleys",
      "photography",
      "culture"
    ],
    "image": "/images/Manthokha Waterfall.jpeg",
    "originalPrice": 160
  },
  {
    "id": "nangma-valley",
    "name": "Nangma Valley & Amin Brakk Spire Trek",
    "category": "valley",
    "description": "Discover the \"Yosemite of Pakistan\" on this highly rewarding trek, surrounded by massive granite spires and lush alpine meadows.",
    "duration": "8 days",
    "durationDays": 8,
    "altitude": "4,200m",
    "altitudeMeters": 4200,
    "difficulty": "Moderate",
    "bestSeason": "Jun\u2013Sep",
    "price": 1400,
    "tags": [
      "snow-peaks",
      "camping",
      "photography"
    ],
    "image": "https://gcp-na-images.contentstack.com/v3/assets/bltea6093859af6183b/blt8c7847d632dfe308/6998c4be07a30dccfa77ccf0/Worlds-Greatest-Places-2025-NangmaValleyTrek.jpg?branch=production",
    "originalPrice": 1700
  },
  {
    "id": "minimerg-domail",
    "name": "Minimerg & Domail Valley (Astore)",
    "category": "valley",
    "description": "Journey into the secluded, pristine heart of the Astore District to discover the lush green meadows of Minimerg and the famous Rainbow Lake.",
    "duration": "5 days",
    "durationDays": 5,
    "altitude": "2,840m",
    "altitudeMeters": 2840,
    "difficulty": "Easy",
    "bestSeason": "Jun\u2013Sep",
    "price": 800,
    "tags": [
      "green-valleys",
      "camping",
      "photography"
    ],
    "image": "https://upload.wikimedia.org/wikipedia/commons/6/61/Minimarg%2C_Kashmir.jpg",
    "originalPrice": 1000
  },
  {
    "id": "chutroon-hot-springs",
    "name": "Chutroon Thermal Springs & Shigar",
    "category": "valley",
    "description": "Relax in therapeutic, mineral-rich hot springs hidden deep in the Basha Valley, and explore the ancient royal heritage of Shigar.",
    "duration": "3 days",
    "durationDays": 3,
    "altitude": "2,600m",
    "altitudeMeters": 2600,
    "difficulty": "Leisure",
    "bestSeason": "Apr\u2013Nov",
    "price": 120,
    "tags": [
      "green-valleys",
      "culture"
    ],
    "image": "/images/Chutroon Thermal Springs.jpeg",
    "originalPrice": 150
  },
  {
    "id": "naltar-ski",
    "name": "Naltar Ski Tour & Alpine Backcountry",
    "category": "ski",
    "description": "Experience Pakistan\u2019s oldest and most authentic ski resort. This trip is perfect for skiers seeking rugged mountain pistes and uncrowded alpine backcountry.",
    "duration": "7 days",
    "durationDays": 7,
    "altitude": "3,200m",
    "altitudeMeters": 3200,
    "difficulty": "Moderate",
    "bestSeason": "Dec\u2013Feb",
    "price": 1200,
    "tags": [
      "skiing",
      "snow-peaks",
      "camping"
    ],
    "image": "https://upload.wikimedia.org/wikipedia/commons/5/56/Naltar_Slopy_Lands.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
    "originalPrice": 1450
  },
  {
    "id": "deosai-powder",
    "name": "Deosai High-Altitude Powder Descent",
    "category": "ski",
    "description": "Embark on a massive, expedition-style backcountry ski traverse across the desolate, snowbound, 4,000-meter-high plains of the Deosai National Park.",
    "duration": "10 days",
    "durationDays": 10,
    "altitude": "4,114m",
    "altitudeMeters": 4114,
    "difficulty": "Challenging",
    "bestSeason": "Jan\u2013Mar",
    "price": 2100,
    "tags": [
      "skiing",
      "snow-peaks",
      "camping"
    ],
    "image": "https://evk2pakistan.org/wp-content/uploads/2023/04/Immagine9.jpg",
    "originalPrice": 2550
  },
  {
    "id": "hispar-ski",
    "name": "Hispar Glacier Ski Traverse",
    "category": "ski",
    "description": "An extreme, 14-day backcountry ski expedition across the Karakoram's longest glacial system, traversing Snow Lake and the 5,150m Hispar La.",
    "duration": "14 days",
    "durationDays": 14,
    "altitude": "5,150m",
    "altitudeMeters": 5150,
    "difficulty": "Expert",
    "bestSeason": "Dec\u2013Mar",
    "price": 3500,
    "tags": [
      "skiing",
      "snow-peaks",
      "camping"
    ],
    "image": "/images/Hispar Glacier Ski.jpeg",
    "originalPrice": 4200
  },
  {
    "id": "hunza-heritage",
    "name": "Hunza Heritage & Homestay Tour",
    "category": "cultural",
    "description": "Immerse yourself in the rich history of the Karakoram. This tour combines ancient mountain forts with authentic Wakhi homestays in Upper Hunza.",
    "duration": "6 days",
    "durationDays": 6,
    "altitude": "2,400m",
    "altitudeMeters": 2400,
    "difficulty": "Easy",
    "bestSeason": "Apr\u2013Oct",
    "price": 1100,
    "tags": [
      "culture",
      "homestay"
    ],
    "image": "https://hunzaadventuretours.com/wp-content/uploads/2022/04/Baltit_Fort_-Hunza-Valley.jpg",
    "originalPrice": 1350
  },
  {
    "id": "royal-baltistan",
    "name": "Royal Baltistan Heritage Tour",
    "category": "cultural",
    "description": "Step back in time to explore the ancient kingdoms of Baltistan. This tour takes you through centuries-old palaces, historic wooden mosques, and traditional Balti villages.",
    "duration": "6 days",
    "durationDays": 6,
    "altitude": "2,500m",
    "altitudeMeters": 2500,
    "difficulty": "Easy",
    "bestSeason": "May\u2013Sep",
    "price": 1200,
    "tags": [
      "culture",
      "heritage"
    ],
    "image": "/images/Royal Baltistan Heritage Tour.jpeg",
    "originalPrice": 1450
  },
  {
    "id": "gilgit-bazaar",
    "name": "Gilgit Silk Route Bazaar & Kargha Buddha",
    "category": "cultural",
    "description": "Discover the historical crossroads of the Silk Route in a single day, exploring ancient Buddhist carvings, suspension bridges, and vibrant bazaars.",
    "duration": "1 day",
    "durationDays": 1,
    "altitude": "1,500m",
    "altitudeMeters": 1500,
    "difficulty": "Leisure",
    "bestSeason": "Apr\u2013Oct",
    "price": 70,
    "tags": [
      "culture"
    ],
    "image": "/images/Gilgit Silk Route Bazaar.jpeg",
    "originalPrice": 90
  },
  {
    "id": "nowruz-festival",
    "name": "Nowruz Spring Festival Tour",
    "category": "cultural",
    "description": "Celebrate the arrival of spring in the Karakoram. Witness thrilling traditional polo, ancient sword dances, and the spectacular blooming of apricot orchards.",
    "duration": "5 days",
    "durationDays": 5,
    "altitude": "2,400m",
    "altitudeMeters": 2400,
    "difficulty": "Easy",
    "bestSeason": "Mar",
    "price": 1350,
    "tags": [
      "culture",
      "festival"
    ],
    "image": "/images/Nowruz Spring Festival.jpeg",
    "originalPrice": 1650
  },
  {
    "id": "kharpocho-organic-village",
    "name": "Kharpocho Fort & Nansoq Organic Village",
    "category": "cultural",
    "description": "Combine 16th-century royal history with eco-friendly Balti culture on this scenic walking tour to Pakistan\u2019s first fully organic, roadless village.",
    "duration": "1 day",
    "durationDays": 1,
    "altitude": "2,400m",
    "altitudeMeters": 2400,
    "difficulty": "Easy",
    "bestSeason": "Apr\u2013Nov",
    "price": 80,
    "tags": [
      "culture",
      "homestay",
      "heritage"
    ],
    "image": "/images/Nansoq Organic Village.jpeg",
    "originalPrice": 100
  },
  {
    "id": "masur-rock",
    "name": "Masur Rock Ancient Inscriptions",
    "category": "cultural",
    "description": "Uncover the ancient Buddhist heritage of Baltistan on a leisure day-tour exploring mysterious petroglyphs and majestic mountain viewpoints.",
    "duration": "1 day",
    "durationDays": 1,
    "altitude": "2,300m",
    "altitudeMeters": 2300,
    "difficulty": "Leisure",
    "bestSeason": "Apr\u2013Nov",
    "price": 60,
    "tags": [
      "culture",
      "heritage"
    ],
    "image": "/images/Masur Rock .jpeg",
    "originalPrice": 80
  },
  {
    "id": "free-musical-night",
    "name": "Balti Folk Musical Night & Cultural Campfire",
    "category": "cultural",
    "description": "Immerse yourself in the soulful rhythms of Baltistan with an unforgettable evening of live traditional music, folk dancing, and a campfire BBQ.",
    "duration": "1 day",
    "durationDays": 1,
    "altitude": "2,250m",
    "altitudeMeters": 2250,
    "difficulty": "Leisure",
    "bestSeason": "Year-round",
    "price": 150,
    "tags": [
      "culture",
      "festival"
    ],
    "image": "/images/Balti Folk Musical Night.jpeg",
    "originalPrice": 180
  },
  {
    "id": "kalash-festival",
    "name": "Kalash Valley Chilam Joshi Festival",
    "category": "cultural",
    "description": "Witness the vibrant arrival of spring in the remote Kalash valleys, experiencing the unique music, dance, and colorful heritage of a UNESCO-recognized culture.",
    "duration": "7 days",
    "durationDays": 7,
    "altitude": "1,900m",
    "altitudeMeters": 1900,
    "difficulty": "Easy",
    "bestSeason": "May",
    "price": 1450,
    "tags": [
      "culture",
      "festival",
      "homestay",
      "photography"
    ],
    "image": "/images/Chilam Joshi Festival.jpeg",
    "originalPrice": 1750
  },
  {
    "id": "shimshal-valley-ski",
    "name": "Shimshal Valley Backcountry Ski & Lupka La Traverse",
    "category": "ski",
    "description": "Embark on a raw, human-powered backcountry ski expedition in the legendary \"Valley of Mountaineers,\" traversing vast glaciers and high-altitude passes.",
    "duration": "14 days",
    "durationDays": 14,
    "altitude": "5,790m",
    "altitudeMeters": 5790,
    "difficulty": "Extreme",
    "bestSeason": "Feb-Apr",
    "price": 3200,
    "tags": [
      "Ski Touring",
      "Winter",
      "Extreme",
      "Glacier"
    ],
    "image": "/images/Shimshal Valley Ski.jpeg",
    "originalPrice": 3850
  }
];

export type TravelerType = 'solo' | 'family' | 'women';

export const testimonials: { id: string; quote: string; name: string; flag: string; trek: string; type: TravelerType }[] = [
  { id: '1', quote: 'The most transformative experience of my life. The team\'s expertise on K2 made me feel safe every step of the way.', name: 'Sarah Mitchell', flag: '🇺🇸', trek: 'K2 Base Camp', type: 'solo' },
  { id: '2', quote: 'Hunza Valley stole my heart. The hospitality, the views, the food — I\'m already planning my return trip.', name: 'Thomas Weber', flag: '🇩🇪', trek: 'Hunza Valley Tour', type: 'family' },
  { id: '3', quote: 'Professional, well-organized, and genuinely passionate. A world-class operation.', name: 'Yuki Tanaka', flag: '🇯🇵', trek: 'Gondogoro La', type: 'solo' },
  { id: '4', quote: 'I came for the mountains but stayed for the people. Pakistan is the most welcoming country I\'ve visited.', name: 'Emma Larsson', flag: '🇸🇪', trek: 'Fairy Meadows', type: 'women' },
  { id: '5', quote: 'From logistics to guides to food — everything was exceptional. Can\'t wait for Broad Peak next year.', name: 'Marco Rossi', flag: '🇮🇹', trek: 'Snow Lake', type: 'solo' },
  { id: '6', quote: 'I traveled solo and never once felt unsafe. The guides treated me like family and the other trekkers became lifelong friends.', name: 'Claire Dubois', flag: '🇨🇦', trek: 'K2 Base Camp', type: 'solo' },
  { id: '7', quote: 'We brought our two teenagers and it was the adventure of a lifetime. The team adapted the pace perfectly for our family.', name: 'James & Priya Patel', flag: '🇬🇧', trek: 'Hunza Valley Tour', type: 'family' },
  { id: '8', quote: 'As a woman traveling alone in Gilgit-Baltistan, I felt completely welcomed and respected. The female guide from Shimshal was incredible.', name: 'Astrid Andersen', flag: '🇳🇴', trek: 'Fairy Meadows', type: 'women' },
  { id: '9', quote: 'Our kids still talk about the porters who taught them Balti songs around the campfire. A genuine cultural exchange.', name: 'Chen Wei & Family', flag: '🇸🇬', trek: 'Skardu Valley', type: 'family' },
  { id: '10', quote: 'The women-led trek program gave me confidence I didn\'t know I had. Standing at Concordia with my all-women group was unforgettable.', name: 'Fatou Diallo', flag: '🇫🇷', trek: 'K2 Base Camp', type: 'women' },
];

export const galleryItems = [
  // --- TREKS ---
  { id: '1', title: 'K2 Base Camp Trek', location: 'Concordia', category: 'treks', height: 'h-80', image: '/images/k2 base camp trek.jpeg' },
  { id: '2', title: 'K2 & Gondogoro La Trek', location: 'Gondogoro La Pass', category: 'treks', height: 'h-48', image: '/images/gondogoro la trek..jpeg' },
  { id: '3', title: 'Snow Lake & Hispar La Trek', location: 'Biafo Glacier', category: 'treks', height: 'h-64', image: 'https://hunzaguidespakistan.com/wp-content/uploads/2021/12/Trekking-on-Biafo-Glacier-Snow-Lake-Trek.jpg' },
  { id: '4', title: 'Fairy Meadows & Nanga Parbat Base Camp', location: 'Diamer', category: 'treks', height: 'h-56', image: 'https://www.jackandjilltravel.com/wp-content/uploads/2024/02/P8100236-2-scaled.jpg' },
  { id: '5', title: 'Rakaposhi Base Camp Trek', location: 'Nagar Valley', category: 'treks', height: 'h-52', image: '/images/rakaposhi base camp trek.jpeg' },

  // --- EXPEDITIONS ---
  { id: '6', title: 'K2 Expedition (8,611m)', location: 'Central Karakoram', category: 'expeditions', height: 'h-96', image: 'https://adventureguide.com.pk/wp-content/uploads/2026/04/K2-trek-and-Gandagoro-7--1024x521.webp' },
  { id: '7', title: 'Broad Peak Expedition (8,051m)', location: 'Broad Peak', category: 'expeditions', height: 'h-44', image: '/images/Broad Peak Expedition.jpeg' },
  { id: '8', title: 'Gasherbrum II Expedition (8,035m)', location: 'Gasherbrum Ridge', category: 'expeditions', height: 'h-56', image: '/images/Gasherbrum II Expedition.jpeg' },
  { id: '9', title: 'Spantik Peak Expedition (7,027m)', location: 'Golden Peak', category: 'expeditions', height: 'h-52', image: 'https://hunzaguidespakistan.com/wp-content/uploads/2022/02/Spantik-expedition-7027m.jpg' },
  { id: '10', title: 'Nanga Parbat Expedition (8,126m)', location: 'Rupal Face', category: 'expeditions', height: 'h-72', image: '/images/Nanga Parbat Expedition.jpeg' },

  // --- VALLEYS ---
  { id: '11', title: 'Skardu Valley Explorer', location: 'Baltistan', category: 'valleys', height: 'h-52', image: '/images/Skardu Valley Explorer.jpeg' },
  { id: '12', title: 'Hunza Valley Cultural Tour', location: 'Upper Hunza', category: 'valleys', height: 'h-48', image: 'https://cdn-blog.zameen.com/blog/wp-content/uploads/2020/01/Cover-29-01.jpg' },
  { id: '13', title: 'Naltar Valley Emerald Lakes', location: 'Naltar Valley', category: 'valleys', height: 'h-72', image: '/images/Naltar Valley Lakes.jpeg' },
  { id: '14', title: 'Phander Lake & Ghizer Valley', location: 'Ghizer Valley', category: 'valleys', height: 'h-56', image: '/images/Phander Lake.jpeg' },
  { id: '15', title: 'Bilamik Valley Discovery', location: 'Rondu District', category: 'valleys', height: 'h-80', image: '/images/Bilamik Valley.jpeg' },
  { id: '16', title: 'Tormik Valley Alpine Escape', location: 'Tormik', category: 'valleys', height: 'h-44', image: '/images/Tormik Valley.jpeg' },
  { id: '17', title: 'Haramosh Valley & Kutawal Lake', location: 'Haramosh Valley', category: 'valleys', height: 'h-60', image: 'https://northbackend.northonwheels.com/storage/uploads/kutwal-lake-haramosh-valley3.jpg' },

  // --- PEOPLE / CULTURAL ---
  { id: '18', title: 'Gilgit Silk Route Bazaar & Kargha Buddha', location: 'Gilgit Bazaar', category: 'people', height: 'h-96', image: '/images/Gilgit Silk Route Bazaar.jpeg' },
  { id: '19', title: 'Nowruz Spring Festival Tour', location: 'Gilgit-Baltistan', category: 'people', height: 'h-48', image: '/images/Nowruz Spring Festival.jpeg' },
  { id: '20', title: 'Kalash Valley Chilam Joshi Festival', location: 'Kalash Valley', category: 'people', height: 'h-72', image: '/images/Chilam Joshi Festival.jpeg' },
  { id: '21', title: 'Traditional Karakoram Cultural Heritage', location: 'Baltistan', category: 'people', height: 'h-64', image: '/images/cultural.jpeg' },

  // --- CAMPING ---
  { id: '22', title: 'Basecamp Night', location: 'K2 Base Camp', category: 'camping', height: 'h-52', image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&q=80&auto=format&fit=crop' },
  { id: '23', title: 'High-Altitude Karakoram Camp', location: 'Karakoram', category: 'camping', height: 'h-72', image: 'https://northbackend.northonwheels.com/storage/uploads/image_5694.jpg' },
  { id: '24', title: 'Hunza Alpine Camping', location: 'Hunza Valley', category: 'camping', height: 'h-64', image: 'https://greenpaktourism.com/images/hunza-valley.webp' },
  { id: '25', title: 'Skardu Starry Wilderness Camp', location: 'Skardu', category: 'camping', height: 'h-48', image: 'https://exploringpakistan.pk/wp-content/uploads/2024/12/Skardu-Trip-Image-5.jpg' },

  // --- MOUNTAINS ---
  { id: '26', title: 'K2 & Gondogoro La Trek', location: 'Gondogoro La Pass', category: 'mountains', height: 'h-48', image: '/images/gondogoro la trek..jpeg' },
  { id: '27', title: 'Snow Lake & Hispar La Trek', location: 'Biafo Glacier', category: 'mountains', height: 'h-64', image: 'https://hunzaguidespakistan.com/wp-content/uploads/2021/12/Trekking-on-Biafo-Glacier-Snow-Lake-Trek.jpg' },
  { id: '28', title: 'Fairy Meadows & Nanga Parbat Base Camp', location: 'Diamer', category: 'mountains', height: 'h-56', image: 'https://www.jackandjilltravel.com/wp-content/uploads/2024/02/P8100236-2-scaled.jpg' },
  { id: '29', title: 'Rakaposhi Base Camp Trek', location: 'Nagar Valley', category: 'mountains', height: 'h-80', image: '/images/rakaposhi base camp trek.jpeg' },
  { id: '30', title: 'K2 Base Camp Trek', location: 'Concordia', category: 'mountains', height: 'h-80', image: '/images/k2 base camp trek.jpeg' },
  { id: '31', title: 'Broad Peak Expedition', location: 'Broad Peak (8,051m)', category: 'mountains', height: 'h-44', image: '/images/Broad Peak Expedition.jpeg' },
  { id: '32', title: 'Gasherbrum I Expedition', location: 'Hidden Peak (8,080m)', category: 'mountains', height: 'h-44', image: 'https://summitk2.com/wp-content/uploads/2024/02/gasherbrum-i-expedition-Pakistan.jpeg' },
  { id: '33', title: 'Skardu Valley Explorer', location: 'Skardu Valley', category: 'mountains', height: 'h-52', image: '/images/Skardu Valley Explorer.jpeg' },
  { id: '34', title: 'Hunza Valley Cultural Tour', location: 'Hunza Valley', category: 'mountains', height: 'h-60', image: 'https://cdn-blog.zameen.com/blog/wp-content/uploads/2020/01/Cover-29-01.jpg' },

  // --- WILDLIFE ---
  { id: '35', title: 'Himalayan Wildlife Encounter', location: 'Karakoram Range', category: 'wildlife', height: 'h-72', image: 'https://preview.redd.it/animals-scenery-northern-pakistan-v0-k42wy09mliv81.png?width=640&crop=smart&auto=webp&s=c4f05d6c21e777671241c064112d79dabeff857e' },
  { id: '36', title: 'Karakoram Ibex & Fauna', location: 'Khunjerab National Park', category: 'wildlife', height: 'h-56', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_D3WhggEhKlZ3Kq6NFVTltEH4zVQMSqdfz6rQgRteXg-05082OYNc2Fo&s=10' },
  { id: '37', title: 'High-Altitude Alpine Wildlife', location: 'Deosai Plains', category: 'wildlife', height: 'h-64', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3t-kr_QNYqVUdz2PO0MvD6ASSPFkVjq6IS7mB1S35KepnaNi0cx3vJTTt&s=10' },
  { id: '38', title: 'Northern Pakistan Mountain Wildlife', location: 'Gilgit-Baltistan', category: 'wildlife', height: 'h-60', image: 'https://islamabadpost.com.pk/wp-content/uploads/2024/07/52-1.jpg' },

  // --- DRONE ---
  { id: '39', title: 'Glacier Aerial Panorama', location: 'Northern Pakistan', category: 'drone', height: 'h-80', image: '/images/Drone Shot.jpeg' },
  { id: '40', title: 'Karakoram Highway Aerial Flight', location: 'Gilgit-Baltistan', category: 'drone', height: 'h-64', image: 'https://videocdn.cdnpk.net/videos/1e778f85-830a-404b-a5d4-d552502f60d9/horizontal/thumbnails/large.jpg?semt=ais_hybrid&item_id=206505&w=740&q=80' },
  { id: '41', title: 'Hunza River & Karakoram Range Aerial', location: 'Upper Hunza', category: 'drone', height: 'h-72', image: 'https://media.gettyimages.com/id/1516940976/video/aerial-drone-view-of-hunza-river-and-karakoram-range-mountain-along-the-road-through.jpg?s=640x640&k=20&c=pqWxu2-DANrW_t9Ar3HgY7R0m5-X67UqRVe9c3U8t0s=' },
  { id: '42', title: 'Skardu Valley Aerial View', location: 'Skardu', category: 'drone', height: 'h-60', image: 'https://i.ytimg.com/vi/7EaO6BAVzNs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDUexUiLBR9uUYcU4dROyjN5II8sA' },
];

export const galleryCategories = ['all', 'mountains', 'expeditions', 'treks', 'valleys', 'camping', 'people', 'wildlife', 'drone'];

export const stats = [
  { label: 'Years of Experience', value: 15, suffix: '+' },
  { label: 'Expeditions Led', value: 200, suffix: '+' },
  { label: 'Happy Trekkers', value: 5000, suffix: '+' },
  { label: 'Safety Record', value: 100, suffix: '%' },
];

export interface Founder {
  name: string;
  role: string;
  bio?: string;
  image?: string;
}

export const founders: Founder[] = [
  {
    name: 'Ali Hussain',
    role: 'Founder',
    bio: 'Dedicated to leading authentic mountain journeys across the Karakoram and sharing the grandeur of Gilgit-Baltistan with travelers worldwide.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&auto=format&fit=crop',
  },
  {
    name: 'Ali Muhammad',
    role: 'Co-Founder',
    bio: 'Committed to seamless travel operations, cultural immersion, and delivering unforgettable expedition experiences across Pakistan.',
  },
];

export const businessInfo = {
  travelAgency: 'Musa Don',
  culturalMusicPartner: 'Sakhawat',
  instagram: 'saqlain_nadeem3',
  whatsapp: '+92 311 1129977',
};
