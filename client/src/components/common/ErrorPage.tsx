import { useNavigate } from "react-router-dom";

interface ErrorPageProps {
  status?: number;
  title?: string;
  description?: string;
}

const ErrorPage = ({ description, status, title }: ErrorPageProps) => {
  const navigate = useNavigate();

  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-blue-600 ">
            {status ? status : "500"}
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">
            {title ? title : "Something went wrong"}
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dar">
            {description
              ? description
              : "Sorry, we can't find that page. You'll find lots to explore on the home page."}
          </p>
          <a
            onClick={() => navigate("/giangvien")}
            className="inline-flex text-white cursor-pointer transition-all bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4"
          >
            Back to Homepage
          </a>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
