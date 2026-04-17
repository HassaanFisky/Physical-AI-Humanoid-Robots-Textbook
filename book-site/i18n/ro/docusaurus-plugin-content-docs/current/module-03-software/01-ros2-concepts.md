---
title: 3.1 ROS 2 Concepts
sidebar_label: 3.1 ROS 2 Concepts
---

# ROS 2 Ke Bunyadi Tasawurat

![ROS 2 Network](https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=1200&h=600&fit=crop)

> **Point ki Baat:** Robot Operating System (ROS) robotics ke liye aik 'middleware' hai jo mukhtalif hisson ko aik dusre se baat karne mein madad deta hai.

## Introduction: Future Operating System

ROS 2 koi purana OS (jaise Windows) nahi hai, balkay yeh software ka aik set hai jo robot ke mushkil systems ko aapas mein jorta hai.

---

## 1. Nodes: Robot Ke Parts

Robotics system mein har kaam ke liye aik alag 'Node' hota hai. Maslan:
- Aik node camera se picture leta hai.
- Dusra node picture mein rukawatein (obstacles) dhoondta hai.
- Tisra node motors ko chalane ka order deta hai.

---

## 2. Communication Ke Tareeqay

### Topics
Yeh data bhejne ka sab se aam tareeqa hai. Aik node data 'Publish' karta hai aur dusra usay 'Subscribe' karta hai.

### Services
Yeh 'Sawal aur Jawab' (Request/Response) jaisa kaam hai. Jab kisi node ko fori jawab chahiye ho toh woh Service use karta hai.

### Actions
Yeh lambay kamo ke liye use hote hain, jaise "Kitchen tak jao". Is mein aapko raaste mein feedback bhi milta rehta hai.

---

## 3. DDS: Reerh ki Haddi
ROS 2 ki sab se bari khoobi uska **DDS (Data Distribution Service)** hai. Yeh confirm karta hai ke data real-time mein baghair kisi rukawat ke aik jagah se dusri jagah pohanchay.

---

## Aham Nukat

:::note Khulasa (Summary)

1. **Nodes** chhote programs hain jo apna apna kaam karte hain.
2. **Topics** data ke flow ke liye hain.
3. **Services** quick task ke liye hain.
4. **Actions** lambay aur mushkil goals ke liye hain.
5. **DDS** system ko stable banata hai.
   :::

---

## Mazeed Parhein

- **Chapter 3.2**: [Control Stack](/docs/module-03-software/control-stack)
- **Chapter 3.3**: [Perception](/docs/module-03-software/perception)
- **Chapter 2.2**: [Actuation aur Control](/docs/module-02-hardware/actuation-control)
