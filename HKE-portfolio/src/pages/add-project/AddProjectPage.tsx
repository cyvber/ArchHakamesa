import React, { useState, ChangeEvent, FormEvent } from 'react';
import api from '../../api/axiosInstance';
import './AddProjectPage.css';

const AddProjectPage: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [images, setImages] = useState<File[]>([]);
  const [video, setVideo] = useState('');
  const [landSize, setLandSize] = useState<number | ''>('');
  const [houseSize, setHouseSize] = useState<number | ''>('');
  const [buildDuration, setBuildDuration] = useState('');
  const [floors, setFloors] = useState<number | ''>('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages(Array.from(e.target.files));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!title || !description || !date) {
      setMessage('אנא מלא את כל השדות הנדרשים.');
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      formData.append('date', date);
      formData.append('video', video);
      formData.append('land_size', landSize.toString());
      formData.append('house_size', houseSize.toString());
      formData.append('build_duration', buildDuration);
      formData.append('floors', floors.toString());

      images.forEach((image) => {
        formData.append('images', image);
      });

      await api.post(`/api/projects`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });


      setMessage('הפרויקט נוצר בהצלחה!');
      // Reset form
      setTitle('');
      setDescription('');
      setDate('');
      setVideo('');
      setLandSize('');
      setHouseSize('');
      setBuildDuration('');
      setFloors('');
      setImages([]);
    } catch (error: any) {
      console.error(error);
      setMessage(error.response?.data?.message || 'שגיאה ביצירת הפרויקט.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-project-container">
      <h1>הוסף פרויקט חדש</h1>

      {message && <p className={`message ${message.includes('הצלחה') ? 'success' : 'error'}`}>{message}</p>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>כותרת</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>

        <div className="form-group">
          <label>תיאור</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>

        <div className="form-group">
          <label>תאריך</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>

        <div className="form-group">
          <label>תמונות</label>
          <input type="file" multiple accept="image/*" onChange={handleImageChange} />
          {images.length > 0 && <p>נבחרו {images.length} תמונה/ות</p>}
        </div>

        {/* <div className="form-group">
          <label>וידאו (URL)</label>
          <input type="text" value={video} onChange={(e) => setVideo(e.target.value)} placeholder="https://..." />
        </div> */}

        <div className="form-group">
          <label>גודל קרקע (מ"ר)</label>
          <input type="number" value={landSize} onChange={(e) => setLandSize(Number(e.target.value))} />
        </div>

        <div className="form-group">
          <label>גודל בית (מ"ר)</label>
          <input type="number" value={houseSize} onChange={(e) => setHouseSize(Number(e.target.value))} />
        </div>

        <div className="form-group">
          <label>משך בנייה</label>
          <input type="text" value={buildDuration} onChange={(e) => setBuildDuration(e.target.value)} placeholder="למשל, 6 חודשים" />
        </div>

        <div className="form-group">
          <label>מספר קומות</label>
          <input type="number" value={floors} onChange={(e) => setFloors(Number(e.target.value))} />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? 'טוען...' : 'הוסף פרויקט'}
        </button>
      </form>
    </div>
  );
};

export default AddProjectPage;
