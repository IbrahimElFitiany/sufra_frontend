import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RestaurantCard from '@components/RestaurantCard';
import Menu from '@components/Menu';
import MainLayout from '@layouts/MainLayout';


function RestaurantPage() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRestaurantData = async () => {
      try {
        const response = await fetch(`http://localhost:5272/api/Restaurant/${id}`);
        if (!response.ok) throw new Error("Failed to fetch restaurant data");
        const data = await response.json();
        if (!data || Object.keys(data).length === 0) {
          throw new Error("No restaurant found.");
        }
        setRestaurant(data);
      } catch (error) {
        setError(error.message);
        console.error('Error fetching restaurant data:', error);
      }
    };

    fetchRestaurantData();
  }, [id]);

  return (
    <MainLayout>
      {error ? (
        <p className="text-red-500 text-center mt-10">{error}</p>
      ) : (
        <>
          <RestaurantCard restaurant={restaurant} />
          <Menu menus={restaurant?.menus || []} />
        </>
      )}
    </MainLayout>
  );
}

export default RestaurantPage;
