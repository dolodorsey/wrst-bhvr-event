"use client";
import { useState, useEffect, useRef } from "react";
const C={base:"#111216",surface:"#181B22",panel:"#1F2330",border:"rgba(244,241,232,0.07)",red:"#BB2C35",redGlow:"rgba(187,44,53,0.22)",steel:"#C8CDD3",blue:"#3B75A5",blueGlow:"rgba(59,117,165,0.2)",cream:"#F4F1E8",muted:"rgba(244,241,232,0.45)",dim:"rgba(244,241,232,0.22)"};
const F={display:"'Oswald','Bebas Neue',Impact,sans-serif",sans:"'DM Sans',system-ui,sans-serif",mono:"'DM Mono',monospace"};
const TICKETS=[{date:"May 30, 2026",url:"https://www.eventbrite.com/e/napkin-wars-tickets-1983443338418",event:"Napkin Wars",city:"Atlanta"},{date:"Jul 25, 2026",url:"https://www.eventbrite.com/e/napkin-wars-tickets-1983443502910",event:"Napkin Wars",city:"Atlanta"},{date:"Sep 26, 2026",url:"https://www.eventbrite.com/e/napkin-wars-tickets-1983447530958",event:"Napkin Wars",city:"Atlanta"}];
function useInView(t=0.1){const ref=useRef<HTMLDivElement>(null);const[v,setV]=useState(false);useEffect(()=>{const el=ref.current;if(!el)return;const o=new IntersectionObserver(([e])=>{if(e.isIntersecting)setV(true)},{threshold:t});o.observe(el);return()=>o.disconnect()},[t]);return[ref,v] as const}
function Reveal({children,d=0}:{children:React.ReactNode;d?:number}){const[ref,v]=useInView();return<div ref={ref} style={{transform:v?"translateY(0)":"translateY(40px)",opacity:v?1:0,transition:`all 1s cubic-bezier(0.16,1,0.3,1) ${d}s`}}>{children}</div>}
const Grain=()=><div style={{position:"absolute",inset:0,opacity:0.045,pointerEvents:"none",backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`}}/>;
function Nav(){const[sc,setSc]=useState(false);useEffect(()=>{const h=()=>setSc(window.scrollY>60);window.addEventListener("scroll",h,{passive:true});return()=>window.removeEventListener("scroll",h)},[]);return(<nav style={{position:"fixed",top:0,left:0,right:0,zIndex:200,padding:sc?"12px clamp(24px,4vw,60px)":"24px clamp(24px,4vw,60px)",display:"flex",justifyContent:"space-between",alignItems:"center",background:sc?`${C.base}F5`:"transparent",backdropFilter:sc?"blur(20px)":"none",borderBottom:sc?`1px solid ${C.border}`:"none",transition:"all 0.5s"}}><span style={{fontFamily:F.display,fontSize:"clamp(16px,2.5vw,22px)",fontWeight:700,letterSpacing:"0.2em",color:C.cream}}>WRST BHVR</span><div style={{display:"flex",gap:"24px",alignItems:"center"}}><a href="#tickets" style={{fontFamily:F.sans,fontSize:"10px",fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase",color:C.base,background:C.red,padding:"10px 24px",textDecoration:"none",display:"inline-block"}}>Get Tickets</a></div></nav>);}
function Hero(){const[ld,setLd]=useState(false);useEffect(()=>{setTimeout(()=>setLd(true),100)},[]);return(<section style={{position:"relative",width:"100%",height:"100vh",overflow:"hidden",background:C.base,display:"flex",alignItems:"flex-end"}}><div style={{position:"absolute",inset:0}}><div style={{position:"absolute",inset:0,background:`radial-gradient(ellipse at 50% 80%, ${C.redGlow} 0%, ${C.blueGlow} 40%, transparent 65%)`}}/><div style={{position:"absolute",inset:0,backgroundImage:"repeating-linear-gradient(0deg,transparent,transparent 79px,rgba(244,241,232,0.02) 79px,rgba(244,241,232,0.02) 80px),repeating-linear-gradient(90deg,transparent,transparent 79px,rgba(244,241,232,0.015) 79px,rgba(244,241,232,0.015) 80px)"}}/><Grain/></div><div style={{position:"absolute",inset:0,background:"linear-gradient(to top, rgba(17,18,22,0.97) 0%, rgba(17,18,22,0.45) 50%, transparent 100%)"}}/>
<div style={{position:"absolute",top:"5%",left:"-2%",fontFamily:F.display,fontSize:"clamp(100px,18vw,260px)",fontWeight:700,letterSpacing:"0.08em",lineHeight:1,color:"rgba(244,241,232,0.018)",pointerEvents:"none",whiteSpace:"nowrap"}}>WRST BHVR</div>
<div style={{position:"relative",zIndex:2,width:"100%",padding:"0 clamp(32px,5vw,80px) clamp(60px,7vh,96px)",maxWidth:"1400px",margin:"0 auto"}}>
<div style={{opacity:ld?1:0,transition:"opacity 0.8s ease 0.3s",fontFamily:F.mono,fontSize:"9px",letterSpacing:"0.5em",textTransform:"uppercase",color:C.red,marginBottom:"20px"}}>Atlanta & DC · A KHG HugLife Event · 2026</div>
<div style={{overflow:"hidden",marginBottom:"4px"}}><h1 style={{fontFamily:F.display,fontSize:"clamp(64px,13vw,190px)",fontWeight:700,lineHeight:0.82,letterSpacing:"0.06em",color:C.cream,margin:0,opacity:ld?1:0,transform:ld?"translateY(0)":"translateY(100%)",transition:"all 1.2s cubic-bezier(0.16,1,0.3,1) 0.4s"}}>WRST</h1></div>
<div style={{overflow:"hidden",marginBottom:"32px"}}><h1 style={{fontFamily:F.display,fontSize:"clamp(64px,13vw,190px)",fontWeight:700,lineHeight:0.82,letterSpacing:"0.06em",color:C.red,margin:0,opacity:ld?1:0,transform:ld?"translateY(0)":"translateY(100%)",transition:"all 1.2s cubic-bezier(0.16,1,0.3,1) 0.6s"}}>BHVR</h1></div>
<p style={{fontFamily:F.sans,fontSize:"clamp(14px,1.2vw,17px)",lineHeight:1.85,color:C.muted,maxWidth:"460px",marginBottom:"40px",opacity:ld?1:0,transition:"opacity 1s ease 1.0s"}}>The party for people who don&apos;t follow rules. High energy, no sections, no dress code hierarchy — just the best behavior in the worst way. Featuring Napkin Wars and more activations all year.</p>
<div style={{display:"flex",gap:"14px",flexWrap:"wrap",opacity:ld?1:0,transition:"opacity 1s ease 1.3s"}}><a href="#tickets" style={{fontFamily:F.sans,fontSize:"10px",fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:C.cream,background:C.red,padding:"15px 48px",textDecoration:"none",display:"inline-block"}}>Get Tickets</a><a href="mailto:thekollectiveworldwide@gmail.com?subject=WRST BHVR Group Inquiry" style={{fontFamily:F.sans,fontSize:"10px",fontWeight:500,letterSpacing:"0.14em",textTransform:"uppercase",color:C.cream,background:"transparent",border:`1px solid ${C.border}`,padding:"15px 36px",textDecoration:"none",display:"inline-block"}}>Group Entry</a></div>
</div></section>);}
function Tickets(){const[sel,setSel]=useState(0);return(<section id="tickets" style={{background:C.surface,padding:"100px clamp(32px,5vw,80px)",position:"relative",overflow:"hidden"}}><div style={{position:"absolute",inset:0,background:`radial-gradient(ellipse at 50% 50%, ${C.redGlow} 0%, transparent 55%)`}}/><Grain/><div style={{maxWidth:"1100px",margin:"0 auto",position:"relative",zIndex:1}}>
<Reveal><div style={{fontFamily:F.mono,fontSize:"9px",letterSpacing:"0.5em",textTransform:"uppercase",color:C.red,marginBottom:"16px"}}>Napkin Wars 2026</div>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:"24px",marginBottom:"48px"}}><h2 style={{fontFamily:F.display,fontSize:"clamp(36px,6vw,88px)",fontWeight:700,letterSpacing:"0.04em",color:C.cream,lineHeight:0.9}}>GET IN THE ROOM</h2><p style={{fontFamily:F.sans,fontSize:"14px",color:C.muted,maxWidth:"280px",lineHeight:1.75}}>Three Napkin Wars sessions. All Atlanta. All 2026.</p></div></Reveal>
<div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"2px",background:`${C.red}20`,marginBottom:"3px"}}>
{TICKETS.map((t,i)=><Reveal key={t.date} d={i*0.07}><div onClick={()=>setSel(i)} style={{background:sel===i?C.panel:C.base,padding:"36px 28px",cursor:"pointer",borderTop:`2px solid ${sel===i?C.red:"transparent"}`,transition:"all 0.3s"}}>
<div style={{display:"flex",alignItems:"center",gap:"6px",marginBottom:"12px"}}><div style={{width:"6px",height:"6px",borderRadius:"50%",background:"#4ADE80",animation:"pulse 2s infinite"}}/><span style={{fontFamily:F.mono,fontSize:"8px",letterSpacing:"0.25em",color:"#4ADE80",textTransform:"uppercase"}}>On Sale</span></div>
<div style={{fontFamily:F.display,fontSize:"clamp(16px,2vw,24px)",fontWeight:600,letterSpacing:"0.04em",color:C.cream,marginBottom:"4px"}}>{t.event.toUpperCase()}</div>
<div style={{fontFamily:F.sans,fontSize:"13px",color:C.red,marginBottom:"4px"}}>{t.date}</div>
<div style={{fontFamily:F.sans,fontSize:"11px",color:C.muted,marginBottom:"20px"}}>{t.city}, GA</div>
<a href={t.url} target="_blank" rel="noopener noreferrer" onClick={e=>e.stopPropagation()} style={{fontFamily:F.sans,fontSize:"10px",fontWeight:700,letterSpacing:"0.15em",textTransform:"uppercase",color:sel===i?C.cream:C.cream,background:sel===i?C.red:"transparent",border:sel===i?"none":`1px solid ${C.border}`,padding:"13px 24px",textDecoration:"none",display:"inline-block",transition:"all 0.3s"}}>Buy Tickets →</a>
</div></Reveal>)}
</div>
<Reveal d={0.2}><div style={{background:C.base,padding:"32px 36px",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"24px",borderLeft:`2px solid ${C.red}40`}}>
<div><div style={{fontFamily:F.mono,fontSize:"8px",letterSpacing:"0.4em",textTransform:"uppercase",color:C.steel,marginBottom:"8px"}}>Groups & Sponsorships</div><div style={{fontFamily:F.display,fontSize:"clamp(16px,2vw,22px)",fontWeight:500,letterSpacing:"0.04em",color:C.cream}}>Bring your squad. Own the room.</div></div>
<div style={{display:"flex",gap:"12px",flexWrap:"wrap"}}><a href="mailto:thekollectiveworldwide@gmail.com?subject=WRST BHVR Group Tickets" style={{fontFamily:F.sans,fontSize:"10px",fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase",color:C.cream,background:C.red,padding:"12px 28px",textDecoration:"none",display:"inline-block"}}>Group Entry</a><a href="mailto:thekollectiveworldwide@gmail.com?subject=WRST BHVR Sponsorship" style={{fontFamily:F.sans,fontSize:"10px",fontWeight:500,letterSpacing:"0.12em",textTransform:"uppercase",color:C.cream,background:"transparent",border:`1px solid ${C.border}`,padding:"12px 24px",textDecoration:"none",display:"inline-block"}}>Sponsor</a></div></div></Reveal>
<div style={{marginTop:"28px",display:"flex",gap:"32px",justifyContent:"center",flexWrap:"wrap"}}>{["Powered by Eventbrite","Secure Checkout","18+ Event","High Energy Event"].map(s=><div key={s} style={{fontFamily:F.mono,fontSize:"9px",color:"rgba(255,255,255,0.18)",letterSpacing:"0.2em"}}>{s}</div>)}</div>
</div><style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.3}}`}</style></section>);}

