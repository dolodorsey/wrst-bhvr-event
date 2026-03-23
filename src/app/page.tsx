"use client";
import { useState, useEffect, useRef } from "react";

/* ═══════════════════════════════════════════════════════════════
   WRST BHVR — SYSTEM // ERROR // BHVR.EXE
   Napkin Wars Edition · Atlanta & DC · 2026
   Design: Glitch Nightlife × Crime Scene Editorial × Dark Luxury
   ═══════════════════════════════════════════════════════════════ */

const C = {
  void: "#08090C",
  base: "#111216",
  surface: "#161820",
  panel: "#1C1F2A",
  border: "rgba(244,241,232,0.06)",
  red: "#BB2C35",
  redBright: "#D93240",
  redGlow: "rgba(187,44,53,0.25)",
  redDeep: "rgba(187,44,53,0.08)",
  steel: "#C8CDD3",
  blue: "#3B75A5",
  blueGlow: "rgba(59,117,165,0.15)",
  cream: "#F4F1E8",
  muted: "rgba(244,241,232,0.42)",
  dim: "rgba(244,241,232,0.18)",
};
const F = {
  display: "'Oswald','Bebas Neue',Impact,sans-serif",
  sans: "'DM Sans',system-ui,sans-serif",
  mono: "'DM Mono','Fira Code',monospace",
};

const TICKETS = [
  { date:"May 30, 2026", day:"FRIDAY", url:"https://huglife.vercel.app/tickets", event:"NAPKIN WARS", city:"Atlanta", edition:"VOL. I" },
  { date:"Jul 25, 2026", day:"SATURDAY", url:"https://huglife.vercel.app/tickets", event:"NAPKIN WARS", city:"Atlanta", edition:"VOL. II" },
  { date:"Sep 26, 2026", day:"SATURDAY", url:"https://huglife.vercel.app/tickets", event:"NAPKIN WARS", city:"Atlanta", edition:"VOL. III" },
];
const FLYERS = [
  { src:"/images/flyer-main.jpg", label:"NAPKIN WARS — MAIN" },
  { src:"/images/flyer-vip.jpg", label:"VIP ACCESS" },
  { src:"/images/flyer-dark.jpg", label:"DARK EDITION" },
  { src:"/images/flyer-sparklers.jpg", label:"SPARKLERS" },
];

/* ── HOOKS ── */
function useInView(t=0.12){const ref=useRef<HTMLDivElement>(null

      {/* VENUE */}
      <div style={{padding:"48px 24px", textAlign:"center", borderTop:"1px solid rgba(255,255,255,0.07)"}}>
        <p style={{fontSize:"10px", letterSpacing:"4px", color:"#C9A84C", textTransform:"uppercase", marginBottom:"12px", fontFamily:"'DM Sans',system-ui,sans-serif"}}>Location</p>
        <h3 style={{fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:"clamp(22px,4vw,38px)", fontWeight:300, color:"#fff", marginBottom:"8px"}}>
          The Gallery Complex
        </h3>
        <p style={{color:"#666", fontSize:"13px", letterSpacing:"1px", marginBottom:"20px", fontFamily:"'DM Sans',system-ui,sans-serif"}}>
          245 Ted Turner Drive SW, Atlanta, GA 30303
        </p>
        <a href="https://maps.google.com/?q=245+Ted+Turner+Drive+SW+Atlanta+GA+30303" target="_blank" rel="noopener noreferrer"
          style={{display:"inline-block", padding:"11px 26px", border:"1px solid rgba(201,168,76,0.35)", color:"#C9A84C", fontSize:"11px", letterSpacing:"3px", textTransform:"uppercase", textDecoration:"none", fontFamily:"'DM Sans',system-ui,sans-serif"}}>
          Get Directions →
        </a>
      </div>
);const[v,setV]=useState(false);useEffect(()=>{const el=ref.current;if(!el)return;const o=new IntersectionObserver(([e])=>{if(e.isIntersecting)setV(true)},{threshold:t});o.observe(el);return()=>o.disconnect()},[t]);return[ref,v] as const}
function useScrollY(){const[y,setY]=useState(0);useEffect(()=>{const h=()=>setY(window.scrollY);window.addEventListener("scroll",h,{passive:true});return()=>window.removeEventListener("scroll",h)},[]);return y}
function useMouse(){const[p,setP]=useState({x:0.5,y:0.5});useEffect(()=>{const h=(e:MouseEvent)=>setP({x:e.clientX/window.innerWidth,y:e.clientY/window.innerHeight});window.addEventListener("mousemove",h,{passive:true});return()=>window.removeEventListener("mousemove",h)},[]);return p}

/* ── PRIMITIVES ── */
function Reveal({children,d=0,y=50}:{children:React.ReactNode;d?:number;y?:number}){const[ref,v]=useInView();return<div ref={ref} style={{transform:v?"translateY(0) scale(1)":`translateY(${y}px) scale(0.98)`,opacity:v?1:0,transition:`all 1.1s cubic-bezier(0.16,1,0.3,1) ${d}s`}}>{children}</div>}
function RevealX({children,d=0,x=-60}:{children:React.ReactNode;d?:number;x?:number}){const[ref,v]=useInView();return<div ref={ref} style={{transform:v?"translateX(0)":`translateX(${x}px)`,opacity:v?1:0,transition:`all 1.2s cubic-bezier(0.16,1,0.3,1) ${d}s`}}>{children}</div>}

