import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <div className="pt-[8.625rem] mb-7">
      <div className="w-[90rem] mx-auto">
        <h1>Oop!!!</h1>
        <h2>
          {err.status}: {err.statusText}
        </h2>
        <p>Something went wrong!!</p>
      </div>
    </div>
  );
};

export default Error;
