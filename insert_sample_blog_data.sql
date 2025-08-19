-- Insert Sample Blog Data for Acmedix Pharma
-- Run this SQL in your Supabase SQL Editor AFTER running the blog schema

-- Insert sample blog posts (the categories and authors should already exist from the schema)
INSERT INTO blog_posts (
    title, 
    slug, 
    excerpt, 
    content, 
    featured_image, 
    category_id, 
    author_id, 
    status, 
    featured, 
    read_time, 
    published_at,
    meta_title,
    meta_description
) VALUES 
(
    'Revolutionizing Diabetes Care: Latest Advances in Anti-Diabetic Formulations',
    'revolutionizing-diabetes-care-anti-diabetic-formulations',
    'Discover how innovative drug delivery systems are transforming diabetes management with enhanced bioavailability and patient compliance.',
    '<p>Diabetes affects millions globally, and the pharmaceutical industry continues to innovate in developing more effective treatments. At Acmedix, our research focuses on creating advanced anti-diabetic formulations that offer superior bioavailability and improved patient outcomes.</p>

<h2>The Challenge of Diabetes Management</h2>
<p>Managing diabetes effectively requires consistent medication adherence, which can be challenging for patients who need to take multiple doses throughout the day. Traditional formulations often lead to fluctuating blood glucose levels, making it difficult to achieve optimal glycemic control.</p>

<h2>Innovation in Drug Delivery Systems</h2>
<p>Our latest developments in sustained-release technologies have shown promising results in clinical trials. These innovative systems allow for:</p>
<ul>
  <li>Extended drug release profiles that maintain therapeutic levels for 24 hours</li>
  <li>Reduced dosing frequency from multiple daily doses to once-daily administration</li>
  <li>Improved patient compliance and quality of life</li>
  <li>Enhanced bioavailability through optimized formulation design</li>
</ul>

<h2>Nanotechnology Applications</h2>
<p>We''ve incorporated nanotechnology into our anti-diabetic formulations to enhance drug targeting and reduce side effects. Our nanoparticle-based delivery systems can:</p>
<ul>
  <li>Target specific tissues and cells more effectively</li>
  <li>Protect the active ingredient from degradation</li>
  <li>Provide controlled release over extended periods</li>
  <li>Minimize systemic side effects</li>
</ul>

<h2>Clinical Trial Results</h2>
<p>Our Phase III clinical trials have demonstrated significant improvements in patient outcomes:</p>
<ul>
  <li>85% of patients achieved target HbA1c levels within 12 weeks</li>
  <li>40% reduction in hypoglycemic episodes compared to standard therapy</li>
  <li>95% patient satisfaction rate with once-daily dosing</li>
  <li>Significant improvement in quality of life scores</li>
</ul>

<h2>Future Directions</h2>
<p>This breakthrough represents a significant step forward in making diabetes management more convenient and effective for patients worldwide. Our commitment to innovation continues as we explore new frontiers in personalized medicine and smart drug delivery systems.</p>

<p>At Acmedix, we believe that better healthcare should be accessible to all. Our affordable anti-diabetic formulations are designed to provide world-class treatment options without compromising on quality or efficacy.</p>',
    'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1200&h=600&fit=crop',
    1, -- Anti-Diabetic category
    1, -- Dr. Priya Sharma
    'published',
    true, -- featured
    8,
    '2024-12-15 10:00:00+00',
    'Latest Advances in Anti-Diabetic Formulations | Acmedix Pharma',
    'Learn about Acmedix''s breakthrough anti-diabetic formulations with enhanced bioavailability and patient compliance.'
),
(
    'The Future of Cardiac Care: Novel Drug Delivery Systems for Heart Health',
    'future-cardiac-care-novel-drug-delivery-systems',
    'Exploring breakthrough technologies in cardiovascular medicine that promise better therapeutic outcomes and reduced side effects.',
    '<p>Cardiovascular diseases remain a leading cause of mortality worldwide. Our R&D team has been working tirelessly to develop novel drug delivery systems that can precisely target cardiac tissues while minimizing systemic side effects.</p>

<h2>Challenges in Cardiac Drug Delivery</h2>
<p>Traditional cardiac medications face several challenges:</p>
<ul>
  <li>Poor bioavailability due to first-pass metabolism</li>
  <li>Systemic side effects affecting other organs</li>
  <li>Short half-life requiring frequent dosing</li>
  <li>Difficulty in achieving targeted therapeutic levels</li>
</ul>

<h2>Liposomal Delivery Platforms</h2>
<p>Through our innovative liposomal delivery platforms, we''ve achieved remarkable improvements in drug efficacy. Our liposomal formulations offer:</p>
<ul>
  <li>Enhanced drug stability and protection from degradation</li>
  <li>Targeted delivery to cardiac tissues</li>
  <li>Reduced systemic toxicity</li>
  <li>Extended circulation time in the bloodstream</li>
</ul>

<h2>Nanotechnology Applications</h2>
<p>Our nanotechnology applications have revolutionized cardiac care by enabling:</p>
<ul>
  <li>Precise targeting of specific cardiac cell types</li>
  <li>Controlled drug release at the target site</li>
  <li>Real-time monitoring of drug delivery</li>
  <li>Combination therapy in a single delivery system</li>
</ul>

<h2>Patient Benefits</h2>
<p>These advances not only enhance therapeutic outcomes but also significantly improve patient quality of life:</p>
<ul>
  <li>Reduced dosing frequency from multiple daily doses to once or twice daily</li>
  <li>Fewer side effects and improved tolerance</li>
  <li>Better disease management and outcomes</li>
  <li>Enhanced patient compliance and satisfaction</li>
</ul>

<h2>Our Commitment to Cardiac Care</h2>
<p>Our commitment to cardiac care excellence continues to drive innovation in this critical therapeutic area. We''re dedicated to developing affordable, effective solutions that can reach patients globally, ensuring that advanced cardiac care is not limited by economic barriers.</p>',
    'https://images.unsplash.com/photo-1584362917165-526a968579e8?w=1200&h=600&fit=crop',
    2, -- Cardiac Care category
    2, -- Dr. Rajesh Kumar
    'published',
    false, -- not featured
    6,
    '2024-12-10 10:00:00+00',
    'Novel Drug Delivery Systems for Heart Health | Acmedix Pharma',
    'Discover Acmedix''s breakthrough technologies in cardiovascular medicine for better therapeutic outcomes.'
),
(
    'Neurotherapy Breakthroughs: Advancing Treatment for Neurological Disorders',
    'neurotherapy-breakthroughs-neurological-disorders',
    'How cutting-edge research in neurological treatments is opening new possibilities for patients with complex neurological conditions.',
    '<p>Neurological disorders present unique challenges in drug development due to the blood-brain barrier and complex pathophysiology. Our specialized neurotherapy research division has made significant strides in developing innovative formulations that can effectively cross the blood-brain barrier and deliver therapeutic agents directly to neural tissues.</p>

<h2>The Blood-Brain Barrier Challenge</h2>
<p>The blood-brain barrier (BBB) is one of the most significant obstacles in neurological drug development:</p>
<ul>
  <li>Highly selective barrier that prevents most drugs from entering the brain</li>
  <li>Protects the brain but also limits therapeutic options</li>
  <li>Requires specialized delivery mechanisms to overcome</li>
  <li>Traditional approaches often result in poor drug penetration</li>
</ul>

<h2>Advanced Targeting Systems</h2>
<p>Our research team has developed sophisticated targeting systems that can navigate the BBB:</p>
<ul>
  <li>Receptor-mediated transcytosis systems</li>
  <li>Nanoparticle-based carriers with surface modifications</li>
  <li>Liposomal formulations with targeting ligands</li>
  <li>Cell-penetrating peptides for enhanced delivery</li>
</ul>

<h2>Sustained-Release Technologies</h2>
<p>Through our advanced sustained-release technologies, we''re able to provide:</p>
<ul>
  <li>More consistent therapeutic levels in neural tissues</li>
  <li>Reduced dosing frequency for better patient compliance</li>
  <li>Minimized systemic side effects</li>
  <li>Extended duration of action</li>
</ul>

<h2>Clinical Applications</h2>
<p>Our neurotherapy innovations are being applied to treat various conditions:</p>
<ul>
  <li>Neurodegenerative diseases like Alzheimer''s and Parkinson''s</li>
  <li>Epilepsy and seizure disorders</li>
  <li>Depression and anxiety disorders</li>
  <li>Chronic pain management</li>
</ul>

<h2>Patient Impact</h2>
<p>This research represents hope for millions of patients suffering from neurological conditions:</p>
<ul>
  <li>Improved symptom management and disease progression control</li>
  <li>Enhanced quality of life and functional outcomes</li>
  <li>Reduced caregiver burden and healthcare costs</li>
  <li>Better long-term prognosis and treatment outcomes</li>
</ul>

<h2>Future Research Directions</h2>
<p>We continue to push the boundaries of neurotherapy research, exploring new frontiers in personalized medicine, gene therapy delivery, and regenerative neuroscience. Our goal is to make advanced neurological treatments accessible and affordable for patients worldwide.</p>',
    'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=600&fit=crop',
    3, -- Neurotherapy category
    3, -- Dr. Anil Mehta
    'published',
    false, -- not featured
    7,
    '2024-12-05 10:00:00+00',
    'Neurotherapy Breakthroughs for Neurological Disorders | Acmedix Pharma',
    'Learn about Acmedix''s cutting-edge research in neurological treatments and blood-brain barrier solutions.'
);

-- Insert blog post tags relationships
INSERT INTO blog_post_tags (post_id, tag_id) VALUES
-- Post 1 tags (Diabetes, Drug Delivery, Nanotechnology, Clinical Trials)
(1, 1), (1, 2), (1, 3), (1, 4),
-- Post 2 tags (Cardiology, Liposomes, Targeted Therapy, Heart Health)
(2, 5), (2, 6), (2, 7), (2, 8),
-- Post 3 tags (Neurology, Blood-Brain Barrier, Neuropharma, Research)
(3, 9), (3, 10), (3, 11), (3, 12);

-- Check if data was inserted correctly
SELECT 
    bp.id,
    bp.title,
    bp.status,
    bp.featured,
    bc.name as category,
    ba.name as author,
    bp.published_at
FROM blog_posts bp
JOIN blog_categories bc ON bp.category_id = bc.id
JOIN blog_authors ba ON bp.author_id = ba.id
ORDER BY bp.published_at DESC;