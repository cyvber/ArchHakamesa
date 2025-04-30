import exterior from '../icons/exterior.png'
import worker from '../icons/worker.png'
import interior from '../icons/interior.png'
import visual from '../icons/3dvisual.png'
import blueprint from '../icons/blueprint.png'
import management from '../icons/project-management.png'
import b_changes from '../icons/blueprint-change.png'


export interface Service {
    name: string;
    description: string;
    image: string;
}
  
export const services: Service[] = [
    {
      name: "עיצוב חוץ",
      description: "תכנון חזיתות מרשימות, מרפסות, וחללי חוץ מרהיבים.\nהתאמת עיצוב המבנה לסביבה ולסגנון החיים של הלקוח.",
      image: exterior,
    },
    {
      name: "עיצוב פנים",
      description: "יצירת חללי פנים פונקציונליים, אסתטיים ונעימים.\nשילוב בין סגנון אישי לניצול חכם של כל מטר בבית.",
      image: interior,
    },
    {
      name: "הדמיות תלת מימד",
      description: "המחשה ויזואלית מתקדמת של פרויקטים לפני ביצוע.\nהצגת העיצוב הסופי ללקוח בצורה ברורה ומוחשית.",
      image: visual,
    },
    {
      name: "תכנוית עבודה",
      description: "תכנון מוקפד של תשתיות, חללים ופונקציות במבנה.\nשרטוט מפורט המיועד להגשה, בנייה והיתרי בנייה.",
      image: blueprint,
    },
    {
      name: "פיקוח בניה",
      description: "ביקורות תקופתיות לאיכות העבודה והקפדה על סטנדרטים.\nאיתור בעיות בשטח ומענה מיידי לצורך המשך עבודה תקינה.",
      image: worker,
    },
    {
      name: "ניהול פרויקטים",
      description: "ליווי כולל של הפרויקט משלב התכנון ועד למסירה.\nתיאום בין גורמים מקצועיים, עמידה בלוחות זמנים ובקרה על איכות הביצוע.",
      image: management,
    },
    {
      name: "שינויי דיירים",
      description: "התאמות אישיות בתכנון הדירה לפי בקשת הלקוח.\nשינויים בחלוקה הפנימית, נקודות חשמל, אינסטלציה וגמרים – עוד במהלך הבנייה.",
      image: b_changes,
    },    
];
