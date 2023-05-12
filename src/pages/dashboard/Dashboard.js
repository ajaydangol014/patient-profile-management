import React from "react";

const Dashboard = () => {
  return (
    <div id="dashboard">
      <h2>Dashboard</h2>

      <div className="dashboard__content">
        <div className="dashboard__card-group">
          <div className="dashboard__card">
            <div className="dashboard__card-title">Total no. of Patient</div>
            <div className="dashboard__card-count">45</div>
          </div>
          <div className="dashboard__card">
            <div className="dashboard__card-title">Total no. of Allergy</div>
            <div className="dashboard__card-count">25</div>
          </div>
          <div className="dashboard__card">
            <div className="dashboard__card-title">
              Special Attention Required
            </div>
            <div className="dashboard__card-count">25</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
