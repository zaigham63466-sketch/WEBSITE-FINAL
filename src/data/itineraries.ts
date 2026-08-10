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
        "title": "Arrival in Islamabad & Expedition Briefing",
        "description": "The expedition formally begins with your arrival at Islamabad International Airport, where our ground team orchestrates your transfer to a secure, premium hotel in the capital. The remainder of the day is dedicated to vital administrative procedures, including a comprehensive briefing with the Ministry of Tourism, securing all restricted-area permits for the Central Karakoram National Park, and allowing you time to rest and recover from international travel."
      },
      {
        "day": 2,
        "title": "Scenic Flight to Skardu (2,230m)",
        "description": "The journey shifts dramatically as you board a high-altitude flight winding through the Himalayas and past the towering flanks of Nanga Parbat to reach Skardu. Set at an elevation of 2,230 meters, this remote town serves as the logistical hub for Karakoram expeditions. The afternoon is kept deliberately light, providing an opportunity to inspect your technical gear and begin the essential biological process of acclimatizing to the mountain air."
      },
      {
        "day": 3,
        "title": "Drive Skardu to Askole (3,000m)",
        "description": "Leaving the comforts of Skardu behind, the overland approach into the mountains begins aboard rugged 4x4 Jeeps. The challenging, unpaved road traces the deep, arid gorges carved by the Shigar and Braldu rivers. The six to seven-hour drive serves as a stark introduction to the harsh, vertical geography of Baltistan, finally arriving at Askole, a historic farming village and the absolute final outpost of permanent human settlement."
      },
      {
        "day": 4,
        "title": "Trek Askole to Korofon & Jola (3,200m)",
        "description": "The physical trek commences as you step away from the village trails and navigate the massive, rocky snout of the Biafo Glacier. The terrain is arid and demanding, requiring careful footing over loose moraine and ancient riverbeds. The trail ultimately winds into the deeper Braldu valley, leading to the riverside campsite of Jola, situated precisely at the confluence of the Braldu and Dumado rivers."
      },
      {
        "day": 5,
        "title": "Trek Jola to Paiju (3,450m)",
        "description": "The route presses further into the high gorge, following narrow, rocky trails that occasionally require boulder hopping along the rushing glacial streams. The visual landscape is increasingly dominated by the towering, needle-like granite spires of Paiju Peak looming in the distance. After hours of navigating the stark, treeless valley, the trail arrives at Paiju camp, a vital, tree-lined oasis providing shade and clean water."
      },
      {
        "day": 6,
        "title": "Acclimatization & Rest Day at Paiju",
        "description": "This day is strictly designated for essential high-altitude acclimatization before stepping onto the permanent ice. While the support crew prepares traditional flatbread and rations for the upcoming glacier crossing, climbers focus on physical adaptation. A short, vertical hike up the steep ridges surrounding Paiju is highly recommended, forcing the body to adjust to the thinning oxygen while providing elevated views of the approaching Baltoro Glacier."
      },
      {
        "day": 7,
        "title": "Trek Paiju to Khoburtse (3,930m)",
        "description": "The expedition crosses a significant threshold as the trail leaves the dirt paths and steps onto the undulating, debris-covered terminal moraine of the mighty Baltoro Glacier. The trekking becomes substantially more challenging, requiring constant navigation over shifting ice and loose rock. The intense physical effort is rewarded with sweeping, dramatic views of the sheer granite faces of Great Trango Tower and the Uli Biaho spires."
      },
      {
        "day": 8,
        "title": "Trek Khoburtse to Urdukas (4,050m)",
        "description": "The route ascends the lateral moraine, steadily gaining elevation until reaching the historic campsite of Urdukas. Perched precariously on high rock terraces, this location was originally carved out by early explorers. The camp offers phenomenal, unobstructed panoramic views across the massive expanse of the Baltoro Glacier, looking directly across at the towering, vertical granite walls of the Cathedral and Trango groups."
      },
      {
        "day": 9,
        "title": "Trek Urdukas to Goro II (4,380m)",
        "description": "The expedition moves directly through the heart of the Baltoro Glacier. The terrain transitions from debris-covered rock to exposed white ice, requiring navigation over deep glacial ripples, meltwater streams, and minor crevasses. The visual scale of the Karakoram is overwhelming here, with the massive, snow-covered pyramid of Masherbrum (7,821m) dominating the southern skyline for the entirety of the approach to Goro II."
      },
      {
        "day": 10,
        "title": "Trek Goro II to Concordia (4,600m)",
        "description": "The culmination of the approach trek is reached at Concordia, arguably the most spectacular glacial amphitheater on Earth. This immense junction, where the Baltoro and Godwin-Austen glaciers collide, places you squarely in the center of the highest concentration of soaring peaks on the planet. You are entirely surrounded by four of the world's fourteen 8,000-meter giants, offering your first full, uninterrupted view of K2."
      },
      {
        "day": 11,
        "title": "Concordia to K2 Base Camp (5,150m) & Gilkey Memorial",
        "description": "An early morning departure dictates the final push up the Godwin-Austen Glacier, passing directly beneath the towering slopes of Broad Peak to reach K2 Base Camp at 5,150 meters. The sheer scale of K2 towering directly overhead is staggering. The day includes a solemn visit to the Art Gilkey Memorial, paying respects to the mountaineers lost on the peak, before beginning the long trek back to Concordia."
      },
      {
        "day": 12,
        "title": "Exploration & Contingency Day at Concordia",
        "description": "This built-in contingency day at Concordia serves a critical logistical purpose. It provides a necessary buffer to wait out unpredictable Karakoram storms, ensuring you have the highest possible chance of seeing K2 unobscured. If the weather is clear, the day is utilized for rest, photography, or exploring the complex, crevasse-riddled ice formations near Broad Peak Base Camp before the descent begins."
      },
      {
        "day": 13,
        "title": "Trek Concordia to Goro I / Urdukas",
        "description": "The return journey begins as you retrace your steps down the Baltoro Glacier. While the physical exertion is somewhat lessened by the gradual loss of altitude, the shifting ice and rocky moraine still demand constant attention. The changing angle of the sun provides entirely fresh, golden lighting on the Cathedral Peaks and granite spires that were previously viewed from the opposite direction."
      },
      {
        "day": 14,
        "title": "Trek Urdukas to Paiju / Jola",
        "description": "The expedition successfully descends off the permanent glacial ice and moraine, transitioning back onto the traditional, solid dirt trails of the lower valleys. Following the rushing Braldu River downward, the air becomes noticeably richer in oxygen and the temperature warms significantly. The day concludes at the familiar, green oasis of Paiju, marking the end of the high-altitude glacial exposure."
      },
      {
        "day": 15,
        "title": "Trek to Askole & 4x4 Drive to Skardu",
        "description": "The final segment of the wilderness trek follows the established trails back to the roadhead at Askole. Upon arrival, the trekking phase officially concludes as you board the awaiting 4x4 Jeeps. The rugged, dusty drive back through the deep river gorges brings you back to Skardu town, where the immense luxury of a hot shower, a proper bed, and a celebratory team dinner awaits."
      },
      {
        "day": 16,
        "title": "Flight to Islamabad & International Departure",
        "description": "The expedition formally concludes with a morning transfer to Skardu Airport for the highly scenic return flight over the Himalayas back to Islamabad. Upon arrival in the capital, a final debriefing is held at the Alpine Club headquarters to officially close out the permit. You are then transferred to the international terminal for your onward journey, carrying the rare accomplishment of reaching the base of the Savage Mountain."
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
        "description": "Your arrival at Islamabad International Airport initiates the expedition. After transferring to your designated hotel, the remainder of the day is consumed by critical administrative tasks. You will attend a comprehensive briefing at the Ministry of Tourism to secure the required permits for the Central Karakoram National Park, with a specific focus on the technical requirements of the Gondogoro La pass crossing."
      },
      {
        "day": 2,
        "title": "Fly Islamabad to Skardu",
        "description": "The expedition takes to the air with a dramatic flight over the Himalayan ranges, passing close to the Nanga Parbat massif before landing in Skardu (2,230m). The afternoon in this high-altitude hub is essential for acclimatization. The team will conduct a thorough review of technical climbing gear\u2014crampons, harnesses, and ice axes\u2014ensuring absolute readiness for the demanding glacial traverse ahead."
      },
      {
        "day": 3,
        "title": "Drive Skardu to Askole (3,000m)",
        "description": "The overland journey deep into the Karakoram begins aboard specialized 4x4 Jeeps. The route navigates the narrow, unpaved roads carved into the steep walls of the Shigar and Braldu river gorges. This bone-jarring drive exposes the raw, arid nature of Baltistan, ultimately arriving at Askole, the final permanent village and the traditional launching point for all major Baltoro expeditions."
      },
      {
        "day": 4,
        "title": "Trek Askole to Jola (3,200m)",
        "description": "The physical trekking phase commences with a challenging traverse across the massive, rocky snout of the Biafo Glacier. The environment is harsh and dry, requiring careful navigation over loose stones and ancient riverbeds. The trail eventually merges back into the Braldu valley, leading to the riverside camp of Jola, strategically positioned at the confluence of the Braldu and Dumado rivers."
      },
      {
        "day": 5,
        "title": "Trek Jola to Paiju (3,450m)",
        "description": "Leaving the comforts of Skardu, the expedition boards a fleet of rugged 4x4 Jeeps. The challenging overland journey navigates the unpaved, cliff-hugging roads deep into the Shigar and Braldu river gorges. This bone-jarring drive exposes the raw, arid geology of Baltistan, ultimately terminating at Askole (3,000m), the historic farming village and the final permanent outpost before the high glaciers."
      },
      {
        "day": 6,
        "title": "Rest & Acclimatization at Paiju",
        "description": "Proper acclimatization is an absolute necessity before ascending onto the permanent glacier. This designated rest day at Paiju allows your body to adjust to the thinning atmosphere. While the support crew prepares provisions for the ice, climbers are strongly encouraged to undertake a steep, short vertical hike up the surrounding ridges to allow the body to adapt before returning to camp to hydrate and rest."
      },
      {
        "day": 7,
        "title": "Trek Paiju to Khoburtse (3,930m)",
        "description": "The expedition faces a major transition as the trail steps onto the undulating, debris-covered terminal moraine of the immense Baltoro Glacier. The trekking becomes highly technical, demanding constant attention to footing over shifting ice and loose rock. The grueling physical effort is rewarded with the first dramatic, sweeping views of the sheer granite faces of Great Trango Tower and Uli Biaho."
      },
      {
        "day": 8,
        "title": "Trek Khoburtse to Urdukas (4,050m)",
        "description": "Proper acclimatization is an absolute necessity before ascending onto the permanent glacier. This designated rest day at Paiju allows your body to biologically adjust to the thinning atmosphere. While the high-altitude porters organize the heavy loads for the ice, climbers are strongly encouraged to undertake a steep, short vertical hike up the surrounding ridges to force adaptation before returning to camp."
      },
      {
        "day": 9,
        "title": "Trek Urdukas to Goro II (4,380m)",
        "description": "The expedition marches directly through the core of the Baltoro Glacier, transitioning from rocky moraine to exposed white ice. The route requires careful navigation over deep glacial ripples and meltwater streams. The visual scale of the Karakoram is overwhelming, with the massive, snow-covered pyramid of Masherbrum (7,821m) dominating the southern skyline for the entire approach toward the Goro II camp."
      },
      {
        "day": 10,
        "title": "Trek Goro II to Concordia (4,600m)",
        "description": "The trail steadily climbs the lateral moraine, gaining significant elevation to reach the historic campsite of Urdukas. Carved into the high rock terraces by early mountaineers, this camp offers a distinct tactical advantage. From this elevated position, you are treated to phenomenal, unobstructed panoramic views looking directly across the glacier at the towering, vertical granite walls of the Cathedral and Trango groups."
      },
      {
        "day": 11,
        "title": "Excursion to K2 Base Camp (5,150m)",
        "description": "An early departure dictates the trek up the Godwin-Austen Glacier, passing directly beneath the towering slopes of Broad Peak to reach K2 Base Camp at 5,150 meters. The sheer vertical scale of K2 towering overhead is incomprehensible. The day includes a solemn visit to the Art Gilkey Memorial to honor fallen mountaineers, before undertaking the long trek back down the glacier to Concordia."
      },
      {
        "day": 12,
        "title": "Concordia to Ali Camp (4,800m)",
        "description": "Leaving the main Baltoro route behind, the expedition turns south to trek up the Vigne Glacier. The objective is Ali Camp, a desolate, rocky outpost situated at the absolute base of the Gondogoro La pass. The afternoon is spent resting, organizing technical climbing equipment, and mentally preparing for the grueling, midnight alpine start required to safely cross the pass."
      },
      {
        "day": 13,
        "title": "Cross Gondogoro La (5,585m) to Khuspang (4,688m)",
        "description": "Departing Ali Camp at midnight, climbers use headlamps, crampons, and fixed ropes to ascend the steep, treacherous snow headwall of the Gondogoro La (5,585m). Reaching the summit at dawn offers the ultimate reward: a legendary, 360-degree sunrise view over K2, Broad Peak, and the Gasherbrums. The descent into the Hushe Valley requires extreme care, utilizing fixed ropes down steep ice slopes to reach Khuspang."
      },
      {
        "day": 14,
        "title": "Weather Buffer / Rest Day at Khuspang",
        "description": "The harsh, high-altitude glacial environment is left behind as the expedition descends deeper into the Hushe Valley. The terrain transitions dramatically from technical ice and rock moraine back to soft, alpine meadows. The air becomes noticeably richer in oxygen as you arrive at the highly scenic Dalsangpa camp, surrounded by vibrant green pastures and towering peaks."
      },
      {
        "day": 15,
        "title": "Trek Khuspang to Saicho (3,330m)",
        "description": "The gentle descent continues through lush summer pastures, often shared with local shepherds and their grazing yaks. The trail winds past spectacular wildflowers and clear mountain streams, arriving at the permanent settlement of Hushe village. This provides a deep sense of return to civilization and an opportunity to experience traditional Balti culture and hospitality after weeks on the ice."
      },
      {
        "day": 16,
        "title": "Trek Saicho to Hushe Village (3,050m)",
        "description": "The trekking phase officially concludes as you board 4x4 Jeeps in Hushe for the scenic, rugged drive down the valley back to Skardu town. The transition from the high mountains back to the relative bustle of the regional capital is stark. The day ends with the immense luxury of a hot shower, a proper bed, and a celebratory team dinner."
      },
      {
        "day": 17,
        "title": "Drive Hushe to Skardu via Khaplu",
        "description": "The expedition team transfers to Skardu Airport for the highly scenic morning flight over the Himalayas back to Islamabad. Upon arrival in the capital, you are transferred to your hotel. The afternoon is kept free, allowing you to rest, recover from the physical toll of the expedition, or begin exploring the city at your own pace."
      },
      {
        "day": 18,
        "title": "Reserve Day in Skardu",
        "description": "This day serves as a critical built-in contingency buffer. Because the flight from Skardu is highly dependent on clear visual weather conditions in the mountains, this extra day absorbs any unexpected delays. If the flight operated on schedule, this day is utilized for guided sightseeing in Islamabad, including visits to the iconic Faisal Mosque and the Pakistan Monument."
      },
      {
        "day": 19,
        "title": "Flight Skardu to Islamabad",
        "description": "A final, relaxing day in Islamabad provides the perfect opportunity for cultural exploration and purchasing authentic Pakistani handicrafts and souvenirs. In the afternoon, the team gathers at the Alpine Club headquarters for the formal expedition debriefing required by the government, closing out the climbing permits. The evening concludes with a formal farewell dinner."
      },
      {
        "day": 20,
        "title": "International Departure",
        "description": "The expedition formally concludes with a transfer to Islamabad International Airport. You will depart carrying the immense achievement of having traversed the heart of the Karakoram, witnessed the world's highest concentration of 8,000-meter peaks, and successfully crossed the formidable Gondogoro La pass."
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
        "description": "Your expedition begins with arrival at Islamabad International Airport, where our team ensures a seamless transfer to your hotel. The afternoon focuses strictly on necessary administrative logistics. You will attend a detailed briefing at the Ministry of Tourism to formalize the trekking permits for the Central Karakoram National Park, ensuring all regulatory requirements are met before departing."
      },
      {
        "day": 2,
        "title": "Fly to Skardu",
        "description": "The team transfers to the domestic terminal for the spectacular mountain flight to Skardu (2,230m). Flying closely past the Nanga Parbat massif provides an immediate sense of the Karakoram's scale. The afternoon in Skardu is utilized for vital early acclimatization, finalizing expedition rations, and meticulously inspecting all technical trekking gear and glacier equipment."
      },
      {
        "day": 3,
        "title": "Drive Skardu to Askole (3,000m)",
        "description": "The overland journey departs Skardu aboard rugged 4x4 Jeeps. The challenging route navigates the unpaved, cliff-hugging roads deep into the Shigar and Braldu river gorges. This bone-jarring drive exposes the raw geology of Baltistan, ultimately terminating at Askole (3,000m), the historic farming village and the final permanent outpost before the high glaciers."
      },
      {
        "day": 4,
        "title": "Trek Askole to Namla (3,400m)",
        "description": "The physical trekking phase commences with a demanding traverse across the massive snout of the Biafo Glacier. The environment is harsh and arid, requiring careful footing over loose moraine. The trail diverges from the main Baltoro route, heading north up the true left bank of the Biafo Glacier to the first camp at Namla (3,400m)."
      },
      {
        "day": 5,
        "title": "Trek Namla to Mango (3,650m)",
        "description": "The trek continues exclusively along the Biafo Glacier, navigating the complex lateral moraine. The physical effort is significant as the trail winds through shifting ice and rocky debris. The stark, treeless landscape is dominated by the sheer granite spires lining the glacier. The day concludes at the traditional campsite of Mango (3,650m)."
      },
      {
        "day": 6,
        "title": "Trek Mango to Baintha (3,990m)",
        "description": "The route transitions from the moraine onto the central white ice of the Biafo Glacier. Navigating the exposed ice requires careful attention to avoid hidden crevasses. The visual scale of the glacier becomes apparent as you progress upward. The day culminates at the lush, grassy ablation valley of Baintha (3,990m)."
      },
      {
        "day": 7,
        "title": "Acclimatization Day at Baintha",
        "description": "Proper acclimatization is an absolute necessity before ascending higher into the glacial system. This designated rest day at Baintha allows your body to biologically adjust to the thinning atmosphere. Climbers are strongly encouraged to undertake a steep, short vertical hike up the surrounding ridges to force adaptation before returning to camp."
      },
      {
        "day": 8,
        "title": "Trek Baintha to Marphogoro (4,400m)",
        "description": "The expedition steps back onto the undulating white ice of the Biafo Glacier. The trekking becomes highly demanding, requiring constant navigation over glacial ripples and meltwater streams. The grueling physical effort is rewarded with dramatic, sweeping views of the Ogre (Baintha Brakk) towering overhead. The camp is established at Marphogoro (4,400m)."
      },
      {
        "day": 9,
        "title": "Trek Marphogoro to Karpogoro (4,680m)",
        "description": "The trail continues its steady, grueling ascent up the vast expanse of the Biafo Glacier. The terrain transitions into a more complex zone of seracs and open crevasses, demanding roped travel. The extreme altitude begins to impact the trekking pace. The day concludes at Karpogoro (4,680m), situated just beneath the final basin."
      },
      {
        "day": 10,
        "title": "Trek Karpogoro to Snow Lake / Hispar Base (4,770m)",
        "description": "The trek reaches the legendary Snow Lake (Lukpe Lawo), a massive glacial basin spanning over 16 kilometers. This immense plateau of snow and ice is one of the most spectacular, isolated environments on the planet. The expedition establishes a high camp at 4,770 meters, completely surrounded by nameless, jagged Karakoram peaks."
      },
      {
        "day": 11,
        "title": "Exploration of Snow Lake",
        "description": "This designated exploration day is spent entirely within the massive Snow Lake basin. The untouched, untouched environment offers a profound sense of isolation rarely experienced on the more popular Karakoram routes. For those properly acclimatized, the day offers optional ridge hikes to gain even more spectacular aerial perspectives of the glacial plateau."
      },
      {
        "day": 12,
        "title": "Cross Hispar La (5,151m) to Kani Basa (4,510m)",
        "description": "An alpine start is required to cross the formidable Hispar La (5,151m). The team navigates the steep snow headwall using fixed ropes and crampons. Reaching the summit provides a phenomenal, 360-degree panorama encompassing the Biafo and Hispar glaciers. The treacherous descent into the Hispar valley concludes at the Kani Basa camp (4,510m)."
      },
      {
        "day": 13,
        "title": "Trek Kani Basa to Jutmal (4,270m)",
        "description": "The expedition begins the long, sustained descent down the rugged Hispar Glacier. The route requires careful navigation over complex, heavily crevassed ice and shifting lateral moraines. Physical exhaustion is somewhat mitigated by the rapidly thickening, oxygen-rich air. The day concludes at the rocky campsite of Jutmal (4,270m)."
      },
      {
        "day": 14,
        "title": "Trek Jutmal to Bitanmal (3,660m)",
        "description": "The descent continues along the Hispar Glacier, crossing numerous meltwater streams and massive boulder fields. The transition in altitude is clearly visible as the sparse alpine vegetation gives way to denser flora. The day concludes at the grassy ablation valley of Bitanmal (3,660m), offering a comfortable respite from the ice."
      },
      {
        "day": 15,
        "title": "Trek Bitanmal to Hispar Village (3,200m)",
        "description": "The final segment of the wilderness trek navigates the remaining lateral moraine before transitioning back onto traditional dirt trails. Following the rushing Hispar River downward, the temperature warms significantly. The trekking phase officially concludes upon arrival at Hispar Village (3,200m), marking a return to permanent human settlement."
      },
      {
        "day": 16,
        "title": "Drive Hispar Village to Karimabad (Hunza)",
        "description": "Boarding awaiting 4x4 Jeeps in Hispar Village, the expedition endures a highly scenic, rugged drive along the Hispar River gorge. The winding road eventually connects with the paved Karakoram Highway in the Nagar Valley. The day concludes with arrival in Karimabad, the ancient capital of Hunza, offering the immense luxury of a hot shower."
      },
      {
        "day": 17,
        "title": "Explore Hunza Valley & Baltit Fort",
        "description": "This built-in rest day provides crucial recovery time after the grueling high-altitude traverse. The day is kept deliberately flexible, allowing team members to independently explore the local bazaars, visit the historic 700-year-old Baltit Fort, or simply relax at a caf\u00e9 enjoying the famous walnut cake."
      },
      {
        "day": 18,
        "title": "Drive Karimabad to Gilgit",
        "description": "The overland journey continues southward along the legendary Karakoram Highway. The route traces the deep, arid gorges of the Hunza River, revealing the sheer scale of the surrounding peaks, including Rakaposhi. By late afternoon, you arrive in the bustling regional hub of Gilgit."
      },
      {
        "day": 19,
        "title": "Fly Gilgit to Islamabad",
        "description": "The team transfers to Gilgit Airport for the highly scenic morning flight over the Himalayas back to Islamabad. Upon arrival in the capital, you are transferred to your hotel. The afternoon is kept free, allowing you to rest and recover from the physical toll of the expedition."
      },
      {
        "day": 20,
        "title": "Contingency / Sightseeing in Islamabad",
        "description": "This designated contingency day absorbs any logistical or weather-related flight delays from Gilgit. If the schedule is intact, climbers utilize this day for cultural sightseeing in Islamabad, including a visit to the iconic Faisal Mosque, or purchasing authentic Pakistani handicrafts and souvenirs."
      },
      {
        "day": 21,
        "title": "International Departure",
        "description": "The expedition formally concludes with a transfer to Islamabad International Airport. You will depart carrying the profound, rare achievement of crossing the legendary Snow Lake and Hispar La, bringing an end to one of the most demanding wilderness traverses on Earth."
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
        "description": "The journey begins with an overland departure from Islamabad, traveling north along the legendary Karakoram Highway. The route traces the lush foothills of the Hazara region before entering the deep, arid gorges of the Indus River. The transition in landscape is severe and dramatic, culminating in a late afternoon arrival at the riverside town of Chilas, where the team rests before the demanding ascent into the Nanga Parbat massif."
      },
      {
        "day": 2,
        "title": "Raikot Bridge, 4x4 Jeep to Tattu & Hike to Fairy Meadows (3,300m)",
        "description": "Continuing along the Karakoram Highway, the expedition reaches Raikot Bridge, the crucial transfer point. Here, you board local, specialized 4x4 mountain Jeeps for the infamously steep, cliff-hugging ascent up the narrow Raikot gorge to the roadhead at Tato. From Tato, the journey continues on foot, hiking upward through dense, untouched pine forests to finally arrive at the lush alpine pastures of Fairy Meadows."
      },
      {
        "day": 3,
        "title": "Fairy Meadows to Beyal Camp & Viewpoint",
        "description": "Waking up in Fairy Meadows provides unobstructed, overwhelmingly massive views of the Nanga Parbat north face. The day involves a gradual acclimatization hike through the untouched alpine forests toward Beyal Camp. This allows the body to adjust to the 3,300m elevation while fully experiencing the serene atmosphere of the ancient woods, completely dominated by the towering ice walls above."
      },
      {
        "day": 4,
        "title": "Excursion to Nanga Parbat Base Camp (3,967m)",
        "description": "This day features a physically demanding trek traversing the rugged lateral moraine of the Raikot Glacier to reach Nanga Parbat Base Camp at 3,967 meters. Standing directly beneath the terrifyingly sheer, 4,000-meter vertical ice of the Raikot Face provides an unparalleled sense of scale. After taking in the high-altitude environment, the team descends back to the safety and comfort of Fairy Meadows."
      },
      {
        "day": 5,
        "title": "Exploration & Photography at Fairy Meadows",
        "description": "The morning is kept free in Fairy Meadows, allowing time for photography or quiet relaxation in the wooden cabins while the mountain air is still clear. In the early afternoon, the descent begins, hiking back down through the pine forests to Tato village. Reboarding the 4x4 Jeeps, you endure the steep descent back to the Karakoram Highway before driving north to Gilgit."
      },
      {
        "day": 6,
        "title": "Hike down to Tattu, 4x4 to Raikot Bridge & Drive to Naran / Besham",
        "description": "The return journey traces the path of the Indus River southward along the Karakoram Highway. Depending on seasonal conditions, the route may deviate to cross the high-altitude Babusar Pass, offering sweeping views of the surrounding Himalayan ranges. The long day of overland travel concludes with a relaxing evening in the greener, lower-elevation valleys of Naran or Besham."
      },
      {
        "day": 7,
        "title": "Drive to Islamabad & Departure",
        "description": "The final driving segment brings the expedition out of the deep mountain valleys and back into the bustling capital city of Islamabad. Upon arrival, the team is transferred directly to the international airport for the outbound flight, bringing the short but intense foray into the shadow of the Killer Mountain to a close."
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
        "description": "Upon arrival in the regional hub of Gilgit, the expedition transfers immediately to the picturesque Minapin village situated in the Nagar Valley. Set against a backdrop of towering peaks, Minapin serves as the ideal launchpad for the trek. The afternoon is dedicated to finalizing trekking gear and experiencing the rich local hospitality at a traditional guesthouse before the ascent begins."
      },
      {
        "day": 2,
        "title": "Trek Minapin to Tagaphari (3,260m)",
        "description": "The physical trek commences with a steep, sustained ascent departing from Minapin village. The trail winds upward through dense, aromatic forests of juniper and pine, requiring steady effort. Breaking through the treeline, the route emerges at the scenic summer pasture of Hapakun, offering sweeping, elevated views across the Nagar valley and the opportunity to rest in traditional shepherd settlements."
      },
      {
        "day": 3,
        "title": "Day Hike to Diran Base Camp (3,700m) & Rakaposhi Ridge",
        "description": "The ascent continues upward from the pastures to reach Taghafari, which serves as the official Rakaposhi Base Camp at 3,800 meters. Tents are pitched on a lush green meadow situated directly adjacent to the massive, heavily crevassed Minapin Glacier. The location provides staggering, close-range views directly beneath the towering, icy north face of Rakaposhi."
      },
      {
        "day": 4,
        "title": "Trek Tagaphari to Minapin & Drive to Karimabad (Hunza)",
        "description": "The morning is dedicated to exploring the rugged lateral moraine of the Minapin Glacier, with options to hike up the surrounding ridges for expansive panoramic views of the neighboring Diran Peak. After thoroughly absorbing the high-alpine environment, the expedition breaks camp and begins the long, steady descent back through the Hapakun pastures, returning to the comfort of Minapin village."
      },
      {
        "day": 5,
        "title": "Karimabad to Gilgit & Departure",
        "description": "After enjoying a traditional local breakfast in Minapin, the brief but spectacular trekking expedition concludes. The team transfers to awaiting vehicles for the drive back to Gilgit. From Gilgit, you may connect with an outbound flight to Islamabad or continue overland exploration further into the Hunza Valley or southward along the Karakoram Highway."
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
      "Accessible high-altitude trek suitable for active trekkers with striking alpine scenery"
    ]
  },
  "rush-lake": {
    "itinerary": [
      {
        "day": 1,
        "title": "Islamabad Arrival & Flight to Gilgit",
        "description": "The expedition begins by arriving in the legendary Hunza Valley, settling into a comfortable hotel in the bustling center of Karimabad. The remainder of the day is dedicated to vital acclimatization and cultural immersion. The team will explore the narrow, cobblestone streets and take a guided tour of the 700-year-old Baltit Fort, absorbing the rich architectural history of the region."
      },
      {
        "day": 2,
        "title": "Drive Karimabad to Hoper Village (Nagar)",
        "description": "The team drives across the Hunza River, entering the adjacent Nagar Valley to reach the traditional village of Hopper. The trekking phase immediately presents a challenge as the route crosses the undulating, debris-covered expanse of the Bualtar Glacier. Successfully navigating the ice, the trail ascends to the grassy, welcoming campsite at Shiskin."
      },
      {
        "day": 3,
        "title": "Trek Hoper to Bericho Kor (3,300m)",
        "description": "The route ascends steeply from the glacier, winding through vibrant summer alpine pastures heavily utilized by local Nagar shepherds. The challenging physical effort culminates at the scenic ridge camp of Barpu Giram. This elevated position provides spectacular, sweeping aerial views looking down upon the convergence of the Hispar and Barpu glaciers."
      },
      {
        "day": 4,
        "title": "Trek Bericho Kor to Chidin Harai (4,440m)",
        "description": "The ascent becomes increasingly steep as the trail pushes higher up the mountainside toward the alpine zone. The intense effort is rewarded upon reaching Rush Lake at 4,694 meters, recognized as one of the highest alpine lakes in the world. The campsite is established directly beside the crystal-clear waters, perfectly reflecting the surrounding snow-capped peaks."
      },
      {
        "day": 5,
        "title": "Trek Chidin Harai to Rush Lake (4,694m)",
        "description": "A full day is entirely dedicated to exploring the high-altitude environment surrounding Rush Lake. For those properly acclimatized, an optional, strenuous hike up to Rush Peak (5,098m) is offered. Reaching this summit provides an unparalleled, 360-degree panorama encompassing Spantik, Malubiting, and the entirety of the Hunza Valley stretching out below."
      },
      {
        "day": 6,
        "title": "Summit Rush Peak (5,098m) & Lake Exploration",
        "description": "Leaving the harsh alpine environment behind, the expedition begins the long descent. The route takes an alternative path downward, offering entirely new perspectives on the surrounding peaks. The trail loses significant altitude as it drops toward the Phahi Phari campsite, nestled safely beside the immense, sprawling expanse of the Barpu Glacier."
      },
      {
        "day": 7,
        "title": "Trek Rush Lake to Gututz (3,500m)",
        "description": "The descent continues alongside the lateral moraine of the glacier. The transition in altitude is clearly visible as the sparse alpine vegetation gives way to denser, greener flora in the warmer, lower valleys. The day concludes at the traditional summer settlement of Hamdar, offering a glimpse into the seasonal agricultural life of the local communities."
      },
      {
        "day": 8,
        "title": "Trek Gututz to Hoper & Drive to Hunza",
        "description": "The final trekking segment requires crossing the rugged Hopper Glacier, carefully navigating the shifting ice and rocky debris to return to Hopper village. Upon arrival, the trekking phase concludes, and the team boards transport for the short, highly scenic drive back to the deep comforts and hot showers waiting in Karimabad."
      },
      {
        "day": 9,
        "title": "Drive Hunza to Gilgit",
        "description": "This built-in rest day in Hunza provides crucial recovery time after the high-altitude trek. The day is kept deliberately flexible, allowing team members to independently explore the local bazaars, visit the historic Altit Fort, or simply relax at a caf\u00e9 enjoying the famous walnut cake while gazing across the valley at Rakaposhi."
      },
      {
        "day": 10,
        "title": "Fly Gilgit to Islamabad & Departure",
        "description": "The expedition concludes as you depart the Hunza Valley, traveling southward along the Karakoram Highway. You will arrive at Gilgit Airport in time for the scenic mountain flight back to Islamabad, or alternatively, commence the multi-day overland journey south through the Indus River gorges toward the capital."
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
      "Reach the untouched turquoise waters of Rush Lake at 4,694m",
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
        "description": "The excursion begins in the Skardu basin with a visit to the Manthal Buddha Rock, an impressive 8th-century granite carving that highlights the region's ancient Buddhist heritage. From this historical site, the team begins a gentle hike ascending the historic Ringchan trail, which gradually reveals striking, sweeping views of the entire Skardu valley."
      },
      {
        "day": 2,
        "title": "Ringchan Historic Trail & Kharpocho Vista",
        "description": "The hike continues upward, exploring the higher ridges of the Ringchan trail that were once utilized by ancient Silk Route traders and Tibetan travelers. The descent routes the team through lush, organic apricot orchards, providing a rich, sensory experience before returning to the bustling center of Skardu town for a traditional Balti lunch."
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
        "description": "The significant journey begins upon your arrival at Islamabad International Airport. Our ground logistics team ensures a smooth transfer to a premium hotel in the capital. The remainder of the day is strictly dedicated to critical administrative procedures. You will attend a mandatory, detailed briefing at the Ministry of Tourism to secure the climbing permits for K2, while our team begins organizing the massive volume of high-altitude provisions."
      },
      {
        "day": 2,
        "title": "Islamabad Official Formalities",
        "description": "The morning focuses on finalizing official expedition formalities and equipment checks in Islamabad. The entire team meets at the Alpine Club of Pakistan for the formal permit handover. In the afternoon, climbers have the opportunity to purchase any last-minute provisions from local specialized markets while the logistics crew carefully weighs and prepares the mountain cargo for the upcoming flight to Baltistan."
      },
      {
        "day": 3,
        "title": "Fly to Skardu",
        "description": "The expedition transfers to the domestic terminal for the spectacular, high-altitude flight to Skardu (2,230m). Flying closely past the sheer walls of Nanga Parbat provides an immediate sense of the scale of the Karakoram. The afternoon in Skardu is utilized for vital early acclimatization and a meticulous inspection of all technical climbing gear, oxygen regulators, and communication equipment."
      },
      {
        "day": 4,
        "title": "Skardu Preparation & Acclimatization",
        "description": "A full day in Skardu is absolutely necessary to finalize the complex logistics of an 8,000-meter peak. While the expedition leader secures the local Balti high-altitude porters and finalizes ration distribution, climbers focus on physical readiness and acclimatization. A steep hike up to the historic Kharpocho Fort is highly recommended to allow the body to adapt to the mountain air."
      },
      {
        "day": 5,
        "title": "Drive Skardu to Askole (3,000m)",
        "description": "The route ascends further into the high gorge, following narrow paths that wind through massive river boulders and steep rock faces. The sheer, needle-like granite spires of Paiju Peak dominate the forward view throughout the day. After hours of navigating the stark, treeless valley, the trail descends into Paiju camp, a lush, tree-lined oasis providing critical shade and fresh water."
      },
      {
        "day": 6,
        "title": "Trek Askole to Jola (3,200m)",
        "description": "The physical approach trek commences with a demanding traverse across the massive, rocky snout of the Biafo Glacier. The environment is harsh and dry, requiring careful footing over loose stones and ancient, dry riverbeds. The trail eventually merges back into the deep Braldu valley, leading to the riverside camp of Jola, positioned precisely at the confluence of the Braldu and Dumado rivers."
      },
      {
        "day": 7,
        "title": "Trek Jola to Paiju (3,450m)",
        "description": "The route ascends further into the high gorge, following narrow paths that wind through massive river boulders and steep rock faces. The sheer, needle-like granite spires of Paiju Peak dominate the forward view throughout the day. After hours of navigating the stark, treeless valley, the trail descends into Paiju camp, a lush, tree-lined oasis providing critical shade and fresh water."
      },
      {
        "day": 8,
        "title": "Rest & Acclimatization at Paiju",
        "description": "The trail steadily climbs the lateral moraine, gaining significant elevation to reach the historic campsite of Urdukas. Carved into the high rock terraces by early mountaineers, this camp offers a distinct tactical advantage. From this elevated position, you are treated to phenomenal, unobstructed panoramic views looking directly across the glacier at the towering, vertical granite walls of the Cathedral and Trango groups."
      },
      {
        "day": 9,
        "title": "Trek Paiju to Khoburtse (3,930m)",
        "description": "The expedition crosses a major threshold as the trail steps onto the undulating, debris-covered terminal moraine of the immense Baltoro Glacier. The trekking becomes highly technical, demanding constant attention to footing over shifting ice and loose rock. The grueling physical effort is rewarded with the first dramatic, sweeping views of the sheer granite faces of Great Trango Tower and Uli Biaho."
      },
      {
        "day": 10,
        "title": "Trek Khoburtse to Urdukas (4,050m)",
        "description": "The trek reaches Concordia, the most spectacular glacial junction on the planet. This immense amphitheater, where the Baltoro and Godwin-Austen glaciers collide, places you at the epicenter of the Karakoram's highest peaks. You are completely surrounded by an array of 8,000-meter giants, including Broad Peak, the Gasherbrums, and your first full, unobstructed view of the towering K2."
      },
      {
        "day": 11,
        "title": "Trek Urdukas to Goro II (4,380m)",
        "description": "The expedition marches directly through the core of the Baltoro Glacier, transitioning from rocky moraine to exposed white ice. The route requires careful navigation over deep glacial ripples, meltwater streams, and minor crevasses. The visual scale of the Karakoram is overwhelming, with the massive, snow-covered pyramid of Masherbrum (7,821m) dominating the southern skyline for the entire approach toward Goro II."
      },
      {
        "day": 12,
        "title": "Trek Goro II to Concordia (4,600m)",
        "description": "The trek reaches Concordia, the most spectacular glacial junction on the planet. This immense amphitheater, where the Baltoro and Godwin-Austen glaciers collide, places you at the epicenter of the Karakoram's highest peaks. You are completely surrounded by an array of 8,000-meter giants, including Broad Peak, the Gasherbrums, and your first full, unobstructed view of the towering K2 towering to the north."
      },
      {
        "day": 13,
        "title": "Trek Concordia to K2 Base Camp (5,150m)",
        "description": "An early departure dictates the final push up the Godwin-Austen Glacier, passing directly beneath the towering slopes of Broad Peak to reach K2 Base Camp at 5,150 meters. The sheer vertical scale of K2 towering overhead is staggering. The day is spent establishing the extensive Base Camp infrastructure, organizing the communication tents, and preparing for the arduous climbing weeks ahead."
      },
      {
        "day": 14,
        "title": "Base Camp Setup & Puja Ceremony",
        "description": "The entire team participates in a traditional Puja ceremony, a profound spiritual requirement before stepping onto the mountain. Following the ceremony, climbers finalize the organization of personal high-altitude gear, test the supplemental oxygen systems, and review the complex safety protocols for navigating the perilous Abruzzi Spur over the coming weeks."
      },
      {
        "day": 15,
        "title": "Acclimatization & Climbing Rotations (Days 15\u201348)",
        "description": "This extended phase constitutes the core climbing period on K2 (8,611m). Over the next 30+ days, the expedition meticulously executes multiple acclimatization rotations through the Abruzzi Spur. Climbers will establish and stock Camps 1, 2, 3, and 4, navigating highly technical ice, extreme altitude, and severe weather. The ultimate goal is to position the team perfectly for a safe summit push when the critical weather window opens."
      },
      {
        "day": 16,
        "title": "Base Camp Cleanup & Environmental Clearance",
        "description": "With the climbing phase concluded, the massive logistical operation of breaking down Base Camp begins. The team ensures strict adherence to environmental protocols, packing all waste and equipment for transport off the glacier. Climbers rest and recover, mentally processing the immense physical exertion of the preceding weeks before beginning the long trek back to civilization."
      },
      {
        "day": 17,
        "title": "Trek K2 Base Camp to Concordia & Goro I",
        "description": "The descent down the Godwin-Austen and Baltoro glaciers provides a starkly different physical experience. The extreme exhaustion of the high mountain is somewhat mitigated by the rapidly thickening, oxygen-rich air as the team passes back through Concordia to reach Goro I, leaving the shadows of the 8,000-meter peaks behind."
      },
      {
        "day": 18,
        "title": "Trek Goro I to Urdukas",
        "description": "The descent continues down the core of the Baltoro Glacier. Navigating the familiar white ice and lateral moraines, the team passes beneath the towering granite spires of the Trango group once more. The day concludes at the grassy terraces of Urdukas, marking the transition from the deep glacial ice back toward the lower, warmer valleys."
      },
      {
        "day": 19,
        "title": "Trek Urdukas to Paiju",
        "description": "The expedition successfully descends off the permanent glacial ice and moraine, transitioning back onto the traditional, solid dirt trails of the lower valleys. Following the rushing Braldu River downward, the temperature warms significantly. The day concludes at the familiar, green oasis of Paiju, marking the definitive end of the high-altitude glacial exposure."
      },
      {
        "day": 20,
        "title": "Trek Paiju to Jola",
        "description": "The route retraces the long, rocky trail through the Braldu gorge. The physical toll of the expedition is evident, but the increasing oxygen levels make the trekking substantially easier. The team navigates the boulder-strewn paths beside the rushing river to finally arrive back at the Jola campsite."
      },
      {
        "day": 21,
        "title": "Trek Jola to Askole",
        "description": "The final segment of the wilderness trek crosses the snout of the Biafo Glacier one last time to reach the established roadhead at Askole. Upon arrival, the trekking phase officially concludes. The team bids farewell to the dedicated local porters who sustained the expedition across the ice."
      },
      {
        "day": 22,
        "title": "Drive Askole to Skardu",
        "description": "Boarding the awaiting 4x4 Jeeps in Askole, the expedition endures the rugged, dusty drive back through the deep river gorges. The journey brings you back to Skardu town, where the immense luxury of a hot shower, a proper bed, and a celebratory team dinner awaits after nearly two months in the wilderness."
      },
      {
        "day": 23,
        "title": "Reserve Day in Skardu",
        "description": "This designated reserve day in Skardu serves as a vital contingency buffer. It absorbs any potential delays encountered on the mountain or during the trek out. If the schedule is intact, climbers utilize this day to rest, pack their equipment for commercial air travel, and explore the local bazaars."
      },
      {
        "day": 24,
        "title": "Flight Skardu to Islamabad",
        "description": "The team transfers to Skardu Airport for the highly scenic morning flight over the Himalayas back to Islamabad. Upon arrival in the capital, you are transferred to your hotel. The afternoon is kept free, allowing you to rest and recover from the profound physical toll of the expedition."
      },
      {
        "day": 25,
        "title": "Ministry Debriefing in Islamabad",
        "description": "The team gathers at the Alpine Club headquarters for the formal expedition debriefing required by the government, an essential step in closing out the climbing permits and officially recording the expedition's results. The remainder of the day is free for sightseeing or purchasing authentic Pakistani souvenirs."
      },
      {
        "day": 26,
        "title": "Contingency / Sightseeing in Islamabad",
        "description": "A final, relaxing day in Islamabad provides the perfect opportunity for cultural exploration and physical recovery. In the evening, the entire expedition team gathers for a formal farewell dinner to celebrate the immense effort, resilience, and camaraderie forged on the slopes of the Savage Mountain."
      },
      {
        "day": 27,
        "title": "International Departure",
        "description": "The expedition formally concludes with an early morning transfer to Islamabad International Airport. Our logistics staff will assist with the final clearance of your heavy climbing equipment. You will depart carrying the profound, rare achievement of having lived and climbed on K2, bringing an end to one of the most demanding physical endeavors on Earth."
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
        "description": "Your arrival at Islamabad International Airport marks the beginning of the expedition. Following a transfer to a premium hotel, the day focuses heavily on administrative logistics. The team will attend a detailed briefing at the Ministry of Tourism to formalize the climbing permits for Broad Peak, ensuring all regulatory and environmental requirements are fully understood before departing the capital."
      },
      {
        "day": 2,
        "title": "Islamabad to Skardu Flight",
        "description": "The team boards a domestic flight to Skardu (2,230m), enjoying spectacular aerial views of the Nanga Parbat massif. Skardu serves as the logistical nerve center for all Karakoram expeditions. The afternoon is utilized for vital early acclimatization and thoroughly inspecting technical climbing gear, oxygen systems, and high-altitude down suits."
      },
      {
        "day": 3,
        "title": "Skardu Preparation Day",
        "description": "A mandatory preparation day in Skardu allows the logistics team to finalize base camp food provisions and secure the local Balti high-altitude porters. Climbers are encouraged to undertake a short acclimatization hike around the Skardu basin, forcing the body to adjust to the elevation before the arduous overland journey begins."
      },
      {
        "day": 4,
        "title": "Drive Skardu to Askole (3,000m)",
        "description": "The overland approach into the Karakoram begins aboard specialized 4x4 Jeeps, navigating the unpaved, cliff-hugging roads of the Shigar and Braldu river gorges. This challenging, dusty drive exposes the raw, arid nature of Baltistan, ultimately arriving at Askole (3,000m). This historic farming village is the final permanent settlement before the high glaciers."
      },
      {
        "day": 5,
        "title": "Trek Askole to Jola (3,200m)",
        "description": "The physical trekking phase commences with a demanding traverse across the massive, rocky snout of the Biafo Glacier. The environment is harsh and dry, requiring careful navigation over loose stones and ancient riverbeds. The trail merges back into the deep Braldu valley, leading to the riverside camp of Jola, positioned at the confluence of the Braldu and Dumado rivers."
      },
      {
        "day": 6,
        "title": "Trek Jola to Paiju (3,450m)",
        "description": "The route ascends further into the high gorge, following narrow paths winding through massive river boulders and steep rock faces. The sheer, needle-like granite spires of Paiju Peak dominate the forward view. After hours of navigating the stark, treeless valley, the trail descends into Paiju camp, a lush, tree-lined oasis providing critical shade and fresh water."
      },
      {
        "day": 7,
        "title": "Rest Day at Paiju",
        "description": "Proper acclimatization is an absolute necessity before ascending onto the permanent glacier. This designated rest day at Paiju allows your body to biologically adjust to the thinning atmosphere. Climbers are strongly encouraged to undertake a steep, short vertical hike up the surrounding ridges to force adaptation before returning to camp to hydrate and rest."
      },
      {
        "day": 8,
        "title": "Trek Paiju to Khoburtse (3,930m)",
        "description": "The expedition crosses a major threshold as the trail steps onto the undulating, debris-covered terminal moraine of the immense Baltoro Glacier. The trekking becomes highly technical, demanding constant attention to footing over shifting ice and loose rock. The grueling physical effort is rewarded with the first sweeping views of the sheer granite faces of Great Trango Tower."
      },
      {
        "day": 9,
        "title": "Trek Khoburtse to Urdukas (4,050m)",
        "description": "The trail steadily climbs the lateral moraine, gaining significant elevation to reach the historic campsite of Urdukas. Carved into the high rock terraces by early mountaineers, this camp offers a distinct tactical advantage. From this elevated position, you are treated to phenomenal, unobstructed panoramic views looking directly across the glacier at the Cathedral and Trango groups."
      },
      {
        "day": 10,
        "title": "Trek Urdukas to Goro II (4,380m)",
        "description": "The expedition marches directly through the core of the Baltoro Glacier, transitioning from rocky moraine to exposed white ice. The route requires careful navigation over deep glacial ripples, meltwater streams, and minor crevasses. The visual scale of the Karakoram is overwhelming, with the massive, snow-covered pyramid of Masherbrum (7,821m) dominating the southern skyline."
      },
      {
        "day": 11,
        "title": "Trek Goro II to Concordia (4,600m)",
        "description": "The trek reaches Concordia, the most spectacular glacial junction on the planet. This immense amphitheater, where the Baltoro and Godwin-Austen glaciers collide, places you at the epicenter of the Karakoram's highest peaks. You are completely surrounded by an array of 8,000-meter giants, including your primary objective, Broad Peak, looming massive and imposing to the east."
      },
      {
        "day": 12,
        "title": "Trek Concordia to Broad Peak Base Camp (4,850m)",
        "description": "A relatively short trek up the Godwin-Austen Glacier brings the expedition to Broad Peak Base Camp at 4,900 meters. The day is heavily focused on establishing a robust, comfortable camp infrastructure capable of sustaining the team for a month. Tents are secured, communication arrays are erected, and the climbers mentally transition into the expedition phase."
      },
      {
        "day": 13,
        "title": "Base Camp Setup & Puja Ceremony",
        "description": "The entire team participates in a traditional Puja ceremony to bless the expedition. Following the ceremony, the day is dedicated to rigorous gear checks, organizing high-altitude rations, and reviewing the technical climbing strategy for navigating the steep avalanche-prone sections of the lower mountain."
      },
      {
        "day": 14,
        "title": "Climbing Period (Days 14\u201340)",
        "description": "This 30-day window is entirely dedicated to the complex climbing phase of Broad Peak (8,051m). The team will methodically execute acclimatization rotations on the lower slopes, establish and supply Camps 1, 2, and 3, and carefully monitor weather patterns. The ultimate objective is to position the team perfectly at Camp 3 to launch a rapid, grueling summit push via the long summit ridge."
      },
      {
        "day": 15,
        "title": "Basecamp Packdown & Cleanup",
        "description": "With the climbing phase concluded, the logistical operation of dismantling Base Camp begins, ensuring strict adherence to environmental leave-no-trace protocols. The team packs all equipment and waste for transport off the glacier, resting and recovering from the immense physical toll of the 8,000-meter peak."
      },
      {
        "day": 16,
        "title": "Trek Broad Peak BC to Concordia & Goro I",
        "description": "The descent down the Godwin-Austen and Baltoro glaciers provides a starkly different experience; physical exhaustion is mitigated by the rapidly thickening, oxygen-rich air as the team passes back through Concordia to reach the Goro I campsite."
      },
      {
        "day": 17,
        "title": "Trek Goro I to Urdukas",
        "description": "The descent continues down the core of the Baltoro Glacier. Navigating the familiar white ice and lateral moraines, the team passes beneath the towering granite spires of the Trango group once more. The day concludes at the grassy terraces of Urdukas, marking the transition from the deep glacial ice back toward the lower valleys."
      },
      {
        "day": 18,
        "title": "Trek Urdukas to Paiju",
        "description": "The expedition successfully descends off the permanent glacial ice and moraine, transitioning back onto the traditional, solid dirt trails of the lower valleys. Following the rushing Braldu River downward, the temperature warms significantly. The day concludes at the familiar, green oasis of Paiju, marking the end of the high-altitude glacial exposure."
      },
      {
        "day": 19,
        "title": "Trek Paiju to Askole",
        "description": "The final segment of the wilderness trek follows the established trails back to the roadhead at Askole. Upon arrival, the trekking phase officially concludes. The team celebrates the successful extraction with the local Balti porters before resting for the overland journey."
      },
      {
        "day": 20,
        "title": "Drive Askole to Skardu",
        "description": "Boarding the awaiting 4x4 Jeeps, the rugged, dusty drive back through the deep river gorges brings you back to Skardu town. The arrival marks a return to civilization, offering the immense luxury of a hot shower, a proper bed, and a celebratory team dinner."
      },
      {
        "day": 21,
        "title": "Reserve Day in Skardu",
        "description": "This designated reserve day in Skardu absorbs any delays encountered during the unpredictable climbing phase or the trek out. If the schedule is intact, climbers utilize this day for rest, packing, and exploring the local Skardu bazaars."
      },
      {
        "day": 22,
        "title": "Fly Skardu to Islamabad",
        "description": "The team transfers to Skardu Airport for the highly scenic morning flight over the Himalayas back to Islamabad. Upon arrival in the capital, you are transferred to your hotel. The afternoon is kept free, allowing you to rest and recover from the profound physical toll of the expedition."
      },
      {
        "day": 23,
        "title": "Ministry Debriefing in Islamabad",
        "description": "The team gathers at the Alpine Club headquarters for the formal expedition debriefing required by the government, an essential step in closing out the climbing permits and officially recording the expedition's results. The remainder of the day is free for sightseeing or purchasing authentic Pakistani souvenirs."
      },
      {
        "day": 24,
        "title": "International Departure",
        "description": "The expedition formally concludes with a transfer to Islamabad International Airport. You will depart carrying the profound, rare achievement of an 8,000-meter Karakoram expedition, bringing an end to a journey of immense physical and mental endurance."
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
      "Prime location directly facing the towering southern wall of K2",
      "Complete expedition basecamp infrastructure with professional high-altitude climbing support",
      "Full porter caravan through Baltoro Glacier to Godwin-Austen Glacier"
    ]
  },
  "gasherbrum-i": {
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival in Islamabad",
        "description": "The expedition initiates upon your arrival at Islamabad International Airport, where our team transfers you to a premium hotel. The afternoon is dedicated to critical administrative procedures. You will attend a mandatory briefing at the Ministry of Tourism to secure the climbing permits for Gasherbrum I, commonly known as Hidden Peak, while the logistics team organizes the high-altitude cargo."
      },
      {
        "day": 2,
        "title": "Fly to Skardu",
        "description": "The expedition transfers to the domestic terminal for the spectacular flight to Skardu (2,230m), providing sweeping aerial views of the Nanga Parbat massif. Skardu serves as the central hub for Baltoro expeditions. The afternoon is utilized for early acclimatization and a meticulous inspection of all technical climbing gear and oxygen systems."
      },
      {
        "day": 3,
        "title": "Skardu Organization Day",
        "description": "A full day in Skardu is necessary to finalize the massive logistics of an 8,000-meter peak. While the expedition leader secures the local high-altitude porters and rations, climbers focus on physical readiness. A steep acclimatization hike up to the historic Kharpocho Fort is highly recommended to adapt to the mountain air."
      },
      {
        "day": 4,
        "title": "Drive Skardu to Askole (3,000m)",
        "description": "The overland journey navigates the unpaved, cliff-hugging roads of the Shigar and Braldu river gorges via rugged 4x4 Jeeps. This challenging drive exposes the raw geology of Baltistan, ultimately terminating at Askole (3,000m), the historic farming village and the final permanent outpost before the high glaciers."
      },
      {
        "day": 5,
        "title": "Trek Askole to Jola",
        "description": "The approach trek commences with a demanding traverse across the massive, rocky snout of the Biafo Glacier. The arid environment requires careful footing over loose moraine. The trail eventually merges back into the deep Braldu valley, leading to the riverside camp of Jola at the confluence of the Braldu and Dumado rivers."
      },
      {
        "day": 6,
        "title": "Trek Jola to Paiju",
        "description": "The route ascends further into the high gorge, following narrow paths that wind through massive river boulders and steep rock faces. The sheer granite spires of Paiju Peak dominate the forward view. After hours of navigating the stark valley, the trail descends into Paiju camp, a lush oasis providing critical shade and water."
      },
      {
        "day": 7,
        "title": "Rest Day at Paiju",
        "description": "Proper acclimatization is an absolute necessity before ascending onto the permanent glacier. This designated rest day at Paiju allows your body to biologically adjust to the thinning atmosphere. Climbers are strongly encouraged to undertake a steep, short vertical hike up the surrounding ridges to force adaptation before returning to camp."
      },
      {
        "day": 8,
        "title": "Trek Paiju to Khoburtse",
        "description": "The expedition steps onto the undulating, debris-covered terminal moraine of the immense Baltoro Glacier. The trekking becomes highly technical, demanding constant attention over shifting ice and loose rock. The grueling physical effort is rewarded with dramatic, sweeping views of the sheer granite faces of Great Trango Tower."
      },
      {
        "day": 9,
        "title": "Trek Khoburtse to Urdukas",
        "description": "The trail steadily climbs the lateral moraine, gaining significant elevation to reach the historic campsite of Urdukas. Carved into the high rock terraces, this camp offers a distinct tactical advantage. From this elevated position, you are treated to phenomenal panoramic views looking directly across the glacier at the Cathedral and Trango groups."
      },
      {
        "day": 10,
        "title": "Trek Urdukas to Goro II",
        "description": "The expedition marches directly through the core of the Baltoro Glacier, transitioning from rocky moraine to exposed white ice. The route requires careful navigation over deep glacial ripples and meltwater streams. The massive, snow-covered pyramid of Masherbrum (7,821m) dominates the southern skyline for the entire approach."
      },
      {
        "day": 11,
        "title": "Trek Goro II to Concordia",
        "description": "The trek reaches Concordia, the most spectacular glacial junction on the planet. This immense amphitheater, where the Baltoro and Godwin-Austen glaciers collide, places you at the epicenter of the Karakoram. You are surrounded by an array of 8,000-meter giants, offering your first unobstructed view of the towering K2."
      },
      {
        "day": 12,
        "title": "Trek Concordia to Gasherbrum Base Camp (5,050m)",
        "description": "The route diverges from the main K2 path, heading southeast up the Upper Baltoro Glacier. The trek navigates complex ice falls and deep crevasses to finally reach Gasherbrum Base Camp at 5,050 meters. The sheer scale of the Gasherbrum massif towering overhead dictates the location of the extensive camp infrastructure."
      },
      {
        "day": 13,
        "title": "Base Camp Setup & Puja Blessing",
        "description": "The entire team participates in a traditional Puja ceremony to bless the climbers and the mountain. Following the ceremony, the day is dedicated to organizing high-altitude rations, reviewing the technical climbing strategy, and mentally preparing for the treacherous icefall that guards the lower slopes of Gasherbrum I."
      },
      {
        "day": 14,
        "title": "Climbing Period (Days 14\u201340)",
        "description": "This extended phase constitutes the core climbing period on Gasherbrum I (8,080m). Over the next 30 days, the expedition meticulously executes multiple acclimatization rotations. Climbers will establish Camps 1, 2, and 3, navigating the highly technical icefall and steep couloirs. The ultimate goal is to position the team perfectly for a safe summit push when the weather window opens."
      },
      {
        "day": 15,
        "title": "Basecamp Packdown & Cleanup",
        "description": "With the climbing phase concluded, the massive logistical operation of breaking down Base Camp begins. The team ensures strict adherence to environmental protocols, packing all waste and equipment. Climbers rest and recover, mentally processing the immense physical exertion before beginning the long trek back."
      },
      {
        "day": 16,
        "title": "Trek Gasherbrum BC to Concordia & Goro I",
        "description": "The descent down the Upper Baltoro provides a starkly different physical experience. The extreme exhaustion is mitigated by the rapidly thickening, oxygen-rich air as the team passes back through Concordia to reach Goro I, leaving the shadows of the 8,000-meter peaks behind."
      },
      {
        "day": 17,
        "title": "Trek Goro I to Urdukas",
        "description": "The descent continues down the core of the Baltoro Glacier. Navigating the familiar white ice and lateral moraines, the team passes beneath the towering granite spires of the Trango group once more. The day concludes at the grassy terraces of Urdukas."
      },
      {
        "day": 18,
        "title": "Trek Urdukas to Paiju",
        "description": "The expedition successfully descends off the permanent glacial ice, transitioning back onto the traditional dirt trails of the lower valleys. Following the rushing Braldu River downward, the temperature warms significantly. The day concludes at the familiar, green oasis of Paiju."
      },
      {
        "day": 19,
        "title": "Trek Paiju to Askole",
        "description": "The route retraces the long, rocky trail through the Braldu gorge. The physical toll of the expedition is evident, but the increasing oxygen levels make the trekking substantially easier. The team navigates the boulder-strewn paths to finally arrive back at Askole."
      },
      {
        "day": 20,
        "title": "Drive Askole to Skardu",
        "description": "Boarding the awaiting 4x4 Jeeps in Askole, the expedition endures the rugged, dusty drive back through the deep river gorges. The journey brings you back to Skardu town, where the immense luxury of a hot shower and a proper bed awaits."
      },
      {
        "day": 21,
        "title": "Reserve Day in Skardu",
        "description": "This designated reserve day in Skardu serves as a vital contingency buffer. It absorbs any delays encountered on the mountain. If the schedule is intact, climbers utilize this day to rest, pack their equipment, and explore the local bazaars."
      },
      {
        "day": 22,
        "title": "Fly Skardu to Islamabad",
        "description": "The team transfers to Skardu Airport for the highly scenic morning flight over the Himalayas back to Islamabad. Upon arrival in the capital, you are transferred to your hotel. The afternoon is kept free, allowing you to rest and recover."
      },
      {
        "day": 23,
        "title": "Ministry Debriefing in Islamabad",
        "description": "The team gathers at the Alpine Club headquarters for the formal expedition debriefing required by the government. This is an essential step in closing out the climbing permits and officially recording the expedition's results. The evening features a formal farewell dinner."
      },
      {
        "day": 24,
        "title": "International Departure",
        "description": "The expedition formally concludes with a transfer to Islamabad International Airport. You will depart carrying the profound, rare achievement of an 8,000-meter Karakoram expedition, bringing an end to one of the most demanding physical endeavors on Earth."
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
        "description": "Your arrival at Islamabad International Airport initiates the expedition. After transferring to your hotel, the afternoon is dedicated to critical administrative logistics. The team will attend a mandatory briefing at the Ministry of Tourism to secure the climbing permits for Gasherbrum II, ensuring all regulatory requirements are met before departing for the mountains."
      },
      {
        "day": 2,
        "title": "Fly to Skardu",
        "description": "The expedition transfers to the domestic terminal for the spectacular flight to Skardu (2,230m), providing sweeping aerial views of the Nanga Parbat massif. Skardu serves as the central hub for Baltoro expeditions. The afternoon is utilized for early acclimatization and a meticulous inspection of all technical climbing gear and oxygen systems."
      },
      {
        "day": 3,
        "title": "Skardu Preparation Day",
        "description": "A mandatory preparation day in Skardu allows the logistics team to finalize base camp food provisions and secure the local Balti high-altitude porters. Climbers are encouraged to undertake a short acclimatization hike around the Skardu basin, forcing the body to adjust to the elevation before the arduous overland journey begins."
      },
      {
        "day": 4,
        "title": "Drive Skardu to Askole",
        "description": "The overland approach navigates the unpaved, cliff-hugging roads of the Shigar and Braldu river gorges via rugged 4x4 Jeeps. This challenging drive exposes the raw geology of Baltistan, ultimately terminating at Askole (3,000m), the historic farming village and the final permanent outpost before the high glaciers."
      },
      {
        "day": 5,
        "title": "Trek Askole to Jola",
        "description": "The approach trek commences with a demanding traverse across the massive, rocky snout of the Biafo Glacier. The arid environment requires careful footing over loose moraine. The trail eventually merges back into the deep Braldu valley, leading to the riverside camp of Jola at the confluence of the Braldu and Dumado rivers."
      },
      {
        "day": 6,
        "title": "Trek Jola to Paiju",
        "description": "The route ascends further into the high gorge, following narrow paths that wind through massive river boulders and steep rock faces. The sheer granite spires of Paiju Peak dominate the forward view. After hours of navigating the stark valley, the trail descends into Paiju camp, a lush oasis providing critical shade and water."
      },
      {
        "day": 7,
        "title": "Rest Day at Paiju",
        "description": "Proper acclimatization is an absolute necessity before ascending onto the permanent glacier. This designated rest day at Paiju allows your body to biologically adjust to the thinning atmosphere. Climbers are strongly encouraged to undertake a steep, short vertical hike up the surrounding ridges to force adaptation before returning to camp."
      },
      {
        "day": 8,
        "title": "Trek Paiju to Khoburtse",
        "description": "The expedition steps onto the undulating, debris-covered terminal moraine of the immense Baltoro Glacier. The trekking becomes highly technical, demanding constant attention over shifting ice and loose rock. The grueling physical effort is rewarded with dramatic, sweeping views of the sheer granite faces of Great Trango Tower."
      },
      {
        "day": 9,
        "title": "Trek Khoburtse to Urdukas",
        "description": "The trail steadily climbs the lateral moraine, gaining significant elevation to reach the historic campsite of Urdukas. Carved into the high rock terraces, this camp offers a distinct tactical advantage. From this elevated position, you are treated to phenomenal panoramic views looking directly across the glacier at the Cathedral and Trango groups."
      },
      {
        "day": 10,
        "title": "Trek Urdukas to Goro II",
        "description": "The expedition marches directly through the core of the Baltoro Glacier, transitioning from rocky moraine to exposed white ice. The route requires careful navigation over deep glacial ripples and meltwater streams. The massive, snow-covered pyramid of Masherbrum (7,821m) dominates the southern skyline for the entire approach."
      },
      {
        "day": 11,
        "title": "Trek Goro II to Concordia",
        "description": "The trek reaches Concordia, the most spectacular glacial junction on the planet. This immense amphitheater, where the Baltoro and Godwin-Austen glaciers collide, places you at the epicenter of the Karakoram. You are surrounded by an array of 8,000-meter giants, offering your first unobstructed view of the towering K2."
      },
      {
        "day": 12,
        "title": "Trek Concordia to Gasherbrum Base Camp (5,050m)",
        "description": "The route diverges from the main K2 path, heading southeast up the Upper Baltoro Glacier. The trek navigates complex ice falls and deep crevasses to finally reach Gasherbrum Base Camp at 5,050 meters. This location serves as the launchpad for both Gasherbrum I and Gasherbrum II expeditions."
      },
      {
        "day": 13,
        "title": "Basecamp Setup & Puja Ceremony",
        "description": "The entire team participates in a traditional Puja ceremony to bless the climbers. Following the ceremony, the day is dedicated to organizing high-altitude rations, reviewing the technical climbing strategy, and mentally preparing for the treacherous icefall that guards the lower slopes of the mountain."
      },
      {
        "day": 14,
        "title": "Climbing Period (Days 14\u201337)",
        "description": "This extended phase constitutes the core climbing period on Gasherbrum II (8,035m). Over the next 25+ days, the expedition meticulously executes acclimatization rotations. Climbers will establish Camps 1, 2, and 3, navigating the highly technical icefall and the steep Banana Ridge. The ultimate goal is to position the team perfectly for a safe summit push."
      },
      {
        "day": 15,
        "title": "Basecamp Cleanup",
        "description": "With the climbing phase concluded, the massive logistical operation of breaking down Base Camp begins. The team ensures strict adherence to environmental protocols, packing all waste and equipment. Climbers rest and recover, mentally processing the immense physical exertion before beginning the long trek back."
      },
      {
        "day": 16,
        "title": "Trek Gasherbrum BC to Concordia & Goro I",
        "description": "The descent down the Upper Baltoro provides a starkly different physical experience. The extreme exhaustion is mitigated by the rapidly thickening, oxygen-rich air as the team passes back through Concordia to reach Goro I, leaving the shadows of the 8,000-meter peaks behind."
      },
      {
        "day": 17,
        "title": "Trek Goro I to Urdukas",
        "description": "The descent continues down the core of the Baltoro Glacier. Navigating the familiar white ice and lateral moraines, the team passes beneath the towering granite spires of the Trango group once more. The day concludes at the grassy terraces of Urdukas."
      },
      {
        "day": 18,
        "title": "Trek Urdukas to Paiju",
        "description": "The expedition successfully descends off the permanent glacial ice, transitioning back onto the traditional dirt trails of the lower valleys. Following the rushing Braldu River downward, the temperature warms significantly. The day concludes at the familiar, green oasis of Paiju."
      },
      {
        "day": 19,
        "title": "Trek Paiju to Askole",
        "description": "The route retraces the long, rocky trail through the Braldu gorge. The physical toll of the expedition is evident, but the increasing oxygen levels make the trekking substantially easier. The team navigates the boulder-strewn paths to finally arrive back at Askole."
      },
      {
        "day": 20,
        "title": "Drive Askole to Skardu",
        "description": "Boarding the awaiting 4x4 Jeeps in Askole, the expedition endures the rugged, dusty drive back through the deep river gorges. The journey brings you back to Skardu town, where the immense luxury of a hot shower and a proper bed awaits."
      },
      {
        "day": 21,
        "title": "Fly Skardu to Islamabad",
        "description": "The team transfers to Skardu Airport for the highly scenic morning flight over the Himalayas back to Islamabad. Upon arrival in the capital, you are transferred to your hotel. The afternoon is kept free, allowing you to rest and recover."
      },
      {
        "day": 22,
        "title": "International Departure",
        "description": "The expedition formally concludes with a transfer to Islamabad International Airport. You will depart carrying the profound, rare achievement of an 8,000-meter Karakoram expedition, bringing an end to one of the most demanding physical endeavors on Earth."
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
        "description": "The expedition initiates upon your arrival in Islamabad, where you are transferred to a premium hotel. The afternoon is dedicated to critical administrative logistics. The team will attend a mandatory briefing at the Ministry of Tourism to secure the climbing permits for Spantik (Golden Peak), ensuring all regulatory requirements are met before departing."
      },
      {
        "day": 2,
        "title": "Fly Islamabad to Skardu",
        "description": "The team transfers to the domestic terminal for the spectacular flight to Skardu (2,230m). Skardu serves as the central logistical hub for the Karakoram. The afternoon is utilized for early acclimatization, finalizing expedition rations, and a meticulous inspection of all technical alpine climbing gear."
      },
      {
        "day": 3,
        "title": "Drive Skardu to Arandu Village (2,770m)",
        "description": "The overland journey departs Skardu aboard rugged 4x4 Jeeps, driving deep into the remote Basha Valley. The route navigates unpaved, steep gorge roads before arriving at the traditional village of Arandu (2,770m), the final permanent settlement and the official roadhead for the Chogo Lungma Glacier approach."
      },
      {
        "day": 4,
        "title": "Trek Arandu to Chogo Brangsa (3,300m)",
        "description": "The physical trekking phase commences with an ascent along the lateral moraine of the massive Chogo Lungma Glacier. The environment is harsh and arid, requiring careful navigation over loose rock. The trail leads to the summer pasture and campsite of Chogo Brangsa, offering the first elevated views of the glacial valley."
      },
      {
        "day": 5,
        "title": "Trek Chogo Brangsa to Bolocho (3,800m)",
        "description": "The trek continues alongside the sprawling Chogo Lungma Glacier. The route ascends gradually, passing through high-altitude summer grazing areas utilized by local shepherds. The physical effort culminates upon arrival at the Bolocho campsite, situated in a untouched alpine environment directly adjacent to the glacial ice."
      },
      {
        "day": 6,
        "title": "Trek Bolocho to Spantik Base Camp (4,300m)",
        "description": "The approach trek concludes with a demanding push up the glacier to establish Spantik Base Camp at 4,300 meters. The location provides staggering, close-range views of Spantik's massive, sheer Golden Pillar. The remainder of the day is spent establishing the extensive camp infrastructure required for the climb."
      },
      {
        "day": 7,
        "title": "Basecamp Setup & Acclimatization",
        "description": "A critical rest day at Base Camp allows the body to biologically adapt to the 4,300-meter elevation. The team utilizes this time to organize high-altitude rations, review the technical climbing strategy for the southeast ridge, and prepare the fixed ropes for the upcoming rotations."
      },
      {
        "day": 8,
        "title": "Climbing Period (Days 8\u201322)",
        "description": "This core phase is entirely dedicated to the complex climbing operations on Spantik (7,027m). Over the next 15 days, the team will methodically execute acclimatization rotations, establishing Camps 1, 2, and 3 along the long, sweeping southeast ridge. The ultimate objective is to position the team perfectly for a safe and rapid summit push when the weather allows."
      },
      {
        "day": 9,
        "title": "Basecamp Packdown & Cleanup",
        "description": "With the climbing phase concluded, the logistical operation of dismantling Base Camp begins. The team ensures strict adherence to environmental leave-no-trace protocols, packing all waste and equipment for transport. Climbers rest and recover from the immense physical exertion of the 7,000-meter peak."
      },
      {
        "day": 10,
        "title": "Trek Spantik BC to Chogo Brangsa",
        "description": "The descent retraces the route alongside the Chogo Lungma Glacier. Physical exhaustion is mitigated by the rapidly thickening, oxygen-rich air as the team loses altitude. The day concludes with a return to the familiar, lower-elevation campsite at Chogo Brangsa."
      },
      {
        "day": 11,
        "title": "Trek Chogo Brangsa to Arandu & Drive to Skardu",
        "description": "The final trekking segment navigates the lateral moraine back to the roadhead at Arandu village. Upon arrival, the team boards the awaiting 4x4 Jeeps for the rugged, highly scenic return drive through the Basha Valley, concluding the overland journey back in Skardu."
      },
      {
        "day": 12,
        "title": "Reserve Day in Skardu",
        "description": "This designated reserve day in Skardu serves as a vital contingency buffer, absorbing any delays encountered on the mountain. If the schedule is intact, climbers utilize this day to rest, pack their equipment, and explore the local Balti bazaars."
      },
      {
        "day": 13,
        "title": "Fly Skardu to Islamabad",
        "description": "The team transfers to Skardu Airport for the highly scenic morning flight over the Himalayas back to Islamabad. Upon arrival in the capital, you are transferred to your hotel. The evening features a formal farewell dinner to celebrate the expedition."
      },
      {
        "day": 14,
        "title": "International Departure",
        "description": "The expedition formally concludes with a transfer to Islamabad International Airport. You will depart carrying the rare achievement of a major Karakoram summit, bringing an end to a journey of immense physical endurance."
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
      "Scenic trek through Arandu village and untouched Karakoram alpine pastures"
    ]
  },
  "nanga-parbat-exp": {
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival in Islamabad",
        "description": "The expedition begins upon your arrival at Islamabad International Airport. Following a transfer to your hotel, the afternoon focuses heavily on administrative logistics. The team will attend a detailed briefing at the Ministry of Tourism to formalize the climbing permits for Nanga Parbat, ensuring all regulatory requirements are fully understood before departing."
      },
      {
        "day": 2,
        "title": "Drive Islamabad to Chilas",
        "description": "The overland approach into the mountains begins via the legendary Karakoram Highway. The route traces the lush foothills of the Hazara region before entering the deep, arid gorges of the Indus River. The transition in landscape is severe and dramatic, culminating in a late afternoon arrival at the riverside town of Chilas."
      },
      {
        "day": 3,
        "title": "Drive Chilas to Bunar Das & Halale (Diamir)",
        "description": "Leaving the main highway, the expedition boards specialized 4x4 Jeeps for the treacherous, steep ascent into the Diamir Valley. The unpaved road clings to sheer cliff faces, eventually terminating at the remote roadhead village. This rugged drive exposes the raw, vertical geography that defines the Nanga Parbat massif."
      },
      {
        "day": 4,
        "title": "Trek Halale to Ser (3,200m)",
        "description": "The physical trekking phase commences with a sustained, steep ascent through the dense alpine pine forests of the Diamir Valley. The strenuous effort required to gain altitude is rewarded as the trail breaks the treeline, offering the first terrifyingly immense views of the Diamir Face. The day concludes at a high summer pasture."
      },
      {
        "day": 5,
        "title": "Trek Ser to Diamir Base Camp (4,200m)",
        "description": "The final approach trek pushes upward through rugged moraine to establish Nanga Parbat Base Camp at 4,200 meters. Standing directly beneath the sheer, 4,000-meter vertical ice of the Diamir Face provides an unparalleled sense of scale. The day is spent securing the camp infrastructure and reviewing the treacherous climbing route."
      },
      {
        "day": 6,
        "title": "Basecamp Setup & Puja Blessing",
        "description": "A critical rest day at Base Camp allows the body to biologically adapt to the elevation. The team utilizes this time to organize high-altitude rations, review avalanche safety protocols, and meticulously inspect the technical climbing gear required for the notoriously steep ice walls above."
      },
      {
        "day": 7,
        "title": "Climbing Rotations (Days 7\u201342)",
        "description": "This 40-day window is entirely dedicated to the extreme climbing phase of Nanga Parbat (8,126m), the Killer Mountain. The team will methodically execute acclimatization rotations, establishing camps on the steep, avalanche-prone Diamir Face. The ultimate objective is to secure the route and position the team perfectly for a rapid, grueling summit push."
      },
      {
        "day": 8,
        "title": "Basecamp Packdown & Cleanup",
        "description": "With the climbing phase concluded, the logistical operation of dismantling Base Camp begins. The team ensures strict adherence to environmental leave-no-trace protocols, packing all waste and equipment. Climbers rest and recover, mentally processing the immense physical exertion required by one of the world's most dangerous mountains."
      },
      {
        "day": 9,
        "title": "Trek Base Camp to Ser & Halale",
        "description": "The descent begins, retracing the route downward through the rugged lateral moraine and back into the dense pine forests of the lower Diamir Valley. Physical exhaustion is mitigated by the rapidly thickening, oxygen-rich air. The day concludes at a lower, warmer campsite."
      },
      {
        "day": 10,
        "title": "Drive Halale to Chilas",
        "description": "The final trekking segment concludes upon arrival at the established roadhead village. The team boards the awaiting 4x4 Jeeps for the incredibly steep, rugged descent back down the narrow gorge, returning to the Karakoram Highway and concluding the day in Chilas."
      },
      {
        "day": 11,
        "title": "Drive Chilas to Islamabad",
        "description": "The return journey traces the path of the Indus River southward along the Karakoram Highway. The long day of overland travel transitions out of the deep, arid mountain valleys and back into the greener, lower-elevation foothills, arriving at a comfortable hotel in Naran or Besham."
      },
      {
        "day": 12,
        "title": "Reserve Day in Islamabad",
        "description": "The final driving segment brings the expedition out of the mountains and back into the bustling capital city of Islamabad. Upon arrival, the team is transferred to a premium hotel, offering the immense luxury of a hot shower and a proper bed after nearly two months on the mountain."
      },
      {
        "day": 13,
        "title": "Ministry Debriefing in Islamabad",
        "description": "The team gathers at the Alpine Club headquarters for the formal expedition debriefing required by the government, an essential step in closing out the climbing permits and officially recording the expedition's results. The evening features a formal farewell dinner to celebrate the immense effort."
      },
      {
        "day": 14,
        "title": "Sightseeing in Islamabad",
        "description": "This designated contingency day absorbs any logistical or weather-related delays encountered during the unpredictable climbing phase or the overland travel. If the schedule is intact, climbers utilize this day for cultural sightseeing in Islamabad or purchasing authentic souvenirs."
      },
      {
        "day": 15,
        "title": "International Departure",
        "description": "The expedition formally concludes with a transfer to Islamabad International Airport. You will depart carrying the profound, rare achievement of an 8,000-meter expedition on the Killer Mountain, bringing an end to one of the most demanding physical endeavors on Earth."
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
        "description": "The tour formally commences upon your arrival at Islamabad International Airport. Our ground team ensures a seamless transfer to your premium hotel in the capital. The remainder of the day is structured to allow you to recover from international travel. In the evening, the group gathers for a welcome dinner, providing an opportunity to meet your guides and receive a comprehensive briefing on the geographical and cultural nuances of the Baltistan region you will soon explore."
      },
      {
        "day": 2,
        "title": "Flight to Skardu & City Orientation",
        "description": "The landscape shifts dramatically as you board a high-altitude flight winding directly through the Himalayas, passing the towering flanks of Nanga Parbat to reach Skardu (2,230m). This remote town serves as the logistical and cultural heart of Baltistan. Following your hotel transfer, the afternoon is kept deliberately light. A guided walk through the local mountaineering bazaars provides an initial cultural immersion while serving the crucial biological purpose of early altitude acclimatization."
      },
      {
        "day": 3,
        "title": "Shangrila & Upper Kachura Lake",
        "description": "The day focuses on the historical dominance of the Skardu basin, beginning with a steep but rewarding hike up to the 16th-century Kharpocho Fort. Perched precariously on a rock spur overlooking the Indus River, the fort provides an unparalleled, strategic vantage point with dramatic panoramic views of the entire valley. The afternoon is dedicated to exploring the nearby organic villages, observing traditional agricultural practices that have sustained the region for centuries."
      },
      {
        "day": 4,
        "title": "Katpana Cold Desert & Sunset",
        "description": "Departing Skardu town, the journey takes you westward toward the impressive Upper Kachura Lake and the famous Shangrila Resort area. The landscape transitions from arid rock to lush, wild apricot orchards surrounding the emerald waters. You will enjoy a serene boat ride on the lake, flanked by towering, snow-capped Karakoram peaks. This relaxing excursion highlights the stark, beautiful contrast of water and high-altitude desert that defines the region."
      },
      {
        "day": 5,
        "title": "Kharpocho Fort & Organic Village Nansoq",
        "description": "The itinerary shifts into the high-altitude Shigar Valley, historically known for its lush orchards and distinct Tibetan-influenced architecture. The centerpiece of the day is a comprehensive architectural tour of the meticulously restored 400-year-old Serena Shigar Fort (Fong-Khar). Once the palace of the local Raja, the structure is a masterpiece of traditional Balti woodwork and stone masonry. The afternoon is spent exploring the adjacent Shigar village and its ancient, intricately carved mosques."
      },
      {
        "day": 6,
        "title": "Day Excursion to Shigar Valley & Sarfaranga",
        "description": "The expedition ascends sharply via 4x4 Jeeps to the expansive Deosai National Park, renowned as the world's second-highest alpine plateau at an average elevation of 4,114 meters. The geography transitions instantly from steep, rocky gorges to an endless, rolling expanse of treeless wilderness covered in alpine wildflowers. The day is dedicated to a rugged wildlife safari, focusing on tracking the endangered Himalayan Brown Bear across this unique, high-altitude sanctuary."
      },
      {
        "day": 7,
        "title": "Excursion to Khaplu Palace & Chaqchan Mosque",
        "description": "The journey follows the winding course of the Shyok River eastward into the remote Khaplu Valley. This region is culturally distinct, featuring a blend of Tibetan and Kashmiri architectural styles. You will visit the grand 19th-century Khaplu Palace and deeply explore the ancient, incredibly preserved Chaqchan Mosque, which dates back over 700 years. The historical depth of Khaplu offers a profound understanding of the ancient Silk Route's influence on the region."
      },
      {
        "day": 8,
        "title": "Day Excursion to Deosai Plains (Sheosar Lake)",
        "description": "The focus returns to the dramatic geography of Baltistan with a thrilling Jeep ride into the Sarfaranga Cold Desert. Positioned at a high elevation, it is one of the most unique desert environments on the planet. You will experience the surreal visual contrast of rolling, wind-sculpted sand dunes set directly against the backdrop of massive, snow-capped Karakoram mountains. The late afternoon light provides extraordinary photographic opportunities across the dunes."
      },
      {
        "day": 9,
        "title": "Manthal Buddha Rock & Sadpara Lake",
        "description": "The final full day in Skardu is designed for relaxation and unhurried cultural engagement. The itinerary allows ample time for exploring the central bazaars, offering opportunities to purchase local gemstones, organic dry fruits, and traditional Balti handicrafts. In the evening, the tour concludes with a grand, traditional farewell dinner featuring local Balti cuisine, accompanied by live cultural music and storytelling from your local guides."
      },
      {
        "day": 10,
        "title": "Flight to Islamabad & Departure",
        "description": "The cultural expedition formally concludes with a morning transfer to Skardu Airport. You will board the highly scenic return flight, crossing back over the Himalayan divide to Islamabad. Upon arrival in the capital, you are transferred directly to the international terminal for your onward journey, bringing your comprehensive exploration of the Baltistan valleys to a close."
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
        "description": "Your cultural immersion begins upon arrival in Islamabad. Following a seamless transfer to your hotel, the afternoon is dedicated to a thorough orientation with your lead guide. You will review the logistics of traversing the Karakoram Highway and the specific cultural protocols of the Hunza region. The evening concludes with a welcome dinner featuring traditional Pakistani cuisine, providing a comfortable introduction to the country."
      },
      {
        "day": 2,
        "title": "Drive Gilgit to Karimabad (Hunza)",
        "description": "The expedition takes flight to the regional hub of Gilgit, dramatically crossing the mountain ranges. Upon landing, the overland journey begins along the historic, paved Karakoram Highway. The route traces the deep gorges of the Hunza River, revealing the sheer scale of the surrounding peaks. By late afternoon, you arrive in Karimabad, the ancient capital of Hunza, checking into a hotel offering sweeping views of the valley and Rakaposhi."
      },
      {
        "day": 3,
        "title": "Baltit Fort, Altit Fort & Duikar Sunset",
        "description": "This day is entirely dedicated to uncovering the rich architectural and royal history of Hunza. You will undertake guided, detailed explorations of the 700-year-old Baltit Fort and the even older Altit Fort, both masterclasses in indigenous earthquake-resistant architecture. The afternoon allows for independent wandering through the steep, cobblestone streets of Karimabad, interacting with local artisans and sampling the region's famous organic walnut cakes."
      },
      {
        "day": 4,
        "title": "Attabad Lake, Passu Cones & Hussaini Bridge",
        "description": "The journey continues further north along the Karakoram Highway, entering the Upper Hunza (Gojal) region. The landscape becomes noticeably more dramatic, punctuated by the striking, jagged spires of the Passu Cones. A major highlight is a boat ride across the striking, vivid turquoise waters of Attabad Lake, a geographical marvel formed by a massive landslide. Later, you will cautiously cross the thrilling, historic Hussaini Suspension Bridge."
      },
      {
        "day": 5,
        "title": "Upper Hunza (Gulmit & Borith Lake)",
        "description": "The expedition drives to the extreme northern edge of Pakistan to reach the untouched Khunjerab Pass. At 4,693 meters, it stands as the highest paved international border crossing in the world, separating Pakistan and China. The stark, high-altitude landscape is home to unique wildlife, including marmots and ibex. After absorbing the immense scale of the pass, the team descends back down the valley to the comfort of Karimabad."
      },
      {
        "day": 6,
        "title": "Drive Hunza to Gilgit & City Tour",
        "description": "The day begins early with a short drive up to the famous Eagle's Nest viewpoint in Duikar. This elevated position provides a spectacular, 360-degree sunrise panorama encompassing Rakaposhi, Ladyfinger Peak, and the sprawling Hunza Valley below. After breakfast and final cultural exchanges in the local villages, the overland journey southward commences, tracing the Hunza River back to a comfortable hotel in Gilgit town."
      },
      {
        "day": 7,
        "title": "Fly to Islamabad & Departure",
        "description": "The cultural exploration formally concludes as you board the morning flight from Gilgit back to Islamabad. The aerial perspective offers a final, sweeping view of the Karakoram and Himalayan ranges you have just explored. Upon arrival in the capital, our team will transfer you directly to the international airport for your departure, ensuring a smooth transition homeward."
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
        "description": "The high-altitude safari begins with your arrival at Skardu Airport, the primary gateway to Baltistan. Following your hotel transfer, the remainder of the day is strictly dedicated to essential acclimatization, a vital requirement before ascending to the Deosai plateau. The afternoon is spent leisurely exploring the bustling local bazaars, allowing your body to adjust to the 2,230-meter elevation while absorbing the distinct Balti culture."
      },
      {
        "day": 2,
        "title": "Skardu to Deosai Plateau (Bara Pani Camp)",
        "description": "Leaving the relative comfort of Skardu, the expedition boards specialized, rugged 4x4 Jeeps. The route involves a steep, winding, and highly dramatic ascent out of the Indus valley. The rocky gorge eventually breaks open to reveal the Deosai National Park, a sprawling, treeless plateau at an average elevation of 4,114 meters. The team establishes a fully equipped wilderness camp amidst the endless expanse of alpine wildflowers."
      },
      {
        "day": 3,
        "title": "Bara Pani to Sheosar Lake Safari",
        "description": "This day is entirely dedicated to traversing and observing the vast, silent plains of the 'Land of Giants'. Guided by local wildlife experts, the expedition focuses on tracking the park's most famous inhabitant, the endangered Himalayan Brown Bear, alongside golden marmots and Tibetan wolves. The sheer scale and profound isolation of this high-altitude ecosystem provide an unparalleled, immersive wilderness experience."
      },
      {
        "day": 4,
        "title": "Deosai Wilderness Exploration & Return to Skardu",
        "description": "The Jeep safari continues across the rolling terrain of the plateau, navigating toward the iconic Sheosar Lake. Set against the stark, treeless landscape, the heart-shaped lake features crystal-clear, deep blue waters. On clear days, the lake's surface perfectly reflects the towering, snow-capped massif of Nanga Parbat on the distant horizon. After ample time for photography, the expedition begins the steep, rugged descent back into the Skardu basin."
      },
      {
        "day": 5,
        "title": "Departure from Skardu",
        "description": "The high-altitude adventure concludes with a morning transfer to Skardu Airport. The spectacular return flight to Islamabad provides a final aerial perspective of the massive mountain ranges you have just explored. Upon landing in the capital, our logistics team will ensure a seamless transfer to your onward international flight, bringing the Deosai safari to a close."
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
        "description": "Upon arriving in the regional hub of Gilgit via flight or road, the expedition transitions immediately to rugged 4x4 Jeeps. The journey leaves the main highway and enters the narrow, steep gorge leading up to the Naltar Valley. The landscape transforms rapidly from dry, rocky mountainsides to incredibly dense, untouched alpine pine forests, setting the stage for your exploration of this lush, high-altitude sanctuary."
      },
      {
        "day": 2,
        "title": "Drive Gilgit to Nomal & 4x4 Jeep to Naltar Valley (2,900m)",
        "description": "The core of the Naltar experience involves a guided Jeep safari and targeted short hikes to the valley's three famous alpine lakes: Satrangi, Pari, and Bodlok. These glacial lakes are renowned for their surreal, vivid hues ranging from emerald green to deep sapphire blue, caused by suspended glacial minerals. The day is spent exploring the shores and photographing the striking contrast of the colorful water against the dark pine forests."
      },
      {
        "day": 3,
        "title": "Excursion to Naltar Lakes (Satrangi, Blue & Pari Lakes)",
        "description": "The morning is dedicated to exploring the deeper alpine forests of Naltar, offering opportunities to spot local wildlife or visit the region's dedicated snow leopard sanctuary, which focuses on conservation efforts. In the afternoon, the expedition boards the Jeeps for the highly scenic, bumpy descent back down the rugged gorge, returning to the relative warmth and comfort of your hotel in Gilgit."
      },
      {
        "day": 4,
        "title": "Naltar to Gilgit & Departure",
        "description": "The valley exploration formally concludes with a morning transfer to Gilgit Airport for the scenic flight back over the mountain ranges to Islamabad. Alternatively, depending on your broader travel plans, this day marks the beginning of the overland journey southward along the Karakoram Highway toward the capital."
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
        "description": "The journey begins in Gilgit, initiating a highly scenic drive westward along the dramatic course of the Ghizer River. The route navigates through steep, narrow, and arid gorges before the landscape unexpectedly opens up. You arrive in the Phander Valley, renowned across the region for its expansive, unusually lush greenery, terraced fields, and the incredibly serene atmosphere of the Hindu Kush foothills."
      },
      {
        "day": 2,
        "title": "Khalti Lake to Phander Valley (2,800m)",
        "description": "This day is dedicated entirely to the tranquil exploration of Phander Lake and its surrounding environment. Famous for its deep, still, emerald-blue waters, the lake is a premier location for trout fishing and photography. The itinerary includes guided walks through the untouched, remarkably quiet local villages, allowing for genuine interaction with the welcoming communities that maintain this beautiful agricultural landscape."
      },
      {
        "day": 3,
        "title": "Phander Lake Exploration & Trout Fishing",
        "description": "The expedition takes a scenic drive further westward up the valley, progressing toward the remote Shandur Pass. This excursion explores the higher summer pastures used by local shepherds, offering a deep dive into the untouched, quiet beauty of the upper Hindu Kush ranges. The stark, expansive landscape provides a stark contrast to the lush greenery of the lower Phander Valley."
      },
      {
        "day": 4,
        "title": "Excursion to Shandur Pass (3,700m)",
        "description": "Following a peaceful morning walk along the willow-lined banks of the Ghizer River, the return journey commences. The drive retraces the route through the dramatic river gorges, offering a different lighting perspective on the rugged terrain. The day concludes with a return to the bustling hub of Gilgit, checking into your hotel for a final evening in the north."
      },
      {
        "day": 5,
        "title": "Drive Phander to Gilgit & Departure",
        "description": "The serene escape into the Ghizer district concludes with a morning transfer to Gilgit Airport. The flight back to Islamabad offers striking aerial views of the ranges you have just explored. Upon arrival in the capital, our team will facilitate your transfer for your onward journey."
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
      "Marvel at the impressive turquoise waters of Phander Lake and Ghizer River",
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
        "description": "The journey begins with your arrival in Skardu, the central hub of Baltistan. Following a seamless transfer to your hotel, the afternoon is dedicated to essential logistical preparations and essential acclimatization. You will have time to explore the local mountaineering bazaars, allowing your body to adjust to the 2,230-meter altitude before venturing into the higher, remote valleys."
      },
      {
        "day": 2,
        "title": "Bilamik Pine Meadows & Glacier Stream Hike",
        "description": "The expedition departs Skardu aboard rugged 4x4 Jeeps, driving deep into the secluded Bilamik Valley. As the vehicles ascend the steep, winding mountain roads, the stark, rocky geology of the lower Indus gorge gives way to an unexpectedly lush landscape. You will arrive in a hidden world of vibrant green alpine meadows and meticulously terraced agricultural fields."
      },
      {
        "day": 3,
        "title": "Cultural Walks & Traditional Village Immersion",
        "description": "A full day is entirely devoted to exploring the untouched, hidden pastures of the Bilamik region. The itinerary includes guided hikes along ancient, established shepherd trails that offer striking views of the surrounding peaks. The day also provides opportunities to interact with the local farming families, gaining insight into their traditional, self-sustaining lifestyle in this beautifully isolated environment."
      },
      {
        "day": 4,
        "title": "Descent to Rondu & Return to Skardu",
        "description": "After enjoying a traditional Balti breakfast prepared with local organic ingredients, the expedition begins the return journey. The 4x4 Jeeps navigate the rugged, highly scenic descent out of the high pastures, winding back down through the dramatic gorges. The tour concludes upon your return to the bustling center of Skardu town."
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
      "Hike through untouched pine forests and crystalline glacial streams",
      "Experience traditional Balti woodcraft architecture and rural mountain life",
      "Camp under untouched, unpolluted night skies in open alpine meadows"
    ]
  },
  "tormik-valley": {
    "itinerary": [
      {
        "day": 1,
        "title": "Drive Skardu to Tormik Valley (2,900m)",
        "description": "The exploration begins upon your arrival in Skardu. After checking into your hotel, the day is reserved for necessary altitude acclimatization and a detailed briefing with your local guide. You will review the route and logistical requirements for the upcoming days, ensuring you are fully prepared to enter the rugged, remote terrain of the Tormik Valley."
      },
      {
        "day": 2,
        "title": "Orchard Walks & Upper Tormik Alpine Hike",
        "description": "The expedition embarks on an adventurous 4x4 Jeep drive, leaving the main valley to penetrate the hidden Tormik region. The challenging route winds aggressively through narrow, sheer-walled rock gorges before the landscape unexpectedly opens up. You are greeted by a spectacular, untouched wilderness characterized by dense, ancient alpine pine forests and rushing glacial rivers."
      },
      {
        "day": 3,
        "title": "Village Life, Wood Carving & Shepherd Trails",
        "description": "This day is completely dedicated to immersive wilderness exploration within Tormik. Guided hikes take you deep into the untouched pine forests and up toward the remote summer grazing pastures. The deeply isolated environment offers exceptional photography opportunities, particularly of the dramatic, steep granite mountain walls that completely enclose and protect the valley."
      },
      {
        "day": 4,
        "title": "Return Drive to Skardu",
        "description": "The morning allows for a final, serene walk through the quiet alpine forests, absorbing the profound silence of the high mountains. Afterward, the team boards the 4x4 Jeeps to begin the adventurous, rugged descent back through the narrow gorges. The journey concludes upon your arrival back in the regional center of Skardu."
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
        "description": "The trekking expedition initiates upon your arrival in Gilgit. Following a transfer to your hotel, you will meet with your dedicated trekking guide for a comprehensive equipment check and route briefing. This ensures all gear, provisions, and logistical details are finalized before departing for the multi-day, strenuous trek into the high valleys."
      },
      {
        "day": 2,
        "title": "4x4 Jeep to Dache & Trek to Iskere (2,800m)",
        "description": "The overland approach begins as you drive via 4x4 Jeeps from Gilgit into the rugged, deep Haramosh Valley. The route follows a winding, turbulent river gorge characterized by massive rock walls and steep drops. The grueling drive terminates at the roadhead in either Sassi or Doko village, marking the end of motorized transport."
      },
      {
        "day": 3,
        "title": "Trek Iskere to Kutawal Lake (3,260m)",
        "description": "The physical trek commences with a demanding, steep ascent navigating through narrow, rocky gorges. The strenuous effort required to gain altitude is rewarded as the tight, arid trail gradually opens up. The team eventually arrives at the beautifully lush, green summer pasture and campsite of Iskere, providing a stark contrast to the lower gorge."
      },
      {
        "day": 4,
        "title": "Exploration of Kutawal Lake & Mani Glacier",
        "description": "The ascent continues, pushing higher through dense alpine forests and vibrant summer grazing pastures. The physical exertion is matched by the increasingly dramatic landscape. The day culminates with your arrival at the striking Kutawal Lake, situated at 3,800 meters and completely surrounded by towering, glaciated Karakoram peaks."
      },
      {
        "day": 5,
        "title": "Trek Kutawal Lake to Dache",
        "description": "This designated rest and exploration day is spent entirely around the high-altitude environment of Kutawal Lake. The untouched, crystal-clear water offers perfect, mirror-like reflections of the colossal Mani Peak and Haramosh Peak. For those properly acclimatized, the day offers optional, challenging ridge hikes to gain even more spectacular aerial perspectives of the lake basin."
      },
      {
        "day": 6,
        "title": "Jeep to Sassi & Drive to Gilgit",
        "description": "Leaving the dramatic, high-alpine lake environment behind, the expedition begins the long, sustained descent. The trekking route retraces the path back down through the dense pine forests and the expansive summer pastures. The day concludes with a return to the lower, warmer, and more oxygen-rich campsite at Iskere."
      },
      {
        "day": 7,
        "title": "Departure from Gilgit",
        "description": "The final segment of the trek involves a steep descent back through the narrow, rocky gorges to reach the established roadhead. Upon arrival, the trekking phase formally concludes. The team boards the awaiting 4x4 Jeeps for the rugged, highly scenic return drive, concluding the expedition back at your hotel in Gilgit."
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
        "description": "The tour begins upon your arrival at Skardu Airport. After transferring to your hotel, the remainder of the day is kept open for necessary essential acclimatization. You will have time to rest and independently explore the local mountaineering shops and bazaars in Skardu town, preparing for the transition to the high-altitude forests."
      },
      {
        "day": 2,
        "title": "Full Day Hike to Upper Basho Waterfall & Alpine Pastures",
        "description": "The expedition departs Skardu in specialized 4x4 Jeeps. The highly dramatic route involves crossing a suspended wooden bridge directly over the roaring Indus River before aggressively ascending a steep, rugged gorge. The dry, rocky landscape rapidly transitions as you enter the dense, ancient, and almost magical pine forests that completely blanket the hidden Basho Valley."
      },
      {
        "day": 3,
        "title": "Morning Nature Walk & Return Drive to Skardu",
        "description": "The entire day is dedicated to a guided hiking exploration through the untouched, untouched forests and lush green meadows of Basho. The serene environment offers a stark contrast to the barren Karakoram peaks above. After enjoying a wilderness picnic beside crystal-clear alpine streams, the expedition boards the Jeeps for the steep descent, returning to Skardu in the late afternoon."
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
      "Camp in the untouched pine-covered alpine basin of Basho Meadows (3,200m)",
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
        "description": "Arriving in Skardu, you will settle into your hotel before beginning the afternoon excursion. The journey involves a short but remarkably steep and rugged Jeep drive up the mountainside to the Chunda Valley ridge. This elevated viewpoint offers what is widely considered the absolute best, most comprehensive panoramic aerial view of the entire Skardu basin and the winding Indus River."
      },
      {
        "day": 2,
        "title": "Sunrise Photography, Village Walk & Return",
        "description": "The day begins early to witness a spectacular, high-altitude sunrise illuminating the Indus River and the Skardu airport runway directly below the Chunda ridge. Following a traditional breakfast at the viewpoint, the team undertakes a scenic, descending hike back toward Skardu, walking through traditional terraced farming villages and observing the local agricultural lifestyle."
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
        "description": "The half-day excursion begins with a short, highly scenic drive departing from Skardu town and following the Indus River to the nearby village of Hussain Abad. From the roadhead, a brief, pleasant hike through rocky terrain leads to the striking, cascading Hussain Abad Waterfall, providing a perfect, accessible introduction to the natural water features of the region."
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
        "description": "The expedition drives outward from Skardu to reach the vast expanse of the Sarfaranga Cold Desert, geographically recognized as one of the highest deserts in the world. The afternoon is dedicated to a thrilling 4x4 Jeep safari across the undulating sand dunes, culminating in the establishment of a luxury glamping camp set directly on the high-altitude sands."
      },
      {
        "day": 2,
        "title": "Sunrise on Desert Dunes & Return to Skardu",
        "description": "The overnight stay offers an unparalleled experience of high-altitude stargazing under the incredibly clear, unpolluted Karakoram night sky. The following morning features a striking desert sunrise, highlighting the severe contrast between the sand dunes and the snow peaks. After breakfast in camp, the team drives back to Skardu, concluding the desert safari."
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
        "description": "This focused excursion involves a short, direct drive from the center of Skardu to the nearby Katpana Cold Desert. The late afternoon is spent walking the striking, wind-sculpted sand dunes that sit incongruously at the base of massive mountain walls. The tour is timed perfectly to observe a phenomenal, golden sunset reflecting over the adjacent Indus River before returning to town."
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
        "description": "The journey departs Skardu and drives deep into the remote Kharmang Valley, closely following the winding, turbulent path of the Indus River. The route navigates through steep, rocky gorges before arriving at the towering Khamosh Waterfall. This spectacular, high-volume cascade is hidden deep within a narrow rock cleft, making it one of the most dramatic waterfalls in the region."
      },
      {
        "day": 2,
        "title": "Kharmang Valley Exploration & Return to Skardu",
        "description": "The morning is dedicated to exploring the serene, rocky environment immediately surrounding the waterfall and interacting with the local inhabitants of the Kharmang villages. After enjoying a traditional Balti lunch in the valley, the expedition embarks on the scenic, winding return drive tracing the Indus River back to Skardu town."
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
        "description": "The expedition embarks on a highly scenic drive departing Skardu and heading east toward the Kharmang region. The route follows the Indus River before turning into a side valley to reach the spectacular Manthokha Waterfall. Renowned for its lush, unexpectedly green surroundings and dramatic, sheer water drop, it is a prominent geographical feature of the area."
      },
      {
        "day": 2,
        "title": "Village Walks, Trout Farms & Return to Skardu",
        "description": "The day features a lunch of fresh, local trout, sourced directly from the sustainable fish farms located at the immediate base of the waterfall. The afternoon allows for relaxing in the surrounding meadows and photographing the falls before boarding the vehicles for the scenic return drive back to the regional hub of Skardu."
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
        "description": "The expedition initiates upon your arrival at Skardu Airport. Following a transfer to your hotel, the remainder of the day is strictly reserved for essential essential acclimatization. You will have time to thoroughly check your trekking equipment and explore the local Skardu mountaineering bazaars, preparing for the transition into the high, remote valleys."
      },
      {
        "day": 2,
        "title": "Drive Khaplu to Kanday Village (2,850m)",
        "description": "The overland journey begins with a spectacular, rugged drive through the Khaplu Valley, closely following the path of the Shyok River. The route navigates through arid, rocky landscapes before arriving at the remote, traditional village of Kanday. This small settlement serves as the absolute final roadhead and the official gateway to the Nangma Valley."
      },
      {
        "day": 3,
        "title": "Trek Kanday to Mingulo Broq (3,500m)",
        "description": "The physical trekking phase commences with a steep, sustained ascent departing directly from Kanday. The trail forces its way through narrow, rocky gorges and climbs up toward the summer grazing pastures. The intense physical effort culminates upon arrival at the incredibly scenic campsite of Mingulo Broq, completely surrounded by towering, sheer granite spires."
      },
      {
        "day": 4,
        "title": "Trek Mingulo Broq to Nangma Base Camp (4,200m)",
        "description": "The trek pushes deeper into the magnificent, high-altitude Nangma Valley. The route navigates rugged moraine and alpine meadows, eventually establishing camp directly beneath the colossal, vertical granite face of Amin Brakk (5,850m). This sheer wall is globally recognized as a premier big-wall climbing objective, providing a staggering backdrop for the campsite."
      },
      {
        "day": 5,
        "title": "Exploration Day beneath Amin Brakk & Great Tower",
        "description": "This designated rest and exploration day allows for deep immersion into the Nangma Valley environment. Without the pressure of a forced march, photographers and climbers can independently explore the immediate bases of the various surrounding granite spires. The area offers a untouched, uncrowded, and profoundly silent alpine environment rarely experienced on the more popular Karakoram routes."
      },
      {
        "day": 6,
        "title": "Trek Nangma Base Camp to Kanday Village",
        "description": "Leaving the dramatic, vertical granite walls behind, the expedition begins the long descent. The trekking route retraces the path back down through the high summer pastures and rocky moraine. The day concludes with a return to the lower, warmer, and significantly more oxygen-rich campsite at Mingulo Broq."
      },
      {
        "day": 7,
        "title": "Drive Kanday to Skardu via Khaplu Palace",
        "description": "The final segment of the trek involves a steep, demanding descent back through the narrow gorges to reach the established roadhead at Kanday village. Upon arrival, the trekking phase formally concludes. The team boards the awaiting 4x4 Jeeps for the highly scenic, winding return drive along the Shyok River, concluding the overland journey back in Skardu."
      },
      {
        "day": 8,
        "title": "Departure from Skardu",
        "description": "The expedition formally concludes with a morning transfer to Skardu Airport. The spectacular return flight over the Himalayan divide to Islamabad provides a final aerial perspective of the massive mountain ranges. Upon landing in the capital, our logistics team will ensure a seamless transfer for your onward international journey."
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
        "description": "The journey begins with your arrival in either Gilgit or Skardu. Following a transfer to your hotel, you will meet with your lead guide to conduct a thorough review of the strict, mandatory military permits required for accessing the highly restricted Astore and Minimerg regions, located near the Line of Control."
      },
      {
        "day": 2,
        "title": "Drive Astore across Burzil Pass to Minimerg (2,840m)",
        "description": "The expedition departs the Astore Valley via specialized 4x4 Jeeps, beginning a steep, rugged, and highly dramatic ascent over the Burzil Pass (4,100m). Successfully navigating the high-altitude pass, the vehicles descend into the heavily restricted, strikingly beautiful, and largely untouched Minimerg Valley."
      },
      {
        "day": 3,
        "title": "Excursion to Domail & Rainbow Lake",
        "description": "The entire day is dedicated to exploring the untouched, unusually lush green landscapes that define the Minimerg region. The itinerary highlights a visit to the incredibly serene Rainbow Lake, geographically famous for its vivid, constantly shifting colors and crystal-clear waters reflecting the surrounding pine forests."
      },
      {
        "day": 4,
        "title": "Minimerg Nature Walks & Drive to Astore / Chilas",
        "description": "The expedition drives even deeper into the restricted zone to explore the remote Domail Valley. The day is spent enjoying the profound quiet and untouched alpine environment, characterized by dense, ancient forests and unique high-altitude flora. In the late afternoon, the team returns to the established camp in Minimerg."
      },
      {
        "day": 5,
        "title": "Return Drive to Islamabad / Gilgit",
        "description": "The return journey requires an early morning departure to recross the towering Burzil Pass, taking advantage of the firm morning conditions. The descent provides spectacular, sweeping views of the surrounding Himalayan peaks. The long, rugged overland drive finally concludes upon your return to either Gilgit or Skardu."
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
      "Experience untouched nature and untouched high-altitude valley landscapes"
    ]
  },
  "chutroon-hot-springs": {
    "itinerary": [
      {
        "day": 1,
        "title": "Drive Skardu to Shigar Fort & Upper Shigar",
        "description": "The tour begins upon your arrival in Skardu. After seamlessly transferring to your hotel, the afternoon is dedicated to essential altitude acclimatization. The itinerary includes an exploration of the historic sites within the town, prominently featuring a visit to the 16th-century Kharpocho Fort overlooking the Indus River."
      },
      {
        "day": 2,
        "title": "Chutroon Hot Springs & Village Walks",
        "description": "The expedition embarks on a highly scenic Jeep drive, crossing the vast expanse of the Sarfaranga Cold Desert before penetrating deep into the Shigar Valley. The route follows the winding river gorge until arriving at the remote village of Chutroon, geographically famous throughout the region for its natural, geothermally heated hot springs."
      },
      {
        "day": 3,
        "title": "Scenic Return Drive to Skardu",
        "description": "The morning is spent relaxing and soaking in the therapeutic, mineral-rich hot springs, which have served as a traditional natural remedy in Baltistan for centuries. Following the therapeutic experience and a local lunch, the team enjoys a leisurely, scenic drive retracing the route through the Shigar Valley back to Skardu town."
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
        "description": "The expedition initiates upon your arrival in Gilgit. Following a transfer to your hotel, the afternoon is dedicated to a comprehensive equipment check. You will review the specialized ski touring gear, avalanche safety equipment, and the logistical requirements for the upcoming days in the high-altitude winter environment."
      },
      {
        "day": 2,
        "title": "4x4 Snow Jeep Transfer to Naltar Valley (3,000m)",
        "description": "The team transitions to rugged 4x4 Jeeps, leaving the main highway to enter the narrow, steep gorge leading up to the Naltar Valley. The landscape transforms rapidly from dry, rocky mountainsides to dense, untouched alpine pine forests heavily laden with winter snow. The day concludes at the Naltar ski facility, preparing for the backcountry."
      },
      {
        "day": 3,
        "title": "Resort & Slope Skiing at Naltar",
        "description": "The core of the Naltar experience involves guided ski touring ascents utilizing climbing skins. The team pushes upward through the silent, snow-covered forests toward the valley's famous high-altitude lakes. The descent offers exceptional, untracked powder skiing through widely spaced pine trees, providing a premier backcountry experience in the Karakoram."
      },
      {
        "day": 4,
        "title": "Backcountry Ski Touring to Satrangi Lake",
        "description": "The day is entirely dedicated to exploring the higher ridges surrounding the Naltar Valley. Ski mountaineering techniques are employed to access steeper, more demanding terrain. The physical effort of the ascent is rewarded with long, sustained descents through untouched alpine bowls, offering spectacular views of the surrounding glaciated peaks."
      },
      {
        "day": 5,
        "title": "Alpine Powder Descents & Training",
        "description": "The winter exploration focuses on discovering hidden, secondary valleys adjoining Naltar. The team breaks trail through deep snow to access remote slopes that remain completely untouched. This day emphasizes the profound isolation and quiet beauty of the Karakoram backcountry, far removed from any established infrastructure or permanent settlements."
      },
      {
        "day": 6,
        "title": "Naltar to Gilgit & Evening Celebration",
        "description": "The final morning allows for a short ski tour to access any remaining untracked lines near the valley floor. In the afternoon, the expedition boards the 4x4 Jeeps for the highly scenic, bumpy descent back down the rugged gorge, returning to the relative warmth and comfort of your hotel in Gilgit."
      },
      {
        "day": 7,
        "title": "Fly Gilgit to Islamabad & Departure",
        "description": "The ski exploration formally concludes with a morning transfer to Gilgit Airport for the scenic flight back over the mountain ranges to Islamabad. Upon arrival in the capital, our logistics team ensures a seamless transfer for your onward journey, bringing your winter adventure to a close."
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
        "description": "The winter expedition begins with your arrival at Skardu Airport. After transferring to your hotel, the remainder of the day is strictly dedicated to essential acclimatization, a vital requirement before ascending to the extreme winter environment of the Deosai plateau. The team will thoroughly review the specialized polar-grade expedition equipment."
      },
      {
        "day": 2,
        "title": "Skardu Acclimatization & Winter Gear Check",
        "description": "Leaving Skardu, the expedition boards specialized 4x4 Jeeps equipped for severe winter conditions. The route involves a steep, winding ascent out of the Indus valley. The vehicles push as far as the snowline permits before the team transitions to skis. The grueling ascent reaches the Deosai National Park, establishing a high-altitude winter camp at 4,114 meters."
      },
      {
        "day": 3,
        "title": "Snowcat / 4x4 Approach to Deosai Edge (Ali Malik)",
        "description": "This day is entirely dedicated to ski touring across the vast, frozen plains of the 'Land of Giants'. The Deosai plateau in winter is a profoundly isolated, hostile, and utterly silent environment. The sheer scale of this high-altitude ecosystem, completely buried in deep snow, provides an unparalleled, immersive winter expedition experience."
      },
      {
        "day": 4,
        "title": "Ski Touring across Deosai Plains (Days 4\u20137)",
        "description": "The ski traverse continues across the rolling terrain of the plateau, navigating toward the iconic Sheosar Lake, which is completely frozen and snow-covered. On clear winter days, the stark white landscape perfectly frames the towering massif of Nanga Parbat on the distant horizon. The team navigates carefully through the extreme cold."
      },
      {
        "day": 5,
        "title": "Summit Descents & Descent to Skardu",
        "description": "The expedition focuses on exploring the deeper, undulating valleys of the plateau. The lack of trees and infrastructure allows for absolute freedom in route selection, creating a true wilderness ski experience. The physical toll of the high altitude and severe temperatures demands careful energy management throughout the day."
      },
      {
        "day": 6,
        "title": "Reserve Day in Skardu",
        "description": "The expedition breaks the high-altitude winter camp and begins the long, ski-assisted descent back into the Skardu basin. The transition from the extreme, frozen plateau back to the relative warmth of the lower valleys is stark. The team reunites with the 4x4 Jeeps for the final drive back to Skardu."
      },
      {
        "day": 7,
        "title": "Flight to Islamabad & Departure",
        "description": "The team transfers to Skardu Airport for the highly scenic morning flight over the Himalayas back to Islamabad. The high-altitude winter expedition formally concludes with a transfer to Islamabad International Airport. You will depart carrying the rare achievement of traversing the Deosai plateau during the harsh winter months."
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
        "description": "The expedition begins with your arrival in Islamabad, where you are transferred to a premium hotel. The afternoon is dedicated to critical administrative logistics. The team will attend a mandatory briefing at the Ministry of Tourism to formalize the winter expedition permits for the Hispar Glacier, ensuring all regulatory requirements are met."
      },
      {
        "day": 2,
        "title": "Skardu to Askole (3,000m)",
        "description": "The team transfers to the domestic terminal for the spectacular flight to Gilgit or Skardu. The afternoon is utilized for early acclimatization, finalizing expedition rations, and meticulously inspecting all technical alpine ski mountaineering gear. Preparing for a glacier traverse in winter requires absolute precision regarding safety equipment."
      },
      {
        "day": 3,
        "title": "Step onto Biafo Glacier on Skis (Days 3\u20136)",
        "description": "The overland journey navigates the Karakoram Highway toward the Hunza or Nagar valley. The route relies on 4x4 Jeeps to reach the historic Hispar Village. This small settlement serves as the absolute final roadhead and the official gateway to the immense Hispar Glacier system."
      },
      {
        "day": 4,
        "title": "Snow Lake Skiing & Hispar Pass Ascent (Days 7\u20139)",
        "description": "The physical ski touring phase commences with an ascent along the lateral moraine of the Hispar Glacier. The winter environment is exceedingly harsh, requiring careful navigation over snow-covered rock and ice. The trail leads to the lower ablation valleys, offering the first elevated views of the frozen glacial river."
      },
      {
        "day": 5,
        "title": "Descent down Hispar Glacier (Days 10\u201312)",
        "description": "The expedition transitions fully onto the central white ice of the Hispar Glacier. The team utilizes climbing skins to ascend the vast, gently sloping plateau. Navigating the exposed ice requires careful attention to avoid hidden, snow-bridged crevasses. The day culminates at a high, frozen camp surrounded by sheer granite walls."
      },
      {
        "day": 6,
        "title": "Drive Hispar to Hunza & Gilgit",
        "description": "This day focuses on a significant ski mountaineering objective within the Hispar basin. The team ascends a prominent ridge or col flanking the main glacier. The grueling physical effort is rewarded with a massive, continuous powder descent back down to the main glacier, representing the pinnacle of Karakoram backcountry skiing."
      },
      {
        "day": 7,
        "title": "Fly to Islamabad & Departure",
        "description": "The winter expedition concludes with a highly scenic morning flight from Gilgit or Skardu back to Islamabad, offering dramatic aerial views of the Karakoram. Upon arrival in the capital, our logistics team ensures a seamless transfer to the international terminal for your onward journey, bringing your backcountry adventure to a close."
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
        "description": "Your cultural immersion begins upon arrival in Islamabad. Following a seamless transfer to your hotel, the afternoon is dedicated to a thorough orientation with your lead guide. You will review the logistics of traversing the Karakoram Highway and the specific cultural protocols of the Hunza region. The evening concludes with a welcome dinner."
      },
      {
        "day": 2,
        "title": "Baltit Fort, Altit Fort & Royal Gardens",
        "description": "The expedition takes flight to the regional hub of Gilgit. Upon landing, the overland journey begins along the historic, paved Karakoram Highway. The route traces the deep gorges of the Hunza River, revealing the sheer scale of the surrounding peaks. By late afternoon, you arrive in Karimabad, checking into a hotel offering sweeping valley views."
      },
      {
        "day": 3,
        "title": "Ganish Heritage Settlement & Sacred Rock Carvings",
        "description": "This day is entirely dedicated to uncovering the rich architectural and royal history of Hunza. You will undertake guided, detailed explorations of the 700-year-old Baltit Fort and the even older Altit Fort, both masterclasses in indigenous earthquake-resistant architecture. The afternoon allows for independent wandering through the steep, cobblestone streets of Karimabad."
      },
      {
        "day": 4,
        "title": "Upper Hunza Gulmit Homestay & Attabad Lake",
        "description": "The journey continues further north along the Karakoram Highway, entering the Upper Hunza (Gojal) region. The landscape becomes noticeably more dramatic, punctuated by the striking, jagged spires of the Passu Cones. A major highlight is a boat ride across the striking, vivid turquoise waters of Attabad Lake, formed by a massive landslide."
      },
      {
        "day": 5,
        "title": "Borith Lake & Passu Village Cultural Walk",
        "description": "The day begins early with a short drive up to the famous Eagle's Nest viewpoint in Duikar. This elevated position provides a spectacular, 360-degree sunrise panorama encompassing Rakaposhi and the sprawling Hunza Valley below. Afterward, the overland journey southward commences, tracing the Hunza River back to a comfortable hotel in Gilgit town."
      },
      {
        "day": 6,
        "title": "Drive Hunza to Gilgit & Departure",
        "description": "The cultural exploration formally concludes as you board the morning flight from Gilgit back to Islamabad. The aerial perspective offers a final, sweeping view of the Karakoram and Himalayan ranges. Upon arrival in the capital, our team will transfer you directly to the international airport for your departure."
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
        "description": "The tour formally commences upon your arrival at Islamabad International Airport. Our ground team ensures a seamless transfer to your premium hotel in the capital. The remainder of the day is structured to allow you to recover from international travel. In the evening, the group gathers for a comprehensive briefing on the geographical and cultural nuances of Baltistan."
      },
      {
        "day": 2,
        "title": "Shigar Fort, Amburiq Mosque & Royal Gardens",
        "description": "The landscape shifts dramatically as you board a high-altitude flight passing the towering flanks of Nanga Parbat to reach Skardu (2,230m). Following your hotel transfer, the afternoon is kept deliberately light. A guided walk through the local mountaineering bazaars provides an initial cultural immersion while serving the crucial biological purpose of early altitude acclimatization."
      },
      {
        "day": 3,
        "title": "Drive Shigar to Khaplu Valley (Ghanche)",
        "description": "The day focuses on the historical dominance of the Skardu basin, beginning with a steep but rewarding hike up to the 16th-century Kharpocho Fort. Perched on a rock spur overlooking the Indus River, the fort provides an unparalleled, strategic vantage point. The afternoon is dedicated to exploring the nearby organic villages and observing traditional agricultural practices."
      },
      {
        "day": 4,
        "title": "Khaplu Palace & Historic Chaqchan Mosque",
        "description": "The itinerary shifts into the high-altitude Shigar Valley, historically known for its distinct Tibetan-influenced architecture. The centerpiece of the day is a comprehensive architectural tour of the meticulously restored 400-year-old Serena Shigar Fort. Once the palace of the local Raja, the structure is a masterpiece of traditional Balti woodwork and stone masonry."
      },
      {
        "day": 5,
        "title": "Khaplu to Skardu & Kharpocho Fort",
        "description": "The journey follows the winding course of the Shyok River eastward into the remote Khaplu Valley. You will visit the grand 19th-century Khaplu Palace and deeply explore the ancient, incredibly preserved Chaqchan Mosque, which dates back over 700 years. The historical depth of Khaplu offers a profound understanding of the region's royal heritage."
      },
      {
        "day": 6,
        "title": "Departure from Skardu",
        "description": "The cultural expedition formally concludes with a morning transfer to Skardu Airport. You will board the highly scenic return flight, crossing back over the Himalayan divide to Islamabad. Upon arrival in the capital, you are transferred directly to the international terminal for your onward journey, bringing your exploration of Baltistan to a close."
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
        "description": "This focused excursion immerses you entirely in the vibrant, historical atmosphere of the central Gilgit Bazaar. Once a crucial trading post on the ancient Silk Route, the market remains the commercial heart of the Northern Areas. You will navigate the bustling, narrow alleys, exploring traditional textile shops, local gemstone merchants, and sampling authentic street food."
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
        "description": "The cultural immersion begins upon your arrival in Islamabad. Following a seamless transfer to your hotel, the afternoon is dedicated to a thorough orientation with your lead guide. You will review the logistics of traversing the Karakoram Highway and the specific cultural significance of the ancient Nowruz (Persian New Year) celebrations in the northern valleys."
      },
      {
        "day": 2,
        "title": "Nowruz Celebration Day & Traditional Polo",
        "description": "The expedition takes flight to the regional hub of Gilgit or Skardu, dramatically crossing the mountain ranges. Upon landing, the team transfers to a comfortable local hotel. The afternoon allows for initial exploration of the region and essential acclimatization to the altitude before the intensive festival activities commence."
      },
      {
        "day": 3,
        "title": "Village Feasts & Sword Dance Performances",
        "description": "This day marks the beginning of the traditional Nowruz festivities. You will visit local villages to observe the elaborate preparations, including the cleaning of homes, the preparation of specialized traditional foods, and the gathering of communities. The atmosphere is vibrant and celebratory, offering a rare window into the deep-rooted cultural heritage of the region."
      },
      {
        "day": 4,
        "title": "Spring Blossom Walks in Apricot Orchards",
        "description": "The core of the Nowruz celebration unfolds today. You will respectfully witness and participate in the communal feasts, traditional music performances, and energetic polo matches that characterize the festival in the Karakoram. The day provides profound insight into how the communities welcome the arrival of spring and the revitalization of the agricultural landscape."
      },
      {
        "day": 5,
        "title": "Departure from Skardu",
        "description": "The cultural expedition formally concludes as you board the morning flight from the northern valleys back to Islamabad. The aerial perspective offers a final view of the mountain ranges you have just explored. Upon arrival in the capital, our team will transfer you directly to the international airport for your departure."
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
        "description": "The day focuses on the historical and agricultural dominance of the Skardu basin. It begins with a steep, rewarding hike up to the 16th-century Kharpocho Fort, perched precariously on a rock spur overlooking the Indus River. The afternoon transitions to exploring the adjacent, meticulously maintained organic villages, providing insight into sustainable, centuries-old Balti farming practices."
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
        "description": "This excursion focuses on uncovering the ancient Buddhist heritage of the region. The team undertakes a gentle hike to the impressive Masur Rock carvings, dating back to the 8th century. The intricate reliefs provide a tangible link to the era when the Tibetan Empire and Buddhist pilgrims heavily influenced the cultural landscape of Baltistan."
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
        "description": "The evening is dedicated entirely to experiencing the vibrant, traditional music of Baltistan. The group gathers in a comfortable setting to enjoy a live performance featuring indigenous instruments such as the rubab and dadang. The energetic music and accompanying traditional dances offer a profound, joyful immersion into the local culture and storytelling traditions."
      }
    ],
    "included": [
      "Full evening live musical performance by cultural partner Sakhawat",
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
      "Live authentic Balti music by master musicians from our cultural partner Sakhawat",
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
        "description": "The cultural immersion begins upon your arrival in Islamabad. Following a seamless transfer to your hotel, the afternoon is dedicated to a thorough orientation with your lead guide. You will review the logistics of traversing the Hindu Kush ranges and the specific cultural protocols required for respectfully attending the Kalash festivals."
      },
      {
        "day": 2,
        "title": "Dir through Lowari Tunnel to Chitral & Bumburet Valley",
        "description": "The expedition drives northward, leaving the capital to cross the dramatic Lowari Pass into the Chitral Valley. The long overland journey highlights the stark transition from the plains into the rugged, isolated mountains of the Hindu Kush. The day concludes with arrival in Chitral town, checking into a comfortable hotel."
      },
      {
        "day": 3,
        "title": "Chilam Joshi Opening Celebrations in Rumbur",
        "description": "The day is entirely dedicated to uncovering the rich history of Chitral. You will undertake a guided exploration of the historic Chitral Fort and the beautiful Shahi Mosque, situated on the banks of the Chitral River. The afternoon allows for independent wandering through the bustling local bazaars, interacting with local artisans."
      },
      {
        "day": 4,
        "title": "Main Festival Dances & Ceremonies in Bumburet",
        "description": "Leaving Chitral, the expedition utilizes 4x4 Jeeps to drive deep into the remote Kalash Valleys. These isolated valleys are home to the Kalash people, Pakistan's smallest religious minority, known for their distinct animist traditions and vibrant clothing. You will settle into a local guesthouse, beginning your cultural immersion."
      },
      {
        "day": 5,
        "title": "Birir Valley Exploration & Kalash Heritage Museum",
        "description": "This day is dedicated entirely to participating in and observing the primary Kalash Festival. You will respectfully witness the traditional dances, rituals, and celebrations that mark the changing of the seasons. This provides a profound, unparalleled understanding of an ancient culture that has survived in these isolated valleys for centuries."
      },
      {
        "day": 6,
        "title": "Chitral Town, Shahi Mosque & Chitral Fort",
        "description": "The morning allows for a final, serene walk through the wooden, terraced villages of the Kalash, offering opportunities for portrait photography and final cultural exchanges. In the afternoon, the expedition boards the Jeeps for the rugged descent out of the valleys, returning to the comfort of your hotel in Chitral."
      },
      {
        "day": 7,
        "title": "Drive Chitral to Islamabad & Departure",
        "description": "The cultural expedition formally concludes with a morning flight from Chitral Airport back to Islamabad. Upon arrival in the capital, you are transferred directly to the international terminal for your onward journey, carrying a deep appreciation for the incredibly unique, ancient traditions of the Kalash people."
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
