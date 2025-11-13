'use client';

import { Suspense } from 'react';
import Chat from '@/components/chat/chat';

export default function Page() {
  return (
    <Suspense fallback={<div>Chat is having some issues.</div>}>
      <Chat />
    </Suspense>
  );
}
