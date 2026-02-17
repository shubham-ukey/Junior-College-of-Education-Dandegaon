import React from "react";

const principal = {
  name: "Shri. Gajendra Thombare",
  designation: "Principal",
  duration : "26/11/2007 To 31/07/2033",
  image:
    "https://static.wixstatic.com/media/ff9aca_a3ac694987e34e6bbbd4427154407aae~mv2.jpg/v1/fill/w_181,h_214,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/ff9aca_a3ac694987e34e6bbbd4427154407aae~mv2.jpg",
};

const teachingStaff = [
  {
    name: "Mr. Prashant Ganvir",
    designation: "Lecturer",
    duration : "18/08/2008 TO 30/06/2041",
    image:
      "https://static.wixstatic.com/media/ff9aca_dded8ea5791d4e20ba191b3a91c26230~mv2.jpg/v1/crop/x_0,y_0,w_199,h_281/fill/w_204,h_297,al_c,lg_1,q_80,enc_avif,quality_auto/ff9aca_dded8ea5791d4e20ba191b3a91c26230~mv2.jpg",
  },
  {
    name: "Mr. Gopesh Sonewane",
    designation: "Lecturer",
    duration : "01/01/2009 To 30/04/2039",
    image:
      "https://static.wixstatic.com/media/ff9aca_41ed78b143174615afe7146a3aae9d1f~mv2.jpg/v1/crop/x_13,y_0,w_201,h_278/fill/w_210,h_297,al_c,lg_1,q_80,enc_avif,quality_auto/ff9aca_41ed78b143174615afe7146a3aae9d1f~mv2.jpg",
  },
  {
    name: "Ku. Hemlata Yele",
    designation: "Lecturer",
    duration : "22/02/2011 To 31/07/2040",
    image:
      "https://static.wixstatic.com/media/ff9aca_f61a4a137a874d45a6694488d2e63bac~mv2.jpg/v1/crop/x_0,y_0,w_201,h_268/fill/w_210,h_297,al_c,lg_1,q_80,enc_avif,quality_auto/ff9aca_f61a4a137a874d45a6694488d2e63bac~mv2.jpg",
  },
  {
    name: "Mr. Nitin Patle",
    designation: "Lecturer",
    duration : "26/06/2012 To 30/06/2039",
    image:
      "https://static.wixstatic.com/media/ff9aca_0f5958b0dfa3494d81a890c4cd1f74f9~mv2.jpg/v1/crop/x_11,y_7,w_227,h_283/fill/w_207,h_263,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/ff9aca_0f5958b0dfa3494d81a890c4cd1f74f9~mv2.jpg",
  },
  {
    name: "Mr. Dinesh Rinait",
    designation: "Lecturer",
    duration : "05/12/2013 To 31/05/2042",
    image:
      "https://static.wixstatic.com/media/ff9aca_5ddbf47ef7384f299e6eafbba14ae3a3~mv2.jpg/v1/crop/x_9,y_0,w_228,h_286/fill/w_210,h_267,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/ff9aca_5ddbf47ef7384f299e6eafbba14ae3a3~mv2.jpg",
  },
];

const nonTeachingStaff = [
  {
    name: "Krishna Kodape",
    designation: "Clerk",
    duration : "07/03/2012 To 30/04/2041",
    image:
      "https://static.wixstatic.com/media/ff9aca_ef12a2783f4448c8ad67cfab7e16fd8d~mv2.jpg/v1/crop/x_13,y_0,w_209,h_261/fill/w_189,h_241,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/ff9aca_ef12a2783f4448c8ad67cfab7e16fd8d~mv2.jpg",
  },
  {
    name: "Prakash Wasnik",
    designation: "Peon",
    duration : "28/06/2003 To 31/05/2028",
    image:
    "https://static.wixstatic.com/media/ff9aca_dd5b81fa8aed4386b9f758f9edba1fd8~mv2.jpg/v1/crop/x_19,y_26,w_225,h_259/fill/w_205,h_239,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/ff9aca_dd5b81fa8aed4386b9f758f9edba1fd8~mv2.jpg",
  },
  {
    name: "Ashok Kalsarpe",
    designation: "Peon",
    duration : "03/04/2001 To 31/10/2035",
    image:
      "https://static.wixstatic.com/media/ff9aca_33d106ccef434880ba2daac1caec699b~mv2.jpg/v1/crop/x_13,y_13,w_215,h_257/fill/w_195,h_237,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/ff9aca_33d106ccef434880ba2daac1caec699b~mv2.jpg",
  },
];

const StaffCard = ({ staff }) => {
  return (
    <div className="staff-card">
      <img src={staff.image} alt={staff.name} />
      <h3>{staff.name}</h3>

      <div className="staff-details">
        <p><strong>{staff.designation}</strong></p>
        <p>{staff.duration}</p>
      </div>
    </div>
  );
};

const CollegeStaff = () => {
  return (
    <div className="staff-container">

      {/* Principal */}
      <h2 className="category-title">Principal</h2>
      <div className="staff-grid">
        <StaffCard staff={principal} />
      </div>

      {/* Teaching Staff */}
      <h2 className="category-title">Teaching Staff</h2>
      <div className="staff-grid">
        {teachingStaff.map((staff, index) => (
          <StaffCard key={index} staff={staff} />
        ))}
      </div>

      {/* Non Teaching Staff */}
      <h2 className="category-title">Non-Teaching Staff</h2>
      <div className="staff-grid">
        {nonTeachingStaff.map((staff, index) => (
          <StaffCard key={index} staff={staff} />
        ))}
      </div>

    </div>
  );
};

export default CollegeStaff;