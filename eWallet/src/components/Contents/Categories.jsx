import React, { useState } from "react";
import "./Allcontent.css";

function AddCategory() {
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState(["Food", "Transport", "Utilities"]);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleAddCategory = (e) => {
    e.preventDefault();
    if (category.trim()) {
      setCategories((prevCategories) => [...prevCategories, category.trim()]);
      setCategory(""); // Clear input field
    }
  };

  return (
    <div className="add-category-panel">
      <h1>Add New Category</h1>
      <form className="category-form" onSubmit={handleAddCategory}>
        <input
          type="text"
          name="category"
          placeholder="Enter category name"
          value={category}
          onChange={handleCategoryChange}
          required
        />
        <button type="submit" className="add-category-btn">
          Add Category
        </button>
      </form>
      <div className="existing-categories">
        <h2>Existing Categories</h2>
        <ul>
          {categories.map((cat, index) => (
            <li key={index}>{cat}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AddCategory;
