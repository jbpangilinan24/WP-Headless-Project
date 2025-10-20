import React from 'react'
import Button from '../components/Button';
import BlogList from '../components/BlogList';

import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  const goToAbout = () => navigate("/about");
  return (
    <>    
      <div className="text-center py-12">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6 animate-fade-in-down">Welcome to my First React!</h1>
        <p className="text-xl text-neutral-950 max-w-3xl mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          A quod reiciendis cum voluptatem dignissimos, nisi qui, 
          animi accusamus id voluptates facere, dolorum laboriosam dicta in impedit totam voluptatibus assumenda incidunt.</p>
          <Button addClassses={"mt-6"} label="Learn more" onClick={goToAbout} />
      </div>

      <BlogList/>
    </>
  )
}
