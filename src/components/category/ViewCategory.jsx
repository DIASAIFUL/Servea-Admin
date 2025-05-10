
import React, { useEffect, useState } from 'react';
import API from '../../utils/authService';


const ViewCategory = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await API.get('/get-all-category');
      if (res.data.status) {
        setCategories(res.data.data.data); // response.data.data.data contains category list
      } else {
        setError('Failed to fetch categories.');
      }
    } catch (err) {
      setError('Something went wrong while fetching data.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error) return <div className="text-center text-red-600 py-10">{error}</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Categories & Subcategories</h1>
      <div className="space-y-8">
        {categories.map((category) => (
          <div key={category.id} className="bg-white shadow rounded-lg p-6 border">
            <div className="flex items-center mb-4">
              <img
                src={category.icon}
                alt={category.name}
                className="w-10 h-10 mr-3 rounded"
              />
              <h2 className="text-xl font-semibold">{category.name}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {category.subcategories.map((sub) => (
                <div
                  key={sub.id}
                  className="border rounded-md shadow-sm p-3 bg-gray-50"
                >
                  <img
                    src={sub.image}
                    alt={sub.name}
                    className="w-full h-40 object-cover mb-2 rounded"
                  />
                  <h3 className="text-sm font-medium text-center">{sub.name}</h3>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewCategory;