const Grain=()=><div style={{position:"absolute",inset:0,opacity:0.04,pointerEvents:"none",zIndex:5,backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`}}/>;
const ScanLine=()=><div style={{position:"absolute",inset:0,pointerEvents:"none",zIndex:6,opacity:0.03,backgroundImage:"repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(255,255,255,0.03) 2px,rgba(255,255,255,0.03) 4px)"}}/>;
const GridBG=()=><div style={{position:"absolute",inset:0,pointerEvents:"none",zIndex:3,opacity:0.015,backgroundImage:"repeating-linear-gradient(0deg,transparent,transparent 79px,rgba(244,241,232,0.04) 79px,rgba(244,241,232,0.04) 80px),repeating-linear-gradient(90deg,transparent,transparent 79px,rgba(244,241,232,0.03) 79px,rgba(244,241,232,0.03) 80px)"}}/>;
function Tag({text,color=C.red}:{text:string;color?:string}){return<span style={{fontFamily:F.mono,fontSize:"9px",letterSpacing:"0.4em",textTransform:"uppercase",color,display:"inline-block"}}>{text}</span>}

function GlitchText({text,size,color=C.cream,weight=700}:{text:string;size:string;color?:string;weight?:number}){
  return<div style={{position:"relative",display:"inline-block"}}>
    <span style={{fontFamily:F.display,fontSize:size,fontWeight:weight,letterSpacing:"0.06em",lineHeight:0.85,color,display:"block"}}>{text}</span>
    <span aria-hidden="true" style={{position:"absolute",top:0,left:"2px",fontFamily:F.display,fontSize:size,fontWeight:weight,letterSpacing:"0.06em",lineHeight:0.85,color:C.red,clipPath:"polygon(0 0,100% 0,100% 45%,0 45%)",opacity:0.7,display:"block"}}>{text}</span>
    <span aria-hidden="true" style={{position:"absolute",top:0,left:"-2px",fontFamily:F.display,fontSize:size,fontWeight:weight,letterSpacing:"0.06em",lineHeight:0.85,color:C.blue,clipPath:"polygon(0 55%,100% 55%,100% 100%,0 100%)",opacity:0.5,display:"block"}}>{text}</span>
  </div>
}

/* ── NAV ── */
function Nav(){
  const sy=useScrollY();const sc=sy>80;
  return<>
    <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:999,padding:sc?"10px clamp(24px,4vw,60px)":"20px clamp(24px,4vw,60px)",display:"flex",justifyContent:"space-between",alignItems:"center",background:sc?`${C.void}F0`:"transparent",backdropFilter:sc?"blur(24px) saturate(1.4)":"none",borderBottom:sc?`1px solid ${C.border}`:"1px solid transparent",transition:"all 0.6s cubic-bezier(0.16,1,0.3,1)"}}>
      <div style={{display:"flex",flexDirection:"column"}}>
        <span style={{fontFamily:F.display,fontSize:sc?"16px":"18px",fontWeight:700,letterSpacing:"0.18em",color:C.cream,transition:"all 0.4s"}}>WRST BHVR</span>
        <span style={{fontFamily:F.mono,fontSize:"7px",letterSpacing:"0.3em",color:C.red,marginTop:"-2px"}}>SYSTEM // ERROR</span>
      </div>
      <div className="nl" style={{display:"flex",gap:"8px",alignItems:"center"}}>
        <a href="#evidence" style={{fontFamily:F.mono,fontSize:"9px",fontWeight:500,letterSpacing:"0.15em",textTransform:"uppercase",color:C.muted,textDecoration:"none",padding:"8px 16px"}}>Evidence</a>
        <a href="#tickets" style={{fontFamily:F.sans,fontSize:"10px",fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase",color:C.void,background:C.red,padding:"10px 28px",textDecoration:"none",display:"inline-block"}}>Tickets</a>
      </div>
    </nav>
    <style>{`
      @keyframes scanDown{0%{top:-10%}100%{top:110%}}
      @keyframes pulse{0%,100%{opacity:1}50%{opacity:0.3}}
      @keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}
      @keyframes flicker{0%,19.9%,22%,62.9%,64%,64.9%,70%,100%{opacity:1}20%,21.9%,63%,63.9%,65%,69.9%{opacity:0.33}}
      *{margin:0;padding:0;box-sizing:border-box}
      html{scroll-behavior:smooth}
      body{background:${C.void};overflow-x:hidden}
      ::selection{background:${C.red};color:${C.cream}}
      ::-webkit-scrollbar{width:4px}
      ::-webkit-scrollbar-track{background:${C.void}}
      ::-webkit-scrollbar-thumb{background:${C.red}40}
      img{user-select:none;-webkit-user-drag:none}
    `}
@media(max-width:768px){
  .dg,.DG,[style*="gridTemplateColumns"]{grid-template-columns:1fr!important}
  .nl,.desktop-nav{display:none!important}
  .fg,.stat-grid,.feature-grid{grid-template-columns:1fr!important}
  .eg{grid-template-columns:1fr!important}
  h1,h2,.hero-title{word-break:break-word}
  nav{padding:16px!important}
  section{padding-left:16px!important;padding-right:16px!important}
}
</style>
  </>
}

/* ── HERO ── */
function Hero(){
  const[ld,setLd]=useState(false);const m=useMouse();const sy=useScrollY();
  useEffect(()=>{setTimeout(()=>setLd(true),200)},[]);
  const pY=Math.min(sy*0.35,200);const hOp=Math.max(1-sy/700,0);
  return<section style={{position:"relative",width:"100%",height:"100vh",minHeight:"700px",overflow:"hidden",background:C.void}}>
    {/* BG image + parallax */}
    <div style={{position:"absolute",inset:"-10%",transform:`translate(${(m.x-0.5)*-20}px,${(m.y-0.5)*-12-pY}px) scale(1.15)`,transition:"transform 0.8s cubic-bezier(0.16,1,0.3,1)"}}>
      <img src="/images/hero-bg.jpg" alt="" style={{width:"100%",height:"100%",objectFit:"cover",filter:"brightness(0.35) contrast(1.15) saturate(0.8)"}}/>
    </div>
    {/* Atmospheric glows */}
    <div style={{position:"absolute",inset:0,background:`radial-gradient(ellipse at ${40+m.x*20}% ${60+m.y*20}%,${C.redGlow} 0%,transparent 50%),radial-gradient(ellipse at 70% 30%,${C.blueGlow} 0%,transparent 40%)`,transition:"background 1.5s"}}/>
    <div style={{position:"absolute",inset:0,background:`linear-gradient(to top,${C.void} 0%,${C.void}CC 15%,transparent 50%,${C.void}80 100%)`}}/>
    {/* Scan line */}
    <div style={{position:"absolute",inset:0,pointerEvents:"none",zIndex:10,overflow:"hidden"}}>
      <div style={{position:"absolute",left:0,right:0,height:"2px",background:`linear-gradient(90deg,transparent,${C.red}30,${C.red}60,${C.red}30,transparent)`,animation:"scanDown 4s linear infinite",boxShadow:`0 0 30px 10px ${C.redGlow}`}}/>
    </div>
    <GridBG/><Grain/><ScanLine/>
    {/* Ghost watermark */}
    <div style={{position:"absolute",top:"8%",left:"-3%",fontFamily:F.display,fontSize:"clamp(120px,22vw,320px)",fontWeight:700,letterSpacing:"0.08em",lineHeight:0.85,color:"rgba(244,241,232,0.015)",pointerEvents:"none",whiteSpace:"nowrap",transform:`translateY(${pY*0.3}px)`}}>WRST BHVR</div>
    {/* Content */}
    <div style={{position:"relative",zIndex:20,width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"flex-end",padding:"0 clamp(32px,6vw,100px) clamp(60px,8vh,120px)",maxWidth:"1500px",margin:"0 auto",opacity:hOp}}>
      <div style={{opacity:ld?1:0,transition:"opacity 0.8s ease 0.3s",marginBottom:"20px",display:"flex",gap:"20px",alignItems:"center"}}>
        <Tag text="System // Error // BHVR.EXE"/><div style={{width:"40px",height:"1px",background:C.red}}/><Tag text="ATL + DC · 2026" color={C.muted}/>
      </div>
      <div style={{overflow:"hidden",marginBottom:"8px"}}><div style={{opacity:ld?1:0,transform:ld?"translateY(0)":"translateY(60px)",transition:"all 1.4s cubic-bezier(0.16,1,0.3,1) 0.5s"}}>
        <img src="/images/wrst-bhvr-logo.png" alt="WRST BHVR" style={{height:"clamp(140px,28vw,320px)",objectFit:"contain",filter:"drop-shadow(0 4px 48px rgba(187,44,53,0.5))"}}/>
      </div></div>
      <div style={{opacity:ld?1:0,transition:"opacity 1s ease 1.1s",marginBottom:"28px"}}><div style={{fontFamily:F.display,fontSize:"clamp(14px,2vw,26px)",fontWeight:400,letterSpacing:"0.25em",textTransform:"uppercase",color:C.steel}}>NAPKIN WARS EDITION</div></div>
      <p style={{fontFamily:F.sans,fontSize:"clamp(13px,1.1vw,16px)",lineHeight:1.9,color:C.muted,maxWidth:"440px",marginBottom:"36px",opacity:ld?1:0,transition:"opacity 1s ease 1.3s"}}>The aftermath of the best night you&apos;ll never fully remember. VIP tables. Bottle service. Evidence everywhere. Atlanta&apos;s most unapologetic nightlife experience.</p>
      <div style={{display:"flex",gap:"12px",flexWrap:"wrap",opacity:ld?1:0,transition:"opacity 1s ease 1.5s"}}>
        <a href="#tickets" style={{fontFamily:F.sans,fontSize:"10px",fontWeight:700,letterSpacing:"0.16em",textTransform:"uppercase",color:C.cream,background:C.red,padding:"16px 52px",textDecoration:"none",display:"inline-block"}}>Get Tickets</a>
        <a href="#evidence" style={{fontFamily:F.mono,fontSize:"10px",fontWeight:500,letterSpacing:"0.14em",textTransform:"uppercase",color:C.cream,background:"transparent",border:`1px solid ${C.border}`,padding:"16px 36px",textDecoration:"none",display:"inline-block"}}>View Evidence →</a>
      </div>
      <div style={{position:"absolute",bottom:"20px",left:"clamp(32px,6vw,100px)",right:"clamp(32px,6vw,100px)",display:"flex",justifyContent:"space-between",alignItems:"center",opacity:ld?0.3:0,transition:"opacity 1s ease 2s"}}>
        <span style={{fontFamily:F.mono,fontSize:"8px",letterSpacing:"0.3em",color:C.dim}}>WRST_BHVR_2026_ATL_V4.2</span>
        <span style={{fontFamily:F.mono,fontSize:"8px",letterSpacing:"0.3em",color:C.dim}}>SCROLL ↓</span>
      </div>
    </div>
  </section>
}

/* ── MARQUEE ── */
function Marquee(){
  const t="WRST BHVR ◆ NAPKIN WARS ◆ SYSTEM ERROR ◆ VIP ACCESS ◆ BOTTLE SERVICE ◆ ATLANTA ◆ DC ◆ EVIDENCE COLLECTION ◆ BHVR.EXE ◆ 404.819.9609 ◆ ";
  return<div style={{overflow:"hidden",background:C.red,padding:"12px 0",position:"relative",zIndex:50}}>
    <div style={{display:"flex",whiteSpace:"nowrap",animation:"marquee 25s linear infinite"}}>
      {[0,1,2].map(i=><span key={i} style={{fontFamily:F.display,fontSize:"12px",fontWeight:600,letterSpacing:"0.3em",color:C.cream}}>{t}{t}</span>)}
    </div>
  </div>
}

/* ── EVIDENCE GALLERY ── */
function EvidenceGallery(){
  return<section id="evidence" style={{background:C.void,position:"relative",overflow:"hidden",padding:"120px 0 80px"}}>
    <Grain/>
    <div style={{position:"absolute",inset:0,background:`radial-gradient(ellipse at 30% 50%,${C.redDeep} 0%,transparent 50%)`}}/>
    <div style={{maxWidth:"1400px",margin:"0 auto",padding:"0 clamp(32px,5vw,80px)",position:"relative",zIndex:10}}>
      <Reveal><div style={{marginBottom:"64px"}}>
        <div style={{display:"flex",alignItems:"center",gap:"16px",marginBottom:"16px"}}><Tag text="Evidence Collection"/><div style={{flex:1,height:"1px",background:C.border}}/><Tag text="Classified" color={C.dim}/></div>
        <h2 style={{fontFamily:F.display,fontSize:"clamp(40px,7vw,100px)",fontWeight:700,letterSpacing:"0.04em",lineHeight:0.9,color:C.cream}}>THE SCENE</h2>
        <p style={{fontFamily:F.sans,fontSize:"clamp(13px,1.1vw,16px)",color:C.muted,maxWidth:"380px",lineHeight:1.8,marginTop:"16px"}}>What happens at WRST BHVR stays at WRST BHVR. Except the evidence. The evidence always survives.</p>
      </div></Reveal>
      {/* Gallery grid */}
      <div className="dg" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"3px"}}>
        {[{src:"/images/scene-warehouse.jpg",label:"NPKN WARS // AFTERMATH",num:"01"},{src:"/images/scene-vip-table.jpg",label:"VIP // EVIDENCE COLLECTION",num:"02"}].map((img,i)=>
          <Reveal key={i} d={i*0.1}><div style={{position:"relative",overflow:"hidden",aspectRatio:"16/9",cursor:"crosshair",background:C.surface}}>
            <img src={img.src} alt={img.label} style={{width:"100%",height:"100%",objectFit:"cover",transition:"transform 0.8s cubic-bezier(0.16,1,0.3,1),filter 0.8s"}} onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.05)";e.currentTarget.style.filter="brightness(1.1)"}} onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";e.currentTarget.style.filter="brightness(1)"}}/>
            <div style={{position:"absolute",bottom:0,left:0,right:0,background:"linear-gradient(to top,rgba(8,9,12,0.9),transparent)",padding:"40px 24px 16px"}}><div style={{fontFamily:F.mono,fontSize:"8px",letterSpacing:"0.4em",color:C.red}}>{img.label}</div></div>
            <div style={{position:"absolute",top:"16px",right:"16px",background:C.red,padding:"4px 10px",fontFamily:F.mono,fontSize:"8px",letterSpacing:"0.2em",color:C.cream}}>{img.num}</div>
          </div></Reveal>
        )}
        {/* Full-width cinematic */}
        <Reveal d={0.3}><div style={{gridColumn:"1 / -1",position:"relative",overflow:"hidden",aspectRatio:"21/9",cursor:"crosshair",background:C.surface}}>
          <img src="/images/scene-club-hq.jpg" alt="Club scene" style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center center",transition:"transform 0.8s cubic-bezier(0.16,1,0.3,1),filter 0.8s"}} onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.03)";e.currentTarget.style.filter="brightness(1.1)"}} onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";e.currentTarget.style.filter="brightness(1)"}}/>
          <div style={{position:"absolute",inset:0,background:`linear-gradient(to right,${C.void}CC 0%,transparent 40%,transparent 60%,${C.void}CC 100%)`}}/>
          <div style={{position:"absolute",bottom:0,left:0,right:0,background:"linear-gradient(to top,rgba(8,9,12,0.95),transparent)",padding:"60px 32px 20px",display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:"16px"}}>
            <div><div style={{fontFamily:F.mono,fontSize:"8px",letterSpacing:"0.4em",color:C.red,marginBottom:"4px"}}>ICONOGRAPHY // RITUAL // STATUS</div><div style={{fontFamily:F.display,fontSize:"clamp(18px,3vw,36px)",fontWeight:700,letterSpacing:"0.08em",color:C.cream}}>WRST BHVR: NPKN WARS</div></div>
            <div style={{fontFamily:F.mono,fontSize:"8px",letterSpacing:"0.3em",color:C.dim}}>LOCATION // SECRETS · DATE // UNKNOWN · TIME // LATE</div>
          </div>
          <div style={{position:"absolute",top:"16px",right:"16px",background:C.red,padding:"4px 10px",fontFamily:F.mono,fontSize:"8px",letterSpacing:"0.2em",color:C.cream}}>03</div>
        </div></Reveal>
      </div>
    </div>
  </section>
}

/* ── FLYER SHOWCASE ── */
function FlyerShowcase(){
  const[active,setActive]=useState(0);
  return<section style={{background:C.base,position:"relative",overflow:"hidden",padding:"100px 0"}}>
    <Grain/><div style={{position:"absolute",inset:0,background:`radial-gradient(ellipse at 70% 50%,${C.redDeep} 0%,transparent 45%)`}}/>
    <div style={{maxWidth:"1400px",margin:"0 auto",padding:"0 clamp(32px,5vw,80px)",position:"relative",zIndex:10}}>
      <Reveal><div style={{display:"flex",alignItems:"center",gap:"16px",marginBottom:"16px"}}><Tag text="Promotional Material"/><div style={{flex:1,height:"1px",background:C.border}}/></div>
      <h2 style={{fontFamily:F.display,fontSize:"clamp(36px,6vw,80px)",fontWeight:700,letterSpacing:"0.04em",lineHeight:0.9,color:C.cream,marginBottom:"48px"}}>THE FLYERS</h2></Reveal>
      <div className="dg" style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"12px"}}>
        {FLYERS.map((f,i)=><Reveal key={i} d={i*0.1}><div onClick={()=>setActive(i)} style={{position:"relative",overflow:"hidden",aspectRatio:"2/3",cursor:"pointer",border:active===i?`1px solid ${C.red}`:`1px solid ${C.border}`,transition:"all 0.5s cubic-bezier(0.16,1,0.3,1)",transform:active===i?"scale(1.02)":"scale(1)"}}>
          <img src={f.src} alt={f.label} style={{width:"100%",height:"100%",objectFit:"cover",transition:"transform 0.6s cubic-bezier(0.16,1,0.3,1)"}} onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.06)"}} onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)"}}/>
          <div style={{position:"absolute",bottom:0,left:0,right:0,background:`linear-gradient(to top,${C.void}F0,transparent)`,padding:"32px 12px 12px"}}><div style={{fontFamily:F.mono,fontSize:"8px",letterSpacing:"0.3em",color:active===i?C.red:C.muted,transition:"color 0.3s"}}>{f.label}</div></div>
          {active===i&&<div style={{position:"absolute",top:0,left:0,right:0,height:"2px",background:C.red}}/>}
        </div></Reveal>)}
      </div>
      <Reveal d={0.4}><div style={{marginTop:"24px",display:"flex",justifyContent:"space-between",padding:"16px 0",borderTop:`1px solid ${C.border}`}}>
        <span style={{fontFamily:F.mono,fontSize:"8px",letterSpacing:"0.3em",color:C.dim}}>SATURDAY APRIL 25TH · ATLANTA, GA</span>
        <span style={{fontFamily:F.mono,fontSize:"8px",letterSpacing:"0.3em",color:C.dim}}>VIP TABLES · BOTTLE SERVICE · 404.819.9609</span>
      </div></Reveal>
    </div>
  </section>
}

/* ── BRAND STORY ── */
function BrandStory(){
  return<section style={{background:C.void,position:"relative",overflow:"hidden",padding:"120px 0"}}>
    <Grain/><GridBG/>
    <div className="dg" style={{maxWidth:"1400px",margin:"0 auto",padding:"0 clamp(32px,5vw,80px)",position:"relative",zIndex:10,display:"grid",gridTemplateColumns:"1fr 1fr",gap:"80px",alignItems:"center"}}>
      <RevealX><div style={{position:"relative",overflow:"hidden",aspectRatio:"4/5"}}>
        <img src="/images/scene-evidence.jpg" alt="Evidence" style={{width:"100%",height:"100%",objectFit:"cover",filter:"brightness(0.85) contrast(1.1)"}}/>
        <div style={{position:"absolute",inset:0,background:`linear-gradient(135deg,${C.void}60,transparent 50%,${C.red}15)`}}/>
        <div style={{position:"absolute",bottom:"24px",left:"24px",background:`${C.void}E0`,backdropFilter:"blur(12px)",padding:"12px 20px",border:`1px solid ${C.border}`}}>
          <div style={{fontFamily:F.mono,fontSize:"8px",letterSpacing:"0.3em",color:C.red,marginBottom:"4px"}}>EVIDENCE FILE #004</div>
          <div style={{fontFamily:F.sans,fontSize:"12px",color:C.cream}}>Napkin Wars Collection</div>
        </div>
      </div></RevealX>
      <div>
        <Reveal><Tag text="About // BHVR.EXE"/>
        <h2 style={{fontFamily:F.display,fontSize:"clamp(36px,5vw,72px)",fontWeight:700,letterSpacing:"0.04em",lineHeight:0.9,color:C.cream,margin:"20px 0 32px"}}>NOT YOUR<br/><span style={{color:C.red}}>AVERAGE</span><br/>NIGHT OUT</h2></Reveal>
        <Reveal d={0.15}><p style={{fontFamily:F.sans,fontSize:"clamp(13px,1.1vw,15px)",lineHeight:2,color:C.muted,marginBottom:"32px"}}>WRST BHVR is more than a party — it&apos;s a movement. Born from Atlanta&apos;s underground and now expanding to DC, we create the kind of nights that leave evidence behind. Crumpled napkins, empty bottles, and stories you&apos;ll tell for years.</p></Reveal>
        <Reveal d={0.25}><p style={{fontFamily:F.sans,fontSize:"clamp(13px,1.1vw,15px)",lineHeight:2,color:C.muted,marginBottom:"40px"}}>Napkin Wars is our signature experience — controlled chaos meets luxury nightlife. VIP tables piled high, bottles flowing, and napkins flying. It&apos;s the aftermath of a night done right.</p></Reveal>
        <Reveal d={0.35}><div style={{display:"flex",gap:"40px"}}>
          {[{n:"2",l:"CITIES"},{n:"3",l:"EVENTS"},{n:"1",l:"RULE: NONE"}].map((s,i)=><div key={i}><div style={{fontFamily:F.display,fontSize:"clamp(32px,4vw,56px)",fontWeight:700,color:C.red,lineHeight:1}}>{s.n}</div><div style={{fontFamily:F.mono,fontSize:"8px",letterSpacing:"0.3em",color:C.muted,marginTop:"4px"}}>{s.l}</div></div>)}
        </div></Reveal>
      </div>
    </div>
  </section>
}

/* ── TICKETS ── */
function Tickets(){
  const[hov,setHov]=useState<number|null>(null);
  return<section id="tickets" style={{background:C.surface,position:"relative",overflow:"hidden",padding:"120px 0 100px"}}>
    <div style={{position:"absolute",inset:0,background:`radial-gradient(ellipse at 50% 40%,${C.redGlow} 0%,transparent 50%)`}}/><Grain/><ScanLine/>
    <div style={{maxWidth:"1200px",margin:"0 auto",padding:"0 clamp(32px,5vw,80px)",position:"relative",zIndex:10}}>
      <Reveal><div style={{display:"flex",alignItems:"center",gap:"16px",marginBottom:"16px"}}><Tag text="Napkin Wars 2026"/><div style={{flex:1,height:"1px",background:C.border}}/><Tag text="Eventbrite Secured" color={C.dim}/></div>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:"24px",marginBottom:"56px"}}>
        <h2 style={{fontFamily:F.display,fontSize:"clamp(40px,7vw,100px)",fontWeight:700,letterSpacing:"0.04em",color:C.cream,lineHeight:0.9}}>GET IN<br/>THE ROOM</h2>
        <p style={{fontFamily:F.sans,fontSize:"14px",color:C.muted,maxWidth:"280px",lineHeight:1.8}}>Three dates. All Atlanta. Limited capacity. When they&apos;re gone, they&apos;re gone.</p>
      </div></Reveal>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"2px",background:`${C.red}15`}}>
        {TICKETS.map((t,i)=><Reveal key={i} d={i*0.08}><div onMouseEnter={()=>setHov(i)} onMouseLeave={()=>setHov(null)} style={{background:hov===i?C.panel:C.base,padding:"40px 28px",cursor:"pointer",borderTop:`2px solid ${hov===i?C.red:"transparent"}`,transition:"all 0.4s cubic-bezier(0.16,1,0.3,1)",position:"relative",overflow:"hidden"}}>
          {hov===i&&<div style={{position:"absolute",inset:0,background:`radial-gradient(ellipse at 50% 0%,${C.redDeep} 0%,transparent 60%)`,pointerEvents:"none"}}/>}
          <div style={{position:"relative",zIndex:2}}>
            <div style={{fontFamily:F.mono,fontSize:"10px",letterSpacing:"0.4em",color:C.red,marginBottom:"20px",fontWeight:600}}>{t.edition}</div>
            <div style={{display:"flex",alignItems:"center",gap:"6px",marginBottom:"16px"}}><div style={{width:"6px",height:"6px",borderRadius:"50%",background:"#4ADE80",animation:"pulse 2s infinite"}}/><span style={{fontFamily:F.mono,fontSize:"8px",letterSpacing:"0.25em",color:"#4ADE80",textTransform:"uppercase"}}>On Sale</span></div>
            <div style={{fontFamily:F.display,fontSize:"clamp(18px,2.2vw,28px)",fontWeight:700,letterSpacing:"0.06em",color:C.cream,marginBottom:"8px"}}>{t.event}</div>
            <div style={{fontFamily:F.sans,fontSize:"15px",color:C.red,marginBottom:"4px",fontWeight:600}}>{t.day} · {t.date}</div>
            <div style={{fontFamily:F.sans,fontSize:"12px",color:C.muted,marginBottom:"28px"}}>{t.city}, GA</div>
            <a href={t.url} target="_blank" rel="noopener noreferrer" onClick={e=>e.stopPropagation()} style={{fontFamily:F.sans,fontSize:"10px",fontWeight:700,letterSpacing:"0.15em",textTransform:"uppercase",color:C.cream,background:hov===i?C.red:"transparent",border:hov===i?`1px solid ${C.red}`:`1px solid ${C.border}`,padding:"14px 28px",textDecoration:"none",display:"inline-block",transition:"all 0.3s"}}>Buy Tickets →</a>
          </div>
        </div></Reveal>)}
      </div>
      <Reveal d={0.3}><div style={{marginTop:"3px",background:C.base,padding:"32px 36px",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"24px",borderLeft:`2px solid ${C.red}40`}}>
        <div><div style={{fontFamily:F.mono,fontSize:"8px",letterSpacing:"0.4em",textTransform:"uppercase",color:C.steel,marginBottom:"8px"}}>Groups & Sponsorships</div><div style={{fontFamily:F.display,fontSize:"clamp(16px,2vw,24px)",fontWeight:500,letterSpacing:"0.04em",color:C.cream}}>Bring your squad. Own the room.</div></div>
        <div style={{display:"flex",gap:"12px",flexWrap:"wrap"}}><a href="mailto:thekollectiveworldwide@gmail.com?subject=WRST BHVR Group Tickets" style={{fontFamily:F.sans,fontSize:"10px",fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase",color:C.cream,background:C.red,padding:"12px 28px",textDecoration:"none",display:"inline-block"}}>Group Entry</a><a href="mailto:thekollectiveworldwide@gmail.com?subject=WRST BHVR Sponsorship" style={{fontFamily:F.sans,fontSize:"10px",fontWeight:500,letterSpacing:"0.12em",textTransform:"uppercase",color:C.cream,background:"transparent",border:`1px solid ${C.border}`,padding:"12px 24px",textDecoration:"none",display:"inline-block"}}>Sponsor</a></div>
      </div></Reveal>
    </div>
  </section>
}

/* ── FAQ ── */
function FAQ(){
  const[open,setOpen]=useState<number|null>(null);
  const items=[
    {q:"What is WRST BHVR?",a:"Atlanta and DC's most talked-about nightlife brand — unapologetic energy, elite crowds, sounds that hit different. A KHG HugLife production."},
    {q:"What is Napkin Wars?",a:"Napkin Wars is the signature WRST BHVR experience — bottles, VIP tables, napkins flying, controlled chaos. The aftermath is the art."},
    {q:"Do I need a ticket?",a:"Yes. Entry is ticket-only through Eventbrite. Capacity is limited and every edition sells out."},
    {q:"What's the dress code?",a:"Dress to impress. No athletic wear. No exceptions. The room stays elite because the standard stays high."},
    {q:"Is there VIP access?",a:"Yes. VIP tables and bottle service packages available. Email thekollectiveworldwide@gmail.com or call 404.819.9609."},
    {q:"Which cities?",a:"Currently Atlanta and Washington DC. More cities loading in 2026."},
  ];
  return<section id="faq" style={{background:C.void,position:"relative",overflow:"hidden",padding:"100px 0"}}>
    <Grain/>
    <div style={{maxWidth:"900px",margin:"0 auto",padding:"0 clamp(32px,5vw,80px)",position:"relative",zIndex:10}}>
      <Reveal><div style={{display:"flex",alignItems:"center",gap:"16px",marginBottom:"16px"}}><Tag text="Frequently Asked"/><div style={{flex:1,height:"1px",background:C.border}}/></div>
      <h2 style={{fontFamily:F.display,fontSize:"clamp(36px,6vw,72px)",fontWeight:700,letterSpacing:"0.04em",color:C.cream,marginBottom:"48px",lineHeight:0.9}}>INTEL</h2></Reveal>
      <div style={{display:"flex",flexDirection:"column",gap:"2px"}}>
        {items.map((item,i)=><Reveal key={i} d={i*0.04}><div onClick={()=>setOpen(open===i?null:i)} style={{background:open===i?C.panel:C.surface,padding:"24px 28px",cursor:"pointer",borderLeft:`2px solid ${open===i?C.red:"transparent"}`,transition:"all 0.4s cubic-bezier(0.16,1,0.3,1)"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"16px"}}>
            <div style={{fontFamily:F.sans,fontSize:"clamp(14px,1.3vw,17px)",fontWeight:500,color:C.cream,lineHeight:1.4}}>{item.q}</div>
            <div style={{color:C.red,fontSize:"18px",flexShrink:0,transition:"transform 0.4s cubic-bezier(0.16,1,0.3,1)",transform:open===i?"rotate(45deg)":"rotate(0deg)",fontFamily:F.mono}}>+</div>
          </div>
          <div style={{maxHeight:open===i?"200px":"0",opacity:open===i?1:0,overflow:"hidden",transition:"all 0.5s cubic-bezier(0.16,1,0.3,1)"}}>
            <div style={{fontFamily:F.sans,fontSize:"14px",color:C.muted,lineHeight:1.85,paddingTop:"12px",paddingRight:"32px"}}>{item.a}</div>
          </div>
        </div></Reveal>)}
      </div>
    </div>
  </section>
}

/* ── CONTACT CTA ── */
function ContactCTA(){
  return<section style={{background:C.base,position:"relative",overflow:"hidden",padding:"80px 0"}}>
    <Grain/><div style={{position:"absolute",inset:0,background:`radial-gradient(ellipse at 50% 50%,${C.redGlow} 0%,transparent 45%)`}}/>
    <div style={{maxWidth:"1000px",margin:"0 auto",padding:"0 clamp(32px,5vw,80px)",position:"relative",zIndex:10,textAlign:"center"}}>
      <Reveal><Tag text="Contact // BHVR.EXE"/>
      <h2 style={{fontFamily:F.display,fontSize:"clamp(40px,8vw,120px)",fontWeight:700,letterSpacing:"0.06em",color:C.cream,lineHeight:0.85,margin:"24px 0"}}>READY?</h2>
      <p style={{fontFamily:F.sans,fontSize:"15px",color:C.muted,lineHeight:1.8,maxWidth:"400px",margin:"0 auto 40px"}}>Tables. Bottles. Group packages. Sponsorships. Whatever you need — we&apos;ll make it happen.</p></Reveal>
      <Reveal d={0.15}><div style={{display:"flex",gap:"16px",justifyContent:"center",flexWrap:"wrap",marginBottom:"48px"}}>
        <a href="#tickets" style={{fontFamily:F.sans,fontSize:"11px",fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:C.cream,background:C.red,padding:"18px 56px",textDecoration:"none",display:"inline-block"}}>Get Tickets</a>
        <a href="tel:4048199609" style={{fontFamily:F.mono,fontSize:"11px",fontWeight:500,letterSpacing:"0.12em",color:C.cream,background:"transparent",border:`1px solid ${C.border}`,padding:"18px 40px",textDecoration:"none",display:"inline-block"}}>404.819.9609</a>
      </div></Reveal>
      <Reveal d={0.25}><div style={{display:"flex",gap:"32px",justifyContent:"center",flexWrap:"wrap"}}>
        {[{l:"EMAIL",v:"thekollectiveworldwide@gmail.com"},{l:"PHONE",v:"404.819.9609"}].map((c,i)=><div key={i} style={{textAlign:"center"}}><div style={{fontFamily:F.mono,fontSize:"8px",letterSpacing:"0.4em",color:C.red,marginBottom:"6px"}}>{c.l}</div><div style={{fontFamily:F.sans,fontSize:"13px",color:C.muted}}>{c.v}</div></div>)}
      </div></Reveal>
    </div>
  </section>
}

/* ── FOOTER ── */
function Footer(){
  return<footer style={{background:C.void,borderTop:`1px solid ${C.border}`,padding:"48px clamp(32px,5vw,80px) 32px",position:"relative"}}>
    <Grain/>
    <div style={{maxWidth:"1400px",margin:"0 auto",display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:"24px",position:"relative",zIndex:10}}>
      <div>
        <div style={{display:"flex",alignItems:"center",gap:"12px",marginBottom:"8px"}}><GlitchText text="WRST BHVR" size="20px"/><div style={{width:"24px",height:"24px",borderRadius:"50%",border:`1.5px solid ${C.cream}40`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"12px"}}>&#9786;</div></div>
        <div style={{fontFamily:F.mono,fontSize:"8px",letterSpacing:"0.35em",color:C.red,marginBottom:"12px"}}>A KHG HUGLIFE EVENT</div>
        <div style={{fontFamily:F.mono,fontSize:"9px",color:C.dim,letterSpacing:"0.15em",lineHeight:2}}>ATLANTA · WASHINGTON DC · 2026</div>
      </div>
      <div style={{textAlign:"right"}}>
        <div style={{fontFamily:F.mono,fontSize:"8px",color:C.dim,letterSpacing:"0.2em",marginBottom:"8px"}}>POWERED BY THE KOLLECTIVE HOSPITALITY GROUP</div>
        <div style={{fontFamily:F.mono,fontSize:"8px",color:"rgba(255,255,255,0.1)",letterSpacing:"0.2em"}}>© 2026 WRST BHVR. ALL RIGHTS RESERVED. SYSTEM // ERROR // BHVR.EXE</div>
      </div>
    </div>
  </footer>
}

/* ── MAIN ── */
export default function WRSTBHVRSite(){
  return<div style={{background:C.void,minHeight:"100vh"}}>
    <Nav/><Hero/><Marquee/><EvidenceGallery/><FlyerShowcase/><BrandStory/>
    <div style={{height:"1px",width:"100%",background:`linear-gradient(90deg,transparent,${C.border},${C.red}30,${C.border},transparent)`}}/>
    <Tickets/><FAQ/><ContactCTA/><Footer/>
  </div>
}
