import type { Route } from "./+types/home";

// Define the type for the loader data
type LoaderData = {
  message: string;
};

// Async loader function with a return type annotation
export async function loader(): Promise<LoaderData> {
  return { message: "Hello, world!" };
}

// Define the props type for the component
interface HomeProps {
  loaderData: LoaderData;
}

// Functional component with typed props
export default function Home({ loaderData }: HomeProps) {
  return (
    <div>
      <h1>Look ma!</h1>
      <p>{loaderData.message}</p>
    </div>
  );
}