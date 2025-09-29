import { useState } from "react";
import "./NewsLetter.css";

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      setMessage('Please enter your email address');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setMessage('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setMessage('');

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setMessage('Thank you for subscribing!');
      setEmail('');
    } catch {
      setMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="main_news_letter_container" aria-labelledby="newsletter-title">
      <div className="news_letter_content_parent_container">
        <div className="news_letter_content">
          <div className="content_wrapper">
            <h1 id="newsletter-title">Stay Updated</h1>
            <p className="newsletter_description">
              Join our newsletter to receive the latest updates, exclusive content, 
              and special offers directly in your inbox.
            </p>
            
            <form onSubmit={handleSubmit} className="news_letter_form">
              <div className="news_letter_input_container">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  aria-label="Email address"
                  disabled={isSubmitting}
                  required
                />
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  aria-label="Subscribe to newsletter"
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </button>
              </div>
              
              {message && (
                <div className={`message ${message.includes('Thank you') ? 'success' : 'error'}`}>
                  {message}
                </div>
              )}
            </form>

            <div className="newsletter_features">
              <div className="feature_item">
                <span className="feature_icon">✓</span>
                <span>No spam, unsubscribe anytime</span>
              </div>
              <div className="feature_item">
                <span className="feature_icon">✓</span>
                <span>Weekly updates</span>
              </div>
              <div className="feature_item">
                <span className="feature_icon">✓</span>
                <span>Exclusive content</span>
              </div>
            </div>
          </div>
        </div>

        <div className="news_letter_image" aria-hidden="true">
          <div className="image_wrapper">
            <img
              src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZHl8ZW58MHx8MHx8fDA%3D"
              alt="Newsletter illustration"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;