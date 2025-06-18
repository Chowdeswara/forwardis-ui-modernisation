
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { formFieldsConfig } from '@/data/formFieldsConfig';

const DynamicFormFields = () => {
  const renderField = (field: any, index: number) => {
    const { type, label, className, placeholder, options, value, properties } = field;
    
    const baseClasses = `${className || ''} ${properties?.width || 'w-full'}`;

    switch (type) {
      case 'select':
        return (
          <div key={index} className={baseClasses}>
            <Label className="text-sm font-medium text-gray-700">{label}</Label>
            <Select defaultValue={value}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent>
                {options?.map((option: any, optIndex: number) => (
                  <SelectItem key={optIndex} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        );
      
      case 'input':
        return (
          <div key={index} className={baseClasses}>
            <Label className="text-sm font-medium text-gray-700">{label}</Label>
            <Input
              type={properties?.inputType || 'text'}
              placeholder={placeholder}
              defaultValue={value}
              className="mt-1"
            />
          </div>
        );
      
      case 'date':
        return (
          <div key={index} className={baseClasses}>
            <Label className="text-sm font-medium text-gray-700">{label}</Label>
            <Input
              type="date"
              defaultValue={value}
              className="mt-1"
            />
          </div>
        );
      
      case 'checkbox':
        return (
          <div key={index} className={`${baseClasses} flex items-center space-x-2`}>
            <Checkbox id={`checkbox-${index}`} defaultChecked={value} />
            <Label htmlFor={`checkbox-${index}`} className="text-sm font-medium text-gray-700">
              {label}
            </Label>
          </div>
        );
      
      default:
        return null;
    }
  };

  // Group fields into rows of 4
  const groupedFields = [];
  for (let i = 0; i < formFieldsConfig.length; i += 4) {
    groupedFields.push(formFieldsConfig.slice(i, i + 4));
  }

  return (
    <div className="space-y-4">
      {groupedFields.map((row, rowIndex) => (
        <div key={rowIndex} className="grid grid-cols-4 gap-4">
          {row.map((field, fieldIndex) => renderField(field, fieldIndex))}
        </div>
      ))}
    </div>
  );
};

export default DynamicFormFields;
