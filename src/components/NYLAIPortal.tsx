import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Scale, TrendingUp, ClipboardList, ShieldCheck, Banknote } from 'lucide-react';
import { AuroraBackground } from './ui/aurora-background';

/* ── Assets ──────────────────────────────────────────────────── */
const NYL_LOGO  = 'https://www.figma.com/api/mcp/asset/788a8550-e208-479c-ad40-23fd8b7875e4';
const ROBOT_IMG = '/icons/main_bot.png';

/* ── Orbit — 6 icons evenly at 60° ──────────────────────────── */
const R    = 162;
const BOX  = 390;
const ICON = 62;
const SPD  = 44;

const ORBIT_ICONS = [
  { a:   0, src: '/icons/icon1.png' },
  { a:  60, src: '/icons/icon2.png' },
  { a: 120, src: '/icons/icon3.png' },
  { a: 180, src: '/icons/icon4.png' },
  { a: 240, src: '/icons/icon5.png' },
  { a: 300, src: '/icons/icon6.png' },
];

const ipos = (a: number) => {
  const r = (a - 90) * (Math.PI / 180);
  return { left: BOX/2 + R*Math.cos(r) - ICON/2, top: BOX/2 + R*Math.sin(r) - ICON/2 };
};

/* ── Card data ───────────────────────────────────────────────── */
const ROW1 = [
  {
    cat:'CLAIMS',       catC:'#3B82F6', topB:'#93C5FD',
    title:'Claims Intake Agent',
    desc:'Processes incoming claims documents, extracts key data, performs initial assessment.',
    tags:['Document OCR','Fraud Detection','Auto-routing'],
    metric:'50%', sub:'effort reduction',
    iconBg:'#EFF6FF', Icon:ClipboardList, iconC:'#3B82F6', view:false,
  },
  {
    cat:'UNDERWRITING', catC:'#0D9488', topB:'#5EEAD4',
    title:'Risk Assessment Agent',
    desc:'Analyzes applicant profiles, market data, and historical patterns to generate risk scores.',
    tags:['Risk Scoring','Market Analysis','Compliance'],
    metric:'35%', sub:'faster decisions',
    iconBg:'#F0FDFA', Icon:ShieldCheck, iconC:'#0D9488', view:true,
  },
  {
    cat:'LENDING',      catC:'#D97706', topB:'#FCD34D',
    title:'Loan Processing Agent',
    desc:'Streamlines loan applications from submission to decision with intelligent document handling.',
    tags:['Doc Verification','Credit Analysis','Auto-Decision'],
    metric:'60%', sub:'faster processing',
    iconBg:'#FFFBEB', Icon:Banknote, iconC:'#D97706', view:false,
  },
];

const ROW2 = [
  {
    cat:'EMAIL',        catC:'#EF4444', topB:'#FCA5A5',
    title:'Email Triage Agent',
    desc:'Classifies incoming emails, extracts intent and urgency, and routes to appropriate workflows.',
    tags:['Intent Detection','Priority Scoring','Auto-Reply'],
    metric:'70%', sub:'response time ↓',
    iconBg:'#FEF2F2', Icon:Mail, iconC:'#EF4444', view:false,
  },
  {
    cat:'CLAIMS',       catC:'#3B82F6', topB:'#93C5FD',
    title:'Settlement Agent',
    desc:'Calculates optimal settlement amounts using policy terms, damage assessments, and precedent data.',
    tags:['Settlement Calc','Negotiation AI','Payout Logic'],
    metric:'45%', sub:'settlement time ↓',
    iconBg:'#EFF6FF', Icon:Scale, iconC:'#3B82F6', view:false,
  },
  {
    cat:'UNDERWRITING', catC:'#10B981', topB:'#6EE7B7',
    title:'Pricing Engine Agent',
    desc:'Generates optimal premium prices based on risk profiles, market conditions, and competitive analysis.',
    tags:['Dynamic Pricing','Competitor Intel','Margin Optimization'],
    metric:'18%', sub:'margin improvement',
    iconBg:'#F0FDF4', Icon:TrendingUp, iconC:'#10B981', view:false,
  },
];

const ALL_TABS = ['All Agents','Claims','Underwriting','Lending','Email Ops'];

type CardData = typeof ROW1[number];

