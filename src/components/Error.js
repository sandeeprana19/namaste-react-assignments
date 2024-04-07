import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <div className="container">
      <h1>Oop!!!</h1>
      <h2>
        {err.status}: {err.statusText}
      </h2>
      <p>Something went wrong!!</p>
    </div>
  );
};

export default Error;
