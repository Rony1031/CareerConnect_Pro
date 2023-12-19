import React, { useEffect, useState } from "react";
import api from "../services/api";

const CandidateDashboard = ({ token }) => {
  const [candidateData, setCandidateData] = useState(null);

  useEffect(() => {
    const fetchCandidateData = async () => {
      try {
        const response = await api.get("/candidates/data", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCandidateData(response.data);
      } catch (error) {
        console.error("Error fetching candidate data:", error.message);
      }
    };

    if (token) {
      fetchCandidateData();
    }
  }, [token]);

  return (
    <div>
      <h2>Candidate Dashboard</h2>
      {candidateData ? (
        <div>
          <p>Welcome, {candidateData.name}!</p>
          {/* Display additional candidate-specific content */}
        </div>
      ) : (
        <p>Loading candidate data...</p>
      )}
    </div>
  );
};

export default CandidateDashboard;
