import Project1 from "./layout/Project1";
import Project2 from "./layout/Project2";

export const CarouselContent = [
  {
    id: 1,
    content: () => <Project1 />,
  },
  {
    id: 2,
    content: () => <Project2 />,
  },
];
