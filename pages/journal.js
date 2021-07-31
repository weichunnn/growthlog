import { format } from 'date-fns';

import App from '@/components/App';
import PageTitle from '@/components/PageTitle';
import Button from '@/components/common/Button';

export default function Journal() {
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
            onClick={() => console.log('Saved')}
            additionalClasses="w-48"
          />
        </div>
        <div className="mt-8 h-60 w-4/5 mx-auto bg-green-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, ratione.
        </div>
      </div>
    </App>
  );
}
