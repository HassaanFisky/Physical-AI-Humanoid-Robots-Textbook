// Textbook Knowledge Base
// This file contains extracted knowledge from all 12 chapters for the chatbot to search

export const textbookKnowledge = [
  {
    chapter: 1,
    title: "Introduction to Physical AI",
    topics: [
      "convergence",
      "definition",
      "humanoid form factor",
      "current landscape",
    ],
    content: `Physical AI represents the convergence of Large Language Models and robotic hardware. Unlike software-only AI, Physical AI must understand physics, forces, and real-world constraints. The humanoid form factor is optimal because our world is designed for human bodies - doorknobs, stairs, and tools all assume human proportions. Current leaders include Tesla Optimus Gen 2, Figure 01, and Boston Dynamics Atlas.`,
  },
  {
    chapter: 2,
    title: "The Humanoid Form Factor",
    topics: [
      "skeleton",
      "structure",
      "degrees of freedom",
      "DoF",
      "materials",
      "aluminum",
      "carbon fiber",
    ],
    content: `The humanoid skeleton must balance structural integrity with power-to-weight ratio. Every gram of mass requires motor torque to lift constantly. Common materials include Aircraft Grade Aluminum 7075 for linkages and Carbon Fiber Composites for limbs. A functional humanoid requires 28-50 Degrees of Freedom (DoF). Legs typically have 6 DoF per leg (hip 3, knee 1, ankle 2). Arms have 7 DoF per arm (shoulder 3, elbow 1, wrist 3). Hands require 6-11 DoF for manipulation. The spine/torso adds 2-3 DoF for balance.`,
  },
  {
    chapter: 3,
    title: "Actuators & Locomotion",
    topics: [
      "motors",
      "actuators",
      "torque density",
      "harmonic drives",
      "planetary gears",
      "QDD",
      "hydraulic",
      "electric",
    ],
    content: `Rotary Electric Actuators are the muscles of humanoid robots. Torque Density (Nm/kg) is the critical metric - it determines if a robot can jump or barely stand. Transmission systems include Harmonic Drives (zero backlash, 100:1 reduction, fragile), Planetary Gears (robust, 10:1 reduction, used in hips/legs), and Quasi-Direct Drive (QDD) with low reduction (6:1) for backdrivability and proprioception. Boston Dynamics retired hydraulic Atlas in 2024 for a fully electric version due to fluid leaks, complexity, and lower efficiency compared to regenerative electric motors.`,
  },
  {
    chapter: 4,
    title: "Sensors & Perception",
    topics: [
      "vision",
      "lidar",
      "cameras",
      "IMU",
      "proprioception",
      "tactile",
      "sensor fusion",
    ],
    content: `Humanoids rely on sensor fusion: Proprioception (joint encoders for limb position), IMU (gyroscopes/accelerometers for orientation), and Exteroception (cameras/LiDAR for environment). Vision systems use either LiDAR (millimeter-precise point clouds, expensive) or Pure Vision with Occupancy Networks (pseudo-LiDAR from stereo cameras, used by Tesla Optimus). Tactile sensing like GelSight uses internal cameras inside rubber fingertips to measure deformation, enabling texture detection and slip prevention for delicate manipulation.`,
  },
  {
    chapter: 5,
    title: "Batteries & Power Systems",
    topics: [
      "battery",
      "power",
      "energy density",
      "lithium ion",
      "structural pack",
      "thermal management",
      "voltage",
    ],
    content: `Energy density (Wh/kg) is the primary bottleneck. Current Li-Ion achieves ~250 Wh/kg; all-day autonomy requires 400+ Wh/kg. Robots use Structural Battery Packs integrated into the torso to save weight. Unlike EVs, robots lack airflow cooling and require active liquid cooling loops for both batteries and compute. Safety is critical - punctured batteries are fire hazards. Solid State Batteries offer non-flammable electrolytes and higher density. High Voltage architectures (100V+) reduce current, allowing thinner, lighter cabling.`,
  },
  {
    chapter: 6,
    title: "Edge Computing vs Cloud Brains",
    topics: [
      "edge",
      "cloud",
      "latency",
      "compute",
      "NVIDIA Orin",
      "split brain",
      "inference",
    ],
    content: `Physical AI uses a Split Brain Architecture. The Cerebellum (Edge) runs at 1kHz for balance, walking, and sensor fusion on local NVIDIA Jetson AGX Orin (275 TOPS). The Cortex (Cloud) runs at 0.5Hz for visual reasoning, planning, and speech on remote H100 clusters via 5G/Wi-Fi. Latency equals crash - a 100ms round-trip to cloud is too slow for fall recovery. On-board chips run quantized models (4-bit 70B parameters) in 64-128GB unified memory.`,
  },
  {
    chapter: 7,
    title: "Control Theory & RL",
    topics: [
      "control theory",
      "MPC",
      "reinforcement learning",
      "RL",
      "sim to real",
      "domain randomization",
    ],
    content: `Classical Model Predictive Control (MPC) solves physics equations 1000 times per second but is rigid and fails on unexpected scenarios. Reinforcement Learning trains neural networks in simulation by rewarding good walking and punishing falls. After billions of simulated years, RL policies learn robust behaviors humans couldn't code. The Sim-to-Real Gap is bridged via Domain Randomization - varying friction, mass, and sensor noise in simulation to train adaptable policies that work in chaotic reality.`,
  },
  {
    chapter: 8,
    title: "VLA Models",
    topics: [
      "VLA",
      "vision language action",
      "RT-2",
      "multimodal",
      "tokens",
      "affordance",
    ],
    content: `Vision-Language-Action models treat robot control as token prediction. Google's RT-2 takes an image and text command and outputs joint angles. Unlike coded if-statements, VLA models use pre-trained knowledge to identify objects semantically and predict affordances (how to grasp). The Data Famine problem exists - unlike LLMs trained on internet text, robots lack massive datasets. The Open X-Embodiment Dataset aggregates robot data from labs worldwide to create an ImageNet for Robotics.`,
  },
  {
    chapter: 9,
    title: "Sim-to-Real Transfer",
    topics: [
      "simulation",
      "Isaac Sim",
      "MuJoCo",
      "domain randomization",
      "DrEureka",
      "reward functions",
    ],
    content: `Training in simulation (NVIDIA Isaac Sim, MuJoCo) enables 10000 parallel robots at 100x real-time speed. Domain Randomization prevents overfitting by varying floor textures, lighting, limb mass, and friction in sim. DrEureka uses LLMs to automatically write reward functions, iterating on physics feedback to create superhuman behaviors without manual coding.`,
  },
  {
    chapter: 10,
    title: "Safety & Ethics",
    topics: [
      "safety",
      "ISO 13482",
      "emergency stop",
      "torque limits",
      "employment",
      "labor replacement",
    ],
    content: `ISO 13482 is the safety standard for personal care robots, requiring torque limits (stops if hitting humans) and redundant emergency stop circuits. The employment question is critical - a $20k robot working 24/7 for 10 years disrupts human labor. The goal is to solve labor shortages in dangerous, dull, and dirty jobs (the 3 Ds), but societal adaptation and new economic models are required for the transition.`,
  },
  {
    chapter: 11,
    title: "Case Studies",
    topics: [
      "Tesla Optimus",
      "Figure 01",
      "Unitree",
      "Boston Dynamics",
      "case study",
    ],
    content: `Tesla Optimus Gen 2 uses custom actuators and visual-only navigation, targeting $20k mass manufacturing. Figure 01 partners with OpenAI for speech-to-speech reasoning and BMW for warehouse deployment, demonstrating seamless VLA integration. Unitree H1/G1 achieves high agility (3.3 m/s running, backflips) via high-torque density reduced-gear motors, providing a platform for RL researchers.`,
  },
  {
    chapter: 12,
    title: "Future Frontiers",
    topics: [
      "future",
      "general purpose",
      "space",
      "Mars",
      "elderly care",
      "AGI",
    ],
    content: `The future awaits a ChatGPT moment for physical motion - a single model that learns any task from YouTube videos. Applications include Space Exploration (NASA Valkyrie building Mars habitats before humans arrive) and Elderly Care (addressing caregiver shortages in aging populations). We are witnessing the Cambrian Explosion of mechanical life - hardware is ready, brains are waking up, defining the silicon-carbon relationship for the next decade.`,
  },
];

// Semantic search function using simple keyword matching
// In production, this would use embeddings and vector similarity
export function searchTextbook(query: string): string {
  const lowerQuery = query.toLowerCase();
  const relevantChapters = textbookKnowledge.filter((kb) => {
    const combinedText = `${kb.title} ${kb.topics.join(" ")} ${
      kb.content
    }`.toLowerCase();
    // Check if query words appear in chapter content
    const queryWords = lowerQuery.split(" ").filter((w) => w.length > 3);
    return queryWords.some((word) => combinedText.includes(word));
  });

  if (relevantChapters.length === 0) {
    return "OUT_OF_SCOPE";
  }

  // Return the most relevant chapter content
  return relevantChapters
    .map((kb) => `[Chapter ${kb.chapter}: ${kb.title}]\n${kb.content}`)
    .join("\n\n");
}
