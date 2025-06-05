import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import JobsModule from './components/jobs/JobsModule';
import InventoryModule from './components/inventory/InventoryModule';
import ClientsModule from './components/clients/ClientsModule';
import LaborModule from './components/labor/LaborModule';
import ReportsModule from './components/reports/ReportsModule';
export function App() {
  return <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/jobs" element={<JobsModule />} />
          <Route path="/inventory" element={<InventoryModule />} />
          <Route path="/clients" element={<ClientsModule />} />
          <Route path="/labor" element={<LaborModule />} />
          <Route path="/reports" element={<ReportsModule />} />
        </Routes>
      </Layout>
    </Router>;
}