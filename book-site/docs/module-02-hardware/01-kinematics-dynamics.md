---
title: 2.1 Kinematics & Dynamics
sidebar_label: 2.1 Kinematics & Dynamics
---

# Kinematics & Dynamics

> **Why this matters:** If you don't know where your foot is relative to your hip (Kinematics), you can't walk. If you don't know how much force is needed to lift your leg (Dynamics), you can't move.

## Kinematics: Geometry of Motion

**Forward Kinematics (FK)**: Given joint angles, where is the hand?
**Inverse Kinematics (IK)**: Given a desired hand position, what should the joint angles be?

For humanoids, IK is often "ill-posed" (redundant). You can reach a cup in infinite ways. We use optimization (QP - Quadratic Programming) to pick the "best" way (minimizing effort or maximizing balance).

## Dynamics: Forces & Torques

Equation of Motion:

```text
M(q)q'' + C(q, q')q' + g(q) = tau + J^T F_ext
```

- `M(q)`: Mass Matrix (Inertia)
- `C(q, q')`: Coriolis & Centrifugal forces
- `g(q)`: Gravity
- `tau`: Joint Torques (what we control)

### The Inverted Pendulum

We often approximate a robot as a **Linear Inverted Pendulum (LIP)**.
Imagine a broom balanced on a hand. The robot is the broom; the feet are the hand. To stay upright, the feet must move to "catch" the falling body.

## Key Takeaways

- Kinematics = Geometry. Dynamics = Physics.
- Humanoids are underactuated systems (you can't fly, you must push against the ground).
- Simplified models (LIP) are crucial for real-time control.
