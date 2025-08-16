import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ 
  title = "Saikumar Pendyala - Full Stack Developer | React, Node.js, MERN Stack",
  description = "Saikumar Pendyala (Sai) - Experienced Full Stack Developer specializing in React.js, Node.js, MERN stack, and cloud technologies. 4+ years of experience in web development and automation. Portfolio of Pendyala Saikumar showcasing modern web applications.",
  keywords = "Saikumar, Sai, Pendyala, Saikumar Pendyala, Pendyala Saikumar, SaikumarPendyala, PendyalaSaikumar, Sai React Developer, Sai Pendyala, Saikumar Developer, Pendyala Developer, Full Stack Developer, React Developer, Node.js Developer, MERN Stack Developer, JavaScript Developer, Web Developer, Frontend Developer, Backend Developer, React.js Expert, Node.js Expert, Portfolio, Saikumar Portfolio, Pendyala Portfolio, React Portfolio, Full Stack Portfolio, Web Development Portfolio, JavaScript Portfolio, MERN Stack Portfolio",
  image = "https://saikumar-pendyala.web.app/src/assets/images/portfolio-preview.jpg",
  url = "https://saikumar-pendyala.web.app"
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Saikumar Pendyala, Sai Pendyala, Pendyala Saikumar" />
      
      {/* Additional SEO meta tags for name variations */}
      <meta name="dcterms.creator" content="Saikumar Pendyala" />
      <meta name="dcterms.subject" content="Saikumar, Sai, Pendyala, React Developer, Full Stack Developer" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Name variations for better discovery */}
      <meta name="alternate-names" content="Sai, Saikumar, Pendyala, SaikumarPendyala, PendyalaSaikumar" />
      <meta name="professional-title" content="Sai React Developer, Saikumar Full Stack Developer, Pendyala MERN Stack Developer" />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="profile" />
      <meta property="og:site_name" content="Saikumar Pendyala Portfolio" />
      <meta property="profile:first_name" content="Saikumar" />
      <meta property="profile:last_name" content="Pendyala" />
      <meta property="profile:username" content="SaikumarPendyala" />
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@SaikumarPendyala" />
      
      {/* LinkedIn Specific */}
      <meta property="linkedin:card" content="summary_large_image" />
      <meta property="linkedin:title" content={title} />
      <meta property="linkedin:description" content={description} />
      <meta property="linkedin:image" content={image} />
      
      {/* Schema.org structured data for better search results */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Saikumar Pendyala",
          "alternateName": ["Sai", "Sai Pendyala", "Pendyala Saikumar", "SaikumarPendyala", "PendyalaSaikumar"],
          "jobTitle": "Full Stack Developer",
          "description": "Experienced Full Stack Developer specializing in React.js, Node.js, MERN stack",
          "url": url,
          "image": image,
          "sameAs": [
            "https://linkedin.com/in/saikumar-pendyala",
            "https://github.com/SaikumarP1107"
          ],
          "knowsAbout": [
            "React.js", "Node.js", "JavaScript", "MERN Stack", "Full Stack Development",
            "Frontend Development", "Backend Development", "Web Development"
          ],
          "alumniOf": "Computer Science",
          "worksFor": {
            "@type": "Organization",
            "name": "Technology Industry"
          }
        })}
      </script>
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Additional meta tags for search engines */}
      <meta name="classification" content="Full Stack Developer Portfolio" />
      <meta name="category" content="Technology, Web Development, Software Development" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />
      <meta name="revisit-after" content="7 days" />
    </Helmet>
  );
};

export default SEO;
