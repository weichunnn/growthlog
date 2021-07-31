export default function PageTitle({ title, subtitle }) {
  return (
    <div>
      <h1 className="text-2xl font-bold">{title}</h1>
      <h2 className="text-md my-2">{subtitle}</h2>
    </div>
  );
}
