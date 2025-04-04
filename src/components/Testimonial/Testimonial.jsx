import React, { useState, useEffect } from 'react';
import TestimonialForm from './TestimonialForm';
import TestimonialList from './TestimonialList';
import TestimonialSkeleton from './TestimonialSkeleton';

const Testimonial = () => {
  const [loading, setLoading] = useState(true);
  const [testimonials, setTestimonials] = useState([
    {
      title: "Incredible automation capabilities",
      description: "Sonivo's automation features have significantly reduced our workload. The AI assistant handles repetitive queries, freeing up time for our agents to focus on critical tasks. It's been a game-changer for us!",
      name: "Elena R.",
      position: "Customer Success Lead",
      avatar: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=150&h=150&fit=crop",
    },
    {
      title: "Seamless CRM integration",
      description: "The seamless integration with our CRM has streamlined our workflows. Agents have instant access to customer history, making interactions more personalized and efficient.",
      name: "Jordan T.",
      position: "Sales Manager",
      avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=150&h=150&fit=crop",
    },
    {
      title: "Improved response time",
      description: "Since implementing Sonivo, our response time has drastically improved. The AI-driven call routing ensures every call reaches the right agent, reducing wait times and improving customer satisfaction.",
      name: "Priya K.",
      position: "Support Team Lead",
      avatar: "https://images.unsplash.com/photo-1544168190-79c17527004f?w=150&h=150&fit=crop",
    },
    {
      title: "Scalability at its best",
      description: "As our company grows, Sonivo grows with us. The cloud-based infrastructure allows us to add new agents effortlessly while maintaining top-notch service quality.",
      name: "Nathan B.",
      position: "Chief Technology Officer",
      avatar: "https://images.unsplash.com/photo-1485217988980-11786ced9454?w=150&h=150&fit=crop",
    },
    {
      title: "Great for remote teams",
      description: "With remote work becoming the norm, Sonivo has made collaboration between our global support teams seamless. The AI assistant and call management tools ensure we never miss a customer inquiry.",
      name: "Sophia M.",
      position: "Remote Team Coordinator",
      avatar: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=150&h=150&fit=crop",
    },
    {
      title: "Cost-effective solution",
      description: "Sonivo has helped us cut operational costs while improving efficiency. The AI-driven insights allow us to optimize our customer interactions without increasing expenses.",
      name: "Liam D.",
      position: "Finance Director",
      avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&h=150&fit=crop",
    },
    {
      title: "User-friendly and intuitive",
      description: "Sonivo's dashboard is incredibly user-friendly. Even new team members can quickly adapt and start managing calls efficiently with minimal training.",
      name: "Ava C.",
      position: "HR & Training Manager",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    },
    {
      title: "Data-driven insights",
      description: "The analytics and reporting tools in Sonivo provide valuable insights into our call performance. We can now make data-driven decisions to enhance our customer service strategies.",
      name: "Ethan J.",
      position: "Business Analyst",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop",
    },
    {
      title: "24/7 support without extra cost",
      description: "With Sonivo, we can offer 24/7 customer support without hiring additional agents. The AI assistant efficiently handles after-hours inquiries, ensuring our customers always get help.",
      name: "Hannah W.",
      position: "Customer Experience Director",
      avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&h=150&fit=crop",
    },
    {
      title: "Reliable and secure",
      description: "Security is a top priority for us, and Sonivo ensures all our call data is encrypted and stored securely. We trust it completely for our communications.",
      name: "Oliver S.",
      position: "IT Security Manager",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop",
    },
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleAddTestimonial = (newTestimonial) => {
    setTestimonials([...testimonials, {
      ...newTestimonial,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    }]);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Testimonial</h1>
        <div className="flex items-center text-gray-500">
          <span>Dashboard</span>
          <span className="mx-2">•</span>
          <span>Testimonial</span>
        </div>
      </div>

      <TestimonialForm onSubmit={handleAddTestimonial} />

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <TestimonialSkeleton key={i} />
          ))}
        </div>
      ) : (
        <TestimonialList testimonials={testimonials} />
      )}
    </div>
  );
};

export default Testimonial;