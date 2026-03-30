import './Section7.css';
import abstractAsset from '../../assets/image/abstract-image.jpg';

export const Section7 = () => {
  return (
    <section className="industry-section">
      <div className="industry-container">
        
        {/* The Abstract Asset Layer */}
        <div className="abstract-layer">
          <img 
            src={abstractAsset} 
            alt="Floating gradient discs" 
            className="abstract-img" 
          />
        </div>

        {/* Text Content */}
        <div className="industry-text-box">
          <h1 className="industry-heading">
            The future of your<br />
            industry <span className="text-gradient">starts here</span>
          </h1>
        </div>

        {/* Action Buttons */}
        <div className="industry-actions">
          <button className="btn-primary">
            BOOK A DEMO <span className="arrow">→</span>
          </button>
          <button className="btn-outline">
            BUILD AI <span className="arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

// export default Section7;