import React from "react";
import styles from "./Blogs.module.css";

const Blogs = () => {
  // Data for the blogs
  const data = [
    {
      id: 1,
      heading: "Speaking SQL: Turning Natural Language into Database Dialogues",
      description:
        "Bridging Language and Data in the Enterprise Sphere: In the realm of enterprise data management, SQL databases have long stood as the backbone, housing vast quantities of invaluable information. As enterprises increasingly lean on business intelligence (BI) tools to extract insights from these data repositories, the quest for more intuitive and accessible querying methods gains momentum. The emerging solution? Leveraging Large Language Models (LLMs) to interact with SQL databases using natural language.",
      image:
        "https://www.bluetickconsultants.com/images/blog/speaking-sql/blog-poster.png",
      link: "https://www.bluetickconsultants.com/speaking-sql-turning-natural-language-into-database-dialogues.html",
    },
    {
      id: 2,
      heading:
        "Beyond Basics: Elevating AI with Reinforcement Learning from Human Feedback",
      description:
        "Reinforcement Learning from Human Feedback (RLHF) was arguably the key behind the success of ChatGPT, marking a significant advancement in AI's ability to understand and engage in human language. This method, vital for fine-tuning language models, addresses the complexities and nuances of communication, ensuring AI interactions are natural and intuitive. It navigates the challenges of training AI with diverse internet data, carefully guiding models to avoid replicating inappropriate language or tones.",
      image:
        "https://www.bluetickconsultants.com/images/blog/beyond-basics/blog-poster.png",
      link: "https://www.bluetickconsultants.com/beyond-basics-elevating-ai-with-reinforcement-learning-from-human-feedback.html",
    },
    {
      id: 3,
      heading: "The Fine Art of Tuning: Parameter-Efficient Fine-Tuning",
      description:
        "Welcome to our exploration of the fascinating world of large language models! As many of you are aware, the scale of these models has skyrocketed recently. Take, for instance, GPT-4, which boasts a staggering 1.8 trillion parameters. The desire to fine-tune these behemoths with custom datasets is growing, yet it poses significant challenges. Fine-tuning requires adjusting countless parameters, which is time-consuming, and the GPU demands are nothing short of immense.",
      image:
        "https://www.bluetickconsultants.com/images/blog/fine-art-tuning/blog-poster.png",
      link: "https://www.bluetickconsultants.com/the-fine-art-of-tuning-parameter-efficient-fine-tuning.html",
    },
    {
      id: 4,
      heading: "PrivAIcy Matters: Balancing Privacy, Price, and Performance",
      description:
        "Welcome to the enthralling universe of Generative AI! Recognized as a realm of artificial intelligence algorithms with the magic to conjure fresh content based on available data, this technology has unassumingly become the new frontier for a plethora of industries, including tech, banking, and media. And, no surprises here, the technological world has openly embraced it in myriad innovative ways.",
      image:
        "https://www.bluetickconsultants.com/images/blog/privacy-matters/privacy-designer.webp",
      link: "https://www.bluetickconsultants.com/privaicy-matters-balancing-privacy-price-and-performance-in-in-house-llm-deployments.html",
    },
  ];

  return (
    <section id="blogs" className={styles.blogs}>
      {/* Title for the blogs section */}
      <h2 className="heading-font">
        Explore and enjoy the blogs written by our passionate techies.
      </h2>
      {/* Container for blogs */}
      <div className={styles.blogs_container}>
        {/* Mapping over blog data */}
        {data.map((data) => {
          return (
            <div className={styles.blogs_item} key={data.id}>
              {/* Blog image */}
              <img src={data.image} alt={data.heading} />
              {/* Blog heading with link */}
              <h3>
                <a
                  href={data.link}
                  target="_blank"
                  rel="noreferrer"
                  className="heading-font"
                >
                  {data.heading}
                </a>
              </h3>
              {/* Blog description */}
              <p className="content-font">{data.description}</p>
              {/* Button to read more */}
              <a href={data.link}>
                <button
                  className="content-font"
                  aria-label={`Read more about ${data.heading}`}
                >
                  Read more
                </button>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Blogs;
