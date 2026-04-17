---
title: 2.2 Actuation & Control
sidebar_label: 2.2 Actuation & Control
---

# Actuation aur Control

![Robotic Arm aur Motors](https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=1200&h=600&fit=crop)

> **Khulasa:** AI ke orders ko haqiqi harakat mein badalna. Hum motors aur control systems ke zariye robot ko kaisay chalate hain?

## Introduction: Robot ke Muscles

Jis tarah insani jism mein muscles harakat paida karte hain, robot mein yeh kaam **Actuators** karte hain. Zyada tar naye robots mein electric motors use hoti hain.

---

## 1. Actuators ki Iqsam (Types)

### Electric Motors
- **BLDC (Brushless DC)**: Humanoid robots mein sab se zyada use hoti hain. Yeh taqatwar aur efficient hoti hain.
- **Stepper Motors**: Jahan boht bariki se position set karni ho.

### Hydraulic
Yeh boht zyada taqat (force) paida karti hain. Boston Dynamics ka 'Atlas' robot hydraulic system use karta hai takay woh jump aur backflips kar sakay.

---

## 2. Control Systems

Control system ka kaam yeh hai ke woh robot ki current position aur target position ke darmiyan farq (error) ko khatam kare.

### PID Control
Yeh dunya ka sab se mashhoor control loop hai:
1. **P (Proportional)**: Abhi wali ghalti ko theek karna.
2. **I (Integral)**: Purani ghaltiyon ko khatam karna.
3. **D (Derivative)**: Agli anay wali tabdeeli ka andaza lagana.

### MPC (Model Predictive Control)
Modern humanoids 'MPC' use karte hain. Yeh aglay kuch seconds ki planning karta hai taake robot ka balance na bigray.

---

## 3. Human Safety aur Compliance

Jab robots insanon ke sath kaam karte hain, toh hum **Impedance Control** use karte hain. Iska matlab hai ke robot sakht hone ke bajaye lachakdar (compliant) hota hai taake kisi takkar ki surat mein chot na lagay.

---

## Aham Nukat

:::note Khulasa (Summary)

1. **Actuators** robot ke muscles hain.
2. **PID** basic control ke liye behtareen hai.
3. **MPC** mushkil movement aur balance ke liye lazmi hai.
4. **Compliance** (lachak) insanon ki safety ke liye zaroori hai.
   :::

---

## Mazeed Parhein

- **Chapter 2.1**: [Kinematics aur Dynamics](/docs/module-02-hardware/kinematics-dynamics)
- **Chapter 2.3**: [Locomotion aur Balance](/docs/module-02-hardware/locomotion-balance)
- **Chapter 3.2**: [Control Stack](/docs/module-03-software/control-stack)
