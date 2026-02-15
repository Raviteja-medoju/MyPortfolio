# 🎨 Beautiful Email Template Setup Guide

## 📧 Preview

Your emails will look like this:

```
┌─────────────────────────────────────────┐
│   📬 New Portfolio Message              │ ← Gradient Header
│   Someone just reached out to you!      │
├─────────────────────────────────────────┤
│                                         │
│  Contact Details                        │
│  ┌───────────────────────────────────┐ │
│  │ 👤 Name:    John Doe              │ │
│  │ 📧 Email:   john@example.com      │ │
│  │ 📝 Subject: Job Opportunity       │ │
│  └───────────────────────────────────┘ │
│                                         │
│  💬 Message                             │
│  ┌───────────────────────────────────┐ │
│  │ Hi Raviteja, I'm interested...    │ │
│  └───────────────────────────────────┘ │
│                                         │
│     [✉️ Reply to John Doe] ← Button    │
│                                         │
├─────────────────────────────────────────┤
│  📩 Sent from Portfolio Contact Form    │ ← Footer
└─────────────────────────────────────────┘
```

---

## 🚀 How to Use This Template

### Method 1: Copy from File (Recommended)

1. **Open the template file**: `email-template.html`
2. **Select ALL** (Ctrl+A / Cmd+A)
3. **Copy** (Ctrl+C / Cmd+C)

### Method 2: Copy from Below

Copy this entire code:

---

## 📋 TEMPLATE CODE (Copy Everything Below)

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
</head>
<body style="margin: 0; padding: 0; background-color: #f3f4f6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif;">
    
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f3f4f6; padding: 40px 20px;">
        <tr>
            <td align="center">
                
                <!-- Main Container -->
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                    
                    <!-- Header with Gradient -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #3b82f6 0%, #6366f1 50%, #8b5cf6 100%); padding: 40px 30px; text-align: center;">
                            <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
                                📬 New Portfolio Message
                            </h1>
                            <p style="margin: 10px 0 0; color: rgba(255, 255, 255, 0.9); font-size: 16px;">
                                Someone just reached out to you!
                            </p>
                        </td>
                    </tr>
                    
                    <!-- Content -->
                    <tr>
                        <td style="padding: 40px 30px;">
                            
                            <!-- Contact Info Card -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f9fafb; border-radius: 12px; padding: 20px; margin-bottom: 24px; border: 1px solid #e5e7eb;">
                                <tr>
                                    <td>
                                        <p style="margin: 0 0 12px; font-size: 14px; color: #6b7280; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                                            Contact Details
                                        </p>
                                        
                                        <table width="100%" cellpadding="8" cellspacing="0">
                                            <tr>
                                                <td width="80" style="color: #374151; font-weight: 600; font-size: 15px; vertical-align: top;">
                                                    👤 Name:
                                                </td>
                                                <td style="color: #111827; font-size: 15px; font-weight: 500;">
                                                    {{from_name}}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="color: #374151; font-weight: 600; font-size: 15px; vertical-align: top;">
                                                    📧 Email:
                                                </td>
                                                <td>
                                                    <a href="mailto:{{from_email}}" style="color: #3b82f6; text-decoration: none; font-size: 15px; font-weight: 500;">
                                                        {{from_email}}
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="color: #374151; font-weight: 600; font-size: 15px; vertical-align: top;">
                                                    📝 Subject:
                                                </td>
                                                <td style="color: #111827; font-size: 15px; font-weight: 500;">
                                                    {{subject}}
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Message Card -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; padding: 24px; border: 2px solid #e5e7eb;">
                                <tr>
                                    <td>
                                        <p style="margin: 0 0 12px; font-size: 14px; color: #6b7280; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                                            💬 Message
                                        </p>
                                        <div style="padding: 16px; background-color: #f9fafb; border-radius: 8px; border-left: 4px solid #3b82f6;">
                                            <p style="margin: 0; color: #374151; font-size: 16px; line-height: 1.7; white-space: pre-wrap;">{{message}}</p>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Reply Button -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 30px;">
                                <tr>
                                    <td align="center">
                                        <a href="mailto:{{from_email}}?subject=Re: {{subject}}" style="display: inline-block; background: linear-gradient(135deg, #3b82f6, #8b5cf6); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 600; font-size: 16px; box-shadow: 0 4px 14px rgba(59, 130, 246, 0.4);">
                                            ✉️ Reply to {{from_name}}
                                        </a>
                                    </td>
                                </tr>
                            </table>
                            
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td style="background-color: #f9fafb; padding: 24px 30px; border-top: 1px solid #e5e7eb;">
                            <table width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td align="center">
                                        <p style="margin: 0 0 8px; color: #6b7280; font-size: 13px;">
                                            📩 Sent from your Portfolio Contact Form
                                        </p>
                                        <p style="margin: 0; color: #9ca3af; font-size: 12px;">
                                            Raviteja Medoju • Software Engineer
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                </table>
                
            </td>
        </tr>
    </table>
    
