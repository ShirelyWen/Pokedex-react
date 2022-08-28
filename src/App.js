import React, { useEffect, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchPokemonData } from "./store/actions/pokemon-actions";
import HomePage from "./pages/HomePage";

const PokemonDetailsPage = React.lazy(() =>
  import("./pages/PokemonDetailsPage")
);

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPokemonData());
  }, [dispatch]);
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:id" element={<PokemonDetailsPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
