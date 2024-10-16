interface servicesDataType {
  img: string;
  title: string;
  price?: string;
  about?: string;
  btncontent: string;
}

const ServicesData: Array<servicesDataType> = [
  {
    img: "https://images1.livehindustan.com/uploadimage/library/2022/09/13/16_9/16_9_3/reasons_you_need_to_add_multani_mitti_to_your_skincare_regime_1663053542.jpg",
    title: "Resurfacing Treatment",
    price: "From £75 per session",
    about:
      "Resurfacing treatment  is a very simply a chemical solution that can be applied to the skin. It is designed to give a deeper exfoliation than your average at-home scrub, to help actually peel off the damaged upper layer of skin to reveal new, revitalised skin underneath.",
    btncontent: "Learn more",
  },
  {
    img: "https://newhealthcalljlt.cliniclick.ai/_next/image?url=https://api.cliniclick.ai/uploads/1568268547994.jpeg&w=3840&q=75",
    title: "Microneedling",
    price: "From £130 per session",
    about:
      "Microneedling treatment uses small needles to penetrate the skin, triggering the body’s natural healing response, resulting in the production of collagen rich tissue. The new skin tissue results in skin that is smoother, firmer & improved texture & tone. This treatment is particularly successful for reducing scaring, fine lines & wrinkles. For best results, we recommend a course of treatments combined with a resurfacing treatment to get long term results.",
    btncontent: "Learn more",
  },
  {
    img: "https://i0.wp.com/azeya.club/wp-content/uploads/2024/04/fernando-cferdophotography-Ri_PdjPWZk0-unsplash-1-1.jpg?resize=1024,683&ssl=1",
    title: "Mesolift",
    price: "From £65 per session",
    about:
      "Mesolift treatment is like a ‘work out’ for your face & neck combining microcurrent & electroporation techniques. Microcurrent contours, lifts & tones facial muscles through stimulating collagen production. Electroporation pushes hyaluronic acid into the dermis layer of the skin providing deep hydration & improved plumpness. This non invasive treatment has instant results, a course is recommended.",
    btncontent: "Learn more",
  },
  {
    img: "https://propakistani.pk/wp-content/uploads/2023/05/Mobile-women.jpg",
    title: "Looking for a certain treatment? Or result?",
    btncontent: "Arrange a callback with an expert",
  },
  {
    img: "https://5.imimg.com/data5/SELLER/Default/2024/2/386730154/GK/FK/ZD/212624506/radio-frequency-treatment-rf.jpg",
    title: "Radio Frequency",
    price: "From £65 per session",
    about:
      "This non surgical anti- ageing treatment has instant results. Radio frequency is used to lift, tighten & tone the contours of the face& neck. Increased blood flow simulates the production of collagen & elastin. Vacuum massage & light therapy are use to improve lymphatic drainage as well as overall skin health.",
    btncontent: "Learn more",
  },
  {
    img: "https://www.somareiwellness.com/wp-content/uploads/celluma-pro-3-cropped.jpg",
    title: "Celluma",
    price: "From £50 per session",
    about:
      "Celluma uses an LED light source to the tissue for therapeutic purposes. The energy is put to good use in order to boost cellular performance. Phototherapy is well-known for its healing and anti-inflammatory effects, and it has a wide range of medicinal applications. Phototherapy has been demonstrated to boost circulation, reduce wrinkles, reduce inflammation, improve skin tone, texture, and clarity, and much more.",
    btncontent: "Learn more",
  },
];

export default ServicesData;
