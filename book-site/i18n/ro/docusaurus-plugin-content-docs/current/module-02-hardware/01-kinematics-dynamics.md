---
title: 2.1 Kinematics & Dynamics
sidebar_label: 2.1 Kinematics & Dynamics
---

# Kinematics aur Dynamics

![Robotic Joints aur Movement](https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&h=600&fit=crop)

> **Point ki Baat:** Movement ki maths. Hum kaisay tay karte hain ke robot ka hath kahan hai aur usay wahan tak le jaane ke liye kitni taqat chahiye?

## Introduction: Movement ki Science

Kinematics aur Dynamics robotics ki bunyad hain. Yeh woh zaban hai jis mein hum robot ke jism aur uski harakat ko bayan karte hain.

---

## 1. Kinematics

Kinematics sirf **movement** ka mutala hai. Is mein hum yeh nahi dekhte ke movement kis taqat (Force) se ho rahi hai.

### Forward Kinematics (FK)
Agar hamein pata ho ke robot ke har joint ka angle kya hai, toh hum maloom kar sakte hain ke uska hath (end-effector) dunya mein kis jagah par hai.

### Inverse Kinematics (IK)
Yeh FK ka ulat hai. Agar hum chahte hain ke robot ka hath aik khaas point (x, y, z) par jaye, toh joints ko kis angle par hona chahiye? 

```mermaid
graph LR
    A[Joint Angles] -- FK --> B[Hath ki Position]
    B -- IK --> A
```

---

## 2. Dynamics

Dynamics mein hum **Force** aur **Torque** ki baat karte hain jo movement paida karti hain.

### Newton-Euler Method
Yeh har part par lagne wali forces ka hisab lagata hai.

### Lagrangian Dynamics
Yeh energy (Kinetic aur Potential) ke zariye system ki equations banata hai.

---

## 3. Humanoid Robots Ke Liye Challenges

Insani numa robots ki movement boht mushkil hoti hai kyunke:
- Un mein boht zyada joints (Degrees of Freedom) hote hain.
- Un ka balance barqarar rakhna mushkil hota hai.
- Movement ke doran robot ka weight shift hota rehta hai.

| Concept | Definition |
| :--- | :--- |
| **DoF** | Degrees of Freedom (azaadi ki hudd) |
| **Singularity** | Woh jagah jahan maths fail ho jaye |
| **Torque** | Ghoomne wali taqat |

---

## Aham Nukat

:::note Khulasa (Summary)

1. **Kinematics** movement ki maths hai (baghair force ke).
2. **Inverse Kinematics** robot ko kisi path par chalane ke liye zaroori hai.
3. **Dynamics** forces aur movement ke talluq ko batati hai.
4. Bipedal systems (2 tangon wale) mein balance sab se bara masla hai.
   :::

---

## Mazeed Parhein

- **Chapter 1.2**: [Sensors aur State Estimation](/docs/module-01-foundations/sensors-state-estimation)
- **Chapter 2.2**: [Actuation aur Control](/docs/module-02-hardware/actuation-control)
- **Chapter 2.3**: [Locomotion aur Balance](/docs/module-02-hardware/locomotion-balance)
