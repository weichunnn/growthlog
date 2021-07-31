import { format } from 'date-fns';

import App from '@/components/App';
import PageTitle from '@/components/PageTitle';

export default function Journal() {
  return (
    <App>
      <div className="h-full w-full">
        <div className="flex justify-between items-center">
          <PageTitle title="Journal" subtitle={format(new Date(), 'PPP')} />
          <button className="py-2 px-4 rounded-md transistion duration-200 ease-in-out text-white bg-blue-600 hover:bg-blue-700 active:ring-4 ring-blue-200">
            Calander Picker
          </button>
        </div>
        <div className="mt-4 text-right">
          <button className="mb-4 py-2 px-4 rounded-md transistion duration-200 ease-in-out border-2 border-blue-600 text-blue-600 hover:bg-blue-100 active:ring-4 ring-blue-200">
            Save
          </button>
        </div>
        <div className="h-60 w-4/5 mx-auto bg-green-200 mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, ratione.
        </div>
      </div>
    </App>
  );
}
