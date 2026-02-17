import React, { useState, useEffect } from "react";

const images = [
  "https://jcedandegaon.org/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-17-at-17.53.48_c7d68f8b-768x576.jpg",
  "https://jcedandegaon.org/wp-content/uploads/2025/02/hall-768x521.jpg",
  "https://jcedandegaon.org/wp-content/uploads/2025/02/MATH-768x663.jpg"
];

const Home = () => {
  const [current, setCurrent] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">

      {/* Image Slider */}
      <div className="slider">
        <img src={images[current]} alt="College" />
      </div>

      {/* Principal Message Section */}
      <section className="principal-section">
        <div className="principal-container">

          <div className="principal-image">
            <img
              src="https://static.wixstatic.com/media/ff9aca_a3ac694987e34e6bbbd4427154407aae~mv2.jpg"
              alt="Principal"
            />
          </div>

          <div className="principal-message">

            <p><strong>Dear Students,</strong></p>

            <p>
              It's a matter of great privilege for me to share my thoughts and feelings with you.
              Our college has a rich history and has played an important role in nation building.
              I appeal to students to make maximum use of the college resources.
            </p>

            <p>
              All the teaching faculty is striving to make your career bright.
              The library and internet facilities will help you update yourself
              with the latest developments and innovations.
            </p>

            <p>
              Participation in sports and cultural activities is equally important.
              It helps in personality development and leadership qualities.
            </p>

            <p><strong>Wish you good luck.</strong></p>
            <p>Thank you.</p>
            <p><strong>Shri. Gajendra Thombare</strong></p>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>D.Ed Frequently Asked Questions</h2>

        <div className="faq-container">
          {faqData.map((item, index) => (
            <FAQItem key={index} item={item} />
          ))}
        </div>
      </section>

    </div>
  );
};

/* FAQ Data */
const faqData = [
  {
    question: "What is D.Ed course?",
    answer:
      "Diploma in Education (D.Ed) is a teacher training program that prepares candidates to become primary school teachers."
  },
  {
    question: "What is the duration of D.Ed?",
    answer:
      "The D.Ed course duration is generally 2 years including theoretical and practical training."
  },
  {
    question: "What is the eligibility for D.Ed admission?",
    answer:
      "Students must have passed 12th standard with minimum required percentage as per state education norms."
  },
  {
    question: "Is D.Ed recognized by NCTE?",
    answer:
      "Yes, D.Ed programs are recognized by NCTE as per government guidelines."
  },
  {
    question: "What career opportunities are available after D.Ed?",
    answer:
      "After completing D.Ed, candidates can apply for primary teacher positions in government and private schools."
  }
];

/* FAQ Item Component */
const FAQItem = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`faq-item ${open ? "active" : ""}`}>
      <div className="faq-question" onClick={() => setOpen(!open)}>
        {item.question}
        <span>{open ? "−" : "+"}</span>
      </div>
      <div className="faq-answer">
        <p>{item.answer}</p>
      </div>
    </div>
  );
};

export default Home;
