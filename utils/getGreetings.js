import { useAuth } from '@/lib/auth';

export default function getGreetings() {
  const { user } = useAuth();

  var greetings = [
    [22, 'Working late'],
    [18, 'Good evening'],
    [12, 'Good afternoon'],
    [5, 'Good morning'],
    [0, 'Whoa, you are a very early bird']
  ];

  var currentHour = new Date().getHours();
  for (var i = 0; i < greetings.length; i++) {
    if (currentHour >= greetings[i][0]) {
      return greetings[i][1] + ' ' + user?.email;
    }
  }
}
