import { useAuth } from '@/lib/auth';
import { useRouter } from 'next/router';

import Logo from './Logo';
import Button from './common/Button';

export default function Header() {
  const { user, signOut, signInWithGoogle } = useAuth();
  const router = useRouter();

  return (
    <nav className="flex items-center justify-between w-full px-16 h-20 bg-white sticky top-0">
      <Logo />
      <div className="flex items-center space-x-4">
        <Button
          text="About"
          variant="highlight"
          onClick={() => router.push('/dashboard')}
          additionalClasses="!px-8"
        />
        <Button
          text="Blog"
          variant="highlight"
          onClick={() => router.push('/blog')}
          additionalClasses="!px-8"
        />
        <Button
          text="Why GrowthLog"
          variant="highlight"
          onClick={() => console.log('Scrolled down')}
          additionalClasses="!px-8"
        />
      </div>
      <Button
        text={user ? 'Sign Out' : 'Sign In'}
        variant="solid"
        onClick={user ? signOut : signInWithGoogle}
        additionalClasses="!px-8"
      />
    </nav>
  );
}
