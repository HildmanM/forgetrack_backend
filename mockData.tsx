import React from 'react';
export const kpiData = {
  jobsCompleted: {
    value: 42,
    trend: {
      value: 8,
      isPositive: true
    }
  },
  materialUsage: {
    value: '384.5 tons',
    trend: {
      value: 5,
      isPositive: true
    }
  },
  laborHours: {
    value: '1,245 hrs',
    trend: {
      value: 3,
      isPositive: false
    }
  },
  efficiencyRate: {
    value: '92%',
    trend: {
      value: 4,
      isPositive: true
    }
  }
};
export const recentJobs = [{
  id: 'J-2023-089',
  client: 'Apex Construction',
  status: 'In Progress',
  completion: 75,
  dueDate: '2023-12-15'
}, {
  id: 'J-2023-088',
  client: 'Metro Builders',
  status: 'In Progress',
  completion: 45,
  dueDate: '2023-12-28'
}, {
  id: 'J-2023-087',
  client: 'Skyline Developers',
  status: 'Completed',
  completion: 100,
  dueDate: '2023-11-30'
}, {
  id: 'J-2023-086',
  client: 'Urban Infrastructure',
  status: 'Completed',
  completion: 100,
  dueDate: '2023-11-25'
}, {
  id: 'J-2023-085',
  client: 'Foundation Works',
  status: 'On Hold',
  completion: 35,
  dueDate: '2024-01-10'
}];
export const inventoryAlerts = [{
  id: 1,
  item: 'Steel I-Beam (W8x15)',
  quantity: 12,
  threshold: 20,
  status: 'Low Stock'
}, {
  id: 2,
  item: 'Steel Plate (3/8")',
  quantity: 8,
  threshold: 15,
  status: 'Low Stock'
}, {
  id: 3,
  item: 'Angle Iron (2"x2")',
  quantity: 5,
  threshold: 10,
  status: 'Critical'
}];
export const monthlyProductionData = [{
  month: 'Jul',
  production: 180
}, {
  month: 'Aug',
  production: 200
}, {
  month: 'Sep',
  production: 220
}, {
  month: 'Oct',
  production: 190
}, {
  month: 'Nov',
  production: 240
}];
export const jobStatusDistribution = [{
  name: 'Bidding',
  value: 15
}, {
  name: 'Awarded',
  value: 8
}, {
  name: 'In Progress',
  value: 12
}, {
  name: 'Completed',
  value: 42
}, {
  name: 'On Hold',
  value: 3
}];
export const materialInventory = [{
  category: 'Structural Steel',
  quantity: 245,
  unit: 'tons'
}, {
  category: 'Plate Steel',
  quantity: 78,
  unit: 'tons'
}, {
  category: 'Tube Steel',
  quantity: 56,
  unit: 'tons'
}, {
  category: 'Fasteners',
  quantity: 12500,
  unit: 'units'
}];