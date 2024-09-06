import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";

export const CarouselContent = [
  {
    id: 1,
    content: () => <Project1 />,
  },
  {
    id: 2,
    content: () => <Project2 />,
  },
  {
    id: 3,
    content: () => <Project3 />,
  },
];
