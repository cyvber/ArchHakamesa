import img_project1 from '../project-imgs/project1/main-img.jpg';
import img_project2 from '../project-imgs/project2/main-img.jpg';
import img_project3 from '../project-imgs/project3/main-img.jpg';
import img_project4 from '../project-imgs/project4/main-img.jpg';
import img_project5 from '../project-imgs/project5/main-img.jpg';

// project1 - 7 images
import img1_1 from '../project-imgs/project1/img1.jpg';
import img1_2 from '../project-imgs/project1/img2.jpg';
import img1_3 from '../project-imgs/project1/img3.jpg';
import img1_4 from '../project-imgs/project1/img4.jpg';
import img1_5 from '../project-imgs/project1/img5.jpg';
import img1_6 from '../project-imgs/project1/img6.jpg';
import img1_7 from '../project-imgs/project1/img7.jpg';

// project2 - 7 images
import img2_1 from '../project-imgs/project2/img1.jpg';
import img2_2 from '../project-imgs/project2/img2.jpg';
import img2_3 from '../project-imgs/project2/img3.jpg';
import img2_4 from '../project-imgs/project2/img4.jpg';
import img2_5 from '../project-imgs/project2/img5.jpg';
import img2_6 from '../project-imgs/project2/img6.jpg';
import img2_7 from '../project-imgs/project2/img7.jpg';

// project3 - 5 images
import img3_1 from '../project-imgs/project3/img1.jpg';
import img3_2 from '../project-imgs/project3/img2.jpg';
import img3_3 from '../project-imgs/project3/img3.jpg';
import img3_4 from '../project-imgs/project3/img4.jpg';
import img3_5 from '../project-imgs/project3/img5.jpg';

// project4 - 16 images
import img4_1 from '../project-imgs/project4/img1.jpg';
import img4_2 from '../project-imgs/project4/img2.jpg';
import img4_3 from '../project-imgs/project4/img3.jpg';
import img4_4 from '../project-imgs/project4/img4.jpg';
import img4_5 from '../project-imgs/project4/img5.jpg';
import img4_6 from '../project-imgs/project4/img6.jpg';
import img4_7 from '../project-imgs/project4/img7.jpg';
import img4_8 from '../project-imgs/project4/img8.jpg';
import img4_9 from '../project-imgs/project4/img9.jpg';
import img4_10 from '../project-imgs/project4/img10.jpg';
import img4_11 from '../project-imgs/project4/img11.jpg';
import img4_12 from '../project-imgs/project4/img12.jpg';
import img4_13 from '../project-imgs/project4/img13.jpg';
import img4_14 from '../project-imgs/project4/img14.jpg';
import img4_15 from '../project-imgs/project4/img15.jpg';
import img4_16 from '../project-imgs/project4/img16.jpg';

// project5 - 12 images
import img5_1 from '../project-imgs/project5/img1.jpg';
import img5_2 from '../project-imgs/project5/img2.jpg';
import img5_3 from '../project-imgs/project5/img3.jpg';
import img5_4 from '../project-imgs/project5/img4.jpg';
import img5_5 from '../project-imgs/project5/img5.jpg';
import img5_6 from '../project-imgs/project5/img6.jpg';
import img5_7 from '../project-imgs/project5/img7.jpg';
import img5_8 from '../project-imgs/project5/img8.jpg';
import img5_9 from '../project-imgs/project5/img9.jpg';
import img5_10 from '../project-imgs/project5/img10.jpg';
import img5_11 from '../project-imgs/project5/img11.jpg';


export interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  images_array: string[];
  video: string;
  created_at: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "Modern Villa",
    description: "תכנון וייצוב וילה מודרנית עם קווים נקיים, פתחים רחבים, ועיצוב פנים מרהיב שמתאים למשפחה צעירה.",
    image: img_project1,
    images_array: [img1_5, img1_6],
    video: "",
    created_at: "2024-04-25",
  },
  {
    id: 2,
    name: "Urban Apartment",
    description: "שדרוג דירת מגורים עירונית תוך שילוב אלמנטים מודרניים עם תחושת חום וביתיות.",
    image: img_project2,
    images_array: [],
    video: "",
    created_at: "2024-04-24",
  },
  {
    id: 3,
    name: "Office Renovation",
    description: "עיצוב מחדש של משרד תוך מיקוד בנוחות, פונקציונליות ומראה מקצועי ונקי.",
    image: img_project3,
    images_array: [img2_1, img2_2, img2_3, img2_4, img2_5, img2_6, img2_7],
    video: "",
    created_at: "2024-04-23",
  },
  {
    id: 4,
    name: "Luxury Penthouse",
    description: "עיצוב פנטהאוז יוקרתי עם דגש על אלגנטיות, שימוש בחומרים איכותיים ונוף פנורמי.",
    image: img_project4,
    images_array: [
      img4_1, img4_2, img4_3, img4_4, img4_5, img4_6, img4_7, img4_8,
      img4_9, img4_10, img4_11, img4_12, img4_13, img4_14, img4_15, img4_16,
    ],
    video: "",
    created_at: "2024-04-22",
  },
  {
    id: 5,
    name: "Family House Redesign",
    description: "פרויקט חידוש בית משפחתי עם פתיחת חללים ויצירת קשר חזק יותר בין החוץ לפנים.",
    image: img_project5,
    images_array: [
      img5_1, img5_2, img5_3, img5_4, img5_5, img5_6,
      img5_7, img5_8, img5_9, img5_10, img5_11,
    ],
    video: "",
    created_at: "2024-04-21",
  },
  {
    id: 6,
    name: "Family House Redesign",
    description: "פרויקט חידוש בית משפחתי עם פתיחת חללים ויצירת קשר חזק יותר בין החוץ לפנים.",
    image: img3_2,
    images_array: [
        img3_1, img3_3, img3_4, img3_5, img1_1, img1_2, img1_3, img1_4, img1_7,
    ],
    video: "",
    created_at: "2024-04-21",
  },
];
