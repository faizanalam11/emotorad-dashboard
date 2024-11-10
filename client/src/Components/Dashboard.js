import React from 'react';
import BarGraph from './BarGraph';
import PieCharts from './PieCharts';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <BarGraph/>
      <PieCharts/>
    </div>
  );
};

export default Dashboard;
