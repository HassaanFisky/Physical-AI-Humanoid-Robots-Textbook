---
sidebar_position: 2
title: Core Concepts & System Architecture
---

# Core Concepts & System Architecture

**Required npm packages:** `mathjs`, `dotenv`

## Learning Outcomes

- Comprehend the hierarchical control architecture that governs humanoid robot behavior
- Identify the essential sensor modalities and their roles in robotic perception
- Understand actuator technologies and their tradeoffs in humanoid applications

## The Control Hierarchy

Humanoid robots operate through layered control architectures that bridge high-level objectives with low-level motor commands. This hierarchical approach manages complexity by decomposing tasks into manageable subsystems, each operating at different timescales and abstraction levels.

At the highest tier sits the task planner—the component that interprets goals and sequences actions. When a robot receives the command "pick up the cup," the task planner must decompose this into discrete phases: approach, reach, grasp, lift, and transport. This symbolic reasoning layer often incorporates AI techniques like search algorithms, constraint satisfaction, and increasingly, large language models for natural instruction understanding.

Below the task planner resides the motion planning system. Given waypoints or target configurations, motion planners compute collision-free trajectories through configuration space. Algorithms like Rapidly-exploring Random Trees (RRT) and optimization-based methods generate paths that satisfy kinematic constraints while avoiding obstacles. The planning horizon typically spans seconds to minutes, balancing computational cost against solution quality.

The lowest control tier executes trajectories through direct actuator commands. Running at kilohertz frequencies, these controllers translate desired positions, velocities, or torques into electrical signals driving motors. Proportional-integral-derivative (PID) controllers remain workhorses, though model predictive control and adaptive techniques increasingly appear in advanced systems.

## Sensor Systems and Perception

Perception forms the foundation of autonomous behavior. Without accurate environmental understanding, robots cannot plan meaningful actions. Modern humanoid platforms integrate diverse sensor modalities, each contributing unique information to the robot's world model.

Vision systems typically employ stereo cameras or RGB-D sensors that provide both color imagery and depth measurements. These enable object detection, scene segmentation, and spatial mapping. Convolutional neural networks process visual streams, identifying objects, estimating poses, and predicting affordances—what actions objects might support.

Proprioceptive sensors monitor the robot's internal state. Joint encoders measure angular positions, while gyroscopes and accelerometers within inertial measurement units (IMUs) track body orientation and acceleration. Force-torque sensors at joints and end effectors detect interaction forces, crucial for compliant manipulation and safe human interaction.

Contact and proximity sensing adds another dimension. Tactile sensors embedded in grippers detect slip, pressure distribution, and surface properties. Capacitive proximity sensors warn of impending collisions before contact occurs. These modalities prove essential for manipulation tasks requiring delicate force control.

## Actuator Technologies

Actuators convert electrical energy into mechanical motion—the muscles of robotic systems. Humanoid robots demand actuators that combine high power density, precise controllability, and reasonable efficiency. Several technologies compete for dominance in this demanding application space.

Electric motors, particularly brushless DC (BLDC) motors with planetary gearboxes, remain the predominant choice. They offer excellent controllability, reasonable efficiency, and mature supply chains. High-ratio gearboxes multiply torque at the cost of compliance and backdrivability. Series elastic actuators insert compliant elements between motors and output, enabling force control and safer interactions.

Hydraulic actuators provide exceptional power density—crucial for highly dynamic movements like running and jumping. Boston Dynamics' Atlas relies on hydraulic actuation for its athletic performances. However, hydraulics introduce complexity: pumps, valves, reservoirs, and potential leakage concerns complicate design and maintenance.

Emerging technologies promise future improvements. Quasi-direct-drive actuators use low-ratio gearboxes with high-torque motors, preserving backdrivability while achieving practical force outputs. Artificial muscles based on electroactive polymers or pneumatic approaches offer intriguing possibilities, though commercial viability remains distant.

## Software Architecture Patterns

Software architecture organizes the computational components that enable robotic intelligence. The Robot Operating System (ROS), despite its name suggesting an operating system, functions as middleware connecting perception, planning, and control modules through standardized message-passing interfaces.

Behavior trees have largely supplanted finite state machines for high-level task coordination. These hierarchical structures compose primitive actions and conditions into complex behaviors while maintaining modularity and reusability. A single tree might encode fallback strategies, parallel execution, and conditional branching.

Real-time operating systems underpin time-critical control loops. Linux with PREEMPT-RT patches or specialized RTOSes like VxWorks guarantee that motor commands execute within strict deadlines. Missing a control deadline by milliseconds could mean the difference between stable balance and a catastrophic fall.

## Runnable Example: Kinematic Calculations

```javascript
// run-example.js - Simple 2-DOF arm kinematics calculation
const math = require("mathjs");

function forwardKinematics(theta1Deg, theta2Deg, l1 = 0.4, l2 = 0.35) {
  // Convert degrees to radians
  const theta1 = theta1Deg * (Math.PI / 180);
  const theta2 = theta2Deg * (Math.PI / 180);

  // Calculate end-effector position
  const x = l1 * Math.cos(theta1) + l2 * Math.cos(theta1 + theta2);
  const y = l1 * Math.sin(theta1) + l2 * Math.sin(theta1 + theta2);

  return { x: math.round(x, 4), y: math.round(y, 4) };
}

console.log("2-DOF Arm Forward Kinematics Calculator\n");
console.log("Link lengths: L1 = 0.4m, L2 = 0.35m\n");

const testCases = [
  { theta1: 0, theta2: 0 },
  { theta1: 45, theta2: 45 },
  { theta1: 90, theta2: -45 },
  { theta1: 30, theta2: 60 },
];

testCases.forEach(({ theta1, theta2 }) => {
  const pos = forwardKinematics(theta1, theta2);
  console.log(`θ1=${theta1}°, θ2=${theta2}° → x=${pos.x}m, y=${pos.y}m`);
});

console.log("\n✓ Kinematics example completed");
```

## References

- [ROS 2 Documentation](https://docs.ros.org/en/rolling/)
- [Modern Robotics by Kevin Lynch & Frank Park](http://modernrobotics.org/)
- [IEEE Robotics & Automation Magazine](https://www.ieee-ras.org/publications/ram)
