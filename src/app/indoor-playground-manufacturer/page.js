import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ChevronRight, Mail } from "lucide-react";
import FaqAccordion from "../components/FaqAccordion";
import QuoteButton from "../components/QuoteButton";

const PAGE_URL = "https://www.playareamanufacturer.com/indoor-playground-manufacturer";

export const metadata = {
  title: "Best Indoor Playground Manufacturer in Delhi NCR | Maskeen Toys",
  description:
    "Looking for an Indoor Playground Manufacturer in Delhi NCR? Choose Maskeen Toys for quality indoor playground equipment and customised play solutions. Contact us now!",
  keywords: [
    "Indoor Playground Manufacturer",
    "Indoor Playground Equipment Manufacturer",
    "Indoor Playground Manufacturer in Delhi NCR",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
};

const suitableFor = [
  "Preschools and nursery schools",
  "Daycare and childcare centres",
  "Shopping malls and entertainment zones",
  "Indoor kids' play centres",
  "Schools and educational institutions",
  "Residential societies and recreational spaces",
];

const approach = [
  ["Child-Friendly Designs:", "Equipment options developed with children's play activities and usability in mind."],
  ["Space-Efficient Solutions:", "Suitable product selections for both compact and larger indoor areas."],
  ["Durable Construction:", "Equipment choices intended to support regular use and long-term functionality."],
  ["Interactive Play Experiences:", "Products that encourage movement, exploration and creative activities."],
  ["Easy Maintenance:", "Practical equipment options that support routine cleaning and maintenance."],
];

const equipment = [
  ["Baby Balls", "Lightweight and colourful balls are suitable for simple interactive play activities. They encourage children to grasp, throw and explore different movements while supporting hand-eye coordination."],
  ["Ball Pool", "Ball pools create an enjoyable sensory play experience for young children. They encourage colour recognition, movement and interaction with other children, making them a popular addition to indoor play areas."],
  ["Pony Rockers", "Pony rockers provide an entertaining rocking activity that encourages children to develop balance and body coordination while enjoying independent play."],
  ["Fish Spring Rider", "Spring riders introduce a fun movement-based activity into indoor play environments. They encourage controlled movement and help children explore balance and coordination."],
  ["Bricks and Building Sets", "Building blocks and bricks allow children to experiment with shapes, structures and creative combinations. These activities encourage imagination, problem-solving and early spatial understanding."],
  ["Multi-Purpose Storage Racks", "Organised play spaces are easier to manage and maintain. Multi-purpose racks provide convenient storage for toys and play accessories, helping keep the indoor environment organised."],
];

const safety = [
  "Smooth and properly finished equipment surfaces.",
  "Rounded edges wherever appropriate to minimise impact risks.",
  "Stable installation and secure equipment positioning.",
  "Age-appropriate equipment selection.",
  "Sufficient space between different play activities.",
  "Regular inspection and maintenance of play equipment.",
  "Suitable flooring and protective surfaces around play areas.",
];

const whyChoose = [
  ["Multiple Equipment Options:", "Different play products to support varied indoor playground requirements."],
  ["Project-Based Selection:", "Equipment recommendations based on available space and intended usage."],
  ["Customisation Options:", "Solutions can be discussed according to project-specific requirements."],
  ["Suitable for Different Environments:", "Options for schools, daycare centres, malls and commercial play zones."],
  ["Customer-Focused Assistance:", "Support in understanding product requirements and selecting suitable equipment."],
];

const gallery = [
  { src: "/indoor-playground/indoor-playground-manufacturer-2.webp", alt: "Indoor playground designs with slides, ball pool and play houses by Maskeen Toys" },
  { src: "/indoor-playground/indoor-playground-manufacturer-3.webp", alt: "Indoor play area layouts with ball pools, slides and climbing frames by Maskeen Toys" },
];

const faqs = [
  ["Who is the best indoor playground manufacturer in Delhi NCR?", "Maskeen Toys offers indoor playground equipment solutions for schools, daycare centres, malls and commercial play areas in Delhi NCR. Customers can explore suitable equipment options based on their space and requirements."],
  ["What types of indoor playground equipment are available?", "Indoor playground equipment includes ball pools, pony rockers, spring riders, soft play products, building blocks, baby balls and other interactive play equipment."],
  ["How much does it cost to set up an indoor playground in Delhi NCR?", "The cost depends on the playground size, equipment selection, design, flooring and installation requirements. A customised quotation can help determine the overall project budget."],
  ["How do I choose the right indoor playground equipment manufacturer?", "Consider product quality, equipment safety, durability, available designs, customisation options and after-sales support before selecting an indoor playground equipment manufacturer."],
  ["Is indoor playground equipment suitable for schools and daycare centres?", "Yes, indoor playground equipment is suitable for schools, preschools and daycare centres. It provides children with opportunities for physical activity, creative play and social interaction."],
  ["Can an indoor playground be customised according to available space?", "Yes, indoor playground layouts and equipment selections can be planned according to available floor space, children's age groups, activity requirements and project budgets."],
  ["What safety features should indoor playground equipment have?", "Indoor playground equipment should have smooth surfaces, rounded edges, stable construction, suitable protective flooring and age-appropriate designs to support safer play activities."],
  ["What equipment is required to start an indoor kids' play area in India?", "Starting an indoor kids' play area may require ball pools, soft play structures, slides, rockers, climbing activities and interactive play equipment. The selection depends on available space, children's age groups and project budget."],
  ["What is the difference between indoor playground equipment and outdoor playground equipment?", "Indoor playground equipment is designed for enclosed spaces such as schools, malls and play centres, whereas outdoor playground equipment is intended for open areas. Both require suitable designs, durable materials and proper safety considerations."],
  ["Can I get a complete indoor playground setup for a small space?", "Yes, a small indoor playground can be planned using compact play equipment and space-efficient layouts. Equipment selection should focus on children's activities, available floor area and safe movement."],
].map(([q, a]) => ({ q, a }));

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

const h2Class = "font-love text-[#21324A] text-[26px] sm:text-[32px] md:text-[36px] leading-[1.15] mt-12 mb-5";
const pClass = "text-[15px] sm:text-[17px] text-[#4a4a4a] leading-[1.8] mb-5";

function CheckList({ items }) {
  return (
    <ul className="mb-6 flex flex-col gap-3">
      {items.map((item) => {
        const [label, text] = Array.isArray(item) ? item : [null, item];
        return (
          <li key={label || text} className="flex items-start gap-3 text-[15px] sm:text-[17px] text-[#4a4a4a] leading-[1.7]">
            <CheckCircle2 size={20} className="text-[#F15D87] shrink-0 mt-1" />
            <span>
              {label && <strong className="font-bold text-[#21324A]">{label}</strong>} {text}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

function EnquiryButton({ className = "" }) {
  return (
    <Link
      href="/contact"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#F15D87] hover:bg-[#e04578] transition text-white text-sm sm:text-base font-bold px-7 py-3 ${className}`}
    >
      <Mail size={18} />
      Enquiry Now
    </Link>
  );
}

export default function IndoorPlaygroundManufacturerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ================= TITLE STRIP + BREADCRUMB ================= */}
      <section className="bg-gradient-to-r from-[#F15D87] to-[#FDBE46] py-8 sm:py-10">
        <p className="text-center font-love text-white text-[28px] sm:text-[36px] md:text-[42px] px-5">
          Indoor Playground Manufacturer
        </p>
      </section>
      <nav aria-label="Breadcrumb" className="border-b border-[#EEE] bg-white">
        <ol className="mx-auto max-w-[1300px] px-5 sm:px-8 py-3.5 flex flex-wrap items-center gap-1.5 text-sm sm:text-base font-bold">
          <li><Link href="/" className="text-[#21324A] hover:text-[#F15D87]">Home</Link></li>
          <li><ChevronRight size={16} className="text-[#999]" /></li>
          <li><Link href="/our-products" className="text-[#21324A] hover:text-[#F15D87]">Our Products</Link></li>
          <li><ChevronRight size={16} className="text-[#999]" /></li>
          <li className="text-[#F15D87]">Indoor Playground</li>
        </ol>
      </nav>

      {/* ================= INTRO: CONTENT + IMAGE ================= */}
      <section className="bg-white py-12 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-[1300px] px-5 sm:px-8">
          <h1 className="text-center font-love text-[#21324A] text-[30px] sm:text-[40px] md:text-[48px] leading-[1.1] mb-8 sm:mb-10">
            Indoor Playground Manufacturer in{" "}
            <span className="text-[#F15D87] italic">Delhi NCR</span>
          </h1>

          <div className="grid lg:grid-cols-[1fr_400px] gap-8 lg:gap-12 items-start">
            <div>
              <p className={pClass}>
                Creating a fun, engaging, and safe indoor play environment requires the right combination of innovative designs, durable equipment and thoughtful space planning. <strong className="font-bold text-[#21324A]">Maskeen Toys is an</strong>{" "}
                <Link href="/our-products" className="font-bold text-[#F15D87] hover:underline">
                  Indoor Playground Manufacturer
                </Link>{" "}
                offering indoor play solutions for schools, play schools, daycare centres, shopping malls, activity centres and commercial play zones across Delhi NCR.
              </p>
              <p className={pClass}>
                Our indoor playground solutions are designed to encourage children to stay active, explore their creativity, and develop essential physical and social skills through play. Whether you need a compact indoor play corner or a complete play area setup, we offer equipment options that can complement different spaces, age groups and requirements.
              </p>

              <h2 className={h2Class}>Trusted Indoor Playground Manufacturer in Delhi NCR for Modern Play Spaces</h2>
              <p className={pClass}>
                Indoor playgrounds have become an important part of modern learning and recreational environments. They provide children with opportunities to enjoy physical activities even when outdoor spaces are limited. However, selecting the right equipment is essential to creating an enjoyable and functional play environment.
              </p>
              <p className={pClass}>
                At{" "}
                <Link href="/" className="font-bold text-[#F15D87] hover:underline">
                  Maskeen Toys
                </Link>
                , we focus on providing indoor playground solutions that combine engaging play experiences with practical functionality. Our product range supports different types of indoor environments, from educational institutions to commercial entertainment spaces.
              </p>
              <p className={pClass}>
                We understand that every project has different space limitations and requirements. Therefore, selecting suitable equipment, layouts and play activities is an important part of developing an effective indoor playground.
              </p>
              <p className={`${pClass} font-bold text-[#21324A]`}>Our indoor playground solutions are suitable for:</p>
              <CheckList items={suitableFor} />

              <h2 className={h2Class}>Indoor Playground Equipment Manufacturer Offering Functional and Engaging Solutions</h2>
              <p className={pClass}>
                Choosing an experienced{" "}
                <Link href="/our-products" className="font-bold text-[#F15D87] hover:underline">
                  Indoor Playground Equipment Manufacturer
                </Link>{" "}
                is important when planning a play area for children. Equipment should offer engaging activities while considering durability, usability, maintenance and age-appropriate design.
              </p>
              <p className={pClass}>
                Maskeen Toys provides different indoor play equipment options that help create interactive environments where children can enjoy multiple activities. From movement-based play products to creative and sensory play equipment, our solutions can support different play preferences.
              </p>
              <p className={`${pClass} font-bold text-[#21324A]`}>Our approach focuses on combining:</p>
              <CheckList items={approach} />
            </div>

            {/* Sticky image card, reference design jaisa */}
            <aside className="lg:sticky lg:top-28">
              <div className="relative w-full aspect-[706/1000] rounded-[20px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.12)] bg-[#FBF9F3]">
                <Image
                  src="/indoor-playground/indoor-playground-manufacturer-1.webp"
                  alt="Indoor playground manufacturer in Delhi NCR - indoor play area designs by Maskeen Toys"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-cover"
                />
              </div>
              <div className="mt-5 text-center">
                <QuoteButton label="Enquiry Now" variant="enquiry" />
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ================= EQUIPMENT CARDS ================= */}
      <section className="bg-[#FBF9F3] py-12 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-[1300px] px-5 sm:px-8">
          <h2 className="text-center font-love text-[#21324A] text-[26px] sm:text-[32px] md:text-[38px] leading-[1.15]">
            Explore Indoor Playground Equipment for{" "}
            <span className="text-[#F15D87] italic">Different Play Activities</span>
          </h2>
          <p className={`mt-5 text-center max-w-[900px] mx-auto ${pClass}`}>
            A well-planned indoor playground should offer children different ways to move, interact and learn. Maskeen Toys offers a selection of indoor play products that can be used to create engaging play environments.
          </p>
          <p className={`text-center ${pClass}`}>
            Depending on the available space and project requirements, the following equipment options can be considered:
          </p>

          <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {equipment.map(([title, desc], i) => (
              <div key={title} className="flex flex-col rounded-[18px] bg-white p-6 shadow-sm border border-[#F6D3DE]">
                <span className="flex items-center justify-center w-11 h-11 rounded-full bg-[#F15D87] text-white font-bold">
                  {i + 1}
                </span>
                <h3 className="mt-4 font-capriola text-[#21324A] text-lg sm:text-xl">{title}</h3>
                <p className="mt-2 flex-1 text-[15px] sm:text-base text-[#5F5F5F] leading-7">{desc}</p>
                <div className="mt-5">
                  <EnquiryButton className="!px-6 !py-2.5 !text-sm" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SAFETY + GALLERY ================= */}
      <section className="bg-white py-12 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-[1300px] px-5 sm:px-8 grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div>
            <h2 className={`${h2Class} !mt-0`}>Safety, Durability, and Space Planning for Indoor Play Areas</h2>
            <p className={pClass}>
              Safety should always be an important consideration when developing an indoor playground. Equipment selection, installation quality and regular maintenance all contribute to creating a suitable play environment.
            </p>
            <p className={pClass}>
              At Maskeen Toys, we understand the importance of considering practical safety requirements while planning indoor play spaces.
            </p>
            <p className={`${pClass} font-bold text-[#21324A]`}>Important factors include:</p>
            <CheckList items={safety} />
            <p className={pClass}>
              The final equipment selection should consider the children&apos;s age group, available space, intended usage and applicable safety requirements.
            </p>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-4">
              {gallery.map((img) => (
                <div key={img.src} className="relative aspect-[2/3] rounded-[18px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.10)]">
                  <Image src={img.src} alt={img.alt} fill sizes="(max-width: 1024px) 50vw, 320px" className="object-cover" />
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <QuoteButton />
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE + SERVING ================= */}
      <section className="bg-[#F8F5EF] py-12 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
          <h2 className={`${h2Class} !mt-0`}>Why Choose Maskeen Toys for Indoor Playground Solutions in Delhi NCR?</h2>
          <p className={pClass}>
            Finding the right indoor playground partner involves more than selecting attractive play equipment. Businesses and institutions also need suitable product options, project coordination and solutions that match their operational requirements.
          </p>
          <p className={pClass}>
            Maskeen Toys focuses on providing practical indoor playground solutions for different types of projects.
          </p>
          <p className={`${pClass} font-bold text-[#21324A]`}>What makes our approach valuable?</p>
          <CheckList items={whyChoose} />
          <p className={pClass}>
            We aim to help clients develop indoor play environments that encourage children to enjoy active, creative and interactive experiences.
          </p>

          <h2 className={h2Class}>Indoor Playground Manufacturer Serving Delhi NCR and Beyond</h2>
          <p className={pClass}>
            Maskeen Toys caters to{" "}
            <Link href="/contact" className="font-bold text-[#F15D87] hover:underline">
              indoor playground requirements across Delhi NCR
            </Link>{" "}
            and can assist with enquiries from other locations in India.
          </p>
          <p className={pClass}>
            Whether you are planning a new indoor play centre, upgrading an existing school play area or adding a children&apos;s entertainment section to a commercial property, choosing suitable equipment is an important step.
          </p>
          <p className={pClass}>
            We understand that every project comes with different expectations regarding space, equipment selection and budget. Our team can help you explore available options and identify suitable products for your requirements.
          </p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-white py-12 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-[1000px] px-5 sm:px-8">
          <div className="rounded-[24px] bg-[#FDEEF1] px-6 sm:px-12 py-10 sm:py-14 text-center">
            <h2 className="font-love text-[#21324A] text-[26px] sm:text-[32px] md:text-[36px] leading-[1.15]">
              Build an Exciting Indoor Play Space with{" "}
              <span className="text-[#F15D87] italic">Maskeen Toys</span>
            </h2>
            <p className={`mt-5 ${pClass}`}>
              A thoughtfully designed indoor playground can make any child-friendly environment more engaging and activity-oriented. From ball pools and rockers to creative building sets and other play equipment, the right combination can create an enjoyable space for children.
            </p>
            <p className={pClass}>
              If you are looking for an Indoor Playground Manufacturer in Delhi NCR, connect with Maskeen Toys to discuss your project requirements. Explore suitable indoor playground equipment options and take the next step towards creating an engaging play environment for children.
            </p>
            <div className="mt-2 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <a
                href="tel:+919811644688"
                className="inline-flex justify-center rounded-full bg-[#21324A] hover:bg-[#162336] transition text-white text-sm sm:text-base font-bold px-8 py-3"
              >
                Call +91-981-164-4688
              </a>
              <a
                href="https://wa.me/919811644688"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center rounded-full bg-[#25D366] hover:bg-[#1fb857] transition text-white text-sm sm:text-base font-bold px-8 py-3"
              >
                WhatsApp Us
              </a>
              <EnquiryButton />
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="bg-[#FBF9F3] py-12 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-[1000px] px-5 sm:px-8">
          <h2 className="text-center font-love text-[#21324A] text-[26px] sm:text-[32px] md:text-[38px]">
            Frequently Asked Questions
          </h2>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>
    </>
  );
}
