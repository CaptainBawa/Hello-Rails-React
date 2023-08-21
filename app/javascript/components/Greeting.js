import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGreetings } from "../redux/greet/greetingsSlice";

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(getGreetings());
  }, [dispatch]);

  return (
    <div>
      <h3>{greeting.greeting}, welcome to my app</h3>
    </div>
  );
}

export default Greeting;