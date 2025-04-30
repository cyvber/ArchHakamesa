// import './AboutPage.css'
// import about_img from '../../assets/imgs/about-me.jpg'

// const AboutPage = () => {
//     return (
//         <div className='about'>
//             <div className="about-container">
//                 <div className="about-image fade-in"><img src={about_img} alt="" loading='lazy'/></div>
//                 <div className="about-description">
//                 Hi there! My name is Hakam Esa, and I’m excited to collaborate with you.
//                 <br/><br/>
//                 I began my journey in architecture at Bar-Ilan University in Israel, where I earned my degree and developed a strong foundation in design and creativity. 
//                 <br/><br/>
//                 I’m 26 years old and passionate about creating spaces that are both beautiful and functional.
//                 Beyond my career, I find inspiration outdoors — whether it’s through traveling, exploring new places, cooking, or spending time around horses. These experiences fuel my creativity and bring a unique perspective to every project I work on.
//                 <br/><br/>
//                 I believe that successful design starts with understanding my clients’ needs. Every project is a new opportunity to listen, collaborate, and bring visions to life. I’m committed to making the process seamless, inspiring, and tailored to each client’s goals.
//                 <br/><br/>
//                 I look forward to helping bring your next project to reality!
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AboutPage;

import './AboutPage.css'
import about_img from '../../assets/imgs/about-me.jpg'


const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-content">
      <div className="about-image">
          <img src={about_img} alt="אודות החברה" />
        </div>
        <div className="about-text">
            <p>שלום! שמי חכאם עיסא, ואני נרגש לשתף איתכם פעולה.</p>
            <p>התחלתי את דרכי בעולם האדריכלות באוניברסיטת בר-אילן בישראל, שם רכשתי את התואר שלי וביססתי יסודות חזקים בתחום העיצוב והיצירתיות.</p>
            <p>אני בן 26, והתשוקה שלי היא ליצור חללים שהם גם יפים וגם פונקציונליים. מעבר לקריירה, אני שואב השראה מהטבע — בין אם זה דרך טיולים, חקר מקומות חדשים, בישול או בילוי עם סוסים. כל חוויה כזו מזינה את היצירתיות שלי ומביאה נקודת מבט ייחודית לכל פרויקט שאני עוסק בו.</p>
            <p>אני מאמין שעיצוב מוצלח מתחיל מהבנת הצרכים של הלקוח. כל פרויקט הוא הזדמנות חדשה להקשיב, לשתף פעולה ולהגשים חזונות. אני מחויב להפוך את התהליך לנעים, מעורר השראה ומותאם אישית למטרות הלקוח.</p>
            <p>אני מצפה לעזור לכם להוציא את הפרויקט הבא שלכם לפועל!</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
