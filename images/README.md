# Image Guide for SewaSew Academy Website

This guide helps you add professional images to your website.

## 📸 Recommended Images

### 1. Hero Section Images
**Location**: Homepage hero background
**Size**: 1920x1080px (landscape)
**Format**: JPG or PNG
**Content Ideas**:
- Professional classroom setting
- Diverse group of professionals learning
- Modern training environment
- Students engaged in discussion

### 2. Team/Instructor Photos
**Location**: About page, Why SewaSew page
**Size**: 300x300px (square)
**Format**: JPG or PNG
**Content Ideas**:
- Professional headshots
- Instructors teaching
- Team collaboration photos

### 3. Program/Service Images
**Location**: Programs page cards
**Size**: 400x300px (landscape)
**Format**: JPG or PNG
**Content Ideas**:
- Business meetings
- Interview settings
- Study groups
- Professional presentations

### 4. Testimonial Photos
**Location**: Why SewaSew page
**Size**: 100x100px (square)
**Format**: JPG or PNG
**Content Ideas**:
- Professional headshots of students
- Success story photos

## 🎨 Image Guidelines

### Style
- **Professional**: Corporate, not casual
- **Authentic**: Real classroom environments, not stock photos
- **Diverse**: Show diversity in age, gender, profession
- **High Quality**: Clear, well-lit, professional photography
- **Consistent**: Similar lighting and color grading across all images

### Technical Requirements
- **Resolution**: Minimum 72 DPI for web
- **File Size**: Under 500KB per image (optimize for web)
- **Format**: JPG for photos, PNG for graphics with transparency
- **Naming**: Use descriptive names (e.g., `hero-classroom.jpg`)

### Color Scheme
- Complement brand colors (Teal #00D4D4, Navy #1A1A2E)
- Avoid clashing colors
- Maintain professional, muted tones

## 📁 File Organization

Place images in the `images/` directory with this structure:

```
images/
├── hero/
│   ├── homepage-hero.jpg
│   └── about-hero.jpg
├── team/
│   ├── instructor-1.jpg
│   ├── instructor-2.jpg
│   └── team-group.jpg
├── programs/
│   ├── professional-communication.jpg
│   ├── interview-prep.jpg
│   └── business-writing.jpg
├── testimonials/
│   ├── student-1.jpg
│   ├── student-2.jpg
│   └── student-3.jpg
└── ui/
    ├── logo.png
    ├── favicon.ico
    └── icons/
```

## 🔧 How to Add Images

### Step 1: Prepare Your Images
1. Resize images to recommended dimensions
2. Optimize file size (use TinyPNG or similar tools)
3. Name files descriptively
4. Place in appropriate `images/` subfolder

### Step 2: Update HTML Files
Find and replace image paths in HTML files:

**Example**:
```html
<!-- Before -->
<div class="hero-placeholder">Hero Image</div>

<!-- After -->
<img src="images/hero/homepage-hero.jpg" alt="Professional English training classroom" class="hero-image">
```

### Step 3: Add CSS (if needed)
Add styling for new images in `css/styles.css`:

```css
.hero-image {
    width: 100%;
    height: auto;
    object-fit: cover;
}
```

## 🎯 Image Sources

### Recommended Sources
1. **Professional Photography**: Hire a local photographer
2. **Stock Photos**: Use reputable stock photo sites
   - Unsplash (free)
   - Pexels (free)
   - Shutterstock (paid)
3. **Custom Graphics**: Hire a designer for branded elements

### What to Avoid
- Generic stock photos that look fake
- Low-resolution or pixelated images
- Overly casual or unprofessional images
- Images with visible watermarks
- Copyrighted images without permission

## 📱 Responsive Images

For optimal performance across devices, consider using responsive images:

```html
<picture>
    <source media="(max-width: 768px)" srcset="images/hero/homepage-hero-mobile.jpg">
    <source media="(min-width: 769px)" srcset="images/hero/homepage-hero-desktop.jpg">
    <img src="images/hero/homepage-hero-desktop.jpg" alt="Professional English training classroom">
</picture>
```

## ⚡ Performance Tips

1. **Compress images**: Use tools like TinyPNG, ImageOptim
2. **Use modern formats**: WebP for better compression
3. **Lazy load**: Add `loading="lazy"` to below-fold images
4. **CDN**: Consider using a CDN for image delivery
5. **Cache**: Set appropriate cache headers

## 🔍 Alt Text Guidelines

Always include descriptive alt text for accessibility:

```html
<!-- Good -->
<img src="images/team/instructor-1.jpg" alt="Sarah teaching a business English class to diverse professionals">

<!-- Bad -->
<img src="images/team/instructor-1.jpg" alt="Teacher">
```

## 📞 Need Help?

If you need assistance with images:
- Contact: info@sewasewacademy.com
- Telegram: https://t.me/sewasew

---

**Note**: This website is designed to work without images initially. Add images gradually to enhance the visual appeal while maintaining the professional, trust-focused design.