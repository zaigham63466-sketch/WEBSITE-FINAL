// Day-by-day itineraries, highlights, inclusions, and exclusions for all tours

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
}

export interface TourDetails {
  itinerary: ItineraryDay[];
  included: string[];
  excluded: string[];
  highlights: string[];
}

export const defaultTourDetails: TourDetails = {
  itinerary: [
    { day: 1, title: 'Arrival & Welcome', description: 'Arrive at destination, meet the local expedition crew, and conduct equipment check and tour orientation.' },
    { day: 2, title: 'Guided Mountain Exploration', description: 'Experience the core landscapes, cultural landmarks, and natural wonders of the region.' },
    { day: 3, title: 'Departure & Farewell', description: 'Concluding morning excursions, local souvenir exploration, and return journey.' },
  ],
  included: [
    'Professional English-speaking mountain and cultural guide',
    'Private local transportation throughout the tour',
    'Hotel / camp accommodation with daily meals',
    'All relevant national park and heritage site entry passes',
    'First aid and emergency support',
  ],
  excluded: [
    'International flights and Pakistan visa',
    'Personal gear and equipment',
    'Mandatory travel and medical insurance',
    'Tips for guide, drivers, and porters',
    'Personal expenses and souvenirs',
  ],
  highlights: [
    'Authentic mountain landscapes and pristine Karakoram views',
    'Deep cultural immersion and local Balti / Hunza hospitality',
    'Expert local guidance and safe logistics',
  ],
};

