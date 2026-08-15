import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function VisaGuidePage() {
  return (
    <>
      <PageHero 
        tracker="Travel Info" 
        title="Pakistan Visa Guide" 
        subtitle="Everything you need to know for your Gilgit-Baltistan adventure." 
      />

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto flex flex-col gap-12">
          <ScrollReveal>
            <div className="text-base">
              
              <p className="text-xl text-muted-foreground leading-[1.8] mb-12 max-w-[75ch]">
                Planning a trek in the Karakoram is an exciting journey, and the first step is getting your paperwork in order. Pakistan's visa process has been heavily modernized in recent years, making it easier than ever for foreign trekkers and mountaineers to explore Gilgit-Baltistan. Here is exactly what you need to know to secure your visa smoothly.
              </p>

              {/* Table of Contents */}
              <div className="bg-card/50 border border-border rounded-xl p-6 mb-16">
                <h3 className="text-lg font-bold mb-4 text-foreground">Table of Contents</h3>
                <ul className="space-y-2 text-sm list-none p-0">
                  <li><a href="#visa-types" className="text-muted-foreground hover:text-primary transition-colors">Types of Visas for Gilgit-Baltistan</a></li>
                  <li><a href="#application-process" className="text-muted-foreground hover:text-primary transition-colors">The Application Process</a></li>
                  <li><a href="#document-checklist" className="text-muted-foreground hover:text-primary transition-colors">Document Checklist</a></li>
                  <li><a href="#restricted-zones" className="text-muted-foreground hover:text-primary transition-colors">Restricted Zones vs. 6,500m+ Permits</a></li>
                  <li><a href="#considerations" className="text-muted-foreground hover:text-primary transition-colors">Important Travel Considerations</a></li>
                  <li><a href="#faq" className="text-muted-foreground hover:text-primary transition-colors">Frequently Asked Questions</a></li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold mt-16 mb-6 text-foreground">Why Getting Your Visa Right Matters</h2>
              <p className="text-muted-foreground leading-[1.8] mb-8 max-w-[75ch]">
                Unlike a standard tourist trip, a trekking or mountaineering expedition in Gilgit-Baltistan often requires specific clearances. Showing up with the wrong visa category or missing permits can delay your departure from Islamabad or stop you at checkpoints on the Karakoram Highway. We want your focus to be on the mountains, not bureaucracy, so applying for the correct visa early is crucial.
              </p>

              <h2 id="visa-types" className="text-2xl font-bold mt-16 mb-6 text-foreground">Types of Visas for Gilgit-Baltistan</h2>
              <p className="text-muted-foreground leading-[1.8] mb-6 max-w-[75ch]">
                Most travelers heading to Pakistan for an adventure will apply through the <a href="https://visa.nadra.gov.pk/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">Pakistan Online Visa System</a>. There are two main categories you should consider:
              </p>
              
              <ul className="list-disc pl-6 space-y-4 mb-10 max-w-[75ch] text-muted-foreground leading-[1.8]">
                <li><strong className="text-foreground">Tourist Visa:</strong> Ideal for standard sightseeing and visiting "open" areas in Gilgit-Baltistan like Skardu city, Hunza Valley, and Deosai National Park.</li>
                <li><strong className="text-foreground">Mountaineering & Trekking Visa:</strong> The mandatory category if you are heading into "restricted" zones, which includes the Baltoro Glacier, K2 Base Camp, Concordia, or climbing peaks above 6,500m.</li>
              </ul>



              <h2 id="application-process" className="text-2xl font-bold mt-16 mb-6 text-foreground">The Application Process</h2>
              <p className="text-muted-foreground leading-[1.8] mb-6 max-w-[75ch]">
                Applying for the e-Visa is entirely digital via the NADRA portal. Follow these steps:
              </p>
              
              <ol className="list-decimal pl-6 space-y-4 mb-10 max-w-[75ch] text-muted-foreground leading-[1.8]">
                <li><strong className="text-foreground">Check Eligibility:</strong> Verify your nationality's eligibility for e-Visa or Visa on Arrival on the official <a href="https://visa.nadra.gov.pk/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">NADRA portal</a>.</li>
                <li><strong className="text-foreground">Prepare Documents:</strong> Gather all required scans (see checklist below) before starting your application to avoid session timeouts.</li>
                <li><strong className="text-foreground">Submit Application:</strong> Create an account, fill out the online forms, and upload your heavily compressed documents.</li>
                <li><strong className="text-foreground">Pay Fees:</strong> Pay securely online via credit card. Fees vary significantly by nationality.</li>
                <li><strong className="text-foreground">Await Processing:</strong> Standard tourist visas take 7-10 days, but Mountaineering/Trekking visas require 4-6 weeks for multi-department clearance.</li>
              </ol>

              <h2 id="document-checklist" className="text-2xl font-bold mt-16 mb-6 text-foreground">Document Checklist</h2>
              <ul className="list-disc pl-6 space-y-4 mb-10 max-w-[75ch] text-muted-foreground leading-[1.8]">
                <li><strong className="text-foreground">Valid Passport:</strong> A clear scan of your passport information page, with at least 6 months validity remaining.</li>
                <li><strong className="text-foreground">Digital Photograph:</strong> A recent passport-sized digital photograph with a white background.</li>
                <li><strong className="text-foreground">Hotel Booking (Tourist Visas):</strong> A confirmed reservation for your initial stay in Pakistan.</li>
                <li><strong className="text-foreground">Sponsor Letter (Trekking/Expedition Visas):</strong> A formal Invitation/Sponsor Letter from a registered, licensed Pakistani tour operator (like us). We provide this essential document to all our confirmed clients.</li>
              </ul>

              <div className="bg-accent/50 text-accent-foreground px-6 py-5 rounded-xl border border-primary/20 my-12 flex gap-4 items-start">
                <span className="text-xl leading-none mt-1">💡</span>
                <p className="m-0 text-sm md:text-base leading-[1.8]">
                  <strong className="text-foreground">Pro Tip:</strong> Apply 6-8 weeks in advance! The NADRA portal is also notoriously strict about file sizes, so ensure your passport scans and photos are compressed to meet their MB limits before uploading.
                </p>
              </div>

              <h2 id="restricted-zones" className="text-2xl font-bold mt-16 mb-6 text-foreground">Restricted Zones vs. 6,500m+ Permits</h2>
              <p className="text-muted-foreground leading-[1.8] mb-6 max-w-[75ch]">
                Gilgit-Baltistan is categorized into "open" and "restricted" zones. Navigating the rules here is vital.
              </p>
              <p className="text-muted-foreground leading-[1.8] mb-6 max-w-[75ch]">
                If your trek is in an open area (like Fairy Meadows), your standard Tourist e-Visa is sufficient. If your trek crosses into a restricted area (such as the Baltoro Glacier), you are legally required to obtain a <strong className="text-foreground">No Objection Certificate (NOC) and Trekking Permit</strong> via a licensed operator.
              </p>
              <p className="text-muted-foreground leading-[1.8] mb-10 max-w-[75ch]">
                <strong className="text-foreground">Important Distinction:</strong> Restricted-zone NOC requirements and the 6,500m+ peak permit requirement are two SEPARATE rules. A peak located in an "open" zone (like Khosar Gang, 6,401m) requires no permit. However, if a peak is in an open zone but exceeds 6,500m (like Spantik, 7,027m), it strictly requires a formal climbing permit and royalty fee from the <a href="https://gilgitbaltistancouncil.gov.pk/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">Gilgit-Baltistan Council</a>, regardless of whether the zone itself is open or restricted.
              </p>

              <h2 id="considerations" className="text-2xl font-bold mt-16 mb-6 text-foreground">Important Travel Considerations</h2>
              <div className="space-y-4 my-10 max-w-[75ch]">
                <div className="flex gap-3 items-start p-5 bg-card border border-border rounded-lg">
                  <span className="text-green-500 shrink-0 mt-0.5">✅</span>
                  <div>
                    <h4 className="font-semibold text-foreground">Visa on Arrival (VOA)</h4>
                    <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">While VOA exists for some nationalities (like GCC citizens), we strongly advise trekkers to secure an e-Visa beforehand to guarantee no expedition delays.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start p-5 bg-card border border-border rounded-lg">
                  <span className="text-green-500 shrink-0 mt-0.5">✅</span>
                  <div>
                    <h4 className="font-semibold text-foreground">Visa Extensions</h4>
                    <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">You can apply for a visa extension online through the same NADRA portal if your expedition runs longer than expected due to weather.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start p-5 bg-card border border-border rounded-lg">
                  <span className="text-green-500 shrink-0 mt-0.5">✅</span>
                  <div>
                    <h4 className="font-semibold text-foreground">Carry Physical Copies</h4>
                    <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">Always carry printed copies of your e-Visa Grant Notice, passport details page, and NOC. You will hand these over at various checkpoints.</p>
                  </div>
                </div>
              </div>

              <h2 id="faq" className="text-2xl font-bold mt-16 mb-6 text-foreground">Frequently Asked Questions</h2>
              
              <div className="mt-8 mb-16">
                <Accordion type="single" collapsible defaultValue="faq-1" className="space-y-3">
                  <AccordionItem value="faq-1" className="bg-card border border-border rounded-lg px-5 data-[state=open]:border-primary/30 transition-colors">
                    <AccordionTrigger className="hover:no-underline py-4">
                      <div className="flex items-center gap-3 text-left">
                        <span className="shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary text-base font-bold flex items-center justify-center">1</span>
                        <span className="font-medium text-foreground text-base md:text-lg">What is the real-world processing time for a Trekking Visa?</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 pl-13 text-base leading-relaxed">
                      While the official NADRA estimate for a Trekking & Mountaineering Visa is 4 to 6 weeks, real-world reports from travelers indicate that processing can sometimes take 45 days to over two months, particularly during peak season backlogs or if additional security clearances are required. We highly recommend building in a solid time buffer and applying as early as the portal allows.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-2" className="bg-card border border-border rounded-lg px-5 data-[state=open]:border-primary/30 transition-colors">
                    <AccordionTrigger className="hover:no-underline py-4">
                      <div className="flex items-center gap-3 text-left">
                        <span className="shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary text-base font-bold flex items-center justify-center">2</span>
                        <span className="font-medium text-foreground text-base md:text-lg">Should I book my flights before my visa is approved?</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 pl-13 text-base leading-relaxed">
                      Given the known variability in processing times, we strongly advise against booking non-refundable flights before your e-Visa and NOC are fully approved. If you must secure dates early, ensure you purchase fully flexible or refundable tickets to protect your investment in case of administrative delays.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-3" className="bg-card border border-border rounded-lg px-5 data-[state=open]:border-primary/30 transition-colors">
                    <AccordionTrigger className="hover:no-underline py-4">
                      <div className="flex items-center gap-3 text-left">
                        <span className="shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary text-base font-bold flex items-center justify-center">3</span>
                        <span className="font-medium text-foreground text-base md:text-lg">Do I need special travel insurance for trekking in Pakistan?</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 pl-13 text-base leading-relaxed">
                      Yes. Standard travel insurance policies almost universally exclude high-altitude trekking and regions under certain government travel advisories. You must ensure your policy explicitly covers trekking up to your maximum planned altitude (e.g., 5,500m for Concordia) and includes helicopter search, rescue, and evacuation in Pakistan. Helicopter rescues in Gilgit-Baltistan require a hefty advance deposit which your specialized insurance will need to guarantee.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-4" className="bg-card border border-border rounded-lg px-5 data-[state=open]:border-primary/30 transition-colors">
                    <AccordionTrigger className="hover:no-underline py-4">
                      <div className="flex items-center gap-3 text-left">
                        <span className="shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary text-base font-bold flex items-center justify-center">4</span>
                        <span className="font-medium text-foreground text-base md:text-lg">I have Pakistani family/heritage — can I just use a Family Visa for trekking?</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 pl-13 text-base leading-relaxed">
                      No. Even if you hold a valid Family Visit Visa, National Identity Card for Overseas Pakistanis (NICOP), or a Pakistan Origin Card (POC), you are still legally required to obtain a specific NOC permit and Sponsor Letter from a licensed tour operator if you intend to enter restricted military zones like the Baltoro Glacier. A standard visa or NICOP alone does not grant access to restricted trekking areas.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-5" className="bg-card border border-border rounded-lg px-5 data-[state=open]:border-primary/30 transition-colors">
                    <AccordionTrigger className="hover:no-underline py-4">
                      <div className="flex items-center gap-3 text-left">
                        <span className="shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary text-base font-bold flex items-center justify-center">5</span>
                        <span className="font-medium text-foreground text-base md:text-lg">Is it safe to trek in Gilgit-Baltistan given current travel advisories?</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 pl-13 text-base leading-relaxed">
                      Many foreign travel advisories issue broad warnings for Pakistan based on historical context or specific conflict-prone border regions (like parts of KP or Balochistan). However, Gilgit-Baltistan—where the Karakoram is located—is geographically isolated from these areas and has remained peaceful, highly secure, and welcoming for trekkers for decades. While you should always review your government's current official advisory before traveling, it is important to distinguish the specific realities of the northern trekking regions from broader national alerts.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-6" className="bg-card border border-border rounded-lg px-5 data-[state=open]:border-primary/30 transition-colors">
                    <AccordionTrigger className="hover:no-underline py-4">
                      <div className="flex items-center gap-3 text-left">
                        <span className="shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary text-base font-bold flex items-center justify-center">6</span>
                        <span className="font-medium text-foreground text-base md:text-lg">Do I need a permit to climb a 6,000m peak like Khosar Gang?</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 pl-13 text-base leading-relaxed">
                      Khosar Gang (6,401m) is in an open zone and does not require a restricted trekking permit or a peak permit. However, any peak in Pakistan that exceeds 6,500m strictly requires a formal climbing permit and royalty fee, regardless of its location.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-7" className="bg-card border border-border rounded-lg px-5 data-[state=open]:border-primary/30 transition-colors">
                    <AccordionTrigger className="hover:no-underline py-4">
                      <div className="flex items-center gap-3 text-left">
                        <span className="shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary text-base font-bold flex items-center justify-center">7</span>
                        <span className="font-medium text-foreground text-base md:text-lg">Can I trek to K2 Base Camp without a guide?</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 pl-13 text-base leading-relaxed">
                      No. K2 Base Camp is located within a restricted military zone. Independent trekking is entirely illegal here; you must be part of an organized tour with a licensed guide and hold a formal NOC permit.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-8" className="bg-card border border-border rounded-lg px-5 data-[state=open]:border-primary/30 transition-colors">
                    <AccordionTrigger className="hover:no-underline py-4">
                      <div className="flex items-center gap-3 text-left">
                        <span className="shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary text-base font-bold flex items-center justify-center">8</span>
                        <span className="font-medium text-foreground text-base md:text-lg">Will you help me with my visa?</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 pl-13 text-base leading-relaxed">
                      Absolutely. For all clients booking treks or expeditions with us, we issue the mandatory Letter of Invitation (LOI) and handle the submission of your NOC permit paperwork in Islamabad.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <hr className="my-16 border-border" />

              <div className="bg-card p-8 rounded-xl border border-border text-center max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Ready to start planning?</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">If you're confused about which visa you need for your specific route, reach out to our team. We handle the bureaucracy so you can focus on the climb.</p>
                <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity">
                  Contact Us for Trip Planning
                </Link>
              </div>

            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

/* 
SOURCES REFERENCED (Do Not Render):
- Official Pakistan Online Visa System (visa.nadra.gov.pk)
- Gilgit-Baltistan Department of Tourist Services (dtsgb.gog.pk)
- K2 Base Camp Treks (k2basecamptreks.com)
- Hunza Guides Pakistan (hunzaguidespakistan.com)
- KE Adventure Travel (keadventure.com)
- Saltoro Summits (saltorosummits.com)
- Trango Adventure (trangoadventure.com)
- Explore AJK (exploreajk.com)
- Raahi Retreats (raahiretreats.com)
- Real Pakistan (realpakistan.com.pk)
*/
