export const zh = {
  nav: {
    business: '业务',
    product: '产品',
    about: '关于我们',
    contact: '联系我们',
  },
  langLabel: 'EN',
  tagline: '念念不忘，必有回音',
  hero: {
    lead: '念念不忘，',
    accent: '必有回音',
    subtitle: '只为让 AI 更懂你',
  },
  business: {
    items: [
      {
        name: '私人助理',
        desc: '记住你的日程、事务与习惯，主动帮你安排和提醒；数据存在本地，只属于你。',
        tags: ['日程管理', '事务提醒', '本地部署', '数据私有'],
      },
      {
        name: '情感伴侣',
        desc: '记得住你说过的每句话，对话不再从零开始——始终在场，越聊越懂你。',
        tags: ['长期记忆', '多角色', '延续对话'],
      },
      {
        name: '资讯管家',
        desc: '读懂你长期的兴趣，替你筛选、聚合并摘要每天的信息，把时间留给真正重要的内容。',
        tags: ['个性化', '聚合摘要', '降噪'],
      },
      {
        name: '投研助手',
        desc: '记住你关注的市场，帮你梳理行情、沉淀研究，为每一次决策提供支持。',
        tags: ['行情梳理', '研究支持', '辅助决策'],
      },
      {
        name: '学习伙伴',
        desc: '记住你的学习轨迹与薄弱点，帮你查漏补缺，把知识一点点真正沉淀下来。',
        tags: ['进度跟踪', '查漏补缺', '知识沉淀'],
      },
    ],
  },
  product: {
    title: '产品',
    name: 'Pikppo',
    tagline: '你的私人 AI 管家',
    desc: '念音在“私人助理”方向的首款产品。以长期记忆为核心，让每一次对话都能被延续和回应；采用本地优先架构，把数据和记忆都留在你自己手里。',
    features: [
      { name: '本地优先架构', desc: '模型可在用户设备端运行，无需把数据交给云端。' },
      { name: '多角色形态', desc: '每个角色拥有独立的记忆与性格，互不干扰。' },
      { name: '端到端加密', desc: '长期记忆加密存储，任何人无法读取，包括我们。' },
    ],
    cta: '访问 pikppo.com',
    url: 'https://pikppo.com',
  },
  about: {
    eyebrow: '关于念音',
    lead: '让 AI 拥有你的专属记忆',
    leadAccent: '念念不忘，必有回音',
    body: [
      '北京念音科技有限公司是一家专注于人工智能应用与软件研发的科技公司，致力于将前沿的 AI 能力转化为真正贴近个人需求的产品与服务。',
      '公司当前的核心方向是个人 AI 助理产品的研发，围绕“本地优先、数据自主、长期陪伴”的理念，以长期记忆为核心，打造一款尊重用户隐私、能够长期理解并服务于个人的智能助理。在技术上，公司深耕大模型应用、检索增强（RAG）、本地化推理与多端协同等方向，注重在工程能力与产品体验上的扎实积累。',
      '除个人 AI 助理外，念音科技的业务范围还涵盖人工智能应用软件开发、技术咨询与服务、软件设计与开发、数字内容应用等领域，为有需要的客户与合作伙伴提供 AI 相关的技术支持与解决方案。',
      '念音科技秉持“高标准、重体验”的产品理念，以工匠精神打磨每一款产品，追求做出自己也愿意长期使用的好工具。',
    ],
  },
  contact: {
    title: '联系我们',
    emailLabel: '邮箱',
    email: 'contact@nianien.com',
    addressLabel: '地址',
    address: '北京市东城区朝阳门北小街14号3层355室',
    wechat: '微信扫码关注公众号',
  },
  footer: {
    desc: '只为让 AI 更懂你。',
    company: '北京念音科技有限公司',
    rights: 'All rights reserved.',
    icp: '京ICP备2026025309号-1',
    icpUrl: 'https://beian.miit.gov.cn/',
  },
};

export type Dict = typeof zh;
export type Lang = 'zh' | 'en';

