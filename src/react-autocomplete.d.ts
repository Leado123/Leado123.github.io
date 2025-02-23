declare module 'react-autocomplete' {
    import * as React from 'react';
  
    export interface AutocompleteProps {
      items: string[];
      getItemValue(item: string): string;
      renderItem(item: string, isHighlighted: boolean): React.ReactNode;
      value: string;
      onChange(e: React.ChangeEvent<HTMLInputElement>): void;
      onSelect(value: string): void;
    }
  
    const Autocomplete: React.FC<AutocompleteProps>;
    export default Autocomplete;
  }
  