/* ── Card component ──────────────────────────────────────────── */
function AgentCard({ c }: { c: CardData }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'rgba(255,255,255,0.82)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderRadius: 14,
        padding: '16px 20px 18px',
        borderTop: `3px solid ${c.topB}`,
        border: hovered ? `1px solid ${c.topB}` : '1px solid rgba(255,255,255,0.6)',
        borderTopWidth: 3,
        boxShadow: hovered
          ? `0 12px 32px rgba(0,0,0,0.13), 0 0 0 0px ${c.catC}22`
          : '0 2px 8px rgba(0,0,0,0.06)',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        transition: 'all 0.22s ease',
        cursor: 'default',
      }}
    >
      <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', marginBottom:10 }}>
        <div style={{
          width:38, height:38, borderRadius:9,
          background: c.iconBg,
          display:'flex', alignItems:'center', justifyContent:'center',
          transition: 'transform 0.2s ease',
          transform: hovered ? 'scale(1.08)' : 'scale(1)',
        }}>
          <c.Icon size={18} color={c.iconC} strokeWidth={1.8} />
        </div>
        <span style={{ fontSize:10, fontWeight:700, letterSpacing:'0.09em', color:c.catC, textTransform:'uppercase' }}>
          {c.cat}
        </span>
      </div>

      <h3 style={{ color:'#0f2a45', fontWeight:700, fontSize:14, margin:'0 0 4px' }}>{c.title}</h3>
      <p style={{
        color:'#9ca3af', fontSize:12, lineHeight:1.55, margin:'0 0 10px',
        display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient:'vertical', overflow:'hidden',
      }}>{c.desc}</p>

      <div style={{ display:'flex', flexWrap:'wrap', gap:5, marginBottom:12 }}>
        {c.tags.map(tag => (
          <span key={tag} style={{
            fontSize:10, fontWeight:500, padding:'2px 8px',
            borderRadius:999, background:'#f3f4f6', color:'#6b7280',
            transition:'background 0.15s',
          }}>{tag}</span>
        ))}
      </div>

      <div style={{ borderTop:'1px solid rgba(0,0,0,0.06)', paddingTop:10, display:'flex', alignItems:'center', justifyContent:'space-between' }}>
        <div style={{ display:'flex', alignItems:'baseline', gap:5 }}>
          <span style={{ fontSize:24, fontWeight:800, color:c.catC, lineHeight:1 }}>{c.metric}</span>
          <span style={{ fontSize:11, color:'#9ca3af' }}>{c.sub}</span>
        </div>
        {c.view && (
          <span style={{
            fontSize:13, fontWeight:600, color:'#374151', cursor:'pointer',
            transition:'color 0.15s, transform 0.15s',
            display:'inline-block',
          }}
            onMouseEnter={e => { (e.target as HTMLElement).style.color = c.catC; (e.target as HTMLElement).style.transform = 'translateX(3px)'; }}
            onMouseLeave={e => { (e.target as HTMLElement).style.color = '#374151'; (e.target as HTMLElement).style.transform = 'translateX(0)'; }}
          >View →</span>
        )}
      </div>
    </div>
  );
}

