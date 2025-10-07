'use client';

import { useEffect } from 'react';
import { InteractiveChatWithFloatingInput } from '@/components/chat/InteractiveChatWithFloatingInput';
import { usePersona } from '@/hooks/use-persona';

export default function HomePage() {
  const { setPersona } = usePersona();

  // Set default persona to c-level on first load
  useEffect(() => {
    // Only set if not already set (preserve user's selection)
    const savedPersona = localStorage.getItem('currentPersona');
    if (!savedPersona) {
      setPersona('c-level');
    }
  }, [setPersona]);

  return <InteractiveChatWithFloatingInput />;
}
