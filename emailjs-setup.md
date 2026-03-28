# EmailJS Setup Guide

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account

## Step 2: Connect Gmail Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" as provider
4. Connect your Gmail account (jamesviencent.cabreros@gmail.com)
5. Note down the **Service ID** (something like "service_xxxxx")

## Step 3: Create Email Template
1. Go to "Email Templates" in EmailJS dashboard
2. Click "Create New Template"
3. Set up the template with these variables:
   - **To Email**: `{{to_email}}`
   - **From Name**: `{{from_name}}`
   - **From Email**: `{{from_email}}`
   - **Subject**: `New Contact Form Message from {{from_name}}`
   - **Message Body**:
     ```
     You have received a new message from your portfolio contact form:

     Name: {{from_name}}
     Email: {{from_email}}

     Message:
     {{message}}
     ```
4. Save the template and note down the **Template ID** (something like "template_xxxxx")

## Step 4: Get Public Key
1. Go to "Account" in EmailJS dashboard
2. Copy the **Public Key** (something like "xxxxxxxxxxxxxx")

## Step 5: Update Contact.jsx
Replace the placeholders in `src/components/Contact.jsx`:
- `'YOUR_SERVICE_ID'` → `'service_xxxxx'`
- `'YOUR_TEMPLATE_ID'` → `'template_xxxxx'`
- `'YOUR_PUBLIC_KEY'` → `'xxxxxxxxxxxxxx'`

## Step 6: Test
1. Fill out the contact form on your portfolio
2. Submit the form
3. Check your Gmail inbox for the message

## Troubleshooting
- Make sure all IDs and keys are correct
- Check browser console for errors
- Verify Gmail service is connected properly
- Free EmailJS plan allows 200 emails/month