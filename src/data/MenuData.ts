interface TreatmentData {
  name: string;
  price: string;
  coursePrice?: string;
  description: string;
  duration: string;
  learnMoreLink: string;
}

const MenuFacialsData: Array<TreatmentData> = [
  {
    name: "Microneedling",
    price: "£130",
    coursePrice: "£650 course of 6",
    description:
      "Microneedling treatment uses small needles to penetrate the skin, triggering the body’s natural healing response, resulting in the production of collagen-rich tissue. The new skin tissue results in skin that is smoother, firmer & improved texture & tone. This treatment is particularly successful for reducing scarring, fine lines & wrinkles.",
    duration: "(90 Mins)",
    learnMoreLink: "Learn more",
  },
  {
    name: "Mesolift",
    price: "£75",
    coursePrice: "£400 course of 6",
    description:
      "Mesolift treatment is like a ‘work out’ for your face & neck combining microcurrent & electroporation techniques. Microcurrent contours, lifts & tones facial muscles through stimulating collagen production. Electroporation pushes hyaluronic acid into the dermis layer of the skin providing deep hydration & improved plumpness. This non-invasive treatment has instant results; a course is recommended.",
    duration: "(60 Mins)",
    learnMoreLink: "Learn more",
  },
  {
    name: "Radio frequency",
    price: "£75",
    coursePrice: "£400 course of 6",
    description:
      "This non-surgical anti-ageing treatment has instant results. Radio frequency is used to lift, tighten & tone the contours of the face & neck. Increased blood flow simulates the production of collagen & elastin. Vacuum massage & light therapy are used to improve lymphatic drainage as well as overall skin health. We recommend a course for long-lasting results.",
    duration: "(60 Mins)",
    learnMoreLink: "Learn more",
  },
  {
    name: "High frequency",
    price: "£55",
    coursePrice: "£300 course of 6",
    description:
      "High frequency electrical currents simulate blood flow & oxygen to the skin, which encourages healthy cell function and skin healing. This antibacterial effect removes toxins, calms inflammation, prevents stubborn acne, shrinks enlarged pores, while improving overall skin complexion. Regular treatments are recommended for problematic skin.",
    duration: "(45 mins)",
    learnMoreLink: "Learn more",
  },
  {
    name: "Therapy facial",
    price: "£55",
    description:
      "Ultimate relaxation facial involves a cleanse, deep exfoliation and full face, neck and shoulder massage. Leaving the skin nourished with a clear, well-hydrated complexion.",
    duration: "(45 Mins)",
    learnMoreLink: "Learn more",
  },
  {
    name: "Vitamin C Boost",
    price: "£75",
    description:
      "Our advanced Vitamin C boost facial targets early signs of ageing & uneven pigmentation. The maximum vitamin c concentration levels are absorbed into the skin to strengthen the skins collagen & elastin. Skin is left feeling replenished with a youthful glow.",
    duration: "(45 Mins)",
    learnMoreLink: "Learn more",
  },
  {
    name: "Nano Needling",
    price: "£95",
    description:
      "An innovative, non-invasive transdermal delivery system designed to resurface and to rejuvenate the skin for optimum results in various skin disorders",
    duration: "(55 Mins)",
    learnMoreLink: "Learn more",
  },
  {
    name: "Celluma",
    price: "£50",
    description:
      "A light therapy treatment that kickstarts cellular performance which in turn, heals imperfections on the skin such as acne, fine lines, wrinkles and much more.",
    duration: "(30 Mins)",
    learnMoreLink: "Learn more",
  },
];

const MenuResurfacingData: Array<TreatmentData> = [
  {
    name: "Ageing",
    price: "£75",
    coursePrice: "£400 course of 6",
    description:
      "Active & effective skin resurfacing solutions to treat signs of ageing such as photo-ageing, pigment changes, dull shallow appearance, superficial & medium expression lines.",
    duration: "(40 Mins)",
    learnMoreLink: "Learn more",
  },
  {
    name: "Chronic Redness",
    price: "£75",
    coursePrice: "£400 course of 6",
    description:
      "An active and effective restoration treatment for chronic redness & rosacea-prone skin. Specifically formulated with anti-microbial activity to help reduce redness & prevent relapses.",
    duration: "(40 Mins)",
    learnMoreLink: "Learn more",
  },
  {
    name: "Mela",
    price: "£75",
    coursePrice: "£400 course of 6",
    description:
      "Targets hyperpigmentation. The unique pHformula powerclay formula resurfacing treatment is designed to reduce the accumulation of epidermally located melanin.",
    duration: "(40 Mins)",
    learnMoreLink: "Learn more",
  },
  {
    name: "Acne",
    price: "£75",
    coursePrice: "£400 course of 6",
    description:
      "The unique active ingredients in the pHformula acne solutions are specifically formulated to correct the main acne manifestations such as comedones, papules & pustules.",
    duration: "(40 Mins)",
    learnMoreLink: "Learn more",
  },
];

const MenuBodyData: Array<TreatmentData> = [
  {
    name: "Radio Frequency",
    price: "£75",
    coursePrice: "£400 course of 6",
    description:
      "Radio frequency technology stimulates collagen production to improve skin texture and reduce stubborn localized fat & cellulite. Vacuum suction provides lymph drainage, removing toxins from the body.",
    duration: "(60 Mins)",
    learnMoreLink: "Learn more",
  },
  {
    name: "Celluma",
    price: "£50",
    description:
      "A light therapy treatment that kickstarts cellular performance which in turn heals imperfections on the skin such as acne, fine lines, wrinkles, and much more.",
    duration: "(30 Mins)",
    learnMoreLink: "Learn more",
  },
  {
    name: "Body Exfoliation",
    price: "£85",
    description:
      "The ultimate relaxation for the body, using active ingredients that are massaged into the skin to remove dead skin cells. The body is nourished with hydrating oils, leaving the skin silky, smooth & deeply moisturized. This treatment improves pigmentation concerns & the bumpy texture on the back of arms and legs known as keratosis pilaris.",
    duration: "(60 Mins)",
    learnMoreLink: "Learn more",
  },
  {
    name: "Callus Foot Peel",
    price: "£40",
    description:
      "Revitalizing foot treatment providing extra care & attention by removing hard callused skin & adding moisture.",
    duration: "(30 Mins)",
    learnMoreLink: "Learn more",
  },
  {
    name: "Add-on Luxury Pedicure with Polish",
    price: "£25",
    description:
      "Enhance your treatment with a luxury pedicure that includes a fresh polish application.",
    duration: "(Varies)",
    learnMoreLink: "Learn more",
  },
];

export { MenuFacialsData, MenuResurfacingData, MenuBodyData };
