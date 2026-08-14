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
    'Authentic mountain landscapes and untouched Karakoram views',
    'Deep cultural immersion and local Balti / Hunza hospitality',
    'Expert local guidance and safe logistics',
  ],
};

export const tourDetails: Record<string, TourDetails> = {
  "k2-base-camp": {
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival in Islamabad & Briefing",
        "description": "Arrive at Islamabad International Airport where our team will transfer you to your hotel. You will spend the rest of the day handling permit formalities and attending a trek briefing in Islamabad before heading to the mountains."
      },
      {
        "day": 2,
        "title": "Fly to Skardu (2,230m)",
        "description": "Take a scenic flight over the Himalayas and past Nanga Parbat to reach Skardu. This town is the main hub for Karakoram treks. Spend the afternoon checking your gear and letting your body begin adjusting to the altitude."
      },
      {
        "day": 3,
        "title": "Skardu to Askole (3,000m)",
        "description": "Leave Skardu in 4x4 vehicles for a six to seven-hour drive through the Shigar and Braldu river gorges. The rough, unpaved road ends at Askole, a traditional farming village and the final settlement before the glacier."
      },
      {
        "day": 4,
        "title": "Askole to Jola (3,200m)",
        "description": "Begin your hike by leaving the village trails and walking across the rocky snout of the Biafo Glacier. The terrain is dry and requires careful footing. The trail leads into the Braldu valley, ending at the riverside camp of Jola."
      },
      {
        "day": 5,
        "title": "Jola to Paiju (3,450m)",
        "description": "Continue up the gorge on narrow, rocky paths, occasionally crossing glacial streams. The needle-like rock spires of Paiju Peak become visible in the distance. The day ends at Paiju camp, a green area with trees and clean water."
      },
      {
        "day": 6,
        "title": "Rest and Acclimatization at Paiju",
        "description": "Spend this day letting your body adjust to the altitude before moving onto the ice. You can take a short, steep hike up the ridges near camp to help the acclimatization process and get early views of the Baltoro Glacier."
      },
      {
        "day": 7,
        "title": "Paiju to Khoburtse (3,930m)",
        "description": "Step off the dirt trails and onto the rocky, debris-covered terminal moraine of the Baltoro Glacier. The hiking becomes harder as you navigate shifting ice and loose rocks. You will see the sheer rock faces of Great Trango Tower and Uli Biaho."
      },
      {
        "day": 8,
        "title": "Khoburtse to Urdukas (4,050m)",
        "description": "Walk up the lateral moraine until you reach Urdukas camp. This site sits on high rock terraces above the glacier. It offers clear views across the Baltoro Glacier directly toward the Cathedral and Trango peak groups."
      },
      {
        "day": 9,
        "title": "Urdukas to Goro II (4,380m)",
        "description": "Move onto the central ice of the Baltoro Glacier, navigating over glacial ripples and small meltwater streams. The large, snow-covered pyramid of Masherbrum (7,821m) stands out to the south as you make your way to the Goro II campsite."
      },
      {
        "day": 10,
        "title": "Goro II to Concordia (4,600m)",
        "description": "Arrive at Concordia, a massive junction where the Baltoro and Godwin-Austen glaciers meet. You are now surrounded by four of the world's 8,000-meter peaks. This spot provides your first clear, full view of K2."
      },
      {
        "day": 11,
        "title": "Concordia to K2 Base Camp (5,150m)",
        "description": "Start early to hike up the Godwin-Austen Glacier, passing under Broad Peak. You will reach K2 Base Camp at 5,150 meters, standing directly beneath the mountain. Visit the Gilkey Memorial to pay your respects before walking back to Concordia."
      },
      {
        "day": 12,
        "title": "Exploration and Contingency at Concordia",
        "description": "This day acts as a buffer in case of bad weather, giving you a better chance to see K2 clearly. If the weather is good, you can rest, take photos, or explore the ice formations near Broad Peak Base Camp."
      },
      {
        "day": 13,
        "title": "Concordia to Goro I or Urdukas",
        "description": "Begin the return trip down the Baltoro Glacier. Walking downhill requires less physical effort, but the loose rocks and ice still demand focus. The changing sunlight gives a different look to the Cathedral Peaks as you walk back."
      },
      {
        "day": 14,
        "title": "Urdukas to Paiju or Jola",
        "description": "Leave the permanent glacial ice and return to the solid dirt trails of the lower valleys. Following the Braldu River down, the air feels thicker and temperatures rise. You will camp at Paiju, finishing the high-altitude section of the trek."
      },
      {
        "day": 15,
        "title": "Trek to Askole and Drive to Skardu",
        "description": "Follow the established trails back to Askole. Once there, you will get into the 4x4 vehicles and drive back through the river gorges. Arrive in Skardu town to enjoy a hot shower, a real bed, and a final team dinner."
      },
      {
        "day": 16,
        "title": "Fly to Islamabad and Depart",
        "description": "Take the morning flight from Skardu back to Islamabad. Once in the capital, you will complete any final paperwork and we will transfer you to the international airport for your flight home."
      }
    ],
    "included": [
      "Internal flights between Islamabad and Skardu (or road transfers if flights are cancelled).",
      "Licensed English-speaking trekking guide and local support staff.",
      "All meals during the trekking and camping days.",
      "Camping equipment, including sleeping tents, mattresses, and a dining tent.",
      "Central Karakoram National Park entry fees and trekking permits.",
      "4x4 jeep transfers between Skardu and the Askole trailhead."
    ],
    "excluded": [
      "International flights to and from Pakistan.",
      "Pakistan tourist visa fees.",
      "Comprehensive travel and high-altitude rescue insurance.",
      "Personal trekking gear (sleeping bag, proper boots, warm clothing).",
      "Tips for the guide, porters, and kitchen staff.",
      "Hotel meals in Islamabad and Skardu."
    ],
    "highlights": [
      "Hike along the Baltoro Glacier, one of the longest glaciers outside the polar regions.",
      "Stand at Concordia, the famous glacial junction surrounded by four 8,000-meter peaks.",
      "Reach K2 Base Camp at 5,150m and see the Art Gilkey Memorial.",
      "View the sheer granite rock walls of Great Trango Tower and Masherbrum.",
      "Travel through the remote Shigar Valley and start the trek from Askole village."
    ]
  },
  "gondogoro-la": {
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival in Islamabad & Briefing",
        "description": "Arrive at Islamabad International Airport and transfer to your hotel. You will spend the day completing your permit formalities and attending a trek briefing in Islamabad to review the route and weather conditions."
      },
      {
        "day": 2,
        "title": "Fly to Skardu",
        "description": "Take the early morning flight to Skardu, flying directly over the Himalayas with views of Nanga Parbat. Spend the afternoon in Skardu resting, organizing your technical gear, and letting your body adapt to the 2,500m elevation."
      },
      {
        "day": 3,
        "title": "Drive Skardu to Askole (3,000m)",
        "description": "Leave Skardu in 4x4 jeeps for a rough, six to seven-hour drive through the Shigar and Braldu valleys. The road ends at Askole, a farming village where you will camp for the night and meet your porter team."
      },
      {
        "day": 4,
        "title": "Trek Askole to Jola (3,200m)",
        "description": "Start the trek by leaving Askole and walking across the rocky edge of the Biafo Glacier. The trail is dry, dusty, and exposed to the sun. Walk for about six hours along the river to reach the Jola campsite."
      },
      {
        "day": 5,
        "title": "Trek Jola to Paiju (3,450m)",
        "description": "Walk further up the Braldu gorge on narrow dirt and rock trails. The distinct rock needle of Paiju Peak comes into view today. Arrive at Paiju camp, a rare green oasis with trees and fresh spring water."
      },
      {
        "day": 6,
        "title": "Rest & Acclimatization at Paiju",
        "description": "Take a mandatory rest day to let your body adjust to the altitude before hitting the permanent ice. You can take a short hike up the local hillside to stay active and get your first look at the Baltoro Glacier."
      },
      {
        "day": 7,
        "title": "Trek Paiju to Khoburtse (3,930m)",
        "description": "Leave the dirt path and step onto the rough, debris-covered terminal moraine of the Baltoro Glacier. The walking becomes much harder as you navigate loose rocks. Camp at Khoburtse, directly across from the massive Trango Towers."
      },
      {
        "day": 8,
        "title": "Trek Khoburtse to Urdukas (4,050m)",
        "description": "Follow the side of the glacier upward to Urdukas. This campsite is built onto grassy terraces on the mountainside. It provides a comfortable resting place with excellent views of the Cathedral rock formations across the ice."
      },
      {
        "day": 9,
        "title": "Trek Urdukas to Goro II (4,380m)",
        "description": "Move onto the central, exposed white ice of the Baltoro Glacier. You will walk past glacial streams and ice towers. The massive, snow-covered face of Masherbrum stands out to the south as you arrive at the cold Goro II camp."
      },
      {
        "day": 10,
        "title": "Trek Goro II to Concordia (4,600m)",
        "description": "Trek for five hours up the central glacier to Concordia, the huge intersection of the Baltoro and Godwin-Austen glaciers. This camp is surrounded by high peaks and provides your first clear, unbroken view of K2."
      },
      {
        "day": 11,
        "title": "Excursion to K2 Base Camp (5,150m)",
        "description": "Leave early to hike up the Godwin-Austen Glacier, passing Broad Peak Base Camp along the way. Reach K2 Base Camp to see the mountain up close and visit the Gilkey Memorial before returning to Concordia to sleep."
      },
      {
        "day": 12,
        "title": "Concordia to Ali Camp (4,800m)",
        "description": "Leave the main Baltoro route and turn onto the Vigne Glacier. The path is snowy and leads steadily uphill to Ali Camp. This high, rocky camp sits directly below the Gondogoro La pass and serves as your launching point."
      },
      {
        "day": 13,
        "title": "Cross Gondogoro La (5,585m) to Khuspang (4,688m)",
        "description": "Wake up before midnight to start the steep, snowy climb up the pass using crampons and fixed ropes. Reach the top at sunrise for incredible views of four 8,000m peaks. Carefully descend the steep far side down to Khuspang camp."
      },
      {
        "day": 14,
        "title": "Weather Buffer / Rest Day at Khuspang",
        "description": "This day acts as a required safety buffer in case bad weather delays your crossing of the Gondogoro La. If you crossed successfully on schedule, you will use this day to rest and recover in the beautiful pastures of Khuspang."
      },
      {
        "day": 15,
        "title": "Trek Khuspang to Saicho (3,330m)",
        "description": "Leave the high glaciers behind and walk down into the Hushe Valley. The trail crosses the Gondogoro Glacier moraine before entering green, alpine terrain with trees and flowers. Camp at Saicho, a sandy spot beside the river."
      },
      {
        "day": 16,
        "title": "Trek Saicho to Hushe Village (3,050m)",
        "description": "Complete the final, easy walking day down the valley. The trail passes through summer pastures and small farming settlements. Arrive in Hushe village, where the trekking portion of your trip officially ends."
      },
      {
        "day": 17,
        "title": "Drive Hushe to Skardu via Khaplu",
        "description": "Board 4x4 jeeps in Hushe for the drive back to civilization. The route takes you through the wider, green valleys of Khaplu before rejoining the main road to Skardu. Enjoy a hot shower and a real bed at your hotel."
      },
      {
        "day": 18,
        "title": "Reserve Day in Skardu",
        "description": "Keep this day as a buffer in case of any delays coming down from the mountains. If you are on schedule, spend the day exploring Skardu\u2019s local bazaars, visiting Kharpocho Fort, or simply resting at the hotel."
      },
      {
        "day": 19,
        "title": "Flight Skardu to Islamabad",
        "description": "Take the morning flight from Skardu back to Islamabad. Once in the city, you will handle your final permit paperwork. The rest of the afternoon is free for you to relax or do some last-minute shopping."
      },
      {
        "day": 20,
        "title": "International Departure",
        "description": "Enjoy your final breakfast in Pakistan. Our team will pick you up from the hotel and transfer you to Islamabad International Airport in time for your flight home."
      }
    ],
    "included": [
      "Internal flights between Islamabad and Skardu (or road transfers if flights are cancelled).",
      "Licensed English-speaking trekking guide and local support staff.",
      "All meals during the trekking and camping days.",
      "Camping equipment (tents, mattresses) and group technical gear for the pass (fixed ropes).",
      "Central Karakoram National Park entry fees and trekking permits.",
      "4x4 jeep transfers between Skardu, Askole, and Hushe."
    ],
    "excluded": [
      "International flights to and from Pakistan.",
      "Pakistan tourist visa fees.",
      "Travel and high-altitude rescue insurance (mandatory for crossing the pass).",
      "Personal climbing gear (crampons, harness, locking carabiners, ice axe, helmet).",
      "Tips for the guide, porters, and kitchen staff.",
      "Hotel meals in Islamabad and Skardu."
    ],
    "highlights": [
      "Cross the Gondogoro La pass at 5,585m, requiring crampons and fixed ropes.",
      "Complete a full circular route rather than walking back the same way.",
      "Stand at Concordia to view four of the world's 8,000-meter peaks.",
      "Visit K2 Base Camp and the Art Gilkey Memorial.",
      "Descend from the harsh glacial ice into the green, alpine Hushe Valley."
    ]
  },
  "snow-lake": {
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival in Islamabad & Briefing",
        "description": "Arrive at Islamabad International Airport and transfer to your hotel. You will spend the day completing your permit formalities and attending a trek briefing in Islamabad to review the route, safety protocols, and weather conditions."
      },
      {
        "day": 2,
        "title": "Fly to Skardu",
        "description": "Take the early morning flight to Skardu, flying directly over the Himalayas with views of Nanga Parbat. Spend the afternoon in Skardu resting, organizing your technical gear, and letting your body adapt to the elevation."
      },
      {
        "day": 3,
        "title": "Drive Skardu to Askole (3,000m)",
        "description": "Leave Skardu in 4x4 jeeps for a rough, six to seven-hour drive through the Shigar and Braldu valleys. The road ends at Askole, a traditional farming village where you will camp for the night and meet your porter team."
      },
      {
        "day": 4,
        "title": "Trek Askole to Namla (3,400m)",
        "description": "Leave the standard K2 route behind and turn onto the Biafo Glacier. The initial walking is on dry, rocky moraine along the edge of the ice. After about six hours of walking, you will reach the campsite at Namla, situated on the edge of the glacier."
      },
      {
        "day": 5,
        "title": "Trek Namla to Mango (3,650m)",
        "description": "Continue up the Biafo Glacier. The trail involves navigating over loose rocks and ice ridges. The surrounding granite peaks grow steeper and sharper. After five hours of trekking, arrive at Mango camp, located on a grassy lateral moraine."
      },
      {
        "day": 6,
        "title": "Trek Mango to Baintha (3,990m)",
        "description": "Move toward the center of the glacier where the ice becomes whiter and smoother. Walking becomes easier on the clear ice, though you must stay alert for small crevasses. Reach Baintha camp, a green pasture area frequented by local wildlife."
      },
      {
        "day": 7,
        "title": "Acclimatization Day at Baintha",
        "description": "Take a mandatory rest day at Baintha to let your body adjust to the altitude. You can relax at camp, wash clothes in the fresh streams, or take a steep acclimatization hike up the ridge behind camp for panoramic views of the glacier."
      },
      {
        "day": 8,
        "title": "Trek Baintha to Marphogoro (4,400m)",
        "description": "Step back onto the main white ice of the Biafo Glacier. The trek is relatively flat but involves navigating around deep meltwater rivers and larger crevasses. Roped travel may begin today depending on snow conditions. Camp at Marphogoro."
      },
      {
        "day": 9,
        "title": "Trek Marphogoro to Karpogoro (4,680m)",
        "description": "Walk further up the gently sloping glacier. The valley widens significantly as you approach the Snow Lake basin. The ice here is often covered in snow, requiring careful footing and group coordination. Camp at Karpogoro near the edge of the basin."
      },
      {
        "day": 10,
        "title": "Trek Karpogoro to Snow Lake / Hispar Base (4,770m)",
        "description": "Enter the massive Snow Lake (Lukpe Lawo) basin. This huge, flat expanse of ice is 16 kilometers wide and surrounded by jagged, unclimbed peaks. Cross the basin to set up camp at the base of the Hispar La pass."
      },
      {
        "day": 11,
        "title": "Exploration of Snow Lake",
        "description": "Use this day to rest, acclimatize, and explore the Snow Lake basin. This day also serves as an important weather buffer. If the weather is clear, you will prepare your climbing harnesses and review roped travel techniques for tomorrow\u2019s pass crossing."
      },
      {
        "day": 12,
        "title": "Cross Hispar La (5,151m) to Kani Basa (4,510m)",
        "description": "Start before dawn to climb the snowy slopes to the top of the Hispar La pass. At 5,151m, you are rewarded with incredible views down both the Biafo and Hispar glaciers. Carefully descend the steeper, crevassed far side to the Kani Basa campsite."
      },
      {
        "day": 13,
        "title": "Trek Kani Basa to Jutmal (4,270m)",
        "description": "Begin your journey down the Hispar Glacier. The descent involves crossing several side glaciers and navigating difficult moraine ridges. The walking is rough and tiring, but the views of the towering peaks around the Hispar Valley keep you moving to Jutmal camp."
      },
      {
        "day": 14,
        "title": "Trek Jutmal to Bitanmal (3,660m)",
        "description": "Continue descending the Hispar Glacier. The trail moves off the central ice and follows the rocky lateral moraine. The air feels thicker and warmer as you drop in elevation. Arrive at Bitanmal, a large summer pasture area used by local shepherds."
      },
      {
        "day": 15,
        "title": "Trek Bitanmal to Hispar Village (3,200m)",
        "description": "Complete the final trekking day. The trail leaves the glacier entirely, crossing a suspension bridge before leading into the green fields and stone houses of Hispar Village. Celebrate the end of the foot journey with your trekking crew."
      },
      {
        "day": 16,
        "title": "Drive Hispar Village to Karimabad (Hunza)",
        "description": "Board 4x4 jeeps for the drive down the steep, narrow road from Hispar into the main Nagar Valley, eventually connecting to the Karakoram Highway. Arrive in the beautiful town of Karimabad in the Hunza Valley for a hot shower and a soft bed."
      },
      {
        "day": 17,
        "title": "Explore Hunza Valley & Baltit Fort",
        "description": "Spend a relaxing day exploring the culture of the Hunza Valley. Visit the 700-year-old Baltit Fort, walk through the cobbled streets of Karimabad, and enjoy the famous walnut cake at local cafes while looking up at Rakaposhi (7,788m)."
      },
      {
        "day": 18,
        "title": "Drive Karimabad to Gilgit",
        "description": "Take a short, scenic drive down the Karakoram Highway to the city of Gilgit, the administrative capital of the region. Check into your hotel and spend the afternoon exploring the local bazaars or resting after the expedition."
      },
      {
        "day": 19,
        "title": "Fly Gilgit to Islamabad",
        "description": "Take the spectacular morning flight from Gilgit back to Islamabad. Upon arrival, we will transfer you to your hotel. The afternoon is free for you to relax, enjoy a final group dinner, or pick up souvenirs."
      },
      {
        "day": 20,
        "title": "Contingency / Sightseeing in Islamabad",
        "description": "Keep this day as a buffer in case mountain flights from Gilgit are delayed by weather. If you are already in Islamabad, you can take a guided tour to the Faisal Mosque, the Pakistan Monument, or the Margalla Hills."
      },
      {
        "day": 21,
        "title": "International Departure",
        "description": "Enjoy your final breakfast in Pakistan. Our team will pick you up from the hotel and transfer you to Islamabad International Airport in time for your flight home."
      }
    ],
    "included": [
      "Internal flights between Islamabad and Skardu/Gilgit (or road transfers if flights are cancelled).",
      "Licensed English-speaking trekking guide and local support staff.",
      "All meals during the trekking and camping days.",
      "Camping equipment (tents, mattresses) and group technical gear (fixed ropes).",
      "National Park entry fees, trekking permits, and bridge tolls.",
      "4x4 jeep transfers to Askole and from Hispar Village."
    ],
    "excluded": [
      "International flights to and from Pakistan.",
      "Pakistan tourist visa fees.",
      "Travel and high-altitude rescue insurance (mandatory for glacier travel).",
      "Personal climbing gear (crampons, climbing harness, locking carabiners, ice axe).",
      "Tips for the guide, porters, and kitchen staff.",
      "Hotel meals in Islamabad, Skardu, and Gilgit."
    ],
    "highlights": [
      "Walk the combined length of the Biafo and Hispar glaciers, forming one of the longest glacial systems outside the polar regions.",
      "Camp at Snow Lake (Lukpe Lawo), a massive, high-altitude basin of ice and snow.",
      "Cross the 5,151m Hispar La pass safely using roped glacier travel.",
      "Experience the stark contrast of descending from the harsh ice into the lush, green Hunza Valley.",
      "Explore the ancient Baltit Fort and the local culture of Karimabad."
    ]
  },
  "fairy-meadows": {
    "itinerary": [
      {
        "day": 1,
        "title": "Islamabad Arrival & Drive to Chilas / Gilgit",
        "description": "Arrive in Islamabad. After a short meeting with your guide and finalizing any paperwork, begin the long drive north on the Karakoram Highway. You will pass through the green hills of Mansehra before reaching the dry, rocky landscapes of Chilas or Gilgit for the night."
      },
      {
        "day": 2,
        "title": "Raikot Bridge, 4x4 Jeep to Tattu & Hike to Fairy Meadows (3,300m)",
        "description": "Drive to Raikot Bridge and leave your main vehicle behind. Board local 4x4 jeeps for an exciting, steep ride up a narrow dirt cliff road to Tattu village. From Tattu, hike uphill for three to four hours through pine forests to reach the green pastures of Fairy Meadows."
      },
      {
        "day": 3,
        "title": "Fairy Meadows to Beyal Camp & Viewpoint",
        "description": "Wake up to sunrise views of Nanga Parbat right from your cabin. Today involves a gentle hike deeper into the valley. Walk for about two hours through thick forests and over small streams to reach Beyal Camp, where you can relax and take photos of the mountain."
      },
      {
        "day": 4,
        "title": "Excursion to Nanga Parbat Base Camp (3,967m)",
        "description": "Leave Fairy Meadows or Beyal Camp early for the hike to Nanga Parbat Base Camp. The trail becomes steeper and rockier as you pass the tree line and walk alongside the Raikot Glacier. Reach base camp at 3,967m before returning to Fairy Meadows for the evening."
      },
      {
        "day": 5,
        "title": "Exploration & Photography at Fairy Meadows",
        "description": "Spend a relaxing day at Fairy Meadows. This rest day allows you to recover from yesterday's high-altitude hike. You can explore the surrounding woods, interact with local shepherds, or simply sit with a cup of tea and watch the light change over the 8,126m peak."
      },
      {
        "day": 6,
        "title": "Hike down to Tattu, 4x4 to Raikot Bridge & Drive to Naran / Besham",
        "description": "Begin your return journey by hiking downhill from Fairy Meadows back to Tattu village. Meet the local jeeps again for the ride down the cliff road to Raikot Bridge. Transfer back into your main vehicle and drive south to Naran or Besham for the night."
      },
      {
        "day": 7,
        "title": "Drive to Islamabad & Departure",
        "description": "Complete the final stretch of driving back to the capital. Arrive in Islamabad in the afternoon, where you will have time to repack your bags. Our team will transfer you to the international airport in time for your flight home."
      }
    ],
    "included": [
      "Private road transport from Islamabad and back along the Karakoram Highway.",
      "Local 4x4 jeep transfers from Raikot Bridge to Tattu village.",
      "Licensed English-speaking guide for the entire trip.",
      "Accommodation in standard hotels during road travel and cabins/tents at Fairy Meadows.",
      "All meals during your stay at Fairy Meadows.",
      "National Park entry fees and local taxes."
    ],
    "excluded": [
      "International flights to and from Pakistan.",
      "Pakistan tourist visa fees.",
      "Travel and medical insurance (highly recommended).",
      "Personal hiking gear (sturdy boots, warm jacket, daypack).",
      "Meals during the road travel days (Islamabad, Chilas, Naran).",
      "Tips for the guide, jeep drivers, and local staff."
    ],
    "highlights": [
      "Ride local 4x4 jeeps up the steep, thrilling mountain track from Raikot Bridge to Tattu village.",
      "Stay in traditional wooden cabins or tents at Fairy Meadows with clear views of Nanga Parbat.",
      "Hike through dense pine forests and alpine streams to reach Beyal Camp.",
      "Stand at Nanga Parbat Base Camp (3,967m) and view the Raikot Glacier.",
      "Travel along the famous Karakoram Highway through the mountains of northern Pakistan."
    ]
  },
  "rakaposhi-bc": {
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival in Gilgit & Drive to Minapin Village (Nagar)",
        "description": "Arrive in Gilgit by road or flight and meet your guide. After a short rest, drive roughly one hour along the Karakoram Highway and into the Nagar Valley to reach Minapin village. This small farming community sits at the foot of Rakaposhi and is the starting point for the trek. Spend the evening settling in, checking your gear, and getting a feel for the scale of the mountain above."
      },
      {
        "day": 2,
        "title": "Trek Minapin to Tagaphari (3,260m)",
        "description": "Start the trek early and leave Minapin on foot. The trail climbs steadily through terraced wheat fields and apple orchards before entering a belt of pine and birch trees. After three to four hours of consistent uphill walking, you arrive at Tagaphari, an open summer pasture at 3,260m used by local herders. The views of the Karakoram Highway and the Hunza River far below are very clear from here."
      },
      {
        "day": 3,
        "title": "Day Hike to Diran Base Camp (3,700m) & Rakaposhi Ridge",
        "description": "Leave your tents at Tagaphari and set out early for the upper section of the trek. The trail gets steeper and rockier as you cross over moraines and glacial debris. After two to three hours, you reach the Diran Base Camp area at around 3,700m, where you are level with the lower icefall of the Minapin Glacier. Both Rakaposhi and Diran Peak fill the skyline. Return to Tagaphari for the night."
      },
      {
        "day": 4,
        "title": "Trek Tagaphari to Minapin & Drive to Karimabad (Hunza)",
        "description": "Descend from the high pastures back to Minapin village. The downhill walk takes around two to three hours. Once at the village, board your vehicle and drive north along the Karakoram Highway to Karimabad, the main town in the Hunza Valley. Spend the evening walking through the old market, eating at local restaurants, and enjoying the views of Hunza from your hotel."
      },
      {
        "day": 5,
        "title": "Karimabad to Gilgit & Departure",
        "description": "After breakfast, drive back south from Karimabad toward Gilgit. The drive takes about one hour and follows the dramatic Hunza River gorge. Arrive in Gilgit with enough time for lunch or a short stop before your onward transport or flight. Your guide will assist with any final arrangements at the Gilgit airport or bus terminal."
      }
    ],
    "included": [
      "Private vehicle transfers between Gilgit, Minapin, and Karimabad.",
      "Licensed English-speaking guide for the full trek.",
      "All meals during the trekking and camping days.",
      "Camping equipment (tents, sleeping mats, kitchen tent) at Tagaphari and Diran Base Camp.",
      "Local park entry fees and any local trail taxes."
    ],
    "excluded": [
      "International flights to and from Pakistan.",
      "Pakistan tourist visa fees.",
      "Flights or bus fares to and from Gilgit.",
      "Travel and medical insurance.",
      "Tips for the guide and any porters.",
      "Hotel meals and personal expenses in Gilgit and Karimabad."
    ],
    "highlights": [
      "Trek up through the green terraces and forests of Minapin village in Nagar Valley.",
      "Camp at Tagaphari summer pastures (3,260m) with open views of the valley below.",
      "Hike to Diran Base Camp at around 3,700m to see the Minapin Glacier up close.",
      "Look directly up at both Rakaposhi (7,788m) and Diran Peak (7,266m) from the ridge.",
      "Visit the famous Hunza Valley and Karimabad on the return leg of the trip."
    ]
  },
  "rush-lake": {
    "itinerary": [
      {
        "day": 1,
        "title": "Islamabad Arrival & Flight to Gilgit",
        "description": "Arrive in Islamabad and complete your initial permit paperwork. In the morning, take the scenic mountain flight directly to Gilgit, flying past the Nanga Parbat massif. Transfer to your hotel in Gilgit, meet your trekking guide, and prepare your gear for the mountains."
      },
      {
        "day": 2,
        "title": "Drive Karimabad to Hoper Village (Nagar)",
        "description": "Leave Gilgit and drive up the Karakoram Highway toward the Hunza Valley. Pass through Karimabad and turn off into the Nagar Valley. The road climbs steadily to Hoper Village, a lush, green farming community sitting right at the edge of the Hoper Glacier. Spend the night here in a local guesthouse."
      },
      {
        "day": 3,
        "title": "Trek Hoper to Bericho Kor (3,300m)",
        "description": "Begin the trek by walking directly down onto the Hoper Glacier. The crossing is rough and requires careful steps over loose rocks and ice. Once across, cross the Barpu Glacier and climb up the lateral moraine to reach the summer grazing settlement of Bericho Kor for your first night of camping."
      },
      {
        "day": 4,
        "title": "Trek Bericho Kor to Chidin Harai (4,440m)",
        "description": "Today is a challenging and steep climbing day. The trail leaves the glacier valley and goes straight up the mountainside. You will gain over 1,000 meters in altitude as you hike through steep meadows. Arrive at Chidin Harai, a high ridge camp with fantastic views of the peaks below."
      },
      {
        "day": 5,
        "title": "Trek Chidin Harai to Rush Lake (4,694m)",
        "description": "Continue the ascent along the high alpine ridge. The air is noticeably thinner here. After three to four hours of steady uphill trekking, you will crest the final hill and see Rush Lake. Set up camp near the water at 4,694m and rest for the afternoon."
      },
      {
        "day": 6,
        "title": "Summit Rush Peak (5,098m) & Lake Exploration",
        "description": "Wake up early for the optional climb up Rush Peak, which stands right above the lake. The ascent takes about two hours and requires no technical climbing gear. At 5,098m, the summit offers an unbroken view of Spantik and the Hispar valley. Return to the lake for lunch and relaxation."
      },
      {
        "day": 7,
        "title": "Trek Rush Lake to Gututz (3,500m)",
        "description": "Pack up camp and begin the long, steep descent from the high lake basin. The trail drops rapidly down the mountainside, returning to thicker air and warmer temperatures. Arrive at Gututz, another summer shepherd settlement, and camp for the night."
      },
      {
        "day": 8,
        "title": "Trek Gututz to Hoper & Drive to Hunza",
        "description": "Complete the final trekking segment. Descend back to the glacier level, cross the ice one last time, and walk up the dirt path into Hoper Village. Say goodbye to your porter team, load the 4x4 jeeps, and drive to Karimabad in the Hunza Valley for a well-deserved hot shower."
      },
      {
        "day": 9,
        "title": "Drive Hunza to Gilgit",
        "description": "Enjoy a slow morning in Karimabad. You can visit the ancient Baltit Fort or shop for local handicrafts in the bazaar. After lunch, drive back down the Karakoram Highway to Gilgit. Check into your hotel and enjoy a final celebration dinner with your guide."
      },
      {
        "day": 10,
        "title": "Fly Gilgit to Islamabad & Departure",
        "description": "Take the morning flight from Gilgit back to Islamabad. Upon arrival in the capital, our team will transfer you to your hotel for the afternoon, or directly to the international airport depending on your flight schedule home."
      }
    ],
    "included": [
      "Internal flights between Islamabad and Gilgit (or road transfers if flights are cancelled).",
      "Private road transport between Gilgit, Hunza, and Hoper Village.",
      "Licensed English-speaking trekking guide and local porter team.",
      "All meals during the trekking and camping days.",
      "Camping equipment (tents, sleeping mats, mess tent, toilet tent).",
      "National Park entry fees and trekking permits."
    ],
    "excluded": [
      "International flights to and from Pakistan.",
      "Pakistan tourist visa fees.",
      "Travel and high-altitude rescue insurance (mandatory).",
      "Personal hiking gear (sturdy boots, sleeping bag, warm layers, daypack).",
      "Hotel meals in Islamabad, Gilgit, and Hunza.",
      "Tips for the guide, porters, and kitchen staff."
    ],
    "highlights": [
      "Navigate the moving ice and rock debris of the Hoper (Bualtar) and Barpu glaciers.",
      "Camp at the shores of Rush Lake, sitting at a massive 4,694 meters.",
      "Summit Rush Peak (5,098m) for 360-degree views of the Karakoram Range.",
      "See Spantik (Golden Peak) and Malubiting shining above the valleys.",
      "Experience the culture of Hoper Village and the Hunza Valley before and after the trek."
    ]
  },
  "buddha-ringchan-trek": {
    "itinerary": [
      {
        "day": 1,
        "title": "Manthal Buddha Rock & Sadpara Gorge Hike",
        "description": "Start your morning with a short drive from central Skardu to the Manthal village area. From the trailhead, take an easy 20-minute walk to the Manthal Buddha Rock, an important piece of 8th-century Buddhist history carved directly into a large granite boulder. After spending time at the rock, continue on foot for a moderate hike into the lower sections of the Sadpara Gorge, enjoying the stark, rocky scenery before returning to Skardu for the evening."
      },
      {
        "day": 2,
        "title": "Ringchan Historic Trail & Kharpocho Vista",
        "description": "Leave your hotel early for a more demanding day of hiking. Head back toward the Manthal area to access the Ringchan Trail. This route takes roughly 90 minutes of steep uphill walking and involves some minor hands-and-feet scrambling along exposed ledges. At the top, you are rewarded with a sweeping, panoramic view of the entire Skardu valley, similar to the vistas seen from Kharpocho Fort. Descend carefully back to the valley floor in the afternoon."
      }
    ],
    "included": [
      "Private vehicle transfers between your hotel in Skardu and the trailheads.",
      "Licensed, English-speaking local hiking guide.",
      "Entry fees to the Manthal Buddha Rock heritage site.",
      "Basic first aid kit carried by your guide."
    ],
    "excluded": [
      "Hotel accommodation in Skardu (this is a day-activity package).",
      "Meals (breakfast, lunch, and dinner are at your own expense).",
      "Flights or bus travel to and from Skardu.",
      "Pakistan tourist visa fees.",
      "Travel and medical insurance.",
      "Tips for your local guide and driver."
    ],
    "highlights": [
      "Visit the Manthal Buddha Rock, a massive 8th-century granite carving of a meditating Buddha.",
      "Hike through the scenic Sadpara Gorge, located just south of Skardu town.",
      "Challenge yourself on the steep, narrow Ringchan Trail for elevated valley views.",
      "Look out over the vast Skardu basin and the winding Indus River from high viewpoints.",
      "Use this short trip as the perfect warm-up and acclimatization exercise before longer treks."
    ]
  },
  "k2-expedition": {
    "itinerary": [
      {
        "day": 1,
        "title": "Day 1\u20134 \u2013 Arrival in Islamabad & Travel to Skardu",
        "description": "Arrive in Islamabad for expedition briefings and permit formalities. Once paperwork is cleared, take the scenic mountain flight to Skardu (or drive the Karakoram Highway if flights are grounded due to weather). Spend a day in Skardu finalizing equipment, packing expedition barrels, and resting before the trek."
      },
      {
        "day": 2,
        "title": "Day 5\u201311 \u2013 The Approach Trek to K2 Base Camp",
        "description": "Drive by 4x4 jeep from Skardu to the trail edge at Askole. Over the next week, trek up the immense Baltoro Glacier to acclimatize. You will pass iconic campsites like Paiju and Urdukas, eventually reaching the stunning glacier junction of Concordia. From there, hike up the Godwin-Austen Glacier to establish your home at K2 Base Camp (approx. 5,150m)."
      },
      {
        "day": 3,
        "title": "Day 12\u201340 \u2013 Acclimatization Rotations & High Camps",
        "description": "Spend the next several weeks focused on acclimatization and route preparation on the Abruzzi Spur. You will conduct multiple rotations: climbing up to Camp 1 (~6,100m) and Camp 2 (~6,700m), sleeping high, and eventually pushing to Camp 3 (~7,300m) above the Black Pyramid. Between rotations, you will descend to Base Camp to recover, eat heavily, and monitor mountain conditions."
      },
      {
        "day": 4,
        "title": "Day 41\u201350 \u2013 Summit Push Window",
        "description": "When a stable weather window opens, the team begins the final push. This involves climbing steadily over several days through C1, C2, and C3 to reach Camp 4 (~8,000m) on the Shoulder. From C4, the summit bid begins in the dark, ascending through the Bottleneck and out onto the summit ridge (8,611m). After the summit, climbers must safely and efficiently rappel and descend back to the lower camps and Base Camp."
      },
      {
        "day": 5,
        "title": "Day 51\u201360 (Approximate) \u2013 Descent and Return to Islamabad",
        "description": "After a safe return to Base Camp, the team packs up the expedition and begins the long trek back down the Baltoro Glacier toward Askole. From Askole, take jeeps back to Skardu and catch a flight to Islamabad for final paperwork. *Note: The exact dates for the descent and your final departure home are entirely dependent on when the summit weather window occurs. Flexibility is mandatory.*"
      }
    ],
    "included": [
      "Domestic flights (Islamabad to Skardu) and 4x4 transfers to the Askole trailhead.",
      "Licensed high-altitude climbing guides and local Balti support staff.",
      "All meals from arrival in Pakistan through the entire expedition.",
      "Complete Base Camp services (sleeping tents, dining tent, toilet tent, generator/solar power).",
      "Climbing permits, peak royalties, and environmental fees.",
      "Group climbing gear (fixed ropes, ice screws, snow pickets) for the route."
    ],
    "excluded": [
      "International flights to and from Pakistan.",
      "Pakistan tourist visa fees.",
      "Comprehensive high-altitude rescue and travel insurance (mandatory for 8,000m peaks).",
      "Personal climbing equipment (down suit, 8000m boots, harness, crampons, ice axe).",
      "Supplemental oxygen and personal Sherpa support (unless explicitly booked as an add-on).",
      "Guide and staff gratuities."
    ],
    "highlights": [
      "Summit K2 (8,611m), the second highest and arguably most difficult mountain on Earth.",
      "Climb the classic Abruzzi Spur (Southeast Ridge) route to the summit.",
      "Navigate notorious technical sections including House's Chimney and the steep rock of the Black Pyramid.",
      "Climb through the infamous Bottleneck couloir beneath the massive overhanging serac.",
      "Live and prepare at K2 Base Camp (5,150m) located on the Godwin-Austen Glacier near Concordia."
    ]
  },
  "broad-peak": {
    "itinerary": [
      {
        "day": 1,
        "title": "Day 1\u20134 \u2013 Arrival in Islamabad & Travel to Skardu",
        "description": "Arrive in Islamabad, transfer to your hotel, and complete mandatory expedition briefings. Next, take the spectacular mountain flight to Skardu (if weather grounds the flight, we drive via the Karakoram Highway). Spend your remaining time in Skardu sorting climbing gear, packing supplies, and finalizing logistics before heading into the mountains."
      },
      {
        "day": 2,
        "title": "Day 5\u201312 \u2013 The Approach Trek to Broad Peak Base Camp",
        "description": "Drive from Skardu to the road's end at Askole. From here, begin the multi-day trek up the immense Baltoro Glacier. You will hike through iconic Karakoram landmarks like Paiju, Urdukas, and Goro II, allowing your body to acclimatize slowly. Upon reaching the famous Concordia junction, turn onto the Godwin-Austen Glacier and establish Broad Peak Base Camp (approx. 4,900m)."
      },
      {
        "day": 3,
        "title": "Day 13\u201335 \u2013 Acclimatization Rotations & High Camps",
        "description": "The core of the expedition focuses on preparing the route and acclimatizing your body on the West Ridge. Working alongside guides, you will conduct rotations up the mountain to establish Camp 1 (~6,000m), Camp 2 (~6,400m), and Camp 3 (~7,000m). Between these strenuous rotations, you will descend to Base Camp for necessary rest, recovery, and heavy meals."
      },
      {
        "day": 4,
        "title": "Day 36\u201343 \u2013 Summit Push Window",
        "description": "Once the team is fully acclimatized, you will wait at Base Camp for a favorable weather window. When conditions allow, the team moves swiftly up through the established camps. The summit bid usually launches from Camp 3 (or a temporary Camp 4), ascending steep snowfields to the col, then traversing the long, exposed summit ridge to the True summit (8,051m)."
      },
      {
        "day": 5,
        "title": "Day 44\u201350 (Approximate) \u2013 Descent and Return to Islamabad",
        "description": "After a safe descent back to Base Camp, the team clears the mountain, packs up, and begins the long trek back down the Baltoro Glacier toward Askole. From Askole, board the jeeps to Skardu, followed by a flight back to Islamabad for the final debrief. *Note: The exact date of your return to Islamabad is completely dependent on when the summit weather window occurs and mountain conditions.*"
      }
    ],
    "included": [
      "Domestic flights (Islamabad to Skardu) and 4x4 transfers to the Askole trailhead.",
      "Licensed high-altitude climbing guides and local Balti support staff.",
      "All meals from arrival in Pakistan through the entire expedition.",
      "Complete Base Camp services (sleeping tents, dining tent, toilet tent, generator/solar power).",
      "Climbing permits, peak royalties, and environmental fees.",
      "Group climbing gear (fixed ropes, ice screws, snow pickets) for the route."
    ],
    "excluded": [
      "International flights to and from Pakistan.",
      "Pakistan tourist visa fees.",
      "Comprehensive high-altitude rescue and travel insurance (mandatory for 8,000m peaks).",
      "Personal climbing equipment (down suit, 8000m boots, harness, crampons, ice axe).",
      "Supplemental oxygen and personal Sherpa support (unless explicitly booked as an add-on).",
      "Guide and staff gratuities."
    ],
    "highlights": [
      "Summit Broad Peak (8,051m), the 12th highest mountain in the world.",
      "Climb the classic West Ridge (Normal Route) over steep snow and ice slopes.",
      "Establish Base Camp (~4,900m) on the Godwin-Austen Glacier, just a short walk from K2 Base Camp.",
      "Experience incredible, direct views of K2 from the upper slopes of the mountain.",
      "Trek the legendary Baltoro Glacier route through Concordia to reach the peak."
    ]
  },
  "gasherbrum-i": {
    "itinerary": [
      {
        "day": 1,
        "title": "Day 1\u20134 \u2013 Arrival in Islamabad & Travel to Skardu",
        "description": "Arrive in Islamabad, transfer to your hotel, and complete mandatory expedition briefings. Next, take the spectacular mountain flight to Skardu (if weather grounds the flight, we drive via the Karakoram Highway). Spend your remaining time in Skardu sorting climbing gear, packing supplies, and finalizing logistics before heading into the mountains."
      },
      {
        "day": 2,
        "title": "Day 5\u201312 \u2013 The Approach Trek to Gasherbrum Base Camp",
        "description": "Drive from Skardu to the road's end at Askole. From here, begin the multi-day trek up the immense Baltoro Glacier. You will hike through iconic Karakoram landmarks like Paiju, Urdukas, and Goro II, allowing your body to acclimatize slowly. Upon reaching Concordia, continue up the upper Baltoro to establish Gasherbrum Base Camp (approx. 5,150m)."
      },
      {
        "day": 3,
        "title": "Day 13\u201335 \u2013 Acclimatization Rotations & High Camps",
        "description": "The core of the expedition focuses on preparing the route and acclimatizing on the mountain. You will conduct rotations up the heavily crevassed Gasherbrum Icefall to establish Camp 1 (~6,000m). Subsequent rotations push higher to Camp 2 (~6,400m) on steep snow slopes, and finally to Camp 3 (~7,100m) below the technical ice walls. Between these strenuous rotations, you will descend to Base Camp for necessary rest and recovery."
      },
      {
        "day": 4,
        "title": "Day 36\u201343 \u2013 Summit Push Window",
        "description": "Once the team is fully acclimatized, you will wait at Base Camp for a favorable weather window. When conditions allow, the team moves swiftly up through the established camps. The summit bid usually launches from Camp 3, ascending the steep and technical Japanese Couloir to gain the summit ridge, eventually pushing to the True summit (8,080m)."
      },
      {
        "day": 5,
        "title": "Day 44\u201350 (Approximate) \u2013 Descent and Return to Islamabad",
        "description": "After a safe descent back to Base Camp, the team clears the mountain, packs up, and begins the long trek back down the Baltoro Glacier toward Askole. From Askole, board the jeeps to Skardu, followed by a flight back to Islamabad for the final debrief. *Note: The exact date of your return to Islamabad is completely dependent on when the summit weather window occurs and mountain conditions.*"
      }
    ],
    "included": [
      "Domestic flights (Islamabad to Skardu) and 4x4 transfers to the Askole trailhead.",
      "Licensed high-altitude climbing guides and local Balti support staff.",
      "All meals from arrival in Pakistan through the entire expedition.",
      "Complete Base Camp services (sleeping tents, dining tent, toilet tent, generator/solar power).",
      "Climbing permits, peak royalties, and environmental fees.",
      "Group climbing gear (fixed ropes, ice screws, snow pickets) for the route."
    ],
    "excluded": [
      "International flights to and from Pakistan.",
      "Pakistan tourist visa fees.",
      "Comprehensive high-altitude rescue and travel insurance (mandatory for 8,000m peaks).",
      "Personal climbing equipment (down suit, 8000m boots, harness, crampons, ice axe).",
      "Supplemental oxygen and personal Sherpa support (unless explicitly booked as an add-on).",
      "Guide and staff gratuities."
    ],
    "highlights": [
      "Summit Gasherbrum I (8,080m), also known as Hidden Peak, the 11th highest mountain in the world.",
      "Navigate the treacherous and heavily crevassed Gasherbrum Icefall to reach Camp 1.",
      "Climb the steep, technical snow and ice of the famous Japanese Couloir to the summit ridge.",
      "Establish Base Camp (~5,150m) at the spectacular confluence of the Abruzzi and South Gasherbrum glaciers.",
      "Trek the legendary Baltoro Glacier route through Concordia to reach the remote Gasherbrum massif."
    ]
  },
  "gasherbrum-ii": {
    "itinerary": [
      {
        "day": 1,
        "title": "Day 1\u20134 \u2013 Arrival in Islamabad & Travel to Skardu",
        "description": "Arrive in Islamabad, transfer to your hotel, and complete mandatory expedition briefings. Next, take the spectacular mountain flight to Skardu (if weather grounds the flight, we drive via the Karakoram Highway). Spend your remaining time in Skardu sorting climbing gear, packing supplies, and finalizing logistics before heading into the mountains."
      },
      {
        "day": 2,
        "title": "Day 5\u201312 \u2013 The Approach Trek to Gasherbrum Base Camp",
        "description": "Drive from Skardu to the road's end at Askole. From here, begin the multi-day trek up the immense Baltoro Glacier. You will hike through iconic Karakoram landmarks like Paiju, Urdukas, and Goro II, allowing your body to acclimatize slowly. Upon reaching Concordia, continue up the upper Baltoro to establish Gasherbrum Base Camp (approx. 5,150m)."
      },
      {
        "day": 3,
        "title": "Day 13\u201333 \u2013 Acclimatization Rotations & High Camps",
        "description": "The core of the expedition focuses on preparing the route and acclimatizing on the mountain. You will conduct rotations up the heavily crevassed Gasherbrum Icefall to establish Camp 1 (~6,000m). Subsequent rotations push higher to Camp 2 (~6,400m) on steep snow slopes, and finally to Camp 3 (~7,000m) on the Southwest Ridge. Between these strenuous rotations, you will descend to Base Camp for necessary rest and recovery."
      },
      {
        "day": 4,
        "title": "Day 34\u201340 \u2013 Summit Push Window",
        "description": "Once the team is fully acclimatized, you will wait at Base Camp for a favorable weather window. When conditions allow, the team moves swiftly up through the established camps. The summit bid usually launches from Camp 3, ascending the final steep snow pyramid and traversing to the True summit of Gasherbrum II (8,035m)."
      },
      {
        "day": 5,
        "title": "Day 41\u201345 (Approximate) \u2013 Descent and Return to Islamabad",
        "description": "After a safe descent back to Base Camp, the team clears the mountain, packs up, and begins the long trek back down the Baltoro Glacier toward Askole. From Askole, board the jeeps to Skardu, followed by a flight back to Islamabad for the final debrief. *Note: The exact date of your return to Islamabad is completely dependent on when the summit weather window occurs and mountain conditions.*"
      }
    ],
    "included": [
      "Domestic flights (Islamabad to Skardu) and 4x4 transfers to the Askole trailhead.",
      "Licensed high-altitude climbing guides and local Balti support staff.",
      "All meals from arrival in Pakistan through the entire expedition.",
      "Complete Base Camp services (sleeping tents, dining tent, toilet tent, generator/solar power).",
      "Climbing permits, peak royalties, and environmental fees.",
      "Group climbing gear (fixed ropes, ice screws, snow pickets) for the route."
    ],
    "excluded": [
      "International flights to and from Pakistan.",
      "Pakistan tourist visa fees.",
      "Comprehensive high-altitude rescue and travel insurance (mandatory for 8,000m peaks).",
      "Personal climbing equipment (down suit, 8000m boots, harness, crampons, ice axe).",
      "Supplemental oxygen and personal Sherpa support (unless explicitly booked as an add-on).",
      "Guide and staff gratuities."
    ],
    "highlights": [
      "Summit Gasherbrum II (8,035m), an ideal objective for climbers looking to gain 8,000m experience.",
      "Climb the classic Southwest Ridge (Normal Route) over snow and ice slopes.",
      "Navigate the complex and heavily crevassed Gasherbrum Icefall to reach Camp 1.",
      "Establish Base Camp (~5,150m) at the spectacular confluence of the Abruzzi and South Gasherbrum glaciers.",
      "Trek the legendary Baltoro Glacier route through Concordia to reach the remote Gasherbrum massif."
    ]
  },
  "spantik-expedition": {
    "itinerary": [
      {
        "day": 1,
        "title": "Day 1\u20134 \u2013 Arrival in Islamabad & Travel to Skardu",
        "description": "Arrive in Islamabad, transfer to your hotel, and complete mandatory expedition briefings. Next, take the spectacular mountain flight to Skardu (if weather grounds the flight, we drive via the Karakoram Highway). Spend your remaining time in Skardu sorting climbing gear, packing supplies, and finalizing logistics before heading into the mountains."
      },
      {
        "day": 2,
        "title": "Day 5\u20138 \u2013 The Approach Trek to Spantik Base Camp",
        "description": "Drive from Skardu to the remote village of Arandu, the last settlement before the wilderness. From Arandu, you begin a multi-day trek winding through the lush valley and onto the massive Chogolungma Glacier. This steady, scenic approach allows your body to acclimatize properly before arriving at Spantik Base Camp (approx. 4,300m)."
      },
      {
        "day": 3,
        "title": "Day 9\u201322 \u2013 Acclimatization Rotations & High Camps",
        "description": "The core of the expedition focuses on preparing the route and acclimatizing on the Southeast Ridge. You will conduct rotations up the mountain to establish Camp 1 (~5,100m) and Camp 2 (~5,500m) on snow and ice slopes. Finally, you will establish Camp 3 (~6,300m) higher up the ridge. Between these strenuous rotations, you will descend to Base Camp for necessary rest and heavy meals."
      },
      {
        "day": 4,
        "title": "Day 23\u201325 \u2013 Summit Push Window",
        "description": "Once the team is fully acclimatized, you will wait at Base Camp for a favorable weather window. When conditions allow, the team moves swiftly up through the established camps. The summit bid usually launches from Camp 3, navigating the long, sweeping snow slopes of the upper Southeast Ridge to finally stand on the summit of Spantik (7,027m)."
      },
      {
        "day": 5,
        "title": "Day 26\u201328 (Approximate) \u2013 Descent and Return to Islamabad",
        "description": "After a safe descent back to Base Camp, the team clears the mountain, packs up, and begins the trek back down the Chogolungma Glacier toward Arandu. From Arandu, board the jeeps to Skardu, followed by a flight back to Islamabad for the final debrief. *Note: The exact date of your return to Islamabad is completely dependent on when the summit weather window occurs and mountain conditions.*"
      }
    ],
    "included": [
      "Domestic flights (Islamabad to Skardu) and 4x4 transfers to the Arandu trailhead.",
      "Licensed high-altitude climbing guides and local Balti support staff.",
      "All meals from arrival in Pakistan through the entire expedition.",
      "Complete Base Camp services (sleeping tents, dining tent, toilet tent, generator/solar power).",
      "Climbing permits, peak royalties, and environmental fees.",
      "Group climbing gear (fixed ropes, ice screws, snow pickets) for the route."
    ],
    "excluded": [
      "International flights to and from Pakistan.",
      "Pakistan tourist visa fees.",
      "Comprehensive high-altitude rescue and travel insurance (mandatory for 7,000m peaks).",
      "Personal climbing equipment (down suit, 7000m/8000m boots, harness, crampons, ice axe).",
      "Supplemental oxygen and personal Sherpa support (unless explicitly booked as an add-on).",
      "Guide and staff gratuities."
    ],
    "highlights": [
      "Summit Spantik Peak (7,027m), famously known as Golden Peak for its beautiful sunset colors.",
      "Climb the relatively straightforward Southeast Ridge, widely considered a great introduction to high-altitude mountaineering.",
      "Establish Base Camp (~4,300m) directly on the scenic Chogolungma Glacier.",
      "Trek through the remote and lush Arandu Valley, avoiding the crowded Baltoro route.",
      "Gain essential expedition experience in preparation for future 8,000m peaks."
    ]
  },
  "nanga-parbat-exp": {
    "itinerary": [
      {
        "day": 1,
        "title": "Day 1\u20135 \u2013 Arrival in Islamabad & Travel to Chilas",
        "description": "Arrive in Islamabad, transfer to your hotel, and complete mandatory expedition briefings and permit formalities. Next, embark on a long, scenic drive along the Karakoram Highway to the town of Chilas. We spend a day here organizing our logistics, loading the 4x4 jeeps, and preparing for the rugged terrain ahead."
      },
      {
        "day": 2,
        "title": "Day 6\u201310 \u2013 The Approach Trek to Diamir Base Camp",
        "description": "Take a rugged jeep ride from Chilas to the roadhead at Halala. From here, we begin the multi-day trek up toward the Diamir Face. The approach is shorter than those in the central Karakoram, taking us through remote villages and beautiful alpine forests until we reach Diamir Base Camp (approx. 4,200m), situated in a green meadow directly beneath the mountain."
      },
      {
        "day": 3,
        "title": "Day 11\u201338 \u2013 Acclimatization Rotations & High Camps",
        "description": "The core of the expedition focuses on fixing ropes, establishing high camps, and acclimatizing on the Diamir Face. The team will conduct multiple rotations to set up Camp 1, navigate the steep technical rock and ice of the Kinshofer Wall to reach Camp 2 (~6,100m), and push higher to Camp 3 and Camp 4 (~7,150m+). Between these grueling rotations, you will descend to Base Camp to recover."
      },
      {
        "day": 4,
        "title": "Day 39\u201345 \u2013 Summit Push Window",
        "description": "Once the team is fully acclimatized and the high camps are stocked, you will wait at Base Camp for a favorable weather window. When conditions are right, the team moves swiftly up through the established camps. The summit bid launches from Camp 4, tackling the final couloirs and steep snow slopes to stand on the True summit of Nanga Parbat (8,126m)."
      },
      {
        "day": 5,
        "title": "Day 46\u201350 (Approximate) \u2013 Descent and Return to Islamabad",
        "description": "After a safe descent back to Base Camp, the team breaks down the camp, clears the mountain of gear, and begins the trek back out to the roadhead. From there, we board the jeeps back to Chilas, followed by the drive to Islamabad for the final debrief. *Note: The exact date of your return to Islamabad is completely dependent on when the summit weather window occurs and mountain conditions.*"
      }
    ],
    "included": [
      "Ground transportation (Islamabad to Chilas) and 4x4 jeep transfers to the trailhead.",
      "Licensed high-altitude climbing guides and local support staff.",
      "All meals from arrival in Pakistan through the entire expedition.",
      "Complete Base Camp services (sleeping tents, dining tent, toilet tent, generator/solar power).",
      "Climbing permits, peak royalties, and environmental fees for Nanga Parbat.",
      "Group climbing gear (fixed ropes, ice screws, snow pickets) for the route."
    ],
    "excluded": [
      "International flights to and from Pakistan.",
      "Pakistan tourist visa fees.",
      "Comprehensive high-altitude rescue and travel insurance (mandatory for 8,000m peaks).",
      "Personal climbing equipment (down suit, 8000m boots, harness, crampons, ice axe).",
      "Supplemental oxygen and personal Sherpa support (unless explicitly booked as an add-on).",
      "Guide and staff gratuities."
    ],
    "highlights": [
      "Summit Nanga Parbat (8,126m), the legendary peak anchoring the western edge of the Himalayas.",
      "Climb the classic Kinshofer Route on the massive Diamir Face.",
      "Ascend the famous Kinshofer Wall, a steep and demanding section of mixed rock and ice.",
      "Establish Base Camp (~4,200m) in a lush alpine meadow below the towering Diamir Face.",
      "Test your limits on one of the most respected and technically challenging 8,000m peaks in the world."
    ]
  },
  "skardu-valley": {
    "itinerary": [
      {
        "day": 1,
        "title": "Day 1 \u2013 Arrival in Islamabad & Briefing",
        "description": "Welcome to Pakistan! You will be greeted at the Islamabad International Airport and transferred to your centrally located hotel. Spend the afternoon resting from your international flight, followed by a welcome dinner and a brief orientation about the upcoming journey to the north."
      },
      {
        "day": 2,
        "title": "Day 2 \u2013 Flight to Skardu & City Orientation",
        "description": "We take a spectacular morning flight from Islamabad to Skardu. If the weather is clear, this 45-minute flight offers incredible views of Nanga Parbat and K2. Upon landing in Skardu (2,500m), we check into the hotel and spend the afternoon exploring the local bazaar to acclimatize to the valley air."
      },
      {
        "day": 3,
        "title": "Day 3 \u2013 Shangrila & Upper Kachura Lake",
        "description": "After breakfast, we take a short drive to the Kachura region. We first visit the famous Shangrila Resort, built around the heart-shaped Lower Kachura Lake. Later, we take a short 20-minute walk through a beautiful village to reach Upper Kachura Lake, where you can relax by the clear water or take a boat ride."
      },
      {
        "day": 4,
        "title": "Day 4 \u2013 Katpana Cold Desert & Sunset",
        "description": "Spend a relaxed morning in Skardu before heading out in the afternoon to the Katpana Desert, one of the highest cold deserts in the world. We will explore the white sand dunes surrounded by snow-capped peaks and stay until the evening to watch a brilliant sunset over the Indus River."
      },
      {
        "day": 5,
        "title": "Day 5 \u2013 Kharpocho Fort & Organic Village Nansoq",
        "description": "Today involves a bit of walking. We hike up the steep, rocky trail to the 16th-century Kharpocho Fort, which overlooks the entire Skardu Valley. From the fort, we hike down to Nansoq, the first organic village of Baltistan, where we will enjoy a traditional lunch in a peaceful, natural setting before returning to the city."
      },
      {
        "day": 6,
        "title": "Day 6 \u2013 Day Excursion to Shigar Valley & Sarfaranga",
        "description": "We cross the Indus River and drive into the lush Shigar Valley. Our first stop is the Sarfaranga Cold Desert, where you can ride ATVs or take a jeep safari across the dunes. We then continue to the 400-year-old Shigar Fort, beautifully restored into a heritage museum and guesthouse, exploring the local village before driving back to Skardu."
      },
      {
        "day": 7,
        "title": "Day 7 \u2013 Excursion to Khaplu Palace & Chaqchan Mosque",
        "description": "We take a scenic two-hour drive following the Shyok River to Khaplu, the gateway to the Karakoram. Here we visit the stunning 19th-century Khaplu Palace and the 700-year-old Chaqchan Mosque, one of the oldest in the region. After exploring the winding streets of Khaplu, we return to Skardu for the night."
      },
      {
        "day": 8,
        "title": "Day 8 \u2013 Day Excursion to Deosai Plains (Sheosar Lake)",
        "description": "We board 4x4 jeeps for a rugged drive up to the Deosai National Park, a high-altitude alpine plateau located over 4,000 meters above sea level. We drive across the rolling green plains, keeping an eye out for Himalayan brown bears and marmots, until we reach the deep blue waters of Sheosar Lake. We return to Skardu by late afternoon."
      },
      {
        "day": 9,
        "title": "Day 9 \u2013 Manthal Buddha Rock & Sadpara Lake",
        "description": "On our final day of exploration, we visit the Manthal Buddha Rock, an ancient Tibetan rock carving dating back to the 8th century. We then drive up to the nearby Sadpara Lake, a beautiful reservoir providing water to Skardu. You have the rest of the afternoon free for souvenir shopping in the Skardu bazaar."
      },
      {
        "day": 10,
        "title": "Day 10 \u2013 Flight to Islamabad & Departure",
        "description": "We take the morning flight back to Islamabad, enjoying one last view of the Karakoram mountains. Upon arrival, you will be transferred to your hotel to rest, or directly to the international airport for your flight home, concluding the Skardu Valley Explorer tour. *(Note: If the flight is cancelled due to weather, this day is used to drive back via the Karakoram Highway).*"
      }
    ],
    "included": [
      "Domestic flights between Islamabad and Skardu (subject to weather).",
      "Private air-conditioned transport in Islamabad and 4x4 jeeps for Skardu excursions.",
      "Licensed English-speaking local tour guide.",
      "Standard hotel accommodation with daily breakfast.",
      "All entry fees for forts, national parks, and cultural sites."
    ],
    "excluded": [
      "International flights to and from Pakistan.",
      "Pakistan tourist visa fees.",
      "Comprehensive travel insurance (mandatory).",
      "Lunches and dinners (allowing you to choose from local restaurants).",
      "Tips for guides, drivers, and hotel staff.",
      "Personal expenses, souvenirs, and extra activities like boating or ATVs."
    ],
    "highlights": [
      "Explore the serene Upper Kachura Lake and the famous Shangrila Resort gardens.",
      "Experience the unique high-altitude sand dunes of the Katpana and Sarfaranga Cold Deserts.",
      "Walk through history at the restored Shigar Fort and Khaplu Palace.",
      "Take a thrilling 4x4 jeep safari up to the Deosai National Park, the \"Land of Giants.\"",
      "Hike up to the ancient Kharpocho Fort for panoramic views over the Indus River and Skardu city."
    ]
  },
  "hunza-valley": {
    "itinerary": [
      {
        "day": 1,
        "title": "Day 1 \u2013 Islamabad to Gilgit / Chilas",
        "description": "Your journey begins early as we depart Islamabad and drive north along the famous Karakoram Highway (KKH). Depending on road conditions and the season, we will trace the Indus River through deep gorges, stopping for lunch along the way. We will spend our first night resting at a comfortable hotel in either Chilas or Gilgit to break up the long, scenic overland journey."
      },
      {
        "day": 2,
        "title": "Day 2 \u2013 Drive Gilgit to Karimabad (Hunza)",
        "description": "After breakfast, we continue our drive north toward the Hunza Valley. The scenery dramatically shifts as the towering, snow-capped peaks of the Karakoram come into view, including a brief stop at the Rakaposhi viewpoint. By early afternoon, we arrive in Karimabad, the capital of Hunza (2,400m). We check into our hotel and spend a relaxed evening exploring the local cobbled bazaar."
      },
      {
        "day": 3,
        "title": "Day 3 \u2013 Baltit Fort, Altit Fort & Duikar Sunset",
        "description": "Today is dedicated to the rich heritage of Central Hunza. We start with a guided tour of the 700-year-old Baltit Fort, perched high above Karimabad. In the afternoon, we visit the even older Altit Fort and its peaceful royal garden. As evening approaches, we take a steep drive up to Duikar (Eagle\u2019s Nest) to watch the sunset illuminate the surrounding 7,000m peaks, including Rakaposhi and Golden Peak."
      },
      {
        "day": 4,
        "title": "Day 4 \u2013 Attabad Lake, Passu Cones & Hussaini Bridge",
        "description": "We leave Karimabad and drive further north into Upper Hunza (Gojal). We pass through the newly built tunnels to emerge at Attabad Lake, famous for its striking turquoise waters, where we will stop for a boat ride. We then continue up the KKH to marvel at the jagged Passu Cones before stopping at the famous Hussaini Suspension Bridge for a thrilling, bouncy walk over the Hunza River."
      },
      {
        "day": 5,
        "title": "Day 5 \u2013 Upper Hunza (Gulmit & Borith Lake)",
        "description": "We spend a relaxed day exploring the cultural heart of Upper Hunza. We will visit the peaceful village of Gulmit, interacting with the local Wakhi-speaking community and visiting traditional carpet-weaving centers. Afterward, we take a short drive and a light hike up to Borith Lake, a serene alpine sanctuary known for its migrating birds, before returning to our hotel in Karimabad for the evening."
      },
      {
        "day": 6,
        "title": "Day 6 \u2013 Drive Hunza to Gilgit & City Tour",
        "description": "We say goodbye to the Hunza Valley and drive south back down the Karakoram Highway toward Gilgit. Upon arriving in Gilgit, the regional capital, we will check into our hotel and spend the afternoon exploring the vibrant Gilgit Bazaar. You will have time to shop for local handicrafts, dried fruits, and gemstones, reflecting on the incredible journey through the mountains."
      },
      {
        "day": 7,
        "title": "Day 7 \u2013 Fly to Islamabad & Departure",
        "description": "After breakfast, we transfer to the Gilgit Airport for a scenic 45-minute flight back to Islamabad, offering a final bird's-eye view of the mighty Karakoram and Himalayan ranges. Upon arrival in Islamabad, our team will transfer you to the international airport for your onward journey, or to a hotel if you are extending your stay, marking the end of the tour. *(Note: If flights are grounded due to weather, this day is used to drive back to Islamabad).*"
      }
    ],
    "included": [
      "Domestic flight from Gilgit to Islamabad (subject to weather).",
      "Private, comfortable air-conditioned transport along the Karakoram Highway.",
      "Licensed, English-speaking local cultural guide.",
      "Standard hotel accommodation with daily breakfast.",
      "All entry tickets for Baltit Fort, Altit Fort, and national parks.",
      "Boating fees at Attabad Lake."
    ],
    "excluded": [
      "International flights to and from Pakistan.",
      "Pakistan tourist visa fees.",
      "Comprehensive travel insurance (mandatory).",
      "Lunches and dinners (allowing you to sample local Hunza cuisine).",
      "Tips for the guide, driver, and hotel staff.",
      "Personal expenses, souvenirs, and snacks."
    ],
    "highlights": [
      "Explore the ancient, beautifully restored Baltit and Altit Forts in Karimabad.",
      "Watch a breathtaking sunset over 7,000m peaks from the famous Duikar (Eagle's Nest) viewpoint.",
      "Drive along the turquoise waters of Attabad Lake, formed by a massive landslide in 2010.",
      "Photograph the jagged, iconic granite peaks of the Passu Cones in Upper Hunza.",
      "Test your nerve walking across the thrilling Hussaini Suspension Bridge."
    ]
  },
  "deosai": {
    "itinerary": [
      {
        "day": 1,
        "title": "Day 1 \u2013 Arrival in Skardu",
        "description": "Your adventure begins upon arrival in Skardu (either by domestic flight from Islamabad or via a long overland journey). Our team will meet you and transfer you to your hotel. You have the rest of the day free to rest, acclimatize to Skardu\u2019s altitude (2,500m), and explore the local bazaar while we finalize the 4x4 jeeps and camping gear for the plateau."
      },
      {
        "day": 2,
        "title": "Day 2 \u2013 Skardu to Deosai Plateau (Bara Pani Camp)",
        "description": "After an early breakfast, we board our rugged 4x4 jeeps and begin the steep, winding drive out of Skardu. As we climb higher, the rocky gorges give way to the immense, rolling green plains of Deosai National Park. We will set up our wilderness camp at Bara Pani (approx. 4,000m), a wide river crossing in the heart of the plateau. Spend the afternoon taking short acclimatization walks and spotting golden marmots diving into their burrows."
      },
      {
        "day": 3,
        "title": "Day 3 \u2013 Bara Pani to Sheosar Lake Safari",
        "description": "Today is dedicated to exploring the depths of the plateau. We take the jeeps across the plains to Sheosar Lake (4,142m), one of the highest alpine lakes in the world. On a clear day, the lake perfectly reflects the distant peak of Nanga Parbat. We will enjoy a picnic lunch by the water, surrounded by millions of summer wildflowers, before returning to our camp at Bara Pani for a second night under the stars."
      },
      {
        "day": 4,
        "title": "Day 4 \u2013 Deosai Wilderness Exploration & Return to Skardu",
        "description": "We wake up early for the best chance of wildlife spotting; dawn is the most active time for the park's protected Himalayan brown bears. After a morning of nature walks and photography around Kala Pani and Bara Pani, we pack up our camp. We board the jeeps for the dramatic descent back into the rocky Skardu valley, arriving in the late afternoon to enjoy a hot shower and a comfortable hotel bed."
      },
      {
        "day": 5,
        "title": "Day 5 \u2013 Departure from Skardu",
        "description": "After a final breakfast in Baltistan, our team will transfer you to the Skardu Airport for your morning flight back to Islamabad (or assist you in beginning your overland journey home). This concludes your safari through the extraordinary Deosai wilderness. *(Note: If flights are delayed, this day serves as a buffer or the start of a road trip down the Karakoram Highway).*"
      }
    ],
    "included": [
      "Private 4x4 jeeps with experienced mountain drivers for the entire Deosai excursion.",
      "Licensed local wildlife guide and full camp staff (cook, assistants).",
      "All camping equipment (sleeping tents, thick mattresses, dining tent, toilet tent).",
      "All meals during the camping portion of the trip (Days 2 to 4).",
      "Deosai National Park entrance fees and environmental charges.",
      "Hotel accommodation in Skardu (Days 1 and 4) with breakfast."
    ],
    "excluded": [
      "Flights to and from Skardu (or overland transport to reach Skardu).",
      "Pakistan tourist visa fees.",
      "Comprehensive travel insurance (mandatory, must cover high altitude up to 4,500m).",
      "Personal camping gear (sleeping bags rated for sub-zero temperatures, warm down jackets).",
      "Lunches and dinners while staying at the hotel in Skardu.",
      "Tips for the guides, drivers, and camp staff."
    ],
    "highlights": [
      "Explore the vast, rolling green plains of Deosai National Park, situated over 4,000 meters above sea level.",
      "Spot rare wildlife, including golden marmots, red foxes, and the elusive Himalayan brown bear.",
      "Camp under incredibly clear, starry skies at the famous Bara Pani campsite.",
      "Visit the deep, pristine waters of Sheosar Lake, reflecting the distant snow-capped peaks.",
      "Take a thrilling, bumpy 4x4 jeep ride climbing up from the Skardu valley floor to the high plateau."
    ]
  },
  "naltar-valley": {
    "itinerary": [
      {
        "day": 1,
        "title": "Day 1 \u2013 Arrival in Gilgit",
        "description": "Your journey to the north begins as you arrive in Gilgit, the bustling capital of the Gilgit-Baltistan region. Whether you arrive via a scenic flight from Islamabad or by driving up the Karakoram Highway, our team will meet you and transfer you to your hotel. You have the afternoon free to rest, acclimatize, and explore the historic Gilgit Bazaar, known for its local handicrafts and dried fruits."
      },
      {
        "day": 2,
        "title": "Day 2 \u2013 Drive Gilgit to Nomal & 4x4 Jeep to Naltar Valley",
        "description": "After breakfast, we drive roughly an hour north from Gilgit to the small village of Nomal. Here, the paved road ends. We leave our standard vehicles behind and board rugged 4x4 mountain jeeps for a thrilling, 14-kilometer climb up a rocky, unpaved gorge. After a bumpy but spectacular 2-hour ride, the gorge opens into the lush, pine-covered Naltar Valley (2,900m). We check into our hotel or wooden cottages and spend the evening relaxing in the cool alpine air."
      },
      {
        "day": 3,
        "title": "Day 3 \u2013 Excursion to Naltar Lakes (Satrangi, Blue & Pari Lakes)",
        "description": "Today is entirely dedicated to the valley's famous lakes. We take the jeeps further up the valley on a rough dirt track, passing through dense pine forests and grazing pastures. Our first stop is Satrangi Lake, where underwater algae and minerals create a striking spectrum of colors, from yellow to bright green. We then take a short drive and a light hike to Blue Lake, known for its deep, crystal-clear turquoise water. After enjoying a picnic lunch and visiting the tranquil Pari Lake, we return to our accommodation in Naltar."
      },
      {
        "day": 4,
        "title": "Day 4 \u2013 Naltar to Gilgit & Departure",
        "description": "After enjoying a final breakfast surrounded by the towering peaks of the Karakoram, we board our jeeps for the descent back down the rocky gorge to Nomal. From Nomal, we transfer back to our comfortable highway vehicles and take the short drive back into Gilgit. Upon arrival in Gilgit, you will be transferred to the airport for your flight back to Islamabad, or to your hotel if you are continuing your journey elsewhere in the north."
      }
    ],
    "included": [
      "Private, air-conditioned transport for airport transfers and the Gilgit to Nomal route.",
      "Specialized 4x4 mountain jeeps with experienced drivers for the Nomal to Naltar sections.",
      "Licensed, English-speaking local guide.",
      "Standard hotel or wooden cottage accommodation with daily breakfast.",
      "All entry fees and environmental taxes for Naltar Valley."
    ],
    "excluded": [
      "Flights to and from Gilgit (or overland transport to reach Gilgit).",
      "Pakistan tourist visa fees.",
      "Comprehensive travel insurance (mandatory).",
      "Lunches and dinners.",
      "Tips for the guides, drivers, and hotel staff.",
      "Personal expenses, souvenirs, and snacks."
    ],
    "highlights": [
      "Take a thrilling, bumpy 4x4 jeep ride up the rugged mountain track from Nomal to Naltar.",
      "Marvel at the unbelievable colors of Satrangi Lake, famously known as the \"Rainbow Lake.\"",
      "Relax by the crystal-clear, deep turquoise waters of Blue Lake, surrounded by dense pine forests.",
      "Enjoy peaceful nature walks through the pristine, alpine environment of Naltar Bala.",
      "Explore the local culture of the valley and see the base of the famous Naltar Ski Resort."
    ]
  },
  "phander-valley": {
    "itinerary": [
      {
        "day": 1,
        "title": "Day 1 \u2013 Arrival in Gilgit & Drive to Gupis",
        "description": "Your journey begins in Gilgit, the bustling hub of the north. After a brief welcome and orientation, we leave the busy Karakoram Highway behind and head west into the Ghizer District. The road follows the meandering Gilgit River through steep, rocky gorges that gradually open into wide, green valleys. By late afternoon, we arrive in the peaceful village of Gupis, where we check into our riverside hotel for the night."
      },
      {
        "day": 2,
        "title": "Day 2 \u2013 Khalti Lake to Phander Valley",
        "description": "After breakfast, we continue our drive deeper into the valley. Our first stop is the beautiful Khalti Lake, a wide, still section of the river famous for its striking blue color. After some time for photography and a cup of tea, we resume our drive to Phander Valley (2,800m). Often called \"Little Kashmir\" due to its lush green meadows and winding river, Phander is a sanctuary of peace. We check into our hotel overlooking the valley and enjoy a relaxed evening."
      },
      {
        "day": 3,
        "title": "Day 3 \u2013 Phander Lake Exploration & Trout Fishing",
        "description": "Today is entirely dedicated to enjoying the natural beauty of Phander. We take a short walk down to the iconic Phander Lake, a massive body of turquoise water surrounded by trees that turn brilliant shades of gold in the autumn. The Ghizer river system is famous for its brown trout; you will have the opportunity to rent a rod and try your luck at fishing, or simply relax by the water's edge and enjoy a freshly prepared trout lunch."
      },
      {
        "day": 4,
        "title": "Day 4 \u2013 Excursion to Shandur Pass",
        "description": "We wake up early for a spectacular day trip further west toward the border of the Chitral region. The road climbs steadily through remote pastures until we reach the vast, flat plateau of Shandur Pass (3,700m). Known as the \"Roof of the World,\" this pass is home to a beautiful alpine lake and the world's highest polo ground, where an epic tournament is held every summer. We enjoy a picnic lunch in the crisp mountain air before returning to Phander for the night."
      },
      {
        "day": 5,
        "title": "Day 5 \u2013 Drive Phander to Gilgit & Departure",
        "description": "After a final, quiet breakfast in the valley, we pack our bags and begin the scenic drive back east along the river. Retracing our route through Gupis, we arrive back in Gilgit by early afternoon. Depending on your travel arrangements, you will be transferred to the Gilgit Airport for your flight back to Islamabad, or to your hotel if you are continuing your journey, bringing your Ghizer Valley adventure to a close."
      }
    ],
    "included": [
      "Private, comfortable air-conditioned transport for the entire Gilgit to Phander route.",
      "Licensed, English-speaking local guide from the Ghizer region.",
      "Standard hotel accommodation in Gupis and Phander with daily breakfast.",
      "Basic fishing equipment rental for trout fishing at Phander Lake.",
      "All entry fees and environmental taxes for the valley and Shandur Pass."
    ],
    "excluded": [
      "Flights to and from Gilgit (or overland transport to reach Gilgit).",
      "Pakistan tourist visa fees.",
      "Comprehensive travel insurance (mandatory).",
      "Lunches and dinners (allowing you to sample local dishes and fresh trout).",
      "Tips for the guides, drivers, and hotel staff.",
      "Personal expenses, souvenirs, and snacks."
    ],
    "highlights": [
      "Relax by the stunning, deep turquoise waters of Phander Lake.",
      "Try your hand at catching wild brown trout in the clear waters of the Gilgit River.",
      "Drive through the spectacular, uncrowded landscapes of the Ghizer District and Gupis Valley.",
      "Visit the famous Khalti Lake, known for freezing completely solid during the winter months.",
      "Take a day excursion to the breathtaking Shandur Pass, home to the world's highest polo ground."
    ]
  },
  "bilamik-valley": {
    "itinerary": [
      {
        "day": 1,
        "title": "Day 1 \u2013 Drive Skardu to Rondu & Ascent to Bilamik Valley",
        "description": "Your off-the-beaten-path adventure begins in Skardu. After breakfast, we drive west along the scenic Jaglot-Skardu Road, following the mighty Indus River toward the Rondu subdivision. At Dambudas, we leave the paved road, switch to rugged 4x4 mountain jeeps, and cross a dramatic suspension bridge over the Indus. We then begin a thrilling, steep ascent up a winding gorge, emerging into the lush, hidden sanctuary of Bilamik Valley (2,800m), where we will establish our campsite or check into a basic local guesthouse."
      },
      {
        "day": 2,
        "title": "Day 2 \u2013 Bilamik Pine Meadows & Glacier Stream Hike",
        "description": "We wake up to the crisp, pine-scented air of the valley. Today is dedicated to exploring the natural beauty of Bilamik. We take a gentle hike up toward the Thorsay meadows, a vast expanse of green pastures surrounded by dense alpine forests and towering peaks. The trail follows a crystal-clear, glacier-fed stream where we will stop for a peaceful picnic lunch. We return to our camp in the late afternoon to enjoy a bonfire under the incredibly clear, starry sky."
      },
      {
        "day": 3,
        "title": "Day 3 \u2013 Cultural Walks & Traditional Village Immersion",
        "description": "Because Bilamik sees very few tourists, the local culture remains deeply traditional and untouched by commercialization. After breakfast, we take a leisurely walk through the valley\u2019s small settlements, characterized by their unique wooden-roofed stone houses and terraced farming fields. We will spend time interacting with the hospitable local community, learning about their self-sustaining agricultural lifestyle and enjoying a cup of traditional salt tea before returning to camp for our final night in the valley."
      },
      {
        "day": 4,
        "title": "Day 4 \u2013 Descent to Rondu & Return to Skardu",
        "description": "After a final breakfast surrounded by the serene alpine landscape, we pack our gear and board the 4x4 jeeps. We begin the slow, careful descent back down the winding gorge to the Rondu valley floor. Reconnecting with the main highway, we drive back east along the Indus River, arriving in Skardu by early afternoon. You will be transferred to your hotel or the airport for your onward journey, carrying memories of one of Baltistan's best-kept secrets."
      }
    ],
    "included": [
      "Private, comfortable transport for the Skardu to Rondu highway section.",
      "Specialized 4x4 mountain jeeps with experienced local drivers for the Bilamik ascent.",
      "Licensed, English-speaking guide familiar with the Rondu district.",
      "All camping equipment (tents, mattresses, dining tent) and camp staff.",
      "All meals (breakfast, lunch, dinner) while in Bilamik Valley."
    ],
    "excluded": [
      "Flights to and from Skardu (or overland transport to reach Skardu).",
      "Pakistan tourist visa fees.",
      "Comprehensive travel insurance (mandatory).",
      "Personal camping gear (warm sleeping bags, trekking boots).",
      "Hotel accommodation and meals in Skardu City before and after the tour.",
      "Tips for the guides, drivers, and camp staff."
    ],
    "highlights": [
      "Experience a thrilling 4x4 jeep ride across the Indus River and up a dramatic mountain gorge.",
      "Escape the crowds and explore one of Baltistan\u2019s most pristine, uncommercialized valleys.",
      "Hike through the lush, pine-covered Thorsay meadows, surrounded by snow-capped peaks.",
      "Interact with welcoming local communities in traditional, wooden-roofed villages.",
      "Relax by crystal-clear, glacier-fed streams in an environment of total peace and quiet."
    ]
  },
  "tormik-valley": {
    "itinerary": [
      {
        "day": 1,
        "title": "Day 1 \u2013 Drive Skardu to Tormik Valley",
        "description": "Our adventure begins in Skardu. After gathering our camping supplies, we drive west along the Gilgit-Skardu link road, enjoying the dramatic scenery of the Indus River gorge. Near Baghicha, we leave the paved highway and switch to rugged 4x4 mountain jeeps. The dirt track winds steeply into the mountains, passing through the traditional hamlets of Gamba and Pain Tormik. By late afternoon, we reach the lush alpine meadows of Dunsa (2,900m), where our team will set up camp beneath the towering granite cliffs."
      },
      {
        "day": 2,
        "title": "Day 2 \u2013 Orchard Walks & Upper Tormik Alpine Hike",
        "description": "We wake up to the sound of glacial streams and birdsong. Today is dedicated to exploring the natural beauty of the valley on foot. We begin with a gentle hike through the valley's lush fruit orchards and terraced farming fields, ascending toward the upper meadows (known locally as Broq). The panoramic views of the surrounding Karakoram peaks and the dramatic, sheer granite walls of Tormik are spectacular. We enjoy a picnic lunch in the meadows before returning to camp for a quiet evening around the fire."
      },
      {
        "day": 3,
        "title": "Day 3 \u2013 Village Life, Wood Carving & Shepherd Trails",
        "description": "Tormik Valley remains beautifully untouched by commercial tourism, making it the perfect place to experience authentic Balti hospitality. We spend the morning walking through the local villages, observing traditional farming methods and admiring the intricate wood carvings that adorn the ancient stone houses. In the afternoon, we follow the narrow shepherd trails along the river, learning about the local flora and the self-sustaining lifestyle of the high-altitude herders. We spend our final night camping under a brilliantly clear, starry sky."
      },
      {
        "day": 4,
        "title": "Day 4 \u2013 Return Drive to Skardu",
        "description": "After a final camp breakfast, we pack our gear and board the 4x4 jeeps for the descent out of the valley. The slow, bumpy ride back down to the main highway offers a different perspective on the dramatic gorges we climbed on Day 1. Once we reconnect with the paved road, we drive back east along the Indus River, arriving in Skardu by early afternoon. You will be transferred to your hotel or directly to the airport for your onward journey, concluding your alpine escape."
      }
    ],
    "included": [
      "Private, comfortable transport for the Skardu highway section.",
      "Specialized 4x4 mountain jeeps with experienced local drivers for the Tormik Valley ascent.",
      "Licensed, English-speaking guide familiar with the remote Roundu district.",
      "All camping equipment (sleeping tents, mattresses, dining tent, toilet tent) and camp staff.",
      "All meals (breakfast, lunch, dinner) prepared by our camp chef while in Tormik Valley."
    ],
    "excluded": [
      "Flights to and from Skardu (or overland transport to reach Skardu).",
      "Pakistan tourist visa fees.",
      "Comprehensive travel insurance (mandatory, must cover remote camping).",
      "Personal camping gear (warm sleeping bags, trekking boots).",
      "Hotel accommodation and meals in Skardu City before and after the tour.",
      "Tips for the guides, drivers, and camp staff."
    ],
    "highlights": [
      "Leave the tourist trail behind and camp in the pristine, high-altitude meadows (Broq) of Dunsa.",
      "Experience a thrilling, off-road 4x4 jeep ride deep into the rugged Roundu subdivision.",
      "Hike beneath towering granite cliffs that rival Yosemite in scale and sheer vertical drops.",
      "Immerse yourself in authentic Balti culture, exploring ancient villages and traditional wood-carved homes.",
      "Walk the tranquil shepherd trails surrounded by lush fruit orchards and glacier-fed streams."
    ]
  },
  "haramosh-kutawal": {
    "itinerary": [
      {
        "day": 1,
        "title": "Day 1 \u2013 Arrival in Gilgit & Drive to Sassi",
        "description": "Your adventure begins in Gilgit, where our team will meet you at the airport or your hotel. After a brief orientation and gear check, we board our comfortable vehicles and drive east along the Gilgit-Skardu road. The scenic drive follows the dramatic gorge of the Indus River. By mid-afternoon, we arrive at the small roadside village of Sassi. We check into a local guesthouse, enjoy a welcome dinner, and rest up for the trekking days ahead."
      },
      {
        "day": 2,
        "title": "Day 2 \u2013 4x4 Jeep to Dache & Trek to Iskere",
        "description": "After an early breakfast, we leave our highway vehicles behind and transfer to rugged 4x4 mountain jeeps. We embark on a thrilling, steep drive up a narrow, winding dirt track to the village of Dache (Dassu). Here, the road ends and our trek begins. Our porters load the camping gear, and we set off on a moderate hike through dense pine forests and rocky terrain. After 4 to 5 hours of trekking, we reach the beautiful summer settlement of Iskere (2,800m), where we set up our first wilderness camp."
      },
      {
        "day": 3,
        "title": "Day 3 \u2013 Trek Iskere to Kutawal Lake",
        "description": "We wake up to crisp mountain air and enjoy a hearty camp breakfast. Today\u2019s trek is a steady, scenic ascent deeper into the Haramosh Valley. The trail winds through lush green meadows, crossing glacial streams and passing by local shepherd huts. After about 4 hours of walking, the landscape opens up to reveal the breathtaking Kutawal Lake (3,260m). Surrounded by pine trees and towering snow-capped mountains, we establish our base camp right by the turquoise water for the next two nights."
      },
      {
        "day": 4,
        "title": "Day 4 \u2013 Exploration of Kutawal Lake & Mani Glacier",
        "description": "Today is a designated rest and exploration day. You can choose to relax by the lake, taking in the perfect reflections of Haramosh Peak (7,409m) and Laila Peak in the still water. For those wanting more adventure, our guide will lead an optional day hike up to an altitude of roughly 3,800m to get up close to the massive Mani Glacier. We return to our lakeside camp in the afternoon for hot tea, a hearty dinner, and stargazing in an area with zero light pollution."
      },
      {
        "day": 5,
        "title": "Day 5 \u2013 Trek Kutawal Lake to Dache",
        "description": "After a final morning enjoying the tranquility of Kutawal Lake, we pack our camp and begin the descent. The return trek is entirely downhill, making it faster but requiring careful footing on the rocky sections. We bypass our previous camp at Iskere and push all the way down through the alpine forests, arriving back at the village of Dache by late afternoon. We set up our final camp near the village and celebrate the successful completion of the trekking portion of our journey."
      },
      {
        "day": 6,
        "title": "Day 6 \u2013 Jeep to Sassi & Drive to Gilgit",
        "description": "We say goodbye to our porter team and board the 4x4 jeeps for the rugged descent back down the mountain gorge to Sassi. Reconnecting with the paved Gilgit-Skardu road, we switch back to our comfortable highway vehicles and begin the drive west toward Gilgit. We arrive in Gilgit by mid-afternoon, where you will check into a comfortable hotel to enjoy a hot shower and a celebratory farewell dinner in the city."
      },
      {
        "day": 7,
        "title": "Day 7 \u2013 Departure from Gilgit",
        "description": "After breakfast at the hotel, our services conclude. Depending on your travel arrangements, our team will transfer you to the Gilgit Airport for your scenic flight back to Islamabad, or to the local bus terminal if you are continuing your journey overland on the Karakoram Highway."
      }
    ],
    "included": [
      "Private transport for airport transfers and the Gilgit to Sassi route.",
      "4x4 mountain jeeps for the off-road section between Sassi and Dache.",
      "Licensed, English-speaking trekking guide and a professional camp chef.",
      "Full porter service to carry all camping equipment and food (personal porter for 12kg of luggage).",
      "All camping equipment (sleeping tents, dining tent, toilet tent) and all meals during the trek.",
      "Hotel accommodation in Gilgit (Day 6) and Sassi (Day 1) with breakfast."
    ],
    "excluded": [
      "Flights to and from Gilgit (or overland transport to reach Gilgit).",
      "Pakistan tourist visa fees.",
      "Comprehensive travel insurance (mandatory, must cover trekking up to 4,000m).",
      "Personal trekking gear (warm sleeping bags, trekking boots, trekking poles).",
      "Lunches and dinners while in Gilgit.",
      "Tips for the guide, chef, drivers, and porter team."
    ],
    "highlights": [
      "Experience a thrilling, rugged 4x4 jeep ride from Sassi up to the remote village of Dache.",
      "Trek through the pristine alpine forests and summer pastures of the Haramosh Valley.",
      "Camp beside the crystal-clear, turquoise waters of Kutawal Lake at 3,260 meters.",
      "Enjoy spectacular, unobstructed views of Haramosh Peak, Laila Peak, and Dobani Peak.",
      "Take a day hike to explore the massive, sweeping ice of the Mani Glacier."
    ]
  },
  "basho-valley": {
    "itinerary": [
      {
        "day": 1,
        "title": "Day 1 \u2013 Drive Skardu to Basho Bridge & 4x4 Jeep to Basho Meadows",
        "description": "Your peaceful retreat begins after breakfast in Skardu. We drive west along the paved Jaglot-Skardu road, following the Indus River for about two hours until we reach the Basho Bridge. Here, we leave our comfortable highway vehicles and board rugged 4x4 mountain jeeps. The journey transforms into an adventure as we tackle a steep, narrow, and bumpy 10-kilometer dirt track. After about 90 minutes of off-roading, the barren gorge suddenly opens into the incredibly lush, pine-covered expanse of Basho Meadows (3,200m). We set up our wilderness camp and spend the evening relaxing by the stream."
      },
      {
        "day": 2,
        "title": "Day 2 \u2013 Full Day Hike to Upper Basho Waterfall & Alpine Pastures",
        "description": "We wake up to the crisp scent of pine needles and enjoy a hearty breakfast at camp. Today is entirely dedicated to exploring the natural beauty of the valley on foot. We take a gentle hike through the dense forests, passing by grazing yaks and the valley's distinctive, dark-colored \"Chocolate Rocks.\" Our trail leads us to the Upper Basho Waterfall, a beautiful cascade of glacier-fed water. We enjoy a picnic lunch in the high pastures, taking in the panoramic views of the surrounding snow-capped peaks, before returning to camp for a campfire dinner under the stars."
      },
      {
        "day": 3,
        "title": "Day 3 \u2013 Morning Nature Walk & Return Drive to Skardu",
        "description": "After a final breakfast in the meadows, you have the morning free to take a quiet nature walk, photograph the landscape, or simply relax by the water. By late morning, we pack up our camp and board the 4x4 jeeps for the descent. The drive back down the steep track to the Basho Bridge offers sweeping views of the Indus River valley below. Once we cross the bridge, we transfer back to our highway vehicles for the smooth drive east, arriving in Skardu by mid-afternoon where you will be dropped off at your hotel or the airport."
      }
    ],
    "included": [
      "Private, air-conditioned transport for the Skardu to Basho Bridge route.",
      "Specialized 4x4 mountain jeeps with experienced local drivers for the Basho Valley ascent.",
      "Licensed, English-speaking guide familiar with the valley\u2019s trails.",
      "All camping equipment (sleeping tents, mattresses, dining tent, toilet tent) and camp staff.",
      "All meals (breakfast, lunch, dinner) prepared by our camp chef while in Basho Valley."
    ],
    "excluded": [
      "Flights to and from Skardu (or overland transport to reach Skardu).",
      "Pakistan tourist visa fees.",
      "Comprehensive travel insurance (mandatory, must cover remote camping).",
      "Personal camping gear (warm sleeping bags, trekking boots).",
      "Hotel accommodation and meals in Skardu City before and after the tour.",
      "Tips for the guide, chef, drivers, and camp staff."
    ],
    "highlights": [
      "Leave the main highway and take a thrilling, bumpy 4x4 jeep ride up into the hidden valley.",
      "Camp in the lush, green Sultanabad Meadows, completely surrounded by dense pine forests.",
      "Hike to the beautiful Upper Basho Waterfall and explore the valley's unique \"Chocolate Rocks.\"",
      "Relax by crystal-clear, glacier-fed streams that wind their way through the high pastures.",
      "Enjoy a peaceful evening around the campfire with incredible, unobstructed stargazing."
    ]
  },
  "chunda-valley": {
    "itinerary": [
      {
        "day": 1,
        "title": "Day 1 \u2013 Drive Skardu to Chunda Valley & Sunset Viewpoint",
        "description": "Your relaxing overnight getaway begins in the mid-afternoon. We pick you up from your hotel in Skardu and board a 4x4 mountain jeep for the short but steep climb up the valley wall. In less than an hour, we leave the busy city behind and arrive in the peaceful, elevated Chunda Valley (2,950m). After checking into our local guesthouse or setting up camp, we take a short walk to the main viewpoint. Here, we wait for the golden hour, capturing stunning photographs as the sun sets over Skardu city and the winding Indus River far below."
      },
      {
        "day": 2,
        "title": "Day 2 \u2013 Sunrise Photography, Village Walk & Return",
        "description": "We wake up early to catch the crisp mountain sunrise painting the Karakoram peaks in shades of orange and pink. After a hearty local breakfast, we spend the morning exploring the valley on foot. We take a leisurely walk through the lush meadows and terraced farming fields, passing by traditional Balti stone houses. If visiting in the spring, the valley will be filled with blooming apricot trees. By late morning, we board our jeeps for the quick descent back down the mountain, arriving in Skardu city just in time for lunch."
      }
    ],
    "included": [
      "Private 4x4 mountain jeep transport from Skardu to Chunda Valley and back.",
      "Licensed, English-speaking local guide.",
      "One night of accommodation (local guesthouse or pre-arranged camping, depending on preference).",
      "Dinner on Day 1 and breakfast on Day 2.",
      "All environmental and entry fees for the valley."
    ],
    "excluded": [
      "Flights to and from Skardu (or overland transport to reach Skardu).",
      "Pakistan tourist visa fees.",
      "Comprehensive travel insurance.",
      "Lunches in Skardu before or after the tour.",
      "Tips for the guide, driver, and guesthouse staff.",
      "Personal expenses and snacks."
    ],
    "highlights": [
      "Take a short but steep 4x4 jeep ride up to the \"Roof of Skardu.\"",
      "Enjoy unmatched, panoramic bird's-eye views of Skardu city, the airport, and the Indus River.",
      "Photograph spectacular sunrises and sunsets over the sweeping Karakoram mountain range.",
      "Walk through lush, green meadows and traditional stone-house villages.",
      "Visit during the spring to witness the valley explode with vibrant pink and white apricot blossoms."
    ]
  },
  "hussain-abad-waterfall": {
    "itinerary": [
      {
        "day": 1,
        "title": "Day 1 \u2013 Hussain Abad Waterfall Excursion & Orchard Walk",
        "description": "This relaxing half-day excursion begins with a morning pickup from your hotel in Skardu. We take a short, highly scenic 40-minute drive, following the Indus River to the nearby village of Hussain Abad (2,350m). Upon arriving at the village roadhead, we leave the vehicle and begin a brief, pleasant hike. The beginner-friendly trail winds through traditional Balti fruit orchards and rocky terrain before opening up to the striking Hussain Abad Waterfall. You will have plenty of time to photograph the cascading water, relax on the rocks, and enjoy a picnic tea in the cool mist of the falls. By early afternoon, we take the short walk back to the vehicle and return to Skardu, leaving you with the rest of the day free to explore the city bazaar or visit nearby lakes."
      }
    ],
    "included": [
      "Private, comfortable transport from your Skardu hotel to Hussain Abad and back.",
      "Licensed, English-speaking local guide.",
      "All environmental and entry fees for the waterfall area.",
      "Bottled water and light picnic snacks (tea/coffee) at the waterfall."
    ],
    "excluded": [
      "Flights to and from Skardu (or overland transport to reach Skardu).",
      "Pakistan tourist visa fees.",
      "Comprehensive travel insurance.",
      "Lunches or dinners.",
      "Tips for the guide and driver.",
      "Personal expenses."
    ],
    "highlights": [
      "Enjoy a quick, highly accessible nature escape just 40 minutes away from Skardu city center.",
      "Take a leisurely, beginner-friendly walk through the traditional orchards and fields of Hussain Abad village.",
      "Photograph the crystal-clear, roaring waters of the cascading Hussain Abad Waterfall.",
      "Relax and enjoy a peaceful picnic surrounded by dramatic, rocky mountain cliffs.",
      "Easily combine this short excursion with other local Skardu sightseeing activities in the afternoon."
    ]
  },
  "sarfaranga-desert": {
    "itinerary": [
      {
        "day": 1,
        "title": "Day 1 \u2013 Drive Skardu to Sarfaranga Cold Desert & Dune Safari",
        "description": "Your overnight adventure begins in the mid-afternoon. We pick you up from your hotel in Skardu and drive toward the Shigar Valley. After a short 45-minute drive, the landscape dramatically changes as we enter the Sarfaranga Cold Desert (2,450m). Here, we switch into specialized 4x4 safari vehicles for a thrilling, adrenaline-pumping dune bashing experience across the sweeping sands. As the sun begins to set, casting long shadows and turning the dunes golden, we arrive at our desert camp. You will spend the evening enjoying a traditional bonfire, a hot dinner, and unparalleled stargazing beneath the incredibly clear Karakoram sky."
      },
      {
        "day": 2,
        "title": "Day 2 \u2013 Sunrise on Desert Dunes & Return to Skardu",
        "description": "We wake up before dawn to climb the highest nearby dune and watch the sunrise. The morning light hitting the cold desert sand and the surrounding snow-capped peaks creates a truly magical and photogenic landscape. After taking in the morning views, we return to camp for a freshly prepared breakfast. You have the rest of the morning free to take a quiet walk through the dunes or try optional activities like quad biking. By late morning, we pack up and take the short drive back to Skardu, dropping you off at your hotel with the rest of the day yours to enjoy."
      }
    ],
    "included": [
      "Private transport from Skardu to the Sarfaranga Cold Desert and back.",
      "Thrilling 4x4 dune bashing/safari experience with an expert desert driver.",
      "Licensed, English-speaking local guide.",
      "Overnight camping accommodation (standard tents or luxury glamping tents, based on booking preference).",
      "Campfire dinner on Day 1 and breakfast on Day 2.",
      "All environmental and entry fees for the desert area."
    ],
    "excluded": [
      "Flights to and from Skardu (or overland transport to reach Skardu).",
      "Pakistan tourist visa fees.",
      "Comprehensive travel insurance.",
      "Optional adventure activities (quad bikes, motor-gliding).",
      "Lunches in Skardu before or after the tour.",
      "Tips for the guide, drivers, and camp staff."
    ],
    "highlights": [
      "Experience a thrilling 4x4 jeep safari across the sweeping, high-altitude sand dunes of Sarfaranga.",
      "Photograph the incredible contrast of white desert sand set against snow-capped Karakoram mountains.",
      "Camp in the heart of the desert, enjoying a traditional bonfire and local Balti dinner.",
      "Take advantage of zero light pollution for an unforgettable night of stargazing and astrophotography.",
      "Wake up early to witness a spectacular desert sunrise before returning to the comforts of the city."
    ]
  },
  "katpana-desert": {
    "itinerary": [
      {
        "day": 1,
        "title": "Day 1 \u2013 Katpana Cold Desert Tour & Sunset View",
        "description": "This highly accessible half-day excursion is designed for a relaxing afternoon. We pick you up from your hotel in Skardu in the late afternoon and take a short 15-minute drive to the edge of the Katpana Desert (2,220m). Known as one of the highest cold deserts in the world, the landscape here is truly unique. You will have ample time to walk across the sweeping white sand dunes, take an optional ride on a traditional Bactrian camel, and explore the nearby Katpana Lake. As the late afternoon transitions into the \"Golden Hour,\" the desert provides a phenomenal photography opportunity. We will sit on the dunes to watch the sun set behind the towering, snow-capped Karakoram peaks, casting brilliant colors across the Indus River valley. After twilight, we take the short drive back into Skardu city, dropping you off in time for dinner."
      }
    ],
    "included": [
      "Private, comfortable transport from your Skardu hotel to the Katpana Desert and back.",
      "Licensed, English-speaking local guide.",
      "All environmental and entry fees for the Katpana desert area.",
      "Bottled water and light refreshments during the sunset."
    ],
    "excluded": [
      "Flights to and from Skardu (or overland transport to reach Skardu).",
      "Pakistan tourist visa fees.",
      "Comprehensive travel insurance.",
      "Optional activities (Bactrian camel rides, quad bikes).",
      "Lunches or dinners in Skardu.",
      "Tips for the guide and driver."
    ],
    "highlights": [
      "Take a quick, convenient trip to the famous Katpana Cold Desert, located just minutes from Skardu city.",
      "Walk barefoot across the sweeping, high-altitude white sand dunes.",
      "Photograph the incredible visual contrast of the desert sands, the blue Indus River, and the Karakoram mountains.",
      "Enjoy a peaceful, traditional Bactrian camel ride across the dunes.",
      "Watch a spectacular sunset during the \"Golden Hour,\" capturing the perfect mountain silhouettes."
    ]
  },
  "khamosh-waterfall": {
    "itinerary": [
      {
        "day": 1,
        "title": "Day 1 \u2013 Drive Skardu to Kharmang & Khamosh Waterfall",
        "description": "Your journey into the remote corners of Baltistan begins after breakfast in Skardu. We board our 4x4 vehicles and drive east, following the dramatic gorge of the Indus River. The scenic 3-hour drive takes us deep into the Kharmang District, a region known for its lush apricot orchards and towering rock walls. Upon reaching the village of Shirting (2,400m), we take a short, beautiful hike through wildflower meadows to reach Khamosh Waterfall. Unique for its lack of a plunge pool, the water shatters against the rocks, creating a magical, refreshing mist. We enjoy a picnic lunch near the falls before heading to our local guesthouse to experience genuine Balti hospitality and a traditional dinner."
      },
      {
        "day": 2,
        "title": "Day 2 \u2013 Kharmang Valley Exploration & Return to Skardu",
        "description": "After a quiet morning and a traditional village breakfast, we dedicate the first half of the day to exploring more of the Kharmang Valley. We visit the local orchards, interact with the hospitable farming communities, and take in the untouched beauty of a valley that sees very little commercial tourism. By early afternoon, we begin our return journey along the Indus River. The changing afternoon light offers a completely different perspective of the river gorge on the drive back. We arrive in Skardu city by late afternoon, dropping you off at your hotel with plenty of time to relax before dinner."
      }
    ],
    "included": [
      "Private 4x4 transport from Skardu to Kharmang Valley and back.",
      "Licensed, English-speaking local guide.",
      "One night of accommodation in a local Kharmang guesthouse.",
      "All meals (lunch and dinner on Day 1; breakfast and lunch on Day 2).",
      "All environmental and entry fees for the waterfall and valley."
    ],
    "excluded": [
      "Flights to and from Skardu (or overland transport to reach Skardu).",
      "Pakistan tourist visa fees.",
      "Comprehensive travel insurance.",
      "Dinners in Skardu before or after the tour.",
      "Tips for the guide, driver, and guesthouse staff.",
      "Personal expenses and snacks."
    ],
    "highlights": [
      "Take a highly scenic, rugged drive along the mighty Indus River into the remote Kharmang District.",
      "Hike through pristine wildflower meadows to reach the base of the Khamosh (Silent) Waterfall.",
      "Photograph the unique, misty cascade as glacier-fed water tumbles over the sheer rock face.",
      "Spend a peaceful night in the valley, experiencing authentic, untouched Balti hospitality.",
      "Explore the lush apricot orchards and ancient village settlements of the Kharmang Valley."
    ]
  },
  "manthokha-waterfall": {
    "itinerary": [
      {
        "day": 1,
        "title": "Day 1 \u2013 Drive Skardu to Manthokha Waterfall (Kharmang)",
        "description": "Your relaxing overnight excursion begins after breakfast in Skardu. We board our vehicles and drive east into the Kharmang Valley, following the spectacular gorge of the Indus River and passing through the scenic Gol Valley. After about three hours of driving, the road gives way to a lush, green oasis where the spectacular Manthokha Waterfall drops 180 feet against the rocky mountain wall. We spend the afternoon relaxing in the meadows at the base of the falls, taking photographs, and enjoying a picnic tea. In the evening, we check into our local guesthouse and head to the nearby trout farms, where you will be served a dinner of incredibly fresh, locally caught mountain trout."
      },
      {
        "day": 2,
        "title": "Day 2 \u2013 Village Walks, Trout Farms & Return to Skardu",
        "description": "After a quiet night in the valley, we enjoy a traditional breakfast at the guesthouse. The morning is free for a leisurely village walk. We explore the local apricot and apple orchards, interact with the friendly Balti farming community, and learn about the local aquaculture at the trout hatcheries. The slow pace offers a perfect contrast to the busy streets of Skardu. After a final lunch in the valley, we begin our scenic drive back along the Indus River. We arrive in Skardu city by late afternoon, dropping you off at your hotel with the evening free to relax."
      }
    ],
    "included": [
      "Private transport from Skardu to Manthokha Waterfall and back (4x4 jeeps used for the final rough stretch).",
      "Licensed, English-speaking local guide.",
      "One night of accommodation in a local Kharmang guesthouse.",
      "Special fresh trout dinner on Day 1, plus breakfast and lunch on Day 2.",
      "All environmental and entry fees for the waterfall and valley."
    ],
    "excluded": [
      "Flights to and from Skardu (or overland transport to reach Skardu).",
      "Pakistan tourist visa fees.",
      "Comprehensive travel insurance.",
      "Dinners in Skardu before or after the tour.",
      "Tips for the guide, driver, and guesthouse staff.",
      "Personal expenses and snacks."
    ],
    "highlights": [
      "Enjoy a highly scenic, 3-hour drive from Skardu following the winding path of the Indus River.",
      "Marvel at the spectacular Manthokha Waterfall, cascading 180 feet down a sheer rock face.",
      "Relax and picnic in the lush, green meadows that surround the base of the waterfall.",
      "Visit the local Kharmang trout farms and enjoy a delicious, freshly caught trout dinner.",
      "Experience the peaceful, slow pace of traditional Balti village life with a morning nature walk."
    ]
  },
  "nangma-valley": {
    "itinerary": [
      {
        "day": 1,
        "title": "Day 1 \u2013 Arrival in Skardu & Drive to Khaplu",
        "description": "Your adventure begins upon arrival in Skardu. After a quick briefing and lunch in the city, we board our vehicles and begin a scenic, 3-hour drive east along the Indus and Shyok rivers. Our destination is the historic town of Khaplu, once the second-largest kingdom in old Baltistan. We spend our first night here, allowing you to rest and acclimatize in a comfortable hotel before the trek begins."
      },
      {
        "day": 2,
        "title": "Day 2 \u2013 Drive Khaplu to Kanday Village (2,850m)",
        "description": "After breakfast, we drive further up the valley for about two hours, leaving the main roads behind as we approach Kanday Village. This traditional Balti farming settlement serves as the trailhead for our expedition. Here, we meet our local support team of porters and cooks. We will set up our first camp in the village, giving you the afternoon to explore the area, meet the locals, and prepare your gear for the days ahead."
      },
      {
        "day": 3,
        "title": "Day 3 \u2013 Trek Kanday to Mingulo Broq (3,500m)",
        "description": "Today, our trek officially begins. We leave Kanday and cross a wooden suspension bridge over the Hushe River, beginning a steady, moderate ascent. The trail winds through beautiful, rocky terrain interspersed with small patches of greenery. After 3 to 4 hours of hiking, we reach Mingulo Broq, a stunning, lush alpine meadow surrounded by towering mountain peaks. We will set up camp here for the night, enjoying a hot dinner prepared by our expedition cook."
      },
      {
        "day": 4,
        "title": "Day 4 \u2013 Trek Mingulo Broq to Nangma Base Camp (4,200m)",
        "description": "We wake up to incredible mountain views and enjoy a hearty breakfast. Today\u2019s trek takes us deeper into the heart of the Nangma Valley. The landscape becomes increasingly dramatic as massive granite spires begin to dominate the skyline. Often referred to as the \"Yosemite of Pakistan,\" the sheer rock walls here are a favorite among world-class climbers. After 4 to 5 hours of trekking, we reach the Nangma Valley Base Camp (4,200m), situated directly beneath the towering rock face of Amin Brakk. We establish our camp in this surreal, high-altitude environment."
      },
      {
        "day": 5,
        "title": "Day 5 \u2013 Exploration Day beneath Amin Brakk & Great Tower",
        "description": "Today is a dedicated exploration and rest day. You can choose to relax at the base camp, photographing the incredible granite spires and soaking in the alpine atmosphere, or you can join a guided day hike further up the valley. We will hike toward the base of Amin Brakk and Drifika Peak, exploring the edge of the glacial moraines and taking in panoramic views of the Karakoram giants before returning to camp for a warm dinner."
      },
      {
        "day": 6,
        "title": "Day 6 \u2013 Trek Nangma Base Camp to Kanday Village",
        "description": "After a final sunrise over the granite spires, we break camp and begin our descent. Retracing our steps, the hike downhill is faster and easier on the lungs, though it requires careful footing. We pass back through the beautiful meadows of Mingulo Broq, stopping for lunch, before continuing all the way down to the trailhead at Kanday Village. We celebrate the successful completion of our trek with our local support crew over a final dinner in the village."
      },
      {
        "day": 7,
        "title": "Day 7 \u2013 Drive Kanday to Skardu via Khaplu Palace",
        "description": "We say goodbye to our porters and board our vehicles for the drive back toward civilization. On our way back through Khaplu, we make a dedicated stop to visit the beautifully restored Khaplu Palace and the ancient Chaqchan Mosque, immersing ourselves in the region's rich royal history. By late afternoon, we arrive back in Skardu city, where you can enjoy a hot shower and a celebratory dinner at your hotel."
      },
      {
        "day": 8,
        "title": "Day 8 \u2013 Departure from Skardu",
        "description": "After breakfast, our team will transfer you to Skardu Airport for your onward flight, marking the end of your unforgettable Karakoram trekking adventure."
      }
    ],
    "included": [
      "All ground transport, including airport transfers and 4x4 jeeps to the Kanday trailhead.",
      "Licensed, English-speaking mountain guide and professional expedition cook.",
      "Dedicated team of porters to carry group equipment and up to 15kg of personal luggage per trekker.",
      "All accommodation (hotels in Khaplu/Skardu and twin-sharing expedition tents during the trek).",
      "All meals (breakfast, lunch, dinner) while on the trek.",
      "National Park fees, camping fees, and trekking permits."
    ],
    "excluded": [
      "Flights to and from Skardu (or overland transport to reach Skardu).",
      "Pakistan tourist visa fees.",
      "Comprehensive travel and helicopter rescue insurance (mandatory).",
      "Personal trekking gear (sleeping bags, hiking boots, warm clothing).",
      "Lunches and dinners while staying in Skardu and Khaplu hotels.",
      "Tips for the guide, cook, and porters."
    ],
    "highlights": [
      "Trek through the spectacular Nangma Valley, famous for its towering, vertical granite rock formations.",
      "Camp in the lush, beautiful alpine meadows of Mingulo Broq, surrounded by glacial streams.",
      "Stand directly beneath the sheer rock face of Amin Brakk (Great Tower) at the 4,200m base camp.",
      "Experience an excellent introductory Karakoram trek that offers massive mountain views without extreme altitudes.",
      "Visit the historic Khaplu Palace on your scenic drive back to Skardu."
    ]
  },
  "minimerg-domail": {
    "itinerary": [
      {
        "day": 1,
        "title": "Day 1 \u2013 Islamabad / Gilgit to Astore Valley (Rama)",
        "description": "Your journey begins with a scenic drive departing from Islamabad (or Gilgit, depending on your arrival method). We travel along the Karakoram Highway before turning off toward the Astore Valley. By late afternoon, we arrive in Astore and transfer to 4x4 jeeps to visit the beautiful Rama Meadows. Surrounded by pine forests and offering views of Nanga Parbat on clear days, we spend our first evening relaxing and acclimatizing in a local guesthouse in Astore."
      },
      {
        "day": 2,
        "title": "Day 2 \u2013 Drive Astore across Burzil Pass to Minimerg (2,840m)",
        "description": "After an early breakfast, we begin the thrilling 4x4 journey toward Minimerg. We stop at the Chilam Chowki military checkpoint to clear our pre-arranged permits before beginning the steep, winding ascent over the Burzil Pass (approx. 4,100m). The landscape transitions from rocky mountains to incredibly lush, green alpine pastures. Descending into the valley, we arrive at the secluded village of Minimerg (2,840m). We check into our local accommodation (often a designated tent village or basic guesthouse) and spend the evening enjoying the untouched, peaceful environment."
      },
      {
        "day": 3,
        "title": "Day 3 \u2013 Excursion to Domail & Rainbow Lake",
        "description": "Today is dedicated to exploring the crown jewels of the region. We take a short jeep ride from Minimerg deeper into the Domail Valley. Here, we visit the famous Rainbow Lake, a pristine, crystal-clear body of water that reflects the surrounding green meadows and wildflowers. The area is highly protected and remains one of the cleanest natural sites in the country. You will have the entire day to walk around the lake, photograph the wooden huts and alpine scenery, and enjoy a picnic lunch in this secluded paradise."
      },
      {
        "day": 4,
        "title": "Day 4 \u2013 Minimerg Nature Walks & Drive to Astore / Chilas",
        "description": "We enjoy a relaxed morning in Minimerg, taking a final nature walk through the village and interacting with the friendly locals. By mid-day, we board our 4x4 jeeps and begin the return journey, once again crossing the dramatic Burzil Pass. We drive back through the Astore Valley, eventually reaching the main highway. Depending on road conditions and timing, we will spend the night in a comfortable hotel in either Astore or Chilas."
      },
      {
        "day": 5,
        "title": "Day 5 \u2013 Return Drive to Islamabad / Gilgit",
        "description": "After breakfast, we begin our final leg of the journey. We drive back down the Karakoram Highway (or over the Babusar Pass, if traveling in peak summer), enjoying the changing landscapes as we descend from the high mountains. We arrive back in Islamabad (or Gilgit) by late afternoon, where our team will drop you off at your hotel or the airport, concluding your off-the-beaten-path adventure."
      }
    ],
    "included": [
      "All ground transport, including comfortable vans on the highway and dedicated 4x4 jeeps for Astore, Burzil Pass, and Minimerg.",
      "Licensed, English-speaking local guide.",
      "All accommodation (hotels in Astore/Chilas and local guesthouse/tents in Minimerg).",
      "Processing and arrangement of all necessary military and local permits for the LoC region.",
      "Breakfasts each morning at the hotels/guesthouses."
    ],
    "excluded": [
      "Flights to and from Islamabad or Gilgit.",
      "Pakistan tourist visa fees.",
      "Comprehensive travel insurance.",
      "Lunches and dinners throughout the tour.",
      "Tips for the guide and drivers.",
      "Personal expenses and snacks."
    ],
    "highlights": [
      "Explore one of Pakistan's most secluded and pristine regions, located near the Line of Control.",
      "Experience a thrilling 4x4 jeep safari crossing the high-altitude Burzil Pass.",
      "Relax by the crystal-clear, multi-colored waters of the famous Rainbow Lake in Domail.",
      "Visit the beautiful Rama Meadows and Rama Lake in the Astore Valley.",
      "Enjoy an exclusive, off-the-beaten-path adventure with all necessary military permits arranged for you."
    ]
  },
  "chutroon-hot-springs": {
    "itinerary": [
      {
        "day": 1,
        "title": "Day 1 \u2013 Drive Skardu to Shigar Fort & Upper Shigar",
        "description": "Your relaxing getaway begins with a morning pickup from your hotel in Skardu. We drive north, crossing the Indus River and entering the lush, wide plains of the Shigar Valley. Our first major stop is the famous Shigar Fort (Fong-Khar), a stunningly restored 17th-century palace built by the Raja of Shigar. We take a guided tour of the fort and its royal orchards. After lunch in Shigar, we switch to 4x4 jeeps and continue our drive deeper into Upper Shigar, following the river into the remote Basha Valley. We arrive in Chutroon village by late afternoon and settle into our local guesthouse for a quiet evening."
      },
      {
        "day": 2,
        "title": "Day 2 \u2013 Chutroon Hot Springs & Village Walks",
        "description": "Today is dedicated entirely to relaxation and wellness. The name \"Chutroon\" translates to \"hot water\" in Balti, and the village is famous for its natural thermal springs. The waters here naturally emerge at around 40\u00b0C and are rich in sulfur, calcium, and magnesium, offering excellent therapeutic benefits for tired muscles and joints. You will have plenty of time to soak in the separate, communal bathing areas. In the afternoon, we take a leisurely walk through the village, interacting with the hospitable locals and exploring the surrounding apricot and walnut orchards."
      },
      {
        "day": 3,
        "title": "Day 3 \u2013 Scenic Return Drive to Skardu",
        "description": "After a final morning soak in the hot springs and a traditional Balti breakfast, we pack our bags and begin the return journey. The drive back down the Basha Valley offers completely new perspectives of the Karakoram peaks in the morning light. We stop for a picnic lunch along the banks of the Shigar River, taking advantage of the fantastic photography opportunities. We arrive back in Skardu city by mid-afternoon, dropping you off at your hotel feeling refreshed and rejuvenated."
      }
    ],
    "included": [
      "Private transport, including a comfortable van to Shigar and a 4x4 jeep for the rugged roads to Chutroon.",
      "Licensed, English-speaking local guide.",
      "Two nights of accommodation (one night in Shigar/Upper Shigar, one night in a local Chutroon guesthouse).",
      "All entry fees for Shigar Fort and the Chutroon hot spring facilities.",
      "Breakfasts each morning at the guesthouses."
    ],
    "excluded": [
      "Flights to and from Skardu (or overland transport to reach Skardu).",
      "Pakistan tourist visa fees.",
      "Comprehensive travel insurance.",
      "Lunches and dinners throughout the tour.",
      "Tips for the guide and drivers.",
      "Personal expenses, snacks, and bathing towels."
    ],
    "highlights": [
      "Soak in the soothing, natural Chutroon Hot Springs, famous for their therapeutic and mineral-rich waters.",
      "Take a highly scenic 4x4 drive deep into the remote Basha Valley, far away from commercial tourism.",
      "Explore the beautifully restored, 400-year-old Shigar Fort and its royal gardens.",
      "Experience the slow, peaceful pace of traditional village life in Upper Shigar.",
      "Enjoy breathtaking views of the Karakoram mountains reflecting in the Shigar River."
    ]
  },
  "naltar-ski": {
    "itinerary": [
      {
        "day": 1,
        "title": "Day 1 \u2013 Arrival in Islamabad & Flight to Gilgit",
        "description": "Your winter adventure begins in Islamabad. After a brief trip orientation, we transfer to the airport for a spectacular 45-minute mountain flight to Gilgit. Flying past the snow-covered summit of Nanga Parbat, we land in the regional capital. The rest of the day is free for you to rest, acclimatize to the cold mountain air, and double-check your winter ski gear. We spend the night in a comfortable Gilgit hotel."
      },
      {
        "day": 2,
        "title": "Day 2 \u2013 4x4 Snow Jeep Transfer to Naltar Valley (3,000m)",
        "description": "After breakfast, we leave Gilgit and drive toward Nomal, where the paved road ends. Here, we transfer to rugged, chained 4x4 jeeps for the adventurous ascent into the Naltar Valley. The drive takes about two hours, winding up through a narrow, snowbound gorge until the landscape opens up into a stunning, pine-forested winter wonderland. We check into our local mountain lodge (approx. 3,000m altitude) and spend the afternoon resting or taking a short snow walk."
      },
      {
        "day": 3,
        "title": "Day 3 \u2013 Resort & Slope Skiing at Naltar",
        "description": "Today we hit the slopes. Naltar Ski Resort, operated by the Pakistan Air Force, offers a raw, authentic skiing experience. Depending on your skill level, you can warm up on the groomed beginner runs (often referred to as the KG Slope) or tackle the steeper, more challenging pistes. The lifts here are basic, but the views of the Karakoram peaks are incredible. We spend the entire day skiing and return to the lodge for a warm, hearty dinner."
      },
      {
        "day": 4,
        "title": "Day 4 \u2013 Backcountry Ski Touring to Satrangi Lake",
        "description": "For those with the energy and interest, today we step off the groomed pistes. Using touring skis with skins (or snowshoes, depending on your gear), we head deeper into the valley toward the famous Satrangi and Blue Lakes. In winter, the lakes are often frozen solid and surrounded by deep snowbanks. This is a quiet, challenging day of backcountry exploration, offering a True sense of Karakoram isolation before we ski back down to our lodge."
      },
      {
        "day": 5,
        "title": "Day 5 \u2013 Alpine Powder Descents & Training",
        "description": "We return to the main resort area for another full day of skiing. By now, you will be familiar with the mountain\u2019s layout, giving you the freedom to explore different descents, practice your powder turns on the edges of the pistes, or take tips from local instructors who frequently train here. Enjoy the crisp alpine air and the camaraderie of local skiers on the mountain."
      },
      {
        "day": 6,
        "title": "Day 6 \u2013 Naltar to Gilgit & Evening Celebration",
        "description": "After a final morning coffee in the snow, we pack up our gear and board our 4x4 jeeps for the descent back down to Nomal, where we switch to standard vehicles for the short drive back to Gilgit. Returning to the relative warmth and comfort of the city, you will have time for a hot shower before we gather for a celebratory dinner at our hotel, reflecting on a fantastic week in the snow."
      },
      {
        "day": 7,
        "title": "Day 7 \u2013 Fly Gilgit to Islamabad & Departure",
        "description": "We transfer to Gilgit airport early in the morning for our return flight to Islamabad. Upon landing in the capital, our team will assist you with any final transfers to your international departure flight or onward accommodation, concluding your Pakistani ski adventure. (Note: Gilgit flights are weather-dependent; if flights are canceled, we will drive back to Islamabad via the Karakoram Highway)."
      }
    ],
    "included": [
      "Domestic flights between Islamabad and Gilgit (weather permitting).",
      "Private road transport and dedicated, chained 4x4 jeeps for the Naltar Valley ascent.",
      "Licensed, English-speaking tour guide.",
      "Accommodation in Gilgit (hotels) and Naltar Valley (heated local lodges/guesthouses).",
      "Daily breakfasts throughout the trip."
    ],
    "excluded": [
      "International flights to and from Pakistan.",
      "Ski equipment rental and lift passes (we highly recommend bringing your own fitted boots and preferred skis, though basic rentals are available on the mountain).",
      "Comprehensive travel and winter sports insurance (mandatory).",
      "Lunches and dinners during the tour.",
      "Tips for guides, jeep drivers, and lodge staff."
    ],
    "highlights": [
      "Ski at Pakistan\u2019s premier, high-altitude ski resort in Naltar Valley, surrounded by spectacular pine forests.",
      "Experience a thrilling, adventurous 4x4 winter jeep transfer from Gilgit up to the snowbound valley.",
      "Enjoy a mix of groomed pistes (like the beginner-friendly KG Slope) and challenging backcountry terrain.",
      "Try alpine ski touring or snowshoeing toward the valley's famous frozen alpine lakes.",
      "Enjoy an authentic, off-the-beaten-path winter sports atmosphere, far removed from crowded commercial resorts."
    ]
  },
  "deosai-powder": {
    "itinerary": [
      {
        "day": 1,
        "title": "Day 1 \u2013 Arrival in Islamabad & Briefing",
        "description": "Your extreme winter adventure begins in Islamabad. After arriving at the airport and transferring to your hotel, we hold a comprehensive expedition briefing. Our lead guide will go over the safety protocols, weather forecasts, and the logistics of winter camping on a 4,000-meter plateau. The rest of the day is yours to rest and prepare your backcountry gear."
      },
      {
        "day": 2,
        "title": "Day 2 \u2013 Fly to Skardu & Acclimatization",
        "description": "We transfer to the airport for the spectacular mountain flight to Skardu (weather permitting). Landing deep in the Karakoram range, we transfer to our hotel. The remainder of the day is strictly dedicated to resting and acclimatizing to the cold and the altitude. In the afternoon, the expedition team will conduct a final check of all touring skis, avalanche beacons, and extreme-weather camping gear."
      },
      {
        "day": 3,
        "title": "Day 3 \u2013 4x4 Approach to Deosai Edge & Base Camp",
        "description": "We load our equipment into 4x4 vehicles and drive as far up the Sadpara or Chilam road as the snow allows. Once the vehicles can go no further, we transition to our skis. We skin up the remaining distance to the edge of the Deosai National Park, establishing our first winter camp at the boundary (approx. 4,000m). We spend our first night in the snow, adjusting to the arctic-like temperatures."
      },
      {
        "day": 4,
        "title": "Day 4 \u2013 Ski Traverse toward Sheosar Lake",
        "description": "The real traverse begins. With our support team pulling sleds or carrying the main camp gear, we ski out onto the massive, undulating white plains of Deosai. The scale of the plateau is staggering, with nothing but snow and sky for miles. We aim our touring skis toward the general vicinity of the frozen Sheosar Lake, covering steady ground before setting up our second wilderness camp."
      },
      {
        "day": 5,
        "title": "Day 5 \u2013 Traverse to Bara Pani",
        "description": "We break camp early and continue our ski traverse deeper into the heart of the national park. The terrain here is mostly flat or gently rolling, requiring sustained physical effort rather than technical steep skiing. We navigate toward Bara Pani, crossing the frozen, snow-bridged riverlines that cut across the plateau. We establish camp near the river crossing, surrounded by complete silence."
      },
      {
        "day": 6,
        "title": "Day 6 \u2013 Traverse toward Kala Pani & Ali Malik",
        "description": "As we move toward the eastern edges of the plateau, the towering peaks of the Karakoram begin to rise prominently on the horizon. We ski toward the Kala Pani area and the Ali Malik Pass. This day offers some of the best high-altitude photography of the expedition. We set up our final high camp on the plateau, resting our legs after days of continuous touring."
      },
      {
        "day": 7,
        "title": "Day 7 \u2013 Final Descent to Skardu",
        "description": "After a stunning sunrise over the snow plains, we begin the final leg of our traverse. Reaching the edge of the plateau, we transition from flat touring to the long, rewarding descent back toward the Skardu valley. We ski down the snow-covered summer jeep tracks until we reach our awaiting 4x4 vehicles. We load up and drive back to Skardu, where a hot shower and a massive celebratory dinner await us at the hotel."
      },
      {
        "day": 8,
        "title": "Day 8 \u2013 Reserve & Weather Buffer Day in Skardu",
        "description": "Because Deosai is subject to intense and unpredictable winter storms, this day is built into the itinerary as a mandatory weather and safety buffer. If the traverse took longer than expected due to deep snow or poor visibility, we use this day on the mountain. If we finished on schedule, you can spend this day relaxing in Skardu, resting your muscles, and exploring the local winter bazaars."
      },
      {
        "day": 9,
        "title": "Day 9 \u2013 Flight back to Islamabad",
        "description": "We head to Skardu Airport early in the morning for our return flight to Islamabad. As we fly out of the mountains, you can look down over the Karakoram one last time. Upon arrival in the capital, we transfer to our hotel. The afternoon is free for you to relax, unpack your gear, and enjoy a farewell dinner with the expedition team. (Note: If the flight is grounded due to weather, we will begin the two-day drive down the Karakoram Highway)."
      },
      {
        "day": 10,
        "title": "Day 10 \u2013 Departure from Islamabad",
        "description": "After breakfast, our team will provide transfers to Islamabad International Airport for your flight home, concluding this incredible, high-altitude backcountry achievement."
      }
    ],
    "included": [
      "Domestic flights between Islamabad and Skardu (weather permitting).",
      "All ground transport, including 4x4 jeeps to the snowline.",
      "Professional, licensed high-altitude guide and winter support staff.",
      "All accommodation (hotels in Islamabad/Skardu and extreme-weather expedition tents on the plateau).",
      "All meals (breakfast, lunch, dinner) throughout the expedition.",
      "National Park permits and government environmental fees."
    ],
    "excluded": [
      "International flights to and from Pakistan.",
      "Pakistan tourist visa fees.",
      "Personal backcountry ski equipment (touring skis, skins, avalanche beacons, probes, shovels).",
      "Personal extreme-weather clothing and sub-zero sleeping bags.",
      "Comprehensive rescue and winter mountaineering insurance (mandatory).",
      "Tips for the guide and expedition support staff."
    ],
    "highlights": [
      "Undertake a True, arctic-style backcountry ski expedition across one of the highest plateaus in the world.",
      "Experience the ultimate isolation of winter camping on the completely snowbound, roadless Deosai Plains.",
      "Ski past legendary, frozen landmarks like Sheosar Lake and the Bara Pani river crossing.",
      "Test your endurance in a pristine, extreme winter environment with the support of professional mountain guides.",
      "Enjoy breathtaking, unobstructed views of Nanga Parbat and the surrounding Himalayan giants from the plateau edge."
    ]
  },
  "hispar-ski": {
    "itinerary": [
      {
        "day": 1,
        "title": "Day 1 \u2013 Arrival in Islamabad & Expedition Briefing",
        "description": "Your extreme Karakoram expedition begins as you arrive in Islamabad. Our team will transfer you to your hotel. In the afternoon, we hold a mandatory, comprehensive briefing covering high-altitude safety, crevasse rescue protocols, and glacial weather forecasts. We spend the night resting in the capital."
      },
      {
        "day": 2,
        "title": "Day 2 \u2013 Fly to Skardu & Final Gear Check",
        "description": "We take the spectacular mountain flight to Skardu (weather permitting), looking down over the Himalayan and Karakoram ranges. Upon landing in Baltistan, we transfer to our hotel. The rest of the day is spent acclimatizing to the altitude and conducting a rigorous check of all ski mountaineering gear, avalanche safety equipment, and cold-weather clothing."
      },
      {
        "day": 3,
        "title": "Day 3 \u2013 Skardu to Askole (3,000m)",
        "description": "We load our expedition gear into chained 4x4 jeeps and leave Skardu, driving deep into the Shigar and Braldu valleys. The rough, dramatic drive takes us to Askole, the last permanent settlement before the high mountains. We spend our first night camping or staying in a basic local guesthouse, preparing for the glacier ahead."
      },
      {
        "day": 4,
        "title": "Day 4 \u2013 Askole to Namla (Begin Glacier Approach)",
        "description": "Leaving Askole, we hike and skin (depending on the snowline) toward the snout of the massive Biafo Glacier. Once we reach continuous snow cover, we transition fully to touring skis. The day is spent navigating the lower moraines of the glacier, adjusting to the rhythm of carrying our day packs while the support team manages the heavy camp logistics. We camp on the ice near Namla."
      },
      {
        "day": 5,
        "title": "Day 5 \u2013 Ascending Biafo to Mango & Baintha",
        "description": "We continue our ski ascent up the Biafo Glacier. The terrain requires careful route-finding, often skiing in roped teams to navigate hidden crevasses safely. We pass the traditional summer campsites of Mango and head toward Baintha, surrounded by striking granite spires. We set up our high-altitude winter camp directly on the glacier."
      },
      {
        "day": 6,
        "title": "Day 6 \u2013 Baintha to Marfogoro",
        "description": "The ski touring becomes more sustained as the glacier widens and the altitude increases. The snow is typically deeper here, providing excellent, though exhausting, touring conditions. We ski toward the Marfogoro campsite, pacing ourselves carefully to maintain energy and allow our bodies to acclimatize to the thinning air."
      },
      {
        "day": 7,
        "title": "Day 7 \u2013 Skiing onto Snow Lake (Lukpe Lawo)",
        "description": "Today we reach the legendary Snow Lake (Lukpe Lawo), a massive, 16-kilometer-wide basin of snow and ice where the Biafo and Hispar glaciers meet. Skiing out onto this vast, white expanse\u2014surrounded by jagged peaks like the Ogre (Baintha Brakk)\u2014is an unforgettable experience. We set up our advanced base camp on the flat expanse of Snow Lake."
      },
      {
        "day": 8,
        "title": "Day 8 \u2013 Crossing Hispar La (5,150m)",
        "description": "This is the crux of the expedition. We start early, skinning up the long, sustained slope toward the Hispar Pass. The altitude makes every step difficult, but reaching the 5,150m summit offers unparalleled views of the Karakoram. After resting at the pass, we remove our skins and begin the long, thrilling ski descent down the upper sections of the Hispar Glacier."
      },
      {
        "day": 9,
        "title": "Day 9 \u2013 Descent down Hispar Glacier to Khani Basa",
        "description": "We continue our ski descent down the heavily crevassed Hispar Glacier. The descent requires extreme caution, technical control, and strict adherence to the guide's tracks. We navigate past massive ice seracs and wide crevasses, eventually reaching the safer, flatter ice near the Khani Basa area, where we make camp."
      },
      {
        "day": 10,
        "title": "Day 10 \u2013 Hispar Glacier to Yutmaru Glacier Edge",
        "description": "Our ski traverse continues down the valley, crossing lateral moraines and side glaciers like the Yutmaru. As we lose altitude, the snow may begin to thin or change in texture, requiring us to carefully choose our lines. We spend our final night camping on the glacier, celebrating the successful crossing of the pass."
      },
      {
        "day": 11,
        "title": "Day 11 \u2013 Final Descent to Hispar Village",
        "description": "We ski the final stretches of the glacier until the snow runs out, transitioning back to hiking boots for the final walk into Hispar Village. Arriving in the village is a dramatic return to civilization after over a week on the ice. We rest, enjoy a hot meal cooked by our hosts, and sleep in a local guesthouse."
      },
      {
        "day": 12,
        "title": "Day 12 \u2013 Drive Hispar Village to Karimabad & Gilgit",
        "description": "We load into 4x4 jeeps and drive out of the Hispar Valley, connecting to the famous Hunza Valley. We stop briefly in Karimabad to view the ancient Baltit Fort before continuing down the Karakoram Highway to Gilgit. Here, you can finally enjoy a hot shower and a comfortable hotel bed."
      },
      {
        "day": 13,
        "title": "Day 13 \u2013 Fly Gilgit to Islamabad",
        "description": "We transfer to the Gilgit airport for our flight back to Islamabad. Upon arriving in the capital, we transfer to our hotel. The evening is free to relax and enjoy a farewell dinner with the expedition team, sharing stories from the traverse. (If the flight is canceled due to weather, we will drive back via the Karakoram Highway)."
      },
      {
        "day": 14,
        "title": "Day 14 \u2013 Departure from Islamabad",
        "description": "After breakfast, our team will transfer you to the airport for your international departure, marking the end of your epic Karakoram ski expedition."
      }
    ],
    "included": [
      "Domestic flights (Islamabad to Skardu, Gilgit to Islamabad) weather permitting.",
      "All ground transport, including 4x4 jeeps to Askole and from Hispar.",
      "Expert, certified high-altitude ski mountaineering guide.",
      "Full expedition support team (porters, cooks) and all camp meals.",
      "High-altitude extreme weather tents and group safety equipment (ropes, satellite comms).",
      "All government trekking permits and national park fees."
    ],
    "excluded": [
      "International flights and Pakistan tourist visa.",
      "Personal ski mountaineering gear (touring skis, skins, avalanche beacon, probe, shovel, harness, crampons).",
      "Personal extreme-weather clothing and sub-zero sleeping bag.",
      "Comprehensive mountaineering and helicopter rescue insurance (mandatory).",
      "Tips for the guide and porter team."
    ],
    "highlights": [
      "Undertake one of the world\u2019s most challenging ski mountaineering traverses, strictly for expert backcountry skiers.",
      "Ski across the immense, high-altitude glacial basin of Snow Lake (Lukpe Lawo).",
      "Conquer the 5,150m Hispar Pass on skis, surrounded by towering 7,000m Karakoram peaks.",
      "Experience a fully supported, remote winter expedition with professional guides and high-altitude staff.",
      "Complete an epic traverse that begins in the rugged Baltistan region and ends in the scenic Hunza Valley."
    ]
  },
  "hunza-heritage": {
    "itinerary": [
      {
        "day": 1,
        "title": "Day 1 \u2013 Arrival in Gilgit & Drive to Karimabad (Hunza)",
        "description": "Your cultural journey begins in Gilgit, the bustling hub of northern Pakistan. After a brief welcome and orientation from your local guide, we board our comfortable vehicles for the scenic drive up the Karakoram Highway toward the Hunza Valley. The journey takes about two hours, tracing the winding path of the Hunza River. We arrive in Karimabad, the historic capital of Central Hunza, check into our heritage guesthouse, and take a late afternoon stroll through the local bazaar to see local handicrafts and gemstone shops."
      },
      {
        "day": 2,
        "title": "Day 2 \u2013 Baltit Fort, Altit Fort & Royal Gardens",
        "description": "Today is dedicated to the royal heritage of the Burusho people. We start with a morning walk up to Baltit Fort, beautifully restored by the Aga Khan Trust for Culture, offering sweeping views over the valley. In the afternoon, we visit the even older Altit Fort, perched dramatically on a cliff edge. We walk through the surrounding Royal Gardens and enjoy a traditional lunch at the Kha Basi Caf\u00e9, a local eatery run by the women of the village. The evening is free to relax in Karimabad."
      },
      {
        "day": 3,
        "title": "Day 3 \u2013 Ganish Heritage Settlement & Sacred Rock Carvings",
        "description": "After breakfast, we take a short drive down to Ganish Village, a beautifully preserved 1,000-year-old settlement. We spend the morning walking through its ancient alleys, visiting historic wooden mosques and viewing the intricately carved watchtowers. Nearby, we visit the Sacred Rocks of Haldekish, where ancient Silk Road travelers, merchants, and pilgrims carved petroglyphs into the stone centuries ago. We return to Karimabad for our final night in Central Hunza."
      },
      {
        "day": 4,
        "title": "Day 4 \u2013 Upper Hunza Gulmit Homestay & Attabad Lake",
        "description": "We leave Karimabad and drive north into Gojal (Upper Hunza). En route, we stop at the stunning, turquoise waters of Attabad Lake for photographs. Continuing north, the cultural landscape changes as we enter Wakhi territory. We arrive in the peaceful village of Gulmit and settle into our family-run homestay. In the afternoon, we visit the Gulmit Old House museum and a local carpet-weaving center, getting a firsthand look at traditional Wakhi village life before sharing a home-cooked dinner with our hosts."
      },
      {
        "day": 5,
        "title": "Day 5 \u2013 Borith Lake & Passu Village Cultural Walk",
        "description": "We wake up to the towering sight of the Passu Cones. After a traditional Wakhi breakfast, we take a scenic drive to the serene Borith Lake, a sanctuary for migrating birds. From here, we take a gentle walk toward Passu village, stopping to view the massive white ice of the Passu Glacier. For the adventurous, there is an option to walk across the famous, swinging Hussaini Suspension Bridge. We return to our Gulmit homestay for a second night of stories, local tea, and hospitality."
      },
      {
        "day": 6,
        "title": "Day 6 \u2013 Drive Hunza to Gilgit & Departure",
        "description": "After saying goodbye to our host family, we begin our return journey down the Karakoram Highway. We enjoy the shifting morning light on the mountains as we drive south out of the Hunza Valley and back into Gilgit. Upon arrival in Gilgit, our guide will assist you with your transfer to the airport for your onward flight, bringing your Hunza heritage experience to a close."
      }
    ],
    "included": [
      "Private, comfortable road transport from Gilgit throughout the Hunza Valley.",
      "Licensed, English-speaking local guide with deep knowledge of Hunza\u2019s history.",
      "Accommodation in a Karimabad heritage guesthouse (3 nights) and a traditional Gulmit homestay (2 nights).",
      "Daily breakfasts, plus home-cooked dinners during the Gulmit homestay.",
      "All entrance fees for Baltit Fort, Altit Fort, Ganish Village, and local museums."
    ],
    "excluded": [
      "Domestic flights to/from Gilgit or international flights to Pakistan.",
      "Pakistan tourist visa fees.",
      "Lunches and dinners while in Karimabad or Gilgit.",
      "Comprehensive travel and medical insurance.",
      "Personal expenses, souvenirs, and tips for the guide and homestay hosts."
    ],
    "highlights": [
      "Explore the 700-year-old Baltit Fort and the ancient Altit Fort, learning about the royal history of the Mirs of Hunza.",
      "Walk through the narrow, cobbled streets of Ganish, the oldest continuously inhabited settlement in the Hunza Valley.",
      "Experience genuine Wakhi hospitality with a family homestay in the beautiful village of Gulmit.",
      "Visit local women's craft cooperatives to see traditional carpet weaving and apricot processing.",
      "Take in spectacular views of the turquoise Attabad Lake and the dramatic, jagged peaks of the Passu Cones."
    ]
  },
  "royal-baltistan": {
    "itinerary": [
      {
        "day": 1,
        "title": "Day 1 \u2013 Arrival in Skardu & Drive to Shigar Valley",
        "description": "Your royal journey begins as you land at Skardu Airport, surrounded by the towering peaks of the Karakoram. After a warm welcome from your local Balti guide, we bypass the bustling city of Skardu and drive directly to the peaceful Shigar Valley. The scenic, one-hour drive takes us across the Indus River and through the sweeping Sarfaranga Cold Desert. We arrive in Shigar, check into our heritage accommodation, and spend the afternoon resting and acclimatizing to the mountain air."
      },
      {
        "day": 2,
        "title": "Day 2 \u2013 Shigar Fort, Amburiq Mosque & Royal Gardens",
        "description": "Today is dedicated to the heritage of the Shigar Valley. We begin with a guided tour of the famous Shigar Fort (Fong Khar), brilliantly restored by the Aga Khan Trust for Culture. We explore the museum, the old dungeons, and the beautiful royal cherry orchards. Just a short walk away, we visit the Amburiq Mosque, one of the oldest in Baltistan, to admire its intricate, 14th-century wooden architecture. The evening is free to wander through the quiet, organic farming village of Shigar."
      },
      {
        "day": 3,
        "title": "Day 3 \u2013 Drive Shigar to Khaplu Valley (Ghanche)",
        "description": "After breakfast, we leave Shigar and embark on a spectacularly scenic drive toward the Ghanche District and the Khaplu Valley. Following the winding path of the turquoise Shyok River, the drive takes about three hours. We pass through small, traditional Balti settlements, stopping for photographs of the dramatic gorge and the distant snow-capped peaks. Upon arriving in Khaplu, we check into our hotel and relax in the serene, high-altitude valley."
      },
      {
        "day": 4,
        "title": "Day 4 \u2013 Khaplu Palace & Historic Chaqchan Mosque",
        "description": "We spend the day exploring the royal heart of Khaplu. Our first stop is the stunning Khaplu Palace (Yabgo Khar), built in the mid-19th century. We tour the beautifully restored royal reception rooms, the intricate wooden balconies, and the museum that details the history of the Yabgo dynasty. In the afternoon, we walk to the historic Chaqchan Mosque, built around 1370. We admire its unique blend of Tibetan, Kashmiri, and Persian architecture before enjoying a quiet evening in the village."
      },
      {
        "day": 5,
        "title": "Day 5 \u2013 Khaplu to Skardu & Kharpocho Fort",
        "description": "We bid farewell to Khaplu and drive back along the Shyok River to Skardu, the vibrant capital of Baltistan. After checking into our Skardu hotel, we take a short but steep 30-minute hike up to the imposing Kharpocho Fort (the \"King of Forts\"). Built in the 16th century on a sheer rock face, the fort offers unparalleled, panoramic views of the entire Skardu Valley and the winding Indus River below. We descend to the city for a final celebratory dinner."
      },
      {
        "day": 6,
        "title": "Day 6 \u2013 Departure from Skardu",
        "description": "After a final Balti breakfast, our team will transfer you to Skardu Airport for your morning flight back to Islamabad, bringing your journey through the ancient kingdoms of Baltistan to a close. (Note: If the mountain flight is canceled due to weather, we will begin the scenic two-day drive down the Karakoram Highway toward Islamabad)."
      }
    ],
    "included": [
      "Private, comfortable road transport (cars or coasters) throughout the Skardu, Shigar, and Khaplu valleys.",
      "Licensed, English-speaking local Balti guide with expertise in regional history.",
      "Quality accommodation in Skardu, Shigar, and Khaplu (with options for heritage fort stays).",
      "Daily breakfasts at your hotels.",
      "All entrance fees for Shigar Fort, Khaplu Palace, Kharpocho Fort, and local museums."
    ],
    "excluded": [
      "Domestic flights to and from Skardu, or international flights to Pakistan.",
      "Pakistan tourist visa fees.",
      "Lunches and dinners during the tour (allowing you flexibility to try local restaurants).",
      "Comprehensive travel and medical insurance.",
      "Personal expenses, souvenirs, and tips for the guide and drivers."
    ],
    "highlights": [
      "Explore the beautifully restored, 400-year-old Shigar Fort, once the palace of the Raja of Shigar.",
      "Visit the 14th-century Amburiq Mosque, a UNESCO award-winning masterpiece of traditional Kashmiri and Tibetan wood carving.",
      "Stay near or explore the magnificent mid-19th century Khaplu Palace (Yabgo Khar), the finest surviving example of Balti royal architecture.",
      "Marvel at the Chaqchan Mosque in Khaplu, built in 1370 and famous for its intricate, ancient woodwork.",
      "Hike up to the 16th-century Kharpocho Fort, known as the \"King of Forts,\" offering sweeping views over the Indus River and Skardu."
    ]
  },
  "gilgit-bazaar": {
    "itinerary": [
      {
        "day": 1,
        "title": "Day 1 \u2013 Gilgit Heritage, Kargha Buddha & Bazaar Tour",
        "description": "Your full-day exploration of Gilgit begins in the morning as your guide picks you up from your hotel. We take a short, 20-minute drive out of the city to Kargah Nala, a picturesque ravine. Here, we view the Kargah Buddha, a 50-foot tall carving dating back to the 7th century, a testament to the region's deep Buddhist history. After enjoying the serene mountain stream, we head back toward the city to visit the historic Chinese Cemetery in Danyore, followed by an exhilarating walk across the famous, wooden-planked Danyore Suspension Bridge. For lunch, we dive into the local culinary scene, trying regional specialties like mantu (steamed dumplings) or chapshuro (meat-filled flatbread). The entire afternoon is dedicated to the vibrant, bustling streets of the NLI (Northern Light Infantry) Bazaar and the Old Silk Route Bazaar. This is the commercial heart of Gilgit-Baltistan, where you can browse local handicrafts, traditional woolen caps, precious gemstones, and organic dried fruits. Depending on the season and day, we may conclude the tour by stopping at the historic Gilgit Polo Ground to watch a fierce game of traditional mountain polo, before returning you to your hotel in the evening."
      }
    ],
    "included": [
      "Private, comfortable road transport (jeep or car) for the entire day.",
      "Professional, English-speaking local guide from Gilgit.",
      "Bottled water during the tour.",
      "Entrance fees or parking fees for Kargah Buddha and the Danyore Suspension Bridge.",
      "Hotel pick-up and drop-off within Gilgit city limits."
    ],
    "excluded": [
      "Accommodation in Gilgit.",
      "Lunch and personal snacks during the bazaar tour.",
      "Purchases of souvenirs, gemstones, or handicrafts.",
      "Tips for the guide and driver."
    ],
    "highlights": [
      "Stand before the Kargah Buddha, a magnificent 7th-century rock carving etched into a cliff face.",
      "Walk across the thrilling Danyore Suspension Bridge, suspended high above the Gilgit River gorge.",
      "Shop for gemstones, local woolens, and dried fruits in the historic NLI and Old Gilgit bazaars.",
      "Taste authentic Gilgit-Baltistan cuisine, such as chapshuro and mantu, in the heart of the city.",
      "Visit the peaceful Chinese Cemetery, honoring the builders of the Karakoram Highway."
    ]
  },
  "nowruz-festival": {
    "itinerary": [
      {
        "day": 1,
        "title": "Day 1 \u2013 Arrival in Skardu & Nowruz Preparations",
        "description": "Your festive journey begins as you arrive at Skardu Airport in mid-March, just as winter begins to retreat from the valley. Our team will transfer you to your hotel. In the afternoon, we take a walk through the main Skardu bazaar to witness the bustling preparations for Nowruz. Locals can be seen buying new clothes, preparing special foods, and gathering supplies for the holiday. We enjoy a traditional welcome dinner and prepare for the festivities of the coming days."
      },
      {
        "day": 2,
        "title": "Day 2 \u2013 Nowruz Celebration Day & Traditional Polo",
        "description": "Today is March 21st, the joyous day of Nowruz. The valley comes alive with celebrations marking the first day of spring. We head to the local polo ground to witness Jashn-e-Nowruz\u2014a thrilling, no-rules match of traditional Balti freestyle polo. The atmosphere is electric, filled with the sounds of cheering crowds and the beating of the dadang (local drum). Afterward, we join the locals in the streets to experience the festive energy that sweeps through the town."
      },
      {
        "day": 3,
        "title": "Day 3 \u2013 Village Feasts & Sword Dance Performances",
        "description": "We spend today diving deeper into the cultural heart of Baltistan. We visit a local village to witness traditional Nowruz customs, including the playful \"Misra\" (egg-striking contest), where beautifully painted hard-boiled eggs are tapped against one another in a game of skill and luck. We partake in a communal feast featuring traditional dishes like prapu and zan. In the afternoon, we are treated to a mesmerizing performance of the Balti sword dance, a powerful display of regional heritage and pride."
      },
      {
        "day": 4,
        "title": "Day 4 \u2013 Spring Blossom Walks in Apricot Orchards",
        "description": "Leaving the bustling city celebrations behind, we take a short drive to the peaceful Shigar Valley. Late March is the magical window when the apricot, cherry, and almond trees burst into bloom. We spend the day taking leisurely walks through these stunning, vibrant orchards, set dramatically against the backdrop of snow-capped Karakoram peaks. It is a photographer's dream. We visit the historic Shigar Fort before returning to Skardu for a farewell dinner."
      },
      {
        "day": 5,
        "title": "Day 5 \u2013 Departure from Skardu",
        "description": "After a final breakfast surrounded by the crisp spring air, our team will transfer you to Skardu Airport for your flight back to Islamabad, carrying with you the vibrant memories of the Baltistan spring. (Note: Should flights be delayed due to spring weather, we will coordinate a scenic return drive via the Karakoram Highway)."
      }
    ],
    "included": [
      "Private, comfortable road transport throughout Skardu and Shigar.",
      "Local Balti guide to provide deep cultural context during the festival.",
      "Accommodation in Skardu (4 nights).",
      "Daily breakfasts and special Nowruz traditional feasts.",
      "Entrance to all local polo matches, cultural dance performances, and Shigar Fort."
    ],
    "excluded": [
      "Domestic flights to/from Skardu, and international flights.",
      "Pakistan tourist visa fees.",
      "Standard lunches and dinners (outside of the included festive meals).",
      "Comprehensive travel and medical insurance.",
      "Personal expenses and tips for guides, drivers, and performers."
    ],
    "highlights": [
      "Experience authentic Nowruz (Persian New Year) celebrations in the heart of Baltistan on March 21st.",
      "Watch a fierce, fast-paced game of traditional freestyle mountain polo.",
      "Enjoy local cultural performances, including the famous Balti sword dance accompanied by traditional mountain music.",
      "Participate in local family traditions, such as the famous \"Misra\" painted egg-striking games and festive feasts.",
      "Walk through the breathtaking, pink-and-white blossoming apricot and cherry orchards of the Skardu and Shigar valleys."
    ]
  },
  "kharpocho-organic-village": {
    "itinerary": [
      {
        "day": 1,
        "title": "Day 1 \u2013 Kharpocho Fort & Nansoq Organic Village Walk",
        "description": "Your day of history and nature begins in the morning as your guide meets you in Skardu. We drive to the base of the Kharpocho hill and begin our ascent on foot. The hike to the fort takes about 30 minutes up a steep, ancient path. Upon reaching the 16th-century Kharpocho Fort, built by the famous ruler Ali Sher Khan Anchan, you will be rewarded with unmatched 360-degree views of the entire Skardu Valley and the mighty Indus River below. After exploring the fort, we bypass the main city and take a hidden, scenic trail that winds behind the hill. This beginner-friendly, 3-kilometer trek follows the banks of the Indus River, crossing small wooden bridges. Because there are no roads, the only sounds you hear are the river and the wind. After about an hour of walking, we arrive at Nansoq Organic Village. Here, life is lived traditionally: farming is completely pesticide-free, and modern machinery is left behind. We will take a walking tour of the village\u2019s lush orchards, meet the local families, and enjoy a traditional, purely organic lunch or fresh herbal tea. In the mid-afternoon, we hike back along the river trail to Skardu, concluding this peaceful cultural excursion."
      }
    ],
    "included": [
      "Professional, English-speaking local Balti guide.",
      "Entrance tickets to Kharpocho Fort.",
      "Traditional organic lunch or high-tea experience with a host family in Nansoq Village.",
      "Transport to and from the Kharpocho trailhead within Skardu."
    ],
    "excluded": [
      "Accommodation in Skardu.",
      "Personal trekking gear (sturdy walking shoes, sun hats, water bottles).",
      "Purchases of local organic produce or souvenirs from the village.",
      "Tips for the guide and the host family."
    ],
    "highlights": [
      "Hike up the ancient stone steps to the 16th-century Kharpocho Fort, the historic \"King of Forts.\"",
      "Take in breathtaking, panoramic views of the Skardu Valley, the Cold Desert, and the winding Indus River from the fort\u2019s summit.",
      "Trek along a peaceful, 3-kilometer riverside trail that is completely inaccessible to vehicles.",
      "Step back in time as you arrive at Nansoq, Pakistan\u2019s first certified organic village, famous for its sustainable, traditional lifestyle.",
      "Enjoy an authentic, home-cooked organic lunch or traditional Balti tea with a local host family."
    ]
  },
  "masur-rock": {
    "itinerary": [
      {
        "day": 1,
        "title": "Day 1 \u2013 Masur Rock Petroglyph & Archaeological Tour",
        "description": "Your historical day trip begins in the morning as your guide picks you up from your Skardu hotel. Our first stop is the Hussainabad Valley, where we take a moderate hike up to the dramatic Masur Rock (also known as Marsur Rock). Often compared to Norway's Trolltunga, this incredible rock formation juts out over the valley and features ancient signs and inscriptions. We spend time here enjoying the breathtaking bird's-eye views of the Skardu basin, the Indus River, and the Cold Desert. In the late morning, we descend and take a short drive toward Manthal village on the Sadpara road. Here, we take an easy walk to the internationally recognized Manthal Buddha Rock. Dating back to the 8th century, this massive granite boulder displays a beautifully preserved relief of a meditating Buddha surrounded by Bodhisattvas, serving as a powerful reminder of Baltistan\u2019s pre-Islamic heritage. Your guide will explain the history and significance of these Tibetan Buddhist carvings. After exploring the archaeological sites, we continue a short distance up the road to the stunning Satpara Lake. We enjoy a relaxing picnic lunch by the turquoise waters before returning you to your hotel in Skardu in the late afternoon."
      }
    ],
    "included": [
      "Private, comfortable transport for the full day.",
      "Professional, English-speaking local guide with knowledge of regional archaeology.",
      "Picnic lunch by Satpara Lake.",
      "Entrance fees or local community donations for the Manthal Buddha Rock.",
      "Hotel pick-up and drop-off in Skardu."
    ],
    "excluded": [
      "Accommodation in Skardu.",
      "Personal hiking gear (comfortable walking shoes are required).",
      "Additional snacks and beverages outside of the provided lunch.",
      "Tips for the guide and driver."
    ],
    "highlights": [
      "Visit the famous Masur (Marsur) Rock in Hussainabad, a dramatic overhanging rock known for ancient symbols and incredible panoramic views.",
      "Marvel at the Manthal Buddha Rock, a massive granite boulder featuring stunning 8th-century Buddhist carvings.",
      "Enjoy a gentle, guided archaeological walk, learning about the \"Golden Era of Buddhism\" in the Indus Valley.",
      "Take in spectacular, sweeping views of the Skardu Valley, the Cold Desert, and the winding Indus River.",
      "Relax by the crystal-clear waters of nearby Satpara Lake after your historical exploration."
    ]
  },
  "free-musical-night": {
    "itinerary": [
      {
        "day": 1,
        "title": "Day 1 \u2013 Balti Folk Musical Night & Cultural Campfire",
        "description": "Your cultural evening begins just before sunset. Our team will pick you up from your accommodation in Skardu and drive you to our exclusive, scenic campfire location\u2014often set in a peaceful heritage courtyard or on the soft sands of the nearby Katpana Cold Desert. As the stars emerge over the Karakoram peaks, a roaring campfire is lit to ward off the crisp mountain air. The evening's entertainment begins with a performance by local Balti musicians. You will experience the hypnotic, historical melodies of the region played on the rubab (a traditional lute), accompanied by the upbeat rhythms of the dadang (drum) and the distinct sound of the surnai (wind pipe). As the music speeds up, locals will demonstrate traditional circular folk dances, and guests are always welcome to join in the celebration. As you enjoy the performance, our chefs will serve a traditional, piping hot BBQ dinner straight from the charcoal grill, featuring local favorites like chicken tikka, malai boti, and fresh Skardu river trout, all accompanied by traditional Balti herbal tea. After a relaxing and culturally rich evening, we will drive you back to your hotel for the night."
      }
    ],
    "included": [
      "Private, comfortable return transport from your hotel in Skardu.",
      "Live performance by a traditional Balti folk music band.",
      "Full BBQ dinner, including grilled meats, fresh trout (subject to availability), side dishes, and traditional tea.",
      "Private campfire setup with seating.",
      "English-speaking local host to explain the cultural significance of the music and dances."
    ],
    "excluded": [
      "Accommodation in Skardu.",
      "Alcoholic beverages (strictly prohibited in the region).",
      "Personal winter clothing (warm jackets are highly recommended for the evening).",
      "Gratuities for the musicians, chefs, and drivers."
    ],
    "highlights": [
      "Listen to live, traditional Balti folk music featuring authentic instruments like the surnai, dadang, and rubab.",
      "Watch and participate in traditional mountain folk dances around a crackling campfire.",
      "Dine on a delicious, freshly prepared BBQ dinner, featuring local delicacies such as grilled river trout and kebabs.",
      "Relax under the brilliant, unpolluted, star-filled skies of the Karakoram mountains.",
      "Enjoy an intimate, private cultural experience away from the commercial tourist crowds."
    ]
  },
  "kalash-festival": {
    "itinerary": [
      {
        "day": 1,
        "title": "Day 1 \u2013 Islamabad to Swat / Dir",
        "description": "Your cultural journey begins in Islamabad. After meeting your guide, we drive north via the modern Swat Expressway, enjoying the rolling hills of the Khyber Pakhtunkhwa province. We make scenic stops along the way before arriving in the lush region of Swat or Upper Dir, where we spend the night resting before our mountain crossing."
      },
      {
        "day": 2,
        "title": "Day 2 \u2013 Dir through Lowari Tunnel to Chitral & Bumburet Valley",
        "description": "Today we cross into the majestic Chitral region. We drive through the famous, all-weather Lowari Tunnel, leaving the southern plains behind for the rugged Hindu Kush mountains. We pass through Chitral and transfer to 4x4 jeeps to navigate the narrow, winding mountain road into the Kalash Valleys. We arrive in Bumburet, the largest Kalash valley, settling into our local guesthouse just as the festive energy begins to build."
      },
      {
        "day": 3,
        "title": "Day 3 \u2013 Chilam Joshi Opening Celebrations in Rumbur",
        "description": "On the first official day of the festival, we travel to the neighboring Rumbur valley. Here, the opening ceremonies of Chilam Joshi take place to welcome the spring season and bless the herds. You will see locals gathering in their vibrant traditional dress, sharing local food, and initiating the first drum beats and circle dances of the festival. We spend the full day immersed in the celebrations before returning to Bumburet."
      },
      {
        "day": 4,
        "title": "Day 4 \u2013 Main Festival Dances & Ceremonies in Bumburet",
        "description": "Today is the climax of the Chilam Joshi festival, held in the main valley of Bumburet. The entire community gathers at the central dancing ground. Men and women link arms, dancing together in large, rhythmic circles to hypnotic drum beats. It is a day of matchmaking, joy, and thanksgiving. You will have ample time to observe the festivities, interact respectfully with the locals, and take stunning cultural photographs."
      },
      {
        "day": 5,
        "title": "Day 5 \u2013 Birir Valley Exploration & Kalash Heritage Museum",
        "description": "As the main festival winds down, we explore the quieter, deeply traditional valley of Birir. Birir maintains some of the oldest Kalasha customs and offers a more intimate look at their day-to-day agricultural life. Afterward, we visit the Kalash Heritage Museum to gain a deeper anthropological understanding of their unique history, wooden architecture, and ancient beliefs."
      },
      {
        "day": 6,
        "title": "Day 6 \u2013 Chitral Town, Shahi Mosque & Chitral Fort",
        "description": "We leave the Kalash valleys and drive back down to Chitral town. We spend the day exploring this historic mountain capital. We visit the beautiful Shahi Mosque, set against the backdrop of the towering Tirich Mir peak (7,708m), and explore the grounds of the Chitral Fort, the historical seat of the local rulers (Mehtars). We spend our final night in a comfortable hotel in Chitral."
      },
      {
        "day": 7,
        "title": "Day 7 \u2013 Drive Chitral to Islamabad & Departure",
        "description": "We begin our long return journey early in the morning, driving back through the Lowari Tunnel and passing through Dir and Swat. We arrive back in Islamabad in the late afternoon or early evening, where you will be dropped off at your hotel or the airport, concluding your incredible journey into the heart of the Hindu Kush."
      }
    ],
    "included": [
      "Private, comfortable road transport from Islamabad (including 4x4 jeeps for the Kalash valleys).",
      "Professional, English-speaking guide familiar with Kalasha cultural etiquette.",
      "Accommodation for 6 nights (mix of standard hotels in Dir/Chitral and basic local guesthouses in Kalash).",
      "Daily breakfast.",
      "All entrance fees for the Kalash valleys, Heritage Museum, and Chitral Fort."
    ],
    "excluded": [
      "International or domestic flights.",
      "Lunches and dinners.",
      "Photography fees (if requested by locals).",
      "Pakistan tourist visa fees.",
      "Personal expenses, tips, and comprehensive travel insurance."
    ],
    "highlights": [
      "Celebrate the Chilam Joshi (spring) festival in mid-May with the Kalasha people, an ancient, non-Muslim tribe of the Hindu Kush.",
      "Watch and join the hypnotic traditional circle dances performed to the rhythm of local drums and flutes.",
      "Admire the striking traditional attire of Kalasha women, featuring black robes embroidered with bright threads and cowrie-shell headdresses.",
      "Travel through the dramatic Lowari Tunnel and explore the historical Chitral Fort and Shahi Mosque.",
      "Visit all three distinct Kalash valleys: Bumburet, Rumbur, and the highly traditional Birir."
    ]
  },
  "shimshal-valley-ski": {
    "itinerary": [
      {
        "day": 1,
        "title": "Day 1-2: Arrival in Islamabad and Drive to Hunza",
        "description": "Your extreme winter expedition begins upon arrival in Islamabad. After a comprehensive expedition briefing and gear check, we begin the long drive northward via the Karakoram Highway. We pass through the stunning landscapes of Khyber Pakhtunkhwa and Gilgit, eventually reaching the village of Passu in Upper Hunza by the end of Day 2, where we rest before entering the remote valleys."
      },
      {
        "day": 2,
        "title": "Day 3: The Jeep Ride to Shimshal Valley",
        "description": "Today features one of the most thrilling and perilous drives in the world. We transfer to specialized 4x4 jeeps to navigate the 53 km dirt road carved into the sheer cliffs of the gorge, connecting Passu to Shimshal. In winter conditions, this journey requires extreme skill from our local drivers. We arrive in Shimshal village (3,100m) and settle into a local Wakhi guesthouse for the night."
      },
      {
        "day": 3,
        "title": "Day 4: Acclimatization and Gear Preparation",
        "description": "We spend the day in Shimshal village acclimatizing to the altitude and winter cold. You will have the opportunity to interact with the local Wakhi community, renowned for producing some of Pakistan's greatest high-altitude mountaineers. We sort our backcountry ski equipment, test avalanche beacons, and prepare our expedition supplies with our local porters and guides."
      },
      {
        "day": 4,
        "title": "Day 5-6: Ski Touring towards Yazghil Glacier",
        "description": "Leaving the village behind, we begin our human-powered ski touring approach. We skin up toward the lower winter pastures and the massive Yazghil Glacier. The terrain here is raw and unmarked, requiring careful navigation and avalanche assessment. We establish our advanced winter camps in the snow, experiencing the profound silence and isolation of the Karakoram winter."
      },
      {
        "day": 5,
        "title": "Day 7-10: Khurdopin Glacier & High-Altitude Skiing",
        "description": "These days form the core of the expedition as we push deeper into the \"Great Crossing\" route. We skin and ski along the vast Khurdopin Glacier, navigating around massive seracs and hidden crevasses. The daily routine involves strenuous climbing with skins followed by technical, ungroomed descents. We rely entirely on our expedition support team and extreme cold-weather camping gear, operating in temperatures that drop well below -20\u00b0C."
      },
      {
        "day": 6,
        "title": "Day 11: Lupka La Pass (5,790m) Ski Descent Attempts",
        "description": "Weather and snow stability permitting, we attempt to reach the base and lower slopes of the towering Lupka La Pass. Here, elite skiers can test their limits on steep, high-altitude couloirs. This is extreme ski mountaineering at its finest, rewarding the grueling climb with pristine, untouched powder descents surrounded by 7,000m peaks."
      },
      {
        "day": 7,
        "title": "Day 12: Return Ski Trek to Shimshal Village",
        "description": "We break our final high camp and begin the long ski and trek back toward civilization. Retracing our route along the glaciers, we finally descend back into Shimshal village. We celebrate the successful completion of the backcountry traverse with a warm, traditional Wakhi meal and the comfort of a heated guesthouse room."
      },
      {
        "day": 8,
        "title": "Day 13-14: Return to Passu and Drive to Islamabad",
        "description": "We load our gear back into the 4x4 jeeps and navigate the gorge road back to Passu and the Karakoram Highway. From Hunza, we begin the long drive south over the next two days, arriving back in Islamabad on Day 14. We conclude the expedition with a farewell dinner before you depart for your onward journey."
      }
    ],
    "included": [
      "Specialized winter mountaineering guides and high-altitude porters.",
      "Extreme cold weather camping gear (tents, mess tents, heaters).",
      "All meals during the expedition (cooked at camp).",
      "4x4 jeep transport on the Shimshal gorge road.",
      "Round-trip road transport from Islamabad."
    ],
    "excluded": [
      "Personal ski touring equipment (skis, skins, avalanche beacons, probes, shovels).",
      "International flights and Pakistan visa.",
      "Emergency helicopter rescue insurance (mandatory).",
      "Personal extreme cold-weather clothing (down suits, expedition boots)."
    ],
    "highlights": [
      "Experience authentic backcountry skiing in the remote and rugged Shimshal Valley.",
      "Undertake parts of the legendary \"Great Crossing\" ski traverse across the Khurdopin Glacier.",
      "Test your limits by skinning and skiing near the towering Lupka La Pass (5,790m).",
      "Experience the incredible hospitality and resilience of the Wakhi people in winter.",
      "Navigate the thrilling, snow-covered 53 km jeep road from Passu to Shimshal."
    ]
  }
};

export function getTourDetails(id: string): TourDetails {
  return tourDetails[id] || defaultTourDetails;
}
