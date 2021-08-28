import { format } from 'date-fns';
import dynamic from 'next/dynamic';

import App from '@/components/App';
import PageTitle from '@/components/PageTitle';
import Button from '@/components/common/Button';
import { useRef } from 'react';

// Dynamic import used as EditorJS does not support SSR, only build on client side
const Editor = dynamic(() => import('@/components/editorjs/Editor'), {
  ssr: false
});

export default function Journal() {
  const editorRef = useRef(null);

  const handleSave = async () => {
    const savedData = await editorRef.current.save();
    console.log(savedData);
  };

  return (
    <App>
      <div className="h-full w-full">
        <div className="flex justify-between items-center">
          <PageTitle title="Journal" subtitle={format(new Date(), 'PPP')} />
          <Button
            text="Calander Picker"
            variant="solid"
            onClick={() => console.log('Open Picker')}
          />
        </div>
        <div className="mt-4 text-right">
          <Button
            text="Save"
            variant="outline"
            onClick={handleSave}
            additionalClasses="w-48"
          />
        </div>
        <div className="mt-8 w-4/5 mx-auto bg-gray-200 p-12 rounded-2xl">
          <div className="min-h-screen bg-white p-8 rounded-xl prose prose-sm">
            <Editor
              readOnly={false}
              instanceRef={(instance) => (editorRef.current = instance)}
            />
          </div>
        </div>
      </div>
    </App>
  );
}
