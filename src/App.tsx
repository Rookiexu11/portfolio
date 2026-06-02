import React, { useState } from 'react';
import { 
  Globe, Mail, Shield, Zap, Cpu, Network, 
  ChevronDown, ChevronUp, Layers, Compass, Award 
} from 'lucide-react';

// 中英文精细化文本字典 —— 完好保留，未改动任何一字
const content = {
  zh: {
    navTitle: "Martin Xu",
    contactBtn: "建立联系",
    heroHi: "你好，我是 Martin Xu。",
    heroSub: "正在积极进化的 AI 学习者 | B2B 科技大客销售 | 运行 🏃‍♂️ 马拉松跑者 & 热爱生活者",
    heroQuote: "“用坚韧攻坚大客户，用前沿工具拆解商业谜题。”",
    
    capTitle: "核心商业护城河",
    capSub: "基于第一性原理，构建自己的销售SOP。",
    caps: [
      {
        title: "复杂大单攻坚与客情操盘",
        desc: "专注 B2B 领域长周期、高客单价的复杂商业采购。擅长突破大型集团内部的“部门墙”，直击 C-Level 决策层核心诉求。通过精准的 ROI 宣导与 POC 方案共创，平衡业务、IT 与合规等多方诉求。"
      },
      {
        title: "业务线从 0 到 1 破局",
        desc: "具备极强的“拓荒”能力与创业者心态。擅长在陌生市场或全新产品线中快速锁定目标客户池，通过敏捷的市场测试与精准的 GTM 策略，独立跑通商业闭环。"
      },
      {
        title: "智能制造数字化洞察",
        desc: "深谙高端制造业的底层业务流。能够精准洞察传统企业在“敏捷迭代与严苛合规”之间的痛点，将前沿底层技术转化为驱动效能升级的商业解决方案。"
      },
      {
        title: "商业生态联盟与渠道构建",
        desc: "突破单一的直销边界，擅长利用“生态借力”。通过联动上下游互补厂商、系统集成商及行业咨询机构，构建极具竞争力的联合解决方案，实现资源的指数级放大。"
      }
    ],

    indTitle: "深水区行业实战攻坚",
    indSub: "点击行业卡片，查看核心痛点、独家解法与硬核操盘数据",
    inds: [
      {
        id: "mfg",
        name: "先进制造业",
        tag: "Advanced Manufacturing",
        icon: Cpu,
        pains: [
          "业务系统割裂：IT 研发工具链与底层物理硬件交互工具断层，形成严重数据孤岛。",
          "成本飙升与创新内卷：生产成本上涨，同时全球化竞争倒逼研发体系进行极致的敏捷迭代。",
          "数据安全红线：核心图纸与测试数据是企业命脉，对拥抱 AI 的泄密风险抱有极深恐惧。"
        ],
        solutions: [
          "统一研发底座：引入 DevSecOps 体系，将现代化软件工程与底层硬件交互工具链打通，减少跨部门审批与协作内耗。",
          "守住红线的 AI 赋能：推行纯本地化部署与 RAG 架构方案，确保核心资产数据“不出机房”的前提下接入大模型效率红利。"
        ],
        metrics: { dmu: "跨部门采购委员会 (CTO 推效率, CISO 卡安全, 采购控成本)", cycle: "6 - 12 个月 (长周期多轮 POC 攻坚)", size: "数十万至百万级人民币重型大单" }
      },
      {
        id: "tech",
        name: "智能科技与 AI 行业",
        tag: "Smart Tech & AI",
        icon: Network,
        pains: [
          "极客团队对工具极度挑剔：全员顶尖架构师与算法专家，对底层工具性能与工程美学要求极近洁癖。",
          "天下武功唯快不破：项目迭代以天为单位，面临极强的全球竞争，无法接受繁琐平庸的传统软件。",
          "视核心 IP 为生命线：算法模型资产是公司全部身家，对任何可能导致代码外流的漏洞零容忍。"
        ],
        solutions: [
          "建立技术共情：绝不进行条款式推销，通过自身手搓代码和独立部署 RAG 的实感，以技术同侪姿态赢得 CTO 信任。",
          "为野心加冕：接入满配全球安全认证的商业版方案，用原厂顶级 SLA 保障，解除其全速狂奔的后顾之忧。"
        ],
        metrics: { dmu: "自下而上 (工程师口碑) 与自上而下 (CTO/CEO 商业决策) 双向结合", cycle: "2 - 4 个月 (数据驱动型敏捷成交)", size: "高溢价的高 ARR 订阅合同，随业务规模自动扩容" }
      },
      {
        id: "game",
        name: "游戏与数字内容行业",
        tag: "Gaming & Digital Content",
        icon: Layers,
        pains: [
          "海量大文件与代码混杂：3D模型、4K贴图等重型二进制资产极大，传统 Git 极易崩溃，软硬研发协同脱节。",
          "全球分散团队协同瓶颈：跨国工作室、外包团队联合开发，每天传输数以 TB 计的文件，网络延迟导致工期延误。",
          "高频版本发布的灾难：持续集成 (CI) 流水线负荷极重，资产管理稍微不稳定即导致核心发布延误。"
        ],
        solutions: [
          "引入唯一真理源：推广 Helix Core 方案，完美统一程序代码与美术大文件，消除协同断层。",
          "售卖大厂方法论：跳出软件参数售卖，直接向工作室输出全球顶级 AAA 大厂的成熟产研流程，重构开发流水线。"
        ],
        metrics: { dmu: "工作室负责人 (Head of Studio)、技术总监、主制作人或独立工作室创始人", cycle: "两级分化 (大厂 6-9 个月论证体系迁移，小团队 1-2 周闪电成单)", size: "大厂顶级企业级授权 (ELA) 与中小团队高弹性席位费包并存" }
      }
    ],
    metricLabels: { dmu: "决策链 (DMU)", cycle: "成交周期", size: "标杆客单价" },

    phiTitle: "终章：商业洞察与销售哲学",
    phiLists: [
      {
        title: "宏观洞察：千行百业的共性生死劫",
        desc: "剥离业务表象，所有企业在数字化深水区的痛苦高度一致：碎片化系统的内耗、外部竞争带来的成本倒逼、以及如何安全吃下技术红利。企业的救赎，无外乎通过产品创新提效与组织架构升级去重塑核心竞争力。销售，则是这场转型的加速催化剂。"
      },
      {
        title: "AI 时代的销售第一性原理",
        desc: "在技术三个月一迭代的疯狂时代，背诵参数的销售终将被淘汰。回到第一性原理，销售的底层代码从未改变：精准解码客户决策层口头伪需求下的终局战略意图；将晦涩的技术翻译成客户能立刻算清账的‘降本增效合规’红利；通过精妙的利益战役编排，推动长周期大客订单闭环。"
      },
      {
        title: "卓越销售的进化模型",
        desc: "保持‘AI菜鸟’的空杯心态，手搓代码、独立部署场景，用技术共情力打破与架构师的隔阂；在复杂的利益矩阵中纵横捭阖，平衡技术激情与合规风控；将马拉松训练中习得的策略性耐力与复原力注入长周期大客攻坚，稳健地将项目带过终点线。"
      }
    ]
  },
  en: {
    navTitle: "Martin Xu",
    contactBtn: "Connect",
    heroHi: "Hi, I am Martin Xu.",
    heroSub: "A B2B Tech Sales exploring GenAI | 🏃‍♂️ Marathon Runner & Lifelong Learner",
    heroQuote: "\"Closing enterprise deals with strategic grit, solving complex puzzles with a tool-savvy mind.\"",
    
    capTitle: "Core Capabilities",
    capSub: "Building a proprietary sales SOP based on first-principles",
    caps: [
      {
        title: "Enterprise Deal-Making & Key Account Sales",
        desc: "Expertise in navigating long-cycle, high-value B2B enterprise sales. Skilled at breaking down organizational silos and aligning C-level strategic goals with customized PoC solutions to close complex deals and drive account growth."
      },
      {
        title: "Zero-to-One Business Expansion",
        desc: "Strong entrepreneurial mindset with a proven track record of launching new product lines and penetrating untapped markets. Adept at identifying Target Accounts, executing agile GTM strategies, and driving exponential revenue growth from scratch."
      },
      {
        title: "Smart Manufacturing Digitalization",
        desc: "Deep understanding of the business workflows in high-end manufacturing. Capable of translating cutting-edge infrastructure into robust business solutions that bridge the gap between agile innovation and strict compliance."
      },
      {
        title: "Ecosystem & Partnership Development",
        desc: "Deep understanding of the business workflows in high-end manufacturing. Capable of translating cutting-edge infrastructure into robust business solutions that bridge the gap between agile innovation and strict compliance."
      }
    ],

    indTitle: "Industry Showcase",
    indSub: "Click any industry card to reveal core pain points, unique solutions, and hard sales metrics.",
    inds: [
      {
        id: "mfg",
        name: "Advanced Manufacturing",
        tag: "Industrial & Auto Ecosystems",
        icon: Cpu,
        pains: [
          "Data Silos & IT/OT Divide: R&D software toolchains lack seamless integration with physical computer hardware interaction utilities.",
          "Cost Pressures & Agile R&D: Rising operational costs combined with brutal global competition forcing rapid, automotive-grade product lifecycles.",
          "Strict Data Compliance: Severe anxiety over IP leakage and strict industry regulations (e.g., ASPICE) hindering rapid AI/cloud technology adoption."
        ],
        solutions: [
          "Unifying the R&D Toolchain: Deploying DevSecOps systems to inject modern automation into legacy hardware testing workflows, eliminating cross-department friction.",
          "Compliance-First AI Enablement: Rolling out secure, fully localized RAG knowledge bases ensuring sensitive blueprints never leave the physical facility."
        ],
        metrics: { dmu: "Complex consensus sales involving CTO (Efficiency), CISO (Security), and Procurement (Cost).", cycle: "6 - 12 Months (Driven by rigorous, multi-stage PoCs).", size: "High-value, multi-million RMB heavy enterprise contracts." }
      },
      {
        id: "tech",
        name: "Smart Tech & AI Industry",
        tag: "Next-Gen Infrastructure",
        icon: Network,
        pains: [
          "Ultra-Strict Developer Standards: Elite teams of architects and scientists with a near-obsessive demand for pure software performance and engineering elegance.",
          "Hyper-Agile Sprints: Products iterating on a daily basis; absolutely zero patience for clunky, traditional enterprise deployment cycles.",
          "IP as the Corporate Lifeline: Algorithms and model weights are the entire company asset; zero tolerance for source code vulnerability."
        ],
        solutions: [
          "Peer-to-Peer Technical Empathy: Skipping boilerplate pitches. Leveraging personal coding experience to discuss architecture directly with Lead Architects to build core trust.",
          "Enterprise-Grade Guardrails: Transitioning open-source enthusiasts into enterprise buyers by backing up speed with elite safety compliance and high-availability SLAs."
        ],
        metrics: { dmu: "Bottom-up developer adoption combined with top-down C-level executive alignment (CTO/CEO).", cycle: "2 - 4 Months (Fast-paced, metric-driven sales).", size: "High-premium ARR contracts with exponential expansion potential based on usage." }
      },
      {
        id: "game",
        name: "Gaming & Digital Content",
        tag: "Heavy Asset Pipelines",
        icon: Layers,
        pains: [
          "Heavy Asset Version Crises: Massive binary assets (3D models, 4K textures) choke traditional VCS like Git, causing severe misalignment between artists and engineers.",
          "Distributed Team Sync Latency: Global co-development studios and out-sourcing partners syncing terabytes daily, creating massive pipeline blockages.",
          "CI/CD Build Bottlenecks: Hyper-frequent build-and-release cycles require maximum infrastructure stability; any minor tool downtime delays time-to-market."
        ],
        solutions: [
          "Establishing the Single Source of Truth: Advocating for Helix Core to unify source code and massive art assets under a single repository architecture.",
          "Selling Best-Practices: Acting as a pipeline consultant to scale top-tier global AAA production methodologies to studios to accelerate their GTM pipelines."
        ],
        metrics: { dmu: "Head of Studio, Tech Director, Lead Producer, or Indie Studio Founders.", cycle: "Bifurcated: 6-9 months for AAA enterprise migrations; 1-2 weeks for velocity indie deals.", size: "Polarized: Multi-year Enterprise License Agreements (ELAs) vs. high-velocity team bundle packs." }
      }
    ],
    metricLabels: { dmu: "Decision Unit (DMU)", cycle: "Sales Cycle", size: "Deal Size" },

    phiTitle: "Insights & Sales Philosophy",
    phiLists: [
      {
        title: "Universal Enterprise Pain Points",
        desc: "Regardless of the sector—be it manufacturing, AI, or gaming—every enterprise fights the same upstream battle: breaking down system silos, conquering rising operational costs, and managing secure tech adoption. The final answer always lies in product innovation and organizational agility. Sales is the ultimate catalyst for this evolution."
      },
      {
        title: "The First-Principles of Sales in the AI Era",
        desc: "In an era where tech disrupts overnight, feature-reciting sales will be automated away. Returning to first principles, the core sales code remains unchanged: decoding the unspoken C-level intent underneath corporate camouflage, translating complex infrastructure into clear ROI/compliance metrics, and orchestrating complex multi-party consensus to drive structural closure."
      },
      {
        title: "The Modern Tech Sales Evolution Model",
        desc: "Maintaining a 'rookie's hunger for learning' to code and deploy architectures independently to build peer trust with CTOs. Seamlessly navigating complex human matrices to balance developer passion with executive risk mitigation. Infusing the strategic endurance and psychological resilience of marathon training into grueling enterprise sales cycles to cross the finish line."
      }
    ]
  }
};

