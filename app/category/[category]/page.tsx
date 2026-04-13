import { getAllPosts } from '../../../lib/posts'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

type Props = { params: Promise<{ category: string }> }

const CATEGORY_MAP: Record<string, { label: string; desc: string; keywords: string[] }> = {
  'ethical-hacking':        { label: 'Ethical Hacking',          desc: 'Pentesting tools, techniques & vulnerability research',      keywords: ['ethical hacking','pentesting','penetration','metasploit','kali','burp suite','oscp'] },
  'network-security':       { label: 'Network Security',          desc: 'Firewalls, IDS, IPS & network defense strategies',           keywords: ['network security','firewall','ids','ips','wireshark','nmap','nids'] },
  'privacy':                { label: 'Privacy Tools',             desc: 'VPNs, browsers, anonymity & digital privacy',                keywords: ['vpn','privacy','anonymity','browser','tor','proton','mullvad','nordvpn'] },
  'authentication':         { label: 'Password & Auth',           desc: 'Password managers, MFA & authentication security',          keywords: ['password','mfa','authentication','2fa','bitwarden','1password','yubikey','passkey'] },
  'cloud-security':         { label: 'Cloud Security',            desc: 'AWS, Azure & GCP security hardening',                       keywords: ['cloud security','aws','azure','gcp','cloud','s3','iam','scp'] },
  'mobile-security':        { label: 'Mobile Security',           desc: 'Android & iOS security tips and tools',                     keywords: ['mobile security','android','ios','iphone','mdm','mobile','app security'] },
  'ransomware':             { label: 'Ransomware Protection',     desc: 'Ransomware defense, backup strategies & recovery',          keywords: ['ransomware','backup','recovery','3-2-1','malwarebytes','acronis','veeam'] },
  'certifications':         { label: 'Cybersecurity Certs',       desc: 'Best certifications for a cybersecurity career',            keywords: ['certification','cissp','security+','oscp','ceh','cism','cysa','comptia'] },
  'antivirus':              { label: 'Antivirus & Anti-Malware',  desc: 'Best antivirus and endpoint protection software',           keywords: ['antivirus','malware','bitdefender','malwarebytes','norton','kaspersky','eset','windows defender'] },
  'bug-bounty':             { label: 'Bug Bounty',                desc: 'Bug bounty platforms, programs & getting started',          keywords: ['bug bounty','hackerone','bugcrowd','intigriti','synack','vulnerability disclosure'] },
  'small-business':         { label: 'SMB Security',              desc: 'Cybersecurity for small and medium businesses',             keywords: ['small business','smb','msp','firewall','endpoint','cyber insurance','sme'] },
  'dark-web':               { label: 'Dark Web Monitoring',       desc: 'Monitor the dark web for stolen credentials & data',        keywords: ['dark web','monitoring','breach','stolen','credentials','haveibeenpwned','spycloud'] },
  'endpoint-security':      { label: 'Endpoint Security',         desc: 'EDR, EPP & XDR platforms for endpoint protection',          keywords: ['endpoint','edr','xdr','epp','crowdstrike','sentinelone','defender','sophos'] },
  'phishing':               { label: 'Phishing Prevention',       desc: 'Spot and stop phishing, smishing & social engineering',     keywords: ['phishing','smishing','vishing','social engineering','bec','email security','dmarc'] },
  'siem':                   { label: 'SIEM & Log Management',     desc: 'Best SIEM platforms for threat detection & compliance',     keywords: ['siem','splunk','sentinel','qradar','elastic','wazuh','log management','soc'] },
  'iam':                    { label: 'Identity & Access Mgmt',    desc: 'IAM, SSO, MFA & privileged access management tools',        keywords: ['iam','sso','mfa','okta','entra','cyberark','identity','privileged','pam'] },
  'zero-trust':             { label: 'Zero Trust Security',       desc: 'Zero trust architecture, ZTNA & implementation guides',     keywords: ['zero trust','ztna','least privilege','microsegmentation','cloudflare access','zscaler'] },
  'threat-intelligence':    { label: 'Threat Intelligence',        desc: 'CTI tools, feeds & frameworks for proactive defense',      keywords: ['threat intelligence','cti','mitre','att&ck','recorded future','mandiant','misp','ioc'] },
  'vulnerability-management':{ label: 'Vulnerability Management', desc: 'Vulnerability scanning, patching & risk prioritization',    keywords: ['vulnerability','cve','nessus','qualys','rapid7','patch','cvss','scanning'] },
  'incident-response':      { label: 'Incident Response',         desc: 'IR plans, playbooks & tools for cyber incident handling',   keywords: ['incident response','ir','forensics','theHive','velociraptor','dfir','soc','playbook'] },
  'devsecops':              { label: 'DevSecOps',                 desc: 'Security in CI/CD pipelines, SAST, DAST & secrets management', keywords: ['devsecops','sast','dast','secrets','snyk','checkmarx','sonarqube','ci/cd','supply chain'] },
}