export const tourDetails: Record<string, TourDetails> = {
  "k2-base-camp": {
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival in Islamabad & Expedition Briefing",
        "description": "Arrive at Islamabad International Airport. Transfer to hotel for official permit clearance and detailed expedition briefing with your mountain guide."
      },
      {
        "day": 2,
        "title": "Scenic Flight to Skardu (2,230m)",
        "description": "Board a morning flight past Nanga Parbat to Skardu. Transfer to hotel, conduct gear inspection, and enjoy an acclimatization walk around Skardu bazaar."
      },
      {
        "day": 3,
        "title": "Drive Skardu to Askole (3,000m)",
        "description": "Embark on an exhilarating 6-7 hour 4x4 Jeep journey along the Indus and roaring Braldu river gorges to Askole, the final inhabited outpost."
      },
      {
        "day": 4,
        "title": "Trek Askole to Korofon & Jola (3,200m)",
        "description": "Begin trekking across the snout of the Biafo Glacier, continuing through the Braldu valley to the confluence campsite at Jola."
      },
      {
        "day": 5,
        "title": "Trek Jola to Paiju (3,450m)",
        "description": "Hike through rocky river canyons and gentle ascents beneath the imposing granite needles of Paiju Peak, reaching Paiju camp."
      },
      {
        "day": 6,
        "title": "Acclimatization & Rest Day at Paiju",
        "description": "A dedicated rest day for high-altitude acclimatization. Porters prepare traditional flatbread while trekkers hike to surrounding ridge viewpoints."
      },
      {
        "day": 7,
        "title": "Trek Paiju to Khoburtse (3,930m)",
        "description": "Step onto the terminal moraine of the mighty Baltoro Glacier. Traverse lateral ridges with dramatic views of Great Trango and Uli Biaho."
      },
      {
        "day": 8,
        "title": "Trek Khoburtse to Urdukas (4,050m)",
        "description": "Ascend the lateral moraine to the historic grassy campsite of Urdukas, perched on rock terraces overlooking the glacier and Trango Towers."
      },
      {
        "day": 9,
        "title": "Trek Urdukas to Goro II (4,380m)",
        "description": "Trek across the center of the Baltoro Glacier over white ice and moraine ripples, with Masherbrum (7,821m) looming to the right."
      },
      {
        "day": 10,
        "title": "Trek Goro II to Concordia (4,600m)",
        "description": "Reach legendary Concordia, where the Baltoro and Godwin-Austen glaciers meet. Stand surrounded by K2, Broad Peak, and the Gasherbrums."
      },
      {
        "day": 11,
        "title": "Concordia to K2 Base Camp (5,150m) & Gilkey Memorial",
        "description": "Early morning trek up the Godwin-Austen Glacier past Broad Peak Base Camp to K2 Base Camp. Visit the Gilkey Memorial before returning to Concordia."
      },
      {
        "day": 12,
        "title": "Exploration & Contingency Day at Concordia",
        "description": "A buffer day to savor 360-degree Karakoram panoramas, capture sunrise over K2, or explore Broad Peak Base Camp in optimal weather."
      },
      {
        "day": 13,
        "title": "Trek Concordia to Goro I / Urdukas",
        "description": "Begin descending the Baltoro Glacier, experiencing shifting light and fresh perspectives on the Cathedrals and granite spires."
      },
      {
        "day": 14,
        "title": "Trek Urdukas to Paiju / Jola",
        "description": "Descend off the glacier moraine back onto valley trails, following the Braldu River down toward the lower valley camps."
      },
      {
        "day": 15,
        "title": "Trek to Askole & 4x4 Drive to Skardu",
        "description": "Complete the final trekking leg to Askole roadhead, meet awaiting 4x4 Jeeps, and drive back to Skardu for hot showers and a celebration dinner."
      },
      {
        "day": 16,
        "title": "Flight to Islamabad & International Departure",
        "description": "Transfer to Skardu Airport for your morning flight to Islamabad. Debrief at Alpine Club headquarters and transfer for your homeward flight."
      }
    ],
    "included": [
      "Round-trip domestic flights (Islamabad \u21c4 Skardu) with road backup",
      "Licensed English-speaking high-altitude mountain guide & Balti mountain sirdar",
      "Dedicated high-altitude cooking team providing 3 hot, nutritious meals daily",
      "All camping equipment: high-altitude expedition tents, foam mattresses, mess tent, and toilet tent",
      "Porters for personal gear allowance (up to 15 kg per trekker)",
      "All government trekking permits, environmental fees, and Central Karakoram National Park charges",
      "Private 4x4 Jeep transfers between Skardu and Askole roadhead",
      "Emergency satellite communication and comprehensive medical first-aid kit"
    ],
    "excluded": [
      "International flights to and from Islamabad",
      "Pakistan tourist visa fees and processing charges",
      "Mandatory high-altitude emergency medical and evacuation insurance",
      "Personal trekking gear, sleeping bag (-20\u00b0C rated), and mountaineering clothing",
      "Tips and gratuities for mountain guides, cooks, and porters",
      "Personal expenses, laundry, and extra hotel room service outside the package"
    ],
    "highlights": [
      "Stand at K2 Base Camp (5,150m) and visit the historic Art Gilkey Memorial",
      "Camp at Concordia \u2014 the fabled 'Throne Room of the Mountain Gods'",
      "Trek along the 63km Baltoro Glacier beneath Trango Towers, Cathedral, and Muztagh Tower",
      "Witness four 8,000m peaks from one amphitheater: K2, Broad Peak, Gasherbrum I, and Gasherbrum II"
    ]
  },
  "gondogoro-la": {
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival in Islamabad",
        "description": "Welcome at Islamabad Airport, transfer to hotel, document processing, and expedition briefing."
      },
      {
        "day": 2,
        "title": "Fly Islamabad to Skardu",
        "description": "Scenic flight over Nanga Parbat to Skardu. Afternoon equipment check and briefing with guide team."
      },
      {
        "day": 3,
        "title": "Drive Skardu to Askole (3,000m)",
        "description": "Drive through the dramatic Shigar and Braldu valleys by 4x4 jeep to Askole village."
      },
      {
        "day": 4,
        "title": "Trek Askole to Jola (3,200m)",
        "description": "Cross the Biafo Glacier snout and trek along the Braldu River gorge to Jola campsite."
      },
      {
        "day": 5,
        "title": "Trek Jola to Paiju (3,450m)",
        "description": "Ascend along the sandy riverbeds to Paiju camp beneath Paiju Peak."
      },
      {
        "day": 6,
        "title": "Rest & Acclimatization at Paiju",
        "description": "Acclimatization day at Paiju camp. Porters bake bread for the glacier crossing."
      },
      {
        "day": 7,
        "title": "Trek Paiju to Khoburtse (3,930m)",
        "description": "Enter the Baltoro Glacier moraine with views of Trango Towers and Cathedral."
      },
      {
        "day": 8,
        "title": "Trek Khoburtse to Urdukas (4,050m)",
        "description": "Hike past the Liligo Glacier to the cliffside terraces of Urdukas camp."
      },
      {
        "day": 9,
        "title": "Trek Urdukas to Goro II (4,380m)",
        "description": "Glacier trekking across white ice fields with views of Masherbrum and Muztagh Tower."
      },
      {
        "day": 10,
        "title": "Trek Goro II to Concordia (4,600m)",
        "description": "Reach the heart of the Karakoram at Concordia beneath K2, Broad Peak, and Gasherbrum IV."
      },
      {
        "day": 11,
        "title": "Excursion to K2 Base Camp (5,150m)",
        "description": "Trek up the Godwin-Austen Glacier to K2 Base Camp and Gilkey Memorial; return to Concordia."
      },
      {
        "day": 12,
        "title": "Concordia to Ali Camp (4,800m)",
        "description": "Trek across the Upper Baltoro and Vigne Glacier toward the foot of Gondogoro Pass."
      },
      {
        "day": 13,
        "title": "Cross Gondogoro La (5,585m) to Khuspang (4,688m)",
        "description": "Midnight alpine start; ascend fixed ropes to summit Gondogoro La at sunrise for a breathtaking four-8,000er view; descend to Khuspang beneath Laila Peak."
      },
      {
        "day": 14,
        "title": "Weather Buffer / Rest Day at Khuspang",
        "description": "Flexible reserve day for weather contingency over Gondogoro La or rest facing Laila Peak."
      },
      {
        "day": 15,
        "title": "Trek Khuspang to Saicho (3,330m)",
        "description": "Trek along the Gondogoro Glacier down into green juniper forests and riverside meadows of Saicho."
      },
      {
        "day": 16,
        "title": "Trek Saicho to Hushe Village (3,050m)",
        "description": "Gentle downhill walk through farmland to picturesque Hushe village."
      },
      {
        "day": 17,
        "title": "Drive Hushe to Skardu via Khaplu",
        "description": "4x4 Jeep drive through Khaplu with a visit to historic Khaplu Palace, continuing to Skardu."
      },
      {
        "day": 18,
        "title": "Reserve Day in Skardu",
        "description": "Free day in Skardu for market exploration, local crafts, and relaxation."
      },
      {
        "day": 19,
        "title": "Flight Skardu to Islamabad",
        "description": "Morning flight back to Islamabad; debriefing at the ministry and farewell dinner."
      },
      {
        "day": 20,
        "title": "International Departure",
        "description": "Transfer to Islamabad International Airport for flight departure."
      }
    ],
    "included": [
      "Domestic flights Islamabad\u2013Skardu round-trip with road backup",
      "Licensed high-altitude mountain guide, technical safety leader & Balti sirdar",
      "Fixing ropes, safety hardware, and mountain safety team on Gondogoro Pass",
      "All meals on trek, high-altitude expedition tents, and mess facilities",
      "Porters for equipment and personal gear (up to 15 kg)",
      "Central Karakoram National Park permits and environmental royalties",
      "4x4 Jeep transfers across Askole and Hushe roadheads",
      "Satellite phone and high-altitude emergency medical kit"
    ],
    "excluded": [
      "International flights and Pakistan visa",
      "Mandatory mountain rescue and medical evacuation insurance",
      "Climbing harness, crampons, carabiners, and personal trekking gear",
      "Tips for guides, technical rope team, and porters",
      "Personal expenses in cities"
    ],
    "highlights": [
      "Traverse the iconic high-altitude mountain pass of Gondogoro La (5,585m)",
      "Unrivaled 360-degree panorama of four 8,000m peaks and Laila Peak from the pass crest",
      "Full Baltoro Glacier trek to Concordia and K2 Base Camp (5,150m)",
      "Complete traverse ending in the lush, welcoming apricot orchards of Hushe Valley"
    ]
  },
  "snow-lake": {
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival in Islamabad",
        "description": "Arrival at Islamabad Airport, transfer to hotel, documentation, and expedition briefing."
      },
      {
        "day": 2,
        "title": "Fly to Skardu",
        "description": "Scenic flight to Skardu; afternoon equipment preparation and market exploration."
      },
      {
        "day": 3,
        "title": "Drive Skardu to Askole (3,000m)",
        "description": "4x4 Jeep drive along the Braldu River gorge to the trailhead village of Askole."
      },
      {
        "day": 4,
        "title": "Trek Askole to Namla (3,400m)",
        "description": "Leave Askole and step onto the vast white ice of the Biafo Glacier to camp at Namla."
      },
      {
        "day": 5,
        "title": "Trek Namla to Mango (3,650m)",
        "description": "Trek along the lateral moraine of Biafo Glacier beneath granite spires to Mango camp."
      },
      {
        "day": 6,
        "title": "Trek Mango to Baintha (3,990m)",
        "description": "Hike past glacial lakes to the green alpine meadow camp of Baintha."
      },
      {
        "day": 7,
        "title": "Acclimatization Day at Baintha",
        "description": "Rest and acclimatization day; optional ridge hike for views of the Ogre (Baintha Brakk)."
      },
      {
        "day": 8,
        "title": "Trek Baintha to Marphogoro (4,400m)",
        "description": "Venture further up the Biafo Glacier across ice swells to Marphogoro campsite."
      },
      {
        "day": 9,
        "title": "Trek Marphogoro to Karpogoro (4,680m)",
        "description": "Trek through the upper Biafo Glacier surrounded by towering, unnamed Karakoram towers."
      },
      {
        "day": 10,
        "title": "Trek Karpogoro to Snow Lake / Hispar Base (4,770m)",
        "description": "Enter the majestic, snow-filled expanse of Lukpe Lawo (Snow Lake), one of Earth's greatest ice basins."
      },
      {
        "day": 11,
        "title": "Exploration of Snow Lake",
        "description": "Explore the vast snow bowl and prepare rope teams for crossing Hispar Pass."
      },
      {
        "day": 12,
        "title": "Cross Hispar La (5,151m) to Kani Basa (4,510m)",
        "description": "Cross the high Hispar Pass with views across both Baltistan and Hunza; descend to Kani Basa on Hispar Glacier."
      },
      {
        "day": 13,
        "title": "Trek Kani Basa to Jutmal (4,270m)",
        "description": "Traverse the lateral moraines and side glaciers of Hispar Glacier to Jutmal campsite."
      },
      {
        "day": 14,
        "title": "Trek Jutmal to Bitanmal (3,660m)",
        "description": "Hike down the valley past high alpine pastures to the grassy camp at Bitanmal."
      },
      {
        "day": 15,
        "title": "Trek Bitanmal to Hispar Village (3,200m)",
        "description": "Emerge from the glacier wilderness into the terraced fields and orchards of Hispar Village."
      },
      {
        "day": 16,
        "title": "Drive Hispar Village to Karimabad (Hunza)",
        "description": "Board 4x4 jeeps through Nagar Valley to Karimabad in central Hunza; check in to hotel."
      },
      {
        "day": 17,
        "title": "Explore Hunza Valley & Baltit Fort",
        "description": "Visit historic Baltit and Altit Forts, explore Karimabad bazaar, and watch sunset from Duikar."
      },
      {
        "day": 18,
        "title": "Drive Karimabad to Gilgit",
        "description": "Drive down the Karakoram Highway to Gilgit; visit the Kargha Buddha cliff relief."
      },
      {
        "day": 19,
        "title": "Fly Gilgit to Islamabad",
        "description": "Morning flight from Gilgit to Islamabad; transfer to hotel and free afternoon."
      },
      {
        "day": 20,
        "title": "Contingency / Sightseeing in Islamabad",
        "description": "Reserve day for flights; visit Faisal Mosque, Lok Virsa Museum, and Daman-e-Koh."
      },
      {
        "day": 21,
        "title": "International Departure",
        "description": "Transfer to Islamabad Airport for your onward international journey."
      }
    ],
    "included": [
      "Domestic flights (Islamabad\u2013Skardu and Gilgit\u2013Islamabad) with road backup",
      "Licensed high-altitude trekking guide, technical glacier leader & Balti/Hunza crew",
      "Full camping gear, mess tents, kitchen setup, and 3 hot meals daily",
      "Glacier safety equipment, ropes, and satellite communications",
      "Porters for luggage and expedition logistical support (15 kg allowance)",
      "Central Karakoram National Park permits and environmental fees",
      "Private 4x4 transportation across all road sectors",
      "Emergency medical kit and pulse oximeter monitoring"
    ],
    "excluded": [
      "International flights and Pakistan visa",
      "Mandatory mountain rescue and evacuation insurance",
      "Personal trekking and alpine gear (crampons, harness, warm sleeping bag)",
      "Tips for guides, kitchen staff, and porters",
      "Personal expenses and meals in Islamabad"
    ],
    "highlights": [
      "Traverse the 100km combined expanse of Biafo and Hispar glaciers",
      "Stand in Snow Lake (Lukpe Lawo) \u2014 a colossal 16km wide high-altitude ice basin",
      "Cross the remote and challenging Hispar La pass at 5,151m",
      "Complete the classic mountain connection from Baltistan into Hunza Valley"
    ]
  },
  "fairy-meadows": {
    "itinerary": [
      {
        "day": 1,
        "title": "Islamabad Arrival & Drive to Chilas / Gilgit",
        "description": "Meet in Islamabad and embark on the scenic drive along the Karakoram Highway / Babusar Pass to Chilas."
      },
      {
        "day": 2,
        "title": "Raikot Bridge, 4x4 Jeep to Tattu & Hike to Fairy Meadows (3,300m)",
        "description": "Drive to Raikot Bridge, board open 4x4 jeeps up the mountain track to Tattu village, and hike 3-4 hours through pine woods to Fairy Meadows."
      },
      {
        "day": 3,
        "title": "Fairy Meadows to Beyal Camp & Viewpoint",
        "description": "Trek through alpine forest to Beyal Camp (3,500m) and the Raikot Glacier viewpoint with direct vistas of Nanga Parbat."
      },
      {
        "day": 4,
        "title": "Excursion to Nanga Parbat Base Camp (3,967m)",
        "description": "Day trek across moraine ridges to Nanga Parbat Base Camp at the foot of the icy Raikot Face; return to Fairy Meadows for sunset."
      },
      {
        "day": 5,
        "title": "Exploration & Photography at Fairy Meadows",
        "description": "Enjoy reflection photography at the meadow pool, wander pine groves, or relax with locals around a cedar wood fire."
      },
      {
        "day": 6,
        "title": "Hike down to Tattu, 4x4 to Raikot Bridge & Drive to Naran / Besham",
        "description": "Descend the trail to Tattu, jeep back to Raikot Bridge on the Karakoram Highway, and drive to Naran / Besham for overnight stay."
      },
      {
        "day": 7,
        "title": "Drive to Islamabad & Departure",
        "description": "Complete the return drive to Islamabad, enjoy a farewell dinner, and transfer to airport for departure."
      }
    ],
    "included": [
      "AC private transport from Islamabad throughout the tour",
      "4x4 mountain jeep transfers between Raikot Bridge and Tattu village",
      "Traditional wooden cabin or deluxe glamping tent accommodation at Fairy Meadows",
      "All meals (breakfast, lunch, dinner) and bottled mineral water",
      "Experienced local English-speaking mountain trekking guide",
      "Fairy Meadows community fees and bridge toll taxes",
      "First aid and emergency assistance"
    ],
    "excluded": [
      "International flights and visa",
      "Travel and medical insurance",
      "Pony / horse hire for riding or personal luggage",
      "Tips for guides, drivers, and local staff",
      "Personal items and laundry"
    ],
    "highlights": [
      "Stand face-to-face with the gargantuan 4,500m Raikot Face of Nanga Parbat (8,126m)",
      "Experience the famous cliff-hugging 4x4 jeep ride from Raikot Bridge to Tattu village",
      "Camp in the idyllic wildflower meadows and pine forests of Fairy Meadows",
      "Trek past Beyal Camp and the Raikot Glacier to Nanga Parbat Base Camp (3,967m)"
    ]
  },
  "rakaposhi-bc": {
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival in Gilgit & Drive to Minapin Village (Nagar)",
        "description": "Meet in Gilgit, drive along the Karakoram Highway into Nagar Valley, and check in to a traditional guest house in Minapin (2,000m)."
      },
      {
        "day": 2,
        "title": "Trek Minapin to Tagaphari (3,260m)",
        "description": "Trek along the crest of the Minapin Glacier moraine through birch and juniper woods to the grassy campsite of Tagaphari."
      },
      {
        "day": 3,
        "title": "Day Hike to Diran Base Camp (3,700m) & Rakaposhi Ridge",
        "description": "Hike across the lateral moraine to Diran Base Camp and the high ridge for panoramic vistas of Rakaposhi's north face and Diran Peak."
      },
      {
        "day": 4,
        "title": "Trek Tagaphari to Minapin & Drive to Karimabad (Hunza)",
        "description": "Descend the scenic trail to Minapin village, enjoy a local walnut cake lunch, and drive across the river to Karimabad in Hunza."
      },
      {
        "day": 5,
        "title": "Karimabad to Gilgit & Departure",
        "description": "Explore Baltit Fort and local bazaars in the morning, drive to Gilgit Airport, and depart."
      }
    ],
    "included": [
      "All ground transportation (Gilgit to Minapin, Hunza, and return)",
      "Professional English-speaking mountain trekking guide",
      "Quality camping tents, mattresses, and mess facilities at Tagaphari",
      "Three freshly prepared meals daily during the trek",
      "Porters for luggage and camp supplies",
      "Local community and environmental fees",
      "Comprehensive first aid kit"
    ],
    "excluded": [
      "Flights to and from Gilgit",
      "Personal trekking equipment and sleeping bags",
      "Travel insurance",
      "Tips for guide and porters",
      "Personal expenses"
    ],
    "highlights": [
      "Stand directly beneath the sheer 7,788m wall of Rakaposhi and 7,266m Diran Peak",
      "Trek from historic Minapin village in Nagar along the Minapin Glacier",
      "Camp at Tagaphari (3,260m) and Diran Base Camp with direct glacier moraine views",
      "Accessible high-altitude trek suitable for active trekkers with stunning alpine scenery"
    ]
  },
  "rush-lake": {
    "itinerary": [
      {
        "day": 1,
        "title": "Islamabad Arrival & Flight to Gilgit",
        "description": "Arrive in Islamabad, take scenic flight to Gilgit, and drive to hotel in Karimabad."
      },
      {
        "day": 2,
        "title": "Drive Karimabad to Hoper Village (Nagar)",
        "description": "Short drive to Hoper Valley; explore the dramatic black gravel of Hoper (Bualtar) Glacier."
      },
      {
        "day": 3,
        "title": "Trek Hoper to Bericho Kor (3,300m)",
        "description": "Cross the Bualtar Glacier and ascend lateral moraine paths to Bericho Kor camp."
      },
      {
        "day": 4,
        "title": "Trek Bericho Kor to Chidin Harai (4,440m)",
        "description": "Climb steep alpine switchbacks through shepherd settlements to the high meadow of Chidin Harai."
      },
      {
        "day": 5,
        "title": "Trek Chidin Harai to Rush Lake (4,694m)",
        "description": "Trek across high ridges to arrive at the tranquil shores of Rush Lake beneath Rush Peak."
      },
      {
        "day": 6,
        "title": "Summit Rush Peak (5,098m) & Lake Exploration",
        "description": "Early morning ascent of Rush Peak for panoramic vistas of Spantik, Malubiting, and Hispar range; afternoon by the lake."
      },
      {
        "day": 7,
        "title": "Trek Rush Lake to Gututz (3,500m)",
        "description": "Descend through alpine pastures along the Barpu Glacier down to Gututz camp."
      },
      {
        "day": 8,
        "title": "Trek Gututz to Hoper & Drive to Hunza",
        "description": "Final trek leg back to Hoper village; transfer by vehicle to Karimabad for hotel stay."
      },
      {
        "day": 9,
        "title": "Drive Hunza to Gilgit",
        "description": "Explore Altit Fort and Ganish village before driving to Gilgit for farewell dinner."
      },
      {
        "day": 10,
        "title": "Fly Gilgit to Islamabad & Departure",
        "description": "Morning flight to Islamabad and onward international connections."
      }
    ],
    "included": [
      "Domestic flights Islamabad \u21c4 Gilgit with road backup",
      "Professional mountain trekking guide and local Nagar sirdar",
      "All camping equipment, mess tent, and 3 hot meals daily on trek",
      "Porters for luggage (up to 15 kg per trekker)",
      "Private vehicle transfers across Gilgit, Hunza, and Hoper",
      "Local government permits and trekking fees",
      "First aid and altitude monitoring"
    ],
    "excluded": [
      "International flights and visa",
      "Personal mountaineering and trekking gear",
      "Mandatory travel and evacuation insurance",
      "Tips for porters and guide crew",
      "Personal items"
    ],
    "highlights": [
      "Reach the pristine turquoise waters of Rush Lake at 4,694m",
      "Climb Rush Peak (5,098m) for a 360-degree Karakoram summit panorama",
      "Spectacular views of Spantik (Golden Peak), Malubiting, Ultar Sar, and K2 in the distance",
      "Trek across the crevassed white ice of the Barpu and Bualtar glaciers"
    ]
  },
  "buddha-ringchan-trek": {
    "itinerary": [
      {
        "day": 1,
        "title": "Manthal Buddha Rock & Sadpara Gorge Hike",
        "description": "Visit the renowned 8th-century Buddhist relief sculpture at Manthal village; hike along the Sadpara stream gorge to viewpoint."
      },
      {
        "day": 2,
        "title": "Ringchan Historic Trail & Kharpocho Vista",
        "description": "Hike the scenic Ringchan trail along the granite ridges above Skardu town, exploring ancient fortifications and water channels."
      }
    ],
    "included": [
      "Private vehicle transfers within Skardu and Manthal",
      "Expert local Balti heritage and trekking guide",
      "Archaeological site entry tickets and heritage preservation fees",
      "Traditional Balti lunch and refreshments daily",
      "First aid support"
    ],
    "excluded": [
      "Travel to and from Skardu",
      "Hotel accommodation in Skardu",
      "Personal expenses, drinks, and souvenirs",
      "Tips and gratuities for guide and driver"
    ],
    "highlights": [
      "Inspect the 8th-century Manthal Buddha Rock carving with Tibetan epigraphs",
      "Hike the ancient Ringchan royal path connecting Skardu Fort with historical valley outposts",
      "Panoramic views overlooking the Indus River, Sadpara Lake canal, and Skardu basin",
      "Led by local Balti cultural historian and guide"
    ]
  },
  "k2-expedition": {
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival in Islamabad",
        "description": "Expedition team arrival, transfer to hotel, briefing at Ministry of Tourism and Alpine Club of Pakistan."
      },
      {
        "day": 2,
        "title": "Islamabad Official Formalities",
        "description": "Government briefing, liaison officer introduction, visa validation, and cargo manifest finalization."
      },
      {
        "day": 3,
        "title": "Fly to Skardu",
        "description": "Flight over the Himalayas to Skardu; basecamp freight inspection and high-altitude food sorting."
      },
      {
        "day": 4,
        "title": "Skardu Preparation & Acclimatization",
        "description": "Expedition gear review, communication radio checks, and team acclimatization in Skardu."
      },
      {
        "day": 5,
        "title": "Drive Skardu to Askole (3,000m)",
        "description": "4x4 Jeep transfer along the Braldu gorge to Askole roadhead."
      },
      {
        "day": 6,
        "title": "Trek Askole to Jola (3,200m)",
        "description": "Trek with full porter caravan to Jola camp."
      },
      {
        "day": 7,
        "title": "Trek Jola to Paiju (3,450m)",
        "description": "Trek to Paiju camp beneath the Trango Towers."
      },
      {
        "day": 8,
        "title": "Rest & Acclimatization at Paiju",
        "description": "Porters prepare bread; climbing team conducts altitude drills."
      },
      {
        "day": 9,
        "title": "Trek Paiju to Khoburtse (3,930m)",
        "description": "Move onto the Baltoro Glacier moraine to Khoburtse camp."
      },
      {
        "day": 10,
        "title": "Trek Khoburtse to Urdukas (4,050m)",
        "description": "Trek to the green terraces of Urdukas overlooking Baltoro."
      },
      {
        "day": 11,
        "title": "Trek Urdukas to Goro II (4,380m)",
        "description": "Glacier trekking across white ice fields beneath Masherbrum."
      },
      {
        "day": 12,
        "title": "Trek Goro II to Concordia (4,600m)",
        "description": "Arrive at Concordia beneath K2, Broad Peak, and Gasherbrum IV."
      },
      {
        "day": 13,
        "title": "Trek Concordia to K2 Base Camp (5,150m)",
        "description": "Establish K2 Base Camp at the base of the Abruzzi Spur on the Godwin-Austen Glacier."
      },
      {
        "day": 14,
        "title": "Base Camp Setup & Puja Ceremony",
        "description": "Erect expedition mess domes, personal tents, solar power arrays, and conduct the traditional blessing ceremony."
      },
      {
        "day": 15,
        "title": "Acclimatization & Climbing Rotations (Days 15\u201348)",
        "description": "Climbing period: route fixing through House's Chimney, Black Pyramid, Bottleneck, establishing Camps 1 (6,100m), 2 (6,700m), 3 (7,350m), and 4 (8,000m), culminating in summit pushes."
      },
      {
        "day": 16,
        "title": "Base Camp Cleanup & Environmental Clearance",
        "description": "Pack up high camps, clean basecamp area according to CKNP environmental standards, and prepare porter loads."
      },
      {
        "day": 17,
        "title": "Trek K2 Base Camp to Concordia & Goro I",
        "description": "Begin return march down the Baltoro Glacier."
      },
      {
        "day": 18,
        "title": "Trek Goro I to Urdukas",
        "description": "Descend to Urdukas campsite with views of the Cathedral peaks."
      },
      {
        "day": 19,
        "title": "Trek Urdukas to Paiju",
        "description": "Trek off the Baltoro Glacier onto the valley trail to Paiju."
      },
      {
        "day": 20,
        "title": "Trek Paiju to Jola",
        "description": "Downhill hike through the Braldu canyon to Jola camp."
      },
      {
        "day": 21,
        "title": "Trek Jola to Askole",
        "description": "Final trekking leg to Askole village; celebrate with porter team."
      },
      {
        "day": 22,
        "title": "Drive Askole to Skardu",
        "description": "4x4 Jeep transfer to Skardu; hot showers, rest, and celebration."
      },
      {
        "day": 23,
        "title": "Reserve Day in Skardu",
        "description": "Debriefing, equipment packing, and market visits in Skardu."
      },
      {
        "day": 24,
        "title": "Flight Skardu to Islamabad",
        "description": "Scenic flight back to Islamabad; transfer to hotel."
      },
      {
        "day": 25,
        "title": "Ministry Debriefing in Islamabad",
        "description": "Official debriefing with Alpine Club and Ministry of Tourism."
      },
      {
        "day": 26,
        "title": "Contingency / Sightseeing in Islamabad",
        "description": "Reserve day for flights and sightseeing around capital city."
      },
      {
        "day": 27,
        "title": "International Departure",
        "description": "Transfer to Islamabad Airport for flight departure."
      }
    ],
    "included": [
      "Government climbing royalties, CKNP permits, and liaison officer fees",
      "Domestic flights Islamabad\u2013Skardu round-trip with cargo allowance",
      "Full basecamp setup: heated dome, personal carpeted sleeping tents, mattress, mess tent, kitchen, shower tent, and generator/solar charging",
      "Expert high-altitude cooking team offering Western and local high-calorie menus",
      "High-altitude porters (HAP) and Sherpa team for route fixing and load carrying",
      "Fixed ropes, snow bars, ice screws, and collective climbing safety gear",
      "Supplemental oxygen bottles (Poisk/Summit) and top-tier masks/regulators for summit push",
      "Satellite communication, Gamow hyperbaric bag, emergency oxygen, and Swiss/Austrian weather forecast service",
      "Porter transport for up to 75 kg personal cargo to/from Base Camp"
    ],
    "excluded": [
      "International airfare and Pakistan visa fees",
      "Mandatory high-altitude search, rescue, and medical evacuation insurance",
      "Personal high-altitude climbing equipment, 8000m down suit, and boots",
      "Summit bonus for climbing Sherpas / HAPs",
      "Personal drinks, tips, and excess baggage fees"
    ],
    "highlights": [
      "Attempt the summit of the world's second-highest and most revered peak (8,611m)",
      "Full expedition logistics: Abruzzi Spur route fixing, Camps 1-4 establishment, and oxygen infrastructure",
      "Dedicated high-altitude climbing Sherpa / HAP support and top-tier basecamp facilities",
      "High-altitude satellite communications, daily weather forecasting, and heated mess domes"
    ]
  },
  "broad-peak": {
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival in Islamabad",
        "description": "Arrival, hotel check-in, permit verification, and official briefing."
      },
      {
        "day": 2,
        "title": "Islamabad to Skardu Flight",
        "description": "Fly to Skardu past Nanga Parbat; cargo inspection and basecamp food sorting."
      },
      {
        "day": 3,
        "title": "Skardu Preparation Day",
        "description": "Final gear preparation, porter assignment, and team acclimatization."
      },
      {
        "day": 4,
        "title": "Drive Skardu to Askole (3,000m)",
        "description": "4x4 Jeep ride along the Indus and Braldu rivers to Askole."
      },
      {
        "day": 5,
        "title": "Trek Askole to Jola (3,200m)",
        "description": "Trek through the Braldu gorge to Jola camp."
      },
      {
        "day": 6,
        "title": "Trek Jola to Paiju (3,450m)",
        "description": "Trek beneath Paiju Peak to the leafy Paiju camp."
      },
      {
        "day": 7,
        "title": "Rest Day at Paiju",
        "description": "Acclimatization day; porters prepare provisions for glacier march."
      },
      {
        "day": 8,
        "title": "Trek Paiju to Khoburtse (3,930m)",
        "description": "Step onto the Baltoro Glacier; camp at Khoburtse."
      },
      {
        "day": 9,
        "title": "Trek Khoburtse to Urdukas (4,050m)",
        "description": "Ascend to Urdukas with panoramic views of Trango Towers."
      },
      {
        "day": 10,
        "title": "Trek Urdukas to Goro II (4,380m)",
        "description": "Trek over white ice across central Baltoro Glacier."
      },
      {
        "day": 11,
        "title": "Trek Goro II to Concordia (4,600m)",
        "description": "Arrive at Concordia beneath K2, Broad Peak, and Gasherbrum."
      },
      {
        "day": 12,
        "title": "Trek Concordia to Broad Peak Base Camp (4,850m)",
        "description": "Trek up the Godwin-Austen Glacier to establish Broad Peak Base Camp."
      },
      {
        "day": 13,
        "title": "Base Camp Setup & Puja Ceremony",
        "description": "Set up personal and mess tents, power, and conduct climbing ceremony."
      },
      {
        "day": 14,
        "title": "Climbing Period (Days 14\u201340)",
        "description": "Acclimatization rotations to Camp 1 (5,600m), Camp 2 (6,200m), Camp 3 (7,100m), and summit push via the West Ridge col to the main summit (8,051m)."
      },
      {
        "day": 15,
        "title": "Basecamp Packdown & Cleanup",
        "description": "Clear high camps, sort cargo, and prepare for return trek."
      },
      {
        "day": 16,
        "title": "Trek Broad Peak BC to Concordia & Goro I",
        "description": "Begin descent down the Baltoro Glacier."
      },
      {
        "day": 17,
        "title": "Trek Goro I to Urdukas",
        "description": "Trek down the glacier to Urdukas camp."
      },
      {
        "day": 18,
        "title": "Trek Urdukas to Paiju",
        "description": "Descend off the glacier to Paiju camp."
      },
      {
        "day": 19,
        "title": "Trek Paiju to Askole",
        "description": "Complete final trek days to Askole village."
      },
      {
        "day": 20,
        "title": "Drive Askole to Skardu",
        "description": "4x4 Jeep transfer to Skardu hotel; celebratory dinner."
      },
      {
        "day": 21,
        "title": "Reserve Day in Skardu",
        "description": "Buffer day for logistics and relaxation."
      },
      {
        "day": 22,
        "title": "Fly Skardu to Islamabad",
        "description": "Scenic return flight to Islamabad."
      },
      {
        "day": 23,
        "title": "Ministry Debriefing in Islamabad",
        "description": "Formal debriefing with Alpine Club of Pakistan."
      },
      {
        "day": 24,
        "title": "International Departure",
        "description": "Airport transfer for homebound flights."
      }
    ],
    "included": [
      "Government climbing royalties, environmental fees, and CKNP permits",
      "Domestic flights Islamabad \u21c4 Skardu round trip with cargo allowance",
      "Complete basecamp infrastructure: dome tents, individual sleeping tents, solar power, and mess facilities",
      "Full-service kitchen team providing nutritious high-altitude meals",
      "Route fixing gear, collective high-altitude ropes, and snow anchors",
      "Emergency oxygen kit, medical equipment, and satellite communications",
      "Up to 50 kg personal baggage transport to/from Base Camp"
    ],
    "excluded": [
      "International flights and visa",
      "Mandatory mountain rescue and evacuation insurance",
      "Personal climbing equipment and high-altitude boots/suit",
      "Personal high-altitude porter and summit bonus",
      "Tips and personal expenses"
    ],
    "highlights": [
      "Summit the 12th highest mountain on Earth (8,051m) via the classic West Ridge",
      "Prime location directly facing the majestic southern wall of K2",
      "Complete expedition basecamp infrastructure with professional high-altitude climbing support",
      "Full porter caravan through Baltoro Glacier to Godwin-Austen Glacier"
    ]
  },
  "gasherbrum-i": {
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival in Islamabad",
        "description": "Arrival, hotel check-in, official documentation, and permit clearance."
      },
      {
        "day": 2,
        "title": "Fly to Skardu",
        "description": "Flight past Nanga Parbat to Skardu; expedition freight inspection."
      },
      {
        "day": 3,
        "title": "Skardu Organization Day",
        "description": "Sort high-altitude provisions and complete porter assignments."
      },
      {
        "day": 4,
        "title": "Drive Skardu to Askole (3,000m)",
        "description": "Jeep ride along Braldu valley to Askole trailhead."
      },
      {
        "day": 5,
        "title": "Trek Askole to Jola",
        "description": "Trek across Biafo snout to Jola campsite."
      },
      {
        "day": 6,
        "title": "Trek Jola to Paiju",
        "description": "Hike to Paiju camp beneath the granite towers."
      },
      {
        "day": 7,
        "title": "Rest Day at Paiju",
        "description": "Acclimatization day for climbers and provisions prep for porters."
      },
      {
        "day": 8,
        "title": "Trek Paiju to Khoburtse",
        "description": "Move onto the Baltoro Glacier moraine to Khoburtse."
      },
      {
        "day": 9,
        "title": "Trek Khoburtse to Urdukas",
        "description": "Ascend to Urdukas terraces overlooking the glacier."
      },
      {
        "day": 10,
        "title": "Trek Urdukas to Goro II",
        "description": "Trek across white ice to Goro II camp."
      },
      {
        "day": 11,
        "title": "Trek Goro II to Concordia",
        "description": "Reach Concordia beneath the four 8,000m peaks."
      },
      {
        "day": 12,
        "title": "Trek Concordia to Gasherbrum Base Camp (5,050m)",
        "description": "Trek up the Upper Baltoro Glacier to establish shared Gasherbrum Base Camp."
      },
      {
        "day": 13,
        "title": "Base Camp Setup & Puja Blessing",
        "description": "Set up basecamp facilities and conduct traditional ceremony."
      },
      {
        "day": 14,
        "title": "Climbing Period (Days 14\u201340)",
        "description": "Navigate Gasherbrum Icefall to Camp 1 (5,900m), Camp 2 (6,400m), Camp 3 (7,200m), and make summit push via the Japanese Couloir to the summit (8,080m)."
      },
      {
        "day": 15,
        "title": "Basecamp Packdown & Cleanup",
        "description": "Pack high camps, clean basecamp area, and prepare cargo."
      },
      {
        "day": 16,
        "title": "Trek Gasherbrum BC to Concordia & Goro I",
        "description": "Begin descent down the Baltoro Glacier."
      },
      {
        "day": 17,
        "title": "Trek Goro I to Urdukas",
        "description": "Trek to Urdukas camp."
      },
      {
        "day": 18,
        "title": "Trek Urdukas to Paiju",
        "description": "Descend to Paiju camp."
      },
      {
        "day": 19,
        "title": "Trek Paiju to Askole",
        "description": "Complete final trekking leg to Askole village."
      },
      {
        "day": 20,
        "title": "Drive Askole to Skardu",
        "description": "4x4 Jeep transfer to Skardu hotel for celebration dinner."
      },
      {
        "day": 21,
        "title": "Reserve Day in Skardu",
        "description": "Logistics buffer day and rest."
      },
      {
        "day": 22,
        "title": "Fly Skardu to Islamabad",
        "description": "Scenic flight back to Islamabad."
      },
      {
        "day": 23,
        "title": "Ministry Debriefing in Islamabad",
        "description": "Expedition debrief with Alpine Club of Pakistan."
      },
      {
        "day": 24,
        "title": "International Departure",
        "description": "Transfer to airport for departure."
      }
    ],
    "included": [
      "Government climbing royalties and CKNP permits",
      "Domestic flights Islamabad \u21c4 Skardu round trip with cargo allowance",
      "Complete basecamp infrastructure, mess tents, individual sleeping tents, and solar power",
      "High-altitude cooking crew providing 3 nutritious meals daily",
      "Collective climbing ropes, icefall safety gear, and route hardware",
      "Emergency oxygen kit and satellite communications",
      "Porter transport for up to 50 kg personal baggage to Base Camp"
    ],
    "excluded": [
      "International flights and visa",
      "Mandatory mountain rescue and medical evacuation insurance",
      "Personal 8000m climbing gear, suit, and boots",
      "Personal high-altitude porter and summit bonus",
      "Tips and personal expenses"
    ],
    "highlights": [
      "Attempt the summit of Gasherbrum I (8,080m), the 11th highest peak in the world",
      "Climb through the dramatic Gasherbrum Icefall and Japanese Couloir",
      "Basecamp at 5,050m at the convergence of the South and North Gasherbrum glaciers",
      "Full expedition logistical support with seasoned Karakoram mountain guides"
    ]
  },
  "gasherbrum-ii": {
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival in Islamabad",
        "description": "Arrival, hotel transfer, permit documentation, and briefing."
      },
      {
        "day": 2,
        "title": "Fly to Skardu",
        "description": "Scenic flight past Nanga Parbat to Skardu."
      },
      {
        "day": 3,
        "title": "Skardu Preparation Day",
        "description": "Expedition cargo sorting, equipment check, and acclimatization."
      },
      {
        "day": 4,
        "title": "Drive Skardu to Askole",
        "description": "4x4 Jeep ride along Braldu valley to Askole."
      },
      {
        "day": 5,
        "title": "Trek Askole to Jola",
        "description": "Trek along Braldu River to Jola camp."
      },
      {
        "day": 6,
        "title": "Trek Jola to Paiju",
        "description": "Trek to Paiju camp beneath the granite towers."
      },
      {
        "day": 7,
        "title": "Rest Day at Paiju",
        "description": "Acclimatization day at Paiju."
      },
      {
        "day": 8,
        "title": "Trek Paiju to Khoburtse",
        "description": "Enter the Baltoro Glacier to Khoburtse."
      },
      {
        "day": 9,
        "title": "Trek Khoburtse to Urdukas",
        "description": "Trek to Urdukas camp."
      },
      {
        "day": 10,
        "title": "Trek Urdukas to Goro II",
        "description": "Trek across white ice to Goro II."
      },
      {
        "day": 11,
        "title": "Trek Goro II to Concordia",
        "description": "Arrive at Concordia beneath K2 and Broad Peak."
      },
      {
        "day": 12,
        "title": "Trek Concordia to Gasherbrum Base Camp (5,050m)",
        "description": "Establish Gasherbrum Base Camp on Upper Baltoro."
      },
      {
        "day": 13,
        "title": "Basecamp Setup & Puja Ceremony",
        "description": "Setup camp facilities, prayer flags, and climbing ceremony."
      },
      {
        "day": 14,
        "title": "Climbing Period (Days 14\u201337)",
        "description": "Establish Camp 1 (5,900m), Camp 2 (6,500m), Camp 3 (7,200m) via Banana Ridge, and make summit attempt on Gasherbrum II (8,035m)."
      },
      {
        "day": 15,
        "title": "Basecamp Cleanup",
        "description": "Clear high camps and pack for return march."
      },
      {
        "day": 16,
        "title": "Trek Gasherbrum BC to Concordia & Goro I",
        "description": "Begin return march down Baltoro Glacier."
      },
      {
        "day": 17,
        "title": "Trek Goro I to Urdukas",
        "description": "Trek to Urdukas camp."
      },
      {
        "day": 18,
        "title": "Trek Urdukas to Paiju",
        "description": "Descend to Paiju camp."
      },
      {
        "day": 19,
        "title": "Trek Paiju to Askole",
        "description": "Complete trekking to Askole village."
      },
      {
        "day": 20,
        "title": "Drive Askole to Skardu",
        "description": "4x4 Jeep transfer to Skardu hotel."
      },
      {
        "day": 21,
        "title": "Fly Skardu to Islamabad",
        "description": "Flight to Islamabad and Alpine Club debriefing."
      },
      {
        "day": 22,
        "title": "International Departure",
        "description": "Transfer to airport for homeward journey."
      }
    ],
    "included": [
      "Government climbing royalties and environmental permits",
      "Domestic flights Islamabad \u21c4 Skardu round trip with cargo allowance",
      "Full basecamp setup, heated mess tent, and private sleeping tents",
      "High-altitude cooking crew providing 3 meals daily",
      "Collective climbing ropes and safety equipment",
      "Emergency oxygen kit and satellite communications",
      "Porter transport for up to 50 kg personal baggage to Base Camp"
    ],
    "excluded": [
      "International flights and visa",
      "Mandatory mountain rescue and evacuation insurance",
      "Personal climbing equipment and down suit",
      "Personal high-altitude porter and summit bonus",
      "Tips and personal expenses"
    ],
    "highlights": [
      "Climb Gasherbrum II (8,035m), the 13th highest mountain in the world",
      "Follow the classic Southwest Ridge and Banana Ridge route",
      "One of the most achievable and aesthetic 8,000-meter objectives in Pakistan",
      "Comprehensive basecamp services and seasoned high-altitude mountain staff"
    ]
  },
  "spantik-expedition": {
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival in Islamabad",
        "description": "Arrival, hotel transfer, permit formalities, and expedition briefing."
      },
      {
        "day": 2,
        "title": "Fly Islamabad to Skardu",
        "description": "Flight over mountains to Skardu; gear check and food packing."
      },
      {
        "day": 3,
        "title": "Drive Skardu to Arandu Village (2,770m)",
        "description": "4x4 Jeep drive into the Shigar/Basha valley to Arandu village, the roadhead."
      },
      {
        "day": 4,
        "title": "Trek Arandu to Chogo Brangsa (3,300m)",
        "description": "Trek along the Chogolungma Glacier lateral moraine to Chogo Brangsa camp."
      },
      {
        "day": 5,
        "title": "Trek Chogo Brangsa to Bolocho (3,800m)",
        "description": "Ascend the glacier valley with views of Spantik's golden wall."
      },
      {
        "day": 6,
        "title": "Trek Bolocho to Spantik Base Camp (4,300m)",
        "description": "Establish Spantik Base Camp on the green lateral ridge of Chogolungma Glacier."
      },
      {
        "day": 7,
        "title": "Basecamp Setup & Acclimatization",
        "description": "Setup tents, communication lines, and conduct climbing ceremony."
      },
      {
        "day": 8,
        "title": "Climbing Period (Days 8\u201322)",
        "description": "Acclimatization rotations to Camp 1 (5,100m), Camp 2 (5,500m), and Camp 3 (6,300m), followed by the summit push to Spantik Peak (7,027m)."
      },
      {
        "day": 9,
        "title": "Basecamp Packdown & Cleanup",
        "description": "Dismantle high camps and prepare cargo for return trek."
      },
      {
        "day": 10,
        "title": "Trek Spantik BC to Chogo Brangsa",
        "description": "Descend the Chogolungma Glacier trail to Chogo Brangsa."
      },
      {
        "day": 11,
        "title": "Trek Chogo Brangsa to Arandu & Drive to Skardu",
        "description": "Trek to Arandu village; board 4x4 jeeps to return to Skardu hotel."
      },
      {
        "day": 12,
        "title": "Reserve Day in Skardu",
        "description": "Buffer day for logistics and celebratory dinner."
      },
      {
        "day": 13,
        "title": "Fly Skardu to Islamabad",
        "description": "Morning flight to Islamabad; Alpine Club debriefing."
      },
      {
        "day": 14,
        "title": "International Departure",
        "description": "Transfer to Islamabad Airport for departure."
      }
    ],
    "included": [
      "Government 7000m climbing royalties and environmental permits",
      "Domestic flights Islamabad \u21c4 Skardu round trip with cargo allowance",
      "Full basecamp infrastructure, mess tents, individual sleeping tents, and solar power",
      "High-altitude cooking crew providing 3 nutritious meals daily",
      "Fixed ropes and collective safety climbing equipment",
      "Satellite communications and comprehensive medical kit",
      "Porter transport for up to 40 kg personal cargo to Base Camp"
    ],
    "excluded": [
      "International flights and visa",
      "Mandatory mountain rescue and medical evacuation insurance",
      "Personal mountaineering gear, boots, and down suit",
      "Personal climbing porter and summit bonus",
      "Tips and personal expenses"
    ],
    "highlights": [
      "Summit Spantik (7,027m), known worldwide as the Golden Peak",
      "Follow the classic Southeast Ridge route above the Chogolungma Glacier",
      "Ideal training expedition for climbers aiming for 8,000m giants",
      "Scenic trek through Arandu village and pristine Karakoram alpine pastures"
    ]
  },
  "nanga-parbat-exp": {
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival in Islamabad",
        "description": "Arrival, hotel check-in, government briefing, and permit validation."
      },
      {
        "day": 2,
        "title": "Drive Islamabad to Chilas",
        "description": "Scenic drive along Karakoram Highway past Babusar Pass to Chilas."
      },
      {
        "day": 3,
        "title": "Drive Chilas to Bunar Das & Halale (Diamir)",
        "description": "4x4 Jeep transfer into the Diamir Valley to Halale roadhead."
      },
      {
        "day": 4,
        "title": "Trek Halale to Ser (3,200m)",
        "description": "Trek through pine woods and Diamir River gorge to Ser village."
      },
      {
        "day": 5,
        "title": "Trek Ser to Diamir Base Camp (4,200m)",
        "description": "Ascend to Diamir Base Camp directly beneath the gigantic Kinshofer wall."
      },
      {
        "day": 6,
        "title": "Basecamp Setup & Puja Blessing",
        "description": "Set up basecamp facilities and conduct traditional mountain blessing."
      },
      {
        "day": 7,
        "title": "Climbing Rotations (Days 7\u201342)",
        "description": "Establish Camp 1 (4,800m), scale the Kinshofer Wall to Camp 2 (6,100m), Camp 3 (6,700m), Camp 4 (7,400m), and make summit push to Nanga Parbat (8,126m)."
      },
      {
        "day": 8,
        "title": "Basecamp Packdown & Cleanup",
        "description": "Dismantle high camps and pack cargo for porter caravan."
      },
      {
        "day": 9,
        "title": "Trek Base Camp to Ser & Halale",
        "description": "Descend to Halale roadhead."
      },
      {
        "day": 10,
        "title": "Drive Halale to Chilas",
        "description": "4x4 Jeep transfer to Chilas hotel."
      },
      {
        "day": 11,
        "title": "Drive Chilas to Islamabad",
        "description": "Scenic drive back to Islamabad."
      },
      {
        "day": 12,
        "title": "Reserve Day in Islamabad",
        "description": "Buffer day for travel and Alpine Club debriefing."
      },
      {
        "day": 13,
        "title": "Ministry Debriefing in Islamabad",
        "description": "Formal debriefing with Ministry of Tourism."
      },
      {
        "day": 14,
        "title": "Sightseeing in Islamabad",
        "description": "Explore Faisal Mosque, Rawal Lake, and local markets."
      },
      {
        "day": 15,
        "title": "International Departure",
        "description": "Transfer to airport for flight departure."
      }
    ],
    "included": [
      "Government climbing royalties and Diamir permit fees",
      "AC private ground transport and 4x4 jeeps throughout Pakistan",
      "Full basecamp infrastructure, mess tents, individual sleeping tents, and solar power",
      "High-altitude cooking crew providing 3 nutritious meals daily",
      "Collective climbing ropes and safety equipment",
      "Emergency oxygen kit and satellite communications",
      "Porter transport for up to 50 kg personal baggage to Base Camp"
    ],
    "excluded": [
      "International flights and visa",
      "Mandatory mountain rescue and medical evacuation insurance",
      "Personal climbing equipment and down suit",
      "Personal high-altitude porter and summit bonus",
      "Tips and personal expenses"
    ],
    "highlights": [
      "Climb Nanga Parbat (8,126m), the legendary 9th highest peak on Earth",
      "Tackle the famous Kinshofer Route on the colossal Diamir Face",
      "Experience the raw majesty of the Western Himalayas in Diamer district",
      "Full expedition logistics with high-altitude climbing staff and basecamp comforts"
    ]
  },
  "skardu-valley": {
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival in Islamabad",
        "description": "Meet at Islamabad Airport; transfer to hotel and evening tour briefing."
      },
      {
        "day": 2,
        "title": "Flight to Skardu & City Orientation",
        "description": "Morning flight past Nanga Parbat to Skardu; explore local handicrafts in Skardu bazaar."
      },
      {
        "day": 3,
        "title": "Shangrila & Upper Kachura Lake",
        "description": "Visit Shangrila Resort, take a boat ride on crystal-clear Upper Kachura Lake, and hike through apricot orchards."
      },
      {
        "day": 4,
        "title": "Katpana Cold Desert & Sunset",
        "description": "Explore the unique high-altitude sand dunes of Katpana where snow-capped peaks meet desert sands."
      },
      {
        "day": 5,
        "title": "Kharpocho Fort & Organic Village Nansoq",
        "description": "Climb to the historic 16th-century Kharpocho Fort and stroll along the Indus cliffside path to Nansoq village."
      },
      {
        "day": 6,
        "title": "Day Excursion to Shigar Valley & Sarfaranga",
        "description": "Drive through Sarfaranga Cold Desert to Shigar; tour the 17th-century Shigar Fort (Fong-Khar) and ancient Amburiq Mosque."
      },
      {
        "day": 7,
        "title": "Excursion to Khaplu Palace & Chaqchan Mosque",
        "description": "Journey along the Shyok River to Khaplu; visit the royal Yabgo Palace and the 700-year-old wooden Chaqchan Mosque."
      },
      {
        "day": 8,
        "title": "Day Excursion to Deosai Plains (Sheosar Lake)",
        "description": "Ascend to the high-altitude plateau of Deosai (4,114m); visit Sheosar Lake and spot Himalayan wildlife."
      },
      {
        "day": 9,
        "title": "Manthal Buddha Rock & Sadpara Lake",
        "description": "Visit the 8th-century Buddhist granite relief at Manthal and enjoy panoramic views over Sadpara Lake."
      },
      {
        "day": 10,
        "title": "Flight to Islamabad & Departure",
        "description": "Fly back to Islamabad for international departure connections."
      }
    ],
    "included": [
      "Domestic flights Islamabad \u21c4 Skardu round trip with road backup",
      "Quality hotel accommodation with daily breakfast and dinner",
      "Private air-conditioned transport and 4x4 jeeps for Deosai / Katpana",
      "Licensed English-speaking professional tour guide",
      "All fort, museum, and national park entry fees",
      "Boating tickets at Upper Kachura Lake"
    ],
    "excluded": [
      "International flights and visa",
      "Travel and medical insurance",
      "Lunches and personal snacks",
      "Tips for guides and drivers"
    ],
    "highlights": [
      "Visit Upper Kachura Lake and the famous Shangrila Resort Lower Kachura",
      "Walk the white dunes of Katpana and Sarfaranga Cold Deserts",
      "Tour the 400-year-old restored Fong-Khar (Shigar Fort) and Khaplu Palace",
      "Ascend to the ancient Kharpocho Fort overlooking the Indus River confluence"
    ]
  },
  "hunza-valley": {
    "itinerary": [
      {
        "day": 1,
        "title": "Islamabad to Gilgit / Chilas",
        "description": "Meet in Islamabad; scenic flight to Gilgit or scenic mountain drive via Babusar Pass."
      },
      {
        "day": 2,
        "title": "Drive Gilgit to Karimabad (Hunza)",
        "description": "Drive up the Karakoram Highway with stops at the Rakaposhi Viewpoint (7,788m) and Old Silk Route road."
      },
      {
        "day": 3,
        "title": "Baltit Fort, Altit Fort & Duikar Sunset",
        "description": "Tour the UNESCO-restored Baltit and Altit Forts, explore Karimabad bazaar, and watch sunset over Ladyfinger Peak from Eagles Nest."
      },
      {
        "day": 4,
        "title": "Attabad Lake, Passu Cones & Hussaini Bridge",
        "description": "Boat ride on Attabad Lake, drive through the KKH tunnels to Passu, photograph Passu Cones, and visit Hussaini Bridge."
      },
      {
        "day": 5,
        "title": "Upper Hunza (Gulmit & Borith Lake)",
        "description": "Visit historic Gulmit Old House, the local carpet-weaving center, and take an alpine walk around Borith Lake."
      },
      {
        "day": 6,
        "title": "Drive Hunza to Gilgit & City Tour",
        "description": "Drive to Gilgit; visit Kargha Buddha relief, Gilgit suspension bridge, and local handicraft markets."
      },
      {
        "day": 7,
        "title": "Fly to Islamabad & Departure",
        "description": "Morning flight from Gilgit to Islamabad; transfer to international airport for departure."
      }
    ],
    "included": [
      "Domestic flights Islamabad \u21c4 Gilgit with road backup",
      "Deluxe hotel accommodation in Hunza and Gilgit",
      "Private transport throughout with dedicated driver",
      "Professional licensed local tour guide",
      "Attabad Lake boat excursion and fort entry fees",
      "Daily breakfast and dinner"
    ],
    "excluded": [
      "International flights and visa",
      "Lunches and beverages",
      "Tips for guide and driver",
      "Personal items"
    ],
    "highlights": [
      "Explore 800-year-old Baltit Fort and 900-year-old Altit Fort in Karimabad",
      "Cruise across the turquoise glacial waters of Attabad Lake",
      "Photograph the dramatic cathedral spires of Passu Cones (Tupopdan)",
      "Cross the thrilling Hussaini Suspension Bridge and watch sunset from Eagles Nest Duikar"
    ]
  },
  "deosai": {
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival in Skardu",
        "description": "Arrive in Skardu via flight or road; hotel check-in and briefing."
      },
      {
        "day": 2,
        "title": "Skardu to Deosai Plateau (Bara Pani Camp)",
        "description": "4x4 Jeep ascent via Sadpara Lake onto Deosai Plains; explore Kala Pani and establish camp at Bara Pani (4,114m)."
      },
      {
        "day": 3,
        "title": "Bara Pani to Sheosar Lake Safari",
        "description": "Game-viewing drive across the plains for Himalayan brown bears; visit pristine Sheosar Lake with Nanga Parbat backdrop."
      },
      {
        "day": 4,
        "title": "Deosai Wilderness Exploration & Return to Skardu",
        "description": "Morning photography and nature walks on the plateau; descend in the afternoon to Skardu hotel."
      },
      {
        "day": 5,
        "title": "Departure from Skardu",
        "description": "Transfer to Skardu Airport for onward flight."
      }
    ],
    "included": [
      "4x4 Safari Jeeps with experienced high-altitude drivers",
      "Deluxe safari camping setup with warm sleeping bags and foam mattresses at Deosai",
      "Hotel nights in Skardu before and after safari",
      "All meals and hot beverages during the safari",
      "Deosai National Park wildlife permits and conservation fees",
      "Experienced wildlife tracker and tour guide"
    ],
    "excluded": [
      "Flights to and from Skardu",
      "Travel insurance",
      "Tips for staff",
      "Personal items"
    ],
    "highlights": [
      "Camp on the endless wildflower meadows of Deosai National Park at 4,114m",
      "Spot the endangered Himalayan Brown Bear and golden marmots in their natural sanctuary",
      "Visit the heart-shaped turquoise waters of Sheosar Lake reflecting Nanga Parbat",
      "Experience world-class stargazing and Milky Way night photography in zero light pollution"
    ]
  },
  "naltar-valley": {
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival in Gilgit",
        "description": "Meet in Gilgit, transfer to hotel, explore Gilgit bazaar and suspension bridge."
      },
      {
        "day": 2,
        "title": "Drive Gilgit to Nomal & 4x4 Jeep to Naltar Valley (2,900m)",
        "description": "Drive to Nomal and board 4x4 jeeps up the dramatic Naltar canyon to Naltar Bala; check in to alpine lodge."
      },
      {
        "day": 3,
        "title": "Excursion to Naltar Lakes (Satrangi, Blue & Pari Lakes)",
        "description": "Jeep and hiking safari to the three famous multi-colored glacial lakes; enjoy picnic lunch by the shores."
      },
      {
        "day": 4,
        "title": "Naltar to Gilgit & Departure",
        "description": "Morning nature walk through pine woods, drive back to Gilgit Airport for departure."
      }
    ],
    "included": [
      "Private ground transport from Gilgit to Nomal and return",
      "4x4 Mountain Jeeps in Naltar Valley and Lakes",
      "Alpine lodge / hotel accommodation with breakfast and dinner",
      "Professional local guide",
      "Entry and forest conservation fees"
    ],
    "excluded": [
      "Flights to/from Gilgit",
      "Lunches and personal drinks",
      "Tips for driver and guide"
    ],
    "highlights": [
      "Discover the surreal seven colors of Satrangi Lake and deep blue Pari Lake",
      "Travel through the pine and cedar forests of Naltar Valley",
      "Thrilling 4x4 mountain jeep ride from Nomal village up the Naltar gorge",
      "Visit Pakistan's premier winter ski training slope and alpine village"
    ]
  },
  "phander-valley": {
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival in Gilgit & Drive to Gupis",
        "description": "Meet in Gilgit; drive through the picturesque Ghizer valley past Punial to Gupis."
      },
      {
        "day": 2,
        "title": "Khalti Lake to Phander Valley (2,800m)",
        "description": "Visit deep blue Khalti Lake and continue to the emerald paradise of Phander; check in to scenic PTDC / boutique lodge."
      },
      {
        "day": 3,
        "title": "Phander Lake Exploration & Trout Fishing",
        "description": "Full day enjoying walks around Phander Lake, fishing in Ghizer River, and interacting with welcoming villagers."
      },
      {
        "day": 4,
        "title": "Excursion to Shandur Pass (3,700m)",
        "description": "Day trip up to Shandur Pass, the roof of the world and home to the annual freestyle polo festival."
      },
      {
        "day": 5,
        "title": "Drive Phander to Gilgit & Departure",
        "description": "Scenic return drive along Ghizer River to Gilgit Airport for flight departure."
      }
    ],
    "included": [
      "Private AC transport and 4x4 jeeps for Shandur sector",
      "Hotel / lodge accommodation with breakfast and dinner",
      "Professional local guide",
      "Trout fishing permissions and equipment where applicable",
      "Tolls and local fees"
    ],
    "excluded": [
      "Flights to and from Gilgit",
      "Personal gear and fishing tackle",
      "Travel insurance",
      "Tips for guide and driver"
    ],
    "highlights": [
      "Marvel at the mesmerizing turquoise waters of Phander Lake and Ghizer River",
      "Experience world-renowned trout fishing and peaceful river walks",
      "Explore the scenic valleys of Gupis, Khalti Lake, and Yasin",
      "Visit the high mountain pass and world's highest polo ground at Shandur (3,700m)"
    ]
  },
  "bilamik-valley": {
    "itinerary": [
      {
        "day": 1,
        "title": "Drive Skardu to Rondu & Ascent to Bilamik Valley (2,800m)",
        "description": "Drive from Skardu along the Indus gorge to Rondu; take 4x4 mountain jeep up to Bilamik valley."
      },
      {
        "day": 2,
        "title": "Bilamik Pine Meadows & Glacier Stream Hike",
        "description": "Hike through lush pine woodlands to the upper glacier brooks and high shepherd settlements."
      },
      {
        "day": 3,
        "title": "Cultural Walks & Traditional Village Immersion",
        "description": "Spend the day exploring ancient wooden watermills, walnut orchards, and interacting with local families."
      },
      {
        "day": 4,
        "title": "Descent to Rondu & Return to Skardu",
        "description": "Jeep descent down to the main road and scenic drive back to Skardu."
      }
    ],
    "included": [
      "4x4 Jeep transport from Skardu throughout",
      "Glamping tents or traditional guest house stay with all meals",
      "Local Balti guide",
      "Village conservation fees",
      "First aid kit"
    ],
    "excluded": [
      "Travel to and from Skardu",
      "Personal gear and sleeping equipment",
      "Travel and medical insurance",
      "Tips for local guide and drivers",
      "Personal expenses"
    ],
    "highlights": [
      "Discover Rondu's untouched mountain paradise tucked away from tourist crowds",
      "Hike through pristine pine forests and crystalline glacial streams",
      "Experience traditional Balti woodcraft architecture and rural mountain life",
      "Camp under pristine, unpolluted night skies in open alpine meadows"
    ]
  },
  "tormik-valley": {
    "itinerary": [
      {
        "day": 1,
        "title": "Drive Skardu to Tormik Valley (2,900m)",
        "description": "Drive from Skardu to the entrance of Tormik; 4x4 jeep ride into the secluded valley villages."
      },
      {
        "day": 2,
        "title": "Orchard Walks & Upper Tormik Alpine Hike",
        "description": "Hike along glacial watercourses through terraced apricot groves to upper alpine pastures."
      },
      {
        "day": 3,
        "title": "Village Life, Wood Carving & Shepherd Trails",
        "description": "Visit historic wooden mosques, watch local artisanal carving, and enjoy traditional Balti folk meals."
      },
      {
        "day": 4,
        "title": "Return Drive to Skardu",
        "description": "Morning photography walk and comfortable drive back to Skardu."
      }
    ],
    "included": [
      "4x4 transportation from Skardu and return",
      "Village guest house or homestay accommodation with all meals",
      "Dedicated local guide",
      "Village admission and toll taxes"
    ],
    "excluded": [
      "Travel to and from Skardu",
      "Personal travel insurance",
      "Personal expenses and snacks",
      "Tips for local guide and host families"
    ],
    "highlights": [
      "Explore the cascading streams and lush terraced fields of Tormik Valley",
      "Sample organic apricots, cherries, and walnuts directly from local orchards",
      "Hike to high summer pastures with panoramic Karakoram mountain views",
      "Authentic homestay hospitality and traditional Balti gastronomy"
    ]
  },
  "haramosh-kutawal": {
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival in Gilgit & Drive to Sassi",
        "description": "Meet in Gilgit, drive along the Indus gorge to Sassi village at the mouth of Haramosh Valley."
      },
      {
        "day": 2,
        "title": "4x4 Jeep to Dache & Trek to Iskere (2,800m)",
        "description": "Jeep ride to Dache; begin trekking up the canyon through pine woods to Iskere camp."
      },
      {
        "day": 3,
        "title": "Trek Iskere to Kutawal Lake (3,260m)",
        "description": "Ascend through birch forests to the dramatic turquoise waters of Kutawal Lake nestled beneath Haramosh Peak."
      },
      {
        "day": 4,
        "title": "Exploration of Kutawal Lake & Mani Glacier",
        "description": "Full day exploring the glacial shores, climbing the moraine ridge for Haramosh views, and photography."
      },
      {
        "day": 5,
        "title": "Trek Kutawal Lake to Dache",
        "description": "Descend the valley trail back to Dache village campsite."
      },
      {
        "day": 6,
        "title": "Jeep to Sassi & Drive to Gilgit",
        "description": "Board jeeps back to Sassi, drive along the Karakoram Highway to Gilgit hotel."
      },
      {
        "day": 7,
        "title": "Departure from Gilgit",
        "description": "Morning flight from Gilgit to Islamabad or road departure."
      }
    ],
    "included": [
      "All ground transport (AC vehicle and 4x4 mountain jeeps)",
      "High quality camping tents, mattresses, and mess facilities",
      "Professional mountain trekking guide and cook team",
      "Three hot meals daily during the trek",
      "Porters for luggage and camp logistics",
      "Permits and local fees"
    ],
    "excluded": [
      "Flights to and from Gilgit",
      "Personal trekking gear and sleeping bag",
      "Travel insurance",
      "Tips for guide and porters"
    ],
    "highlights": [
      "Stand at the turquoise jewel of Kutawal Lake (3,260m) surrounded by towering peaks",
      "Direct face views of Haramosh Peak (7,409m) and Mani Peak",
      "Trek through lush birch forests, boulder fields, and alpine meadows",
      "Cross the Haramosh Pass approach in one of Gilgit's wildest valleys"
    ]
  },
  "basho-valley": {
    "itinerary": [
      {
        "day": 1,
        "title": "Drive Skardu to Basho Bridge & 4x4 Jeep to Basho Meadows (3,200m)",
        "description": "Drive from Skardu along the Indus; cross the historic wooden suspension bridge and ascend by 4x4 jeep into Basho Meadows."
      },
      {
        "day": 2,
        "title": "Full Day Hike to Upper Basho Waterfall & Alpine Pastures",
        "description": "Hike through dense evergreen forests to the upper waterfalls and panoramic Karakoram viewpoint; camp under stars."
      },
      {
        "day": 3,
        "title": "Morning Nature Walk & Return Drive to Skardu",
        "description": "Capture morning reflections in the alpine brook and drive back to Skardu hotel."
      }
    ],
    "included": [
      "4x4 Jeep transfers between Skardu and Basho Meadows",
      "Deluxe tented camping with foam mattresses and sleeping bags",
      "All meals, tea, and barbecue dinner on trek",
      "Experienced local guide and camp staff",
      "Forest conservation entry fees"
    ],
    "excluded": [
      "Travel to and from Skardu",
      "Personal warm clothing and gear",
      "Travel and emergency medical insurance",
      "Tips for camp staff and driver",
      "Personal expenses"
    ],
    "highlights": [
      "Camp in the pristine pine-covered alpine basin of Basho Meadows (3,200m)",
      "Cross the historic wooden Basho suspension bridge over the roaring Indus River",
      "Hike along gushing mountain streams, waterfalls, and emerald meadows",
      "Enjoy evening campfires and traditional Balti cuisine under star-lit skies"
    ]
  },
  "chunda-valley": {
    "itinerary": [
      {
        "day": 1,
        "title": "Drive Skardu to Chunda Valley & Sunset Viewpoint",
        "description": "Scenic 45-minute drive from Skardu up the switchbacks to Chunda heights; walk through orchards and watch golden hour over Skardu valley."
      },
      {
        "day": 2,
        "title": "Sunrise Photography, Village Walk & Return",
        "description": "Capture sunrise over the Indus River, visit a local village home for traditional herbal tea, and return to Skardu."
      }
    ],
    "included": [
      "Private transport from Skardu throughout",
      "Boutique guest house or luxury camp stay with breakfast and dinner",
      "Local guide",
      "Sightseeing and village visits"
    ],
    "excluded": [
      "Travel to and from Skardu",
      "Personal expenses and souvenirs",
      "Travel and health insurance",
      "Tips for guide and driver"
    ],
    "highlights": [
      "Bird's-eye panoramic views overlooking the entire Skardu basin and Indus River curves",
      "Spectacular spring apricot and cherry blossom photography",
      "Peaceful terraced farming villages with traditional stone cottages",
      "Sunset and sunrise photography overlooking the Karakoram ranges"
    ]
  },
  "hussain-abad-waterfall": {
    "itinerary": [
      {
        "day": 1,
        "title": "Hussain Abad Waterfall Excursion & Orchard Walk",
        "description": "Pick-up from Skardu hotel, short drive to Hussain Abad village, hike up to the roaring waterfall base, enjoy streamside tea, and return to hotel."
      }
    ],
    "included": [
      "Private vehicle transfer from Skardu hotel and return",
      "Local tour guide",
      "Refreshments and tea",
      "Site entry fees"
    ],
    "excluded": [
      "Hotel accommodation in Skardu",
      "Personal expenses, snacks, and extra drinks",
      "Travel insurance",
      "Tips for tour guide and driver"
    ],
    "highlights": [
      "Visit the thunderous natural cascade of Hussain Abad Waterfall",
      "Short scenic trail through rocky cliffs and fruit orchards",
      "Enjoy traditional chai and snacks by the freshwater stream",
      "Perfect leisurely half-day excursion from Skardu town"
    ]
  },
  "sarfaranga-desert": {
    "itinerary": [
      {
        "day": 1,
        "title": "Drive Skardu to Sarfaranga Cold Desert & Dune Safari",
        "description": "Drive from Skardu across the Shigar bridge to Sarfaranga; enjoy 4x4 dune bashing, camel trek at sunset, and luxury glamping stay with campfire."
      },
      {
        "day": 2,
        "title": "Sunrise on Desert Dunes & Return to Skardu",
        "description": "Witness sunrise over the dunes framing snowy peaks; enjoy outdoor breakfast and return to Skardu."
      }
    ],
    "included": [
      "Private 4x4 Jeep transfer and dune safari",
      "Luxury desert glamping tent with private bathroom facilities",
      "Barbecue dinner, breakfast, and campfire setup",
      "Camel ride experience",
      "Local desert guide"
    ],
    "excluded": [
      "Travel to and from Skardu",
      "Personal purchases and quad biking rental (optional)",
      "Travel insurance",
      "Tips for desert crew and drivers"
    ],
    "highlights": [
      "Explore the vast rolling sand dunes of Sarfaranga Cold Desert in Shigar",
      "Experience thrilling 4x4 dune bashing and double-humped camel rides",
      "Camp in luxury glamping domes under brilliant Milky Way skies",
      "Barbecue dinner and traditional Balti folk music by the campfire"
    ]
  },
  "katpana-desert": {
    "itinerary": [
      {
        "day": 1,
        "title": "Katpana Cold Desert Tour & Sunset View",
        "description": "Afternoon pick-up from Skardu hotel, drive into Katpana desert, walk the ridges, enjoy sunset over the Indus River, and return to hotel."
      }
    ],
    "included": [
      "Private vehicle transportation",
      "Tour guide",
      "Evening tea and snacks",
      "Site entry passes"
    ],
    "excluded": [
      "Hotel accommodation in Skardu",
      "Personal expenses, snacks, and quad biking",
      "Travel insurance",
      "Tips for guide and driver"
    ],
    "highlights": [
      "Walk among the famous white sand dunes of Katpana Cold Desert",
      "Contrast golden sands with frozen winter snow or icy Indus River channels",
      "Unrivaled sunset photography across the Karakoram horizon",
      "Convenient afternoon excursion located right outside Skardu"
    ]
  },
  "khamosh-waterfall": {
    "itinerary": [
      {
        "day": 1,
        "title": "Drive Skardu to Kharmang & Khamosh Waterfall (2,400m)",
        "description": "Drive from Skardu through the dramatic Kharmang gorge; arrive at the towering Khamosh waterfall and stay in local riverside lodge."
      },
      {
        "day": 2,
        "title": "Kharmang Valley Exploration & Return to Skardu",
        "description": "Visit local fruit orchards and historical water channels before enjoying the scenic return drive to Skardu."
      }
    ],
    "included": [
      "Private transport throughout from Skardu",
      "Overnight hotel / guest house stay with meals",
      "Local guide",
      "Entry fees"
    ],
    "excluded": [
      "Travel to and from Skardu",
      "Personal expenses, snacks, and extra beverages",
      "Travel insurance",
      "Tips for driver and local guide"
    ],
    "highlights": [
      "Marvel at the dramatic, sheer cliff waterfall of Khamosh in Kharmang",
      "Drive along the turquoise waters of the Indus River near the historical borderland",
      "Explore the peaceful apricot and walnut orchards of Hamzil village",
      "Enjoy traditional trout lunch in lush streamside settings"
    ]
  },
  "manthokha-waterfall": {
    "itinerary": [
      {
        "day": 1,
        "title": "Drive Skardu to Manthokha Waterfall (Kharmang)",
        "description": "Drive along the Indus riverbank into Kharmang valley; explore Manthokha waterfall gardens, enjoy fresh trout lunch, and stay at resort."
      },
      {
        "day": 2,
        "title": "Village Walks, Trout Farms & Return to Skardu",
        "description": "Visit nearby fish hatcheries and traditional stone hamlets before the afternoon drive back to Skardu."
      }
    ],
    "included": [
      "Private vehicle transportation from Skardu",
      "Overnight stay with breakfast and trout dinner",
      "Local tour guide",
      "Garden admission passes"
    ],
    "excluded": [
      "Travel to and from Skardu",
      "Personal expenses and souvenirs",
      "Travel insurance",
      "Tips for guide and driver"
    ],
    "highlights": [
      "Stand before the iconic 180-foot continuous curtain of Manthokha Waterfall",
      "Stroll through verdant apple and apricot orchards and pine picnic grounds",
      "Freshly prepared organic rainbow trout lunch beside the rushing stream",
      "Scenic drive along the Indus River canyon in lower Baltistan"
    ]
  },
  "nangma-valley": {
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival in Skardu & Drive to Khaplu",
        "description": "Meet in Skardu, drive along Shyok River to historic Khaplu town; check in to hotel."
      },
      {
        "day": 2,
        "title": "Drive Khaplu to Kanday Village (2,850m)",
        "description": "4x4 Jeep ride into the Hushe valley to Kanday village; meet porter team and briefing."
      },
      {
        "day": 3,
        "title": "Trek Kanday to Mingulo Broq (3,500m)",
        "description": "Trek up the Nangma gorge along glacial streams to Mingulo Broq meadow camp."
      },
      {
        "day": 4,
        "title": "Trek Mingulo Broq to Nangma Base Camp (4,200m)",
        "description": "Ascend into the main Nangma amphitheater beneath the towering granite walls of Amin Brakk."
      },
      {
        "day": 5,
        "title": "Exploration Day beneath Amin Brakk & Great Tower",
        "description": "Day hike toward the base of Amin Brakk and Shipton Spire ridge with world-class big-wall rock vistas."
      },
      {
        "day": 6,
        "title": "Trek Nangma Base Camp to Kanday Village",
        "description": "Descend the valley trail back to Kanday village for overnight stay."
      },
      {
        "day": 7,
        "title": "Drive Kanday to Skardu via Khaplu Palace",
        "description": "Drive back to Skardu with a stop to visit the 19th-century royal Khaplu Palace."
      },
      {
        "day": 8,
        "title": "Departure from Skardu",
        "description": "Flight from Skardu to Islamabad or onward journey."
      }
    ],
    "included": [
      "All ground transport (AC vehicle and 4x4 mountain jeeps)",
      "High quality camping equipment, mess tent, and 3 hot meals daily on trek",
      "Licensed mountain trekking guide and Balti porter crew",
      "Hotel nights in Khaplu and Skardu",
      "Central Karakoram / CKNP conservation fees",
      "First aid and emergency communications"
    ],
    "excluded": [
      "Flights to and from Skardu",
      "Personal trekking and sleeping gear",
      "Travel insurance",
      "Tips for porters and guide crew"
    ],
    "highlights": [
      "Trek beneath the sheer 1,200-meter vertical granite spire of Amin Brakk (5,850m)",
      "Camp in the lush alpine amphitheater of Nangma Valley surrounded by sheer monoliths",
      "Gaze upon the Great Tower, Denbor Peak, and Changi Tower",
      "Experience the welcoming culture of Kanday and Hushe valley communities"
    ]
  },
  "minimerg-domail": {
    "itinerary": [
      {
        "day": 1,
        "title": "Islamabad / Gilgit to Astore Valley (Rama)",
        "description": "Drive along the Indus and Astore rivers to Rama; visit Rama Lake surrounded by cedar forests."
      },
      {
        "day": 2,
        "title": "Drive Astore across Burzil Pass to Minimerg (2,840m)",
        "description": "4x4 Jeep traverse across the historical Burzil Pass into the lush hidden valley of Minimerg."
      },
      {
        "day": 3,
        "title": "Excursion to Domail & Rainbow Lake",
        "description": "Drive and walk to Domail, spend the day exploring Rainbow Lake, wildflower plains, and trout streams."
      },
      {
        "day": 4,
        "title": "Minimerg Nature Walks & Drive to Astore / Chilas",
        "description": "Morning photography walk among wooden chalets and drive back over the pass to Astore."
      },
      {
        "day": 5,
        "title": "Return Drive to Islamabad / Gilgit",
        "description": "Complete the scenic return journey for departure."
      }
    ],
    "included": [
      "4x4 Jeeps with experienced drivers throughout Astore sector",
      "Guest house / hotel accommodation with all meals",
      "Special border area entry permits and NOC clearances",
      "Professional tour guide",
      "All toll taxes and fees"
    ],
    "excluded": [
      "Flights to and from Gilgit or Islamabad",
      "Personal items and clothing",
      "Travel insurance",
      "Tips for crew"
    ],
    "highlights": [
      "Visit the postcard-perfect Rainbow Lake in Domail surrounded by alpine flora",
      "Cross the historical high-altitude Burzil Pass (4,100m) in Astore",
      "Explore the dense pine woodlands, wooden cottages, and flower-filled meadows of Minimerg",
      "Experience pristine nature and untouched high-altitude valley landscapes"
    ]
  },
  "chutroon-hot-springs": {
    "itinerary": [
      {
        "day": 1,
        "title": "Drive Skardu to Shigar Fort & Upper Shigar",
        "description": "Drive from Skardu through Sarfaranga desert to Shigar; tour Fong-Khar and continue to Upper Shigar."
      },
      {
        "day": 2,
        "title": "Chutroon Hot Springs & Village Walks",
        "description": "Full day enjoying the natural thermal mineral baths at Chutroon and hiking through local village orchards."
      },
      {
        "day": 3,
        "title": "Scenic Return Drive to Skardu",
        "description": "Morning tea by the Shigar River and relaxed drive back to Skardu hotel."
      }
    ],
    "included": [
      "Private transport from Skardu throughout",
      "Hotel / heritage lodge accommodation with breakfast and dinner",
      "Entry passes to Chutroon hot springs baths and Shigar Fort",
      "Local tour guide"
    ],
    "excluded": [
      "Travel to and from Skardu",
      "Personal expenses, laundry, and drinks",
      "Travel insurance",
      "Tips for driver and guide"
    ],
    "highlights": [
      "Rejuvenate in the natural therapeutic hot sulphur springs of Chutroon",
      "Explore Upper Shigar Valley orchards, ancient walnut groves, and wooden bridges",
      "Visit the 17th-century restored Shigar Fort (Fong-Khar) and Amburiq Mosque",
      "Unwind in serene mountain retreat settings away from busy city life"
    ]
  },
  "naltar-ski": {
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival in Islamabad & Flight to Gilgit",
        "description": "Arrive in Islamabad, take winter mountain flight to Gilgit; transfer to hotel and ski gear check."
      },
      {
        "day": 2,
        "title": "4x4 Snow Jeep Transfer to Naltar Valley (3,000m)",
        "description": "Drive with 4x4 snow jeeps up the snowy Naltar gorge to Naltar ski resort; warm-up ski runs in afternoon."
      },
      {
        "day": 3,
        "title": "Resort & Slope Skiing at Naltar",
        "description": "Full day skiing on the groomed ski slopes and chairlift / tow-rope facilities in Naltar Bala."
      },
      {
        "day": 4,
        "title": "Backcountry Ski Touring to Satrangi Lake",
        "description": "Backcountry ski tour through snow-laden pine forests toward the frozen Satrangi Lake bowl."
      },
      {
        "day": 5,
        "title": "Alpine Powder Descents & Training",
        "description": "Advanced off-piste powder skiing in open bowls with experienced local ski mountaineering instructors."
      },
      {
        "day": 6,
        "title": "Naltar to Gilgit & Evening Celebration",
        "description": "Final morning ski session; descend by 4x4 to Gilgit for traditional dinner and hot bath."
      },
      {
        "day": 7,
        "title": "Fly Gilgit to Islamabad & Departure",
        "description": "Morning flight back to Islamabad and transfer for international departure."
      }
    ],
    "included": [
      "Domestic flights Islamabad \u21c4 Gilgit with road backup",
      "4x4 Winter Jeeps with snow chains",
      "Heated alpine lodge accommodation in Naltar and hotel in Gilgit",
      "Ski slope lift passes and resort access fees",
      "Professional ski instructor and backcountry mountain guide",
      "All meals and hot winter drinks",
      "Ski equipment rental (skis, boots, poles) where needed"
    ],
    "excluded": [
      "International flights and visa",
      "Mandatory winter sports and medical insurance",
      "Personal winter clothing and thermal wear",
      "Tips for ski instructors and lodge staff"
    ],
    "highlights": [
      "Ski on Pakistan's oldest and most prestigious natural snow ski slopes at Naltar",
      "Explore untouched backcountry powder lines through pine and cedar forests",
      "Ski touring to frozen alpine lakes in deep winter wonderland conditions",
      "Warm alpine lodge accommodation with heated rooms and traditional mountain food"
    ]
  },
  "deosai-powder": {
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival in Islamabad & Flight to Skardu",
        "description": "Meet in Islamabad, scenic winter flight past Nanga Parbat to Skardu; check in to hotel."
      },
      {
        "day": 2,
        "title": "Skardu Acclimatization & Winter Gear Check",
        "description": "Ski equipment fitting, avalanche transceiver drills, and acclimatization in Skardu."
      },
      {
        "day": 3,
        "title": "Snowcat / 4x4 Approach to Deosai Edge (Ali Malik)",
        "description": "Ascend the snow-covered switchbacks to the edge of Deosai plateau; ski tour to base camp."
      },
      {
        "day": 4,
        "title": "Ski Touring across Deosai Plains (Days 4\u20137)",
        "description": "Backcountry ski touring across pristine snowfields, rolling bowls, and frozen lake basins with heated base dome."
      },
      {
        "day": 5,
        "title": "Summit Descents & Descent to Skardu",
        "description": "Final high powder descents; ski down toward Sadpara gorge and return by 4x4 to Skardu hotel."
      },
      {
        "day": 6,
        "title": "Reserve Day in Skardu",
        "description": "Buffer day for weather and celebration dinner with expedition crew."
      },
      {
        "day": 7,
        "title": "Flight to Islamabad & Departure",
        "description": "Fly to Islamabad and transfer to international airport."
      }
    ],
    "included": [
      "Domestic flights Islamabad \u21c4 Skardu round trip with winter baggage allowance",
      "Winter 4x4 snow transport and logistics",
      "Heated winter expedition dome tents with wood stoves and thermal sleeping pads",
      "Full winter cook crew providing hot calorie-rich meals",
      "Certified ski mountaineering guide and avalanche safety officer",
      "Avalanche safety gear (beacon, shovel, probe)",
      "National park winter wilderness permits"
    ],
    "excluded": [
      "International flights and visa",
      "Mandatory winter rescue and evacuation insurance",
      "Personal touring skis, skins, and boots",
      "Tips and personal expenses"
    ],
    "highlights": [
      "Ski the vast, silent winter expanse of Deosai Plateau at 4,114m",
      "Untouched powder snow slopes with limitless high-altitude open terrain",
      "Heated winter dome camps with warm stoves and hot gourmet meals",
      "One-of-a-kind wilderness ski expedition in the Karakoram/Himalayan transition"
    ]
  },
  "hispar-ski": {
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival in Islamabad & Flight to Skardu",
        "description": "Arrive in Islamabad, take flight to Skardu; expedition briefing and cargo inspection."
      },
      {
        "day": 2,
        "title": "Skardu to Askole (3,000m)",
        "description": "4x4 Jeep transfer through winter snows to Askole roadhead."
      },
      {
        "day": 3,
        "title": "Step onto Biafo Glacier on Skis (Days 3\u20136)",
        "description": "Skin up the Biafo Glacier hauling pulks, camping at Namla, Mango, and Baintha on winter snow."
      },
      {
        "day": 4,
        "title": "Snow Lake Skiing & Hispar Pass Ascent (Days 7\u20139)",
        "description": "Ski across the vast frozen ice cap of Snow Lake; cross the 5,151m Hispar La on touring skis."
      },
      {
        "day": 5,
        "title": "Descent down Hispar Glacier (Days 10\u201312)",
        "description": "Ski descent down the Hispar Glacier moraines toward Hispar village in Nagar."
      },
      {
        "day": 6,
        "title": "Drive Hispar to Hunza & Gilgit",
        "description": "Emerge into Hispar village, board 4x4 jeeps to Karimabad and Gilgit hotel."
      },
      {
        "day": 7,
        "title": "Fly to Islamabad & Departure",
        "description": "Morning flight from Gilgit to Islamabad and international departure."
      }
    ],
    "included": [
      "Domestic flights (Islamabad\u2013Skardu and Gilgit\u2013Islamabad)",
      "High-altitude ski mountaineering guide and glacier safety crew",
      "Expedition 4-season winter tents, heated mess tent, and 3 hot meals daily",
      "Pulks, glacier ropes, and safety hardware",
      "Satellite emergency phone and medical first-aid kit",
      "National park permits and environmental fees"
    ],
    "excluded": [
      "International flights and visa",
      "Mandatory extreme mountaineering rescue insurance",
      "Personal ski touring equipment and high-altitude boots",
      "Tips for expedition staff"
    ],
    "highlights": [
      "Ski traverse across one of Earth's longest non-polar glacier systems",
      "Cross the 5,151m Hispar Pass on skis with sweeping winter panoramas",
      "Pulk-hauling and high-altitude ski mountaineering in remote Karakoram ice wilderness",
      "Finish in the welcoming winter wonderland of Hunza Valley"
    ]
  },
  "hunza-heritage": {
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival in Gilgit & Drive to Karimabad (Hunza)",
        "description": "Meet in Gilgit, drive up the Karakoram Highway past Rakaposhi viewpoint to Karimabad."
      },
      {
        "day": 2,
        "title": "Baltit Fort, Altit Fort & Royal Gardens",
        "description": "Tour the iconic cliffside Baltit Fort, the ancient royal tower of Altit Fort, and the women's carpentry workshop."
      },
      {
        "day": 3,
        "title": "Ganish Heritage Settlement & Sacred Rock Carvings",
        "description": "Visit the 1,000-year-old wooden watchtowers of Ganish and the ancient Silk Route petroglyphs at Haldeikish."
      },
      {
        "day": 4,
        "title": "Upper Hunza Gulmit Homestay & Attabad Lake",
        "description": "Boat across Attabad Lake to Gulmit; check in to local family homestay, visit the local music school and rug-weaving cooperative."
      },
      {
        "day": 5,
        "title": "Borith Lake & Passu Village Cultural Walk",
        "description": "Walk among the stone homes and apricot orchards of Passu; learn traditional cooking with your host family."
      },
      {
        "day": 6,
        "title": "Drive Hunza to Gilgit & Departure",
        "description": "Farewell to hosts, drive to Gilgit Airport for flight back to Islamabad."
      }
    ],
    "included": [
      "Domestic flights Islamabad \u21c4 Gilgit with road backup",
      "Authentic heritage homestay and boutique hotel accommodations",
      "Private AC transport throughout",
      "All home-cooked traditional meals, breakfasts, and dinners",
      "Local cultural guide and all fort/museum admissions",
      "Attabad Lake boat ride"
    ],
    "excluded": [
      "International flights and visa",
      "Personal shopping and souvenirs",
      "Travel and medical insurance",
      "Tips for host families and guides"
    ],
    "highlights": [
      "Stay with a welcoming local Burusho family in a traditional heritage homestay",
      "Explore the 800-year-old Baltit Fort and 900-year-old Altit Fort",
      "Walk the ancient carved wooden alleyways of Ganish, the oldest settlement in Hunza",
      "Savor authentic traditional Hunzakut cuisine (Chapshuro, Dawdo, and apricot treats)"
    ]
  },
  "royal-baltistan": {
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival in Skardu & Drive to Shigar Valley",
        "description": "Arrive at Skardu Airport; scenic drive through Sarfaranga desert to Shigar; check in to Serena Shigar Fort."
      },
      {
        "day": 2,
        "title": "Shigar Fort, Amburiq Mosque & Royal Gardens",
        "description": "Guided architectural tour of Fong-Khar (Shigar Fort), the 14th-century Amburiq Mosque, and local walnut woodcarvers."
      },
      {
        "day": 3,
        "title": "Drive Shigar to Khaplu Valley (Ghanche)",
        "description": "Drive along the Indus and Shyok rivers to Khaplu; check in to the royal Serena Khaplu Palace."
      },
      {
        "day": 4,
        "title": "Khaplu Palace & Historic Chaqchan Mosque",
        "description": "Tour the Tibetan-Kashmiri royal palace chambers, visit Chaqchan Mosque, and hike to the Thoqsikhar viewpoint."
      },
      {
        "day": 5,
        "title": "Khaplu to Skardu & Kharpocho Fort",
        "description": "Return drive to Skardu; visit the 16th-century 'King of Forts' Kharpocho overlooking the Indus."
      },
      {
        "day": 6,
        "title": "Departure from Skardu",
        "description": "Morning transfer to Skardu Airport for onward flight."
      }
    ],
    "included": [
      "Domestic flights Islamabad \u21c4 Skardu round trip with road backup",
      "Deluxe heritage palace and hotel accommodation (Shigar Fort & Khaplu Palace)",
      "Private AC transport throughout Baltistan",
      "Daily gourmet breakfast and dinner",
      "Expert local historian guide",
      "All palace, museum, and heritage site admissions"
    ],
    "excluded": [
      "International flights and visa",
      "Lunches and personal drinks",
      "Travel and medical insurance",
      "Tips for guide and drivers"
    ],
    "highlights": [
      "Stay in the restored royal suites of Serena Khaplu Palace and Shigar Fort",
      "Visit the 700-year-old wooden Chaqchan Mosque, one of the oldest in South Asia",
      "Tour the 14th-century UNESCO-awarded Amburiq Mosque in Shigar",
      "Explore the royal Raja's gardens, historic bazaars, and Balti craft workshops"
    ]
  },
  "gilgit-bazaar": {
    "itinerary": [
      {
        "day": 1,
        "title": "Gilgit Heritage, Kargha Buddha & Bazaar Tour",
        "description": "Morning visit to Kargha Buddha cliff carvings; explore Gilgit old city, the British war cemetery, spice and lapis lazuli bazaars, and suspension bridges."
      }
    ],
    "included": [
      "Private vehicle transportation throughout the day",
      "Licensed local cultural guide",
      "Traditional lunch and tea",
      "Heritage site entry fees"
    ],
    "excluded": [
      "Hotel accommodation in Gilgit",
      "Personal shopping, gems, and souvenirs",
      "Travel insurance",
      "Tips for guide and driver"
    ],
    "highlights": [
      "Inspect the 7th-century rock-carved Kargha Buddha relief (Yashani)",
      "Walk the bustling Silk Route bazaars filled with mountain spices, dry fruits, and rough gemstones",
      "Cross the historic British-era Gilgit River suspension bridge",
      "Sample local Gilgiti cuisine and traditional salted mountain tea"
    ]
  },
  "nowruz-festival": {
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival in Skardu & Nowruz Preparations",
        "description": "Arrive in Skardu; witness festival preparations and traditional egg-painting rituals in local villages."
      },
      {
        "day": 2,
        "title": "Nowruz Celebration Day & Traditional Polo",
        "description": "Attend the official Nowruz opening ceremony, folk music performances, and intense mountain polo matches at the historic stadium."
      },
      {
        "day": 3,
        "title": "Village Feasts & Sword Dance Performances",
        "description": "Join local communities in Shigar for communal Nowruz feasts, traditional Balti poetry, and sword dances."
      },
      {
        "day": 4,
        "title": "Spring Blossom Walks in Apricot Orchards",
        "description": "Photograph the first pink and white apricot blossoms bursting across Baltistan's terraces."
      },
      {
        "day": 5,
        "title": "Departure from Skardu",
        "description": "Flight from Skardu to Islamabad or road departure."
      }
    ],
    "included": [
      "Domestic flights Islamabad \u21c4 Skardu with road backup",
      "Hotel accommodation with all meals",
      "Private transport throughout",
      "VIP access to festival venues and polo matches",
      "Local cultural guide and festival host"
    ],
    "excluded": [
      "International flights and Pakistan visa",
      "Personal shopping, polo souvenirs, and drinks",
      "Travel and medical insurance",
      "Tips for festival guides and drivers"
    ],
    "highlights": [
      "Experience the traditional Nowruz spring equinox festivities in Baltistan & Hunza",
      "Watch thrilling mountain polo matches and ceremonial sword dances",
      "Enjoy live Balti folk orchestras playing the daf, daman, and surna",
      "Taste festive spring delicacies, painted eggs, and communal feasts"
    ]
  },
  "kharpocho-organic-village": {
    "itinerary": [
      {
        "day": 1,
        "title": "Kharpocho Fort & Nansoq Organic Village Walk",
        "description": "Morning climb to Kharpocho Fort for aerial views; hike the cliff path to Nansoq village, tour organic farms, enjoy traditional lunch, and return."
      }
    ],
    "included": [
      "Private vehicle transfer and trail transfers",
      "Expert local guide",
      "Organic farm-to-table lunch and tea in Nansoq",
      "Kharpocho Fort entry passes"
    ],
    "excluded": [
      "Hotel accommodation in Skardu",
      "Personal shopping in organic farms",
      "Travel insurance",
      "Tips for guide and driver"
    ],
    "highlights": [
      "Ascend to the 16th-century fortress of Ali Sher Khan Anchan overlooking Skardu",
      "Walk the scenic cliffside trail along the Indus River to Nansoq",
      "Experience Pakistan's first certified organic mountain village visited by Prince Charles",
      "Enjoy an organic traditional Balti lunch in a stone farmhouse orchard"
    ]
  },
  "masur-rock": {
    "itinerary": [
      {
        "day": 1,
        "title": "Masur Rock Petroglyph & Archaeological Tour",
        "description": "Drive from Skardu to Masur Rock site; guided walking tour of carvings, petroglyphs, and local village trail; traditional lunch and return."
      }
    ],
    "included": [
      "Private transport from Skardu and return",
      "Archaeological expert guide",
      "Traditional Balti lunch and refreshments",
      "Site entry passes"
    ],
    "excluded": [
      "Hotel accommodation in Skardu",
      "Personal expenses and drinks",
      "Travel insurance",
      "Tips for archaeological guide and driver"
    ],
    "highlights": [
      "Inspect the ancient pre-Islamic Silk Route petroglyphs at Masur Rock",
      "Learn about centuries-old Tibetan inscriptions and trade routes",
      "Explore the tranquil countryside and orchard trails of surrounding Baltistan",
      "Guided by local archaeological and historical specialist"
    ]
  },
  "free-musical-night": {
    "itinerary": [
      {
        "day": 1,
        "title": "Balti Folk Musical Night & Cultural Campfire",
        "description": "Evening gathering around the outdoor campfire; enjoy live performances by master folk musicians from Sakhpat, traditional dances, and dinner."
      }
    ],
    "included": [
      "Full evening live musical performance by cultural partner Sakhpat",
      "Outdoor campfire setup and seating",
      "Traditional Balti dinner, barbecue, and herbal chai",
      "Cultural storytelling host"
    ],
    "excluded": [
      "Hotel accommodation in Skardu",
      "Private vehicle transfers (available upon request)",
      "Personal drinks and extra food items",
      "Tips and voluntary gratuities for musicians"
    ],
    "highlights": [
      "Live authentic Balti music by master musicians from our cultural partner Sakhpat",
      "Traditional daman (drums), surna (pipes), and participatory Balti sword/folk dances",
      "Open-air campfire with local mountain herbal tea and traditional appetizers",
      "Immersive cultural storytelling of Karakoram legends and mountain folklore"
    ]
  },
  "kalash-festival": {
    "itinerary": [
      {
        "day": 1,
        "title": "Islamabad to Swat / Dir",
        "description": "Drive from Islamabad via the Swat Motorway to Dir; check in to hotel."
      },
      {
        "day": 2,
        "title": "Dir through Lowari Tunnel to Chitral & Bumburet Valley",
        "description": "Cross the Lowari Tunnel into Chitral; continue by 4x4 jeep into Bumburet, the largest Kalash valley."
      },
      {
        "day": 3,
        "title": "Chilam Joshi Opening Celebrations in Rumbur",
        "description": "Attend the morning milk-distribution rituals and opening festival dances in Rumbur village."
      },
      {
        "day": 4,
        "title": "Main Festival Dances & Ceremonies in Bumburet",
        "description": "Full day witnessing the grand festival dances at the Charssu dance arena in Bumburet with hundreds of dancers."
      },
      {
        "day": 5,
        "title": "Birir Valley Exploration & Kalash Heritage Museum",
        "description": "Visit the traditional sanctuary of Birir and explore the Brun cultural museum."
      },
      {
        "day": 6,
        "title": "Chitral Town, Shahi Mosque & Chitral Fort",
        "description": "Drive to Chitral town; visit the historic Shahi Mosque, Chitral Fort, and local markhor viewpoint."
      },
      {
        "day": 7,
        "title": "Drive Chitral to Islamabad & Departure",
        "description": "Scenic return drive to Islamabad and transfer to international airport."
      }
    ],
    "included": [
      "Private AC transport and 4x4 jeeps in Kalash valleys",
      "Hotel and traditional guest house accommodation with all meals",
      "Official Kalash festival permits and community conservation taxes",
      "Expert local Kalash-speaking cultural guide",
      "All museum and heritage site admissions"
    ],
    "excluded": [
      "International flights and visa",
      "Personal souvenirs and photography fees",
      "Travel and medical insurance",
      "Tips for guide and drivers"
    ],
    "highlights": [
      "Experience the world-famous Chilam Joshi spring festival in Bumburet and Rumbur",
      "Witness ancient pagan rituals, rhythmic drumming, and circular sacred dances",
      "Photograph the colorful cowrie-shell headdresses (Kupas) and embroidered robes",
      "Drive through the Lowari Tunnel and explore historic Chitral Fort and Shahi Mosque"
    ]
  }
};

export function getTourDetails(id: string): TourDetails {
  return tourDetails[id] || defaultTourDetails;
}
