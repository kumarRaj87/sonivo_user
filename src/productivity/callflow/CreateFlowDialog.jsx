import { useEffect } from 'react';

export default function CreateFlowDialog({ open, onClose, children }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[5500]">
      <div 
        className="fixed inset-0 bg-black bg-opacity-30 transition-opacity"
        onClick={onClose}
      />
      <div className="fixed inset-0">
        {children}
      </div>
    </div>
  );
}