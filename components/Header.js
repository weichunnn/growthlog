import NextLink from 'next/link';
import Logo from './Logo';

export const NavButton = ({ linkTo, title, primary }) => {
  const customization = primary
    ? 'text-white bg-blue-600 hover:bg-blue-700'
    : 'hover:text-blue-600 ';

  return (
    <NextLink href={linkTo}>
      <a className={`py-2 px-8 rounded-lg font-semibold ${customization}`}>
        {title}
      </a>
    </NextLink>
  );
};

export default function Header() {
  return (
    <nav className="flex items-center justify-between w-full px-16 h-20 bg-white sticky top-0">
      <Logo />
      <div className="flex items-center space-x-4">
        <NavButton linkTo="#" title="About" />
        <NavButton linkTo="#" title="Blog" />
        <NavButton linkTo="#" title="Why GrowthLog" />
      </div>
      <NavButton linkTo="#" title="Sign In" primary />
    </nav>
  );
}
