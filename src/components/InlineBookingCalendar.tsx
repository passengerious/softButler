import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, User, Mail, MessageSquare, Check, ChevronLeft, ChevronRight, ArrowRight, ArrowLeft } from 'lucide-react';
import { toast } from 'react-toastify';

// Custom CSS for mobile centering with !important
const mobileCenterStyle = `
  @media (max-width: 500px) {
    .mobile-center-important {
      margin-left: auto !important;
      margin-right: auto !important;
    }
  }
`;

const InlineBookingCalendar = () => {
  // Inject custom CSS for mobile centering
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = mobileCenterStyle;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  const [currentStep, setCurrentStep] = useState(1);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Helper function to format date without timezone issues
  const formatDateForDisplay = (dateString: string) => {
    const [year, month, day] = dateString.split('-').map(Number);
    const date = new Date(year, month - 1, day); // month is 0-indexed
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric'
    });
  };

  // Generate calendar dates for current month
  const generateCalendarDates = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());
    
    const dates = [];
    const today = new Date();
    
    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      
      const isCurrentMonth = date.getMonth() === month;
      const todayStart = new Date(today);
      todayStart.setHours(0, 0, 0, 0);
      const isPast = date < todayStart;
      const isToday = date.toDateString() === new Date().toDateString();
      
      dates.push({
        date: `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`,
        day: date.getDate(),
        isCurrentMonth,
        isPast,
        isToday,
        isSelectable: isCurrentMonth && !isPast
      });
    }
    
    return dates;
  };

  // Generate time slots (8 AM to 8 PM Kyiv time)
  const timeSlots = [
    '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00',
    '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'
  ];

  const navigateMonth = (direction: number) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + direction);
    setCurrentDate(newDate);
  };

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    // Add a small delay to ensure the date is properly set before transitioning
    setTimeout(() => setCurrentStep(2), 300);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setTimeout(() => setCurrentStep(3), 300);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Prepare the message with booking details
      const bookingMessage = `📅 New QA Consultation Booking:
👤 Name: ${formData.name}
📧 Email: ${formData.email}
📅 Date: ${formatDateForDisplay(selectedDate)} at ${selectedTime} (Kyiv time)
📝 Message: ${formData.message}`;

      const res = await fetch('/.netlify/functions/send-to-telegram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: bookingMessage
        })
      });

      if (!res.ok) {
        throw new Error('Failed to send booking');
      }

      setIsSubmitted(true);
      
      // Don't auto-reset - let user see the confirmation
      // setTimeout(() => {
      //   setIsSubmitted(false);
      //   setCurrentStep(1);
      //   setSelectedDate('');
      //   setSelectedTime('');
      //   setFormData({ name: '', email: '', message: '' });
      // }, 5000);
    } catch (err) {
      toast.error('Error booking consultation. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const goBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const steps = [
    { number: 1, title: 'Choose Date', icon: Calendar },
    { number: 2, title: 'Select Time', icon: Clock },
    { number: 3, title: 'Your Details', icon: User }
  ];

  if (isSubmitted) {
    return (
      <section className="py-20 px-6 bg-gray-900/30">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-gray-900/50 border border-green-500/30 rounded-lg p-12 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8"
            >
              <Check className="w-10 h-10 text-black" />
            </motion.div>
            <h3 className="text-3xl font-bold text-white mb-6">Consultation Booked!</h3>
            <p className="text-xl text-gray-300 mb-8">
              We'll send you a confirmation email with the meeting details. 
              Looking forward to fixing your QA!
            </p>
            <div className="text-lg text-green-500 font-semibold mb-8">
              {formatDateForDisplay(selectedDate)} at {selectedTime} (Kyiv time)
            </div>
            
            <button
              onClick={() => {
                setIsSubmitted(false);
                setCurrentStep(1);
                setSelectedDate('');
                setSelectedTime('');
                setFormData({ name: '', email: '', message: '' });
              }}
              className="px-8 py-4 border-2 border-green-500 text-green-500 font-bold text-lg rounded-lg hover:border-green-400 hover:text-green-400 transition-all duration-300 transform hover:scale-105"
            >
              Book Another Consultation
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-6 bg-gray-900/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Book Your Free <span className="text-green-500">QA Audit</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to fix your QA process? Schedule a free consultation and let's discuss your testing challenges.
          </p>
        </motion.div>

        <div className="bg-black/50 border border-gray-800 rounded-lg overflow-hidden hover:border-green-500/30 transition-all duration-300">
          {/* Progress Indicator */}
          <div className="p-6 border-b border-gray-800">
            <div className="flex items-center justify-center space-x-8">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className="flex items-center mx-auto sm:mx-0 mobile-center-important"
                >
                  <div className="flex items-center space-x-3">
                    <motion.div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg border-2 transition-all duration-300 ${
                        currentStep >= step.number
                          ? 'bg-green-500 text-black border-green-500 shadow-[0_0_20px_rgba(52,152,219,0.5)]'
                          : 'bg-gray-800 text-gray-400 border-gray-600'
                      }`}
                      whileHover={{ scale: currentStep >= step.number ? 1.1 : 1 }}
                    >
                      {currentStep > step.number ? (
                        <Check className="w-6 h-6" />
                      ) : (
                        <step.icon className="w-6 h-6" />
                      )}
                    </motion.div>
                    <div className="hidden sm:block">
                      <div className={`font-semibold transition-colors ${
                        currentStep >= step.number ? 'text-green-500' : 'text-gray-400'
                      }`}>
                        Step {step.number}
                      </div>
                      <div className={`text-sm transition-colors ${
                        currentStep >= step.number ? 'text-white' : 'text-gray-500'
                      }`}>
                        {step.title}
                      </div>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-12 h-0.5 mx-4 transition-colors ${
                      currentStep > step.number ? 'bg-green-500' : 'bg-gray-700'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Step Content */}
          <div className="p-8 min-h-[500px] relative overflow-hidden">
            <AnimatePresence mode="wait">
              {/* Step 1: Date Selection */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2 flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-green-500 mr-3" />
                      Choose Your Preferred Date
                    </h3>
                    <p className="text-gray-300">Select a date that works best for your schedule</p>
                  </div>

                  <div className="max-w-md mx-auto">
                    {/* Month Navigation */}
                    <div className="flex items-center justify-between mb-6">
                      <button
                        onClick={() => navigateMonth(-1)}
                        className="p-2 text-gray-400 hover:text-green-500 transition-colors"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <span className="text-white font-semibold text-xl">
                        {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                      </span>
                      <button
                        onClick={() => navigateMonth(1)}
                        className="p-2 text-gray-400 hover:text-green-500 transition-colors"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                    </div>

                    {/* Calendar Grid */}
                    <div className="grid grid-cols-7 gap-1 mb-4">
                      {weekDays.map(day => (
                        <div key={day} className="text-center text-sm text-gray-400 py-2 font-semibold">
                          {day}
                        </div>
                      ))}
                    </div>
                    
                    <div className="grid grid-cols-7 gap-1">
                      {generateCalendarDates().map((dateInfo, index) => (
                        <motion.button
                          key={index}
                          onClick={() => dateInfo.isSelectable ? handleDateSelect(dateInfo.date) : null}
                          disabled={!dateInfo.isSelectable}
                          whileHover={dateInfo.isSelectable ? { scale: 1.1 } : {}}
                          whileTap={dateInfo.isSelectable ? { scale: 0.95 } : {}}
                          className={`
                            aspect-square flex items-center justify-center text-sm rounded transition-all
                            ${!dateInfo.isCurrentMonth 
                              ? 'text-gray-600 cursor-not-allowed' 
                              : dateInfo.isPast 
                                ? 'text-gray-600 cursor-not-allowed'
                                : dateInfo.isToday
                                  ? 'bg-green-500/20 text-green-500 border border-green-500/50'
                                  : selectedDate === dateInfo.date
                                    ? 'bg-green-500 text-black font-bold shadow-[0_0_15px_rgba(52,152,219,0.5)]'
                                    : 'text-white hover:bg-gray-800 hover:text-green-500'
                            }
                          `}
                        >
                          {dateInfo.day}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Time Selection */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-green-500 mr-3" />
                      Select Your Time (Kyiv Time)
                    </h3>
                    <p className="text-gray-300">
                      Selected: {new Date(selectedDate + 'T00:00:00').toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </p>
                  </div>

                  <div className="max-w-lg mx-auto">
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                      {timeSlots.map((time) => (
                        <motion.button
                          key={time}
                          onClick={() => handleTimeSelect(time)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`p-4 rounded-lg border text-center transition-all font-semibold ${
                            selectedTime === time
                              ? 'border-green-500 bg-green-500/10 text-green-500 shadow-[0_0_15px_rgba(52,152,219,0.3)]'
                              : 'border-gray-700 hover:border-green-500/50 text-white hover:text-green-500 hover:bg-green-500/5'
                          }`}
                        >
                          {time}
                        </motion.button>
                      ))}
                    </div>

                    <div className="flex justify-center mt-8">
                      <button
                        onClick={goBack}
                        className="flex items-center space-x-2 px-6 py-3 border border-gray-600 text-white rounded-lg hover:bg-gray-800 hover:border-green-500/50 transition-all"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back to Date</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Contact Form */}
              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2 flex items-center justify-center">
                      <User className="w-6 h-6 text-green-500 mr-3" />
                      Almost There! Your Details
                    </h3>
                    <p className="text-gray-300">Tell us about yourself and your QA challenges</p>
                  </div>

                  {/* Selected Date & Time Display */}
                  <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 max-w-md mx-auto">
                    <p className="text-green-500 font-semibold mb-1 text-center">Your Consultation:</p>
                    <p className="text-white text-center">
                      {new Date(selectedDate + 'T00:00:00').toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })} at {selectedTime} (Kyiv time)
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
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
                        className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/20 transition-all"
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
                        className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/20 transition-all"
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
                        className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/20 transition-all resize-none"
                        placeholder="What QA problems are you facing? What's your current testing setup?"
                      />
                    </div>

                    <div className="flex space-x-4 pt-4">
                      <button
                        type="button"
                        onClick={goBack}
                        className="flex-1 py-4 border border-gray-600 text-white rounded-lg hover:bg-gray-800 hover:border-green-500/50 transition-all flex items-center justify-center space-x-2"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back to Time</span>
                      </button>
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                        className="flex-1 py-4 bg-green-500 text-black font-bold text-lg rounded-lg hover:bg-green-400 hover:drop-shadow-[0_0_20px_#00B476] transition-all flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                            <span>Booking...</span>
                          </>
                        ) : (
                          <>
                            <span>Book Free QA Audit</span>
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </motion.button>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InlineBookingCalendar;