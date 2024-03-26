import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div>
      <h1>Oop!!!</h1>
      <h2>
        {err.status}: {err.statusText}
      </h2>
      <p>Something went wrong!!</p>
    </div>
  );
};

export default Error;
