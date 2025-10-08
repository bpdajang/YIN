import React, { useEffect } from "react";
import {
  FaFileAlt,
  FaVideo,
  FaBook,
  FaLink,
  FaQuestionCircle,
  FaComments,
  FaNewspaper,
  FaTrophy,
  FaDownload,
  FaPlay,
  FaExternalLinkAlt,
} from "react-icons/fa";

const ResourcesPage = () => {
  const [templates, setTemplates] = React.useState([]);
  const [eLearning, setELearning] = React.useState([]);
  const [references, setReferences] = React.useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/api/resource`
        );
        const data = await response.json();
        setTemplates(data.templates || []);
        setELearning(data.eLearning || []);
        setReferences(data.references || []);
      } catch (error) {
        console.error("Error fetching resources:", error);
        setTemplates([]);
        setELearning([]);
        setReferences([]);
      }
    };
    fetchData();
  }, []);

  // const templates = [
  //   {
  //     name: "CV Template",
  //     description: "Professional CV template for job applications.",
  //     download: "#",
  //   },
  //   {
  //     name: "Cover Letter Guide",
  //     description: "Step-by-step guide to writing cover letters",
  //     download: "#",
  //   },
  //   {
  //     name: "Weekly Planner",
  //     description: "Organize your week with this planner template",
  //     download: "#",
  //   },
  // ];

  // const eLearning = [
  //   {
  //     name: "Leadership Skills Module",
  //     description: "Interactive module on leadership",
  //     link: "#",
  //   },
  //   {
  //     name: "Time Management Webinar",
  //     description: "Recorded webinar on effective time management",
  //     link: "#",
  //   },
  // ];

  // const references = [
  //   {
  //     name: "Career Development Article",
  //     description: "Insights on building a successful career",
  //     link: "#",
  //   },
  //   {
  //     name: "Mental Health Resources",
  //     description: "Guides for maintaining mental well-being",
  //     link: "#",
  //   },
  // ];

  const faqs = [
    {
      question: "How do I access the templates?",
      answer: "Click on the download link next to each template.",
    },
    {
      question: "Are webinars free?",
      answer: "Yes, all recorded webinars are available for free.",
    },
  ];

  const forums = [
    {
      name: "General Discussion",
      description: "Discuss various topics with the community",
      link: "#",
    },
    {
      name: "Career Advice",
      description: "Get advice on career-related questions",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Resources</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Access valuable tools, guides, and materials to support your
            continuous learning and growth.
          </p>
        </div>

        {/* Templates and Guides */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
            <FaFileAlt className="mr-2 text-blue-500" /> Templates and Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <a
                  href={`${
                    import.meta.env.VITE_API_BASE_URL
                  }/api/resource/download/${item._id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 flex items-center"
                >
                  <FaDownload className="mr-1" /> Download
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* E-learning Modules and Webinars */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
            <FaVideo className="mr-2 text-green-500" /> E-learning Modules and
            Webinar Recordings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {eLearning.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:text-green-700 flex items-center"
                >
                  <FaPlay className="mr-1" /> Watch Now
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Reference Materials and Articles */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
            <FaBook className="mr-2 text-purple-500" /> Reference Materials and
            Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {references.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-500 hover:text-purple-700 flex items-center"
                >
                  <FaExternalLinkAlt className="mr-1" /> Read More
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* External Partner Links
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
            <FaLink className="mr-2 text-orange-500" /> External Partner Links
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partners.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <a
                  href={item.link}
                  className="text-orange-500 hover:text-orange-700 flex items-center"
                >
                  <FaExternalLinkAlt className="mr-1" /> Visit Site
                </a>
              </div>
            ))}
          </div>
        </section> */}

        {/* FAQs */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
            <FaQuestionCircle className="mr-2 text-red-500" /> FAQs
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Community Forums */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
            <FaComments className="mr-2 text-indigo-500" /> Community Forums
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {forums.map((forum, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  {forum.name}
                </h3>
                <p className="text-gray-600 mb-4">{forum.description}</p>
                <a
                  href={forum.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-500 hover:text-indigo-700 flex items-center"
                >
                  <FaComments className="mr-1" /> Join Discussion
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletters
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
            <FaNewspaper className="mr-2 text-teal-500" /> Newsletters
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            {newsletters.map((news, index) => (
              <div key={index}>
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  {news.name}
                </h3>
                <p className="text-gray-600 mb-4">{news.description}</p>
                <a
                  href={news.subscribe}
                  className="text-teal-500 hover:text-teal-700 flex items-center"
                >
                  <FaNewspaper className="mr-1" /> Subscribe
                </a>
              </div>
            ))}
          </div>
        </section> */}

        {/* Success Stories
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
            <FaTrophy className="mr-2 text-yellow-500" /> Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stories.map((story, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  {story.name}
                </h3>
                <p className="text-gray-600 mb-4">{story.description}</p>
                <a
                  href={story.link}
                  className="text-yellow-500 hover:text-yellow-700 flex items-center"
                >
                  <FaTrophy className="mr-1" /> Read Story
                </a>
              </div>
            ))}
          </div>
        </section> */}
      </div>
    </div>
  );
};

export default ResourcesPage;
