import Project1 from "./Project1";
import Project2 from "./Project2";

export const CarouselContent = [
  {
    id: 1,
    content: () => <Project2 />,
  },
  {
    id: 2,
    content: () => <Project1 />,
  },
];