export default function App() {
  const [lang, setLang] = useState('zh');
  const [activeInd, setActiveInd] = useState(null);

  const t = content[lang];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-500/20 selection:text-blue-900 antialiased">
      
      {/* 导航栏 */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-slate-200/80 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-slate-900 bg-clip-text text-transparent">
            {t.navTitle}
          </span>
          <div className="flex items-center gap-4 sm:gap-6">
            <button 
              onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
              className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-600 hover:text-blue-600 border border-slate-200 hover:border-blue-500/30 bg-white px-3 py-1.5 rounded-full shadow-sm transition-all"
            >
              <Globe className="w-3.5 h-3.5 text-slate-400" />
              {lang === 'zh' ? 'EN' : '中文'}
            </button>
            <a 
              href="mailto:Rookiexu11@proton.me"
              className="flex items-center gap-1.5 text-xs sm:text-sm text-white bg-slate-900 hover:bg-slate-800 px-4 py-1.5 rounded-full font-semibold transition-all hover:scale-[1.02] shadow-sm"
            >
              <Mail className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{t.contactBtn}</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero 首屏区 */}
      <section className="relative overflow-hidden pt-20 pb-16 sm:pt-32 sm:pb-24 border-b border-slate-200/60">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.05),transparent_45%)]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-600 bg-clip-text text-transparent">
            {t.heroHi}
          </h1>
          <p className="text-base sm:text-xl text-slate-600 font-normal max-w-2xl mx-auto mb-8 leading-relaxed">
            {t.heroSub}
          </p>
          <div className="inline-block bg-white border border-slate-200 rounded-xl px-6 py-4 max-w-xl mx-auto backdrop-blur shadow-sm">
            <p className="text-xs sm:text-sm italic text-blue-600 font-medium tracking-wide">
              {t.heroQuote}
            </p>
          </div>
        </div>
      </section>

      {/* 核心护城河模块 */}
      <section className="py-16 sm:py-24 border-b border-slate-200/60 bg-slate-100/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-3">{t.capTitle}</h2>
            <p className="text-sm sm:text-base text-slate-500">{t.capSub}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {t.caps.map((cap, idx) => (
              <div key={idx} className="group border border-slate-200/80 bg-white hover:bg-slate-50/50 p-6 rounded-2xl transition-all duration-300 hover:border-slate-300 hover:shadow-md shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center mb-4 border border-slate-200 text-slate-500 group-hover:text-blue-600 group-hover:border-blue-500/20 group-hover:bg-blue-50 transition-all">
                  {idx === 0 && <Shield className="w-4 h-4" />}
                  {idx === 1 && <Zap className="w-4 h-4" />}
                  {idx === 2 && <Cpu className="w-4 h-4" />}
                  {idx === 3 && <Compass className="w-4 h-4" />}
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{cap.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 行业深度展示模块 */}
      <section className="py-16 sm:py-24 border-b border-slate-200/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-3">{t.indTitle}</h2>
            <p className="text-sm sm:text-base text-slate-500">{t.indSub}</p>
          </div>
          <div className="space-y-4">
            {t.inds.map((ind) => {
              const IconComp = ind.icon;
              const isOpen = activeInd === ind.id;
              return (
                <div 
                  key={ind.id} 
                  className={`border rounded-2xl overflow-hidden transition-all duration-300 bg-white ${isOpen ? 'border-blue-500/30 ring-1 ring-blue-500/10 shadow-md' : 'border-slate-200 hover:border-slate-300 shadow-sm'}`}
                >
                  <button
                    onClick={() => setActiveInd(isOpen ? null : ind.id)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-colors ${isOpen ? 'bg-blue-50 border-blue-200 text-blue-600' : 'bg-slate-50 border-slate-200 text-slate-500'}`}>
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900">{ind.name}</h3>
                        <p className="text-xs text-slate-400 uppercase tracking-wider mt-0.5">{ind.tag}</p>
                      </div>
                    </div>
                    {isOpen ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                  </button>
                  
                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 sm:pb-8 border-t border-slate-100 pt-5 space-y-6 animate-fadeIn">
                      {/* 痛点 */}
                      <div>
                        <h4 className="text-xs font-bold text-red-600 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                          {lang === 'zh' ? '核心痛点' : 'Core Pain Points'}
                        </h4>
                        <ul className="space-y-2">
                          {ind.pains.map((p, i) => (
                            <li key={i} className="text-xs sm:text-sm text-slate-600 pl-4 relative before:absolute before:left-0 before:top-2 before:w-1 before:h-1 before:bg-slate-300 before:rounded-full">{p}</li>
                          ))}
                        </ul>
                      </div>
                      {/* 解法 */}
                      <div>
                        <h4 className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          {lang === 'zh' ? '破局解法' : 'My Solutions'}
                        </h4>
                        <ul className="space-y-2">
                          {ind.solutions.map((s, i) => (
                            <li key={i} className="text-xs sm:text-sm text-slate-700 pl-4 relative before:absolute before:left-0 before:top-2 before:w-1 before:h-1 before:bg-emerald-500/40 before:rounded-full">{s}</li>
                          ))}
                        </ul>
                      </div>
                      {/* 指标 */}
                      <div className="pt-4 border-t border-slate-100">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-slate-50 border border-slate-100 p-4 rounded-xl">
                          <div>
                            <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">{t.metricLabels.dmu}</span>
                            <span className="text-xs sm:text-sm text-slate-700 font-medium">{ind.metrics.dmu}</span>
                          </div>
                          <div>
                            <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">{t.metricLabels.cycle}</span>
                            <span className="text-xs sm:text-sm text-slate-700 font-medium">{ind.metrics.cycle}</span>
                          </div>
                          <div>
                            <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">{t.metricLabels.size}</span>
                            <span className="text-xs sm:text-sm text-blue-600 font-bold">{ind.metrics.size}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 销售哲学收尾模块 */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-1.5 border border-slate-200 bg-white px-3 py-1 rounded-full text-xs font-semibold text-slate-500 mb-4 shadow-sm">
              <Award className="w-3.5 h-3.5 text-blue-500" />
              First-Principles
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">{t.phiTitle}</h2>
          </div>
          <div className="space-y-8 sm:space-y-12">
            {t.phiLists.map((item, idx) => (
              <div key={idx} className="relative pl-6 sm:pl-8 border-l-2 border-slate-200/80 group hover:border-blue-500/40 transition-colors">
                <div className="absolute -left-[6px] top-1 w-2.5 h-2.5 rounded-full bg-slate-200 border-2 border-white group-hover:bg-blue-500 transition-colors" />
                <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="border-t border-slate-200 py-12 text-center text-xs text-slate-400 bg-white">
        <p className="mb-2">Martin Xu &copy; 2026. Secure &amp; Curated Enterprise Portfolio.</p>
        <p className="text-slate-500">Powered by React &amp; Tailwind. Built with absolute GTM dedication.</p>
      </footer>
    </div>
  );
}