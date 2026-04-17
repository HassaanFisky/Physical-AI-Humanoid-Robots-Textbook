---
title: 3.2 Control Stack
sidebar_label: 3.2 Control Stack
---

# Control Stack

![Robotic Control Loop](https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=1200&h=600&fit=crop)

> **Khulasa:** Robot ke faislon (decisions) ko manage karna. Aik baray goal ko joint ki movement mein kaisay badla jata hai?

## Introduction: Hierarchical Control

Humanoid robot ka control system layers mein hota hai. Yeh bilkul insani dimagh ki tarah hai: Aap sochte hain ke "pani ka glass uthao" aur aapka jism khud hi hath ki movement aur balance ko sambhaal leta hai.

---

## 1. Control ki Layers

### High-Level (Task Planning)
Yahan robot faisla karta hai ke usay kya karna hai. Maslan: "Kitchen se apple lao".

### Mid-Level (Motion Planning)
Yahan robot path decide karta hai taake kisi cheez se takkar na ho jaye.

### Low-Level (Joint Control)
Yeh sab se tez layer hai. Yeh seedha motors ko command bheijti hai ke kis joint ko kitni torque se ghoomna hai.

---

## 2. State Machine

Robot ke behaviors ko manage karne ke liye State Machine use hoti hai:
- **State**: Robot abhi kya kar raha hai? (Khara hai, chal raha hai, gir raha hai)
- **Transition**: Aik state se dusri state mein jana.

---

## 3. Real-Time Operation

Robotics mein 'Real-Time' ka matlab hai ke controller ko apna kaam aik fixed time (maslan 1ms) ke andar khatam karna hai. Agar deri ho jaye, toh robot gir sakta hai.

:::warning Safety First
Production robots mein hamesha aik alag 'Safety System' hota hai jo khatray ki surat mein robot ko foran rok (E-Stop) deta hai.
:::

---

## Aham Nukat

:::note Khulasa (Summary)

1. **Control Stack** mukhtalif levels par hota hai.
2. **State Machine** robot ke dhang (behavior) ko control karti hai.
3. **Real-Time** hona balance ke liye lazmi hai.
4. **Safety System** ko kabhi band nahi karna chahiye.
   :::

---

## Mazeed Parhein

- **Chapter 3.1**: [ROS 2 Concepts](/docs/module-03-software/ros2-concepts)
- **Chapter 3.3**: [Perception](/docs/module-03-software/perception)
- **Chapter 2.2**: [Actuation aur Control](/docs/module-02-hardware/actuation-control)
