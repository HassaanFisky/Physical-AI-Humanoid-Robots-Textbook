---
title: 3.3 Perception Systems
sidebar_label: 3.3 Perception Systems
---

# Perception Systems

![AI Perception](https://images.unsplash.com/photo-1555255707-c07966088b7b?w=1200&h=600&fit=crop)

> **Point ki Baat:** Perception ke baghair robot aisa hi hai jaise band aankhon wala insaan. Perception sensor data ko aik kaam ki samajh bojh mein badal deta hai.

## Introduction: Dunya ko Dekhna

Robotics mein perception 3 bunyadi sawalon ke jawab deta hai:
1. **Kya** maujood hai? (Object Detection)
2. **Kahan** hai? (Localization)
3. **Kaisay** tabdeel ho raha hai? (Prediction)

---

## Computer Vision

Aaj kal ka computer vision 'Deep Learning' use karta hai taake images mein cheezon ko pehchan sakay.

### Object Detection
Nodes camera feed ko process karte hain aur batate hain ke saamne "Insaan", "Table" ya "Cup" maujood hai.

---

## 3D Perception

Sirf image dekhna kafi nahi, robot ko yeh bhi pata hona chahiye ke cheez kitni door hai.
- **LiDAR**: Laser ke zariye map banana.
- **Depth Cameras**: Har pixel ka distance naapna.

---

## Sensor Fusion

Jab hum camera aur LiDAR ke data ko milate hain toh usay 'Sensor Fusion' kehte hain. Yeh hamein aik behtar aur stable picture deta hai.

| Sensor | Strength | Weakness |
| :--- | :--- | :--- |
| **Camera** | Color aur details | Andheray mein mushkil |
| **LiDAR** | Distance aur andheray mein kaam | Mehnga aur color nahi dekhta |

---

## Aham Nukat

:::note Khulasa (Summary)

1. **Perception** raw data ko information mein badalta hai.
2. **Object Detection** cheezon ko pehchanne ke liye hai.
3. **3D Perception** distance aur depth samajhne ke liye hai.
4. **Sensor Fusion** different senses ko mila kar sachai tak pohanchata hai.
   :::

---

## Mazeed Parhein

- **Chapter 3.1**: [ROS 2 Concepts](/docs/module-03-software/ros2-concepts)
- **Chapter 3.2**: [Control Stack](/docs/module-03-software/control-stack)
- **Chapter 1.2**: [Sensors aur State Estimation](/docs/module-01-foundations/sensors-state-estimation)
