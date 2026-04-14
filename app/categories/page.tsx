import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Categories — CyberSec Guide",
  description: "Browse all categories on CyberSec Guide. Find expert guides and reviews organized by topic.",
};

const CATEGORIES: { icon: string; label: string; desc: string; href: string }[] = [{"icon":"🕵️","label":"Ethical Hacking","desc":"Pentesting & red teaming","href":"/category/ethical-hacking"},{"icon":"🔒","label":"Network Security","desc":"Firewalls, IDS & VPNs","href":"/category/network-security"},{"icon":"🛡️","label":"Privacy Tools","desc":"VPNs, Tor & anonymity","href":"/category/privacy"},{"icon":"🔑","label":"Password & Auth","desc":"Managers, MFA & passkeys","href":"/category/authentication"},{"icon":"☁️","label":"Cloud Security","desc":"AWS, Azure & GCP hardening","href":"/category/cloud-security"},{"icon":"📱","label":"Mobile Security","desc":"iOS & Android threat defense","href":"/category/mobile-security"},{"icon":"💀","label":"Ransomware","desc":"Prevention, detection & recovery","href":"/category/ransomware"},{"icon":"📜","label":"Certifications","desc":"CISSP, CEH, CompTIA & more","href":"/category/certifications"},{"icon":"🦠","label":"Antivirus","desc":"Endpoint protection ranked","href":"/category/antivirus"},{"icon":"🐛","label":"Bug Bounty","desc":"Platforms & programs guide","href":"/category/bug-bounty"},{"icon":"🏢","label":"Small Business Security","desc":"SMB cyber defense basics","href":"/category/small-business"},{"icon":"🌑","label":"Dark Web","desc":"Monitoring & threat intel","href":"/category/dark-web"},{"icon":"💻","label":"Endpoint Security","desc":"EDR, MDR & device management","href":"/category/endpoint-security"},{"icon":"🎣","label":"Phishing Prevention","desc":"Awareness & anti-phishing tools","href":"/category/phishing"},{"icon":"📊","label":"SIEM Tools","desc":"Log management & alerting","href":"/category/siem"},{"icon":"🪪","label":"IAM","desc":"Identity & access management","href":"/category/iam"},{"icon":"🔐","label":"Zero Trust Security","desc":"Architecture & implementation","href":"/category/zero-trust"},{"icon":"🎯","label":"Threat Intelligence","desc":"CTI feeds & analysis","href":"/category/threat-intelligence"},{"icon":"🔍","label":"Vulnerability Management","desc":"Scanning, patching & remediation","href":"/category/vulnerability-management"},{"icon":"🚨","label":"Incident Response","desc":"IR plans & playbooks","href":"/category/incident-response"},{"icon":"⚙️","label":"DevSecOps","desc":"Security in CI/CD pipelines","href":"/category/devsecops"}];

export default function CategoriesPage() {
  return (
    <>
      <style>{`
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        body{background:#060a0f;color:#e4e8f4;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;line-height:1.7}
        a{text-decoration:none;color:inherit}
        .cats-wrap{max-width:1100px;margin:0 auto;padding:48px 24px 80px}
        .cats-header{margin-bottom:40px;padding-bottom:24px;border-bottom:1px solid #1e2535}
        .cats-eyebrow{font-size:0.72rem;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#22d3ee;margin-bottom:8px}
        .cats-title{font-size:clamp(1.8rem,3.5vw,2.6rem);font-weight:900;letter-spacing:-0.03em;color:#e4e8f4}
        .cats-subtitle{font-size:0.95rem;color:#7a82a0;margin-top:10px;line-height:1.6}
        .cats-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:16px}
        .cat-card{background:#0c1018;border:1px solid #1e2535;border-radius:12px;padding:28px 22px;display:block;transition:border-color 0.15s,transform 0.15s,box-shadow 0.15s}
        .cat-card:hover{border-color:#22d3ee;transform:translateY(-3px);box-shadow:0 10px 32px rgba(0,0,0,0.35)}
        .cat-icon{font-size:2.2rem;margin-bottom:14px;display:block;line-height:1}
        .cat-label{font-weight:700;font-size:1rem;margin-bottom:6px;color:#e4e8f4}
        .cat-desc{font-size:0.8rem;color:#7a82a0;line-height:1.55}
        .cat-arrow{display:block;margin-top:14px;font-size:0.8rem;font-weight:600;color:#22d3ee;opacity:0;transition:opacity 0.15s}
        .cat-card:hover .cat-arrow{opacity:1}
        @media(max-width:500px){.cats-grid{grid-template-columns:repeat(2,1fr)}}
      `}</style>
      <div className="cats-wrap">
        <div className="cats-header">
          <div className="cats-eyebrow">Browse</div>
          <h1 className="cats-title">All Categories</h1>
          <p className="cats-subtitle">{CATEGORIES.length} categories — pick a topic and dive in.</p>
        </div>
        <div className="cats-grid">
          {CATEGORIES.map((c) => (
            <a href={c.href} className="cat-card" key={c.href}>
              <span className="cat-icon">{c.icon}</span>
              <div className="cat-label">{c.label}</div>
              <div className="cat-desc">{c.desc}</div>
              <span className="cat-arrow">Explore →</span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
