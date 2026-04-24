---
title: "What Is a DDoS Attack? How They Work and How to Defend Against Them"
date: "2026-04-21"
description: "Understand what a DDoS attack is, how distributed denial-of-service attacks work, and what organizations and individuals can do to protect against them in 2025."
keyword: "what is ddos attack"
category: "network-security"
---

## What Is a DDoS Attack? The Complete Explanation for 2025

When a major website goes offline unexpectedly — not because of a software bug or maintenance, but because it has been overwhelmed by traffic — a distributed denial-of-service (DDoS) attack is often responsible. DDoS attacks are among the oldest, most common, and most disruptive forms of cyberattack. Understanding what they are, how they work, and what can be done about them is essential knowledge for anyone involved in operating or securing internet-connected systems.

## The Core Concept: Denial of Service

A denial-of-service (DoS) attack is any attack that aims to make a system, service, or network unavailable to its intended users. The simplest form: overwhelm a server with so many requests that it cannot respond to legitimate ones.

A distributed denial-of-service attack (DDoS) is the same concept executed from thousands or millions of computers simultaneously — making it far more powerful, and far harder to stop by simply blocking a single attacking IP address.

## How a DDoS Attack Works

### The Botnet: The Attack Infrastructure

Most large-scale DDoS attacks do not use the attacker's own computers. They use botnets — vast networks of compromised devices (computers, routers, IoT devices, smartphones) that have been infected with malware and are controlled remotely without their owners' knowledge.

Building a botnet involves infecting devices at scale — often through malware distributed via phishing emails, malicious downloads, or exploiting vulnerabilities in unpatched software. The attacker controls the botnet through command-and-control (C2) infrastructure and can direct all infected devices to attack a target simultaneously.

The most powerful DDoS attacks use botnets of hundreds of thousands or even millions of devices. The Mirai botnet, which attacked DNS provider Dyn in 2016 and knocked major sites including Twitter, Netflix, and Reddit offline for hours, used approximately 600,000 compromised IoT devices.

### Types of DDoS Attacks

**Volumetric attacks** flood the target with massive amounts of traffic — far more than the target's internet connection can handle. Measured in gigabits per second (Gbps) or terabits per second (Tbps), the largest attacks now exceed 3 Tbps. The attack volume simply saturates the target's bandwidth.

**Protocol attacks** exploit weaknesses in network protocols rather than simply generating volume. A SYN flood attack exploits the TCP handshake process: the attacker sends many connection requests but never completes the handshake, tying up server resources waiting for connections that never complete.

**Application layer attacks (Layer 7)** target specific application functionality — such as making thousands of requests for a database-intensive page — to exhaust server resources while using relatively little bandwidth. These are harder to detect because the traffic looks like legitimate user behavior.

## Who Conducts DDoS Attacks and Why?

**Hacktivism:** Politically or ideologically motivated attackers use DDoS to disrupt organizations they oppose. Anonymous, the decentralized hacktivist collective, conducted many high-profile DDoS attacks against governments, corporations, and other targets.

**Criminal extortion:** Attackers threaten a DDoS attack unless a ransom is paid. This is particularly effective against online businesses where downtime has immediate revenue consequences.

**Competition:** In competitive online environments — particularly online gaming — DDoS attacks against opposing servers or players are unfortunately common.

**Nation-state operations:** DDoS attacks are used as geopolitical tools. Russia-attributed attackers conducted major DDoS campaigns against Estonian government websites in 2007 and Ukrainian infrastructure in 2022.

**Hackers for hire:** The DDoS-as-a-service market (called "booter" or "stresser" services) allows anyone to purchase attack capacity for relatively small sums, dramatically lowering the barrier to conducting attacks.

## The Impact of DDoS Attacks

For online businesses, even brief downtime carries significant costs. E-commerce platforms, financial services, gaming companies, and media streaming services can lose hundreds of thousands of dollars per hour during an attack.

Beyond direct financial loss, DDoS attacks:
- Damage brand reputation and customer trust
- Can be used as diversionary tactics while attackers conduct more serious breaches elsewhere
- May violate service-level agreements with customers
- Create significant operational burden for security and IT teams

## How to Defend Against DDoS Attacks

### For Individuals and Small Businesses

At the small scale, individuals and small businesses have limited options compared to large organizations, but several measures help:

**Use a DDoS-protected hosting provider.** Reputable hosting companies include baseline DDoS protection. Cloudflare's free plan provides significant protection for websites.

**Enable rate limiting.** Limit the number of requests a single IP address can make within a time window. This does not stop distributed attacks but mitigates some application-layer attacks.

**Use a web application firewall (WAF).** Cloudflare, AWS WAF, and similar services inspect incoming traffic and block requests that match attack signatures.

### For Organizations

**DDoS mitigation services:** Specialized services like Cloudflare, Akamai, and AWS Shield absorb attack traffic at the network level before it reaches your infrastructure. They operate at a scale — multiple Tbps of capacity — that makes even the largest attacks manageable.

**Traffic scrubbing:** Traffic is routed through scrubbing centers that filter out attack traffic while passing legitimate requests to the origin server.

**Anycast network diffusion:** Distributing servers across many geographic locations using anycast routing spreads attack traffic across multiple sites rather than concentrating it at a single point.

**Incident response planning:** Organizations that recover most quickly from DDoS attacks are those that have documented plans, practiced them, and established relationships with DDoS mitigation providers before attacks occur.

## DDoS in 2025: The Evolving Landscape

DDoS attacks are growing in scale and sophistication. AI tools are beginning to be used to optimize attack strategies in real time. IoT proliferation continues to expand the pool of vulnerable devices available for botnet recruitment.

At the same time, defensive capabilities are also advancing. Cloud providers with global distribution networks have made mitigation more accessible at lower cost. Real-time traffic analysis can identify attack patterns faster than ever.

The fundamental dynamic — attackers innovating and defenders responding — continues as it always has. For organizations that depend on internet availability, understanding DDoS attacks and investing in appropriate mitigation measures is not optional but essential.

---

## Related Articles

- [What Is a Firewall? How It Works and Why You Need One](/what-is-a-firewall)
- [What Is a Man-in-the-Middle Attack? How It Works and How to Stay Safe](/what-is-a-man-in-the-middle-attack)
- [Best Cybersecurity Certifications in 2025: Ranked by Value and Demand](/best-cybersecurity-certifications-2025)
- [WiFi Security Best Practices 2025: Protect Your Wireless Network](/best-wifi-security-practices-2025)
- [How to Create a Strong Password in 2025: The Complete Guide](/how-to-create-strong-password)
