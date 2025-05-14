# 3D Models Directory

This directory is intended to store the 3D models used in the portfolio website.

## Expected Models

The application expects the following 3D model files:

1. `scene.gltf` - The workstation model used in the About section
2. `SpaceBoy/scene.gltf` - The astronaut model used in the Hero section
3. `Info.glb` - The energy sphere model used in the Contact section

## Placeholder Models

For development and preview purposes, the application includes fallback mechanisms when the actual models are not available:

- `placeholder-workstation.glb` - A simple desk and monitor
- `placeholder-astronaut.glb` - A simple humanoid figure
- `placeholder-energy.glb` - A glowing sphere

## Adding Your Models

To add your actual models:

1. Place your GLTF/GLB files in this directory with the expected names
2. Make sure the models are optimized for web use (reduced polygon count, compressed textures)
3. Test the loading and rendering performance

## Model Format

The application supports both GLTF and GLB formats:

- GLTF (.gltf) - A JSON-based format that references external files for textures and binary data
- GLB (.glb) - A binary format that includes all assets in a single file

GLB is generally recommended for web use as it's more compact and requires fewer HTTP requests.