</body>
</html>
```

---

## 📝 Steps to Add to EmailJS

### 1. Go to EmailJS Dashboard
- Login to https://dashboard.emailjs.com/

### 2. Open Your Template
- Click **"Email Templates"** (left sidebar)
- Click on your template (or create new one)

### 3. Switch to HTML Mode
- Look for **"Code"** or **"HTML"** button/tab
- Switch from visual editor to code editor

### 4. Paste the Template
- **Delete** all existing content
- **Paste** the entire HTML code above
- Make sure you paste EVERYTHING (from `<!DOCTYPE` to `</html>`)

### 5. Set Email Settings

**Important Settings:**

- **To Email**: `ravitejachary.work@gmail.com` ← Your inbox
- **Subject**: `🎯 New Portfolio Contact: {{subject}}`
- **From Name**: `Portfolio Contact Form`

### 6. Save Template
- Click **"Save"**
- Note your **Template ID**

### 7. Test It!
- Use the **"Test"** button in EmailJS
- Or submit your contact form
- Check your email!

---

## ✨ Features of This Template

✅ **Beautiful Design**
- Blue-purple gradient header
- Clean, modern layout
- Professional typography
- Rounded corners and shadows

✅ **Well Organized**
- Contact details in highlighted card
- Message in separate styled box
- Clear sections with icons

✅ **Interactive**
- Clickable email address
- "Reply" button that opens email client
- Pre-filled subject line

✅ **Mobile Responsive**
- Works on all email clients
- Looks great on phone/desktop
- Gmail, Outlook, Apple Mail compatible

✅ **Professional**
- Matches your portfolio colors
- Branded footer
- Clear call-to-action

---

## 🎨 Customization Options

### Change Colors

Find these lines and adjust:

**Header Gradient**:
```html
background: linear-gradient(135deg, #3b82f6 0%, #6366f1 50%, #8b5cf6 100%);
```
Change to your colors: `#YOUR_COLOR1, #YOUR_COLOR2, #YOUR_COLOR3`

**Accent Color** (border, links, button):
```html
#3b82f6  ← Replace with your color
```

### Change Icons

Replace emojis:
- 📬 → 💌 or 📩
- 👤 → 🙋 or 👨
- 📧 → ✉️ or 💌
- 📝 → ✏️ or 📋
- 💬 → 💭 or 🗨️
- ✉️ (button) → 📨 or 💌

### Change Text

Edit these parts:
- **Header**: "New Portfolio Message"
- **Subheader**: "Someone just reached out to you!"
- **Footer**: "Raviteja Medoju • Software Engineer"

---

## 🧪 Testing

After setting up, test by:

1. Submitting your contact form
2. Checking your inbox
3. Email should look beautiful!

**What to check:**
- ✓ Colors render correctly
- ✓ Text is readable
- ✓ Reply button works
- ✓ Email address is clickable
- ✓ Looks good on mobile

---

## 📱 Mobile Preview

Most email clients will show this template perfectly on mobile:

```
┌──────────────────┐
│  📬 New Message  │ ← Gradient Header
│  Someone reached │
│  out!            │
├──────────────────┤
│  Contact Details │
│  ┌────────────┐  │
│  │ John Doe   │  │
│  │ john@...   │  │
│  └────────────┘  │
│                  │
│  💬 Message      │
│  ┌────────────┐  │
│  │ Hi...      │  │
│  └────────────┘  │
│                  │
│  [Reply Button]  │
└──────────────────┘
```

---

## 💡 Pro Tips

1. **Test in Gmail first** - Most people use Gmail
2. **Check spam folder** - First email might go there
3. **Mark as "Not Spam"** - Trains Gmail
4. **Use "Test" in EmailJS** - Send test emails
5. **Keep template ID safe** - You'll need it

---

## 🎉 Your Emails Will Look AMAZING!

This template features:
- 🎨 Professional design
- 💎 Modern aesthetics
- 📱 Mobile responsive
- ✨ Interactive elements
- 🚀 Fast and reliable

**Much better than plain text emails!** 😍

---

## ❓ Need Help?

If you have issues:
1. Make sure you paste the ENTIRE HTML code
2. Switch to "Code" or "HTML" mode in EmailJS
3. Check template variables: {{from_name}}, {{from_email}}, etc.
4. Set "To Email" to your email address
5. Test using EmailJS test button first

**Your emails will now look professional and beautiful!** 🎨✨
