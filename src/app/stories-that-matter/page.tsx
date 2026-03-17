"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Heart, ChevronDown, ChevronUp, Sparkles } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const stories = [
  {
    name: "Cori H.",
    title: "Mentoring Elementary Kids",
    paragraphs: [
      '"Do you enjoy service?" "Do you enjoy working with kids?" When asked these questions, I answered yes to both. The mentor program was my chance to get experience working with a girl who spoke English as a second language, as well helping her with her homework and being her friend. I was so excited to be a part of this program and give back to my community. I filled out the paperwork, got my references and was introduced to Yarita, who I love working with.',
      "When I walk into Barbara R. Morgan Elementary School to meet with Yarita, I feel a sense of satisfaction, knowing that I am changing her life. Even if I am not changing the world, I am impacting Yarita's world. I may be there to help her with math and reading, but most of all, I am there to be her friend.",
      "This kind of community service wasn't new to me, but I had never had the opportunity to work with just one child. Although I have only met with Yarita a few times, we already have a strong bond. When I walk into her classroom, not only does Yarita hug me, but also all her friends. The other day at lunch, they were arguing over who got to be my second, third, and fourth little buddy. They all wanted me to be their mentor, and they all spoke English as a second language. This interaction with young third grade girls has changed my perspective on service. I don't have to be helping a whole bunch of people to be making an impact. Even just helping one little girl can make a bigger impact than I thought.",
      "Another important way this program has been meaningful to me, is because I want to make it my career. Ever since I was young, I have had a special connection with children. I interact very well with them and they seem to be drawn to me. Although it can be hard to work with little kids, I never tire of it and always leap at a chance to babysit, help with homework, or play on the playground with them. When I go to college, I want to study early childhood development and education, and hopefully get a certificate in special education.",
      "Working with Yarita has opened my eyes to the perks of being a teacher. I know it can be tiring, but it is so fulfilling. I have realized how much I have and can help Yarita in the future. I have realized that she needs me, and I have realized that I am changing her life, even if it's just in a small way. Helping her has been so meaningful and I can't wait for the rest of the year to be there for her and make life and school just that much easier for her.",
    ],
  },
  {
    name: "Niayla B.",
    title: "Starting My Own Representation Organization",
    paragraphs: [
      "Having a lack of representation throughout my early years in school has contributed to who I am today. I felt insecure about my identity, and bullying was part of my high school life for the first year and a half.",
      "Although I have never struggled with access to a support system outside of school, always having my mom and dad encouraged me to do more and do better. Both are continuously expressing how important it is to persevere through any struggles I might face and help others who don't have access to the same.",
      "Going to a predominantly white school always caused me to be treated differently, having different features, different hair. With a little bit of a push, my high school created the Student Success Center, which focused on representation for People of Color (POC).",
      "While joining finally gave me that sense of community, the school's lack of commitment to real change still had a sizable effect on me mentally. I realized the impact of the lack of representation on POC in the public school system, discouraging many from prioritizing their education. The strong support I received from my family inspired me to build a community and raise awareness of organizations' importance like these.",
      'My new confidence urged me to start "Young Womxn of Color," a group for cis and trans women. Our organization facilitated meetings that focused on prioritizing mental health, setting educational goals, and discussing how to support one another. We concentrated on issues affecting our community to help others from diverse backgrounds without access to a support system, who feel the implications of a lack of social community and immense pride. What I was doing was outside of myself, and in the process, it helped me grow as a person. I gained confidence, a sense of community, leadership, and community skills.',
      "My experiences these last few years have shown me the importance of representation. I will use the lessons I have learned along the way to continue to advocate for safe spaces for all students. I want to use college as a stepping stone to reach my dreams and realize my full potential. The opportunity to attend an institution with this scholarship would help me reach my goals without the excess amount of financial stress, which is why POC do not continue their dreams through higher education. I will work hard not only for myself but also for others and continue to advocate and support those that society doesn't always favor. Being bullied made me feel like my differences were a weakness- now, those differences are my strengths.",
    ],
  },
  {
    name: "Sandeep S.",
    title: "Leaders of Consequence",
    paragraphs: [
      "There is nothing poetic about growing up in the inner-city. Being a child of two immigrant laborers, I learned early on the fragility of the manufacturing industry during recessions and natural disasters. Cyclical unemployment resulted in years of Welfare, Food Stamps and learning the importance of ration and 'hand-me downs'. Although skilled, an evolving economy marginalized millions likes my parents into limited opportunities in one of the largest supply chain cities of Houston. It was the 'pay it forward' attitude of neighbors that helped guide my professional journey and instill a commitment to pursue systemic solutions for communities like mine.",
      "The last few years as an entrepreneur were thrilling, but also highlighted why I need a MBA to achieve global impact I envision throughout my career. In 2017, Hurricane Harvey demolished my hometown of Houston and a large part of our start-up, Wonderous. Following a successful launch, we immediately faced a tough decision: salvage our manufacturing facilities or support our labor force. As an entrepreneur, there are no clear resources on responding to a natural disaster; and, how leaders should steer their brands during a crisis. We knew we had to make a tough choice between the company and our community; and ultimately, our decision would impact our overall growth.",
      "This was the moment when we became Leaders of Consequence. We embraced the role of being a change agent for an industry that historically relegated our community. We spent weeks working closely with the broader City of Houston to provide Federal Funding to help support wages to our employees, secured resources from the Red Cross and Houston Food Bank, and cleared out our corporate facilities to provide temporary housing for our displaced employees. Throughout this process, we learned a great deal about leading through a crisis; qualities which will be more imperative than ever in the aftermath of Covid-19. More importantly, our response allowed us to achieve the goal of being a consumer brand that symbolized stability and valued social responsibility.",
      "Being at the global hub of business will bring connectivity to the formative experiences that have shaped my journey. A MBA will accelerate my goal to lead sustainable practices and innovative technologies which benefit depressed manufacturing regions for global consumer brands. Specifically, I wish to focus on scale-up and innovative brand management strategies to help consumer brands adopt social responsibility as core to their mission. In the long term, I dream to reconnect to my entrepreneurial roots by becoming CEO of a sustainable Direct to Consumer brand that utilizes locally sourced materials and emerging technologies to improve global manufacturing processes. Ultimately, I aspire to empower communities, especially their skilled workers, to leverage the technologies of a new supply chain and compete in a new economy.",
    ],
  },
  {
    name: "Heidy M.",
    title: "Fundraising For Good",
    paragraphs: [
      'Walking down the empty hallway, on a late afternoon, I am confronted by my sponsor for YLPA. "Heidy, I asked the teachers around me, and they did not know anything about the fundraiser." My heartbeat quickens, and my cheeks redden with shame, burden, and guilt. I tried to give a response that would excuse the fact I only asked two teachers, but came up lost for words, and gave an awkward smile instead.',
      "Being an outcast was a norm since Elementary school, the feeling of belonging somewhere was hard for me to discover, and I hated the feeling of being alone standing in the middle of a room making eye contact with anyone to see if they stared back. So, I took the initiative in 8th grade to join YLPA, a club for young ladies. When I thought of sisterhood, I thought of a chance of building relationships with others; however, even in the club, I stood in the back letting the other members be the voice for me. I had no interests, no hobbies, no connections with the members. So, no one tried to converse with me. When I had to fundraise as part of club duties, I was taken over by anxiety as an outcast, and loathe having to fundraise because I feared the worst that people would ignore me and look at me in disdain for bothering them.",
      "However, in high school, I discovered my fondness to fundraise that I even actively participated in 7 myself. The feeling of being excluded did not appear in high school because I was at a school with people who had the same devotion to get an associate's degree, so I didn't feel like an outcast because everyone had a connection. This new environment gave me the opportunity to take a chance to participate in social activities, and so in 10th grade, I saw a poster for recruitment for a Kacie's Run club, where previously the loathed fundraiser was for the same event. I took a leap in redemption and did my first fundraiser waking up at 7 am to shout in the school hallways to buy a cup of iced coffee for $3. A sense of pride washed over me as $300 was raised. This feeling of pride led me to have a sense of belonging at school. I was no longer an outcast, I had Kacie's Run to find my place.",
      "With a buildup of confidence in having a spot in school, I took the chance to take on a role as a Kacie's Run district coordinator where I would be working with strangers. While I enjoyed the environment I had at school, I wanted to have a chance to have the experience of being independent which was something 8th grade me could not do. With this character development I found my passion. I was able to help others with my passion and I hope to continue to do so.",
    ],
  },
  {
    name: "Kaiyi Z.",
    title: "Studying to Change the World",
    paragraphs: [
      "I am a first-year doctoral student in the Department of Civil and Environmental Engineering. I have one and half-year experience in the doctoral program in Department of Environmental and Occupational Health, School of Public Health, where I learn more about health effects of individuals and populations when exposed to water pollution. I have been working with Dr. Virender K. Sharma to develop techniques to improve the safety of drinking water.",
      "More specifically, I have been studying and researching the mechanism and application of oxidation and inactivation of viruses, bacteria and toxins in water by ferrates, as well as the removal of emerging contaminants such as antibiotics, estrogens and toxic metals. We have been developed a technique to improve the safety of drinking water, and we have been looking to solve environmental problems using ferrate as a powerful oxidant.",
      "Meanwhile, this semester I found a part-time job on campus and work as a Graduate Student Diversity, Equity, and Inclusion (DEI) Programming Specialist, Graduate Assistant Non-Teaching (GANT), in the Center for Teaching Excellence (CTE). My duties are assisting CTE with the design, development, implementation, assessment, and reporting of faculty professional development in DEI in teaching and learning. My duties in CTE advances a climate of equity and inclusion in departments and at college.",
      "We coordinate with departmental academic advisors across the college to develop training and programming opportunities to support undergraduate and graduate education, as well as the professional development especially on the anti-racism topics. This semester we are taking the role in the Program ReDesign for the Department of Nutrition, besides developing the program based on their strategic plan, we also try to implement strategies to gather data and further analyze data to better understand equity, inclusion, and cultural understanding. I have been working to support and be committed to build an inclusive climate with a culture of equity and inclusion, enriching the international students' development perspectives.",
    ],
  },
  {
    name: "Zoe E.",
    title: "Community Service, Moore Than Just Coordinating",
    paragraphs: [
      "The sun beats down on our backs, and sweat streams down our arms, mingling with the fresh dirt in our garden gloves. For two years, I have organized monthly trips to the local community garden. The work is strenuous, and the payoff is not always evident, but the experience of coming together as a community of students to provide for those in need while serving the Lord is undoubtedly worthwhile.",
      "As community service coordinator, I am required to organize four hours of activities per semester. While doing the bare minimum was certainly a viable option, I found myself wanting to do more. I searched high and low for an active and engaging service project. Finally, I found the Tarrant Area Food Bank Learning Garden, a small yet mighty community garden sandwiched between three weather-beaten houses and a musty church. From the first time we served, I knew this was where I would thrive. I organize work days at the garden twice a month. In the weeks leading up to garden day, I bounce from table to table in the lunchroom recruiting new volunteers.",
      "From offers for rides to bribes of spare food from my lunch bag, anything that gets students to the garden is well worth the expense. When garden day finally arrives, we begin with the sun barely peeking out from behind the houses, and a warm mist hanging in the air. We don our garden gloves and set to work weeding, composting, watering, planting, harvesting, washing, and packaging. The work is not easy, especially with the hot Texas sun rising high above our heads, but the discomfort is ignored in light of the inspiring scene before us.",
      "Students from ages twelve to eighteen work together singing, sharing riddles, engineering new compost sifting techniques, and competing to see who can fill their baskets with freshly harvested produce the fastest. The experience is unifying. We can see that we are not there simply to meet our community service requirement. There is nothing more fulfilling than when a student, after effectively being forced into attendance, catches me in the hall and asks when the next garden day is. I love the garden.",
      "I love the community, the unification of students of different ages and backgrounds, and the working together toward a positive purpose. While we never see the produce go to the families in need, it is enough to experience the outpouring of spirituality and growth born out of our service to others. I have been blessed with the opportunity to bring acts of service into the lives of others. During high school, I have cultivated many relationships rooted in service and loving my neighbor. These acts are more than a prerequisite for graduation. They are an opportunity to share my light with others so that the Lord may be glorified.",
    ],
  },
  {
    name: "Alexis R.",
    title: "Travelling For Good",
    paragraphs: [
      "Since I was young, I started dreaming about becoming a veterinarian. As I've grown older, I've been volunteering at numerous facilities that get me closer to a deeper understanding of caring for animals. Recently, I've come across an opportunity to volunteer at a facility called New Heights Therapy. New Heights Therapy is a horse facility in Folsom, Louisiana that brings together people of all ages and backgrounds living with autism, cancer, depression, anxiety, paralysis, mental illnesses, and veterans who suffer from post-traumatic stress disorder. It is a thriving non-profit facility that is volunteer-based and runs solely off of donations. Working each weekend with the team has brought me an experience that will forever touch me.",
      "In our lessons, we teach our patients how to safely and confidently ride horses, coordinating their lessons with each patient's specific needs. We offer many types of lessons that are each done in different areas of the facility, which include: the nature trail ride, the front house trail, the arena lessons, three open yard areas catering to various types of lessons, and a polo field for experienced and skilled riders. We have different therapy exercises set up within these lessons.",
      "I often volunteer every Saturday with the same little boy: Nathan. He is about nine years old and is autistic. When he first started, we often brought him through the nature trail or the front house trail. We had Nathan point out the different shapes and colors of things he saw along the way, and taught him the names of different brushes we use for the horses. Recently we have been seeing great improvements from Nathan, so we started bringing him into the arena. At this point, we began teaching him the numbers one through nine, left and right, and how to start steering the horse without assistance. He has made great improvements.",
      "This past Saturday was an immensely heartwarming experience for me and the crew as we watched Nathan take his first big lead and ride the horse all on his own. When I first let go of the horse, Nathan was scared, but as he began walking the horse forward, we could all see the excitement creeping onto his face as he gained confidence and independence.",
      "This experience I have had these past few months with Nathan has brought me so much joy. I find myself looking forward to seeing Nathan each week and watching him grow in all directions: physically, mentally, and what Nathan loves to brag about most, his height. I never thought I would find fulfillment and happiness through helping another, but from my experience with Nathan and New Heights Therapy, I will forever be left with a lasting impact.",
    ],
  },
  {
    name: "Katrina M.",
    title: "My Time In a Refugee Camp",
    paragraphs: [
      "One of the most life-changing times in my life started in August of 2017. I was 20 years old and was struggling to find a calling and purpose for my life. Through random mutual friends, I ended up flying to the Island of Lesbos Greece, where I spent the next 1.5 years volunteering off and on in a refugee camp. Camp Moria was an old military base converted into a facility to house migrants who had made the 3-mile journey across the Aegean sea from Turkey to Greece for security and a future. The trip was dangerous, the Turkish police would stop and beat refugees if they caught them attempting to cross the sea. It was here that I met some of the most caring, kind, and giving people I could ever hope to meet.",
      "Most of the refugees made it across the sea with only backpacks containing all of their remaining possessions. They had almost nothing. It wasn't uncommon for people to have no more than 1 set of clothing and only flip-flops as footwear. The food they were given was terrible, undercooked rice, potatoes, and meat about 3 times a week. Moria was unique in that it was run primarily by NGO's such as Euro Relief, the organization I volunteered with. At times there were up to 60 different nationalities and 30 languages in camp making it quite difficult to communicate.",
      "I would often go to people's tents to distribute blankets, clothing, or help to communicate with authorities. I was always invited in to drink tea, eat whatever food they were having, and hear about their lives back in their countries. I witnessed families of 6 living in a 10 X 10-foot space, move over and condense their belongings because they realized that others needed a place to sleep. I watched communities form to support others in their grief.",
      "I saw fathers working hard to care for their families when they had no money and no way to change their circumstances, it was heartbreaking. Blankets were given to keep children warm at night. Diapers were given to newborn babies living in tents. Safe places were created for women to share the difficulties they were experiencing. I don't want to give the impression that we were out there saving everyone, we weren't. There were so many needs that we couldn't meet.",
      "Later on, in my time on Lesvos, I transitioned into a caseworker for vulnerable women. This included giving safety talks to single women, looking into trafficking problems that arose in daily life in the camp, and reporting what I found to the Greek Social worker and the UN offices. It was the hardest thing I had ever done. These women came from Afghanistan, Congo, Cameroon, Syria, Somalia, Ghana, and others. The stories they would tell about their countries were horrifying, those things should never happen to anyone.",
      "Their stories and experiences have changed my life forever. I am currently pursuing a degree in Human Services. So many of the people in Camp Moria never had anyone to be their voice. They literally had no one in the world that cared for them. I think it is easy to put it in a box and say it is a 3rd world problem, but I see the same thing happening in America. There are so many people on their own who need to be seen and heard. I want to be in a career where I can interact with those who feel forgotten and show them love and compassion.",
    ],
  },
  {
    name: "Cannon B.",
    title: "Voices Can Be Heard And Read",
    paragraphs: [
      "Meaningful experiences are something that one must seek out the majority of the time in my experience, and to help other people along the way is not always an easy feat. However, once a way is discovered to do both, the feelings of self-fulfillment are immeasurable. For me, one of my most meaningful experiences that allowed for me to help other people was my part in the creation of our school's literary magazine.",
      'Two years ago, me and 5 colleagues decided to create a literary magazine for our school. This was a very ambitious project for a group of sophomores with no experience in design, marketing, or publishing, and it was hard for us to visualize a final product since it had no predecessor. But, undaunted, we talked for days about all the possibilities, all the ways that we could make everything work out in the face of our inexperience. We were successful too \u2013 with me writing a grant application for funds and being an idea powerhouse, some of the others working with the yearbook team for design, and the remaining few focusing on getting submissions and marketing the finished product. We called it "Voices" and holding the finished product in our hands for the first time was an incredible experience. It was a physical result of all our hard work, and though it was not yet perfect it was beautiful.',
      "But the impact of Voices was not limited just to just our little production team. What really made the experience something I will always cherish was the fact that we were able to help our peers get their words out there for other people to see and appreciate. We inspired them to create and gave them an opportunity to get published at no cost. Filling the pages of the first Voices magazine is everything from poetry to photography to hand-drawn comic strips. Whatever students wished to share with their peers had a fair shot at making it in, and this was something that a lot of people were vocally very grateful for.",
      "It was the enabling of these opportunities for people around me and what they did with it that made me feel like I had truly helped create something worth my time and effort. What we had done had the potential to impact someone's life in a positive way, even just a small amount, and even if that someone was one of my club mates pouring their all into its creation along with me.",
    ],
  },
  {
    name: "Sara C.",
    title: "The Power of Forgiving",
    paragraphs: [
      "Growing up, I felt like a ping pong ball, bouncing from country to country. A Korean-American adoptee, I was raised as a missionary kid in the Netherlands, the US, and Scotland. And I experienced the hardships and heartaches that can come with growing up among worlds. I especially struggled to fit in and to find my identity. At the time, I didn't realize that my struggles could become a source of healing for others. But one experience as a counselor at summer camp changed all that.",
      "My cabin consisted of seven middle-school campers: two African American girls, three Chinese girls, and two girls from an underprivileged Cambodian neighborhood in inner-city Philadelphia. Because they were so different racially, culturally, and economically, my campers sectioned themselves off into little ethnic groups and would barely talk to each other. Throughout the week, I tried to get them to leave their comfort zones and connect with each other, without much success.",
      'On the last night of camp, during our evening cabin devotion, we discussed the question, "Who do you struggle to forgive and why?" The campers gave superficial answers, including, "My parents, but then I forgive them right away," and "I don\'t really hold grudges."',
      "After several similar answers, one of the other counselors spoke. She told us that she resented her older siblings because her parents favored them over her. Eventually, she started crying and said that she didn't feel like she was good enough. Touched by her story, I decided to share about my adoption experience. I explained that I felt resentment toward both my birth parents and adoptive parents. I also shared that I wished my birth mother had kept me. That's because, despite having never met her, I missed her so much. After sharing my story, I found myself reaching for the box of tissues.",
      "As I looked around the small circle again, I realized that some of the girls who had already given shallow answers started to cry. Then they began answering the question again. One girl said that she was frustrated with her father because he smoked; and she was scared that he was would die. Another shared that she was upset with her dad because he traveled to China so often that she hardly saw him.",
      "As the stories continued, we found ourselves sobbing, for ourselves and for each other. We all began giving each other hugs and reassurances. The moment we started sharing our deepest thoughts, everything changed. The next morning, as we packed up and cleaned the cabin, the atmosphere was different. Everyone pitched in as we sang at the top of our lungs to Taylor Swift songs, a sign that we had all bonded and truly connected.",
      "That week changed my life. I had never connected emotionally on such a deep level with anyone before, especially with people I hardly knew. And I'm thankful that I could significantly impact those girls' lives, giving them a safe space to be themselves and helping them connect with each other.",
    ],
  },
];

