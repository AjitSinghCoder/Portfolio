# Portfolio Website - Resume, Skills & Projects

Personal portfolio website featuring resume, skills, projects, and contact information. Designed with a clean, modern aesthetic.

## Features

- **Resume**: Downloadable PDF resume
- **Skills**: Comprehensive list of technical skills and technologies
- **Projects**: Showcase of personal projects with descriptions
- **Contact**: Easy contact form and social media links
- **Responsive Design**: Optimized for desktop and mobile devices

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Development Server

Start the development server to view the website locally:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

## Build

Build the website for production:

```bash
npm run build
```

## Deployment

To deploy this portfolio, you can use hosting providers like:

- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)
- [GitHub Pages](https://pages.github.com/)

After running `npm run build`, upload the contents of the `build` folder to your hosting provider.

## Customization

To customize the content:

- Update `public/resume.pdf` with your resume
- Edit `src/App.js` to modify sections
- Update `package.json` for project metadata
- Change `public/index.html` for SEO settings

## License

This project is licensed under the MIT License.