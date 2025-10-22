"use client";
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitterX,
  BsArrowRight,
} from 'react-icons/bs';

// Form data interface
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

// Form errors interface
interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  message?: string;
}

// Notification type
type NotificationType = 'success' | 'error' | 'info';

interface Notification {
  type: NotificationType;
  message: string;
}

const commonClassForFormLable: string =
  'font-swear-text text-gray-950 text-sm sm:text-base md:text-lg lg:text-xl ';
const commonClassForFormInput: string =
  'border-b-2 outline-none border-gray-400 text-sm sm:text-sm md:text-base lg:text-base focus:border-black transition-all duration-500 ease-in-out focus:placeholder:text-black';

const ContactMe = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<Notification | null>(null);

  // Function to show notification
  const showNotification = (type: NotificationType, message: string, duration: number = 3000) => {
    setNotification({ type, message });
    setTimeout(() => {
      setNotification(null);
    }, duration);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("hit.vaghani.dev@gmail.com");
      showNotification('success', 'Email copied to clipboard!', 2000);
    } catch (error) {
      console.error('Failed to copy email:', error);
      // Fallback for browsers that don't support clipboard API
      const textArea = document.createElement('textarea');
      textArea.value = "hit.vaghani.dev@gmail.com";
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      showNotification('success', 'Email copied to clipboard!', 2000);
    }
  };

  const validate = () => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    // Validate form first
    if (!validate()) {
      showNotification('error', 'Please fill in all required fields correctly.', 3000);
      return;
    }

    setIsSubmitting(true);

    try {
      // EmailJS parameters
      const emailParams = {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        compnay: '',
        projectdesc: formData.message,
        service: 'Contact Form Inquiry',
        start: 'As Soon As Possible',
        end: 'Flexible',
      };

      // Send email using EmailJS
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICEID as string,
        process.env.NEXT_PUBLIC_TEMPLATEID as string,
        emailParams,
        process.env.NEXT_PUBLIC_PUBLICKEY as string
      );

      console.log('Email sent successfully:', result);

      // Show success notification
      showNotification('success', 'Thank you for connecting! Your message has been sent successfully.', 5000);

      // Reset form data
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
      });

    } catch (error) {
      console.error('Email sending failed:', error);
      showNotification('error', 'Oops! Something went wrong. Please try again later.', 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get notification styles based on type
  const getNotificationStyles = (type: NotificationType) => {
    switch (type) {
      case 'success':
        return 'bg-green-100 border-green-400 text-green-700';
      case 'error':
        return 'bg-red-100 border-red-400 text-red-700';
      case 'info':
        return 'bg-blue-100 border-blue-400 text-blue-700';
      default:
        return 'bg-gray-100 border-gray-400 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen box-border flex flex-col" id='contact'>
      <div className="project-title-text-section my-2 sm:my-4 md:my-6 lg:my-8 xl:my-12">
        <div className="project-title font-swear-display text-4xl md:text-6xl lg:text-8xl px-4 md:px-12 lg:px-20 text-center">
          GET IN TOUCH
        </div>
      </div>

      {/* Notification Toast */}
      {notification && (
        <div
          className={`fixed top-4 right-4 px-4 py-3 rounded-lg shadow-lg z-50 max-w-sm border animate-slide-in ${getNotificationStyles(notification.type)}`}
        >
          <p className="font-medium">{notification.message}</p>
        </div>
      )}

      <div className="flex h-full justify-around items-center flex-1 font-retail flex-col lg:flex-row">
        <div className="h-full flex-1 flex justify-around items-center w-full">
          <div className="w-full h-full flex gap-8 flex-col p-8">
            <div className="name-section w-full flex flex-col gap-4">
              <h2 className="font-swear-text font-semibold text-sm sm:text-base md:text-lg lg:text-xl">
                Name (required)
              </h2>
              <div className="flex-col flex lg:flex-row justify-between items-center gap-8">
                <div className="flex flex-col flex-none w-full lg:flex-1">
                  <label
                    htmlFor="firstName"
                    className={`${commonClassForFormLable}`}
                  >
                    First Name
                  </label>
                  <input
                    className={`${commonClassForFormInput} ${errors.firstName ? 'border-red-500' : ''
                      }`}
                    type="text"
                    name="firstName"
                    id="firstname"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  {errors.firstName && (
                    <span className="text-red-500 text-sm mt-1">
                      {errors.firstName}
                    </span>
                  )}
                </div>
                <div className="flex flex-col flex-none w-full lg:flex-1">
                  <label
                    className={`${commonClassForFormLable}`}
                    htmlFor="lastName"
                  >
                    Last Name
                  </label>
                  <input
                    className={`${commonClassForFormInput} ${errors.lastName ? 'border-red-500' : ''
                      }`}
                    type="text"
                    name="lastName"
                    id="lastname"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                  {errors.lastName && (
                    <span className="text-red-500 text-sm mt-1">
                      {errors.lastName}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="email-section">
              <h2 className="font-swear-text font-semibold text-sm sm:text-base md:text-lg lg:text-xl">
                Email (required)
              </h2>
              <div className="flex flex-col">
                <input
                  className={`${commonClassForFormInput} ${errors.email ? 'border-red-500' : ''
                    }`}
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.email}
                  </span>
                )}
              </div>
            </div>

            <div className="message-section">
              <div className="flex flex-col">
                <label
                  htmlFor="message"
                  className="font-swear-text font-semibold text-sm sm:text-base md:text-lg lg:text-xl"
                >
                  Message (required)
                </label>
                <textarea
                  className={`${commonClassForFormInput} ${errors.message ? 'border-red-500' : ''
                    } resize-none`}
                  rows={4}
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.message}
                  </span>
                )}
              </div>
            </div>

            <div className="submit-section">
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`font-retail text-white px-6 py-3 rounded-full cursor-pointer transition-all duration-300 ${isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-black hover:bg-gray-800'
                  }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center flex-col gap-4 my-4 lg:my-0">
          <div className="flex flex-col gap-2 text-center">
            <div>Hate contact forms?</div>
            <div
              className="font-inter flex gap-2 items-center cursor-pointer hover:text-blue-600 transition-colors"
              onClick={copyToClipboard}
            >
              Me too{' '}
              <span>
                <BsArrowRight />
              </span>{' '}
              <span className="font-semibold underline">
                hit.vaghani.dev@gmail.com
              </span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4">
            <div className="flex justify-center gap-4">
              <a
                href="https://x.com/VaghaniHit"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <BsTwitterX className="text-2xl text-blue-500" />
              </a>
              <a
                href="https://www.instagram.com/hit.vaghani/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <BsInstagram className="text-2xl text-pink-500" />
              </a>
              <a
                href="https://github.com/hitvaghani26"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <BsGithub className="text-2xl text-gray-800" />
              </a>
              <a
                href="https://www.linkedin.com/in/vaghani-hit-48487b235/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <BsLinkedin className="text-2xl text-blue-700" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <p className="text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Hit. All rights reserved.
      </p>

      
    </div>
  );
};

export default ContactMe;