import App from '@/components/App';
import Card from '@/components/Card';
import getGreetings from '@/utils/getGreetings';

export const Layout = ({ children }) => {
  return <div className="flex flex-col space-y-8 w-1/2">{children}</div>;
};

export default function Dashboard() {
  return (
    <App>
      <div className="h-full w-full">
        <h1 className="text-2xl font-semibold">{getGreetings()}</h1>
        <p className="text-md my-2">How are you today?</p>
        <div className="mt-4 flex space-x-8">
          <Layout>
            <Card className="h-60">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Asperiores, rem?
            </Card>
            <Card className="h-52">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              iusto magnam ipsa maiores nobis tempore quas exercitationem rem,
              accusamus ad impedit aliquam est repellendus culpa illum ab
              corrupti, architecto error.
            </Card>
            <Card className="h-52">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              iusto magnam ipsa maiores nobis tempore quas exercitationem rem,
              accusamus ad impedit aliquam est repellendus culpa illum ab
              corrupti, architecto error.
            </Card>
          </Layout>
          <Layout>
            <Card className="h-40">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Asperiores, rem?
            </Card>
            <Card className="h-96">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              iusto magnam ipsa maiores nobis tempore quas exercitationem rem,
              accusamus ad impedit aliquam est repellendus culpa illum ab
              corrupti, architecto error.
            </Card>
          </Layout>
        </div>
      </div>
    </App>
  );
}
