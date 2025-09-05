import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { portfolioData } from '../data/mock';
import { useToast } from '../hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { personalInfo } = portfolioData;
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Simple disposable/fake email domains list (expand as needed)
  const fakeEmailDomains = [
    'mailinator.com', '10minutemail.com', 'guerrillamail.com', 'tempmail.com',
    'yopmail.com', 'dispostable.com', 'fakeinbox.com', 'trashmail.com', 'getnada.com',
    'sharklasers.com', 'spamgourmet.com', 'maildrop.cc', 'mintemail.com', 'throwawaymail.com',
    'emailondeck.com', 'moakt.com', 'mytemp.email', 'temp-mail.org', 'mailnesia.com',
    'mailcatch.com', 'inboxkitten.com', 'spam4.me', 'mailnull.com', 'openmailbox.org',
    'luxusmail.org', 'tempail.com', 'fakemail.net', 'tempinbox.com', 'discard.email',
    'mail-temp.com', 'mailbox52.ga', 'mailbox92.biz', 'mailbox72.biz', 'mailbox32.biz',
    'mailbox22.biz', 'mailbox42.biz', 'mailbox62.biz', 'mailbox82.biz', 'mailbox12.biz',
    'mailbox2.biz', 'mailbox3.biz', 'mailbox4.biz', 'mailbox5.biz', 'mailbox6.biz',
    'mailbox7.biz', 'mailbox8.biz', 'mailbox9.biz', 'mailbox10.biz', 'mailbox11.biz',
    'mailbox13.biz', 'mailbox14.biz', 'mailbox15.biz', 'mailbox16.biz', 'mailbox17.biz',
    'mailbox18.biz', 'mailbox19.biz', 'mailbox20.biz', 'mailbox21.biz', 'mailbox23.biz',
    'mailbox24.biz', 'mailbox25.biz', 'mailbox26.biz', 'mailbox27.biz', 'mailbox28.biz',
    'mailbox29.biz', 'mailbox30.biz', 'mailbox31.biz', 'mailbox33.biz', 'mailbox34.biz',
    'mailbox35.biz', 'mailbox36.biz', 'mailbox37.biz', 'mailbox38.biz', 'mailbox39.biz',
    'mailbox40.biz', 'mailbox41.biz', 'mailbox43.biz', 'mailbox44.biz', 'mailbox45.biz',
    'mailbox46.biz', 'mailbox47.biz', 'mailbox48.biz', 'mailbox49.biz', 'mailbox50.biz',
    'mailbox51.biz', 'mailbox53.biz', 'mailbox54.biz', 'mailbox55.biz', 'mailbox56.biz',
    'mailbox57.biz', 'mailbox58.biz', 'mailbox59.biz', 'mailbox60.biz', 'mailbox61.biz',
    'mailbox63.biz', 'mailbox64.biz', 'mailbox65.biz', 'mailbox66.biz', 'mailbox67.biz',
    'mailbox68.biz', 'mailbox69.biz', 'mailbox70.biz', 'mailbox71.biz', 'mailbox73.biz',
    'mailbox74.biz', 'mailbox75.biz', 'mailbox76.biz', 'mailbox77.biz', 'mailbox78.biz',
    'mailbox79.biz', 'mailbox80.biz', 'mailbox81.biz', 'mailbox83.biz', 'mailbox84.biz',
    'mailbox85.biz', 'mailbox86.biz', 'mailbox87.biz', 'mailbox88.biz', 'mailbox89.biz',
    'mailbox90.biz', 'mailbox91.biz', 'mailbox93.biz', 'mailbox94.biz', 'mailbox95.biz',
    'mailbox96.biz', 'mailbox97.biz', 'mailbox98.biz', 'mailbox99.biz', 'mailbox100.biz'
  ];

  function isFakeEmail(email) {
    const domain = email.split('@')[1]?.toLowerCase();
    return fakeEmailDomains.includes(domain);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isFakeEmail(formData.email)) {
      toast({
        title: "Invalid email address.",
        description: "Please use a real email address (disposable/fake emails are not allowed).",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Replace these with your actual EmailJS service, template, and public key
    const SERVICE_ID = 'service_uxuwosm';
    const TEMPLATE_ID = 'template_zrtoawr';
    const PUBLIC_KEY = 'NeDOs3Az6iPkS6Ro0';

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast({
        title: "Failed to send message.",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 mb-6">Get In Touch</h2>
          <div className="w-24 h-1 bg-gray-900 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to discuss your next project? Let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-light text-gray-900 mb-8">
              Let's Start a Conversation
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              I'm always interested in hearing about new opportunities, 
              especially ambitious projects where I can contribute my expertise 
              in frontend development and team leadership.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <Mail className="text-gray-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <Phone className="text-gray-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <a 
                    href={`tel:${personalInfo.phone}`}
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <MapPin className="text-gray-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Location</h4>
                  <span className="text-gray-600">{personalInfo.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                  placeholder="Project discussion"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;