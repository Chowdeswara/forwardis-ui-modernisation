
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import DynamicFormFields from './DynamicFormFields';

interface SearchPanelProps {
  isExpanded: boolean;
  onToggle: () => void;
  onSearch: () => void;
}

const SearchPanel: React.FC<SearchPanelProps> = ({ isExpanded, onToggle, onSearch }) => {
  return (
    <Card className="mb-6">
      <Collapsible open={isExpanded} onOpenChange={onToggle}>
        <CollapsibleTrigger asChild>
          <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-muted/50">
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4" />
              <span className="font-medium">Search</span>
            </div>
            {isExpanded ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </div>
        </CollapsibleTrigger>
        
        <CollapsibleContent>
          <CardContent className="pt-0">
            <DynamicFormFields />
            <div className="flex justify-end gap-3 mt-6">
              <Button variant="outline">Clear Search</Button>
              <Button onClick={onSearch} className="bg-blue-600 hover:bg-blue-700">
                Search
              </Button>
            </div>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
};

export default SearchPanel;
