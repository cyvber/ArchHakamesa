import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-container" id='contact'>
        <div className="contact-header">
        <div className="header-item">
            <h1>בואו נדבר</h1>
        </div>
        <div className="header-item">
            <hr />
        </div>
        <div className="header-item">
            <p>אנא מלאו את הטופס למטה כדי ליצור קשר, אנחנו קוראים כל פנייה</p>
        </div>
        </div>


      <form className="contact-form">
        <div className="field">
          <p>שם</p>
          <input type="text" required />
        </div>

        <div className="field">
          <p>טלפון</p>
          <input type="tel" required />
        </div>

        <div className="field">
          <p>אימייל</p>
          <input type="email" required />
        </div>

        <div className="field">
          <p>הודעה</p>
          <textarea rows={5} required />
        </div>

        <button type="submit" className="submit-btn">שלח</button>
      </form>
    </div>
  );
};

export default ContactPage;
