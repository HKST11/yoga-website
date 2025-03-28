# Prāṇa Shakti Wellness & Meditation Center

A modern, responsive website for Prāṇa Shakti Wellness & Meditation Center, showcasing yoga classes, schedules, and facilitating client engagement.

## Features

- Responsive design that works across all devices
- Modern UI with smooth animations and transitions
- Dedicated sections for yoga classes, instructor information, and gallery
- Interactive class schedule with filtering options
- Contact form for easy client inquiries
- Image gallery with category filtering and lightbox view

## Technology Stack

- **Framework**: Next.js 14+
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons

## Getting Started

### Prerequisites

- Node.js 18.17.0 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd yoga-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

- `app/`: Contains the application code
  - `components/`: React components used throughout the site
  - `globals.css`: Global styles including Tailwind directives
  - `layout.tsx`: Root layout component
  - `page.tsx`: Home page component
- `public/`: Static assets

## Customization

- **Styling**: Edit the `tailwind.config.js` file to modify the colors, fonts, and other design tokens
- **Content**: Update the content in each component file with your specific information
- **Images**: Replace the Unsplash placeholder images with your own photos

## Deployment

This site can be easily deployed to platforms like Vercel, Netlify, or any other hosting provider that supports Next.js applications:

```bash
npm run build
# or
yarn build
```

## License

This project is licensed under the MIT License.