export async function generateStaticParams() {
  return Object.keys(CATEGORY_MAP).map((category) => ({ category }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params
  const cat = CATEGORY_MAP[category]
  if (!cat) return {}
  return {
    title: `${cat.label} 2025 — CyberSec Guide`,
    description: cat.desc,
    alternates: { canonical: `/category/${category}` },
  }
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params
  const cat = CATEGORY_MAP[category]
  if (!cat) notFound()

  const all = getAllPosts()
  const kw = cat.keywords
  const matched = all.filter((p) => {
    const text = ((p.keyword || '') + ' ' + (p.title || '') + ' ' + (p.slug || '')).toLowerCase()
    return kw.some((k) => text.includes(k))
  })
  const posts = matched.length > 0 ? matched : all

  return (
    <>
      <style>{`
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        :root{--bg:#060a0f;--surface:#0b1018;--border:#1a2535;--text:#e2e8f0;--muted:#64748b;--accent:#22d3ee;--accent2:#f97316;--radius:12px}
        body{background:var(--bg);color:var(--text);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;line-height:1.6}
        a{text-decoration:none;color:inherit}
        .container{max-width:1100px;margin:0 auto;padding:0 24px}
        .cat-hero{padding:60px 24px 48px;text-align:center;background:radial-gradient(ellipse 70% 50% at 50% 0%,rgba(34,211,238,0.1) 0%,transparent 70%)}
        .cat-badge{display:inline-block;padding:5px 16px;border-radius:20px;background:rgba(34,211,238,0.1);border:1px solid rgba(34,211,238,0.3);color:var(--accent);font-size:0.75rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;margin-bottom:16px}
        .cat-hero h1{font-size:clamp(1.8rem,4vw,2.8rem);font-weight:900;letter-spacing:-0.03em;margin-bottom:12px}
        .cat-hero p{color:var(--muted);font-size:1rem;max-width:560px;margin:0 auto 24px}
        .breadcrumb{display:flex;align-items:center;gap:8px;font-size:0.8rem;color:var(--muted);justify-content:center;margin-bottom:32px}
        .breadcrumb a{color:var(--accent)}
        .post-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:20px;padding-bottom:80px}
        .post-card{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:28px;display:flex;flex-direction:column;transition:border-color 0.15s,transform 0.15s}
        .post-card:hover{border-color:var(--accent);transform:translateY(-2px)}
        .post-tag{display:inline-block;padding:3px 10px;border-radius:20px;background:rgba(34,211,238,0.08);border:1px solid rgba(34,211,238,0.2);color:var(--accent);font-size:0.68rem;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;margin-bottom:12px}
        .post-card h2{font-size:1rem;font-weight:700;line-height:1.4;margin-bottom:10px}
        .post-card h2 a:hover{color:var(--accent)}
        .post-card p{color:var(--muted);font-size:0.87rem;line-height:1.65;flex:1;margin-bottom:18px}
        .post-footer{display:flex;align-items:center;justify-content:space-between;padding-top:14px;border-top:1px solid var(--border)}
        .post-date{font-size:0.72rem;color:var(--muted)}
        .post-link{font-size:0.82rem;color:var(--accent);font-weight:600}
        .empty{text-align:center;padding:80px 0;color:var(--muted)}
        @media(max-width:600px){.post-grid{grid-template-columns:1fr}}
      `}</style>

      <div className="cat-hero">
        <div className="cat-badge">Category</div>
        <h1>{cat.label}</h1>
        <p>{cat.desc}</p>
        <div className="breadcrumb">
          <a href="/">Home</a>
          <span>/</span>
          <span>{cat.label}</span>
        </div>
      </div>

      <div className="container">
        {posts.length === 0 ? (
          <p className="empty">No articles yet — check back soon!</p>
        ) : (
          <div className="post-grid">
            {posts.map((post) => (
              <article className="post-card" key={post.slug}>
                {post.keyword && <span className="post-tag">{post.keyword}</span>}
                <h2><a href={`/${post.slug}`}>{post.title}</a></h2>
                <p>{post.description}</p>
                <div className="post-footer">
                  <span className="post-date">{post.date}</span>
                  <a href={`/${post.slug}`} className="post-link">Read →</a>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
