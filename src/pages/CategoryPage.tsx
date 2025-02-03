import React from 'react';
import CategoriesNav from '../components/CategoriesNav'; // ✅ Import CategoriesNav

const CategoryPage: React.FC = () => {
  return (
    <div>
      {/* ✅ Render only CategoriesNav */}
      <CategoriesNav />
    </div>
  );
};

export default CategoryPage;
