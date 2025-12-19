---
title: 3.3 Perception for Humanoids
sidebar_label: 3.3 Perception
---

# Perception for Humanoids

> **Why this matters:** Walking blind is hard. To step over debris or stairs, the robot must map the terrain in 3D.

## SLAM (Simultaneous Localization and Mapping)

- **Lidar SLAM**: Precise 3D point clouds. Good for geometry. (e.g., LIO-SAM).
- **Visual SLAM**: Uses cameras. Good for textures/semantics. (e.g., ORB-SLAM3).

For walking, we need **Elevation Maps**: a 2.5D grid where every cell has a height. The planner uses this to pick safe footsteps.

## Terrain Analysis

Is that surface walkable?

1.  **Roughness**: Too bumpy?
2.  **Slope**: Too steep?
3.  **Stability**: Will it crumble? (Visual inspection is hard here).

## Contact Sensing

The feet are sensors.

- Detecting **Touchdown**: Switch from swing logic to stance logic.
- Detecting **Slip**: If the foot creates noise but doesn't move global position, it's slipping.

## Key Takeaways

- Perception isn't just "seeing objects"; it's "mapping walkability".
- Elevation maps are the standard interface between Perception and Locomotion.
- Foot contact is the most critical event to detect.
