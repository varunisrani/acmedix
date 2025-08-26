
import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Users, Heart, Trophy, Upload, Mail, Phone, Send, CheckCircle, AlertCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { fetchOpenPositions, CareerPosition, submitCareerApplication } from '@/lib/careersService';

const Careers = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    message: ''
  });

  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [positions, setPositions] = useState<CareerPosition[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPositions();
  }, []);

  const loadPositions = async () => {
    setLoading(true);
    try {
      const openPositions = await fetchOpenPositions();
      setPositions(openPositions);
    } catch (error) {
      console.error('Error loading positions:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        alert('Please upload only PDF, DOC, or DOCX files.');
        return;
      }
      
      // Check file size (10MB)
      if (file.size > 10 * 1024 * 1024) {
        alert('File size must be less than 10MB.');
        return;
      }
      
      setResumeFile(file);
    }
  };

  const removeFile = () => {
    setResumeFile(null);
    const input = document.getElementById('resume-upload') as HTMLInputElement;
    if (input) input.value = '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    // Prepare data for career application
    const applicationData = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      phone: formData.phone || null,
      position_applied: formData.position,
      cover_letter: formData.message || null,
    };

    // Submit application to Supabase
    const result = await submitCareerApplication(applicationData, resumeFile || undefined);

    if (result.success) {
      // Success
      setSubmitStatus('success');
      setStatusMessage(`Thank you for your application! Your application ID is #${result.applicationId}. We will review your resume and get back to you soon.`);
      
      // Reset form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        position: '',
        message: ''
      });
      setResumeFile(null);
      const input = document.getElementById('resume-upload') as HTMLInputElement;
      if (input) input.value = '';

      // Clear success message after 10 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
        setStatusMessage('');
      }, 10000);
    } else {
      // Error
      setSubmitStatus('error');
      setStatusMessage(result.error || 'There was an error submitting your application. Please try again or contact our HR team directly.');
      
      // Clear error message after 8 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
        setStatusMessage('');
      }, 8000);
    }

    setIsSubmitting(false);
  };
  const benefits = [
    {
      icon: Heart,
      title: "Work-Life Balance",
      description: "Flexible working hours and comprehensive wellness programs for all employees"
    },
    {
      icon: Trophy,
      title: "Growth Opportunities",
      description: "Continuous learning and development programs with clear career advancement paths"
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Work with passionate professionals in a supportive and inclusive environment"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section with Background Image */}
      <section className="relative section-padding text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(https://i.ibb.co/hxDKzqb6/businessman-big-office.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-800/75 to-slate-900/85"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Life at <span className="text-white/90">Acmedix</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto">
            Join our mission to make quality healthcare accessible to everyone
          </p>
        </div>
      </section>

      {/* Life at Acmedix Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-foreground">
              Why Choose <span className="gradient-text">Acmedix?</span>
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              At Acmedix, we believe that our people are our greatest asset. We foster an environment 
              where innovation thrives, careers flourish, and every team member contributes to our 
              mission of providing affordable, quality healthcare solutions.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {benefits.map((benefit, index) => (
                <div 
                  key={benefit.title}
                  className="card-pharmaceutical p-8 text-center group"
                  style={{ 
                    opacity: 1,
                    transform: 'translateY(0)',
                    animation: `fade-in-up 0.8s ease-out ${index * 0.2}s both`
                  }}
                >
                  <div className="inline-flex p-4 bg-primary-light rounded-full mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <benefit.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Life at Acmedix Premium Gallery Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-accent/10 to-primary/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-primary/10 px-4 py-2 rounded-full mb-6">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Culture</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Life at <span className="bg-gradient-to-r from-primary via-primary-hover to-accent bg-clip-text text-transparent">Acmedix</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Discover the moments that define our workplace culture - where innovation meets collaboration, 
              and every achievement is celebrated together
            </p>
          </div>

          {/* Train-like Horizontal Scrolling Gallery */}
          <div className="w-full overflow-hidden">
            <div className="flex gap-8 animate-train-scroll">
              {/* First set of images */}
              <div className="w-80 h-80 flex-shrink-0">
                <img 
                  src="https://i.ibb.co/M5Q5hkK5/1000504037.jpg" 
                  alt="Life at Acmedix - Team Collaboration"
                  className="w-full h-full object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="w-80 h-80 flex-shrink-0">
                <img 
                  src="https://i.ibb.co/MkrHvfY1/1000504036.jpg" 
                  alt="Life at Acmedix - Innovation"
                  className="w-full h-full object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="w-80 h-80 flex-shrink-0">
                <img 
                  src="https://i.ibb.co/k6gGdRd3/1000504035.jpg" 
                  alt="Life at Acmedix - Growth"
                  className="w-full h-full object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="w-80 h-80 flex-shrink-0">
                <img 
                  src="https://i.ibb.co/nqs6RFzk/1000504034.jpg" 
                  alt="Life at Acmedix - Excellence"
                  className="w-full h-full object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="w-80 h-80 flex-shrink-0">
                <img 
                  src="https://i.ibb.co/PzPp4ndJ/1000504033.jpg" 
                  alt="Life at Acmedix - Success"
                  className="w-full h-full object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="w-80 h-80 flex-shrink-0">
                <img 
                  src="https://i.ibb.co/qYBJYpFF/1000504032.jpg" 
                  alt="Life at Acmedix - Achievement"
                  className="w-full h-full object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Duplicate set for seamless loop */}
              <div className="w-80 h-80 flex-shrink-0">
                <img 
                  src="https://i.ibb.co/M5Q5hkK5/1000504037.jpg" 
                  alt="Life at Acmedix - Team Collaboration"
                  className="w-full h-full object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="w-80 h-80 flex-shrink-0">
                <img 
                  src="https://i.ibb.co/MkrHvfY1/1000504036.jpg" 
                  alt="Life at Acmedix - Innovation"
                  className="w-full h-full object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="w-80 h-80 flex-shrink-0">
                <img 
                  src="https://i.ibb.co/k6gGdRd3/1000504035.jpg" 
                  alt="Life at Acmedix - Growth"
                  className="w-full h-full object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="w-80 h-80 flex-shrink-0">
                <img 
                  src="https://i.ibb.co/nqs6RFzk/1000504034.jpg" 
                  alt="Life at Acmedix - Excellence"
                  className="w-full h-full object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="w-80 h-80 flex-shrink-0">
                <img 
                  src="https://i.ibb.co/PzPp4ndJ/1000504033.jpg" 
                  alt="Life at Acmedix - Success"
                  className="w-full h-full object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="w-80 h-80 flex-shrink-0">
                <img 
                  src="https://i.ibb.co/qYBJYpFF/1000504032.jpg" 
                  alt="Life at Acmedix - Achievement"
                  className="w-full h-full object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* CSS Animation */}
        <style jsx>{`
          @keyframes train-scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-100%);
            }
          }
          
          .animate-train-scroll {
            animation: train-scroll 25s linear infinite;
          }
          
          .animate-train-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      {/* Career Application Form Section */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex p-4 bg-primary-light rounded-full mb-6">
              <Upload className="h-8 w-8 text-primary" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Drop Your <span className="gradient-text">Resume</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Ready to make a difference in healthcare? Submit your resume and join our 
              dynamic team of professionals dedicated to improving lives through affordable medicine.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Left Side - Open Positions Showcase */}
            <div className="order-2 lg:order-1">
              <div className="card-pharmaceutical p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary-light rounded-lg">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Open Positions</h3>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  Explore exciting career opportunities across various departments at Acmedix Pharma.
                </p>

{loading ? (
                  <div className="space-y-3 mb-8">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className="animate-pulse">
                        <div className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-muted rounded-full"></div>
                            <div className="h-4 w-48 bg-muted rounded"></div>
                          </div>
                          <div className="h-6 w-12 bg-muted rounded-full"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-3 mb-8">
                    {positions.length > 0 ? positions.map((position, index) => (
                      <div 
                        key={position.id}
                        className="flex items-center justify-between p-4 bg-background rounded-lg border border-border hover:border-primary/30 hover:shadow-sm transition-all duration-200 group cursor-pointer"
                        onClick={() => setFormData(prev => ({ ...prev, position: position.title }))}
                        title={`${position.title} - ${position.department} | ${position.location}`}
                      >
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                              {position.title}
                            </span>
                          </div>
                          <div className="ml-5 flex items-center gap-4 text-xs text-muted-foreground">
                            <span>{position.department}</span>
                            <span>•</span>
                            <span>{position.location}</span>
                            <span>•</span>
                            <span>{position.salary_range}</span>
                          </div>
                        </div>
                        <div className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                          {position.status === 'open' ? 'Open' : 'Closed'}
                        </div>
                      </div>
                    )) : (
                      <div className="text-center py-8">
                        <Users className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
                        <p className="text-muted-foreground">No open positions available at the moment.</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Benefits Highlight */}
                <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-6">
                  <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-primary" />
                    Why Join Acmedix?
                  </h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>Competitive salary and benefits</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>Professional growth opportunities</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>Work-life balance initiatives</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>Healthcare and wellness programs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>Collaborative work environment</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Application Form */}
            <div className="order-1 lg:order-2">
              <div className="card-pharmaceutical p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Submit Your Application</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name *
                      </label>
                      <input 
                        type="text" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        placeholder="First name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name *
                      </label>
                      <input 
                        type="text" 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        placeholder="Last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Position Applying For *
                    </label>
                    <select 
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    >
                      <option value="">Select a position</option>
                      {positions.map((position) => (
                        <option key={position.id} value={position.title}>
                          {position.title} - {position.department}
                        </option>
                      ))}
                    </select>
                    {formData.position && (
                      <p className="text-sm text-green-600 mt-1 flex items-center gap-1">
                        <CheckCircle className="h-4 w-4" />
                        Selected: {formData.position}
                      </p>
                    )}
                  </div>

                  {/* Resume Upload */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Resume Upload *
                    </label>
                    <div className="border-2 border-dashed border-primary/30 rounded-lg p-6 hover:border-primary/50 transition-colors duration-300 relative">
                      <input
                        type="file"
                        id="resume-upload"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        required={!resumeFile}
                      />
                      
                      {resumeFile ? (
                        <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-lg p-4">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-green-100 rounded-lg">
                              <Upload className="h-5 w-5 text-green-600" />
                            </div>
                            <div>
                              <p className="font-medium text-green-800">{resumeFile.name}</p>
                              <p className="text-sm text-green-600">{(resumeFile.size / 1024).toFixed(1)} KB</p>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={removeFile}
                            className="p-1 hover:bg-red-100 rounded-full transition-colors"
                          >
                            <X className="h-4 w-4 text-red-500" />
                          </button>
                        </div>
                      ) : (
                        <div className="text-center">
                          <Upload className="h-10 w-10 text-primary mx-auto mb-3" />
                          <h3 className="text-base font-semibold text-foreground mb-1">
                            Click to upload or drag and drop
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            PDF, DOC, or DOCX files up to 10MB
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Cover Letter / Additional Information
                    </label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                      placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                    ></textarea>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      type="submit" 
                      className="btn-primary px-8 py-3 flex-1 sm:flex-none"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="mr-2 h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Submit Application
                        </>
                      )}
                    </Button>
                  </div>

                  {/* Status Messages */}
                  {submitStatus !== 'idle' && (
                    <div className={`p-4 rounded-lg flex items-center gap-3 ${
                      submitStatus === 'success' 
                        ? 'bg-green-50 text-green-800 border border-green-200' 
                        : 'bg-red-50 text-red-800 border border-red-200'
                    }`}>
                      {submitStatus === 'success' ? (
                        <CheckCircle className="h-5 w-5 flex-shrink-0" />
                      ) : (
                        <AlertCircle className="h-5 w-5 flex-shrink-0" />
                      )}
                      <span>{statusMessage}</span>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact HR Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Have <span className="gradient-text">Questions?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our HR team is here to help you with any questions about career opportunities at Acmedix
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card-pharmaceutical p-8 text-center group">
              <div className="inline-flex p-4 bg-primary-light rounded-full mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <Mail className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-foreground">Email Us</h3>
              <p className="text-muted-foreground mb-4">Send your queries directly to our HR team</p>
              <a href="mailto:careers@acmedixpharma.com" className="text-primary font-medium hover:underline">
                careers@acmedixpharma.com
              </a>
            </div>

            <div className="card-pharmaceutical p-8 text-center group">
              <div className="inline-flex p-4 bg-primary-light rounded-full mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <Phone className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-foreground">Call Us</h3>
              <p className="text-muted-foreground mb-4">Speak directly with our HR representatives</p>
              <a href="tel:+917948907524" className="text-primary font-medium hover:underline">
                +91 7948907524
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
