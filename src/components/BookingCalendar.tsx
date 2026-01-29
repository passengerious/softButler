import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Calendar, Clock, User, Mail, MessageSquare, Check } from 'lucide-react';

interface BookingCalendarProps {
  onClose: () => void;
}

const BookingCalendar: React.FC<BookingCalendarProps> = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
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

  // Generate time slots (8 AM to 8 PM Kyiv time)
  const timeSlots = [
    '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00',
    '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'
  ];

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
            We'll send you a confirmation email with the meeting details. 
            Looking forward to fixing your QA!
          </p>
          <div className="text-sm text-green-500">
            {selectedDate} at {selectedTime} (Kyiv time)
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <motion.div
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
            {[1, 2, 3].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                  step >= stepNumber 
                    ? 'bg-green-500 text-black' 
                    : 'bg-gray-700 text-gray-400'
                }`}>
                  {stepNumber}
                </div>
                {stepNumber < 3 && (
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
              className="space-y-6"
            >
              <div className="flex items-center space-x-2 mb-4">
                <Calendar className="w-5 h-5 text-green-500" />
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

          {/* Step 2: Time Selection */}
          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-2 mb-4">
                <Clock className="w-5 h-5 text-green-500" />
                <h3 className="text-xl font-semibold text-white">Choose a Time (Kyiv Time)</h3>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`p-3 rounded-lg border text-center transition-all ${
                      selectedTime === time
                        ? 'border-green-500 bg-green-500/10 text-green-500'
                        : 'border-gray-700 hover:border-gray-600 text-white'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 py-3 border border-gray-600 text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  disabled={!selectedTime}
                  className="flex-1 py-3 bg-green-500 text-black font-bold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-green-400 transition-colors"
                >
                  Continue
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 3: Contact Information */}
          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-2 mb-4">
                <User className="w-5 h-5 text-green-500" />
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
                  })} at {selectedTime} (Kyiv time)
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
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
                    <MessageSquare className="w-4 h-4 inline mr-2" />
                    Tell us about your QA challenges
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-green-500 focus:outline-none transition-colors resize-none"
                    placeholder="What QA problems are you facing? What's your current testing setup?"
                  />
                </div>
                <div className="flex space-x-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
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