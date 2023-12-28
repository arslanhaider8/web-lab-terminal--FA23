// src/pages/CategoriesPage.js
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategories, selectCategories } from "../redux/categoriesslice";

const CategoriesPage = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);

  useEffect(() => {
    // Fetch categories data and dispatch the action
    const fetchedCategories = []; // Replace with your API call or data
    dispatch(setCategories(fetchedCategories));
  }, [dispatch]);

  return (
    <div>
      <h2>Categories</h2>
      {/* Render your categories using the 'categories' state */}
      {categories.map((category) => (
        <div key={category.id}>{category.name}</div>
      ))}
    </div>
  );
};

export default CategoriesPage;
