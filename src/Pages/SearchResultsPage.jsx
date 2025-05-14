import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import RestaurantCard from '@components/RestaurantCard';
import MainLayout from 'Layouts/MainLayout';

function SearchResultsPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query) {
      axios
        .get(`http://localhost:5164/api/search/?q=${query}`)
        .then(res => setResults(res.data))
        .catch(err => console.error(err));
    }
  }, [query]);

  return (
    <MainLayout>
        <div className='flex justify-center items-center w-[80%] py-2'>\

            {/* Restaurant Cards container idk */}
            <div className="w-full flex flex-wrap justify-start ">
                {results.map((restaurant) => (
                <RestaurantCard
                    key={restaurant.restaurantId}
                    id = {restaurant.restaurantId}
                    name={restaurant.name}
                    location={restaurant.address}
                    cuisine={restaurant.cuisineName}
                    rating={restaurant.rating}
                    image={restaurant.imgUrl}
                />
                ))}
            </div>

        </div>            
    </MainLayout>
  );
}

export default SearchResultsPage;
