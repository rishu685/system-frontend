# LearnHub - Learning Management System Frontend

A modern, responsive React TypeScript frontend for a comprehensive Learning Management System (LMS) built with Vite, Tailwind CSS, and Lucide React icons.

## 🚀 Features

### 🎨 Modern UI/UX
- **Beautiful Design**: Clean, professional interface with gradient backgrounds and smooth animations
- **Responsive**: Fully responsive design that works on desktop, tablet, and mobile
- **Dark/Light Mode**: Support for theme switching (coming soon)
- **Accessibility**: Built with accessibility best practices

### 👥 User Management
- **Authentication**: Secure login/register with role-based access
- **User Roles**: Support for Students, Instructors, and Admins
- **Profile Management**: User profiles with progress tracking

### 📚 Course Management
- **Course Catalog**: Browse courses with search and filtering
- **Course Details**: Detailed course pages with video previews
- **Progress Tracking**: Track learning progress and completion
- **Certificates**: Digital certificates upon course completion

### 🎓 Learning Experience
- **Video Player**: Custom video player for lectures
- **Interactive Content**: Quizzes, assignments, and projects
- **Discussion Forums**: Community interaction and Q&A
- **Bookmarks**: Save favorite courses and content

### 💳 Payment Integration
- **Stripe Integration**: Secure payment processing
- **Razorpay Support**: Multiple payment gateways
- **Course Purchases**: Buy individual courses or subscriptions

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and building
- **Styling**: Tailwind CSS for utility-first styling
- **Icons**: Lucide React for beautiful, consistent icons
- **Routing**: React Router DOM for navigation
- **State Management**: React Query for server state
- **HTTP Client**: Axios for API calls
- **Forms**: React Hook Form for form handling
- **Notifications**: React Hot Toast for user feedback

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   └── Layout/         # Layout components (Navbar, Footer)
├── pages/              # Page components
│   ├── Auth/          # Authentication pages
│   ├── Courses/       # Course-related pages
│   └── Dashboard/     # User dashboard
├── contexts/          # React contexts (Auth, Theme)
├── hooks/             # Custom React hooks
├── services/          # API service functions
├── types/             # TypeScript type definitions
├── utils/             # Utility functions
└── styles/            # Global styles and Tailwind config
```

## 🚦 Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rishu685/system-frontend.git
   cd system-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` with your configuration:
   ```env
   VITE_API_URL=http://localhost:4000/api/v1
   VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key
   VITE_RAZORPAY_KEY_ID=your_razorpay_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 📱 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS for styling. Configuration can be found in `tailwind.config.js`.

### Vite Configuration
Build and development settings are in `vite.config.ts`.

## 🌟 Key Features Implementation

### Authentication System
- JWT-based authentication
- Role-based access control (Student, Instructor, Admin)
- Protected routes and components

### Course Management
- Course creation and editing (Instructors)
- Course enrollment and progress tracking
- Video streaming with progress saving

### Payment System
- Secure checkout with Stripe
- Support for one-time payments and subscriptions
- Invoice generation and payment history

### Responsive Design
- Mobile-first approach
- Breakpoint-based responsive design
- Touch-friendly interface for mobile devices

## 🔗 Backend Integration

This frontend is designed to work with the system-backend repository:
- **Backend Repository**: [https://github.com/rishu685/system_backend](https://github.com/rishu685/system_backend)
- **API Documentation**: Available in the backend repository
- **Authentication**: JWT tokens for secure API access

## 📊 Performance

- **Fast Loading**: Vite for lightning-fast development and building
- **Code Splitting**: Automatic code splitting for optimal loading
- **Image Optimization**: Optimized images and lazy loading
- **Caching**: Efficient API response caching with React Query

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Lucide React for beautiful icons
- All contributors and the open-source community

## 📞 Support

For support, email support@learnhub.com or join our Discord community.

---

Built with ❤️ by [Rishu685](https://github.com/rishu685)
