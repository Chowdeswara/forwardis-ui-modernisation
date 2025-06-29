import React, { useEffect, useState } from 'react';
import { ChevronDown, ChevronUp, FileText, Settings, Truck, Package,X, Copy } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { AppLayout } from '@/components/AppLayout';
import { Breadcrumb } from '@/components/Breadcrumb';

interface ExpandableSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  status: 'completed' | 'current' | 'pending';
  isExpanded: boolean;
}
interface FormData {
    basic: {
      customer: string;
      contract: string;
      cluster: string;
      orderDate: string;
      consignor: string;
      consignee: string;
      wbsNo: string;
      customerRefNo: string;
      billToId: string;
      refForecastId: string;
    };
    service: {
      internalOrderDate: string;
      contractService: string;
      customerVendor: string;
    };
  }

const CreateOrder: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        basic: {
          customer: '',
          contract: '',
          cluster: '',
          orderDate: '2025-06-18',
          consignor: '',
          consignee: '',
          wbsNo: 'DE17BAS843',
          customerRefNo: '',
          billToId: '',
          refForecastId: ''
        },
        service: {
          internalOrderDate: '',
          contractService: '',
          customerVendor: ''
        }
      });
  const [sections, setSections] = useState<ExpandableSection[]>([
    {
      id: 'basic',
      title: 'Basic Details',
      icon: <FileText className="w-5 h-5" />,
      status: 'current',
      isExpanded: false
    },
    {
      id: 'service',
      title: 'Service Details',
      icon: <Settings className="w-5 h-5" />,
      status: 'pending',
      isExpanded: false
    },
    {
      id: 'shipment',
      title: 'Shipment Details',
      icon: <Truck className="w-5 h-5" />,
      status: 'pending',
      isExpanded: false
    },
    {
      id: 'consignment',
      title: 'Consignment Details',
      icon: <Package className="w-5 h-5" />,
      status: 'pending',
      isExpanded: false
    }
  ]);
  const breadcrumbItems = [
    { label: 'Home', href: '/dashboard', active: false },
    { label: 'Create Order', active: true }
  ];
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const [showValidation, setShowValidation] = useState(false);
  const [createReturnOrder, setCreateReturnOrder] = useState(false);

  const [inputValue, setInputValue] = useState('');
  const handleClear = () => setInputValue('');
  const handleCopy = () => {
    if (inputValue) {
      navigator.clipboard.writeText(inputValue);
      alert('Copied to clipboard!');
    }
  };
  const toggleSection = (sectionId: string) => {
    setSections(prev =>
      prev.map(section => {
        if (section.id === sectionId) {
          // Expand clicked section, set status to 'current'
          return {
            ...section,
            isExpanded: !section.isExpanded,
            status: !section.isExpanded ? 'current' : checkSectionCompletion(section.id) ? 'completed' : 'pending'
          };
        } else {
          // Collapse others, and assign status based on completion
          return {
            ...section,
            isExpanded: false,
            status: checkSectionCompletion(section.id) ? 'completed' : 'pending'
          };
        }
      })
    );
  };
  

  const getStatusIcon = (status: string, stepNumber: number) => {
    console.log("STATUS : ",status)
    console.log("STEP NUMBER : ",stepNumber)
    switch (status) {
      case 'completed':
        return (
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-semibold relative z-10">
            {/* ✓ */}
            {stepNumber}
          </div>
        );
      case 'current':
        return (
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold relative z-10">
            {stepNumber}
          </div>
        );
      case 'pending':
        return (
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-sm font-semibold relative z-10">
            {stepNumber}
          </div>
        );
      default:
        return null;
    }
  };

  // Check if mandatory fields are completed for each section
  const checkSectionCompletion = (sectionId: string): boolean => {
    switch (sectionId) {
      case 'basic':
        return !!(formData.basic.customer && formData.basic.contract && formData.basic.cluster);
      case 'service':
        return !!(formData.service.internalOrderDate && formData.service.contractService && formData.service.customerVendor);
      default:
        return false;
    }
  };

  const updateFormData = (section: keyof FormData, field: string, value: string) => {
    handleClear();
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
    setInputValue(value)
  };
  const isFieldInvalid = (section: keyof FormData, field: string) => {
    const sectionData = formData[section] as Record<string, string>;
    return showValidation && !sectionData[field];
  };
   // Update section status based on form completion
   useEffect(() => {
    setSections(prev => prev.map(section => {
      const isCompleted = checkSectionCompletion(section.id);
      
      if (isCompleted && section.status !== 'completed') {
        return { ...section, status: 'completed' };
      } else if (!isCompleted && section.status === 'completed') {
        return { ...section, status: section.id === 'basic' ? 'current' : 'pending' };
      }
      
      return section;
    }));
    const handleKeyDown = (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 's') {
          e.preventDefault(); // Prevent default browser "Save Page"
          handleSave();       // Call your save function
        }
      };
  
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
  }, [formData]);
  const validateForm = (): boolean => {
    const errors: string[] = [];

    // Check basic mandatory fields
    if (!formData.basic.customer) errors.push('Customer is required');
    if (!formData.basic.contract) errors.push('Contract is required');
    if (!formData.basic.cluster) errors.push('Cluster is required');

    // Check service mandatory fields
    if (!formData.service.internalOrderDate) errors.push('Internal Order Date is required');
    if (!formData.service.contractService) errors.push('Contract Service is required');
    if (!formData.service.customerVendor) errors.push('Customer/Vendor is required');

    setValidationErrors(errors);
    setShowValidation(errors.length > 0);
    
    return errors.length === 0;
  };
  const handleSave = () => {
    if (!validateForm()) {
      alert('Please fill all the mandatory fields');
      return;
    }
      const allFormData = {
          ...formData,
          createReturnOrder,
          sections: sections.map(section => ({
              id: section.id,
              title: section.title,
              status: section.status,
              isExpanded: section.isExpanded
            }))}
    alert('Data hasbeen saved Successfully!\n\n'+ JSON.stringify(allFormData));
     // Your actual save logic here
   };
  const renderBasicDetailsForm = () => (
    <div className="p-6 bg-white border-t">
      <div className="grid grid-cols-4 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Customer <span className="text-red-500">*</span>
          </label>
          <Select  value={formData.basic.customer} onValueChange={(value) => updateFormData('basic', 'customer', value)}>
            <SelectTrigger className={`border shadow-md ${formData.basic.customer ? 'border-blue-300 shadow-blue-200' : 'border-red-300 shadow-red-200'}`}>
              <SelectValue placeholder="Select Customer." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="basf">010159 || BASF HEALTH AND CARE PRODUCTS</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Contract <span className="text-red-500">*</span>
          </label>
          <Select  value={formData.basic.contract} onValueChange={(value) => updateFormData('basic', 'contract', value)}>
            <SelectTrigger className={`border shadow-md ${formData.basic.contract ? 'border-blue-300 shadow-blue-200' : 'border-red-300 shadow-red-200'}`}>
              <SelectValue placeholder="Select Contract" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="test">CON000000382 || Test</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Cluster <span className="text-red-500">*</span>
          </label>
          <Select  value={formData.basic.cluster} onValueChange={(value) => updateFormData('basic', 'cluster', value)}>
            <SelectTrigger className={`border shadow-md ${formData.basic.cluster ? 'border-blue-300 shadow-blue-200' : 'border-red-300 shadow-red-200'}`}>
              <SelectValue placeholder="Select Cluster" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="riihimaki">10-000406 || Riihimäki ( 10-00040-6 )</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Order Date</label>
          <Input className="w-full px-3 py-2 border  rounded-md text-sm" type="date" defaultValue="2025-06-18" value={formData.basic.orderDate}
            onChange={(e) => updateFormData('basic', 'orderDate', e.target.value)} />
            
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Consignor</label>
          <Select className={isFieldInvalid('basic', 'consignor') ? 'ring-2 ring-red-500' : ''} value={formData.basic.consignor} onValueChange={(value) => updateFormData('basic', 'consignor', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select Consignor" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="consignor1">Consignor 1</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Consignee</label>
          <Select className={isFieldInvalid('basic', 'consignee') ? 'ring-2 ring-red-500' : ''} value={formData.basic.consignee} onValueChange={(value) => updateFormData('basic', 'consignee', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select Consignee" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="consignee1">Consignee 1</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">WBS No.</label>
          <Input className={isFieldInvalid('basic', 'wbsNo') ? 'ring-2 ring-red-500' : ''} defaultValue="DE17BAS843" value={formData.basic.wbsNo}
            onChange={(e) => updateFormData('basic', 'wbsNo', e.target.value)} />
        </div>
        
        <div  className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">Customer Ref No.</label>
          <Input className={`w-full border border-gray-300 rounded px-4 py-2 pr-14 text-sm text-gray-700 `} placeholder="Enter Customer Ref No." value={formData.basic.customerRefNo}
            onChange={(e) => updateFormData('basic', 'customerRefNo', e.target.value)}/>
            {/* ICON CONTAINER inside input */}
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex space-x-2">
            <button onClick={() => updateFormData('basic', 'customerRefNo', '')} className="text-gray-400 hover:text-red-500">
              <X size={16} />
            </button>
            <button onClick={handleCopy} className="text-gray-400 hover:text-blue-500">
              <Copy size={16} />
            </button>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Bill To ID</label>
          <Select className={isFieldInvalid('basic', 'billToId') ? 'ring-2 ring-red-500' : ''} value={formData.basic.billToId} onValueChange={(value) => updateFormData('basic', 'billToId', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select Bill to ID" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bill1">Bill To ID 1</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex items-center space-x-3">
          <Switch
            checked={createReturnOrder}
            onCheckedChange={setCreateReturnOrder}
          />
          <label className="text-sm font-medium text-gray-700">Create Return Order</label>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Return Order ID</label>
          <Input placeholder="Auto Update based order Confirmation" disabled />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Ref.Forecast ID</label>
          <Input  />
        </div>
      </div>
      
      <div className="mt-6 flex space-x-4">
        <Button variant="outline" className="flex items-center space-x-2">
          <span>🔗</span>
          <span>View More</span>
        </Button>
        <Button variant="outline" className="flex items-center space-x-2">
          <span>👥</span>
          <span>Add Consignor/Consignee</span>
        </Button>
      </div>
    </div>
  );
  const renderServiceDetailsForm = () => (
    <div className="p-6 bg-white border-t">
        <div className=" text-gray-500 py-8">
             <div className="grid grid-cols-3 gap-6 mb-6">
                  <div>
                     <label className="block text-sm font-medium text-gray-700 mb-2">Internal Order Date <span className="text-red-500">*</span></label>
                     <input
                        type="text"
                        value={formData.service.internalOrderDate}
                        placeholder="Internal Order Date"
                        onChange={(e) => updateFormData('service', 'internalOrderDate', e.target.value)}
                     className={`w-full px-3 py-2 rounded-md text-sm  border shadow-md ${formData.service.internalOrderDate ? 'border-blue-300 shadow-blue-200' : 'border-red-300 shadow-red-200'}`}
                     />
                  </div>
                  <div>
                     <label className="block text-sm font-medium text-gray-700 mb-1">Contract <span className="text-red-500">*</span></label>
                     <div className="relative">
                        <Select
                           value={formData.service.contractService} onValueChange={(value) => updateFormData('service', 'contractService', value)}
                           className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm appearance-none bg-white"
                           >
                                <SelectTrigger className={`w-full px-3 py-2 rounded-md text-sm  border shadow-md ${formData.service.contractService ? 'border-blue-300 shadow-blue-200' : 'border-red-300 shadow-red-200'}`}>
                                    <SelectValue placeholder="Select Contract" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="db-cargo">DB Cargo</SelectItem>
                                </SelectContent>
                        </Select>
                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                     </div>
                  </div>
                  <div>
                     <label className="block text-sm font-medium text-gray-700 mb-1">Customer/Vendor <span className="text-red-500">*</span></label>
                     <div className="relative">
                        <Select value={formData.service.customerVendor} onValueChange={(value) => updateFormData('service', 'customerVendor', value)}
                           className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm appearance-none bg-white"
                           >
                        <SelectTrigger className="border border-red-300 shadow-md shadow-red-200">
                            <SelectValue placeholder="Select Customer/Vendor" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="db-cargo">DB Cargo</SelectItem>
                        </SelectContent>
                        </Select>
                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                     </div>
                  </div>
               </div>
        </div>
    </div>
  );
  return (
    
<AppLayout>
    {/* Breadcrumb */}
   <div className="hidden md:block">
      <Breadcrumb items={breadcrumbItems} />
   </div>
   {/* <div className="min-h-screen bg-gray-50 p-6"> */}
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <h6 className="text-2xl font-semibold text-gray-800 flex items-center">
              Create Order
            </h6>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Customer Order</span>
            <Input 
              placeholder="Enter Customer Order No." 
              className="max-w-xs"
            />
            <Button className="bg-blue-500 hover:bg-blue-600 text-white" onClick={() => handleSave()}>
              + Customer Order
            </Button>
          </div>
        </div>

        {/* Main Content with Status Bar */}
        <div className="flex gap-6">
          {/* Status Bar */}
          <div className="flex flex-col items-center sticky">
            {sections.map((section, index) => (
              <div key={section.id} className="flex flex-col items-center relative">
                {/* Status Circle */}
                {getStatusIcon(section.status, index + 1)}
                
                {/* Connecting Line */}
                {index < sections.length - 1 && (
                //   <div 
                //     className={`w-0.5 bg-gray-300 transition-all duration-300 ${
                //       section.isExpanded ? 'h-32' : 'h-12'
                //     }`}
                //   />
                  <div 
                    className={`w-0.5  transition-all duration-300 h-12 ${
                      (section.status === 'completed')? 'bg-green-300' : (section.status === 'current')? 'bg-blue-300': 'bg-gray-300'
                          }
                    `}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Expandable Sections */}
          <div className="flex-1 space-y-4">
            {sections.map((section) => (
              <div key={section.id} className="bg-white rounded-lg shadow-sm border">
                <div 
                  className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50"
                  onClick={() => toggleSection(section.id)}
                >
                  <div className="flex items-center space-x-3">
                    <div className="text-gray-600">{section.icon}</div>
                    <span className="font-medium text-gray-800">{section.title}</span>
                    {section.id === 'service' && (
                      <div className="flex items-center space-x-2 ml-auto mr-4">
                        <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
                          BLOCK TRAIN CONVENTIONAL
                        </span>
                        <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                          Loaded
                        </span>

                      </div>
                    )}
                  </div>
                  <div className="text-gray-400">
                    {section.isExpanded ? <ChevronUp /> : <ChevronDown />}
                  </div>
                </div>
                
                {section.isExpanded && section.id === 'basic' && renderBasicDetailsForm()}
                {section.isExpanded && section.id === 'service' && renderServiceDetailsForm()}
                {section.isExpanded && section.id === 'shipment' && (
                  <div className="p-6 bg-white border-t">
                    <div className="text-center text-gray-500 py-8">
                      Shipment Details Form Content
                    </div>
                  </div>
                )}
                {section.isExpanded && section.id === 'consignment' && (
                  <div className="p-6 bg-white border-t">
                    <div className="text-center text-gray-500 py-8">
                      Consignment Details Form Content
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    {/* </div>   */}
</AppLayout>

  );
};

export default CreateOrder;
