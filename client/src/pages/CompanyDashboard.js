import React, { useEffect, useState } from "react";
import api from "../services/api";

const CompanyDashboard = ({ token }) => {
  const [companyData, setCompanyData] = useState(null);

  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        const response = await api.get("/companies/data", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCompanyData(response.data);
      } catch (error) {
        console.error("Error fetching company data:", error.message);
      }
    };

    if (token) {
      fetchCompanyData();
    }
  }, [token]);

  return (
    <div>
      <h2>Company Dashboard</h2>
      {companyData ? (
        <div>
          <p>Welcome, {companyData.name}!</p>
          {/* Display additional company-specific content */}
        </div>
      ) : (
        <p>Loading company data...</p>
      )}
    </div>
  );
};

export default CompanyDashboard;
