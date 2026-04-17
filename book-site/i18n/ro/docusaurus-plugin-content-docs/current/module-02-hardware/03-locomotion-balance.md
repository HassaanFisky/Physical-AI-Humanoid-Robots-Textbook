---
title: 2.3 Locomotion & Balance
sidebar_label: 2.3 Locomotion & Balance
---

# Locomotion aur Balance

![Boston Dynamics Atlas Robot](https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1200&h=600&fit=crop)

> **Point ki Baat:** Chalna girna nahi hai. Yeh 'controlled falling' hai jisay waqt par pakar liya jata hai. Is chapter mein hum robot ko chalane aur uska balance banaye rakhne ki science parhein ge.

## Introduction: Na Girne ka Fun (Art)

Insaan takreeban aik saal mein chalna seekhte hain. Engineers 50 saal se robots mein iski nakal karne ki koshish kar rahe hain. Chalna is liye mushkil hai kyunke is mein:

- **Balance**: Center of Mass ko base ke andar rakhna hota hai.
- **Dynamics**: Speed aur impact ko manage karna hota hai.
- **Adaptability**: Uneven zameen aur seerhiyon par sambhalna hota hai.

---

## Balance Ke Bunyadi Usool

### Center of Mass (CoM)
Woh point jahan pure jism ka wazan jama samjha jaye.

### Zero Moment Point (ZMP)
Zameen par woh point jahan sari forces zero ho jati hain.

:::tip ZMP ka Rule
Agar ZMP robot ke paon (foot outline) ke andar hai, toh robot nahi gire ga. Agar yeh bahar nikal jaye, toh Gravity jeet jaye gi aur robot gir jaye ga.
:::

---

## Walking Phases (Chalne ke Marahal)

1. **Double Support**: Jab dono paon zameen par hon.
2. **Single Support**: Jab aik paon zameen par aur dusra hawa mein ho.
3. **Swing Phase**: Hawa mein move hote huay paon ka marhala.

---

## Push Recovery (Dhakka Lagne Par Sambhalna)

Jab robot ko dhakka lagta hai, toh woh 3 tareeqay use karta hai:
1. **Ankle Strategy**: Takhnon ke zariye halke dhakke ko rokna.
2. **Hip Strategy**: Hip se jhuk kar balance banana.
3. **Step Strategy**: Agar dhakka zor dar ho, toh girne se bachne ke liye qadam (step) barhana.

---

## Aham Nukat

:::note Khulasa (Summary)

1. **Balance** ka maqsad ZMP ko support area ke andar rakhna hai.
2. **Chalna** aik controlled falling ka naam hai.
3. **Running** mein aik aisa waqt aata hai jab dono paon hawa mein hote hain.
4. **Push Recovery** robots ki stability ke liye nihayat zaroori hai.
   :::

---

## Mazeed Parhein

- **Chapter 2.1**: [Kinematics aur Dynamics](/docs/module-02-hardware/kinematics-dynamics)
- **Chapter 2.2**: [Actuation aur Control](/docs/module-02-hardware/actuation-control)
- **Chapter 3.1**: [ROS 2 Concepts](/docs/module-03-software/ros2-concepts)
