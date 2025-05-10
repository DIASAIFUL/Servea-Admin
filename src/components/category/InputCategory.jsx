import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../../utils/authService';

const InputCategory = () => {
  const [categoryName, setCategoryName] = useState('');
  const [categoryIcon, setCategoryIcon] = useState(null);
  const [subcategories, setSubcategories] = useState([{ name: '', image: null }]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubcategoryChange = (index, field, value) => {
    const updated = [...subcategories];
    updated[index][field] = value;
    setSubcategories(updated);
  };

  const addSubcategory = () => {
    setSubcategories([...subcategories, { name: '', image: null }]);
  };

  const removeSubcategory = (index) => {
    const updated = subcategories.filter((_, i) => i !== index);
    setSubcategories(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!categoryName || !categoryIcon || subcategories.some(sc => !sc.name || !sc.image)) {
      setError('Please fill out all required fields.');
      return;
    }

    const formData = new FormData();
    formData.append('category_name', categoryName);
    formData.append('icon', categoryIcon);

    subcategories.forEach((sub, index) => {
      formData.append(`sub_categories[${index}][name]`, sub.name);
      formData.append(`sub_categories[${index}][image]`, sub.image);
    });

    try {
      setLoading(true);
      await API.post('/create-with-subcategory', formData);
      navigate('/categories');
    } catch (err) {
      console.error(err);
      if (err.response && err.response.data?.message) {
        const msg = err.response.data.message;
        const flatMessage = Object.values(msg).flat().join(', ');
        setError(flatMessage || 'Failed to create category.');
      } else {
        setError('Failed to create category.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-md">
      <h2 className="text-2xl font-bold mb-4">Create Category with Subcategories</h2>

      {error && <p className="text-red-600 mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Category Name</label>
          <input
            type="text"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            className="mt-1 block w-full border rounded-md p-2"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Category Icon</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setCategoryIcon(e.target.files[0])}
            className="mt-1"
            required
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Subcategories</h3>
          {subcategories.map((sub, index) => (
            <div key={index} className="border p-4 rounded-md space-y-2 relative">
              <div>
                <label className="block text-sm font-medium">Subcategory Name</label>
                <input
                  type="text"
                  value={sub.name}
                  onChange={(e) => handleSubcategoryChange(index, 'name', e.target.value)}
                  className="mt-1 block w-full border rounded-md p-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Subcategory Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleSubcategoryChange(index, 'image', e.target.files[0])}
                  className="mt-1"
                  required
                />
              </div>
              {subcategories.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeSubcategory(index)}
                  className="absolute top-2 right-2 text-red-600 text-sm"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addSubcategory}
            className="text-primary font-medium hover:underline"
          >
            + Add Another Subcategory
          </button>
        </div>

        <div>
          <button
            type="submit"
            disabled={loading}
            className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark"
          >
            {loading ? 'Submitting...' : 'Create Category'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputCategory;
