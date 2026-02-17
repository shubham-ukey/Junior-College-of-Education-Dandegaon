import React, { useState } from "react";

const images = [
  "https://static.wixstatic.com/media/ff9aca_04b781848f804626ba837345e3bf9c11~mv2.jpg/v1/fill/w_383,h_388,al_c,lg_1,q_80,enc_avif,quality_auto/ff9aca_04b781848f804626ba837345e3bf9c11~mv2.jpg",
  "https://static.wixstatic.com/media/ff9aca_17db56d3d02f4d23b41f556217a2d441~mv2_d_1276_1289_s_2.jpg/v1/fill/w_506,h_511,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ff9aca_17db56d3d02f4d23b41f556217a2d441~mv2_d_1276_1289_s_2.jpg",
  "https://static.wixstatic.com/media/ff9aca_0451a413c78e48d88c11d7a90be717fa~mv2.jpg/v1/fill/w_591,h_510,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ff9aca_0451a413c78e48d88c11d7a90be717fa~mv2.jpg",
  "https://static.wixstatic.com/media/ff9aca_41172630e3c24a6d87e9f639f86bb7ce~mv2_d_1275_2022_s_2.jpg/v1/fill/w_322,h_511,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ff9aca_41172630e3c24a6d87e9f639f86bb7ce~mv2_d_1275_2022_s_2.jpg",
  "https://static.wixstatic.com/media/ff9aca_6504b9eef040476cb5a8b72ccc955870~mv2_d_1310_2131_s_2.jpg/v1/fill/w_314,h_511,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ff9aca_6504b9eef040476cb5a8b72ccc955870~mv2_d_1310_2131_s_2.jpg",
  "https://static.wixstatic.com/media/ff9aca_770733b6464840af80a070eade4e4015~mv2_d_1262_1942_s_2.jpg/v1/fill/w_332,h_511,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ff9aca_770733b6464840af80a070eade4e4015~mv2_d_1262_1942_s_2.jpg",
  "https://static.wixstatic.com/media/ff9aca_efc6b953c310456e9cb4155c26a2f861~mv2.jpg/v1/fill/w_748,h_511,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ff9aca_efc6b953c310456e9cb4155c26a2f861~mv2.jpg",
  "https://static.wixstatic.com/media/ff9aca_9f400bede70e441bb1e76d6fba21c23e~mv2_d_1290_1306_s_2.jpg/v1/fill/w_504,h_511,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ff9aca_9f400bede70e441bb1e76d6fba21c23e~mv2_d_1290_1306_s_2.jpg",
  "https://static.wixstatic.com/media/ff9aca_6f888184be03492281de608299c9d4b4~mv2_d_1396_1353_s_2.jpg/v1/fill/w_527,h_511,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ff9aca_6f888184be03492281de608299c9d4b4~mv2_d_1396_1353_s_2.jpg",
  "https://static.wixstatic.com/media/ff9aca_34cf234f764c43e4bdf47b7604e54fe6~mv2_d_1304_1930_s_2.jpg/v1/fill/w_345,h_511,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ff9aca_34cf234f764c43e4bdf47b7604e54fe6~mv2_d_1304_1930_s_2.jpg",
  "https://static.wixstatic.com/media/ff9aca_b0f13a99160f41cb81c29961ddc7ed18~mv2_d_1314_1999_s_2.jpg/v1/fill/w_336,h_511,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ff9aca_b0f13a99160f41cb81c29961ddc7ed18~mv2_d_1314_1999_s_2.jpg",
  "https://jcedandegaon.org/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-17-at-17.42.34_6f58de4b-1024x768.jpg"
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="gallery page-bg">
      <h2>College Gallery</h2>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <div key={index} className="gallery-item">
            <img
              src={img}
              alt={`gallery-${index}`}
              onClick={() => setSelectedImage(img)}
            />
          </div>
        ))}
      </div>

      {/* Lightbox Popup */}
      {selectedImage && (
        <div
          className="lightbox show"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="preview"
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
