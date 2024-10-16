import qkart from "/public/image/qkart.png";
import shoeEsy from "/public/image/shoeEsy.png";
import sortingVisualiser from "/public/image/sortingVisualiser.png";
import carRental from "/public/image/carRental.png";

export const projectsData = [
  {
    id: 1,
    name: "ShoeEsy",
    description: [
      "Utilized React, Redux, and Tailwind CSS to develop a dynamic E-commerce platform, achieving a 40% improvement in load time",
      "Implemented carousels, pagination, and sidebar filters for products, boosting user navigation and engagement by 35%",
      "Integrated search suggestions with debouncing, enhancing search efficiency and increasing user satisfaction by 25%",
    ],
    code: "https://github.com/sid123honey/sidShoeEasy",
    demo: "https://sid-shoe-easy.vercel.app/",
    image: shoeEsy,
  },

  {
    id: 2,
    name: "Qkart",
    description: [
      "QKart is an e-commerce application offering a variety of products for customers.",
      "Implemented core features like authentication, shopping cart, and checkout, with a responsive UI for consistent device performance.",
      "Utilized REST APIs to dynamically load and display data from the backend server.",
    ],
    code: "https://github.com/sid123honey/sidQkart",
    demo: "https://sid-qkart-eota.vercel.app/",
    image: qkart,
  },
  {
    id: 3,
    name: "Sorting Visualiser",
    description: [
      "Sorting Visualizer is an interactive website designed to demonstrate the working mechanisms of various sorting algorithms",
      "Leveraged React.js hooks to create engaging animations and effects, enhancing the learning experience",
      "Enabled users to adjust sorting speed, array size, randomize arrays, and select from five different sorting algorithms: Merge Sort, Quick Sort, Bubble Sort, Selection Sort, and Insertion Sort",
    ],
    code: "https://github.com/sid123honey/sidSortingVisualizer",
    demo: "https://sid-sorting-visualizer.vercel.app/",
    image: sortingVisualiser,
  },
  {
    id: 4,
    name: "Car Rental",
    description: [
      "Offers seamless booking of vehicles with customizable time slots, ensuring high availability and an exceptional user experience.",
      "Revolutionized car fleet management with streamlined vehicle additions and removals, empowered by administrative control Achieved a 30% reduction in API calls to the backend, enhancing operational efficiency",
      " Payments are securely handled through integration with the Stripe API.",
    ],
    code: "https://github.com/sid123honey/CarRent",
    demo: "https://github.com/sid123honey/CarRent",
    image: carRental,
  },
];
