import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { X, Calendar, Clock, User, Mail, MessageSquare, Check } from 'lucide-react';
import { toast } from 'react-toastify';

interface BookingCalendarProps {
  onClose: () => void;
}

const BookingCalendar: React.FC<BookingCalendarProps> = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState('');
  const modalContentRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Generate calendar dates (simplified - showing next 14 days)
  const generateDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push({
        date: date.toISOString().split('T')[0],
        display: date.toLocaleDateString('en-US', { 
          weekday: 'short', 
          month: 'short', 
          day: 'numeric' 
        })
      });
    }
    return dates;
  };



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Here you would typically send the booking data to your backend
    setTimeout(() => {
      onClose();
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-gray-900 border border-green-500/30 rounded-lg p-8 max-w-md w-full text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <Check className="w-8 h-8 text-black" />
          </motion.div>
          <h3 className="text-2xl font-bold text-white mb-4">Consultation Booked!</h3>
          <p className="text-gray-300 mb-6">
            We&apos;ll send you a confirmation email with the meeting details. 
            Looking forward to fixing your QA!
          </p>
          <div className="text-sm text-green-500">
            {selectedDate}
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <motion.div
        ref={modalContentRef}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-gray-900 border border-green-500/30 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <h2 className="text-2xl font-bold text-white">Book Your Free Consultation</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          {/* Step Indicator */}
          <div className="flex items-center justify-center mb-8">
            {[1, 2].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                  step >= stepNumber 
                    ? 'bg-green-500 text-black' 
                    : 'bg-gray-700 text-gray-400'
                }`}>
                  {stepNumber}
                </div>
                {stepNumber < 2 && (
                  <div className={`w-12 h-0.5 mx-2 ${
                    step > stepNumber ? 'bg-green-500' : 'bg-gray-700'
                  }`} />
                )}
              </div>
            ))}
          </div>

          {/* Step 1: Date Selection */}
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6 px-4 sm:px-6"
            >
              <div className="flex items-center space-x-2 mb-4">
                <Calendar className="w-5 h-5 text-green-500 inline-block align-middle flex-shrink-0" />
                <h3 className="text-xl font-semibold text-white">Choose a Date</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {generateDates().map((dateOption) => (
                  <button
                    key={dateOption.date}
                    onClick={() => setSelectedDate(dateOption.date)}
                    className={`p-3 rounded-lg border text-center transition-all ${
                      selectedDate === dateOption.date
                        ? 'border-green-500 bg-green-500/10 text-green-500'
                        : 'border-gray-700 hover:border-gray-600 text-white'
                    }`}
                  >
                    {dateOption.display}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setStep(2)}
                disabled={!selectedDate}
                className="w-full py-3 bg-green-500 text-black font-bold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-green-400 transition-colors"
              >
                Continue
              </button>
            </motion.div>
          )}

          {/* Step 2: Contact Information */}
          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-2 mb-4">
                <User className="w-5 h-5 text-green-500 inline-block align-middle flex-shrink-0" />
                <h3 className="text-xl font-semibold text-white">Your Information</h3>
              </div>
              
              {/* Selected Date & Time Display */}
              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <p className="text-green-500 font-semibold">Selected:</p>
                <p className="text-white">
                  {new Date(selectedDate).toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>

              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  const trimmedName = formData.name.trim();
                  const trimmedEmail = formData.email.trim();
                  const trimmedMessage = formData.message.trim();
                  
                  if (!trimmedName) {
                    toast.error('Please enter your name.');
                    return;
                  }
                  if (trimmedName.length > 100) {
                    toast.error('Name must be 100 characters or less.');
                    return;
                  }
                  if (!trimmedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
                    toast.error('Please enter a valid email address.');
                    return;
                  }
                  if (!trimmedMessage) {
                    toast.error('Please enter your message.');
                    return;
                  }

                  // Update state with trimmed values for consistency
                  setFormData({
                    name: trimmedName,
                    email: trimmedEmail,
                    message: trimmedMessage
                  });

                  handleSubmit(e);
                }} 
                className="space-y-4"
              >
                <div>
                  <label className="block text-white font-semibold mb-2">
                    <User className="w-4 h-4 inline-block align-middle flex-shrink-0 mr-2" />
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={100}
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">
                    <Mail className="w-4 h-4 inline-block align-middle flex-shrink-0 mr-2" />
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">
                    <MessageSquare className="w-4 h-4 inline-block align-middle flex-shrink-0 mr-2" />
                    Tell us about your challenges
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-green-500 focus:outline-none transition-colors resize-none"
                    placeholder="What problems are you facing?"
                  />
                </div>
                <div className="flex space-x-4 pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setStep(1);
                      setTimeout(() => {
                        modalContentRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
                      }, 50);
                    }}
                    className="flex-1 py-3 border border-gray-600 text-white rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3 bg-green-500 text-black font-bold rounded-lg hover:bg-green-400 transition-colors"
                  >
                    Book Consultation
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default BookingCalendar;