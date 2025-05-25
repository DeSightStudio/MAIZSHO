# MAIZSHO - Shopify B2B Theme

A custom Shopify theme built for MAIZON Store, a B2B platform for curated items. This theme is based on the Motion theme by Archetype Themes and includes extensive customizations for B2B functionality, multi-language support, and advanced e-commerce features.

## 🚀 Project Overview

MAIZSHO is a sophisticated Shopify theme designed specifically for B2B e-commerce operations. It features a modern, responsive design with advanced functionality including:

- **Multi-language support** (German, English, Spanish, French, Italian, Portuguese)
- **B2B-focused features** with custom registration and account management
- **Advanced product presentation** with hotspots, image comparison, and video integration
- **Customizable sections** for flexible page building
- **Modern development workflow** with Gulp build system
- **SCSS-based styling** with modular architecture

## 📋 Table of Contents

- [Technical Architecture](#technical-architecture)
- [Development Setup](#development-setup)
- [Build System](#build-system)
- [Theme Structure](#theme-structure)
- [Customizations](#customizations)
- [Multi-language Support](#multi-language-support)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)

## 🏗️ Technical Architecture

### Base Theme
- **Foundation**: Motion Theme v10.3.1 by Archetype Themes
- **Shopify Version**: Compatible with Shopify 2.0
- **JavaScript Framework**: Vanilla JavaScript with jQuery 3.7.0
- **CSS Preprocessor**: SCSS with Dart Sass
- **Build Tool**: Gulp 4.0.2

### Key Technologies
- **Node.js**: Development environment
- **Babel**: JavaScript transpilation with ES6+ support
- **Autoprefixer**: CSS vendor prefixing
- **CleanCSS**: CSS minification
- **Uglify**: JavaScript minification
- **Magnific Popup**: Modal and lightbox functionality

## 🛠️ Development Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Shopify CLI (optional, for theme development)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/DeSightStudio/MAIZSHO.git
   cd MAIZSHO
   ```

2. **Install dependencies**
   ```bash
   cd dev
   npm install
   ```

3. **Start development**
   ```bash
   npm run dev
   # or
   gulp
   ```

### Development Workflow

The development environment uses Gulp for asset compilation and watching. All source files are located in the `dev/` directory:

```
dev/
├── scss/           # SCSS source files
├── js/             # JavaScript source files
├── images/         # Image assets (if any)
├── fonts/          # Font files (if any)
├── gulpfile.mjs    # Gulp configuration
└── package.json    # Dependencies
```

## ⚙️ Build System

### Gulp Tasks

The build system includes several automated tasks:

#### Main Tasks
- **`gulp`** (default): Runs all tasks and starts watching
- **`gulp scss`**: Compiles SCSS to CSS
- **`gulp js`**: Compiles and minifies JavaScript
- **`gulp images`**: Optimizes and copies images
- **`gulp fonts`**: Copies font files
- **`gulp watch`**: Watches for file changes

#### SCSS Compilation
```bash
gulp scss
```
- Compiles SCSS files from `dev/scss/`
- Applies autoprefixer for browser compatibility
- Minifies CSS output
- Handles Liquid template syntax in SCSS files
- Outputs to `assets/` directory

#### JavaScript Compilation
```bash
gulp js
```
- Transpiles ES6+ JavaScript with Babel
- Includes polyfills for older browsers
- Concatenates multiple JS files
- Minifies output
- Outputs to `assets/custom.js`

#### File Watching
```bash
gulp watch
```
Automatically watches for changes in:
- `scss/**/*.scss` → triggers SCSS compilation
- `js/*.js` → triggers JavaScript compilation
- `images/*.{jpg,jpeg,png,gif,svg}` → triggers image processing
- `fonts/*.{eot,svg,ttf,woff,woff2}` → triggers font copying

### Build Configuration

The build system is configured in `dev/gulpfile.mjs` with the following key features:

- **Source Maps**: Enabled for development debugging
- **Browser Support**: Configured via Browserslist in package.json
- **Asset Paths**: Automatically resolves to Shopify's `assets/` directory
- **Liquid Integration**: Handles Shopify Liquid syntax in SCSS files
- **Clean Tasks**: Selective cleaning to preserve important files

## 🏛️ Theme Structure

### Directory Overview

```
MAIZSHO/
├── assets/                 # Compiled CSS, JS, and static assets
│   ├── theme.css.liquid   # Main theme styles
│   ├── custom.css.liquid  # Custom compiled styles
│   ├── theme.js           # Main theme JavaScript
│   ├── custom.js          # Custom compiled JavaScript
│   └── vendor-scripts-v14.js # Third-party libraries
├── config/                # Theme configuration
│   ├── settings_data.json # Current theme settings
│   └── settings_schema.json # Theme customization schema
├── layout/                # Theme layouts
│   ├── theme.liquid       # Main layout template
│   ├── password.liquid    # Password page layout
│   └── gift_card.liquid   # Gift card layout
├── locales/               # Multi-language files
│   ├── en.default.json    # English translations
│   ├── de.json           # German translations
│   ├── es.json           # Spanish translations
│   ├── fr.json           # French translations
│   ├── it.json           # Italian translations
│   └── pt-*.json         # Portuguese translations
├── sections/              # Reusable theme sections
├── snippets/              # Reusable code snippets
├── templates/             # Page templates
└── dev/                   # Development files
    ├── scss/              # SCSS source files
    ├── js/                # JavaScript source files
    └── gulpfile.mjs       # Build configuration
```

### Key Sections

The theme includes numerous custom sections for flexible page building:

#### Content Sections
- **`slideshow.liquid`**: Hero image/video carousel
- **`featured-collection.liquid`**: Product collection showcase
- **`text-and-image.liquid`**: Content blocks with images
- **`rich-text.liquid`**: Formatted text content
- **`background-image-text.liquid`**: Text overlays on images
- **`background-video-text.liquid`**: Text overlays on videos

#### E-commerce Sections
- **`featured-product.liquid`**: Product highlights
- **`product-recommendations.liquid`**: Related products
- **`collection-callout.liquid`**: Collection promotions
- **`featured-collections.liquid`**: Multiple collection display

#### Interactive Sections
- **`hotspots.liquid`**: Interactive image hotspots
- **`image-compare.liquid`**: Before/after image comparison
- **`countdown.liquid`**: Promotional countdown timers
- **`fading-images.liquid`**: Image transitions
- **`testimonials.liquid`**: Customer testimonials

#### Utility Sections
- **`newsletter.liquid`**: Email subscription forms
- **`contact-form.liquid`**: Contact forms
- **`faq.liquid`**: Frequently asked questions
- **`map.liquid`**: Store location maps

### Template Structure

#### Main Templates
- **`index.json`**: Homepage configuration
- **`product.json`**: Standard product pages
- **`collection.json`**: Collection listing pages
- **`page.json`**: Static pages
- **`blog.json`**: Blog listing
- **`article.json`**: Individual blog posts

#### Specialized Templates
- **`product.brand-story.json`**: Brand-focused product pages
- **`product.gift-card.json`**: Gift card products
- **`product.preorder.json`**: Pre-order products
- **`page.brand.json`**: Brand pages
- **`page.about-us.json`**: About page
- **`collection.collection-landing.json`**: Special collection pages

#### Customer Templates
- **`customers/account.liquid`**: Customer dashboard
- **`customers/login.liquid`**: Login page
- **`customers/register.liquid`**: Registration page
- **`customers/addresses.liquid`**: Address management
- **`customers/order.liquid`**: Order details

## 🎨 Customizations

### B2B Features

#### Custom Registration System
- **Enhanced registration forms** with business information
- **Account approval workflow** for B2B customers
- **Custom account templates** for business users
- **Role-based access control** features

#### Advanced Product Features
- **Hotspot functionality** for interactive product images
- **Image comparison tools** for product variants
- **Video integration** for product demonstrations
- **3D model support** with Shopify AR

#### Brand Management
- **Brand-specific pages** and templates
- **Brand overview functionality**
- **Custom brand navigation** and filtering
- **Brand story integration** in product pages

### UI/UX Enhancements

#### Navigation
- **Multi-level dropdown menus** with custom styling
- **Drawer-style mobile navigation** for better UX
- **Search functionality** with predictive search
- **Breadcrumb navigation** for better site structure

#### Product Display
- **Quick shop modals** for faster purchasing
- **Product image zoom** and gallery features
- **Variant selection** with custom styling
- **Inventory display** and availability indicators

#### Interactive Elements
- **Newsletter popups** with customizable triggers
- **Age verification** for restricted products
- **Announcement bars** for promotions
- **Scrolling text** for dynamic content

### Performance Optimizations

#### Asset Loading
- **Lazy loading** for images and videos
- **Critical CSS** inlining for faster rendering
- **JavaScript code splitting** for optimal loading
- **Font optimization** with preloading

#### Shopify Features
- **Section Groups** for better organization
- **Dynamic sections** for flexible layouts
- **Shopify 2.0 compatibility** with JSON templates
- **App integration** support for third-party tools

## 🌍 Multi-language Support

### Supported Languages

The theme supports six languages with complete translations:

- **German (de)**: Primary language with full translations
- **English (en)**: Default language with comprehensive coverage
- **Spanish (es)**: Complete translation set
- **French (fr)**: Full localization
- **Italian (it)**: Complete translation coverage
- **Portuguese (pt-BR, pt-PT)**: Brazilian and European variants

### Translation Files

#### Schema Translations
- **`locales/de.schema.json`**: German admin interface translations
- **`locales/en.default.schema.json`**: English admin interface translations
- **`locales/es.schema.json`**: Spanish admin interface translations
- **`locales/fr.schema.json`**: French admin interface translations
- **`locales/it.schema.json`**: Italian admin interface translations

#### Frontend Translations
- **`locales/de.json`**: German customer-facing translations
- **`locales/en.default.json`**: English customer-facing translations
- **`locales/es.json`**: Spanish customer-facing translations
- **`locales/fr.json`**: French customer-facing translations
- **`locales/it.json`**: Italian customer-facing translations
- **`locales/pt-BR.json`**: Brazilian Portuguese translations
- **`locales/pt-PT.json`**: European Portuguese translations

### Implementation

The theme uses Shopify's native internationalization features:

```liquid
{{ 'general.search.title' | t }}
{{ 'products.product.price' | t }}
{{ 'cart.general.title' | t }}
```

Currency and region-specific formatting is handled automatically based on the selected locale.

## 🚀 Deployment

### Shopify Theme Development

#### Using Shopify CLI
```bash
# Install Shopify CLI
npm install -g @shopify/cli @shopify/theme

# Connect to your store
shopify theme dev

# Deploy to development theme
shopify theme push --development

# Deploy to live theme
shopify theme push --live
```

#### Manual Deployment
1. **Zip the theme files** (excluding `dev/` directory)
2. **Upload via Shopify Admin** → Online Store → Themes
3. **Configure theme settings** in the customizer

### Build Process for Production

Before deploying, ensure all assets are compiled:

```bash
cd dev
npm install
gulp scss
gulp js
gulp images
gulp fonts
```

### Environment Configuration

#### Development
- Use `gulp watch` for automatic compilation
- Test on development theme first
- Verify all sections and templates work correctly

#### Production
- Compile and minify all assets
- Test thoroughly on staging environment
- Deploy during low-traffic periods
- Monitor for any issues post-deployment

## 🔧 Troubleshooting

### Common Issues

#### Build Problems

**SCSS Compilation Errors**
```bash
# Check for syntax errors in SCSS files
gulp scss --verbose

# Clear node modules and reinstall
rm -rf node_modules
npm install
```

**JavaScript Errors**
```bash
# Check for ES6+ syntax issues
gulp js --verbose

# Verify Babel configuration
cat .babelrc
```

#### Theme Issues

**Missing Translations**
- Check that all required translation keys exist in locale files
- Verify translation file syntax (valid JSON)
- Ensure fallback to default language works

**Section Not Displaying**
- Verify section schema is valid JSON
- Check that all required settings are defined
- Ensure section is properly registered in templates

**Performance Issues**
- Optimize images before uploading
- Minimize HTTP requests
- Use Shopify's CDN for assets
- Enable browser caching

### Development Tips

#### SCSS Organization
```scss
// Follow the established structure
dev/scss/
├── mixings/          # Mixins and functions
├── partials/         # Base styles and variables
├── layout/           # Layout-specific styles
├── modules/          # Component styles
├── sections/         # Section-specific styles
└── thirdparty/       # Third-party library styles
```

#### JavaScript Best Practices
- Use ES6+ features (transpiled by Babel)
- Follow existing code patterns
- Test across different browsers
- Minimize global scope pollution

#### Liquid Template Guidelines
- Use semantic HTML structure
- Implement proper accessibility features
- Optimize for performance
- Follow Shopify's best practices

### Performance Monitoring

#### Key Metrics to Track
- **Page Load Speed**: Target under 3 seconds
- **Core Web Vitals**: Monitor LCP, FID, CLS
- **Mobile Performance**: Ensure mobile-first approach
- **SEO Scores**: Maintain high search engine rankings

#### Tools for Monitoring
- Google PageSpeed Insights
- Shopify's built-in performance tools
- GTmetrix for detailed analysis
- Lighthouse for comprehensive audits

## 📚 Additional Resources

### Documentation
- [Shopify Theme Development](https://shopify.dev/themes)
- [Liquid Template Language](https://shopify.github.io/liquid/)
- [Motion Theme Documentation](https://archetypethemes.co/blogs/motion)
- [Shopify Section Groups](https://shopify.dev/themes/architecture/section-groups)

### Development Tools
- [Shopify CLI](https://shopify.dev/themes/tools/cli)
- [Theme Inspector](https://shopify.dev/themes/tools/theme-inspector)
- [Liquid Syntax Highlighting](https://marketplace.visualstudio.com/items?itemName=Shopify.theme-check-vscode)

## 🤝 Contributing

### Development Guidelines

1. **Follow existing code patterns** and naming conventions
2. **Test thoroughly** across different devices and browsers
3. **Document changes** in commit messages and pull requests
4. **Maintain backwards compatibility** when possible
5. **Update translations** for any new text content

### Code Standards

- **SCSS**: Follow BEM methodology for class naming
- **JavaScript**: Use ES6+ features with proper transpilation
- **Liquid**: Maintain clean, semantic markup
- **Performance**: Optimize for speed and accessibility

### Submission Process

1. Create feature branch from `main`
2. Make changes following established patterns
3. Test thoroughly in development environment
4. Submit pull request with detailed description
5. Ensure all checks pass before merging

---

## 📞 Support

For technical support or questions about this theme:

- **Repository**: [GitHub Issues](https://github.com/DeSightStudio/MAIZSHO/issues)
- **Developer**: DeSight Studio GmbH
- **Email**: dominik.waitzer@desightstudio.com

---

**Note**: This theme is specifically customized for MAIZON Store's B2B requirements. When transferring to another agency, ensure they understand the custom B2B features and multi-language implementation before making modifications.