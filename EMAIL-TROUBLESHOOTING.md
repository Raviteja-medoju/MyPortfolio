# 🔧 Email Form Troubleshooting Guide

## 🎯 Quick Fix Steps

### Step 1: Clear Cache & Restart

```bash
# Stop the dev server (Ctrl+C)
# Then:
npm run dev
```

- Hard refresh browser: **Ctrl+Shift+R** (Windows) or **Cmd+Shift+R** (Mac)

---

### Step 2: Check Browser Console

1. Open your portfolio
2. Press **F12** to open DevTools
3. Click **"Console"** tab
4. Fill and submit form
5. Look for these messages:

**Good (Working):**
```
✅ Attempting to send email...
✅ Service ID: service_k345wtj
✅ Template ID: template_15a14rs
✅ Email sent successfully!
```

**Bad (Error):**
```
❌ EmailJS Error Details: {...}
❌ Error Text: [error message]
❌ Error Status: [error code]
```

**Copy the error message and check below for solution!**

---

## 🐛 Common Errors & Solutions

### Error: "Invalid public key"

**Cause**: Public key is wrong or not initialized

**Solution**:
1. Go to EmailJS → Account → General
2. Copy your **Public Key** (looks like: `SfwhCq4cd5ukTRsu9`)
3. Replace in `ContactForm.jsx` line 8:
```javascript
const EMAILJS_PUBLIC_KEY = 'YOUR_ACTUAL_KEY_HERE'
```

---

### Error: "Service not found"

**Cause**: Service ID is incorrect or service is not connected

**Solution**:
1. Go to EmailJS → Email Services
2. Check your Gmail service is **Active** (green checkmark)
3. Copy the **Service ID**
4. Replace in `ContactForm.jsx` line 6:
```javascript
const EMAILJS_SERVICE_ID = 'service_k345wtj'
```

---

### Error: "Template not found"

**Cause**: Template ID is wrong or template doesn't exist

**Solution**:
1. Go to EmailJS → Email Templates
2. Find your template
3. Copy the **Template ID**
4. Replace in `ContactForm.jsx` line 7:
```javascript
const EMAILJS_TEMPLATE_ID = 'template_15a14rs'
```

---

### Error: "Template parameters are invalid"

**Cause**: Template variables don't match

**Solution**:

Your EmailJS template **MUST** include these exact variables:
- `{{from_name}}`
- `{{from_email}}`
- `{{subject}}`
- `{{message}}`

Check your template has these!

---

### Error: "Gmail authentication required"

**Cause**: Gmail service not properly connected

**Solution**:
1. Go to EmailJS → Email Services
2. Click on your Gmail service
3. Click **"Reconnect"**
4. Re-authorize with your Gmail account
5. Make sure it shows **"Active"** status

---

### Error: "Monthly limit exceeded"

**Cause**: You've sent 200+ emails this month (free tier limit)

**Solution**:
- Wait until next month, OR
- Upgrade to paid plan ($7/month for 1000 emails)

---

## 🧪 Test in Steps

### Test 1: Verify EmailJS Package

Open browser console and type:
```javascript
import('https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js')
```

If error → package issue, reinstall:
```bash
npm uninstall @emailjs/browser
npm install @emailjs/browser
```

---

### Test 2: Test EmailJS Dashboard

1. Go to your template in EmailJS
2. Click **"Test it"** button
3. Fill in values
4. Click "Send Test"
5. **Did email arrive?**
   - ✅ YES → Problem is in your code
   - ❌ NO → Problem is in EmailJS setup

---

### Test 3: Simple Test Code

Replace your `handleSubmit` temporarily with this:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault()
  
  try {
    alert('Sending...')
    
    const result = await emailjs.send(
      'service_k345wtj',
      'template_15a14rs',
      {
        from_name: 'Test User',
        from_email: 'test@test.com',
        subject: 'Test Subject',
        message: 'Test message',
      }
    )
    
    alert('Success! Check your email!')
    console.log(result)
  } catch (error) {
    alert('Error: ' + error.text)
    console.error(error)
  }
}
```

Run this → If it works, your validation or form data has issues.

---

## 🔍 Detailed Checklist

### EmailJS Dashboard Checklist

- [ ] Account is verified (check email)
- [ ] Gmail service is connected
- [ ] Service status shows "Active"
- [ ] Service ID copied correctly
- [ ] Template exists
- [ ] Template ID copied correctly
- [ ] Template has `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`
- [ ] Template "To Email" is set to `ravitejachary.work@gmail.com`
- [ ] Public Key copied correctly
- [ ] Within monthly limit (200 emails)

### Code Checklist

- [ ] `@emailjs/browser` package installed
- [ ] Service ID matches dashboard
- [ ] Template ID matches dashboard
- [ ] Public Key matches dashboard
- [ ] `emailjs.init()` is called
- [ ] Form data structure matches template variables
- [ ] No typos in variable names

### Browser Checklist

- [ ] Cache cleared (Ctrl+Shift+R)
- [ ] Console shows no errors
- [ ] Form validation passes
- [ ] Network tab shows request being sent

---

## 🆘 Still Not Working?

### Option 1: Use Alternative Method

Instead of `emailjs.send()`, use `emailjs.sendForm()`:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault()
  
  try {
    const result = await emailjs.sendForm(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      e.target  // Pass the form element directly
    )
    
    console.log('Success!', result)
    setSubmitStatus('success')
  } catch (error) {
    console.error('Error:', error)
    setSubmitStatus('error')
  }
}
```

**Note**: Update template variables to match form field names:
- `{{name}}` (not `{{from_name}}`)
- `{{email}}` (not `{{from_email}}`)
- `{{subject}}`
- `{{message}}`)

---

### Option 2: Check Network Tab

1. Open DevTools → **Network** tab
2. Submit form
3. Look for request to `api.emailjs.com`
4. Click on it
5. Check **Response** tab
6. **Tell me what the response says!**

---

### Option 3: Try Minimal Setup

Create a test file: `test-email.html`

```html
<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
  <script>
    emailjs.init('SfwhCq4cd5ukTRsu9')
  </script>
</head>
<body>
  <button onclick="sendTest()">Send Test</button>
  
  <script>
    function sendTest() {
      emailjs.send('service_k345wtj', 'template_15a14rs', {
        from_name: 'Test',
        from_email: 'test@test.com',
        subject: 'Test',
        message: 'This is a test'
      }).then(
        () => alert('Success!'),
        (error) => alert('Error: ' + error.text)
      )
    }
  </script>
</body>
</html>
```

Open in browser → Click button → Does it work?

---

## 📞 Get Specific Error

**Please tell me:**

1. **Exact error message** from console
2. **What shows** in Network tab response
3. **Does EmailJS test** button work?
4. **Your EmailJS plan** (Free/Paid)?

With this info, I can give you the exact fix! 🎯

---

## 💡 Pro Tips

1. **Gmail Spam**: First email might go to spam → Check there!
2. **Browser Blocks**: Some browsers block 3rd party requests → Try Chrome
3. **AdBlockers**: Disable ad blockers temporarily
4. **Firewall**: Corporate firewalls might block EmailJS
5. **Dev vs Prod**: Works in dev but not prod? Check CORS settings

---

## ✅ Working Example

If everything is correct, console should show:

```
Attempting to send email...
Service ID: service_k345wtj
Template ID: template_15a14rs
Email sent successfully! {status: 200, text: "OK"}
```

And you receive email in: `ravitejachary.work@gmail.com`

---

**Let me know the exact error and I'll fix it!** 🚀
