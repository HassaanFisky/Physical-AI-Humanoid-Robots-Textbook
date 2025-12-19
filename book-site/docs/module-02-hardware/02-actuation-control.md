---
title: 2.2 Actuation & Compliant Control
sidebar_label: 2.2 Actuation
---

# Actuation & Compliant Control

> **Why this matters:** Industrial robots (arms) are stiff and dangerous. Humanoids must be compliant (soft) to interact safely with the world and handle terrain impacts.

## Stiff vs. Compliant

**Stiff Control (Position Control)**: "Go to 90 degrees." If you push it, it fights back with max power. Dangerous.
**Compliant Control (Torque/Impedance Control)**: "Act like a spring." If you push it, it gives way.

## Actuator Types

1.  **Geared Electric Motors**: High RPM, low torque. Need gearboxes (10:1 to 100:1).
    - _Pros_: Precise, easy to control.
    - _Cons_: Gearboxes break on impact.
2.  **Quasi-Direct Drive (QDD)**: Low gear ratio (6:1 to 9:1).
    - _Pros_: Backdrivable (compliant), transparent.
    - _Cons_: Lower peak torque. Used in quadrupeds and light humanoids (e.g., Unitree).
3.  **Series Elastic Actuators (SEA)**: Spring in series with the motor.
    - _Pros_: Impact resistant, measures torque via spring deflection.
    - _Cons_: Limits control bandwidth.

## Impedance Control

We virtually simulate a spring-damper system:

We virtually simulate a spring-damper system:

```text
tau = Kp(q_des - q) + Kd(q'_des - q')
```

By changing `Kp` (Stiffness), we can make the robot soft (walking on rocks) or stiff (carrying a load).

## Key Takeaways

- Humanoids typically use Torque or Impedance control.
- **Backdrivability** allows the robot to "feel" the ground.
- Safety comes from compliance, not just software limits.
