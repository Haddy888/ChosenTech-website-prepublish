"use client";

import { useEffect, useRef, useState } from "react";

const scenes=[
 {id:"network",eyebrow:"01 / CONNECT",title:"Everything starts with the network.",text:"We design, deploy and manage the infrastructure that connects your people, locations, applications and data.",accent:"NETWORK ENGINEERING"},
 {id:"security",eyebrow:"02 / PROTECT",title:"Security moves with the threat.",text:"Security is not a single product. It is a continuously monitored system of people, endpoints, networks and controls.",accent:"CYBERSECURITY"},
 {id:"cloud",eyebrow:"03 / SCALE",title:"Infrastructure built to move.",text:"Modern cloud and Microsoft environments that can scale with your organization without losing visibility or control.",accent:"CLOUD SOLUTIONS"},
 {id:"projects",eyebrow:"04 / DELIVER",title:"When the project matters, bring the right people.",text:"Qualified engineers and field technicians for deployments, migrations, network upgrades and technical projects.",accent:"PROJECTS & FIELD SERVICES"}
];

function NetworkCanvas({scene}){
 const [pointer,setPointer]=useState({x:50,y:50});
 useEffect(()=>{const move=e=>setPointer({x:e.clientX/window.innerWidth*100,y:e.clientY/window.innerHeight*100});window.addEventListener("mousemove",move,{passive:true});return()=>window.removeEventListener("mousemove",move)},[]);
 const cls=scene==="security"?"security":scene==="cloud"?"cloud":scene==="projects"?"projects-scene":"network-scene";
 return <div className={"network "+cls} style={{"--mx":pointer.x+"%","--my":pointer.y+"%"}}>
  <div className="network-glow"/><div className="grid"/><div className="scanline"/>
  {Array.from({length:90}).map((_,i)=><span key={i} className="particle" style={{left:(i*37)%100+"%",top:(i*61)%100+"%",animationDelay:"-"+(i%12)*.55+"s"}}/>)}
  <svg className="connections" viewBox="0 0 100 100" preserveAspectRatio="none">
   {[18,30,43,57,70,82].map((x,i)=><line key={i} x1="50" y1="50" x2={x} y2={18+(i*13)%68}/>)}
   <path d="M3 79 C21 57 35 91 51 71 S78 55 98 20"/><path d="M2 28 C24 13 39 35 55 18 S79 8 99 42"/><circle cx="50" cy="50" r="18"/>
  </svg>
  <div className="core"><span className="core-mark">C</span><small>{scene==="security"?"SECURE":scene==="cloud"?"SCALE":scene==="projects"?"DELIVER":"CONNECT"}</small></div>
  {scenes.map((n,i)=>{const p=[[19,30],[69,18],[82,39],[20,52],[75,61],[25,76],[70,79]][i];return <div className={"node node-"+(i+1)} key={n.accent} style={{left:p[0]+"%",top:p[1]+"%"}}><div className="node-dot">{String(i+1).padStart(2,"0")}</div><strong>{n.accent}</strong></div>})}
  <div className="cursor-orb"/>
 </div>
}

function Intro({enter}){
 return <section className="intro">
  <div className="intro-brand brand"><img className="brand-image" src="/chosen-logo-mark.svg" alt="Chosen Technology"/><div><b>CHOSEN</b><em>TECHNOLOGY</em></div></div>
  <button className="skip ghost" onClick={enter}>SKIP INTRO</button><NetworkCanvas scene="network"/>
  <div className="intro-copy"><div className="eyebrow">CHOSEN TECHNOLOGY</div><h1>Technology That<br/><span>Moves</span> With Your Business.</h1><p>Managed IT. Network Engineering. Cybersecurity. Cloud.<br/>Technology infrastructure designed to keep your business moving.</p><div className="actions"><button className="primary" onClick={enter}>ENTER CHOSEN TECHNOLOGY <i>→</i></button><button className="ghost">VIEW OUR SOLUTIONS</button></div></div>
  <div className="intro-hint">◉ MOVE YOUR CURSOR TO EXPLORE <span>SCROLL TO BEGIN ↓</span></div>
 </section>
}

function CinematicExperience({onCorporate}){
 const [active,setActive]=useState(0), refs=useRef([]);
 useEffect(()=>{const obs=refs.current.map((el,i)=>{if(!el)return null;const o=new IntersectionObserver(e=>{if(e[0].isIntersecting)setActive(i)},{threshold:.55});o.observe(el);return o});return()=>obs.forEach(o=>o?.disconnect())},[]);
 return <div className="cinematic"><div className="sticky-canvas"><NetworkCanvas scene={scenes[active].id}/><div className="scene-label">{scenes[active].eyebrow}<b>{scenes[active].accent}</b></div></div><div className="scene-scroll">{scenes.map((s,i)=><section ref={el=>refs.current[i]=el} className="scene" key={s.id}><div className="scene-card"><div className="eyebrow">{s.eyebrow}</div><h2>{s.title}</h2><p>{s.text}</p><button className="link">EXPLORE {s.accent} →</button></div></section>)}</div><div className="continue"><button onClick={onCorporate}>ENTER CORPORATE SITE →</button></div></div>
}

