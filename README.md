# Chakra UI v3 Templates

A comprehensive collection of production-ready, open-source templates and components built with Chakra UI v3. Accelerate your development workflow with copy-paste components designed for modern e-commerce applications.

![Chakra UI Templates](https://img.shields.io/badge/Chakra%20UI-v3.21.1-319795)
![Next.js](https://img.shields.io/badge/Next.js-15.3.5-black)
![React](https://img.shields.io/badge/React-19.0.0-61dafb)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

- ⚡ **Lightning Fast Development** - Skip the design phase and jump straight to building
- 🎨 **Modern & Professional** - Follow current design trends and best practices
- 🔧 **Fully Customizable** - Built with Chakra UI v3's flexible theming system
- 📱 **Mobile-First Design** - Responsive across all devices
- 🚀 **Production Ready** - Clean, semantic code with TypeScript support
- ♿ **Accessible** - Built-in accessibility features following ARIA guidelines
- 💯 **Open Source** - Free for personal and commercial use

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/codenaij/chakra-ui-templates.git
   cd chakra-ui-templates
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Install required peer dependencies**

   ```bash
   npm i @chakra-ui/react @emotion/react lorem-ipsum
   ```

4. **Generate Chakra UI types**

   ```bash
   npm run chakra-typegen
   ```

5. **Start the development server**

   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the templates.

## 📦 Available Components

### 🛒 E-commerce Templates

#### Product Lists

Professional product grid layouts for showcasing your inventory:

- **Basic Product List** - Clean, minimal product grid
- **Product List with Border Grid** - Enhanced grid with border styling
- **Product List with CTA Link** - Includes call-to-action links
- **Product List with Supporting Text** - Additional product descriptions

#### Product Overviews

Detailed product presentation components:

- **Half Image Layout** - Split layout with image and product details

#### Product Features

Showcase product features and benefits:

- **Wide Images Layout** - Full-width feature presentation
- **Tiered Images Layout** - Multi-level feature showcase

#### Category Filters

Help users navigate your product catalog:

- **Sidebar Filter** - Comprehensive filtering sidebar

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **UI Library**: [Chakra UI v3](https://chakra-ui.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Emotion](https://emotion.sh/)
- **Development**: [Storybook](https://storybook.js.org/)
- **Testing**: [Vitest](https://vitest.dev/)
- **Linting**: [Biome](https://biomejs.dev/)
- **Package Manager**: npm/yarn/pnpm/bun

## 🔧 Development

### Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Linting
npm run lint

# Generate Chakra UI types
npm run chakra-typegen

# Storybook development
npm run storybook

# Build Storybook
npm run build-storybook
```

### Project Structure

```
src/
├── app/                      # Next.js App Router pages
│   ├── ecommerce/           # E-commerce template pages
│   │   ├── category-filters/
│   │   ├── product-features/
│   │   ├── product-lists/
│   │   └── product-overviews/
│   └── getting-started/     # Documentation pages
├── components/              # Reusable components
│   ├── CodeBlock/          # Code display component
│   ├── MainComponentBlock/ # Template wrapper
│   ├── Nav/                # Navigation components
│   ├── Sidebar/            # Sidebar navigation
│   └── ui/                 # Base UI components
├── theme/                  # Chakra UI theme configuration
└── types/                  # TypeScript type definitions
```

### Adding New Components

1. Create your component in the appropriate category folder
2. Export the component code as a string for display
3. Add the component to the category page
4. Update the navigation routes in `src/components/Sidebar/routes.ts`

## 🎨 Customization

### Theme Configuration

The project uses Chakra UI's theme system. Customize colors, fonts, and component styles in:

- `src/theme/system.ts` - Main theme configuration
- `src/theme/recipes/` - Component-specific styling recipes

### Component Styling

Each component is fully customizable using Chakra UI's props and theming system:

```tsx
<Box bg="purple.500" color="white" p={4} borderRadius="md">
  Your content
</Box>
```

## 📱 Responsive Design

All components are built with mobile-first responsive design:

- **Base**: Mobile (320px+)
- **SM**: Small tablets (640px+)
- **MD**: Tablets (768px+)
- **LG**: Laptops (1024px+)
- **XL**: Desktops (1280px+)

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-component`
3. **Make your changes**: Add new components or improve existing ones
4. **Test your changes**: `npm run dev` and `npm run storybook`
5. **Commit your changes**: `git commit -m 'Add amazing component'`
6. **Push to your branch**: `git push origin feature/amazing-component`
7. **Open a Pull Request**

### Contribution Guidelines

- Follow the existing code style and conventions
- Include TypeScript types for all props and components
- Ensure components are accessible and responsive
- Add Storybook stories for new components
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 Chinonso Caleb

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

## 🙏 Acknowledgments

- [Chakra UI](https://chakra-ui.com/) - For the amazing component library
- [Next.js](https://nextjs.org/) - For the powerful React framework
- [Vercel](https://vercel.com/) - For hosting and deployment
- The open-source community for inspiration and contributions

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/codenaij/chakra-ui-templates/issues)
- **Discussions**: [GitHub Discussions](https://github.com/codenaij/chakra-ui-templates/discussions)
- **Documentation**: Visit the [live demo](https://chakra-ui-templates.com)

---

**Built with ❤️ by [Chinonso Caleb](https://github.com/codenaij)**

Star ⭐ this repository if you found it helpful!