export const en: Dict = {
  nav: {
    business: 'Business',
    product: 'Product',
    about: 'About',
    contact: 'Contact',
  },
  langLabel: '中',
  tagline: 'What you remember, answers back',
  hero: {
    lead: 'What you remember, ',
    accent: 'answers back',
    subtitle: 'AI, made to understand you',
  },
  business: {
    items: [
      {
        name: 'Personal Assistant',
        desc: 'Remembers your schedule, tasks, and habits, then plans and reminds you on its own — data stays on your device, yours alone.',
        tags: ['Scheduling', 'Reminders', 'On-device', 'Private data'],
      },
      {
        name: 'Companion',
        desc: 'Remembers every word you’ve said, so conversations never start from scratch — always there, understanding you more over time.',
        tags: ['Long-term memory', 'Multi-persona', 'Continuous dialogue'],
      },
      {
        name: 'News Steward',
        desc: 'Learns your long-term interests, then filters, aggregates, and summarizes each day’s information — leaving your time for what truly matters.',
        tags: ['Personalized', 'Aggregate & summarize', 'Noise-free'],
      },
      {
        name: 'Research Assistant',
        desc: 'Remembers the markets you follow, organizes the moves, and builds up research to support every decision.',
        tags: ['Market tracking', 'Research support', 'Decision aid'],
      },
      {
        name: 'Study Partner',
        desc: 'Remembers your learning path and weak spots, helps you fill the gaps, and makes knowledge truly stick over time.',
        tags: ['Progress tracking', 'Gap-filling', 'Retention'],
      },
    ],
  },
  product: {
    title: 'Product',
    name: 'Pikppo',
    tagline: 'Your personal AI butler',
    desc: 'Nianien’s first product, in the Personal Assistant direction. Built around long-term memory so every conversation continues and responds; a local-first architecture keeps your data and memories in your own hands.',
    features: [
      { name: 'Local-first architecture', desc: 'Models can run on your own device — no need to hand data to the cloud.' },
      { name: 'Multiple personas', desc: 'Each persona has its own memory and character, kept fully separate.' },
      { name: 'End-to-end encryption', desc: 'Long-term memory is encrypted — no one can read it, not even us.' },
    ],
    cta: 'Visit pikppo.com',
    url: 'https://pikppo.com',
  },
  about: {
    eyebrow: 'About Nianien',
    lead: 'Giving AI a memory that’s truly yours',
    leadAccent: 'What you remember, answers back',
    body: [
      'Beijing Nianien Technology Co., Ltd. is a technology company focused on AI applications and software R&D, devoted to turning frontier AI capabilities into products and services that genuinely fit personal needs.',
      'Our current focus is building a personal AI assistant. Guided by the principles of local-first, data ownership, and long-term companionship, and built around long-term memory, we’re creating an assistant that respects your privacy and understands you over time. Technically, we invest deeply in LLM applications, retrieval-augmented generation (RAG), on-device inference, and multi-device coordination — with a steady commitment to engineering depth and product experience.',
      'Beyond the personal AI assistant, Nianien’s scope spans AI application software development, technical consulting and services, software design and development, and digital content applications — providing AI-related technical support and solutions to the clients and partners who need them.',
      'Nianien holds to a “high standard, experience-first” product philosophy, crafting every product with care, and aiming to build good tools we’d want to use ourselves for the long run.',
    ],
  },
  contact: {
    title: 'Contact',
    emailLabel: 'Email',
    email: 'contact@nianien.com',
    addressLabel: 'Address',
    address: 'Room 355, 3F, No.14 Chaoyangmen Beixiaojie, Dongcheng District, Beijing',
    wechat: 'Scan to follow us on WeChat',
  },
  footer: {
    desc: 'AI, made to understand you.',
    company: 'Beijing Nianien Technology Co., Ltd.',
    rights: 'All rights reserved.',
    icp: '京ICP备2026025309号-1',
    icpUrl: 'https://beian.miit.gov.cn/',
  },
};

export const dict: Record<Lang, Dict> = { zh, en };
