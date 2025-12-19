---
title: 2.3 Locomotion & Balance
sidebar_label: 2.3 Locomotion & Balance
---

# Locomotion & Balance

> **Why this matters:** Falling over is the #1 failure mode of humanoids. Balance is an active, continuous fight against gravity.

## Center of Mass (CoM) & ZMP

1.  **Center of Mass (CoM)**: The weighted average position of all mass in the robot.
2.  **Zero Moment Point (ZMP)**: The point on the ground where the total tipping moment is zero.

**The Rule**: To stay balanced, the ZMP must be inside the Support Polygon (the area covered by the feet).

## Walking Gaits

1.  **Static Walking**: Keep CoM over one foot at all times. Very slow, looks like a zombie.
2.  **Dynamic Walking**: Allow CoM to leave the support polygon briefly, but "catch" it with the next step. This is how humans walk.

```mermaid
graph TD
    A[Stance Phase] --> B[Swing Phase]
    B --> C[Heel Strike]
    C --> A
    Style A fill:#f9f,stroke:#333
```

## Push Recovery

What if you get shoved?

1.  **Ankle Strategy**: Use ankle torque to correct small pushes.
2.  **Hip Strategy**: Bend at the waist to generate angular momentum.
3.  **Stepping Strategy**: Take a step to widen the support polygon.

## Key Takeaways

- ZMP is the currency of balance.
- Dynamic walking requires "falling" and catching yourself.
- The robot must continuously re-plan footsteps based on disturbances.