/* ── Page ────────────────────────────────────────────────────── */
export default function NYLAIPortal() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <AuroraBackground>

      {/* ── Header ─────────────────────────────────────────── */}
      <header style={{
        display:'flex', alignItems:'center', justifyContent:'space-between',
        padding:'11px 32px',
        background:'rgba(255,255,255,0.72)',
        backdropFilter:'blur(16px)',
        WebkitBackdropFilter:'blur(16px)',
        borderBottom:'1px solid rgba(255,255,255,0.5)',
        boxShadow:'0 1px 3px rgba(0,0,0,0.06)',
        position:'sticky', top:0, zIndex:50,
      }}>
        <div style={{ display:'flex', alignItems:'center', gap:12 }}>
          <img src={NYL_LOGO} alt="NYL" style={{ width:38, height:38, borderRadius:8, objectFit:'cover' }} />
          <div style={{ width:1, height:26, background:'rgba(0,0,0,0.12)' }} />
          <span style={{ color:'#0f2a45', fontWeight:700, fontSize:14.5, letterSpacing:'0.02em' }}>
            NYL - AgentHub
          </span>
        </div>
        <div style={{ display:'flex', alignItems:'center', gap:8, fontSize:13, color:'#6b7280' }}>
          <span style={{ width:8, height:8, borderRadius:'50%', background:'#10b981', display:'inline-block', boxShadow:'0 0 0 3px rgba(16,185,129,0.2)' }} />
          All systems operational
        </div>
      </header>

      {/* ── Body ───────────────────────────────────────────── */}
      <div style={{ maxWidth:1280, margin:'0 auto', padding:'18px 20px 28px' }}>

        {/* ── Hero ───────────────────────────────────────────── */}
        <div style={{
          background:'transparent',
          borderRadius:20,
          overflow:'hidden',
          display:'flex',
          alignItems:'stretch',
          marginBottom:16,
          minHeight:420,
        }}>

          {/* Left copy — no background, transparent */}
          <div style={{ flex:'0 0 500px', padding:'52px 44px 52px 52px', display:'flex', flexDirection:'column', justifyContent:'center' }}>
            <h1 style={{ color:'#0f2a45', fontSize:38, fontWeight:800, lineHeight:1.18, margin:'0 0 14px' }}>
              Choose your<br />AI Agent
            </h1>
            <p style={{ color:'#4b5563', fontSize:14.5, lineHeight:1.65, margin:'0 0 28px' }}>
              Deploy intelligent agents across claims, underwriting,<br />
              lending, and operations workflows.
            </p>

            {/* Tabs — single row, no background */}
            <div style={{ display:'flex', gap:7, flexWrap:'nowrap' }}>
              {ALL_TABS.map((tab, i) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(i)}
                  style={{
                    padding:'7px 15px', borderRadius:999, whiteSpace:'nowrap',
                    fontSize:12.5, fontWeight:500, cursor:'pointer',
                    border: activeTab === i ? 'none' : '1.5px solid rgba(0,0,0,0.15)',
                    background: activeTab === i ? '#0f2a45' : 'rgba(255,255,255,0.7)',
                    color: activeTab === i ? '#fff' : '#374151',
                    fontFamily:'inherit',
                    transition:'all 0.18s ease',
                    transform:'scale(1)',
                    boxShadow: activeTab === i ? '0 2px 10px rgba(15,42,69,0.25)' : 'none',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget;
                    if (activeTab !== i) {
                      el.style.background = 'rgba(255,255,255,0.95)';
                      el.style.borderColor = '#0f2a45';
                      el.style.transform = 'scale(1.04)';
                    }
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget;
                    if (activeTab !== i) {
                      el.style.background = 'rgba(255,255,255,0.7)';
                      el.style.borderColor = 'rgba(0,0,0,0.15)';
                      el.style.transform = 'scale(1)';
                    }
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Right — fully transparent, aurora shows through */}
          <div style={{ flex:1, display:'flex', alignItems:'center', justifyContent:'center', padding:'16px 8px' }}>
            <div style={{ position:'relative', width:BOX, height:BOX }}>

              {/* Dashed ring */}
              <div style={{
                position:'absolute', borderRadius:'50%',
                width:R*2, height:R*2, left:BOX/2-R, top:BOX/2-R,
                border:'2px dashed rgba(99,102,241,0.4)',
              }} />

              {/* Centre glow */}
              <div style={{
                position:'absolute', borderRadius:'50%',
                width:210, height:210, left:BOX/2-105, top:BOX/2-105,
                background:'radial-gradient(circle, rgba(99,102,241,0.10) 0%, transparent 70%)',
              }} />

              {/* Orbiting icons */}
              <motion.div
                style={{ position:'absolute', inset:0 }}
                animate={{ rotate:360 }}
                transition={{ duration:SPD, repeat:Infinity, ease:'linear' }}
              >
                {ORBIT_ICONS.map((item, i) => {
                  const p = ipos(item.a);
                  return (
                    <motion.div key={i}
                      style={{ position:'absolute', width:ICON, height:ICON, left:p.left, top:p.top }}
                      animate={{ rotate:-360 }}
                      transition={{ duration:SPD, repeat:Infinity, ease:'linear' }}
                    >
                      <img src={item.src} alt="" style={{
                        width:'100%', height:'100%', objectFit:'contain',
                        filter:'drop-shadow(0 4px 10px rgba(0,0,0,0.15))',
                      }} />
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Robot — float */}
              <motion.div
                style={{ position:'absolute', width:188, height:262, left:BOX/2-94, top:BOX/2-140 }}
                animate={{ y:[-9, 9, -9] }}
                transition={{ duration:3.2, repeat:Infinity, ease:'easeInOut' }}
              >
                <img src={ROBOT_IMG} alt="AI Chatbot" style={{
                  width:'100%', height:'100%', objectFit:'contain',
                  filter:'drop-shadow(0 18px 36px rgba(0,0,0,0.18))',
                }} />
              </motion.div>

            </div>
          </div>
        </div>

        {/* ── Cards ──────────────────────────────────────────── */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:12, marginBottom:12 }}>
          {ROW1.map(c => <AgentCard key={c.title} c={c} />)}
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:12 }}>
          {ROW2.map(c => <AgentCard key={c.title} c={c} />)}
        </div>

      </div>
    </AuroraBackground>
  );
}
