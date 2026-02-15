# 📧 EmailJS Setup Guide - Get Form Submissions in Your Email!

## 🎯 What You'll Get
When someone fills out your contact form, you'll receive an email like this:

```
From: Portfolio Contact Form
Subject: New message from [Name]

Name: John Doe
Email: john@example.com
Subject: Job Opportunity

Message:
Hi Raviteja, I saw your portfolio and I'm impressed...
```

---

## 📋 Step-by-Step Setup (5 minutes)

### Step 1: Create EmailJS Account

1. Go to **https://www.emailjs.com/**
2. Click **"Sign Up Free"**
3. Create account with your email (ravitejachary.work@gmail.com)
4. Verify your email

---

### Step 2: Add Email Service

1. After login, go to **"Email Services"** in dashboard
2. Click **"Add New Service"**
3. Choose **Gmail** (recommended) or any other email provider
4. Click **"Connect Account"**
5. Follow the prompts to authorize EmailJS to send from your Gmail
6. **Copy your Service ID** (looks like: `service_abc1234`)

---

### Step 3: Create Email Template

1. Go to **"Email Templates"** in dashboard
2. Click **"Create New Template"**
3. Use this template:

**Template Name**: Portfolio Contact Form

**Subject**: 
```
New Portfolio Message from {{from_name}}
```

**Content**:
```
You received a new message from your portfolio!

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Sent from Portfolio Contact Form
Reply to: {{from_email}}
```

4. Click **"Save"**
5. **Copy your Template ID** (looks like: `template_xyz5678`)

---

### Step 4: Get Your Public Key

1. Go to **"Account"** → **"General"**
2. Find **"Public Key"** section
3. **Copy your Public Key** (looks like: `abcXYZ123456789`)

---

### Step 5: Update Your Code

1. Open `src/components/ContactForm.jsx`
2. Find these lines at the top:
```javascript
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'
```

3. Replace with your actual values:
```javascript
const EMAILJS_SERVICE_ID = 'service_abc1234'  // Your Service ID
const EMAILJS_TEMPLATE_ID = 'template_xyz5678' // Your Template ID
const EMAILJS_PUBLIC_KEY = 'abcXYZ123456789'   // Your Public Key
```

4. Save the file

---

## ✅ Test Your Form

1. Run your portfolio:
```bash
npm run dev
```

2. Navigate to the Contact section
3. Fill out the form with test data
4. Click "Send Message"
5. Check your email inbox (ravitejachary.work@gmail.com)
6. You should receive the message within seconds!

---

## 🎨 Template Customization

### Advanced Template (with styling):

**Subject**:
```
🎯 New Portfolio Contact: {{subject}}
```

**Content**:
```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <div style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); padding: 20px; border-radius: 10px 10px 0 0;">
    <h2 style="color: white; margin: 0;">New Portfolio Message</h2>
  </div>
  
  <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px;">
    <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 15px;">
      <p style="margin: 5px 0;"><strong>From:</strong> {{from_name}}</p>
      <p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:{{from_email}}">{{from_email}}</a></p>
      <p style="margin: 5px 0;"><strong>Subject:</strong> {{subject}}</p>
    </div>
    
    <div style="background: white; padding: 20px; border-radius: 8px;">
      <h3 style="margin-top: 0; color: #3b82f6;">Message:</h3>
      <p style="line-height: 1.6; color: #374151;">{{message}}</p>
    </div>
    
    <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 14px;">
      <p>Sent from your Portfolio Contact Form</p>
    </div>
  </div>
</div>
```

---

## 🔒 Security Tips

### 1. **Don't Commit Keys to GitHub**

Create a `.env` file in your project root:

```env
VITE_EMAILJS_SERVICE_ID=service_abc1234
VITE_EMAILJS_TEMPLATE_ID=template_xyz5678
VITE_EMAILJS_PUBLIC_KEY=abcXYZ123456789
```

Update `ContactForm.jsx`:
```javascript
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
```

Add to `.gitignore`:
```
.env
.env.local
```

### 2. **Set Up Spam Protection** (Optional)

