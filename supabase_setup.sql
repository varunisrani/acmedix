-- Create the contact_submissions table in Supabase
CREATE TABLE IF NOT EXISTS contact_submissions (
    id BIGSERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    company VARCHAR(255),
    subject VARCHAR(100) NOT NULL,
    message TEXT NOT NULL,
    submission_date TIMESTAMPTZ DEFAULT NOW(),
    status VARCHAR(20) DEFAULT 'new',
    source VARCHAR(50) DEFAULT 'website',
    ip_address VARCHAR(45),
    user_agent TEXT,
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_contact_email ON contact_submissions(email);
CREATE INDEX IF NOT EXISTS idx_contact_submission_date ON contact_submissions(submission_date);
CREATE INDEX IF NOT EXISTS idx_contact_status ON contact_submissions(status);

-- Enable Row Level Security (RLS)
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow inserts from authenticated and anonymous users
CREATE POLICY "Allow public inserts" ON contact_submissions
    FOR INSERT 
    WITH CHECK (true);

-- Create a policy to allow reading own submissions (optional, based on email)
CREATE POLICY "Users can view their own submissions" ON contact_submissions
    FOR SELECT
    USING (true);  -- You can modify this to (auth.email() = email) if you want users to only see their own

-- Grant necessary permissions
GRANT INSERT ON contact_submissions TO anon;
GRANT SELECT ON contact_submissions TO anon;
GRANT USAGE ON SEQUENCE contact_submissions_id_seq TO anon;

-- Optional: Create a function to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger for updated_at
CREATE TRIGGER update_contact_submissions_updated_at 
    BEFORE UPDATE ON contact_submissions 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Test the table by selecting from it
SELECT * FROM contact_submissions LIMIT 1;