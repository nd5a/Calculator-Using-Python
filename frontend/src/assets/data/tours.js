import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";
import tourImg08 from "../images/tour-img08.jpeg";
import tourImg09 from "../images/tour-img09.jpeg";
import tourImg10 from "../images/tour-img10.jpeg";
import tourImg11 from "../images/tour-img11.jpeg";
import tourImg12 from "../images/tour-img12.jpeg";


const tours = [
  {
    id: "01",
    title: "Westminister Bridge",
    city: "London",
    distance: 300,
    address: 'Westminster Bridge, London, Greater London, SW1A 2JH',
    price: 99,
    maxGroupSize: 10,
    desc: "The neo-Gothic Westminster Bridge connects Lambeth and Westminster. Though popular for its panoramic views, the Victorian bridge’s decorative details and cultural importance make it an attraction in its own right.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
      {
         name: "jhon doe",
         rating: 5,
       },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Bali, Indonesia",
    city: "Indonesia",
    distance: 400,
    address: 'Province of indonesia',
    price: 96,
    maxGroupSize: 8,
    desc: "Bali packs a lot into one small island— from breathtaking waterfalls like Sekumpul in the north to the white sand beaches of Nyang Nyang in the south. Whatever you’re seeking, you’ll probably find: surf-able waves in Batu Bolong, all-night clubs in Seminyak, luxury clifftop hotels in Nusa Dua, and spiritual refuges all around.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Snowy Mountains, Thailand",
    city: "Thailand",
    distance: 500,
    address: 'Khiri Nakhon 8/1 Alley, Huai Kapi, Chonburi 20000 Thailand',
    price: 76,
    maxGroupSize: 8,
    desc: "An abandoned stone and gravel quarry filled with water that appears to be snow-covered due to the white peaks around it. The canyon's water color changes with the weather, from emerald green on sunny days to almost black during the rainy season.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Beautiful Sunrise, Thailand",
    city: "Thailand",
    distance: 500,
    address: 'Doi Inthanon Chiang Mai',
    price: 85,
    maxGroupSize: 8,
    desc: "Doi Inthanon, the highest peak in Thailand at 2,565 meters, offers one of the most spectacular sunrise experiences in the country.Located in Doi Inthanon National Park, the summit is often shrouded in a sea of mist at dawn, creating a magical atmosphere as the first light pierces through the clouds. The cool mountain air and serene surroundings make it a perfect spot for nature lovers.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Nusa Pendia Bali, Indonesia",
    city: "Indonesia",
    distance: 500,
    address: 'Nusa Penida Island',
    price: 75,
    maxGroupSize: 8,
    desc: "The coral reefs around Nusa Penida are well maintained and house some of the most unique sea creatures in the whole world, providing a special experience for divers and snorkelers. All in all, those who favor nature sightseeing will totally be pleased to set foot upon this tiny paradise.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Cherry Blossoms Spring",
    city: "Japan",
    distance: 500,
    address: 'Arakurayama Sengen Park',
    price: 88,
    maxGroupSize: 8,
    desc: "Cherry blossoms are a symbol of Japan's history and philosophies, and are celebrated with centuries-old traditions. The brief appearance of the cherry blossoms is a metaphor for the fleeting nature of life. A popular tradition during cherry blossom season is hanami, where people gather to enjoy the blossoms with food and drinks, and contemplate the beauty and transience of life.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.4,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Holmen Lofoten",
    city: "France",
    distance: 500,
    address: 'Arctic Norway Islands',
    price: 79,
    maxGroupSize: 8,
    desc: "Serpentine roads, wild fjords, colourful cottage houses, sparkling blue waters and jutting mountaintops. You really are spoilt for choice when it comes to the beauty of the Lofoten islands (your Instagram will thank you). The Arctic Norway archipelago is known for its breathtaking beautiful vistas.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.7,
      },
    ],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "The Shikara",
    city: "Kashmir",
    distance: 500,
    address: 'SomeWhere',
    price: 99,
    maxGroupSize: 8,
    desc: "The shikara is a type of wooden boat found on Dal Lake and other water bodies of Srinagar in Jammu and Kashmir. Shikaras are of various sizes and are used for multiple purposes, including transportation. A usual shikara seats six people, with the driver paddling at the rear.",
    reviews: [
    ],
    avgRating: 4.5,
    photo: tourImg12,
    featured: false,
  },
  {
    id: "09",
    title: "Hohenzollern Bridge",
    city: "Cologne",
    distance: 300,
    address: 'Cologne,Germany',
    price: 99,
    maxGroupSize: 10,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
      {
         name: "jhon doe",
         rating: 5,
       },
    ],
    avgRating: 4.5,
    photo: tourImg08,
    featured: true,
  },
  {
    id: "10",
    title: "Santorini",
    city: "Greece",
    distance: 400,
    address: 'Greece,Europe',
    price: 96,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg09,
    featured: true,
  },
  {
    id: "11",
    title: "Halaeiwa",
    city: "Hawaii",
    distance: 500,
    address: 'Halaeiwa',
    price: 71,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg10,
    featured: false,
  },
  {
    id: "12",
    title: "Eiffel Tower",
    city: "Paris",
    distance: 500,
    address: 'Paris,France',
    price: 85,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg11,
    featured: true,
  }
];

export default tours;