function Corporate(){
 return <main className="corporate"><header className="header"><div className="brand"><img className="brand-image" src="/chosen-logo-mark.svg" alt="Chosen Technology"/><div><b>CHOSEN</b><em>TECHNOLOGY</em></div></div><nav>{["Services","Network Engineering","Cybersecurity","Cloud","Projects","Industries","About","Resources"].map(x=><a key={x}>{x}</a>)}</nav><button className="primary small">REQUEST IT ASSESSMENT</button></header>
 <section className="hero"><div className="hero-bg"/><div className="hero-copy"><div className="eyebrow">MANAGED IT • ENGINEERING • SECURITY</div><h2>Reliable Technology Infrastructure.<br/><span>Built for Business.</span></h2><p>Chosen Technology provides managed IT services, network engineering, cybersecurity, cloud management and project-based technology resources for businesses that depend on their infrastructure.</p><div className="actions"><button className="primary">REQUEST AN IT ASSESSMENT →</button><button className="ghost light">TALK TO AN ENGINEER →</button></div><div className="trust"><span>◈ Proactive Support</span><span>◷ 24/7 Monitoring</span><span>◇ Security Focused</span><span>⌖ Major Metro Coverage</span></div></div></section>
 <section className="capabilities">{["Managed IT Services","Network Engineering","Cybersecurity","Cloud Solutions","Project & Field Services"].map((x,i)=><article key={x}><div className="icon">{["▣","⌘","◇","☁","⚒"][i]}</div><b>{x}</b><small>Explore capability →</small></article>)}</section>
 <section className="projects"><div className="section-label">PROJECTS & FIELD SERVICES</div><h3>Technology Projects.<br/><span>On Demand.</span></h3><p>Qualified technology professionals for deployments, migrations, infrastructure upgrades, field services and ongoing technical operations.</p><button className="link">REQUEST PROJECT RESOURCES →</button><div className="project-grid">{[["NETWORK ENGINEERS","CCNA / CCNP","Network Design","Routing & Switching","Wireless"],["SYSTEMS ENGINEERS","Servers & Infrastructure","Virtualization","Microsoft 365","Storage"],["FIELD TECHNICIANS","Deployments","Installations","Break/Fix","On-Site Support"],["CYBERSECURITY","Security Assessments","Endpoint Security","Vulnerability Mgmt.","Compliance"]].map(c=><article key={c[0]}><div className="icon">◇</div><b>{c[0]}</b>{c.slice(1).map(t=><small key={t}>{t}</small>)}</article>)}</div></section>
 <section className="stats"><div><div className="section-label">WHY CHOSEN TECHNOLOGY</div><h3>Your Business.<br/>Our Priority.</h3></div><p>We deliver proactive IT solutions and engineering expertise that keep your business secure, efficient, and ahead of what's next.</p>{["24/7","10+","100+","99.9%"].map((x,i)=><div className="stat" key={x}><strong>{x}</strong><small>{["Monitoring & Support","Metro Areas Covered","Businesses Supported","Uptime Focus"][i]}</small></div>)}</section>
 <section className="solutions"><div className="section-label">OUR SOLUTIONS</div><h3>Comprehensive IT Solutions</h3><div className="solution-grid">{["Managed IT Services","Cybersecurity","Cloud Solutions","Backup & Recovery","IT Consulting"].map(x=><article key={x}><div className="icon">◇</div><b>{x}</b><p>Proactive technology services designed to protect, support and grow your business.</p><a>LEARN MORE →</a></article>)}</div></section>
 <footer><div className="brand"><img className="brand-image" src="/chosen-logo-mark.svg" alt="Chosen Technology"/><div><b>CHOSEN</b><em>TECHNOLOGY</em></div></div><p>Proactive IT Solutions. Secure Business Growth.</p><span>Minneapolis, MN • 612.300.6026 • support@chosentech.us</span></footer>
 </main>
}

export default function Page(){const [mode,setMode]=useState("intro");if(mode==="intro")return <Intro enter={()=>setMode("experience")}/>;if(mode==="experience")return <CinematicExperience onCorporate={()=>setMode("corporate")}/>;return <Corporate/>}
