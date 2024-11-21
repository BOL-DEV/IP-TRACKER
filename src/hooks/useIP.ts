import { useContext } from 'react';
import { IpContext } from '../contexts/IpContext';

export function useIP() {
  const context = useContext(IpContext);
  if (!context) {
    throw new Error('useIP must be used within an IpProvider');
  }
  return context;
}