In EmailJS dashboard:
- Go to **Account** → **Security**
- Enable **CAPTCHA** (if available on your plan)
- Set **Rate Limiting** (e.g., 5 emails per hour per IP)

---

## 📊 Monitoring Emails

### In EmailJS Dashboard:
1. Go to **"Email History"**
2. See all sent emails
3. Check delivery status
4. View any errors

### Free Plan Limits:
- ✅ **200 emails/month**
- ✅ Unlimited templates
- ✅ Multiple services
- ✅ Email history

For more than 200 emails/month, upgrade to paid plan.

---

## 🐛 Troubleshooting

### Problem: Not receiving emails

**Check:**
1. ✓ Service ID, Template ID, and Public Key are correct
2. ✓ Gmail account is properly connected in EmailJS
3. ✓ Check spam folder
4. ✓ Check EmailJS dashboard for errors
5. ✓ Verify template variables match (from_name, from_email, etc.)

### Problem: "Failed to send" error

**Solutions:**
1. Check browser console for error messages
2. Verify EmailJS account is active
3. Check you haven't exceeded free plan limits (200/month)
4. Try disconnecting and reconnecting Gmail service

### Problem: Form submits but nothing happens

**Check:**
1. Open browser DevTools → Console
2. Look for errors
3. Verify import statement is correct: `import emailjs from '@emailjs/browser'`
4. Make sure package was installed: `npm list @emailjs/browser`

---

## 🚀 Advanced Features

### 1. **Auto-Reply to User**

Create a second template for auto-reply:

**Template Name**: Auto Reply

**To Email**: `{{from_email}}`

**Subject**: `Thanks for reaching out!`

**Content**:
```
Hi {{from_name}},

Thank you for your message! I received it and will get back to you within 24 hours.

Best regards,
Raviteja Medoju

---
This is an automated response.
```

Update `ContactForm.jsx`:
```javascript
// Send to yourself
await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {...}, EMAILJS_PUBLIC_KEY)

// Send auto-reply to user
await emailjs.send(EMAILJS_SERVICE_ID, 'template_autoreply_id', {...}, EMAILJS_PUBLIC_KEY)
```

### 2. **Email Notifications on Mobile**

1. Install Gmail app on phone
2. Enable push notifications
3. Get instant alerts when form is submitted!

### 3. **Track Form Analytics**

Add Google Analytics event:
```javascript
// After successful email send
if (window.gtag) {
  window.gtag('event', 'form_submission', {
    event_category: 'Contact',
    event_label: 'Portfolio Contact Form',
  })
}
```

---

## 💰 Pricing

### Free Plan (Perfect for Portfolio):
- ✅ 200 emails/month
- ✅ 2 email services
- ✅ Unlimited templates
- ✅ Email history (30 days)

### Personal Plan ($7/month):
- 1,000 emails/month
- Advanced features
- Priority support

**For portfolio, Free plan is more than enough!**

---

## 📝 Testing Checklist

Before going live:

- [ ] Tested form with valid data
- [ ] Tested form with invalid data (errors show correctly)
- [ ] Received test email in inbox
- [ ] Email content is formatted correctly
- [ ] "Reply to" works (clicking reply emails sender)
- [ ] Success message shows after submission
- [ ] Form clears after successful submission
- [ ] Tested on mobile device
- [ ] Checked spam folder (mark as "Not Spam" if needed)

---

## 🎉 You're All Set!

Your contact form now sends emails directly to: **ravitejachary.work@gmail.com**

**Benefits:**
- ✅ No backend needed
- ✅ Free (200 emails/month)
- ✅ Instant delivery
- ✅ Professional email templates
- ✅ Spam protection
- ✅ Email history tracking
- ✅ Works with GitHub Pages

---

## 📞 Need Help?

If you run into issues:

1. **EmailJS Docs**: https://www.emailjs.com/docs/
2. **Check Dashboard**: See email history and errors
3. **Browser Console**: Look for JavaScript errors
4. **Test Template**: Use EmailJS's "Test" button in template editor

---

**Happy emailing!** 📧✨

Your portfolio is now fully functional with real email delivery!
