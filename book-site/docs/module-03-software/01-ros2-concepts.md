---
title: 3.1 ROS 2 for Humanoids
sidebar_label: 3.1 ROS 2 for Humanoids
---

# ROS 2 Concepts for Humanoids

> **Why this matters:** The Robot Operating System (ROS 2) is the industry standard plumbing. It handles how your camera talks to your SLAM, and how your SLAM talks to your walk controller.

## Nodes, Topics, and Services

- **Node**: An executable (e.g., `camera_driver`, `path_planner`).
- **Topic**: A bus for data (e.g., `/images`, `/joint_states`). Pub/Sub.
- **Service**: A request/reply mechanism (e.g., `/reset_simulation`).

## Real-Time Constraints

For humanoids, timing is not optional.

- **DDS (Data Distribution Service)**: The middleware under ROS 2.
- **Lifecycle Nodes**: Managed states (`Unconfigured` -> `Inactive` -> `Active`). Essential for safety. You don't want the motors active before the controller is ready.

```mermaid
graph LR
    A[Sensor Node] -->|/imu_data| B[State Estimator]
    B -->|/current_state| C[Controller]
    C -->|/joint_commands| D[Actuator Driver]
```

## Efficient Data Handling

- **Zero Copy**: Passing pointers instead of serializing data (intra-process).
- **QoS (Quality of Service)**:
  - _Reliable_: Deliver every packet (good for commands).
  - _Best Effort_: Drop old packets (good for high-rate sensor data).

## Key Takeaways

- ROS 2 is a graph of nodes talking over DDS.
- Humanoids require **Real-Time** performance; standard Linux isn't enough (need PREEMPT_RT kernel).
- Use Lifecycle Nodes to manage startup/shutdown safely.
