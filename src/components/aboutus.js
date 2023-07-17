import React from 'react';

function AboutUs() {
  return (
    <div className="about-us">
      <div className="header">
        <h1>About Us</h1>
      </div>
  
      <div className="container">
        <h1>Welcome to MeetingMaster - Your Ultimate Meeting Scheduler!</h1>
        
        <p>At MeetingMaster, we believe that efficient and seamless scheduling is the key to successful meetings. We understand the frustration of endless email chains, missed appointments, and wasted time. That's why we created an innovative meeting scheduling solution to simplify the process for professionals like you.</p>
        
        <div className="section">
          <h2>Our Mission</h2>
          <p>Our mission is to revolutionize the way meetings are scheduled, making it effortless, efficient, and stress-free. We strive to empower individuals and teams by providing them with the tools they need to optimize their time and focus on what truly matters – productive discussions and meaningful collaborations.</p>
        </div>

        <div className="section">
          <h2>How We Can Help You</h2>
          <ul>
            <li>Smart Scheduling: Our intelligent algorithm analyzes participants' availability and preferences to suggest the best meeting times, eliminating the back-and-forth communication.</li>
            <li>Calendar Integration: Seamlessly sync your existing calendars, such as Google Calendar or Outlook, to avoid double-bookings and stay organized.</li>
            <li>Customizable Invitations: Create professional and personalized meeting invitations with custom branding, agenda details, and attachments.</li>
            <li>Reminders and Notifications: Receive automatic reminders and notifications for upcoming meetings, ensuring you never miss an important appointment.</li>
            <li>Time Zone Support: Efficiently schedule meetings across different time zones with our intuitive time zone conversion feature.</li>
            {/* <li>Analytics and Reporting: Gain valuable insights into your team's meeting patterns, attendee participation, and productivity with our comprehensive analytics dashboard.</li> */}
          </ul>
        </div>
        
        <div className="section">
          <h2>Why Choose MeetingMaster?</h2>
          <ul>
            <li>User-Friendly Interface: Our intuitive and user-friendly interface makes scheduling meetings a breeze, even for technologically challenged individuals.</li>
            <li>Security and Privacy: We take your data security seriously. MeetingMaster employs robust encryption and stringent privacy measures to safeguard your sensitive information.</li>
            <li>Mobile Accessibility: Access your meetings and scheduling tools on the go with our mobile apps, available for iOS and Android devices.</li>
            <li>Customer Support: Our dedicated support team is ready to assist you with any questions or issues you may have, ensuring a smooth and delightful experience.</li>
          </ul>
        </div>
        
        <div className="section">
          <h2>Join the MeetingMaster Community</h2>
          <p>Experience the power of efficient meeting scheduling today! Join thousands of professionals who have already embraced MeetingMaster as their go-to scheduling solution.</p>
         
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
