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
  const sectionRef = React.useRef<HTMLDivElement>(null);

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

  const todayStart = React.useMemo(() => {
    const today = new Date();
    const start = new Date(today);
    start.setHours(0, 0, 0, 0);
    return start;
  }, []);
  const maxDate = React.useMemo(
    () => new Date(todayStart.getFullYear(), todayStart.getMonth() + 2, 0),
    [todayStart]
  );



  // Generate calendar dates for current month
  const generateCalendarDates = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());
    
    const dates = [];
    
    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      
      const isCurrentMonth = date.getMonth() === month;
      const isPast = date < todayStart;
      const isWeekend = date.getDay() === 0 || date.getDay() === 6;
      const isOutOfRange = date > maxDate;
      const isToday = date.toDateString() === new Date().toDateString();
      dates.push({
        date: `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`,
        day: date.getDate(),
        isCurrentMonth,
        isPast,
        isWeekend,
        isOutOfRange,
        isToday,
        isSelectable: isCurrentMonth && !isPast && !isOutOfRange && !isWeekend
      });
    }
    
    return dates;
  };

  const navigateMonth = (direction: number) => {
    const newDate = new Date(currentDate);
    newDate.setDate(1);
    newDate.setMonth(currentDate.getMonth() + direction);

    const minMonth = new Date(todayStart.getFullYear(), todayStart.getMonth(), 1);
    const maxMonth = new Date(maxDate.getFullYear(), maxDate.getMonth(), 1);

    if (newDate < minMonth) {
      setCurrentDate(minMonth);
      return;
    }
    if (newDate > maxMonth) {
      setCurrentDate(maxMonth);
      return;
    }
    setCurrentDate(newDate);
  };

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    setTimeout(() => setCurrentStep(2), 300);
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
    
    setIsSubmitting(true);
    
    try {
      const res = await fetch('/.netlify/functions/send-booking-to-telegram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          message: trimmedMessage,
          date: selectedDate,
          displayDate: formatDateForDisplay(selectedDate)
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
      //   setFormData({ name: '', email: '', message: '' });
      // }, 5000);
    } catch (err) {
      console.error('Booking error:', err);
      toast.error('Error booking consultation. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const goBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setTimeout(() => {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const minMonth = React.useMemo(
    () => new Date(todayStart.getFullYear(), todayStart.getMonth(), 1),
    [todayStart]
  );
  const maxMonth = React.useMemo(
    () => new Date(maxDate.getFullYear(), maxDate.getMonth(), 1),
    [maxDate]
  );
  const currentMonthStart = React.useMemo(
    () => new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
    [currentDate]
  );
  const isPrevDisabled = currentMonthStart <= minMonth;
  const isNextDisabled = currentMonthStart >= maxMonth;

  const hasSelectableDatesInMonth = React.useCallback((date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const monthStart = new Date(year, month, 1);
    const monthEnd = new Date(year, month + 1, 0);

    for (let d = new Date(monthStart); d <= monthEnd; d.setDate(d.getDate() + 1)) {
      const isPast = d < todayStart;
      const isWeekend = d.getDay() === 0 || d.getDay() === 6;
      const isOutOfRange = d > maxDate;
      if (!isPast && !isWeekend && !isOutOfRange) {
        return true;
      }
    }
    return false;
  }, [todayStart, maxDate]);

  React.useEffect(() => {
    if (currentMonthStart < minMonth) {
      setCurrentDate(minMonth);
      return;
    }
    if (currentMonthStart > maxMonth) {
      setCurrentDate(maxMonth);
      return;
    }
    if (!hasSelectableDatesInMonth(currentDate) && currentMonthStart < maxMonth) {
      const nextMonth = new Date(currentMonthStart);
      nextMonth.setMonth(currentMonthStart.getMonth() + 1);
      setCurrentDate(nextMonth);
    }
  }, [currentDate, currentMonthStart, maxMonth, minMonth, hasSelectableDatesInMonth]);

  const steps = [
    { number: 1, title: 'Choose Date', icon: Calendar },
    { number: 2, title: 'Your Details', icon: User }
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
              We&apos;ll send you a confirmation email with the meeting details. 
              Looking forward to fixing your QA!
            </p>
            <div className="text-lg text-green-500 font-semibold mb-8">
              {formatDateForDisplay(selectedDate)}
            </div>
            
            <button
              onClick={() => {
                setIsSubmitted(false);
                setCurrentStep(1);
                setSelectedDate('');
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
    <section ref={sectionRef} className="py-20 px-6 bg-gray-900/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Book Your <span className="text-green-500">Free Consultation</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to fix your QA process? Schedule a free consultation and let&apos;s discuss your testing challenges.
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
                      <Calendar className="w-6 h-6 text-green-500 inline-block align-middle flex-shrink-0 mr-3" />
                      Choose Your Preferred Date
                    </h3>
                    <p className="text-gray-300">Select a date that works best for your schedule</p>
                  </div>

                  <div className="max-w-md mx-auto px-4 sm:px-6">
                    {/* Month Navigation */}
                    <div className="flex items-center justify-between mb-6">
                      <button
                        onClick={() => !isPrevDisabled && navigateMonth(-1)}
                        disabled={isPrevDisabled}
                        className={`p-2 transition-colors ${
                          isPrevDisabled ? 'text-gray-600 cursor-not-allowed' : 'text-gray-400 hover:text-green-500'
                        }`}
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <span className="text-white font-semibold text-xl">
                        {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                      </span>
                      <button
                        onClick={() => !isNextDisabled && navigateMonth(1)}
                        disabled={isNextDisabled}
                        className={`p-2 transition-colors ${
                          isNextDisabled ? 'text-gray-600 cursor-not-allowed' : 'text-gray-400 hover:text-green-500'
                        }`}
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
                          : dateInfo.isPast || dateInfo.isOutOfRange || dateInfo.isWeekend
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

              {/* Step 2: Contact Form */}
              {currentStep === 2 && (
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
                      <User className="w-6 h-6 text-green-500 inline-block align-middle flex-shrink-0 mr-3" />
                      Almost There! Your Details
                    </h3>
                    <p className="text-gray-300">Tell us about yourself and your challenges</p>
                  </div>

                  {/* Selected Date Display */}
                  <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 max-w-md mx-auto">
                    <p className="text-green-500 font-semibold mb-1 text-center">Your Consultation Date:</p>
                    <p className="text-white text-center">
                      {new Date(selectedDate + 'T00:00:00').toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
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
                        className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all"
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
                        className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all"
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
                        className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all resize-none"
                        placeholder="What problems are you facing?"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <button
                        type="button"
                        onClick={goBack}
                        className="w-full sm:w-1/2 py-4 border border-gray-600 text-white rounded-lg hover:bg-gray-800 hover:border-green-500/50 transition-all flex items-center justify-center space-x-2"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back to Date</span>
                      </button>
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                        className="w-full sm:w-1/2 py-4 bg-green-500 text-black font-bold text-lg rounded-lg hover:bg-green-400 hover:drop-shadow-[0_0_20px_#00B476] transition-all flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
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