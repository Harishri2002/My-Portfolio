# Assets Directory

This directory contains all the static assets for the portfolio website, including:

- Images for projects
- Skill icons
- 3D models
- Other static files

## Structure

- `/about/` - Images related to the About section
- `/contact/` - Images related to the Contact section
- `/nav/` - Navigation icons
- `/projects/` - Project screenshots and images
- `/skills/` - Skill icons and logos
- `/3dmodels/` - 3D model files for Three.js

## Usage

These assets are accessed in the application using the `getImageUrl` utility function:

\`\`\`javascript
import { getImageUrl } from "@/lib/utils"

// Example usage
<img src={getImageUrl("skills/react.png") || "/placeholder.png"} alt="React" />
\`\`\`

## Adding New Assets

When adding new assets:

1. Place them in the appropriate subdirectory
2. Use the `getImageUrl` function to reference them in components
3. Make sure to optimize images for web use
4. For 3D models, ensure they are in GLB or GLTF format for Three.js compatibility
