import './ContactPage.css';
import { useState } from 'react';


const ContactPage = () => {
  const [status, setStatus] = useState<null | 'success' | 'error'>(null);
  const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;;

  const onSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", accessKey || "");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      setStatus('success');
      event.target.reset();
    } else {
      setStatus('error');
    }

    // Hide message after 5 seconds
    // setTimeout(() => setStatus(null), 5000);
  };


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
          <p>להתייעצות ראשונית או קביעת פגישהּ, אנא מלאו את פרטים בטופס. נציג מטעמנו יחזור אליכם בהקדם.</p>
        </div>
      </div>

      <form onSubmit={onSubmit} className="contact-form">
        <div className="field">
          <p>שם</p>
          <input type="text" name="name" placeholder="הכנס את שמך" required />
        </div>

        <div className="field">
          <p>טלפון</p>
          <input type="tel" name="phone" placeholder="הכנס את מספר הטלפון שלך" required   dir="rtl"/>
        </div>

        <div className="field">
          <p>אימייל</p>
          <input type="email" name="email" placeholder="הכנס את כתובת האימייל שלך" required />
        </div>

        <div className="field">
          <p>הודעה</p>
          <textarea name="message" rows={5} placeholder="כתוב כאן את ההודעה שלך" required />
        </div>

        <button type="submit" className="submit-btn">שלח</button>
      </form>

      {status === 'success' && (
        <div className="form-message success">ההודעה נשלחה בהצלחה!</div>
      )}
      {status === 'error' && (
        <div className="form-message error">אירעה שגיאה בשליחת ההודעה. נסו שוב.</div>
      )}
    </div>
  );
};

export default ContactPage;
