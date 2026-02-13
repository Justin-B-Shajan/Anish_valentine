# 💕 Valentine's Day Website

A romantic, multi-page Valentine's Day website built with React, featuring beautiful animations, smooth transitions, and Formspree integration for email notifications.

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up Formspree:**
   - Go to [formspree.io](https://formspree.io) and create a free account
   - Create a new form
   - Copy your form ID (looks like: `YOUR_FORM_ID`)
   - Open `src/utils/formService.js`
   - Replace `YOUR_FORM_ID` with your actual Formspree form ID
   - Configure the form to send emails to: `justinbshajan324@gmail.com`

3. **Customize the content:**
   - Open `src/pages/Welcome.jsx` and replace `[Her Name]` with the actual name
   - Customize the reasons in `src/pages/ReasonsILoveYou.jsx`
   - Update memories in `src/pages/OurMemories.jsx`
   - Edit the love letter in `src/pages/LoveLetter.jsx`

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Build for production:**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
src/
  components/
    Layout.jsx          # Navigation and progress indicator
    HeartBackground.jsx # Animated floating hearts
    ConfettiEffect.jsx  # Confetti celebration effect
    CursorTrail.jsx     # Heart cursor trail effect
  pages/
    Welcome.jsx         # Landing page
    ReasonsILoveYou.jsx # Flip cards with reasons
    OurMemories.jsx     # Timeline of memories
    LoveLetter.jsx      # Typewriter effect letter
    TheQuestion.jsx     # Proposal page with Formspree
  utils/
    formService.js      # Formspree integration
  App.jsx              # Main app with routing
  main.jsx             # Entry point
  index.css            # Global styles
```

## 🎨 Features

- ✨ Smooth page transitions with Framer Motion
- 💖 Animated floating hearts background
- 🎴 Interactive flip cards
- 📜 Typewriter effect for love letter
- 🎉 Confetti explosion on "Yes" click
- 📧 Formspree email notifications
- 📱 Fully responsive design
- 🎯 Progress indicator showing current page
- 💫 Cursor trail with hearts
- 🌹 Romantic maximalist design

## 🛠️ Technologies

- **React** - UI framework
- **React Router** - Navigation
- **Framer Motion** - Animations
- **Tailwind CSS** - Styling
- **Formspree** - Form submissions
- **React Confetti** - Celebration effects
- **Vite** - Build tool

## 📝 Formspree Setup Checklist

- [ ] Create Formspree account
- [ ] Create new form
- [ ] Set notification email to: `justinbshajan324@gmail.com`
- [ ] Copy form ID/endpoint
- [ ] Replace `YOUR_FORM_ID` in `src/utils/formService.js`
- [ ] Test form submission

## 💡 Customization Tips

- **Colors**: Edit `tailwind.config.js` to change the color palette
- **Fonts**: Update font imports in `index.html` and Tailwind config
- **Content**: Modify text in each page component
- **Animations**: Adjust animation timings in Framer Motion components

## 🎯 Important Notes

- Make sure to test the Formspree integration before showing her!
- Replace `[Her Name]` in the Welcome page
- Customize all the reasons and memories to be personal
- The form will send an email notification when she clicks "YES"

## 💕 Enjoy!

This website is designed to be romantic, luxurious, and unforgettable. Every animation has purpose, every color choice evokes emotion. Make it yours!
