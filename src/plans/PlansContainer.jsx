import React, { useState, useEffect } from "react";
import axios from "axios";
import PlanCard from "./PlanCard";
import Loader from "../components/loader/Loader";

const PlansContainer = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await axios.get('https://vokal-api.oyelabs.com/plan/get_plans', {
          headers: {
            'Accept': 'application/json',
            'access-token': 'your-access-token-here'
          }
        });

        if (response.data.success) {
          setPlans(response.data.data || []);
        } else {
          setError(response.data.message || 'Failed to fetch plans');
        }
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch plans. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="min-h-[50vh] bg-primary-200 p-4 md:p-6 w-full flex items-center justify-center">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      </div>
    );
  }

  if (!plans.length) {
    return (
      <div className="min-h-[50vh] bg-primary-200 p-4 md:p-6 w-full flex items-center justify-center">
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded">
          No plans available at the moment.
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[50vh] bg-primary-200 p-4 md:p-6 w-full">
      <div className="flex flex-col items-center justify-between mb-8 w-full">
        <div className="flex justify-start items-center w-full">
          <img
            src="https://sonivo.oneoftheprojects.com/assets/plan.svg"
            alt="Plans"
            className="h-16 md:h-24 w-16 md:w-24"
          />
        </div>
        <div className="w-full justify-between items-center flex mt-4">
          <div className="space-y-2">
            <h1 className="text-xl md:text-2xl font-medium text-primary">Plans</h1>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span>Dashboard</span>
              <span>•</span>
              <span>Plans</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
        {plans.map((plan) => (
          <PlanCard key={plan.id} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default PlansContainer;