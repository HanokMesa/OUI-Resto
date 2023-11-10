import React from "react";
import { CreateContainer, Header, MainContainer } from "./Components";
import { AnimatePresence } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useStateValue } from "./context/StateProvider";
import { actionType } from "./context/reducer";
import { getAllFoodItems } from "./utils/firebaseFunctions";

const App = () => {
  const [{ foodItems }, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <AnimatePresence wait>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />

        <main className="mt-14 md:mt-28 px-4 md:px-16 py-4 w-full">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
};

export default App;
