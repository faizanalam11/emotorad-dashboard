import React from 'react';
import BarGraph from './BarGraph';
import PieCharts from './PieCharts';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <BarGraph/>
      <PieCharts/>
    </div>
  );
};

export default Dashboard;
