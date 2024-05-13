import imgForYou from "./assets/4you/foryou.jpg";
import stepImage1 from "./assets/step1.svg";
import stepImage2 from "./assets/earthquake.jpg";
import stepImage3 from "./assets/step1.svg";
import stepImage4 from "./assets/seismic.jpg";
import stepImage5 from "./assets/building.jpg";
import stepImage6 from "./assets/experts.jpg";
import stepImage7 from "./assets/pusrchase.svg";

export const houses = [
  {
    id: 1,
    img: imgForYou,
    name: "RC 4YOU",
    cost: "30.000.000tg",
    address: "Rozibakiyeva",
    rating: "4.9",
    description: " Разработкой концепта 4YOU занималась известная американская компания Ayenk – и им удалось собрать воедино изящный дизайн зданий и ландшафта, соединив его с удобными решениями для комфортной жизни внутри комплекса. Цена жилого комплекса завышена, но при этом ЖК является удобным, новым и комфортным для жильцов. В плане сейсмоустойчивости угрозы жилой комплекс в порядке, хотя ЖК находится ближе к горам, этот факт был взять и построили надежную основу ЖК. Рядом находятся госучреждения в которые можно будет пойти при случае землетрясения.",
    images: [
      {
        original: imgForYou
      },
      {
        original: imgForYou
      },
      {
        original: imgForYou
      },
      {
        original: imgForYou
      },
    ]
  },
  {
    id: 2,
    img: imgForYou,
    name: "RC AnotherName",
    cost: "40.000.000tg",
    address: "AnotherAddress",
    rating: "4.5",
    images: [
      {
        original: imgForYou
      },
      {
        original: imgForYou
      },
      {
        original: imgForYou
      },
      {
        original: imgForYou
      },
    ]
  },
  {
    id: 3,
    img: imgForYou,
    name: "RC DifferentName",
    cost: "25.000.000tg",
    address: "DifferentAddress",
    rating: "4.8",
    images: [
      {
        original: imgForYou
      },
      {
        original: imgForYou
      },
      {
        original: imgForYou
      },
      {
        original: imgForYou
      },
    ]
  },
  {
    id: 4,
    img: imgForYou,
    name: "RC NewName",
    cost: "35.000.000tg",
    address: "NewAddress",
    rating: "4.7",
    images: [
      {
        original: imgForYou
      },
      {
        original: imgForYou
      },
      {
        original: imgForYou
      },
      {
        original: imgForYou
      },
    ]
  },
  {
    id: 5,
    img: imgForYou,
    name: "RC SomeName",
    cost: "28.000.000tg",
    address: "SomeAddress",
    rating: "4.6",
    images: [
      {
        original: imgForYou
      },
      {
        original: imgForYou
      },
      {
        original: imgForYou
      },
      {
        original: imgForYou
      },
    ]
  },
  {
    id: 6,
    img: imgForYou,
    name: "RC Aisulu",
    cost: "30.000.000tg",
    address: "Rozibakiyeva",
    rating: "4.9",
    images: [
      {
        original: imgForYou
      },
      {
        original: imgForYou
      },
      {
        original: imgForYou
      },
      {
        original: imgForYou
      },
    ]
  },
  {
    id: 7,
    img: imgForYou,
    name: "RC DifferentForYou",
    cost: "45.000.000tg",
    address: "AnotherRozibakiyeva",
    rating: "4.4",
    images: [
      {
        original: imgForYou,
      },
      {
        original: imgForYou
      },
      {
        original: imgForYou
      },
      {
        original: imgForYou
      },
    ]
  },
];

export const coordinates = [
  {
    lat: 43.199888,
    lng: 76.893196,
  },
  {
    lat: 43.225338, 
    lng: 76.905883,
  },
  {
    lat: 43.234129, 
    lng: 76.958468,
  },
  {
    lat: 43.150665,
    lng: 77.065144,
  },
  {
    lat: 43.208714,
    lng: 76.668114,
  },
  {
    lat: 43.246051,
    lng: 76.858409,
  },
]

export const tutor = [
  {
    img: stepImage1,
    title: "Explore the Interactive Map:",
    content: "Access the ELAM platform and engage with the interactive map feature. Use it to explore different areas where you're considering buying a house. Zoom in and out to view specific details about each location."
  },
  {
    img: stepImage2,
    title: "Monitor Real-Time Earthquakes",
    content: "Stay updated on recent seismic activity by using ELAM's real-time earthquake monitoring feature. Check for recent earthquakes in your target areas and note their frequency and intensity."
  },
  {
    img: stepImage3,
    title: "Analyze Specific Addresses",
    content: "Enter the address of the property you're interested in into the ELAM platform. Allow ELAM to analyze the seismic risk associated with that location. Review the detailed insights provided, including historical earthquake data and proximity to fault lines."
  },
  {
    img: stepImage4,
    title: "Assess Seismic Safety",
    content: "Evaluate the seismic safety of each potential property based on the data provided by ELAM. Consider factors such as historical earthquake frequency and intensity, as well as the proximity to fault lines."
  },
  {
    img: stepImage5,
    title: "Investigate Building Codes and Regulations",
    content: "Research the building codes and regulations in the area where you're considering buying a house. Ensure that properties comply with seismic safety standards and have undergone necessary seismic retrofitting."
  },
  {
    img: stepImage6,
    title: "Consult with Experts",
    content: "Seek advice from real estate agents, structural engineers, or local authorities knowledgeable about seismic risks. They can provide valuable insights and help you make informed decisions."
  },
  {
    img: stepImage7,
    title: "Make a Secure Purchase",
    content: "Use the insights gathered from ELAM and expert consultations to prioritize properties in safe seismic zones. Proceed with confidence in your decision to buy a house, knowing that you've taken proactive steps to ensure its safety in the event of an earthquake."
  },
]