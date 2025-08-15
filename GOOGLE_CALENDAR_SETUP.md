# 🗓️ Google Calendar Integration Setup Guide

## Overview
This guide will help you integrate Google Calendar with your Jacksonville Junk Removal booking system. This will enable real-time availability checking and automatic appointment booking.

## 🚀 Benefits of Google Calendar Integration

- **Real-time availability**: Customers see actual available slots
- **Automatic booking**: Appointments are created instantly in your calendar
- **Team coordination**: Multiple team members can see all bookings
- **Mobile sync**: Works on all devices and apps
- **Email notifications**: Automatic reminders for customers and team
- **Conflict prevention**: No double-booking issues

## 📋 Prerequisites

1. **Google Account**: You need a Google account (Gmail)
2. **Google Calendar**: Access to Google Calendar
3. **Business Hours**: Know your operating hours
4. **Service Durations**: Estimate how long each service takes

## 🔧 Step-by-Step Setup

### Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click "Create Project" or select an existing project
3. Give your project a name (e.g., "Jacksonville Junk Removal")
4. Click "Create"

### Step 2: Enable Google Calendar API

1. In your project, go to "APIs & Services" > "Library"
2. Search for "Google Calendar API"
3. Click on it and click "Enable"

### Step 3: Create Service Account Credentials

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "Service Account"
3. Fill in the details:
   - **Name**: `junk-removal-booking`
   - **Description**: `Service account for booking system`
4. Click "Create and Continue"
5. Skip the optional steps and click "Done"

### Step 4: Generate API Key

1. Click on your new service account
2. Go to "Keys" tab
3. Click "Add Key" > "Create New Key"
4. Choose "JSON" format
5. Download the JSON file (keep it secure!)

### Step 5: Share Your Calendar

1. Open [Google Calendar](https://calendar.google.com/)
2. Find your calendar in the left sidebar
3. Click the three dots next to it > "Settings and sharing"
4. Scroll down to "Share with specific people"
5. Add your service account email (from the JSON file)
6. Give it "Make changes to events" permission
7. Copy your Calendar ID (found in "Integrate calendar" section)

### Step 6: Environment Variables

Create or update your `.env.local` file:

```bash
# Google Calendar Integration
GOOGLE_CALENDAR_ID=your_calendar_id_here
GOOGLE_SERVICE_ACCOUNT_EMAIL=your_service_account_email@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour private key here\n-----END PRIVATE KEY-----"
GOOGLE_PROJECT_ID=your_project_id
```

## 🎯 Configuration Options

### Business Hours
You can customize your business hours in `lib/googleCalendar.ts`:

```typescript
businessHours: {
  monday: { start: '08:00', end: '17:00' },
  tuesday: { start: '08:00', end: '17:00' },
  wednesday: { start: '08:00', end: '17:00' },
  thursday: { start: '08:00', end: '17:00' },
  friday: { start: '08:00', end: '17:00' },
  saturday: { start: '09:00', end: '15:00' },
  sunday: { start: '10:00', end: '14:00' }
}
```

### Service Durations
Set how long each service typically takes:

```typescript
serviceDurations: {
  'mattress-removal': 45,        // 45 minutes
  'furniture-removal': 120,      // 2 hours
  'appliance-removal': 60,       // 1 hour
  'garage-cleanout': 180,        // 3 hours
  'construction-debris': 120     // 2 hours
}
```

### Buffer Time
Add buffer time between appointments:

```typescript
bufferTime: 30 // 30 minutes between appointments
```

## 🔒 Security Best Practices

1. **Never commit credentials**: Keep `.env.local` in `.gitignore`
2. **Restrict permissions**: Only give necessary calendar access
3. **Regular rotation**: Update API keys periodically
4. **Monitor usage**: Check Google Cloud Console for unusual activity

## 🧪 Testing the Integration

1. **Start your development server**: `npm run dev`
2. **Test availability checking**: Visit `/api/calendar?date=2024-01-15&service=mattress-removal`
3. **Test booking**: Use the booking form in your chatbot
4. **Check your calendar**: Verify appointments are created

## 🚨 Troubleshooting

### Common Issues

**"Calendar not found" error**
- Verify your Calendar ID is correct
- Ensure the service account has access to the calendar

**"Authentication failed" error**
- Check your service account credentials
- Verify the private key is properly formatted

**"Permission denied" error**
- Ensure the service account has "Make changes to events" permission
- Check if the calendar is shared correctly

### Debug Mode

Enable debug logging by adding to your environment:

```bash
DEBUG_CALENDAR=true
```

## 📱 Mobile Access

Once integrated, you can:
- **View all bookings** on your phone's Google Calendar app
- **Receive notifications** for upcoming appointments
- **Update appointments** from anywhere
- **Share calendar** with team members

## 🔄 Next Steps

After setup, consider:
1. **Email notifications**: Set up automatic confirmations
2. **SMS reminders**: Add text message reminders
3. **Team calendar**: Create a shared team calendar
4. **Analytics**: Track booking patterns and popular times

## 📞 Support

If you encounter issues:
1. Check the [Google Calendar API documentation](https://developers.google.com/calendar)
2. Verify your credentials and permissions
3. Test with a simple API call first
4. Check the browser console for error messages

## 🎉 Success!

Once integrated, your customers will be able to:
- See real-time availability
- Book appointments instantly
- Receive confirmation emails
- Get automatic reminders

Your booking system will be fully automated and professional! 🚀
