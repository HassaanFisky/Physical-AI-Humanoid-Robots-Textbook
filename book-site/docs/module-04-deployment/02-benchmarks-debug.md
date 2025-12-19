---
title: 4.2 Benchmarks & Metrics
sidebar_label: 4.2 Benchmarks
---

# Benchmarks, Metrics, and Debug Playbooks

> **Why this matters:** "It walks good" is not engineering. "It walks at 1.2m/s with a Cost of Transport of 1.5" is engineering.

## Key Metrics

1.  **Cost of Transport (CoT)**: Energy efficiency.
    $$ CoT = \frac{Energy}{Weight \times Distance} $$
    Humans: ~0.2. Existing Robots: ~1.5 - 3.0.
2.  **Success Rate**: Walks 10m without falling (N/100 trials).
3.  **Recovery Window**: Maximum push (in Newtons) the robot can survive.

## Debug Playbook

When the robot falls:

1.  **Check Power/Comms**: Did a motor cut out?
2.  **Check State Estimation**: Did it _think_ it was falling before it actually did?
3.  **Check Torque Limits**: Did the controller ask for more torque than the motor can give (saturation)?
4.  **Check Latency**: Did a control loop miss its deadline?

## Key Takeaways

- Measure everything.
- CoT is a brutal metric; it exposes inefficient designs.
- A systematic debug process beats random parameter tuning.
