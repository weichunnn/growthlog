import NextLink from 'next/link';

export default function Logo({ additionalClasses }) {
  return (
    <NextLink href="/">
      <a className={`flex items-center cursor-pointer ${additionalClasses}`}>
        <img src="/static/growthlog-logo.png" className="h-12 w-12 mr-6" />
        <h1 className="text-lg font-semibold">GrowthLog</h1>
      </a>
    </NextLink>
  );
}
