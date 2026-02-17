import React from "react";

const StudentCorner = () => {
  return (
    <div className="student-wrapper">

      <div className="student-header">
        <h1>Student Corner</h1>
        <p>Important academic resources for D.Ed students</p>
      </div>

      <div className="student-grid">

        {/* Admission Notice */}
        <div className="student-card">
          <h2>Admission Notice</h2>
          <p>
            Admissions for D.Ed 2026-27 are now open. 
            Interested candidates can apply before the last date.
          </p>
          <a href="#" className="student-btn">
            View Notice
          </a>
        </div>

        {/* Syllabus */}
        <div className="student-card">
          <h2>D.Ed Syllabus</h2>
          <p>
            Download the latest D.Ed syllabus as prescribed 
            by the education board.
          </p>
          <a href="#" className="student-btn">
            Download Syllabus
          </a>
        </div>

        {/* Scholarship */}
        <div className="student-card">
          <h2>Scholarship Form</h2>
          <p>
            Apply for state and central government scholarships 
            available for eligible students.
          </p>
          <a href="#" className="student-btn">
            Apply Now
          </a>
        </div>

      </div>

    </div>
  );
};

export default StudentCorner;