function FAQ(){
  const[open,setOpen]=useState<number|null>(null);
  const items=[
    {q:"What is WRST BHVR?",a:"WRST BHVR is Atlanta and DC's most talked-about nightlife brand — unapologetic energy, elite crowds, and sounds that hit different."},
    {q:"What is Napkin Wars?",a:"Napkin Wars is a sister event under the WRST BHVR umbrella — same energy, same standard, different chapter."},
    {q:"Do I need a ticket?",a:"Yes. Entry is ticket-only. Grab yours via Eventbrite before they're gone."},
    {q:"What is the dress code?",a:"Dress to impress. No athletic wear, no exceptions. We maintain the standard so the room stays elite."},
    {q:"Is there VIP access?",a:"Yes. VIP tables and bottle service are available. Email thekollectiveworldwide@gmail.com for bottle packages."},
    {q:"Which cities does WRST BHVR operate in?",a:"Currently Atlanta and Washington DC. More cities coming in 2026."}
  ];
  return(
<section id="faq" style={{background:C.base,padding:"80px clamp(32px,5vw,80px)",position:"relative",overflow:"hidden"}}>
<Grain/>
<div style={{maxWidth:"900px",margin:"0 auto",position:"relative",zIndex:1}}>
<Reveal>
<div style={{fontFamily:F.sans,fontSize:"9px",letterSpacing:"0.5em",textTransform:"uppercase",color:C.red,marginBottom:"16px"}}>Frequently Asked</div>
<h2 style={{fontFamily:F.sans,fontSize:"clamp(32px,5vw,64px)",fontWeight:400,fontStyle:"italic",color:C.cream,marginBottom:"48px",lineHeight:0.95}}>Common Questions</h2>
</Reveal>
<div style={{display:"flex",flexDirection:"column",gap:"2px",background:`${C.red}20`}}>
{items.map((item,i)=>(
<Reveal key={i} d={i*0.05}>
<div onClick={()=>setOpen(open===i?null:i)}
style={{background:open===i?C.panel:C.surface,padding:"24px 28px",cursor:"pointer",
borderLeft:`3px solid ${open===i?C.red:"transparent"}`,transition:"all 0.3s"}}
onMouseEnter={e=>{if(open!==i)(e.currentTarget as HTMLDivElement).style.background=`${C.red}08`}}
onMouseLeave={e=>{if(open!==i)(e.currentTarget as HTMLDivElement).style.background=C.surface}}
>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"16px"}}>
<div style={{fontFamily:F.sans,fontSize:"clamp(14px,1.5vw,18px)",fontStyle:"italic",color:C.cream,lineHeight:1.3}}>{item.q}</div>
<div style={{color:C.red,fontSize:"20px",flexShrink:0,transition:"transform 0.3s",transform:open===i?"rotate(45deg)":"rotate(0deg)"}}>+</div>
</div>
{open===i&&<div style={{fontFamily:F.sans,fontSize:"14px",color:C.muted,lineHeight:1.75,marginTop:"12px",paddingRight:"32px"}}>{item.a}</div>}
</div>
</Reveal>
))}</div>
</div>
</section>
);}

function Footer(){return(<footer style={{background:"#0D0E12",borderTop:`1px solid ${C.border}`,padding:"48px clamp(32px,5vw,80px) 32px"}}><div style={{maxWidth:"1400px",margin:"0 auto",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"24px"}}><div><div style={{fontFamily:F.display,fontSize:"22px",fontWeight:700,letterSpacing:"0.12em",color:C.cream,marginBottom:"4px"}}>WRST BHVR</div><div style={{fontFamily:F.mono,fontSize:"9px",letterSpacing:"0.3em",color:C.red}}>A KHG HUGLIFE EVENT</div></div><div style={{fontFamily:F.mono,fontSize:"10px",color:"rgba(255,255,255,0.18)"}}>© 2026 WRST BHVR. A KHG Enterprise.</div></div></footer>);}
export default function WRSTBHVRSite(){return(<div style={{background:C.base}}><Nav/><Hero/><Tickets/><FAQ/><Footer/></div>);}
