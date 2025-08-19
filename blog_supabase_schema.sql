-- Blog System Supabase Schema
-- Run this SQL in your Supabase SQL Editor

-- 1. Blog Categories Table
CREATE TABLE blog_categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    slug VARCHAR(100) NOT NULL UNIQUE,
    description TEXT,
    color VARCHAR(20) DEFAULT 'bg-blue-500',
    icon VARCHAR(50) DEFAULT 'Heart',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Blog Authors Table
CREATE TABLE blog_authors (
    id SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    email VARCHAR(255) UNIQUE,
    bio TEXT,
    avatar_url VARCHAR(500),
    title VARCHAR(150),
    experience_years INTEGER,
    specialization TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Blog Posts Table
CREATE TABLE blog_posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(300) NOT NULL,
    slug VARCHAR(300) NOT NULL UNIQUE,
    excerpt TEXT NOT NULL,
    content TEXT NOT NULL,
    featured_image VARCHAR(500),
    category_id INTEGER REFERENCES blog_categories(id) ON DELETE SET NULL,
    author_id INTEGER REFERENCES blog_authors(id) ON DELETE SET NULL,
    
    -- Status and visibility
    status VARCHAR(20) DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
    featured BOOLEAN DEFAULT FALSE,
    
    -- SEO and metadata
    meta_title VARCHAR(300),
    meta_description TEXT,
    read_time INTEGER, -- in minutes
    
    -- Timestamps
    published_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Blog Tags Table
CREATE TABLE blog_tags (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    slug VARCHAR(100) NOT NULL UNIQUE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Blog Post Tags Junction Table (Many-to-Many)
CREATE TABLE blog_post_tags (
    id SERIAL PRIMARY KEY,
    post_id INTEGER REFERENCES blog_posts(id) ON DELETE CASCADE,
    tag_id INTEGER REFERENCES blog_tags(id) ON DELETE CASCADE,
    UNIQUE(post_id, tag_id)
);

-- 6. Blog Views/Analytics Table (Optional)
CREATE TABLE blog_post_views (
    id SERIAL PRIMARY KEY,
    post_id INTEGER REFERENCES blog_posts(id) ON DELETE CASCADE,
    ip_address INET,
    user_agent TEXT,
    viewed_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. Newsletter Subscribers Table (for blog newsletter)
CREATE TABLE newsletter_subscribers (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    name VARCHAR(150),
    subscribed_at TIMESTAMPTZ DEFAULT NOW(),
    is_active BOOLEAN DEFAULT TRUE,
    unsubscribed_at TIMESTAMPTZ
);

-- Create indexes for better performance
CREATE INDEX idx_blog_posts_status ON blog_posts(status);
CREATE INDEX idx_blog_posts_featured ON blog_posts(featured);
CREATE INDEX idx_blog_posts_published_at ON blog_posts(published_at);
CREATE INDEX idx_blog_posts_category ON blog_posts(category_id);
CREATE INDEX idx_blog_posts_author ON blog_posts(author_id);
CREATE INDEX idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX idx_blog_post_views_post_id ON blog_post_views(post_id);
CREATE INDEX idx_blog_post_views_viewed_at ON blog_post_views(viewed_at);

-- Enable Row Level Security
ALTER TABLE blog_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_authors ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_post_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_post_views ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Allow public read for published posts" ON blog_posts
    FOR SELECT USING (status = 'published');

CREATE POLICY "Allow public read for categories" ON blog_categories
    FOR SELECT USING (true);

CREATE POLICY "Allow public read for authors" ON blog_authors
    FOR SELECT USING (true);

CREATE POLICY "Allow public read for tags" ON blog_tags
    FOR SELECT USING (true);

CREATE POLICY "Allow public read for post-tags" ON blog_post_tags
    FOR SELECT USING (true);

CREATE POLICY "Allow public insert for views" ON blog_post_views
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public insert for newsletter" ON newsletter_subscribers
    FOR INSERT WITH CHECK (true);

-- Grant permissions
GRANT SELECT ON blog_categories TO anon;
GRANT SELECT ON blog_authors TO anon;
GRANT SELECT ON blog_posts TO anon;
GRANT SELECT ON blog_tags TO anon;
GRANT SELECT ON blog_post_tags TO anon;
GRANT INSERT ON blog_post_views TO anon;
GRANT INSERT ON newsletter_subscribers TO anon;
GRANT USAGE ON ALL SEQUENCES IN SCHEMA public TO anon;

-- Create function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_blog_categories_updated_at 
    BEFORE UPDATE ON blog_categories 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_blog_authors_updated_at 
    BEFORE UPDATE ON blog_authors 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_blog_posts_updated_at 
    BEFORE UPDATE ON blog_posts 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Insert sample categories
INSERT INTO blog_categories (name, slug, description, color, icon) VALUES
('Anti-Diabetic', 'anti-diabetic', 'Research and developments in diabetes care and anti-diabetic formulations', 'bg-red-500', 'Heart'),
('Cardiac Care', 'cardiac-care', 'Cardiovascular medicine and heart health innovations', 'bg-blue-500', 'Beaker'),
('Neurotherapy', 'neurotherapy', 'Neurological treatments and brain health research', 'bg-green-500', 'Shield');

-- Insert sample authors
INSERT INTO blog_authors (name, email, bio, title, experience_years, specialization) VALUES
('Dr. Priya Sharma', 'priya.sharma@acmedixpharma.com', 'Dr. Priya Sharma is our Lead Formulation Scientist with over 15 years of experience in anti-diabetic drug development. She holds a Ph.D. in Pharmaceutical Sciences from IIT Delhi.', 'Lead Formulation Scientist', 15, 'Anti-diabetic drug development'),
('Dr. Rajesh Kumar', 'rajesh.kumar@acmedixpharma.com', 'Dr. Rajesh Kumar is our Director of Cardiovascular Research with 20+ years of experience in cardiac drug development and a specialization in targeted drug delivery systems.', 'Director of Cardiovascular Research', 20, 'Cardiac drug development'),
('Dr. Anil Mehta', 'anil.mehta@acmedixpharma.com', 'Dr. Anil Mehta leads our Neurotherapy Research Division with expertise in neuropharmacology and blood-brain barrier research. He has published over 100 research papers in leading journals.', 'Director of Neurotherapy Research', 18, 'Neuropharmacology');

-- Insert sample tags
INSERT INTO blog_tags (name, slug) VALUES
('Diabetes', 'diabetes'),
('Drug Delivery', 'drug-delivery'),
('Nanotechnology', 'nanotechnology'),
('Clinical Trials', 'clinical-trials'),
('Cardiology', 'cardiology'),
('Liposomes', 'liposomes'),
('Targeted Therapy', 'targeted-therapy'),
('Heart Health', 'heart-health'),
('Neurology', 'neurology'),
('Blood-Brain Barrier', 'blood-brain-barrier'),
('Neuropharma', 'neuropharma'),
('Research', 'research');

-- Create a view for blog posts with all related data
CREATE VIEW blog_posts_with_details AS
SELECT 
    bp.id,
    bp.title,
    bp.slug,
    bp.excerpt,
    bp.content,
    bp.featured_image,
    bp.status,
    bp.featured,
    bp.meta_title,
    bp.meta_description,
    bp.read_time,
    bp.published_at,
    bp.created_at,
    bp.updated_at,
    
    -- Category details
    bc.name as category_name,
    bc.slug as category_slug,
    bc.color as category_color,
    bc.icon as category_icon,
    
    -- Author details
    ba.name as author_name,
    ba.email as author_email,
    ba.bio as author_bio,
    ba.title as author_title,
    ba.avatar_url as author_avatar,
    
    -- Tags as JSON array
    COALESCE(
        json_agg(
            DISTINCT jsonb_build_object(
                'name', bt.name,
                'slug', bt.slug
            )
        ) FILTER (WHERE bt.id IS NOT NULL), 
        '[]'::json
    ) as tags
    
FROM blog_posts bp
LEFT JOIN blog_categories bc ON bp.category_id = bc.id
LEFT JOIN blog_authors ba ON bp.author_id = ba.id
LEFT JOIN blog_post_tags bpt ON bp.id = bpt.post_id
LEFT JOIN blog_tags bt ON bpt.tag_id = bt.id
GROUP BY 
    bp.id, bp.title, bp.slug, bp.excerpt, bp.content, bp.featured_image,
    bp.status, bp.featured, bp.meta_title, bp.meta_description, bp.read_time,
    bp.published_at, bp.created_at, bp.updated_at,
    bc.name, bc.slug, bc.color, bc.icon,
    ba.name, ba.email, ba.bio, ba.title, ba.avatar_url;

-- Test the schema by selecting from the view
SELECT * FROM blog_posts_with_details LIMIT 1;