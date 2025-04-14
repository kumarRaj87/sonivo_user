import React, { useState, useEffect } from "react";
import PlanCard from "./PlanCard";
import { IoMdPhonePortrait } from "react-icons/io";
import Loader from "../components/loader/Loader";

const PlansContainer = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  const mockPlans = [
    {
      id: 1,
      name: "Trial",
      price: "49",
      description:
        "Experience all premium features with our 7-day free trial, no commitment required. Dive into our tools and see how they elevate your workflow!",
      dialer: true,
      callBroadcast: true,
      messaging: true,
      agentAccess: true,
      isTrial: true,
      phonebookLimit: 1000,
      deviceLimit: 1,
      planDuration: 7,
    },
    {
      id: 2,
      name: "Gold",
      price: "99",
      description:
        "Unlock exclusive access with the Gold Plan, featuring advanced tools, priority support, and extended usage limits. Perfect for growing teams aiming to boost productivity and efficiency!",
      dialer: true,
      callBroadcast: false,
      messaging: true,
      agentAccess: true,
      isTrial: false,
      phonebookLimit: 10000,
      deviceLimit: 5,
      planDuration: 30,
    },
    {
      id: 3,
      name: "Platinum",
      price: "199",
      description:
        "Gain unlimited access to all premium features with the Platinum Plan, including personalized support and priority upgrades. Ideal for power users and enterprises seeking maximum performance and flexibility!",
      dialer: true,
      callBroadcast: true,
      messaging: true,
      agentAccess: true,
      isTrial: false,
      phonebookLimit: 9968,
      deviceLimit: 1,
      planDuration: 30,
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setPlans(mockPlans);
      setLoading(false)
    }
      , 300);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-[50vh] bg-primary-200 p-2 w-full">
      <div className="flex flex-col items-center justify-between mb-8">
        <div className="flex justify-start items-center w-full">
          <img
            src="https://sonivo.oneoftheprojects.com/assets/plan.svg"
            alt=""
            className="h-24 w-24"
          />
        </div>
        <div className="w-full justify-between items-center flex">
          <div className="space-y-2 flex flex-col">
            <h1 className="text-2xl font-medium text-primary"> Plans</h1>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span>Dashboard</span>
              <span>•</span>
              <span>Plans</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <PlanCard
            key={plan.id}
            plan={plan}
          />
        ))}
      </div>
    </div>
  );
};

export default PlansContainer;