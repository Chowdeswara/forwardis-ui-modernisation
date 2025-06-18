
export const formFieldsConfig = [
  {
    type: 'select',
    label: 'Order Type',
    className: '',
    placeholder: 'Both',
    value: 'both',
    properties: {
      width: 'w-full'
    },
    options: [
      { label: 'Both', value: 'both' },
      { label: 'Standard', value: 'standard' },
      { label: 'Express', value: 'express' }
    ]
  },
  {
    type: 'select',
    label: 'Supplier',
    className: '',
    placeholder: 'Enter Supplier Name',
    value: '',
    properties: {
      width: 'w-full'
    },
    options: [
      { label: 'Supplier 1', value: 'supplier1' },
      { label: 'Supplier 2', value: 'supplier2' },
      { label: 'Supplier 3', value: 'supplier3' },
      { label: 'Supplier 4', value: 'supplier4' }
    ]
  },
  {
    type: 'select',
    label: 'Operational Contract',
    className: '',
    placeholder: 'CR Cargo',
    value: 'cr_cargo',
    properties: {
      width: 'w-full'
    },
    options: [
      { label: 'CR Cargo', value: 'cr_cargo' },
      { label: 'Express Contract', value: 'express' }
    ]
  },
  {
    type: 'select',
    label: 'Customer',
    className: '',
    placeholder: 'Marimekka ( Sr 000406 )',
    value: 'marimekka',
    properties: {
      width: 'w-full'
    },
    options: [
      { label: 'Marimekka ( Sr 000406 )', value: 'marimekka' },
      { label: 'Other Customer', value: 'other' }
    ]
  },
  {
    type: 'select',
    label: 'Customer',
    className: '',
    placeholder: 'Enter Customer Name',
    value: '',
    properties: {
      width: 'w-full'
    },
    options: [
      { label: 'Customer 1', value: 'customer1' },
      { label: 'Customer 2', value: 'customer2' }
    ]
  },
  {
    type: 'input',
    label: 'Customer/Supplier Reference No.',
    className: '',
    placeholder: 'Enter Reference No.',
    value: '',
    properties: {
      width: 'w-full',
      inputType: 'text'
    }
  },
  {
    type: 'input',
    label: 'Draft Bill No.',
    className: '',
    placeholder: '',
    value: '',
    properties: {
      width: 'w-full',
      inputType: 'text'
    }
  },
  {
    type: 'select',
    label: 'Departure Point',
    className: '',
    placeholder: '',
    value: '',
    properties: {
      width: 'w-full'
    },
    options: [
      { label: 'Point 1', value: 'point1' },
      { label: 'Point 2', value: 'point2' }
    ]
  },
  {
    type: 'select',
    label: 'Arrival Point',
    className: '',
    placeholder: 'Select Arrival Point',
    value: '',
    properties: {
      width: 'w-full'
    },
    options: [
      { label: 'Arrival 1', value: 'arrival1' },
      { label: 'Arrival 2', value: 'arrival2' }
    ]
  },
  {
    type: 'select',
    label: 'Service',
    className: '',
    placeholder: 'Select Service',
    value: '',
    properties: {
      width: 'w-full'
    },
    options: [
      { label: 'Service 1', value: 'service1' },
      { label: 'Service 2', value: 'service2' }
    ]
  },
  {
    type: 'date',
    label: 'Service From Date and Time',
    className: '',
    placeholder: 'DD/MM/YYYY HH:MM:SS',
    value: '',
    properties: {
      width: 'w-full'
    }
  },
  {
    type: 'date',
    label: 'Service To Date and Time',
    className: '',
    placeholder: 'DD/MM/YYYY HH:MM:SS',
    value: '',
    properties: {
      width: 'w-full'
    }
  }
];

export const billingGridData = [
  {
    id: 1,
    quickBillingNo: 'QB00001/2025',
    date: '12/01/2025',
    status: 'Under Assessment',
    customerSupplier: 'Gifts Group',
    contractOrderType: 'AG Intercoms',
    totalNetAmount: '₹ 1395.00',
    billingType: 'Wagon',
    groupNetAmount: '₹ 6000.00',
    operationalLocation: 'Financial Station'
  },
  {
    id: 2,
    quickBillingNo: 'QB00002/2025',
    date: '12/01/2025',
    status: 'Under Assessment',
    customerSupplier: 'Gifts Group',
    contractOrderType: 'AG Intercoms',
    totalNetAmount: '₹ 5000.00',
    billingType: 'Wagon',
    groupNetAmount: '₹ 5000.00',
    operationalLocation: 'Financial Station'
  }
];
