---
title: 3.2 The Control Stack
sidebar_label: 3.2 Control Stack
---

# Control Stack Overview

> **Why this matters:** A brain without a nervous system is useless. The control stack organizes algorithms from "high-level desire" to "low-level voltage".

## The Hierarchy

1.  **High Level (Behavior)**: "Go to the kitchen" (Finite State Machine / Behavior Tree).
2.  **Planner**: "Generate a trajectory of footsteps" (MPC - Model Predictive Control).
3.  **Whole-Body Controller (WBC)**: "Move the CoM here while balancing and swinging the leg" (Quadratic Programming).
4.  **Low Level**: "Apply 5A current to the knee motor" (FOC - Field Oriented Control).

## Whole-Body Control (WBC)

WBC solves an optimization problem every 1-2ms:

```text
min || Ax - b ||^2  s.t.  Cx <= d
```

- **Tasks**: Keep head level, swing foot, maintain balance.
- **Constraints**: Friction cone (don't slip), Torque limits.

## Safety Layer

The most important part.

- **Watchdogs**: If the PC hangs, cut power.
- **Joint Limits**: Don't break the robot's own legs.
- **Emergency Stop**: Hardware button that kills power physically.

## Key Takeaways

- Control is layered: Slow/Smart on top, Fast/Dumb on bottom.
- WBC allows handling multiple tasks (balance + reaching) simultaneously.
- Safety must be enforced at the lowest firmware level.
