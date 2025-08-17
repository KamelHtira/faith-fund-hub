-- Create donations table
CREATE TABLE public.donations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  donor_name TEXT,
  donor_email TEXT,
  amount DECIMAL(10,2) NOT NULL,
  currency TEXT DEFAULT 'usd',
  tag_note TEXT,
  stripe_session_id TEXT UNIQUE,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.donations ENABLE ROW LEVEL SECURITY;

-- Create policy for admin to view all donations
CREATE POLICY "Admin can view all donations" 
ON public.donations 
FOR SELECT 
USING (true);

-- Create policy to allow inserts (for donation processing)
CREATE POLICY "Allow donation inserts" 
ON public.donations 
FOR INSERT 
WITH CHECK (true);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_donations_updated_at
BEFORE UPDATE ON public.donations
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create admin_users table for fixed admin credentials
CREATE TABLE public.admin_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  username TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS for admin_users
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- Policy for admin authentication
CREATE POLICY "Allow admin login" 
ON public.admin_users 
FOR SELECT 
USING (true);

-- Insert default admin user (password will be 'ADMIN')
INSERT INTO public.admin_users (username, password_hash) 
VALUES ('ADMIN', 'ADMIN');