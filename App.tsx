export function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}
