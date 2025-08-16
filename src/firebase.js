// firebase.js - Firebase Configuration and Analytics Setup
import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent } from 'firebase/analytics';

// Your Firebase configuration
// TODO: Replace with your actual Firebase config from Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyCqPCiuzFMBimtvdNForNdf8x1S6VPMYvQ",
  authDomain: "saikumar-pendyala.firebaseapp.com",
  projectId: "saikumar-pendyala",
  storageBucket: "saikumar-pendyala.firebasestorage.app",
  messagingSenderId: "529515498004",
  appId: "1:529515498004:web:0e66f4a90d77a4b0653501",
  measurementId: "G-H7RMPXWCZQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics
let analytics = null;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

// Analytics helper functions
export const trackEvent = (eventName, parameters = {}) => {
  if (analytics) {
    logEvent(analytics, eventName, parameters);
  }
};

// Portfolio-specific tracking functions
export const trackPageView = (pageName) => {
  trackEvent('page_view', {
    page_title: pageName,
    page_location: window.location.href
  });
};

export const trackSkillView = (skillCategory) => {
  trackEvent('skill_viewed', {
    skill_category: skillCategory
  });
};

export const trackProjectView = (projectName) => {
  trackEvent('project_viewed', {
    project_name: projectName
  });
};

export const trackContactAction = (actionType) => {
  trackEvent('contact_action', {
    action_type: actionType // 'email', 'linkedin', 'github'
  });
};

export const trackResumeDownload = () => {
  trackEvent('resume_download', {
    file_name: 'saikumar_pendyala_resume.pdf'
  });
};

export const trackNavigationClick = (sectionName) => {
  trackEvent('navigation_click', {
    section_name: sectionName
  });
};

export const trackSocialMediaClick = (platform) => {
  trackEvent('social_media_click', {
    platform: platform
  });
};

export { analytics };
export default app;