const pastelColors = [
  "from-blue-50 to-indigo-50 border-blue-200/50",
  "from-rose-50 to-pink-50 border-rose-200/50",
  "from-amber-50 to-yellow-50 border-amber-200/50",
  "from-emerald-50 to-green-50 border-emerald-200/50",
  "from-violet-50 to-purple-50 border-violet-200/50",
  "from-cyan-50 to-sky-50 border-cyan-200/50",
  "from-orange-50 to-red-50 border-orange-200/50",
  "from-teal-50 to-emerald-50 border-teal-200/50",
  "from-fuchsia-50 to-pink-50 border-fuchsia-200/50",
  "from-lime-50 to-green-50 border-lime-200/50",
];

function StoryCard({ story, index }: { story: (typeof stories)[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const previewParagraphs = story.paragraphs.slice(0, 2);
  const remainingParagraphs = story.paragraphs.slice(2);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className={`bg-gradient-to-br ${pastelColors[index]} border rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden card-glow`}
    >
      <div className="p-6 sm:p-8">
        <div className="flex items-start gap-4 mb-5">
          <motion.div
            className="flex-shrink-0 w-11 h-11 rounded-full bg-white/80 flex items-center justify-center shadow-sm"
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Heart className="h-5 w-5 text-primary" />
          </motion.div>
          <div>
            <span className="text-sm font-semibold text-primary">{story.name}</span>
            <h3 className="text-lg font-bold text-foreground leading-snug">
              &ldquo;{story.title}&rdquo;
            </h3>
          </div>
        </div>

        <div className="space-y-3">
          {previewParagraphs.map((p, i) => (
            <p key={i} className="text-sm text-muted leading-relaxed">{p}</p>
          ))}
        </div>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="space-y-3 mt-3">
                {remainingParagraphs.map((p, i) => (
                  <p key={i} className="text-sm text-muted leading-relaxed">{p}</p>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {remainingParagraphs.length > 0 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-primary hover:text-primary-light transition-colors"
          >
            {expanded ? (
              <>
                Read less <ChevronUp className="h-4 w-4" />
              </>
            ) : (
              <>
                Read full story <ChevronDown className="h-4 w-4" />
              </>
            )}
          </button>
        )}
      </div>
    </motion.article>
  );
}

export default function StoriesThatMatterPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f2744] via-primary to-primary-light py-24 sm:py-32">
        <div className="absolute inset-0 dot-grid" />
        <div className="absolute top-10 right-10 w-64 h-64 bg-accent/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-primary-light/20 rounded-full blur-[60px]" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div whileHover={{ rotate: -5 }} transition={{ type: "spring" }}>
              <BookOpen className="h-14 w-14 text-accent mx-auto mb-6" />
            </motion.div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Stories That <span className="gradient-text">Matter</span>
            </h1>
            <p className="mt-5 text-lg text-white/70 max-w-2xl mx-auto">
              Featured stories from past finalists who demonstrated extraordinary sacrifice and
              compassion for others.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Stories Grid ── */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Featured Stories From Past Finalists"
            subtitle="Each story represents a unique act of selflessness and dedication to community service."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stories.map((story, index) => (
              <StoryCard key={story.name} story={story} index={index} />
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-muted text-lg mb-6">Inspired by these stories? Share yours.</p>
            <a
              href="/#apply"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-primary font-semibold px-10 py-4 rounded-full transition-all hover:-translate-y-1 shadow-lg btn-pulse text-base"
            >
              <Sparkles className="h-5 w-5" />
              Apply for the Scholarship
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
