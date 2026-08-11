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
    "price": 2000,
    "tags": [
      "snow-peaks",
      "camping",
      "photography"
    ],
    "image": "https://images.unsplash.com/photo-1486911278844-a81c5267e227?w=800&q=80&auto=format&fit=crop",
    "originalPrice": 2800
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
    "price": 3300,
    "tags": [
      "snow-peaks",
      "camping",
      "photography"
    ],
    "image": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80&auto=format&fit=crop",
    "originalPrice": 4000
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
    "price": 3200,
    "tags": [
      "snow-peaks",
      "camping"
    ],
    "image": "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80&auto=format&fit=crop",
    "originalPrice": 3800
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
    "price": 899,
    "tags": [
      "green-valleys",
      "camping",
      "photography"
    ],
    "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80&auto=format&fit=crop",
    "originalPrice": 1200
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
    "price": 750,
    "tags": [
      "snow-peaks",
      "camping"
    ],
    "image": "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800&q=80&auto=format&fit=crop",
    "originalPrice": 950
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
    "price": 1850,
    "tags": [
      "snow-peaks",
      "camping",
      "photography"
    ],
    "image": "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&q=80&auto=format&fit=crop",
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
    "price": 250,
    "tags": [
      "culture",
      "photography"
    ],
    "image": "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80&auto=format&fit=crop",
    "originalPrice": 350
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
    "price": 45000,
    "tags": [
      "snow-peaks"
    ],
    "image": "https://images.unsplash.com/photo-1522163182402-834f871fd851?w=800&q=80&auto=format&fit=crop",
    "originalPrice": 50000
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
    "price": 12000,
    "tags": [
      "snow-peaks"
    ],
    "image": "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?w=800&q=80&auto=format&fit=crop",
    "originalPrice": 14000
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
    "price": 14500,
    "tags": [
      "snow-peaks"
    ],
    "image": "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800&q=80&auto=format&fit=crop",
    "originalPrice": 16500
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
    "price": 11500,
    "tags": [
      "snow-peaks"
    ],
    "image": "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?w=800&q=80&auto=format&fit=crop",
    "originalPrice": 13500
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
    "price": 6050,
    "tags": [
      "snow-peaks"
    ],
    "image": "https://images.fillout.com/798479/vhnpv1uqn8/generated-images/wPxL4L6cFgdcqhG5uNk8Z1/img_uCx2BuIEy2Bwg0Qg.jpg",
    "originalPrice": 8000
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
    "price": 18000,
    "tags": [
      "snow-peaks"
    ],
    "image": "https://images.unsplash.com/photo-1516477266410-9e3f56e57bc3?w=800&q=80&auto=format&fit=crop",
    "originalPrice": 21000
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
    "price": 980,
    "tags": [
      "green-valleys",
      "culture",
      "photography"
    ],
    "image": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80&auto=format&fit=crop",
    "originalPrice": 1200
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
    "price": 1150,
    "tags": [
      "green-valleys",
      "culture"
    ],
    "image": "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&q=80&auto=format&fit=crop",
    "originalPrice": 1400
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
    "image": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80&auto=format&fit=crop",
    "originalPrice": 950
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
    "price": 580,
    "tags": [
      "green-valleys"
    ],
    "image": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80&auto=format&fit=crop",
    "originalPrice": 750
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
    "price": 720,
    "tags": [
      "green-valleys",
      "culture"
    ],
    "image": "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&q=80&auto=format&fit=crop",
    "originalPrice": 900
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
    "price": 620,
    "tags": [
      "green-valleys",
      "camping",
      "photography"
    ],
    "image": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80&auto=format&fit=crop",
    "originalPrice": 800
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
    "price": 580,
    "tags": [
      "green-valleys",
      "homestay",
      "culture"
    ],
    "image": "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&q=80&auto=format&fit=crop",
    "originalPrice": 750
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
    "price": 1250,
    "tags": [
      "green-valleys",
      "snow-peaks",
      "camping",
      "photography"
    ],
    "image": "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&q=80&auto=format&fit=crop",
    "originalPrice": 1550
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
    "price": 480,
    "tags": [
      "green-valleys",
      "camping",
      "photography"
    ],
    "image": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80&auto=format&fit=crop",
    "originalPrice": 650
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
    "price": 320,
    "tags": [
      "green-valleys",
      "photography",
      "culture"
    ],
    "image": "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&q=80&auto=format&fit=crop",
    "originalPrice": 450
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
    "price": 120,
    "tags": [
      "green-valleys",
      "photography"
    ],
    "image": "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&q=80&auto=format&fit=crop",
    "originalPrice": 180
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
    "price": 380,
    "tags": [
      "camping",
      "photography"
    ],
    "image": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80&auto=format&fit=crop",
    "originalPrice": 500
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
    "price": 150,
    "tags": [
      "photography",
      "camping"
    ],
    "image": "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?w=800&q=80&auto=format&fit=crop",
    "originalPrice": 220
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
    "price": 290,
    "tags": [
      "green-valleys",
      "photography"
    ],
    "image": "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80&auto=format&fit=crop",
    "originalPrice": 400
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
    "price": 280,
    "tags": [
      "green-valleys",
      "photography",
      "culture"
    ],
    "image": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80&auto=format&fit=crop",
    "originalPrice": 380
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
    "price": 1350,
    "tags": [
      "snow-peaks",
      "camping",
      "photography"
    ],
    "image": "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800&q=80&auto=format&fit=crop",
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
    "price": 790,
    "tags": [
      "green-valleys",
      "camping",
      "photography"
    ],
    "image": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80&auto=format&fit=crop",
    "originalPrice": 980
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
    "price": 420,
    "tags": [
      "green-valleys",
      "culture"
    ],
    "image": "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&q=80&auto=format&fit=crop",
    "originalPrice": 550
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
    "price": 1750,
    "tags": [
      "skiing",
      "snow-peaks",
      "camping"
    ],
    "image": "https://images.fillout.com/792909/6cqckjyk3j/generated-images/wTK6EiJGhnCMDZkT7hb6Kr/img_ySCcGQNHtuILWExi.jpg",
    "originalPrice": 2200
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
    "price": 2450,
    "tags": [
      "skiing",
      "snow-peaks",
      "camping"
    ],
    "image": "https://images.fillout.com/792909/6cqckjyk3j/generated-images/1gbCWjc2qecP8XjKu7iCzU/img_v2Urr8NjztruYfnh.jpg",
    "originalPrice": 3000
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
    "price": 3950,
    "tags": [
      "skiing",
      "snow-peaks",
      "camping"
    ],
    "image": "https://images.fillout.com/792909/6cqckjyk3j/generated-images/wTodHy1xF2mhEUN7E7wCXJ/img_GphsO6IA1Sw4XHK5.jpg",
    "originalPrice": 4800
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
    "price": 950,
    "tags": [
      "culture",
      "homestay"
    ],
    "image": "https://images.fillout.com/792909/6cqckjyk3j/generated-images/i9vJxHKgc6HyAuw2e6AxrQ/img_alpgNOYOz2ffZqDB.jpg",
    "originalPrice": 1250
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
    "price": 850,
    "tags": [
      "culture",
      "heritage"
    ],
    "image": "https://images.fillout.com/792909/6cqckjyk3j/generated-images/w71RikXNMF5n78J1LjDtDT/img_NAJtFyUIKkJg-8Mv.jpg",
    "originalPrice": 1100
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
    "price": 110,
    "tags": [
      "culture"
    ],
    "image": "https://images.fillout.com/792909/6cqckjyk3j/generated-images/2up8Kr4RVjtmBuFu8mQxMF/img_J7hMtuxoDTbe4TaG.jpg",
    "originalPrice": 160
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
    "price": 680,
    "tags": [
      "culture",
      "festival"
    ],
    "image": "https://images.fillout.com/792909/6cqckjyk3j/generated-images/riFxtZcfdY8skh6nYU9teV/img_SRFdQHurQvuwvlrP.jpg",
    "originalPrice": 880
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
    "price": 140,
    "tags": [
      "culture",
      "homestay",
      "heritage"
    ],
    "image": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80&auto=format&fit=crop",
    "originalPrice": 200
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
    "price": 120,
    "tags": [
      "culture",
      "heritage"
    ],
    "image": "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80&auto=format&fit=crop",
    "originalPrice": 170
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
    "price": 80,
    "tags": [
      "culture",
      "festival"
    ],
    "image": "https://images.unsplash.com/photo-1510312305653-8ed496efae75?w=800&q=80&auto=format&fit=crop",
    "originalPrice": 150
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
    "price": 1100,
    "tags": [
      "culture",
      "festival",
      "homestay",
      "photography"
    ],
    "image": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80&auto=format&fit=crop",
    "originalPrice": 1450
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
  { id: '1', title: 'K2 at Dawn', location: 'Concordia', category: 'mountains', height: 'h-80', image: 'https://images.unsplash.com/photo-1486911278844-a81c5267e227?w=600&q=80&auto=format&fit=crop' },
  { id: '2', title: 'Hushe Bridge', location: 'Hushe Valley', category: 'treks', height: 'h-48', image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&q=80&auto=format&fit=crop' },
  { id: '3', title: 'The Elder', location: 'Askole Village', category: 'people', height: 'h-96', image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&q=80&auto=format&fit=crop' },
  { id: '4', title: 'Attabad From Above', location: 'Upper Hunza', category: 'drone', height: 'h-64', image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80&auto=format&fit=crop' },
  { id: '5', title: 'Basecamp Night', location: 'K2 Base Camp', category: 'camping', height: 'h-52', image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&q=80&auto=format&fit=crop' },
  { id: '6', title: 'Snow Leopard', location: 'Deosai Plateau', category: 'wildlife', height: 'h-72', image: 'https://images.unsplash.com/photo-1456926631375-92c8ce872def?w=600&q=80&auto=format&fit=crop' },
  { id: '7', title: 'Fairy Meadows', location: 'Diamer', category: 'valleys', height: 'h-56', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80&auto=format&fit=crop' },
  { id: '8', title: 'Summit Push', location: 'Broad Peak', category: 'expeditions', height: 'h-44', image: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?w=600&q=80&auto=format&fit=crop' },
  { id: '9', title: 'Passu Cones', location: 'Upper Hunza', category: 'mountains', height: 'h-64', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80&auto=format&fit=crop' },
  { id: '10', title: "Eagle's Nest", location: 'Hunza', category: 'valleys', height: 'h-52', image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&q=80&auto=format&fit=crop' },
  { id: '11', title: 'Camp Kitchen', location: 'Baltoro', category: 'camping', height: 'h-48', image: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?w=600&q=80&auto=format&fit=crop' },
  { id: '12', title: 'Balti Women', location: 'Skardu', category: 'people', height: 'h-72', image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80&auto=format&fit=crop' },
  { id: '13', title: 'Deosai Plains', location: 'Deosai', category: 'valleys', height: 'h-56', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80&auto=format&fit=crop' },
  { id: '14', title: 'Trango Towers', location: 'Baltoro', category: 'mountains', height: 'h-80', image: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=600&q=80&auto=format&fit=crop' },
  { id: '15', title: 'River Crossing', location: 'Shigar', category: 'treks', height: 'h-44', image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&q=80&auto=format&fit=crop' },
  { id: '16', title: 'Sunset Flight', location: 'Skardu', category: 'drone', height: 'h-60', image: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?w=600&q=80&auto=format&fit=crop' },
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
