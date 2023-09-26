/// <reference types="vite/client" />
import * as React from 'react';
declare module 'boxicons';
declare global {
  namespace JSX {
    interface IntrinsicElements {
        'box-icon': any;
  
     
      // ... hundreds more
    }
  }
}